import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "BGlory Rides <onboarding@resend.dev>",
      to: "contact@bgloryrides.com",
      subject: "[Waitlist] New signup",
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #0f1419;">New Waitlist Signup</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb;" />
          <p><strong>Email:</strong> ${email}</p>
          <p style="color: #6b7280; font-size: 14px;">This person joined the BGlory Rides waitlist and wants early access.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  }
}
