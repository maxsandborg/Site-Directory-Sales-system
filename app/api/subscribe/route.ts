import { NextResponse } from "next/server";

/**
 * Newsletter subscription endpoint.
 *
 * Stub implementation — stores email server-side for now.
 * Wire to Mailchimp, ConvertKit, Resend, etc. when ready:
 *   const res = await fetch("https://api.convertkit.com/v3/forms/FORM_ID/subscribe", { ... })
 */
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: Wire to email provider (Mailchimp, ConvertKit, Resend Audiences, etc.)
    // For now, log and return success so the UI flow works end-to-end.
    console.log(`[subscribe] New subscriber: ${email}`);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
