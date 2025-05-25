import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  try {
    const { firstName, email, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'riad.reda.fethi@gmail.com',
      subject: `Message from ${firstName}`,
      html: `<p>From: ${firstName} (${email})</p><p>Message: ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
