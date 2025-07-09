import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { company, name, address, tel, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "必須項目が未入力です。" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"お問い合わせフォーム" <${process.env.SMTP_USER}>`,
      to: process.env.TARGET_EMAIL,
      subject: "新規お問い合わせがあります",
      text: `会社名: ${company}\n氏名: ${name}\n住所: ${address}\nTEL: ${tel}\nメール: ${email}\n\n内容:\n${message}`,
      html: `<h2>お問い合わせ内容</h2>
        <p><strong>会社名:</strong> ${company}</p>
        <p><strong>氏名:</strong> ${name}</p>
        <p><strong>住所:</strong> ${address}</p>
        <p><strong>TEL:</strong> ${tel}</p>
        <p><strong>メール:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return NextResponse.json({ ok: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "送信中に問題が発生しました。" }, { status: 500 });
  }
}