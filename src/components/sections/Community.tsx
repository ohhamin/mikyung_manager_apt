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

export default function Community() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden relative">
      <span className="section-number section-number-dark" aria-hidden>05</span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Community & Park"
          title="커뮤니티 시설"
          description="사상공원과 하나되는 프리미엄 주거 환경. 자연 속 커뮤니티로 더 건강하고 행복한 일상을 누리세요."
        />

        {/* 커뮤니티 이미지 */}
        <AnimatedSection animation="fade-up" className="mb-14 md:mb-18">
          <div className="relative w-full aspect-[8/9] overflow-hidden bg-[#f0ece4]">
            <Image
              src="/25.jpg"
              alt="더파크 비스타 동원 커뮤니티 시설"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </AnimatedSection>

        {/* 공원 특례 섹션 */}
        <AnimatedSection animation="fade-up" className="mb-14 md:mb-18">
          <div className="bg-gray-50 border border-gray-200 p-7 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#901649] text-[11px] tracking-[0.4em] font-bold uppercase">Park Facilities</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <p className="text-gray-800 text-lg md:text-xl font-black mb-2 tracking-tight">
              사상공원 — 단지가 곧 공원
            </p>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              사상공원 민간공원조성 특례사업으로 단지 주변에 조성되는 대규모 공원 시설
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PARK_FACILITIES.map((f, i) => (
                <AnimatedSection key={f.name} animation="zoom-in" delay={i * 60} threshold={0.05}>
                  <div className="bg-white border border-gray-200 hover:border-[#901649]/40 p-4 text-center transition-all hover:bg-[#901649]/5 cursor-default">
                    <p className="text-gray-800 text-xs font-bold leading-tight mb-1">{f.name}</p>
                    <p className="text-[#901649] text-[10px] leading-tight">{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 커뮤니티 시설 그리드 */}
        <AnimatedSection animation="fade-up" delay={50}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#901649] text-[11px] tracking-[0.4em] font-bold uppercase">Community</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {COMMUNITY_FACILITIES.map((f, i) => (
            <AnimatedSection key={f.name} animation="fade-up" delay={i * 60} threshold={0.05}>
              <div className="group bg-gray-50 border border-gray-100 hover:border-[#901649]/40 hover:bg-[#901649]/5 transition-all p-5 md:p-6">
                <div className="text-2xl mb-3">{f.icon}</div>
                <p className="text-gray-800 text-xs md:text-sm font-black leading-tight mb-1">{f.name}</p>
                <p className="text-[#901649] text-[10px] font-medium">{f.floor}</p>
                <p className="text-gray-400 text-[10px] mt-0.5">{f.size}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 통계 바 */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 border-t border-gray-200 pt-10">
            {[
              { value: "8종+", label: "커뮤니티 시설" },
              { value: "6개", label: "공원 특화 공간" },
              { value: "24시간", label: "관리 서비스" },
              { value: "무료", label: "입주민 이용" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[#901649] font-black text-3xl md:text-4xl">{s.value}</p>
                <p className="text-gray-400 text-xs mt-1.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
