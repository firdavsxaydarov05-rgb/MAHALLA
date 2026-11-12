import React, { useState } from 'react';
import { DURATION_TABLE, REPORT_FREQUENCIES } from '../data/newspaperData.ts';
import { 
  checkKengashQuorum, 
  checkKengashVote, 
  checkMahallaYiginQuorum, 
  checkYiginKengashiMeeting,
  evaluateHokimNominationRejection
} from '../utils/calculator.ts';
import { 
  Calculator, 
  Search, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Filter, 
  Clock, 
  Vote,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const SectionNumbersCalculator: React.FC = () => {
  // Search and filter states
  const [durationSearch, setDurationSearch] = useState('');
  const [durationCategory, setDurationCategory] = useState<string>('All');
  const [reportSearch, setReportSearch] = useState('');

  // Calculator states (5 sections)
  const [calcTab, setCalcTab] = useState<'kengash' | 'mahalla' | 'yigin_kengash' | 'rais_ozod' | 'hokim_rejection'>('kengash');

  // Kengash calculator state (allows 0 and empty input while editing)
  const [kengashTotal, setKengashTotal] = useState<number | ''>(30);
  const [kengashPresent, setKengashPresent] = useState<number | ''>(20);
  const [kengashYes, setKengashYes] = useState<number | ''>(16);
  const [kengashVoteType, setKengashVoteType] = useState<'ordinary' | 'special_two_thirds'>('ordinary');

  // Mahalla calculator state
  const [mahallaTotal, setMahallaTotal] = useState<number | ''>(900);
  const [mahallaPresent, setMahallaPresent] = useState<number | ''>(451);
  const [isVakillar, setIsVakillar] = useState<boolean>(false);

  // Yig'in Kengashi meeting state
  const [yiginKengashTotal, setYiginKengashTotal] = useState<number | ''>(10);
  const [yiginKengashPresent, setYiginKengashPresent] = useState<number | ''>(7);
  const [yiginKengashYes, setYiginKengashYes] = useState<number | ''>(4);

  // Rais dismissal state
  const [raisDismissalTotal, setRaisDismissalTotal] = useState<number | ''>(30);
  const [raisDismissalYes, setRaisDismissalYes] = useState<number | ''>(21);

  // Hokim rejection simulator (0, 1, 2, 3)
  const [rejectionCount, setRejectionCount] = useState<number | ''>(0);

  // Reusable numeric input handler that allows typing 0 and backspacing freely
  const handleNumericInput = (setter: React.Dispatch<React.SetStateAction<number | ''>>) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const raw = e.target.value.trim();
    if (raw === '') {
      setter('');
      return;
    }
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed)) {
      setter(Math.max(0, parsed));
    }
  };

  // Filter duration table
  const filteredDurations = DURATION_TABLE.filter((item) => {
    const matchesSearch = item.nima.toLowerCase().includes(durationSearch.toLowerCase()) ||
                          item.qiymat.toLowerCase().includes(durationSearch.toLowerCase()) ||
                          item.qonun.toLowerCase().includes(durationSearch.toLowerCase());
    const matchesCategory = durationCategory === 'All' || item.toifa === durationCategory;
    return matchesSearch && matchesCategory;
  });

  // Filter report frequencies
  const filteredReports = REPORT_FREQUENCIES.filter((item) => 
    item.organ.toLowerCase().includes(reportSearch.toLowerCase()) ||
    item.chastota.toLowerCase().includes(reportSearch.toLowerCase()) ||
    item.organTuri.toLowerCase().includes(reportSearch.toLowerCase())
  );

  // Safe numerical values (defaults to 0 when input is empty)
  const safeKengashTotal = typeof kengashTotal === 'number' ? kengashTotal : 0;
  const safeKengashPresent = typeof kengashPresent === 'number' ? kengashPresent : 0;
  const safeKengashYes = typeof kengashYes === 'number' ? kengashYes : 0;

  const safeMahallaTotal = typeof mahallaTotal === 'number' ? mahallaTotal : 0;
  const safeMahallaPresent = typeof mahallaPresent === 'number' ? mahallaPresent : 0;

  const safeYkTotal = typeof yiginKengashTotal === 'number' ? yiginKengashTotal : 0;
  const safeYkPresent = typeof yiginKengashPresent === 'number' ? yiginKengashPresent : 0;
  const safeYkYes = typeof yiginKengashYes === 'number' ? yiginKengashYes : 0;

  const safeRaisTotal = typeof raisDismissalTotal === 'number' ? raisDismissalTotal : 0;
  const safeRaisYes = typeof raisDismissalYes === 'number' ? raisDismissalYes : 0;

  const safeRejectionCount = typeof rejectionCount === 'number' ? rejectionCount : 0;

  // Calculation results
  const kengashQuorumRes = checkKengashQuorum(safeKengashTotal, safeKengashPresent);
  const kengashVoteRes = checkKengashVote(safeKengashTotal, safeKengashYes, kengashVoteType);
  const mahallaQuorumRes = checkMahallaYiginQuorum(safeMahallaTotal, safeMahallaPresent, isVakillar);
  const yiginKengashMeetingRes = checkYiginKengashiMeeting(safeYkTotal, safeYkPresent, safeYkYes);
  const raisDismissalRes = checkKengashVote(safeRaisTotal, safeRaisYes, 'chair_dismissal');
  const rejectionSimRes = evaluateHokimNominationRejection(safeRejectionCount);

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="border-b-2 border-[#1A1A1A] pb-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold">
          4-Bo'lim · Raqamlar, Kvorum va Hisob-kitoblar
        </div>
        <h2 className="font-editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-1">
          Raqamlar Kartochkasi & Interaktiv Kvorum Kalkulyatori
        </h2>
        <p className="text-sm font-editorial-sub italic text-[#59554E] mt-1 max-w-3xl">
          Qonunchilikdagi barcha muddatlar, kvorumlar, hisobotlar davriyligi va real vaqt rejimida 
          deputatlik sessiyalari hamda fuqarolar yig'inlarining vakolatliligini aniqlovchi kalkulyator.
        </p>
      </div>

      {/* INTERACTIVE CALCULATOR (MAIN HERO TOOL) */}
      <div className="border-2 border-[#1A1A1A] newspaper-pattern-card p-6 lg:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#D1CCC0] gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold">
              <Calculator className="w-4 h-4" />
              <span>Interaktiv Huquqiy Simulyator</span>
            </div>
            <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A] mt-0.5">
              Kvorum va Ovozlar Kalkulyatori
            </h3>
          </div>
          <span className="text-xs font-mono bg-[#1A1A1A] text-white px-3 py-1">
            MDH & FOB Qonunlari Formulalari
          </span>
        </div>

        {/* Calculator Navigation Bar */}
        <div className="flex items-center gap-1 overflow-x-auto py-3 border-b border-[#D1CCC0] text-xs font-bold font-editorial-body">
          <button
            onClick={() => setCalcTab('kengash')}
            className={`px-3 py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              calcTab === 'kengash' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
            }`}
          >
            1. Kengash Sessiyasi (2/3 Kvorum)
          </button>
          <button
            onClick={() => setCalcTab('mahalla')}
            className={`px-3 py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              calcTab === 'mahalla' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
            }`}
          >
            2. Fuqarolar Yig'ini (50%+1 / 2/3)
          </button>
          <button
            onClick={() => setCalcTab('yigin_kengash')}
            className={`px-3 py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              calcTab === 'yigin_kengash' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
            }`}
          >
            3. Mahalla Kengashi Majlisi
          </button>
          <button
            onClick={() => setCalcTab('rais_ozod')}
            className={`px-3 py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              calcTab === 'rais_ozod' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
            }`}
          >
            4. Kengash Raisini Ozod Qilish
          </button>
          <button
            onClick={() => setCalcTab('hokim_rejection')}
            className={`px-3 py-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              calcTab === 'hokim_rejection' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
            }`}
          >
            5. Hokim Nomzodi Rad Etilishi
          </button>
        </div>

        {/* Tab 1: Kengash Sessiyasi */}
        {calcTab === 'kengash' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                  Parametrlarni kiriting:
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setKengashTotal(0);
                    setKengashPresent(0);
                    setKengashYes(0);
                  }}
                  className="text-xs font-mono font-bold text-[#C8102E] hover:underline cursor-pointer bg-[#FBF0EE] px-2 py-1 border border-[#E8C0B8]"
                >
                  Hammasini 0 qilish
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Kengashdagi jami deputatlar soni:
                  </label>
                  <button
                    type="button"
                    onClick={() => setKengashTotal(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  max="120"
                  placeholder="0"
                  value={kengashTotal}
                  onChange={handleNumericInput(setKengashTotal)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
                <span className="text-[11px] text-[#59554E]">Odatda tuman/shahar kengashlarida 30 nafar bo'ladi. (0 kiritish mumkin)</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Sessiyaga amalda kelgan deputatlar soni:
                  </label>
                  <button
                    type="button"
                    onClick={() => setKengashPresent(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={kengashPresent}
                  onChange={handleNumericInput(setKengashPresent)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-[#1A1A1A]">
                      Yoqlab ovoz berganlar:
                    </label>
                    <button
                      type="button"
                      onClick={() => setKengashYes(0)}
                      className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                    >
                      [0 qilish]
                    </button>
                  </div>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={kengashYes}
                    onChange={handleNumericInput(setKengashYes)}
                    className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                    Masala toifasi:
                  </label>
                  <select
                    value={kengashVoteType}
                    onChange={(e) => setKengashVoteType(e.target.value as any)}
                    className="w-full p-2.5 bg-white border border-[#1A1A1A] text-xs font-editorial-body"
                  >
                    <option value="ordinary">Odatiy (Ko'pchilik)</option>
                    <option value="special_two_thirds">Maxsus (2/3 dan ko'p)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                Huquqiy Xulosa:
              </h4>

              {/* Quorum card */}
              <div className={`p-4 border ${
                kengashQuorumRes.isQuorumMet ? 'bg-[#F2F8F4] border-[#0F5132]' : 'bg-[#FFF8F7] border-[#C8102E]'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {kengashQuorumRes.isQuorumMet ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0F5132]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#C8102E]" />
                  )}
                  <span className={`text-xs font-mono font-bold uppercase ${
                    kengashQuorumRes.isQuorumMet ? 'text-[#0F5132]' : 'text-[#C8102E]'
                  }`}>
                    {kengashQuorumRes.isQuorumMet ? 'Sessiya Qonuniy Vakolatli' : 'Sessiya Vakolatsiz (Kvorum yo\'q)'}
                  </span>
                </div>
                <div className="text-xs text-[#1A1A1A] font-editorial-body leading-relaxed">
                  {kengashQuorumRes.explanation}
                </div>
                <div className="text-[11px] font-mono text-[#59554E] mt-2 pt-2 border-t border-[#D1CCC0]/50">
                  {kengashQuorumRes.quorumFormula}
                </div>
              </div>

              {/* Vote result card */}
              <div className={`p-4 border ${
                kengashVoteRes.isVotePassed && kengashQuorumRes.isQuorumMet
                  ? 'bg-[#F2F8F4] border-[#0F5132]'
                  : 'bg-[#FAF8F5] border-[#D1CCC0]'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <Vote className="w-4 h-4 text-[#1A1A1A]" />
                  <span className="text-xs font-mono font-bold uppercase text-[#1A1A1A]">
                    Qaror Qabul Qilinishi Natijasi
                  </span>
                </div>
                <div className="text-xs text-[#1A1A1A] font-editorial-body leading-relaxed">
                  {!kengashQuorumRes.isQuorumMet 
                    ? 'Sessiya kvorumga ega bo\'lmagani sababli ovoz berish natijasi yuridik kuchga ega emas!'
                    : kengashVoteRes.explanation}
                </div>
                <div className="text-[11px] font-mono text-[#59554E] mt-2 pt-2 border-t border-[#D1CCC0]/50">
                  {kengashVoteRes.voteFormula}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Fuqarolar Yig'ini */}
        {calcTab === 'mahalla' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                  Mahalla Ko'rsatkichlari:
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setMahallaTotal(0);
                    setMahallaPresent(0);
                  }}
                  className="text-xs font-mono font-bold text-[#C8102E] hover:underline cursor-pointer bg-[#FBF0EE] px-2 py-1 border border-[#E8C0B8]"
                >
                  Hammasini 0 qilish
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Hududdagi ovoz berish huquqiga ega jami aholi (yoki vakillar) soni:
                  </label>
                  <button
                    type="button"
                    onClick={() => setMahallaTotal(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={mahallaTotal}
                  onChange={handleNumericInput(setMahallaTotal)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Yig'ilishga amalda qatnashgan fuqarolar soni:
                  </label>
                  <button
                    type="button"
                    onClick={() => setMahallaPresent(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={mahallaPresent}
                  onChange={handleNumericInput(setMahallaPresent)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
              </div>

              <div className="p-3 bg-[#EDEAE1] border border-[#D1CCC0] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#1A1A1A] block">Yig'ilish shakli:</span>
                  <span className="text-[11px] text-[#59554E]">
                    {isVakillar ? 'Vakillar yig\'ilishi (2/3 talab etiladi)' : 'Umumiy fuqarolar yig\'ini (yarmidan ko\'p)'}
                  </span>
                </div>
                <button
                  onClick={() => setIsVakillar(!isVakillar)}
                  className="px-3 py-1.5 text-xs font-bold bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors cursor-pointer"
                >
                  {isVakillar ? 'Umumiy yig\'inga o\'tish' : 'Vakillar yig\'iniga o\'tish'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                Huquqiy Xulosa (FOB 21-modda):
              </h4>

              <div className={`p-4 border ${
                mahallaQuorumRes.isQuorumMet ? 'bg-[#F2F8F4] border-[#0F5132]' : 'bg-[#FFF8F7] border-[#C8102E]'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {mahallaQuorumRes.isQuorumMet ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0F5132]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#C8102E]" />
                  )}
                  <span className={`text-xs font-mono font-bold uppercase ${
                    mahallaQuorumRes.isQuorumMet ? 'text-[#0F5132]' : 'text-[#C8102E]'
                  }`}>
                    {mahallaQuorumRes.isQuorumMet ? 'Yig\'ilish Qonuniy Vakolatli' : 'Yig\'ilish Vakolatsiz'}
                  </span>
                </div>
                <div className="text-xs text-[#1A1A1A] font-editorial-body leading-relaxed">
                  {mahallaQuorumRes.explanation}
                </div>
                <div className="text-[11px] font-mono text-[#59554E] mt-2 pt-2 border-t border-[#D1CCC0]/50">
                  {mahallaQuorumRes.quorumFormula}
                </div>
              </div>

              <div className="p-4 bg-white border border-[#D1CCC0] text-xs">
                <span className="font-bold text-[#1A1A1A] block mb-1">Amaliy qoida (3-keys asosida):</span>
                Agar umumiy yig'inga aholini (masalan, 900 kishidan 451 kishini) to'plash imkoni bo'lmasa, Kengash qarori bilan har bir xonadon va ko'chalardan vakillar yuborilib, <strong>Vakillar yig'ilishi</strong> o'tkaziladi. Unda faqat vakillarning 2/3 qismi qatnashsa kifoyadir.
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Yig'in Kengashi Majlisi */}
        {calcTab === 'yigin_kengash' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                  Mahalla Kengashi Tarkibi (FOB 22-modda):
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setYiginKengashTotal(0);
                    setYiginKengashPresent(0);
                    setYiginKengashYes(0);
                  }}
                  className="text-xs font-mono font-bold text-[#C8102E] hover:underline cursor-pointer bg-[#FBF0EE] px-2 py-1 border border-[#E8C0B8]"
                >
                  Hammasini 0 qilish
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Kengash a'zolarining umumiy soni:
                  </label>
                  <button
                    type="button"
                    onClick={() => setYiginKengashTotal(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={yiginKengashTotal}
                  onChange={handleNumericInput(setYiginKengashTotal)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
                <span className="text-[11px] text-[#59554E]">4-keysda bu 10 nafar a'zo edi. (0 kiritish mumkin)</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Majlisda hozir bo'lgan a'zolar soni:
                  </label>
                  <button
                    type="button"
                    onClick={() => setYiginKengashPresent(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={yiginKengashPresent}
                  onChange={handleNumericInput(setYiginKengashPresent)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Qarorni yoqlaganlar soni:
                  </label>
                  <button
                    type="button"
                    onClick={() => setYiginKengashYes(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={yiginKengashYes}
                  onChange={handleNumericInput(setYiginKengashYes)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                Majlis Natijasi:
              </h4>

              <div className={`p-4 border ${
                yiginKengashMeetingRes.quorum.isQuorumMet ? 'bg-[#F2F8F4] border-[#0F5132]' : 'bg-[#FFF8F7] border-[#C8102E]'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {yiginKengashMeetingRes.quorum.isQuorumMet ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0F5132]" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#C8102E]" />
                  )}
                  <span className={`text-xs font-mono font-bold uppercase ${
                    yiginKengashMeetingRes.quorum.isQuorumMet ? 'text-[#0F5132]' : 'text-[#C8102E]'
                  }`}>
                    {yiginKengashMeetingRes.quorum.isQuorumMet ? 'Majlis Kvorumga Ega' : 'Majlis Vakolatsiz'}
                  </span>
                </div>
                <div className="text-xs text-[#1A1A1A] font-editorial-body leading-relaxed">
                  {yiginKengashMeetingRes.quorum.explanation}
                </div>
                <div className="text-[11px] font-mono text-[#59554E] mt-2 pt-2 border-t border-[#D1CCC0]/50">
                  {yiginKengashMeetingRes.quorum.quorumFormula}
                </div>
              </div>

              <div className={`p-4 border ${
                yiginKengashMeetingRes.decision.isVotePassed
                  ? 'bg-[#F2F8F4] border-[#0F5132]'
                  : 'bg-[#FAF8F5] border-[#D1CCC0]'
              }`}>
                <div className="text-xs font-mono font-bold uppercase text-[#1A1A1A] mb-1">
                  Qaror Holati (Hozir bo'lganlarga nisbatan):
                </div>
                <div className="text-xs text-[#1A1A1A] font-editorial-body leading-relaxed">
                  {yiginKengashMeetingRes.decision.explanation}
                </div>
                <div className="text-[11px] font-mono text-[#59554E] mt-2 pt-2 border-t border-[#D1CCC0]/50">
                  {yiginKengashMeetingRes.decision.voteFormula}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Kengash Raisini Muddatidan Oldin Ozod Qilish */}
        {calcTab === 'rais_ozod' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                  MDH Qonuni 16-1-Modda Bo'yicha Ozod Qilish:
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setRaisDismissalTotal(0);
                    setRaisDismissalYes(0);
                  }}
                  className="text-xs font-mono font-bold text-[#C8102E] hover:underline cursor-pointer bg-[#FBF0EE] px-2 py-1 border border-[#E8C0B8]"
                >
                  Hammasini 0 qilish
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Kengashdagi jami deputatlar soni:
                  </label>
                  <button
                    type="button"
                    onClick={() => setRaisDismissalTotal(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={raisDismissalTotal}
                  onChange={handleNumericInput(setRaisDismissalTotal)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Raisni ozod qilishni yoqlab ovoz bergan deputatlar:
                  </label>
                  <button
                    type="button"
                    onClick={() => setRaisDismissalYes(0)}
                    className="text-[10px] font-mono font-bold text-[#C8102E] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={raisDismissalYes}
                  onChange={handleNumericInput(setRaisDismissalYes)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
              </div>

              <div className="p-3 bg-[#EDEAE1] border border-[#D1CCC0] text-xs">
                <span className="font-bold text-[#1A1A1A] block mb-1">Boshlang'ich tashabbus:</span>
                Masalani sessiya kun tartibiga kiritish uchun deputatlar umumiy sonining kamida <strong>1/3 qismi</strong> (30 deputatdan kamida 10 nafar) taklifi kerak bo'ladi.
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                Talab: Deputatlar Umumiy Sonining 2/3 Qismidan Ko'prog'i!
              </h4>

              <div className={`p-4 border ${
                raisDismissalRes.isVotePassed ? 'bg-[#FFF8F7] border-[#C8102E]' : 'bg-[#F2F8F4] border-[#0F5132]'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-mono font-bold uppercase ${
                    raisDismissalRes.isVotePassed ? 'text-[#C8102E]' : 'text-[#0F5132]'
                  }`}>
                    {raisDismissalRes.isVotePassed ? 'Rais Lavozimidan Ozod Etildi' : 'Rais Lavozimida Qoladi'}
                  </span>
                </div>
                <div className="text-xs text-[#1A1A1A] font-editorial-body leading-relaxed">
                  {raisDismissalRes.explanation}
                </div>
                <div className="text-[11px] font-mono text-[#59554E] mt-2 pt-2 border-t border-[#D1CCC0]/50">
                  {raisDismissalRes.voteFormula}
                </div>
              </div>

              <div className="p-4 bg-white border border-[#D1CCC0] text-xs leading-relaxed text-[#4A4742]">
                <strong>Muhim huquqiy noziklik:</strong> Agar 30 deputat bo'lsa, 2/3 qism 20 ta bo'ladi. Qonunda esa «2/3 qismidan KO'PROG'I» deyilgan, shuning uchun kamida <strong>21 ta ovoz</strong> olinishi shart! 20 ta ovoz bilan rais bo'shatilmaydi!
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Hokim Nomzodi Rad Etilishi Simulyatori */}
        {calcTab === 'hokim_rejection' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                  Nomzod Necha Marta Rad Etildi? (MDH 2-modda)
                </h4>
                <button
                  type="button"
                  onClick={() => setRejectionCount(0)}
                  className="text-xs font-mono font-bold text-[#0F5132] hover:underline cursor-pointer bg-[#F2F8F4] px-2 py-1 border border-[#0F5132]"
                >
                  [0 qilish / Tasdiq]
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setRejectionCount(num)}
                    className={`py-3 px-2 text-center border font-mono font-bold text-xs cursor-pointer transition-colors ${
                      safeRejectionCount === num
                        ? (num === 0 ? 'bg-[#0F5132] text-white border-[#0F5132]' : 'bg-[#C8102E] text-white border-[#C8102E]')
                        : 'bg-white text-[#1A1A1A] border-[#D1CCC0] hover:bg-[#EAE5D9]'
                    }`}
                  >
                    {num === 0 ? '0 marta (Tasdiq)' : `${num}-marta rad`}
                  </button>
                ))}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-[#1A1A1A]">
                    Aniq sonni kiriting (0 dan 3 gacha):
                  </label>
                  <button
                    type="button"
                    onClick={() => setRejectionCount(0)}
                    className="text-[10px] font-mono font-bold text-[#0F5132] hover:underline cursor-pointer"
                  >
                    [0 qilish]
                  </button>
                </div>
                <input
                  type="number"
                  min="0"
                  max="3"
                  placeholder="0"
                  value={rejectionCount}
                  onChange={handleNumericInput(setRejectionCount)}
                  className="w-full p-2.5 bg-white border border-[#1A1A1A] text-sm font-mono-numbers focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]"
                />
              </div>

              <p className="text-xs text-[#59554E] leading-relaxed">
                <strong>0 marta rad etilsa:</strong> Nomzod birinchi urinishdayoq ma'qullangan. <strong>1 yoki 2 marta rad etilsa:</strong> Prezident Kengashni tarqata olmaydi, 1 oy ichida maslahatlashuv o'tkaziladi. <strong>3 marta rad etilsagina:</strong> Prezident hokim v.b. tayinlaydi va Kengashni muddatidan oldin tarqatish huquqiga ega bo'ladi.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A]">
                Prezident Vakolati va Kengash Taqdiri:
              </h4>

              <div className={`p-4 border ${
                rejectionSimRes.canDissolveKengash ? 'bg-[#FFF8F7] border-[#C8102E]' : 'bg-[#FAF8F5] border-[#D1CCC0]'
              }`}>
                <div className="font-mono text-xs font-bold text-[#C8102E] uppercase mb-1">
                  {rejectionSimRes.statusText}
                </div>
                <p className="text-sm text-[#1A1A1A] font-editorial-body leading-relaxed mb-3">
                  {rejectionSimRes.nextStep}
                </p>
                <div className="text-[11px] font-mono text-[#59554E] pt-2 border-t border-[#D1CCC0]">
                  {rejectionSimRes.canDissolveKengash
                    ? 'Diqqat: Yangi Kengash saylovi 3 oy ichida o\'tkazilishi shart.'
                    : 'Diqqat: Prezident 1 yoki 2-rad etishdan so\'ng darhol Kengashni tarqata olmaydi! (1-keys)'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4.1 Muddatlar Jadvali (Searchable & Filterable Table) */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#D1CCC0] gap-4 mb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
              4.1-Jadval · Xronologik Ko'rsatkichlar
            </div>
            <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
              Muddatlar Jadvali
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#59554E]" />
              <input
                type="text"
                placeholder="Muddatni qidirish..."
                value={durationSearch}
                onChange={(e) => setDurationSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-white border border-[#D1CCC0] text-xs font-editorial-body w-48"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1 text-xs">
              {['All', 'Vakolat', 'Cheklov', 'Jarayon', 'Nazorat'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setDurationCategory(cat)}
                  className={`px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                    durationCategory === cat
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
                  }`}
                >
                  {cat === 'All' ? 'Barchasi' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#D1CCC0] font-editorial-body">
            <thead className="bg-[#1A1A1A] text-white uppercase text-[10px] tracking-wider font-mono">
              <tr>
                <th className="p-3 border-r border-[#333]">Harakat / Institut</th>
                <th className="p-3 border-r border-[#333]">Qonuniy Muddat</th>
                <th className="p-3 border-r border-[#333]">Toifasi</th>
                <th className="p-3">Qonun va Modda</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1CCC0] bg-white">
              {filteredDurations.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F4F1EA] transition-colors">
                  <td className="p-3 font-medium text-[#1A1A1A] border-r border-[#D1CCC0]">
                    {row.nima}
                  </td>
                  <td className="p-3 font-bold text-[#C8102E] font-mono-numbers border-r border-[#D1CCC0] whitespace-nowrap">
                    {row.qiymat}
                  </td>
                  <td className="p-3 border-r border-[#D1CCC0]">
                    <span className="text-[10px] uppercase font-mono bg-[#EAE5D9] px-1.5 py-0.5 text-[#1A1A1A]">
                      {row.toifa}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-[#0F5132] whitespace-nowrap">
                    {row.qonun}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4.2 Kvorum va Ovoz Berish Me'yorlari Jadvali */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
            4.2-Jadval · Qaror Qabul Qilish Mezonlari
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Kvorum va Ovoz Berish Jadvali
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#D1CCC0] font-editorial-body">
            <thead className="bg-[#1A1A1A] text-white uppercase text-[10px] tracking-wider font-mono">
              <tr>
                <th className="p-3 border-r border-[#333]">Organ / Jarayon</th>
                <th className="p-3 border-r border-[#333]">Kvorum (Vakolatli bo'lishi)</th>
                <th className="p-3">Qaror Qabul Qilish Ovozi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1CCC0] bg-white">
              <tr className="hover:bg-[#F4F1EA]">
                <td className="p-3 font-bold border-r border-[#D1CCC0]">Kengash sessiyasi</td>
                <td className="p-3 font-mono text-[#C8102E] font-bold border-r border-[#D1CCC0]">Deputatlarning kamida 2/3 qismi</td>
                <td className="p-3">Umumiy sonning oddiy ko'pchiligi (maxsus masalalarda 2/3 dan ko'p)</td>
              </tr>
              <tr className="hover:bg-[#F4F1EA]">
                <td className="p-3 font-bold border-r border-[#D1CCC0]">Kengash raisini saylash</td>
                <td className="p-3 text-[#59554E] border-r border-[#D1CCC0]">Birinchi sessiyada o'tkaziladi</td>
                <td className="p-3 font-mono text-[#0F5132] font-bold">Umumiy sonning oddiy ko'pchiligi (50% + 1)</td>
              </tr>
              <tr className="hover:bg-[#F4F1EA]">
                <td className="p-3 font-bold border-r border-[#D1CCC0]">Kengash raisini ozod qilish</td>
                <td className="p-3 border-r border-[#D1CCC0]">Taklif: kamida 1/3 deputat</td>
                <td className="p-3 font-mono text-[#C8102E] font-bold">Umumiy sonning 2/3 qismidan ko'prog'i</td>
              </tr>
              <tr className="hover:bg-[#F4F1EA]">
                <td className="p-3 font-bold border-r border-[#D1CCC0]">Kengash so'rovi va tekshiruvi</td>
                <td className="p-3 text-[#59554E] border-r border-[#D1CCC0]">Sessiya kun tartibiga kiritiladi</td>
                <td className="p-3 font-mono text-[#0F5132] font-bold">Umumiy sonning oddiy ko'pchiligi</td>
              </tr>
              <tr className="hover:bg-[#F4F1EA]">
                <td className="p-3 font-bold border-r border-[#D1CCC0]">Fuqarolar yig'ini (Mahalla)</td>
                <td className="p-3 font-mono text-[#C8102E] font-bold border-r border-[#D1CCC0]">Huquqli aholining yarmidan ko'pi</td>
                <td className="p-3">Oddiy ko'pchilik (ochiq yoki yashirin ovoz)</td>
              </tr>
              <tr className="hover:bg-[#F4F1EA]">
                <td className="p-3 font-bold border-r border-[#D1CCC0]">Mahalla vakillar yig'ilishi</td>
                <td className="p-3 font-mono text-[#C8102E] font-bold border-r border-[#D1CCC0]">Vakillarning kamida 2/3 qismi</td>
                <td className="p-3">Oddiy ko'pchilik ovozi</td>
              </tr>
              <tr className="hover:bg-[#F4F1EA]">
                <td className="p-3 font-bold border-r border-[#D1CCC0]">Yig'in kengashi majlisi</td>
                <td className="p-3 font-mono text-[#C8102E] font-bold border-r border-[#D1CCC0]">A'zolarning kamida 2/3 qismi</td>
                <td className="p-3 font-mono text-[#0F5132] font-bold">Hozir bo'lganlarning yarmidan ko'pi (ochiq ovoz)</td>
              </tr>
              <tr className="hover:bg-[#F4F1EA]">
                <td className="p-3 font-bold border-r border-[#D1CCC0]">Mahalla komissiyasi a'zoligi</td>
                <td className="p-3 text-[#59554E] border-r border-[#D1CCC0]">Yig'inda saylanadi</td>
                <td className="p-3 font-mono text-[#0F5132] font-bold">Hozir bo'lganlarning yarmidan ko'pi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4.3 Hisobot va Yig'ilishlar Davriyligi (Chastota) */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#D1CCC0] gap-4 mb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
              4.3-Jadval · Muntazamlik va Reja
            </div>
            <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
              Hisobot va Yig'ilishlar Davriyligi (Chastota)
            </h3>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#59554E]" />
            <input
              type="text"
              placeholder="Idorani qidirish..."
              value={reportSearch}
              onChange={(e) => setReportSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 bg-white border border-[#D1CCC0] text-xs font-editorial-body w-48"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-editorial-body">
          {filteredReports.map((item, idx) => (
            <div key={idx} className="p-3.5 bg-white border border-[#D1CCC0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#59554E] mb-1">
                  <span>{item.organTuri}</span>
                  <span className="text-[#0F5132] font-bold">{item.asos}</span>
                </div>
                <div className="font-bold text-[#1A1A1A] mb-1 leading-snug">
                  {item.organ}
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-[#EAE5D9] font-mono text-[#C8102E] font-bold">
                {item.chastota}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
