"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

type FormState = {
  name: string;
  phone: string;
  unitType: string;
  visitDate: string;
  message: string;
  privacy: boolean;
};

type FormErrors = {
  name?: string;
  phone?: string;
  unitType?: string;
  privacy?: string;
};

const DIRECTIONS = [
  {
    label: "견본주택",
    labelEn: "MODEL HOUSE",
    address: "부산광역시 북구 덕천동 350-31",
    image: "/23.jpg",
    imageAlt: "견본주택 위치",
  },
  {
    label: "현장",
    labelEn: "SITE",
    address: "부산시 사상구 감전동 산1-9일원",
    image: "/24.jpg",
    imageAlt: "현장 위치",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    unitType: "",
    visitDate: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "이름을 입력해주세요.";
    if (!form.phone.trim()) e.phone = "연락처를 입력해주세요.";
    else if (!/^0\d{9,10}$/.test(form.phone))
      e.phone = "올바른 전화번호를 입력해주세요. (예: 01012345678)";
    if (!form.unitType) e.unitType = "관심 평형을 선택해주세요.";
    if (!form.privacy) e.privacy = "개인정보 수집 및 이용에 동의해주세요.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const set = (key: keyof FormState, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <section className="bg-[#f5f3ef] py-20 md:py-28 overflow-hidden relative min-h-[680px]">
        <span className="section-number section-number-dark" aria-hidden>07</span>

        {submitted ? (
          <div className="relative max-w-2xl mx-auto px-5 text-center flex flex-col items-center justify-center min-h-[400px]">
            <AnimatedSection animation="zoom-in">
              <div className="w-20 h-20 bg-[#901649]/10 flex items-center justify-center mx-auto mb-6 border border-[#901649]/20">
                <CheckIcon />
              </div>
              <h2 className="text-[#901649] text-2xl md:text-3xl font-black mb-3 tracking-tight">
                상담 신청이 완료되었습니다
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                빠른 시간 내에 담당 직원이 연락드리겠습니다.
                <br />
                문의전화:{" "}
                <a href="tel:1877-2131" className="font-black text-[#901649] hover:underline transition-colors">
                  1877-2131
                </a>
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", unitType: "", visitDate: "", message: "", privacy: false });
                }}
                className="border-2 border-[#901649] text-[#901649] hover:bg-[#901649] hover:text-white px-10 py-3.5 text-sm font-bold transition-all"
              >
                다시 신청하기
              </button>
            </AnimatedSection>
          </div>
        ) : (
          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <SectionTitle
              subtitle="Contact Us"
              title="상담 신청"
              description="전문 상담사가 1:1로 맞춤 상담을 도와드립니다. 아래 양식을 작성해주시면 신속히 연락드리겠습니다."
            />

            <div className="max-w-3xl mx-auto">
              {/* 폼 */}
              <AnimatedSection animation="fade-up">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 이름 */}
                    <div>
                      <label className="block text-[#901649] text-xs font-bold mb-2 tracking-wide">
                        이름 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="이름을 입력해주세요"
                        className="w-full border border-gray-200 focus:border-[#901649] focus:outline-none px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 bg-white transition-colors"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                    </div>

                    {/* 연락처 */}
                    <div>
                      <label className="block text-[#901649] text-xs font-bold mb-2 tracking-wide">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value.replace(/\D/g, ""))}
                        placeholder="01012345678"
                        maxLength={11}
                        className="w-full border border-gray-200 focus:border-[#901649] focus:outline-none px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 bg-white transition-colors"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 관심 평형 */}
                    <div>
                      <label className="block text-[#901649] text-xs font-bold mb-2 tracking-wide">
                        관심 평형 <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={form.unitType}
                        onChange={(e) => set("unitType", e.target.value)}
                        className="w-full border border-gray-200 focus:border-[#901649] focus:outline-none px-4 py-3.5 text-sm text-gray-700 bg-white transition-colors"
                      >
                        <option value="">평형을 선택해주세요</option>
                        <option value="84A">84A형 (판상형 · 552세대)</option>
                        <option value="84B">84B형 (판상형 · 143세대)</option>
                        <option value="84C">84C형 (타워형 · 135세대)</option>
                        <option value="84T">84T형 (판상형 · 22세대)</option>
                        <option value="미정">미정 / 모든 타입 문의</option>
                      </select>
                      {errors.unitType && <p className="text-red-500 text-xs mt-1.5">{errors.unitType}</p>}
                    </div>

                    {/* 방문 희망일 */}
                    <div>
                      <label className="block text-[#901649] text-xs font-bold mb-2 tracking-wide">
                        방문 희망일 (선택)
                      </label>
                      <input
                        type="date"
                        value={form.visitDate}
                        onChange={(e) => set("visitDate", e.target.value)}
                        className="w-full border border-gray-200 focus:border-[#901649] focus:outline-none px-4 py-3.5 text-sm text-gray-700 bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* 문의 내용 */}
                  <div>
                    <label className="block text-[#901649] text-xs font-bold mb-2 tracking-wide">
                      문의 내용
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      rows={4}
                      placeholder="문의하실 내용을 자유롭게 작성해주세요. (청약 자격, 대출, 평형 관련 등)"
                      className="w-full border border-gray-200 focus:border-[#901649] focus:outline-none px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 bg-white resize-none transition-colors"
                    />
                  </div>

                  {/* 개인정보 동의 */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={form.privacy}
                        onChange={(e) => set("privacy", e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#901649] cursor-pointer"
                      />
                      <span className="text-xs text-gray-500 leading-relaxed">
                        <strong className="text-gray-700">개인정보 수집 및 이용에 동의합니다.</strong>
                        <br />
                        수집 항목: 이름, 연락처 / 목적: 분양 상담 / 보유기간: 상담 완료 후 1년
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.privacy}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#901649] hover:bg-[#b01e5a] disabled:opacity-70 text-white py-[18px] text-sm font-black tracking-widest transition-all hover:shadow-xl hover:shadow-[#901649]/25 btn-shine"
                  >
                    {loading ? "전송 중..." : "무료 상담 신청하기"}
                  </button>
                </form>
              </AnimatedSection>

              {/* 문의 안내 - 하단 */}
              <AnimatedSection animation="fade-up" delay={100} className="mt-6">
                <div className="bg-[#901649] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex gap-4 items-center">
                    <div className="text-white shrink-0"><PhoneIcon /></div>
                    <div>
                      <p className="text-white/40 text-xs mb-1 tracking-wide">분양 문의 전화</p>
                      <a href="tel:1877-2131" className="text-white font-black text-xl hover:underline transition-colors">
                        1877-2131
                      </a>
                    </div>
                  </div>
                  <div className="sm:border-l border-white/20 sm:pl-6">
                    <p className="text-white/70 text-sm font-bold">동원개발 주식회사</p>
                    <p className="text-white/35 text-xs mt-0.5">50년 신뢰 · 3無 경영 · 시행·시공</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        )}
      </section>

      {/* 오시는 길 */}
      <section className="bg-white py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection animation="fade-up" className="mb-8 md:mb-10">
            <p className="text-[#901649] text-[11px] tracking-[0.45em] font-semibold uppercase mb-2">Directions</p>
            <h2 className="text-[#901649] text-2xl md:text-3xl font-black tracking-tight">오시는 길</h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-px bg-[#901649]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#901649]" />
              <div className="w-10 h-px bg-[#901649]" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIRECTIONS.map((d, i) => (
              <AnimatedSection key={d.label} animation="fade-up" delay={i * 100} threshold={0.05}>
                <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="bg-[#901649] p-5 md:p-6">
                    <p className="text-white/60 text-[10px] tracking-[0.4em] font-bold uppercase mb-1.5">
                      {d.labelEn}
                    </p>
                    <p className="text-white font-black text-base mb-2">{d.label}</p>
                    <div className="flex items-start gap-2 text-white/60 text-sm">
                      <LocationIcon />
                      <span>{d.address}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#901649]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
