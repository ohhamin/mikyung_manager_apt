import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "미경 파크 비스타 | 경기도 하남시 미사강변 프리미엄 아파트 공식 분양",
  description:
    "경기도 하남시 미사강변에 위치한 프리미엄 아파트 미경 파크 비스타 공식 분양 홈페이지. 한강 조망, 총 1,234세대, 59~84㎡ 분양.",
  keywords: "미경 파크 비스타, 하남 미사 아파트, 분양, 청약, 미사강변, 한강뷰",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
