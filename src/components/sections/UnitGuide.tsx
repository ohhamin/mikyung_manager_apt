"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const UNITS = [
  {
    id: "84A",
    floorPlan: "/14.png",
    label: "84A형",
    area: "전용 84.9957㎡",
    supply: "공급 111.7080㎡",
    count: "552세대",
    ratio: "64.79%",
    type: "판상형",
    rooms: "방 4개 / 욕실 2개",
    features: ["전세대 남향 위주", "판상형 설계", "4Bay 구성", "사상공원 녹지 조망"],
    rooms_detail: [
      { name: "안방", size: "15.84㎡" },
      { name: "방2", size: "10.32㎡" },
      { name: "방3", size: "9.16㎡" },
      { name: "방4", size: "8.44㎡" },
      { name: "욕실1", size: "5.26㎡" },
      { name: "욕실2", size: "3.86㎡" },
      { name: "거실/주방", size: "32.14㎡" },
    ],
  },
  {
    id: "84B",
    floorPlan: "/15.png",
    label: "84B형",
    area: "전용 84.9958㎡",
    supply: "공급 113.0354㎡",
    count: "143세대",
    ratio: "16.78%",
    type: "판상형",
    rooms: "방 4개 / 욕실 2개",
    features: ["판상형 설계", "드레스룸 설계", "수납 최적화", "남향 채광"],
    rooms_detail: [
      { name: "안방", size: "15.16㎡" },
      { name: "방2", size: "10.88㎡" },
      { name: "방3", size: "9.54㎡" },
      { name: "방4", size: "8.02㎡" },
      { name: "욕실1", size: "5.14㎡" },
      { name: "욕실2", size: "3.92㎡" },
      { name: "거실/주방", size: "32.29㎡" },
    ],
  },
  {
    id: "84C",
    floorPlan: "/16.png",
    label: "84C형",
    area: "전용 84.9914㎡",
    supply: "공급 111.2515㎡",
    count: "135세대",
    ratio: "15.85%",
    type: "타워형",
    rooms: "방 4개 / 욕실 2개",
    features: ["타워형 설계", "코너 개방감", "파노라마 조망", "알파룸 설계"],
    rooms_detail: [
      { name: "안방", size: "15.42㎡" },
      { name: "방2", size: "10.16㎡" },
      { name: "방3", size: "9.28㎡" },
      { name: "방4", size: "8.56㎡" },
      { name: "욕실1", size: "5.36㎡" },
      { name: "욕실2", size: "4.02㎡" },
      { name: "거실/주방", size: "32.15㎡" },
    ],
  },
  {
    id: "84T",
    floorPlan: "/17.png",
    label: "84T형",
    area: "전용 84.9852㎡",
    supply: "공급 110.8193㎡",
    count: "22세대",
    ratio: "2.58%",
    type: "판상형",
    rooms: "방 4개 / 욕실 2개",
    features: ["테라스 설계", "특화 평면", "팬트리 설치", "넓은 주방"],
    rooms_detail: [
      { name: "안방", size: "15.06㎡" },
      { name: "방2", size: "10.52㎡" },
      { name: "방3", size: "9.42㎡" },
      { name: "방4", size: "8.12㎡" },
      { name: "욕실1", size: "5.18㎡" },
      { name: "욕실2", size: "3.96㎡" },
      { name: "거실/주방", size: "32.72㎡" },
    ],
  },
];

