import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, project } = body;

    if (!name || !email || !project) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rahulsingh.dev.36@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Project Details:</strong></p>
        <p>${project}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
