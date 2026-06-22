"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TRANSIT = [
  {
    type: "지하철",
    icon: "🚇",
    items: [
      { name: "부산 2호선 감전역", time: "도보 7분" },
      { name: "사상역 (2·5호선)", time: "도보권" },
      { name: "부전~마산 복선전철", time: "사상역 환승" },
    ],
  },
  {
    type: "광역버스",
    icon: "🚌",
    items: [
      { name: "사상복합환승센터", time: "도보 이동" },
      { name: "부산김해경전철", time: "사상역" },
      { name: "시내버스 다수 노선", time: "단지 앞" },
    ],
  },
  {
    type: "도로",
    icon: "🚗",
    items: [
      { name: "남해고속도로", time: "5분" },
      { name: "백양대로", time: "인접" },
      { name: "부산외곽순환도로", time: "10분" },
    ],
  },
];

const INFRA = [
  {
    category: "공원",
    color: "bg-green-50 border-green-200 text-green-800",
    items: ["사상공원 (민간공원 특례)", "반려견 산책로", "숲속체험 교육관", "영국정원·사계체험관"],
  },
  {
    category: "교육",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    items: ["감전초등학교 근거리", "사상중학교", "사상고등학교", "사상 학원가"],
  },
  {
    category: "쇼핑·편의",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    items: ["사상역 상업시설", "롯데마트 사상점", "사상공업단지 상권", "다수 편의시설"],
  },
  {
    category: "개발계획",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    items: ["사상스마트드림시티", "사상복합환승센터", "사상~해운대 대심도", "사상구 10대 핵심사업"],
  },
];

const CAROUSEL_IMAGES = [
  { src: "/22.jpg", alt: "더파크 비스타 동원 입지 환경 1" },
  { src: "/6.png",  alt: "더파크 비스타 동원 입지 환경 2" },
  { src: "/7.png",  alt: "더파크 비스타 동원 입지 환경 3" },
];

export default function Location() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const next = () => setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden relative">
      <span className="section-number section-number-dark" aria-hidden>02</span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Location Guide"
          title="입지환경"
          description="팍세권·직주근접·대중교통 트리플 입지. 부산 사상구의 새로운 중심에서 최고의 라이프스타일을 누려보세요."
        />

        {/* 이미지 캐러셀 */}
        <AnimatedSection animation="fade-up" className="relative mb-10 md:mb-14">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden">
            {CAROUSEL_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            ))}

            {/* 이전/다음 버튼 */}
            <button
              type="button"
              onClick={prev}
              aria-label="이전 이미지"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/65 text-white flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="다음 이미지"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/65 text-white flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* 인디케이터 - 캐러셀 아래 */}
          <div className="flex justify-center gap-2 mt-4">
            {CAROUSEL_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`${i + 1}번 이미지`}
                className="transition-all duration-300"
              >
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "10px",
                    height: "10px",
                    background: i === current ? "#901649" : "#d1d5db",
                  }}
                />
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* 교통 접근성 */}
        <AnimatedSection animation="fade-up" delay={50}>
          <h3 className="text-[#901649] text-lg font-black mb-5 tracking-wide border-l-4 border-[#901649] pl-4">
            교통 접근성
          </h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 md:mb-16">
          {TRANSIT.map((t, i) => (
            <AnimatedSection key={t.type} animation="fade-up" delay={i * 80} threshold={0.05}>
              <div className="hover-card border border-gray-100 p-6 bg-white h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{t.icon}</span>
                  <span className="text-[#901649] font-black text-base tracking-wide">{t.type}</span>
                </div>
                <div className="space-y-3">
                  {t.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline gap-2">
                      <span className="text-gray-600 text-sm">{item.name}</span>
                      <span className="text-[#901649] text-sm font-bold shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 주변 인프라 */}
        <AnimatedSection animation="fade-up" delay={50}>
          <h3 className="text-[#901649] text-lg font-black mb-5 tracking-wide border-l-4 border-[#901649] pl-4">
            주변 생활 인프라
          </h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INFRA.map((inf, i) => (
            <AnimatedSection key={inf.category} animation="fade-up" delay={i * 70} threshold={0.05}>
              <div className={`hover-card border ${inf.color} p-5 h-full`}>
                <p className="font-black text-sm mb-3 tracking-wide">{inf.category}</p>
                <ul className="space-y-1.5">
                  {inf.items.map((item) => (
                    <li key={item} className="text-xs flex items-start gap-1.5 text-gray-600">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-current shrink-0 opacity-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
