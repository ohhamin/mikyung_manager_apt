"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

type FormState = {
  name: string;
  phone: string;
  unitType: string;
  message: string;
  privacy: boolean;
};

type FormErrors = {
  name?: string;
  phone?: string;
  unitType?: string;
  privacy?: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    unitType: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "이름을 입력해주세요.";
    if (!form.phone.trim()) e.phone = "연락처를 입력해주세요.";
    else if (!/^[\d-]{9,14}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "올바른 전화번호 형식으로 입력해주세요.";
    if (!form.unitType) e.unitType = "관심 평형을 선택해주세요.";
    if (!form.privacy) e.privacy = "개인정보 수집 및 이용에 동의해주세요.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const set = (key: keyof FormState, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  if (submitted) {
    return (
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <div className="w-16 h-16 bg-[#c4943a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon />
          </div>
          <h2 className="text-[#0c1b33] text-2xl font-bold mb-3">상담 신청이 완료되었습니다</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            빠른 시간 내에 담당 직원이 연락드리겠습니다.
            <br />
            문의전화: <strong className="text-[#0c1b33]">031-1234-5678</strong>
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", unitType: "", message: "", privacy: false }); }}
            className="border border-[#0c1b33] text-[#0c1b33] hover:bg-[#0c1b33] hover:text-white px-8 py-3 text-sm font-medium transition-colors"
          >
            다시 신청하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Contact Us"
          title="상담 신청"
          description="전문 상담사가 1:1로 맞춤 상담을 도와드립니다. 아래 양식을 작성해주시면 신속히 연락드리겠습니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* 연락처 정보 */}
          <div className="lg:col-span-2">
            <div className="bg-[#0c1b33] p-8 h-full">
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">문의 안내</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-[#c4943a] mt-0.5 shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">분양 문의 전화</p>
                    <a href="tel:031-1234-5678" className="text-white font-semibold text-lg hover:text-[#c4943a] transition-colors">
                      031-1234-5678
                    </a>
                    <p className="text-white/40 text-xs mt-1">평일 09:00 ~ 18:00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#c4943a] mt-0.5 shrink-0">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">모델하우스 위치</p>
                    <p className="text-white text-sm leading-relaxed">
                      경기도 하남시 미사강변동<br />
                      파크로 1234 미경 모델하우스
                    </p>
                    <p className="text-white/40 text-xs mt-1.5">매일 10:00 ~ 18:00 운영</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/50 text-xs mb-3">빠른 상담</p>
                  <a
                    href="https://open.kakao.com/"
                    className="flex items-center justify-center gap-2 bg-[#FAE100] text-[#391B1B] px-4 py-3 text-sm font-bold hover:opacity-90 transition-opacity w-full"
                  >
                    <KakaoIcon />
                    카카오 채널 상담
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 폼 */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            {/* 이름 */}
            <div>
              <label className="block text-[#0c1b33] text-xs font-semibold mb-2 tracking-wide">
                이름 <span className="text-[#c4943a]">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="이름을 입력해주세요"
                className="w-full border border-gray-200 focus:border-[#0c1b33] focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-300 transition-colors"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
            </div>

            {/* 연락처 */}
            <div>
              <label className="block text-[#0c1b33] text-xs font-semibold mb-2 tracking-wide">
                연락처 <span className="text-[#c4943a]">*</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="010-0000-0000"
                className="w-full border border-gray-200 focus:border-[#0c1b33] focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-300 transition-colors"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone as string}</p>}
            </div>

            {/* 관심 평형 */}
            <div>
              <label className="block text-[#0c1b33] text-xs font-semibold mb-2 tracking-wide">
                관심 평형 <span className="text-[#c4943a]">*</span>
              </label>
              <select
                value={form.unitType}
                onChange={(e) => set("unitType", e.target.value)}
                className="w-full border border-gray-200 focus:border-[#0c1b33] focus:outline-none px-4 py-3 text-sm text-gray-700 bg-white transition-colors"
              >
                <option value="">관심 평형을 선택해주세요</option>
                <option value="59A">59A형 (전용 59.96㎡)</option>
                <option value="59B">59B형 (전용 59.82㎡)</option>
                <option value="84A">84A형 (전용 84.94㎡)</option>
                <option value="84B">84B형 (전용 84.77㎡)</option>
                <option value="미정">미정 / 모든 타입 문의</option>
              </select>
              {errors.unitType && <p className="text-red-500 text-xs mt-1.5">{errors.unitType}</p>}
            </div>

            {/* 문의 내용 */}
            <div>
              <label className="block text-[#0c1b33] text-xs font-semibold mb-2 tracking-wide">
                문의 내용
              </label>
              <textarea
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                rows={4}
                placeholder="문의하실 내용을 자유롭게 작성해주세요."
                className="w-full border border-gray-200 focus:border-[#0c1b33] focus:outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-300 resize-none transition-colors"
              />
            </div>

            {/* 개인정보 동의 */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.privacy}
                  onChange={(e) => set("privacy", e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#c4943a] cursor-pointer"
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
              className="w-full bg-[#c4943a] hover:bg-[#a87830] text-white py-4 text-sm font-bold tracking-widest transition-colors"
            >
              상담 신청하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#c4943a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C6.477 3 2 6.582 2 11c0 2.717 1.5 5.11 3.8 6.661L4.8 21l4.1-2.19C9.6 18.934 10.786 19 12 19c5.523 0 10-3.582 10-8s-4.477-8-10-8z"/>
    </svg>
  );
}
