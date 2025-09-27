// portfolio/app/contact/route.ts
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, message: 'Missing fields' }), { status: 400 });
    }
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '******' : 'undefined');


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Error sending email' }), { status: 500 });

}}
