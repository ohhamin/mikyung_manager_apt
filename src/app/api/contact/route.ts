import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 465,
      secure: true,
      auth: {
        user: "ohm55545@naver.com",
        pass: process.env.NAVER_MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: "ohm55545@naver.com",
      to: "ohm55545@naver.com",
      subject: "더파크 비스타 동원 예약 신청",
      text: body,
    });
  } catch (err) {
    console.error("[contact] email send failed:", err);
  }

  return NextResponse.json({ success: true });
}
