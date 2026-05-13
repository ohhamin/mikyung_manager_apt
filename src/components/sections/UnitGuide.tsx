"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const UNITS = [
  {
    id: "59A",
    label: "59A형",
    area: "전용 59.96㎡",
    supply: "공급 84.72㎡",
    count: "312세대",
    rooms: "방 3개 / 욕실 2개",
    features: ["팬트리 수납", "알파룸 설계", "4Bay 판상형"],
    rooms_detail: [
      { name: "안방", size: "12.38㎡" },
      { name: "방2", size: "8.26㎡" },
      { name: "방3", size: "7.14㎡" },
      { name: "욕실1", size: "4.42㎡" },
      { name: "욕실2", size: "3.18㎡" },
      { name: "거실/주방", size: "24.58㎡" },
    ],
  },
  {
    id: "59B",
    label: "59B형",
    area: "전용 59.82㎡",
    supply: "공급 83.96㎡",
    count: "288세대",
    rooms: "방 3개 / 욕실 2개",
    features: ["드레스룸", "알파룸 설계", "남향 판상형"],
    rooms_detail: [
      { name: "안방", size: "11.94㎡" },
      { name: "방2", size: "8.62㎡" },
      { name: "방3", size: "7.38㎡" },
      { name: "욕실1", size: "4.28㎡" },
      { name: "욕실2", size: "3.24㎡" },
      { name: "거실/주방", size: "24.36㎡" },
    ],
  },
  {
    id: "84A",
    label: "84A형",
    area: "전용 84.94㎡",
    supply: "공급 114.22㎡",
    count: "388세대",
    rooms: "방 4개 / 욕실 2개",
    features: ["한강 조망 가능", "팬트리+드레스룸", "테라스 제공"],
    rooms_detail: [
      { name: "안방", size: "15.84㎡" },
      { name: "방2", size: "10.32㎡" },
      { name: "방3", size: "9.16㎡" },
      { name: "방4", size: "8.44㎡" },
      { name: "욕실1", size: "5.26㎡" },
      { name: "욕실2", size: "3.86㎡" },
    ],
  },
  {
    id: "84B",
    label: "84B형",
    area: "전용 84.77㎡",
    supply: "공급 113.88㎡",
    count: "246세대",
    rooms: "방 4개 / 욕실 2개",
    features: ["코너 하이섀시", "수납창고", "복층형 옵션"],
    rooms_detail: [
      { name: "안방", size: "15.16㎡" },
      { name: "방2", size: "10.88㎡" },
      { name: "방3", size: "9.54㎡" },
      { name: "방4", size: "8.02㎡" },
      { name: "욕실1", size: "5.14㎡" },
      { name: "욕실2", size: "3.92㎡" },
    ],
  },
];

export default function UnitGuide() {
  const [active, setActive] = useState("59A");
  const unit = UNITS.find((u) => u.id === active)!;

  return (
    <section className="bg-[#f7f5f0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Unit Guide"
          title="평형안내"
          description="다양한 라이프스타일에 맞춘 4가지 평형 타입을 제공합니다."
        />

        {/* 탭 */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="inline-flex border border-gray-200 bg-white">
            {UNITS.map((u) => (
              <button
                key={u.id}
                onClick={() => setActive(u.id)}
                className={`px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${
                  active === u.id
                    ? "bg-[#0c1b33] text-white"
                    : "text-gray-500 hover:text-[#0c1b33] hover:bg-gray-50"
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

        {/* 평형 상세 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* 평면도 플레이스홀더 */}
          <div>
            <div className="aspect-[4/3] bg-gray-200 flex flex-col items-center justify-center gap-3 text-gray-400 relative">
              <FloorPlanIcon />
              <span className="text-sm tracking-wider">{unit.label} 평면도</span>
            </div>
            {/* 배지 */}
            <div className="mt-0 bg-[#0c1b33] px-5 py-3.5 flex flex-wrap gap-4 justify-around text-center">
              {[
                { v: unit.area, l: "전용면적" },
                { v: unit.supply, l: "공급면적" },
                { v: unit.count, l: "세대수" },
              ].map((b) => (
                <div key={b.l}>
                  <p className="text-white font-bold text-sm md:text-base">{b.v}</p>
                  <p className="text-[#c4943a] text-[11px] mt-0.5 tracking-wide">{b.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 스펙 상세 */}
          <div>
            <div className="mb-6">
              <h3 className="text-[#0c1b33] text-2xl font-bold mb-1">{unit.label}</h3>
              <p className="text-gray-500 text-sm">{unit.rooms}</p>
            </div>

            {/* 특화 포인트 */}
            <div className="flex flex-wrap gap-2 mb-7">
              {unit.features.map((f) => (
                <span key={f} className="bg-[#c4943a]/10 text-[#a87830] border border-[#c4943a]/25 text-xs font-medium px-3 py-1.5">
                  ✓ {f}
                </span>
              ))}
            </div>

            {/* 실 면적 */}
            <div className="border-t border-b border-gray-200 divide-y divide-gray-100">
              {unit.rooms_detail.map((r) => (
                <div key={r.name} className="flex items-center justify-between py-3 px-1">
                  <span className="text-gray-600 text-sm">{r.name}</span>
                  <span className="text-[#0c1b33] text-sm font-semibold">{r.size}</span>
                </div>
              ))}
            </div>

            {/* 안내 버튼 */}
            <div className="mt-7 flex gap-3">
              <a
                href="#contact"
                className="flex-1 text-center bg-[#0c1b33] hover:bg-[#1a3a6b] text-white py-3.5 text-sm font-semibold tracking-wide transition-colors"
              >
                상담 신청하기
              </a>
              <button className="flex-1 border border-[#0c1b33] text-[#0c1b33] hover:bg-[#0c1b33] hover:text-white py-3.5 text-sm font-medium tracking-wide transition-colors">
                모델하우스 예약
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloorPlanIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={0.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  );
}
