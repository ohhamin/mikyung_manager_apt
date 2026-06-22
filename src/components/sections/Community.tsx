"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PARK_FACILITIES = [
  { name: "숲속체험 교육관", desc: "유아 체험숲" },
  { name: "반려견 산책로", desc: "반려동물 테마정원" },
  { name: "사계체험관", desc: "사상정원" },
  { name: "영국정원", desc: "휴식 테마 정원" },
  { name: "모험놀이장", desc: "어린이 특화 공간" },
  { name: "오픈 그린", desc: "천계의 정원" },
];

const COMMUNITY_FACILITIES = [
  { name: "피트니스센터", size: "약 450㎡", floor: "지하 1층", icon: "🏋️" },
  { name: "실내수영장", size: "약 620㎡", floor: "지하 2층", icon: "🏊" },
  { name: "스파&사우나", size: "약 280㎡", floor: "지하 2층", icon: "♨️" },
  { name: "골프연습장", size: "약 180㎡", floor: "지하 1층", icon: "⛳" },
  { name: "독서실·스터디룸", size: "약 160㎡", floor: "지하 1층", icon: "📚" },
  { name: "어린이집", size: "약 380㎡", floor: "동 1층", icon: "👶" },
  { name: "카페테리아", size: "약 220㎡", floor: "동 1층", icon: "☕" },
  { name: "게스트하우스", size: "2룸 4실", floor: "동 1층", icon: "🏠" },
];

const CAROUSEL_IMAGES = [
  { src: "/9.png",  alt: "더파크 비스타 동원 커뮤니티 시설 1" },
  { src: "/10.png", alt: "더파크 비스타 동원 커뮤니티 시설 2" },
  { src: "/11.png", alt: "더파크 비스타 동원 커뮤니티 시설 3" },
  { src: "/12.png", alt: "더파크 비스타 동원 커뮤니티 시설 4" },
];

export default function Community() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  const next = () => setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length);

  return (
    <section className="bg-[#901649] py-20 md:py-28 overflow-hidden relative">
      <span className="section-number" aria-hidden>06</span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Community & Park"
          title="커뮤니티 시설"
          description="사상공원과 하나되는 프리미엄 주거 환경. 자연 속 커뮤니티로 더 건강하고 행복한 일상을 누리세요."
          light
        />

        {/* 커뮤니티 이미지 캐러셀 */}
        <AnimatedSection animation="fade-up" className="mb-14 md:mb-18">
          <div className="relative w-full overflow-hidden">
            {/* 메인 이미지 */}
            <div className="relative aspect-[16/7] md:aspect-[16/6]">
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
                  <div className="absolute inset-0 bg-[#901649]/25" />
                </div>
              ))}

              {/* 이전/다음 버튼 */}
              <button
                type="button"
                onClick={prev}
                aria-label="이전 이미지"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-[#ffffff] text-white flex items-center justify-center transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="다음 이미지"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-[#ffffff] text-white flex items-center justify-center transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {CAROUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`${i + 1}번 이미지`}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        i === current ? "w-6 h-2 bg-[#ffffff]" : "w-2 h-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* 슬라이드 번호 */}
              <div className="absolute top-4 right-4 z-10 bg-black/50 text-white text-xs font-bold px-3 py-1.5 tracking-wide">
                {String(current + 1).padStart(2, "0")} / {String(CAROUSEL_IMAGES.length).padStart(2, "0")}
              </div>
            </div>

            {/* 썸네일 */}
            <div className="flex gap-1.5 mt-1.5">
              {CAROUSEL_IMAGES.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`relative flex-1 aspect-[4/3] overflow-hidden transition-all duration-300 ${
                    i === current ? "ring-2 ring-[#ffffff]" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center" sizes="25vw" />
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 공원 특례 섹션 */}
        <AnimatedSection animation="fade-up" className="mb-14 md:mb-18">
          <div className="bg-white/5 border border-white/10 p-7 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#ffffff] text-[11px] tracking-[0.4em] font-bold uppercase">Park Facilities</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <p className="text-white text-lg md:text-xl font-black mb-2 tracking-tight">
              사상공원 — 단지가 곧 공원
            </p>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              사상공원 민간공원조성 특례사업으로 단지 주변에 조성되는 대규모 공원 시설
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PARK_FACILITIES.map((f, i) => (
                <AnimatedSection key={f.name} animation="zoom-in" delay={i * 60} threshold={0.05}>
                  <div className="bg-white/5 border border-white/10 hover:border-[#ffffff]/40 p-4 text-center transition-all hover:bg-white/10 cursor-default">
                    <p className="text-white text-xs font-bold leading-tight mb-1">{f.name}</p>
                    <p className="text-[#ffffff] text-[10px] leading-tight">{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 커뮤니티 시설 그리드 */}
        <AnimatedSection animation="fade-up" delay={50}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#ffffff] text-[11px] tracking-[0.4em] font-bold uppercase">Community</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {COMMUNITY_FACILITIES.map((f, i) => (
            <AnimatedSection key={f.name} animation="fade-up" delay={i * 60} threshold={0.05}>
              <div className="group bg-white/5 border border-white/8 hover:border-[#ffffff]/40 hover:bg-white/8 transition-all p-5 md:p-6">
                <div className="text-2xl mb-3">{f.icon}</div>
                <p className="text-white text-xs md:text-sm font-black leading-tight mb-1">{f.name}</p>
                <p className="text-[#ffffff] text-[10px] font-medium">{f.floor}</p>
                <p className="text-white/35 text-[10px] mt-0.5">{f.size}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 통계 바 */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 border-t border-white/10 pt-10">
            {[
              { value: "8종+", label: "커뮤니티 시설" },
              { value: "6개", label: "공원 특화 공간" },
              { value: "24시간", label: "관리 서비스" },
              { value: "무료", label: "입주민 이용" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white font-black text-3xl md:text-4xl">{s.value}</p>
                <p className="text-white/35 text-xs mt-1.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
