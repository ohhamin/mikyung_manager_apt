import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FEATURES = [
  {
    num: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "사상공원 특례",
    subtitle: "Park Premium",
    desc: "한국 최초 사상구 민간공원조성 특례사업. 대규모 사상공원이 단지를 둘러싸며 미세먼지 저감, 풍부한 녹지 조망을 선사합니다.",
  },
  {
    num: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "남향 위주 배치",
    subtitle: "South Facing",
    desc: "전 세대 남향 위주 배치(남서향 51%, 남동향 49%)로 풍부한 일조량과 환기를 확보. 쾌적한 거주 환경을 제공합니다.",
  },
  {
    num: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "스마트 보안",
    subtitle: "Smart Security",
    desc: "CCTV, AI 안면인식 출입 시스템, 무인 경비로봇 운영. 어린이 안심 귀가 서비스로 365일 24시간 안전을 지킵니다.",
  },
  {
    num: "04",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "스마트홈 시스템",
    subtitle: "Smart Home",
    desc: "IoT 기반 스마트홈으로 조명·냉난방·보안을 스마트폰으로 제어. 에너지 절감 최대 30%, 그린 에너지 등급 취득.",
  },
  {
    num: "05",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "무인 편의 서비스",
    subtitle: "Smart Convenience",
    desc: "무인 택배 보관함, 스마트 주차 관제, 자동화 분리수거, 전기차 충전소 완비로 현대적 편의성을 극대화합니다.",
  },
  {
    num: "06",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "넓은 동간거리",
    subtitle: "Wide Spacing",
    desc: "최적의 동 배치와 넓은 동간거리 확보로 세대 간 사생활 보호 및 쾌적한 조망권을 보장합니다.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden relative">
      <span className="section-number section-number-dark" aria-hidden>05</span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Special Features"
          title="단지 특화"
          description="더파크 비스타 동원만의 특별한 설계 포인트로 한 차원 높은 주거 경험을 선사합니다."
        />

        {/* 특화 이미지 배너 */}
        <AnimatedSection animation="fade-up" className="mb-10 md:mb-14">
          <div className="relative w-full aspect-[16/6] overflow-hidden">
            <Image
              src="/13.png"
              alt="더파크 비스타 동원 단지 특화"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f15]/60 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-8 md:px-12">
                <p className="text-[#c9963c] text-xs tracking-[0.4em] font-bold uppercase mb-2">Special Features</p>
                <p className="text-white text-2xl md:text-3xl font-black leading-tight tracking-tight">
                  한 차원 높은<br />주거 경험
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <AnimatedSection key={f.num} animation="fade-up" delay={i * 80} threshold={0.05}>
              <div className="hover-card group bg-[#f5f3ef] p-8 border border-transparent hover:border-[#c9963c]/20 h-full">
                {/* 번호 + 아이콘 행 */}
                <div className="flex items-start justify-between mb-5">
                  <div className="text-[#c9963c] group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <span className="text-[#0d1f15]/10 text-4xl font-black group-hover:text-[#c9963c]/15 transition-colors">
                    {f.num}
                  </span>
                </div>
                <p className="text-[10px] text-[#c9963c] tracking-[0.35em] font-bold uppercase mb-1.5">
                  {f.subtitle}
                </p>
                <h3 className="text-[#0d1f15] text-lg font-black mb-3 tracking-tight">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-[1.85]">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
