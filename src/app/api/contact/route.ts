import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL_FROM, TEAM_INBOX, block, cleanEmail, cleanText, jsonObject, layout, oneLine } from "@/lib/email";
import { passedTurnstile } from "@/lib/turnstile";

const LIMITS = { name: 100, subject: 150, message: 5000 };

/**
 * Contact form: the message goes to the team inbox, and replying to it
 * answers the sender directly. No email goes to the address the visitor
 * typed: that would let anyone send Zyon mail to strangers and hurt delivery
 * of sign-up codes. A Cloudflare Turnstile check must pass first, so bots
 * cannot flood the team inbox.
 */
export async function POST(request: Request) {
  const body = await jsonObject(request);
  const name = cleanText(body?.name);
  const email = cleanEmail(body?.email);
  const subject = cleanText(body?.subject);
  const message = cleanText(body?.message);
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Please fill in every field with a valid email address." }, { status: 400 });
  }
  if (name.length > LIMITS.name || subject.length > LIMITS.subject || message.length > LIMITS.message) {
    return NextResponse.json(
      { error: `Please keep the name under ${LIMITS.name}, the subject under ${LIMITS.subject} and the message under ${LIMITS.message} characters.` },
      { status: 400 },
    );
  }

  if (!(await passedTurnstile(body?.turnstileToken, request.headers.get("cf-connecting-ip")))) {
    return NextResponse.json({ error: "Please complete the security check and try again." }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: TEAM_INBOX,
      replyTo: email,
      subject: `[Contact] ${oneLine(subject)}`,
      html: layout({
        title: "New message from the website",
        preheader: `${oneLine(name)}: ${oneLine(subject)}`,
        body:
          block.rows([
            ["From", oneLine(name)],
            ["Email", email],
            ["Subject", oneLine(subject)],
          ]) +
          block.quote(message) +
          block.small("Reply to this email to answer them directly."),
        footer: "Sent to the Zyon team from the contact form on zyonrides.com.",
      }),
    });
    if (error) throw new Error(error.message);
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}
