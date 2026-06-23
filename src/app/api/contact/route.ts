import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ohm55545@gmail.com",
    pass: process.env.GMAIL_APP_PASS,
  },
});

export async function POST(request: NextRequest) {
  const { name, phone, unitType, visitDate, message } = await request.json();

  const body = [
    `이름: ${name}`,
    `연락처: ${phone}`,
    `관심 평형: ${unitType}`,
    `방문 희망일: ${visitDate || "미정"}`,
    `문의 내용: ${message || "없음"}`,
    ``,
    `신청 일시: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: '"더파크 비스타 동원" <ohm55545@gmail.com>',
      to: "ohm55545@naver.com, ohfam5@naver.com",
      subject: "더파크 비스타 동원 예약 신청",
      text: body,
    });
  } catch (err) {
    console.error("[contact] gmail send failed:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
