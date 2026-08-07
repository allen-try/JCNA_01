import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email, service_type } = body;

    // 1. Send confirmation to the inquirer
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Your ${service_type} Request Has Been Received`,
      text: `Dear ${full_name},\n\nThank you for reaching out to us. We have received your ${service_type} request and will get back to you shortly.\n\nGod bless you,\n${process.env.MAIL_FROM_NAME}`,
    });

    // 2. Send notification to the admin
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // admin inbox
      subject: `New ${service_type} Request from ${full_name}`,
      text: `A new submission was received:\n\nName: ${full_name}\nEmail: ${email}\nService type: ${service_type}\n\nFull payload:\n${JSON.stringify(body, null, 2)}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}