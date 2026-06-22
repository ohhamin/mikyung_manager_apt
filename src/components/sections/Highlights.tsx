"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ITEMS = [
  {
    category: "교통",
    categoryEn: "Transportation",
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
    categoryEn: "Convenience",
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
    categoryEn: "Healing",
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
    <section className="bg-[#901649] overflow-hidden">
      {/* 섹션 헤더 */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <AnimatedSection animation="fade-up" className="text-center">
          <p className="text-white/60 text-[11px] tracking-[0.45em] font-semibold uppercase mb-3">
            Core Values
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            왜 더파크 비스타 동원인가
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 h-px bg-white/60" />
            <div className="w-2 h-2 rotate-45 bg-white/60" />
            <div className="w-12 h-px bg-white/60" />
          </div>
        </AnimatedSection>
      </div>

      {/* 교대 카드 레이아웃 */}
      <div>
        {ITEMS.map((item, i) => (
          <AnimatedSection
            key={item.category}
            animation={i % 2 === 0 ? "fade-right" : "fade-left"}
            duration={1600}
            threshold={0.05}
          >
            <div
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } border-t border-white/10`}
            >
              {/* 이미지 */}
              <div className="relative md:w-3/5 min-h-[300px] md:min-h-[420px] overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-1000 group-hover:bg-black/20" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-white text-[#901649] text-xs font-black px-3 py-1.5 tracking-[0.3em] uppercase">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* 텍스트 */}
              <div className="md:w-2/5 flex flex-col justify-center px-8 py-12 md:px-12 md:py-16 lg:px-16">
                <p className="text-white/40 text-[10px] tracking-[0.4em] font-bold uppercase mb-4">
                  {item.categoryEn}
                </p>
                <h3 className="text-white text-xl md:text-2xl font-black leading-[1.35] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg font-black mb-7 tracking-tight">
                  {item.subtitle}
                </p>
                <ul className="space-y-3">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-white/65 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 w-10 h-0.5 bg-white/30" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
