import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const RECORDS = [
  { value: "50년+", label: "시공 경력" },
  { value: "76,000+", label: "세대 공급" },
  { value: "3無", label: "무적자·무연체·무지연" },
  { value: "A+", label: "신용등급" },
];

export default function BrandIntro() {
  return (
    <section className="bg-[#901649] py-20 md:py-28 overflow-hidden relative">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#b01e5a]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* 좌측 텍스트 */}
          <AnimatedSection animation="fade-left">
            <p className="text-[#ffffff] text-[11px] tracking-[0.45em] font-semibold uppercase mb-5">
              Brand Story
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              믿을 수 있는<br />
              <span className="text-[#ffffff]">동원개발</span>의<br />
              50년 신뢰
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-[2.0] mb-8 max-w-md">
              창업 이래 <strong className="text-white/85">무적자, 임금 무연체, 입주 무지연</strong>의 &lsquo;3無 경영&rsquo;.
              이것이 50년간 7만 6천여 세대의 아파트를 공급해 오며 쌓아온 동원개발의 경영 철학이며,
              업계와 소비자로부터 가장 믿을 수 있는 기업이라는 평가를 받기까지 달려온 힘의 원동력입니다.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-[#ffffff]" />
              <Image
                src="/21.png"
                alt="동원개발"
                width={120}
                height={18}
                className="opacity-70 brightness-[10]"
              />
            </div>
          </AnimatedSection>

          {/* 우측 실적 카드들 */}
          <AnimatedSection animation="fade-right" delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {RECORDS.map((r, i) => (
                <div
                  key={r.label}
                  className={`p-7 border transition-colors ${
                    i % 2 === 0
                      ? "bg-white/5 border-white/10 hover:border-[#ffffff]/40"
                      : "bg-[#ffffff]/10 border-[#ffffff]/20 hover:border-[#ffffff]/50"
                  }`}
                >
                  <p className={`text-3xl md:text-4xl font-black mb-2 ${
                    i % 2 === 0 ? "text-white" : "text-[#ffffff]"
                  }`}>
                    {r.value}
                  </p>
                  <p className="text-white/45 text-xs tracking-wide leading-relaxed">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CEO 메시지 인용 */}
            <div className="mt-6 border-l-2 border-[#ffffff]/40 pl-5">
              <p className="text-white/50 text-sm leading-relaxed italic">
                &ldquo;고객을 최우선으로 섬기며 고객의 입장에서 생각하고<br />
                고객 여러분의 보다 나은 행복한 삶과 미래를 위해<br />
                최고의 제품과 서비스로 보답하겠습니다.&rdquo;
              </p>
              <p className="text-[#ffffff] text-xs font-semibold mt-2 tracking-wide">
                — 동원개발 대표이사
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
