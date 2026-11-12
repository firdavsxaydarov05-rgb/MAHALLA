import React, { useState } from 'react';
import { TRAP_QUESTIONS, CASE_STUDIES } from '../data/newspaperData.ts';
import { 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  FileQuestion, 
  BookOpen,
  ExternalLink
} from 'lucide-react';

export const SectionTrapsAndCases: React.FC = () => {
  // Trap questions states
  const [trapFilter, setTrapFilter] = useState<'ALL' | 'MDH' | 'FOB' | 'IKKISI'>('ALL');
  const [openedTraps, setOpenedTraps] = useState<Record<number, boolean>>({});

  // Case studies states
  const [openedCases, setOpenedCases] = useState<Record<number, boolean>>({ 1: true });

  // Toggle trap answer
  const toggleTrap = (id: number) => {
    setOpenedTraps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle case study solution
  const toggleCase = (id: number) => {
    setOpenedCases((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter traps
  const filteredTraps = TRAP_QUESTIONS.filter((t) => {
    if (trapFilter === 'ALL') return true;
    return t.qonun === trapFilter;
  });

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="border-b-2 border-[#1A1A1A] pb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold">
            5-Bo'lim · Amaliy Sinov & Kazuslar
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <a 
              href="https://lex.uz/docs/-112170" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1A1A1A] hover:text-[#C8102E] underline flex items-center gap-1"
            >
              <span>MDH Qonuni</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a 
              href="https://lex.uz/docs/-2156899" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1A1A1A] hover:text-[#C8102E] underline flex items-center gap-1"
            >
              <span>FOB Qonuni</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
        <h2 className="font-editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-1">
          Tuzoqlar va Vaziyatli Masalalar (Keyslar)
        </h2>
        <p className="text-sm font-editorial-sub italic text-[#59554E] mt-1 max-w-3xl">
          Amaliyotda va qonunchilik tahlilida eng ko'p chalg'itadigan 15 ta huquqiy tuzoq hamda 
          6 ta real sud-huquqiy kazusning to'liq yechimlari.
        </p>
      </div>

      {/* 6.1 TOP-15 TUZOQLI SAVOLLAR */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#D1CCC0] gap-4 mb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-bold">
              6.1-Bo'lim · Qonunchilik Felyetoni
            </div>
            <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
              Top-15 Tuzoqli Savollar (Chalg'ituvchi Mezonlar)
            </h3>
          </div>

          <div className="flex items-center gap-1 text-xs font-editorial-body">
            <button
              onClick={() => setTrapFilter('ALL')}
              className={`px-3 py-1 font-semibold transition-colors cursor-pointer ${
                trapFilter === 'ALL' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
              }`}
            >
              Barchasi (15)
            </button>
            <button
              onClick={() => setTrapFilter('MDH')}
              className={`px-3 py-1 font-semibold transition-colors cursor-pointer ${
                trapFilter === 'MDH' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
              }`}
            >
              Hokim & Kengash (MDH)
            </button>
            <button
              onClick={() => setTrapFilter('FOB')}
              className={`px-3 py-1 font-semibold transition-colors cursor-pointer ${
                trapFilter === 'FOB' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
              }`}
            >
              Mahalla (FOB)
            </button>
            <button
              onClick={() => setTrapFilter('IKKISI')}
              className={`px-3 py-1 font-semibold transition-colors cursor-pointer ${
                trapFilter === 'IKKISI' ? 'bg-[#1A1A1A] text-white' : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
              }`}
            >
              Kesishuv
            </button>
          </div>
        </div>

        <div className="space-y-3 font-editorial-body">
          {filteredTraps.map((item) => {
            const isOpen = openedTraps[item.id] || false;
            return (
              <div 
                key={item.id} 
                className="border border-[#D1CCC0] bg-white transition-colors"
              >
                <button
                  onClick={() => toggleTrap(item.id)}
                  className="w-full p-4 text-left flex items-start justify-between gap-4 hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono-numbers text-xs font-bold text-[#C8102E] bg-[#EAE5D9] px-2 py-0.5 shrink-0 mt-0.5">
                      {item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                    <span className="font-bold text-sm text-[#1A1A1A] leading-snug">
                      {item.savol}
                    </span>
                  </div>
                  <div className="shrink-0 text-[#59554E] mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 pt-1 border-t border-[#EAE5D9] bg-[#FAF8F5] text-xs space-y-2">
                    <div className="p-3 bg-[#F2F8F4] border border-[#0F5132] font-semibold text-[#0F5132]">
                      Javob: {item.javob}
                    </div>
                    <p className="text-[#333] leading-relaxed">
                      {item.izoh}
                    </p>
                    <div className="text-[10px] font-mono text-[#59554E] pt-1">
                      Asos: {item.modda}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 6.2 VAZIYATLI MASALALAR (6 TA KEYSLAR) */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#0F5132] font-bold">
            6.2-Bo'lim · Huquqiy Kazuslar Tahlili
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            6 ta Hayotiy Vaziyatli Masalalar (Keyslar)
          </h3>
          <p className="text-xs text-[#59554E] mt-1">
            Qonun moddalarining amaliyotda qo'llanilishi va nizoli kazuslarning rasmiy huquqiy yechimlari.
          </p>
        </div>

        <div className="space-y-4 font-editorial-body">
          {CASE_STUDIES.map((c) => {
            const isOpen = openedCases[c.id] || false;
            return (
              <div key={c.id} className="border border-[#D1CCC0] bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs font-mono text-[#C8102E] font-bold uppercase mb-2">
                    <span>{c.keys}</span>
                    <span className="text-[#59554E]">{c.huquqiyAsos}</span>
                  </div>

                  <p className="text-sm font-semibold text-[#1A1A1A] leading-relaxed mb-4">
                    {c.savol}
                  </p>

                  <button
                    onClick={() => toggleCase(c.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A] bg-[#EDEAE1] hover:bg-[#E2DDD2] px-3 py-1.5 border border-[#D1CCC0] transition-colors cursor-pointer"
                  >
                    <span>{isOpen ? 'Yechimni yashirish' : 'Rasmiy Huquqiy Yechimni Ochish'}</span>
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isOpen && (
                    <div className="mt-4 p-4 bg-[#FAF8F5] border-l-2 border-[#0F5132] text-xs leading-relaxed text-[#292524] space-y-2">
                      <div className="font-mono text-[10px] uppercase font-bold text-[#0F5132]">
                        Qonuniy Tahlil va Yechim:
                      </div>
                      <p>{c.yechim}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
