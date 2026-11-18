import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL_FROM, TEAM_INBOX, block, cleanEmail, jsonObject, layout } from "@/lib/email";
import { passedTurnstile } from "@/lib/turnstile";

/**
 * Waitlist: tells the team. Nothing is sent to the address typed in, for the
 * same reason as the contact form, and the same Turnstile check runs first.
 */
export async function POST(request: Request) {
  const body = await jsonObject(request);
  const email = cleanEmail(body?.email);
  if (!email) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
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
      subject: "[Waitlist] New signup",
      html: layout({
        title: "New waitlist signup",
        preheader: `${email} wants early access.`,
        body: block.rows([["Email", email]]) + block.small("They joined the Zyon waitlist from zyonrides.com."),
        footer: "Sent to the Zyon team from the waitlist on zyonrides.com.",
      }),
    });
    if (error) throw new Error(error.message);
  } catch {
    return NextResponse.json({ error: "Failed to join waitlist. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}
