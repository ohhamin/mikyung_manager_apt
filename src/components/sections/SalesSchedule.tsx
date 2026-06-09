import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TIMELINE = [
  {
    step: "01",
    label: "특별공급",
    date: "2026. 06. 23 (화)",
    desc: "신혼부부, 다자녀, 노부모 부양, 생애최초",
    highlight: false,
  },
  {
    step: "02",
    label: "1순위 청약 (해당지역)",
    date: "2026. 06. 24 (수)",
    desc: "부산광역시 사상구 거주자 우선 접수",
    highlight: true,
  },
  {
    step: "03",
    label: "1순위 청약 (기타지역)",
    date: "2026. 06. 25 (목)",
    desc: "부산광역시 및 전국 1순위 접수",
    highlight: false,
  },
  {
    step: "04",
    label: "당첨자 발표",
    date: "2026. 07. 02 (목)",
    desc: "APT2YOU 청약시스템 확인",
    highlight: false,
  },
  {
    step: "05",
    label: "서류 제출",
    date: "2026. 07. 03 (금) ~ 07. 09 (목)",
    desc: "청약 당첨자 자격 서류 제출",
    highlight: false,
  },
  {
    step: "06",
    label: "정당 계약",
    date: "2026. 07. 14 (화) ~ 07. 18 (토)",
    desc: "계약금 10% 납부, 계약서 작성",
    highlight: true,
  },
];

const PRICES = [
  { type: "84A형", supply: "111.71㎡", low: "3억 8,000만원", high: "4억 5,000만원", count: "552세대", tag: "판상" },
  { type: "84B형", supply: "113.04㎡", low: "3억 9,000만원", high: "4억 6,000만원", count: "143세대", tag: "판상" },
  { type: "84C형", supply: "111.25㎡", low: "4억 0,000만원", high: "4억 7,000만원", count: "135세대", tag: "타워" },
  { type: "84T형", supply: "110.82㎡", low: "3억 9,500만원", high: "4억 6,500만원", count: "22세대", tag: "판상" },
];

export default function SalesSchedule() {
  return (
    <section className="bg-[#0d1f15] py-20 md:py-28 overflow-hidden relative">
      <span className="section-number" aria-hidden>04</span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Sales Schedule"
          title="분양안내"
          description="더파크 비스타 동원의 청약 일정과 분양가를 안내해 드립니다."
          light
        />

        {/* 타임라인 */}
        <div className="mb-16 md:mb-20">
          <AnimatedSection animation="fade-up">
            <h3 className="text-[#c9963c] text-xs tracking-[0.4em] font-bold uppercase mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c9963c]" />
              청약 일정
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIMELINE.map((t, i) => (
              <AnimatedSection key={t.step} animation="fade-up" delay={i * 80} threshold={0.05}>
                <div
                  className={`relative p-7 border h-full transition-all ${
                    t.highlight
                      ? "bg-[#c9963c] border-[#c9963c]"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className={`text-5xl font-black leading-none mb-5 select-none ${
                    t.highlight ? "text-white/25" : "text-white/8"
                  }`}>
                    {t.step}
                  </div>
                  <p className="text-white text-sm font-black mb-2 tracking-wide">{t.label}</p>
                  <p className={`text-xs font-bold mb-2 ${t.highlight ? "text-white/75" : "text-[#c9963c]"}`}>
                    {t.date}
                  </p>
                  <p className={`text-xs leading-relaxed ${t.highlight ? "text-white/70" : "text-white/45"}`}>
                    {t.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* 분양가 */}
        <AnimatedSection animation="fade-up">
          <h3 className="text-[#c9963c] text-xs tracking-[0.4em] font-bold uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-[#c9963c]" />
            분양가 안내
          </h3>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="text-left text-white/40 text-xs font-medium tracking-wide pb-4 pr-4">평형</th>
                  <th className="text-left text-white/40 text-xs font-medium tracking-wide pb-4 pr-4">구조</th>
                  <th className="text-left text-white/40 text-xs font-medium tracking-wide pb-4 pr-4">공급면적</th>
                  <th className="text-left text-white/40 text-xs font-medium tracking-wide pb-4 pr-4">최저 분양가</th>
                  <th className="text-left text-white/40 text-xs font-medium tracking-wide pb-4 pr-4">최고 분양가</th>
                  <th className="text-right text-white/40 text-xs font-medium tracking-wide pb-4">세대수</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8">
                {PRICES.map((p) => (
                  <tr key={p.type} className="hover:bg-white/5 transition-colors group">
                    <td className="py-4 pr-4 text-white font-black text-sm">{p.type}</td>
                    <td className="py-4 pr-4">
                      <span className="text-[#c9963c] text-[11px] font-bold bg-[#c9963c]/10 px-2 py-1">{p.tag}</span>
                    </td>
                    <td className="py-4 pr-4 text-white/55 text-sm">{p.supply}</td>
                    <td className="py-4 pr-4 text-white/75 text-sm">{p.low}</td>
                    <td className="py-4 pr-4 text-[#c9963c] font-black text-sm">{p.high}</td>
                    <td className="py-4 text-right text-white/45 text-sm">{p.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-white/30 text-xs leading-relaxed">
            ※ 상기 분양가는 층수, 향, 타입에 따라 상이할 수 있으며 발코니 확장비용 및 유상 옵션은 별도입니다.
            분양가는 사업 승인 과정에서 변경될 수 있습니다. 정확한 분양가는 입주자 모집 공고문을 기준으로 합니다.
          </p>
        </AnimatedSection>

        {/* 하단 문의 유도 */}
        <AnimatedSection animation="fade-up" delay={150} className="mt-12 md:mt-16 text-center">
          <p className="text-white/50 text-sm mb-5">청약 자격 및 상세 조건은 전문 상담사에게 문의하세요</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#c9963c] hover:bg-[#a87830] text-white px-10 py-4 text-sm font-black tracking-widest transition-all btn-shine"
          >
            무료 상담 신청하기
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
