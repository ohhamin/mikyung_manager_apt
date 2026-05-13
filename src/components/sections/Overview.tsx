import SectionTitle from "@/components/ui/SectionTitle";

const SPECS = [
  { label: "단지명", value: "미경 파크 비스타" },
  { label: "위치", value: "경기도 하남시 미사강변동 234-5번지 일원" },
  { label: "규모", value: "지하 3층 ~ 지상 35층, 10개동" },
  { label: "총 세대수", value: "1,234세대" },
  { label: "전용면적", value: "59㎡, 84㎡ (A·B타입)" },
  { label: "주차대수", value: "총 2,100대 (세대당 1.7대)" },
  { label: "건폐율", value: "18.5% (법정 30% 이하)" },
  { label: "용적률", value: "269.4% (법정 300% 이하)" },
  { label: "난방방식", value: "개별난방 (지역난방)" },
  { label: "입주예정", value: "2028년 10월 (예정)" },
  { label: "시행사", value: "미경개발 주식회사" },
  { label: "시공사", value: "미경건설 주식회사" },
];

export default function Overview() {
  return (
    <section className="bg-[#f7f5f0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Complex Overview"
          title="단지개요"
          description="경기도 하남시 미사강변에 위치한 미경 파크 비스타의 단지 정보를 안내합니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* 이미지 플레이스홀더 */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 flex flex-col items-center justify-center gap-3 text-gray-400">
              <ImagePlaceholderIcon />
              <span className="text-sm tracking-wider">단지 조감도 이미지</span>
            </div>
            {/* 오버레이 배지 */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#0c1b33]/85 backdrop-blur-sm px-5 py-4 flex justify-around text-center">
              {[
                { v: "10개동", l: "규모" },
                { v: "1,234", l: "총세대" },
                { v: "35층", l: "최고층" },
              ].map((b) => (
                <div key={b.l}>
                  <p className="text-white font-bold text-lg md:text-xl leading-none">{b.v}</p>
                  <p className="text-[#c4943a] text-[11px] mt-1 tracking-wide">{b.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 스펙 테이블 */}
          <div>
            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {SPECS.map((s) => (
                <div key={s.label} className="flex py-3.5 md:py-4">
                  <dt className="w-28 md:w-32 shrink-0 text-xs md:text-sm font-semibold text-[#0c1b33] tracking-wide py-0.5">
                    {s.label}
                  </dt>
                  <dd className="text-xs md:text-sm text-gray-600 leading-relaxed">{s.value}</dd>
                </div>
              ))}
            </div>

            {/* 인증 배지 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["에너지절약 우수등급", "친환경 인증", "스마트홈 적용", "무장애 설계"].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#c4943a]/50 text-[#c4943a] text-[11px] font-medium px-3 py-1.5 tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholderIcon() {
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
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
