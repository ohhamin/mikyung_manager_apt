import SectionTitle from "@/components/ui/SectionTitle";

const TIMELINE = [
  {
    step: "01",
    label: "특별공급",
    date: "2026. 06. 16 (월)",
    desc: "신혼부부, 다자녀, 노부모 부양, 생애최초",
    highlight: false,
  },
  {
    step: "02",
    label: "1순위 청약 (해당지역)",
    date: "2026. 06. 17 (화)",
    desc: "하남시 거주자 우선 접수",
    highlight: true,
  },
  {
    step: "03",
    label: "1순위 청약 (기타지역)",
    date: "2026. 06. 18 (수)",
    desc: "경기도 및 전국 1순위 접수",
    highlight: false,
  },
  {
    step: "04",
    label: "당첨자 발표",
    date: "2026. 06. 25 (수)",
    desc: "APT2YOU 청약시스템 확인",
    highlight: false,
  },
  {
    step: "05",
    label: "서류 제출",
    date: "2026. 06. 26 (목) ~ 07. 02 (수)",
    desc: "청약 당첨자 자격 서류 제출",
    highlight: false,
  },
  {
    step: "06",
    label: "정당 계약",
    date: "2026. 07. 07 (월) ~ 07. 11 (금)",
    desc: "계약금 10% 납부, 계약서 작성",
    highlight: true,
  },
];

const PRICES = [
  { type: "59A형", supply: "84.72㎡", low: "4억 7,500만원", high: "5억 2,000만원", note: "312세대" },
  { type: "59B형", supply: "83.96㎡", low: "4억 9,000만원", high: "5억 4,000만원", note: "288세대" },
  { type: "84A형", supply: "114.22㎡", low: "6억 5,000만원", high: "7억 2,000만원", note: "388세대" },
  { type: "84B형", supply: "113.88㎡", low: "6억 8,000만원", high: "7억 5,000만원", note: "246세대" },
];

export default function SalesSchedule() {
  return (
    <section className="bg-[#0c1b33] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Sales Schedule"
          title="분양일정"
          description="미경 파크 비스타의 청약 일정과 분양가를 안내해 드립니다."
          light
        />

        {/* 타임라인 */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-[#c4943a] text-xs tracking-[0.35em] font-medium uppercase mb-8">
            청약 일정
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIMELINE.map((t) => (
              <div
                key={t.step}
                className={`relative p-6 border transition-all ${
                  t.highlight
                    ? "bg-[#c4943a] border-[#c4943a] text-white"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
              >
                <div
                  className={`text-4xl font-bold leading-none mb-4 ${
                    t.highlight ? "text-white/30" : "text-white/10"
                  }`}
                >
                  {t.step}
                </div>
                <p className={`text-sm font-bold mb-1.5 tracking-wide ${t.highlight ? "text-white" : "text-white"}`}>
                  {t.label}
                </p>
                <p className={`text-xs font-semibold mb-2 ${t.highlight ? "text-white/80" : "text-[#c4943a]"}`}>
                  {t.date}
                </p>
                <p className={`text-xs leading-relaxed ${t.highlight ? "text-white/75" : "text-white/50"}`}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 분양가 */}
        <div>
          <h3 className="text-[#c4943a] text-xs tracking-[0.35em] font-medium uppercase mb-8">
            분양가 안내
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="text-left text-white/50 text-xs font-medium tracking-wide pb-4 pr-4">평형</th>
                  <th className="text-left text-white/50 text-xs font-medium tracking-wide pb-4 pr-4">공급면적</th>
                  <th className="text-left text-white/50 text-xs font-medium tracking-wide pb-4 pr-4">최저 분양가</th>
                  <th className="text-left text-white/50 text-xs font-medium tracking-wide pb-4 pr-4">최고 분양가</th>
                  <th className="text-right text-white/50 text-xs font-medium tracking-wide pb-4">세대수</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8">
                {PRICES.map((p) => (
                  <tr key={p.type} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-4 text-white font-bold text-sm">{p.type}</td>
                    <td className="py-4 pr-4 text-white/60 text-sm">{p.supply}</td>
                    <td className="py-4 pr-4 text-white/80 text-sm">{p.low}</td>
                    <td className="py-4 pr-4 text-[#c4943a] font-semibold text-sm">{p.high}</td>
                    <td className="py-4 text-right text-white/50 text-sm">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-white/35 text-xs leading-relaxed">
            ※ 상기 분양가는 층수, 향, 타입에 따라 상이할 수 있으며 관계 법령에 의한 발코니 확장비용 및 유상 옵션은 별도입니다.
            분양가는 사업 승인 과정에서 변경될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