export default function UnitGuide() {
  const [active, setActive] = useState("84A");
  const unit = UNITS.find((u) => u.id === active)!;

  return (
    <section className="bg-[#f5f3ef] py-20 md:py-28 overflow-hidden relative">
      <span className="section-number section-number-dark" aria-hidden>02</span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Unit Guide"
          title="세대 평면"
          description="전 세대 전용 84㎡, 4가지 타입으로 다양한 라이프스타일을 충족시킵니다."
        />

        {/* 특화 태그 */}
        <div className="flex flex-wrap gap-2 mb-10 -mt-4">
          {unit.features.map((f) => (
            <span key={f} className="border border-[#901649] text-[#901649] text-xs font-semibold px-3 py-1.5 tracking-wide">
              ✓ {f}
            </span>
          ))}
        </div>

        {/* 세대 분포 바 */}
        <AnimatedSection animation="fade-up" className="mb-10 md:mb-12">
          <div className="bg-white border border-gray-200 p-5 md:p-7 flex flex-col gap-4">
            <p className="text-[#901649] text-sm font-bold tracking-wide mb-1">세대 구성 비율</p>
            <div className="flex h-4 rounded-sm overflow-hidden gap-px">
              {UNITS.map((u) => (
                <button
                  key={u.id}
                  onClick={() => setActive(u.id)}
                  title={`${u.label} ${u.ratio}`}
                  className="transition-all h-full"
                  style={{
                    flex: parseFloat(u.ratio),
                    background: "#901649",
                    opacity: active === u.id ? 1 : 0.35,
                  }}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {UNITS.map((u) => (
                <button
                  key={u.id}
                  onClick={() => setActive(u.id)}
                  className={`flex items-center gap-2 text-xs transition-colors ${
                    active === u.id ? "text-[#901649] font-bold" : "text-gray-500 hover:text-[#901649]"
                  }`}
                >
                  <span className={`w-2.5 h-2.5 inline-block ${active === u.id ? "bg-[#901649]" : "bg-[#901649]/30"}`} />
                  {u.label} ({u.ratio})
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 탭 */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="inline-flex border border-gray-200 bg-white">
            {UNITS.map((u) => (
              <button
                key={u.id}
                onClick={() => setActive(u.id)}
                className={`px-5 md:px-7 py-3.5 text-sm font-bold tracking-wide transition-all ${
                  active === u.id
                    ? "bg-[#901649] text-white"
                    : "text-gray-500 hover:text-[#901649] hover:bg-gray-50"
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

        {/* 평형 상세 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* 평면도 이미지 */}
          <AnimatedSection animation="fade-left" key={`img-${active}`}>
            <div>
              <div className="aspect-[4/3] relative overflow-hidden bg-[#f0ece4]">
                <Image
                  src={unit.floorPlan}
                  alt={`더파크 비스타 동원 ${unit.label} 평면도`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* 코너 장식 */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#ffffff]/60 z-10" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#ffffff]/60 z-10" />
              </div>
              {/* 스펙 바 */}
              <div className="bg-[#901649] px-5 py-4 flex flex-wrap gap-4 justify-around text-center">
                {[
                  { v: unit.area.replace("전용 ", ""), l: "전용면적" },
                  { v: unit.supply.replace("공급 ", ""), l: "공급면적" },
                  { v: unit.count, l: "세대수" },
                ].map((b) => (
                  <div key={b.l}>
                    <p className="text-white font-black text-sm md:text-base">{b.v}</p>
                    <p className="text-[#ffffff] text-[11px] mt-0.5 tracking-wide">{b.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 스펙 상세 */}
          <AnimatedSection animation="fade-right" delay={100} key={`spec-${active}`}>
            <div className="mb-6">
              <h3 className="text-[#901649] text-2xl font-black mb-1">{unit.label}</h3>
              <p className="text-gray-500 text-sm">{unit.rooms}</p>
            </div>

            {/* 실 면적 */}
            <div className="border-t border-b border-gray-200 divide-y divide-gray-100 mb-7">
              {unit.rooms_detail.map((r) => (
                <div key={r.name} className="flex items-center justify-between py-3 px-1 hover:bg-[#ffffff]/5 transition-colors">
                  <span className="text-gray-600 text-sm">{r.name}</span>
                  <span className="text-[#901649] text-sm font-bold">{r.size}</span>
                </div>
              ))}
            </div>

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
