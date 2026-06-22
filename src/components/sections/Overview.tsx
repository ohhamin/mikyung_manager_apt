import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SPECS = [
  { label: "단지명",     value: "더파크 비스타 동원" },
  { label: "위치",      value: "부산광역시 사상구 감전동 산 1-9 일원" },
  { label: "사업유형",   value: "사상공원 민간공원조성 특례사업" },
  { label: "규모",      value: "지하 5층 ~ 지상 25층, 10개동" },
  { label: "총 세대수",  value: "총 852세대" },
  { label: "전용면적",   value: "전용 84㎡ (A·B·C·T 타입)" },
  { label: "대지면적",   value: "47,839㎡ (14,471평)" },
  { label: "건축연면적", value: "139,160㎡ (42,096평)" },
  { label: "건폐율",    value: "16.70% (법정 260% 이하)" },
  { label: "용적률",    value: "199.96% (법정 200% 이하)" },
  { label: "주차대수",  value: "총 1,038대 (1.21대/세대)" },
  { label: "난방방식",  value: "개별난방" },
  { label: "입주예정",  value: "2029년 01월 (예정)" },
  { label: "시행·시공", value: "동원개발 주식회사" },
];

export default function Overview() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden relative">
      {/* 섹션 번호 장식 */}
      <span className="section-number section-number-dark" aria-hidden>01</span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Complex Overview"
          title="단지개요"
          description="부산광역시 사상구 최초 사상공원 민간공원조성 특례사업, 더파크 비스타 동원의 단지 정보를 안내합니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* 이미지 + 뱃지 */}
          <AnimatedSection animation="fade-left">
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/3.png"
                  alt="더파크 비스타 동원 단지 조감도"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* 코너 장식 */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#ffffff]/70 z-10" />
                <div className="absolute bottom-16 right-4 w-8 h-8 border-r-2 border-b-2 border-[#ffffff]/70 z-10" />
              </div>
              {/* 오버레이 배지 */}
              <div className="bg-[#901649] px-5 py-5 flex justify-around text-center">
                {[
                  { v: "10개동", l: "규모" },
                  { v: "852세대", l: "총 세대수" },
                  { v: "25층", l: "최고 층수" },
                ].map((b) => (
                  <div key={b.l}>
                    <p className="text-white font-black text-lg md:text-xl leading-none">{b.v}</p>
                    <p className="text-[#ffffff] text-[11px] mt-1 tracking-wide font-medium">{b.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 스펙 테이블 */}
          <AnimatedSection animation="fade-right" delay={150}>
            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {SPECS.map((s) => (
                <div key={s.label} className="flex py-3.5 md:py-4 group hover:bg-[#ffffff]/5 transition-colors px-1">
                  <dt className="w-28 md:w-32 shrink-0 text-xs md:text-sm font-bold text-[#901649] tracking-wide py-0.5">
                    {s.label}
                  </dt>
                  <dd className="text-xs md:text-sm text-gray-600 leading-relaxed">{s.value}</dd>
                </div>
              ))}
            </div>

            {/* 인증 배지 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["사상공원 특례사업", "전세대 남향 위주", "친환경 인증", "스마트홈 적용"].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#901649] text-[#901649] text-[11px] font-semibold px-3 py-1.5 tracking-wide"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
