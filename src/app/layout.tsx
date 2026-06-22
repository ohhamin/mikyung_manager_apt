import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theparkvista-dongwon.com"),
  title: "더파크 비스타 동원 | 부산 사상구 사상공원 공동주택 공식 분양",
  description:
    "부산광역시 사상구 감전동에 위치한 더파크 비스타 동원 공식 분양 홈페이지. 사상공원 민간공원조성 특례사업, 지하5층~지상25층 10개동 852세대. 부산 2호선 감전역 도보권.",
  keywords: "더파크비스타동원, 부산아파트, 사상구아파트, 감전동, 사상공원, 분양, 청약, 동원개발",
  openGraph: {
    title: "더파크 비스타 동원 | 부산 사상구 공식 분양",
    description:
      "사상공원 민간공원조성 특례사업 — 공원이 곧 프리미엄인 주거 공간. 부산 2호선 감전역 도보 7분. 전용 84㎡ 단일 평형, 852세대.",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/1.jpg", width: 1100, height: 652, alt: "더파크 비스타 동원 단지 조감도" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "더파크 비스타 동원 | 부산 사상구 공식 분양",
    description: "사상공원 민간공원조성 특례사업. 전용 84㎡ 852세대. 감전역 도보권.",
    images: ["/1.jpg"],
  },
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
