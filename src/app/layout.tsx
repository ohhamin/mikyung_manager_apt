import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    { path: "../../public/Pretendard-Thin.subset.woff2", weight: "100", style: "normal" },
    { path: "../../public/Pretendard-ExtraLight.subset.woff2", weight: "200", style: "normal" },
    { path: "../../public/Pretendard-Light.subset.woff2", weight: "300", style: "normal" },
    { path: "../../public/Pretendard-Regular.subset.woff2", weight: "400", style: "normal" },
    { path: "../../public/Pretendard-Medium.subset.woff2", weight: "500", style: "normal" },
    { path: "../../public/Pretendard-SemiBold.subset.woff2", weight: "600", style: "normal" },
    { path: "../../public/Pretendard-Bold.subset.woff2", weight: "700", style: "normal" },
    { path: "../../public/Pretendard-ExtraBold.subset.woff2", weight: "800", style: "normal" },
    { path: "../../public/Pretendard-Black.subset.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-pretendard",
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
    <html lang="ko" className={pretendard.variable}>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
