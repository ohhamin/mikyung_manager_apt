"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ITEMS = [
  {
    category: "교통",
    image: "/18.jpg",
    title: "빠르고 다양한 멀티교통망,",
    subtitle: "원하는 곳 어디로든 연결합니다",
    details: [
      "도보 거리 감전역(부산 2호선), 백양대로로 부산 시내·외를 빠르게 연결",
      "김해국제공항, 서부사상버스터미널, 경부선 사상역 등 편리한 광역교통망",
    ],
  },
  {
    category: "편리함",
    image: "/19.jpg",
    title: "다양한 생활인프라와 기대를 모으는 비전,",
    subtitle: "특별한 라이프스타일을 선사합니다",
    details: [
      "사상구청, 신라대, 주감초, 대형마트 등 다채로운 생활인프라 인접",
      "사상드림스마트시티, 서부산행정복합타운 등 눈부신 개발 비전",
    ],
  },
  {
    category: "힐링",
    image: "/20.jpg",
    title: "백양산과 사상공원의 쾌적한 자연,",
    subtitle: "꿈꾸던 힐링 라이프가 펼쳐집니다",
    details: [
      "62만㎡ 사상공원 내 조성되는 852세대 민간공원 특례단지",
      "백양산을 등지고 낙동강 파노라마뷰를 조망하는 배산임수 입지",
    ],
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#0d1f15]">
      {/* 섹션 헤더 */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <AnimatedSection animation="fade-up" className="text-center">
          <p className="text-[#c9963c] text-[11px] tracking-[0.45em] font-semibold uppercase mb-3">
            Core Values
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            왜 더파크 비스타 동원인가
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 h-px bg-[#c9963c]" />
            <div className="w-2 h-2 rotate-45 bg-[#c9963c]" />
            <div className="w-12 h-px bg-[#c9963c]" />
          </div>
        </AnimatedSection>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {ITEMS.map((item, i) => (
          <AnimatedSection key={item.category} animation="fade-up" delay={i * 120} threshold={0.05}>
            <div className="relative min-h-[480px] md:min-h-[560px] flex flex-col justify-end overflow-hidden group">
              {/* 배경 이미지 */}
              <Image
                src={item.image}
                alt={item.category}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* 그라디언트 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

              {/* 카테고리 라벨 (상단) */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-[#c9963c] text-white text-xs font-black px-3 py-1.5 tracking-[0.3em] uppercase">
                  {item.category}
                </span>
              </div>

              {/* 컨텐츠 (하단) */}
              <div className="relative z-10 p-7 md:p-8">
                <h3 className="text-white text-lg md:text-xl font-black leading-[1.3] mb-1.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#c9963c] text-base md:text-lg font-black mb-5 tracking-tight">
                  {item.subtitle}
                </p>
                <ul className="space-y-2.5">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-white/70 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9963c] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 호버 시 하단 강조선 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c9963c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
