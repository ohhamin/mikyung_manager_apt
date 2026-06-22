import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const { error } = await resend.emails.send({
      from: "더파크 비스타 동원 <onboarding@resend.dev>",
      to: "ohm55545@gmail.com",
      subject: "더파크 비스타 동원 예약 신청",
      text: body,
    });

    if (error) {
      console.error("[contact] resend error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
