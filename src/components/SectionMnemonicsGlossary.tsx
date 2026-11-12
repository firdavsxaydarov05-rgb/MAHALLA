import React, { useState } from 'react';
import { MNEMONICS, GLOSSARY, DISCUSSION_PROMPTS } from '../data/newspaperData.ts';
import { 
  Sparkles, 
  Search, 
  BookMarked, 
  MessageSquare, 
  ExternalLink, 
  Share2, 
  Send,
  HelpCircle,
  FileText
} from 'lucide-react';

export const SectionMnemonicsGlossary: React.FC = () => {
  // Glossary search state
  const [glossarySearch, setGlossarySearch] = useState('');

  // Discussion thoughts state
  const [activeDiscussionId, setActiveDiscussionId] = useState<number>(1);
  const [userThoughts, setUserThoughts] = useState<Record<number, string[]>>({
    1: ["Hokimning Kengash raisi bo'lishi ijro vakili o'zining qarorlarini o'zi ma'qullashiga olib kelar edi. Ajratilish — xolislik kafolatidir."]
  });
  const [newThoughtText, setNewThoughtText] = useState('');

  // Handle submitting user note in forum
  const handleAddThought = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newThoughtText.trim()) return;
    setUserThoughts((prev) => ({
      ...prev,
      [activeDiscussionId]: [...(prev[activeDiscussionId] || []), newThoughtText.trim()]
    }));
    setNewThoughtText('');
  };

  const filteredGlossary = GLOSSARY.filter((item) => 
    item.atama.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.manosi.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.amaliyMisol.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="border-b-2 border-[#1A1A1A] pb-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[#0F5132] font-bold">
          6-Bo'lim · Mnemonika, Atamalar va Forum
        </div>
        <h2 className="font-editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-1">
          Eslab Qolish Usullari, Lug'at va Munozara Forumi
        </h2>
        <p className="text-sm font-editorial-sub italic text-[#59554E] mt-1 max-w-3xl">
          Imtihon formulalari (5-5-5, 3-3-3, 2/3), professional huquqiy atamalar izohli lug'ati hamda 
          davlat boshqaruvi bo'yicha tahliliy muhokamalar maydoni.
        </p>
      </div>

      {/* 7.1 MNEMONIKA FORMULALARI */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-bold">
            7.1-Bo'lim · 8 ta Mnemonik Formula
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Tez Eslab Qolish Formulalari (Flash-Mnemonics)
          </h3>
          <p className="text-xs text-[#59554E] mt-1">
            Qonun moddalaridagi murakkab raqamlarni bir zumda xotirada saqlash usullari:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-editorial-body">
          {MNEMONICS.map((m, idx) => (
            <div key={idx} className="p-4 bg-white border border-[#D1CCC0] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#C8102E] bg-[#EAE5D9] px-2 py-0.5 inline-block mb-2">
                  {m.kod}
                </span>
                <h4 className="font-bold text-sm text-[#1A1A1A] mb-2 leading-tight">
                  {m.formula}
                </h4>
                <p className="text-[11px] text-[#59554E] leading-relaxed">
                  {m.izoh}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7.2 MUHOKAMA UCHUN SAVOLLAR (EDITORIAL FORUM) */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
            7.2-Bo'lim · Konseptual Bahslar Forumi
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Muhokama Uchun Konseptual Savollar
          </h3>
          <p className="text-xs text-[#59554E] mt-1">
            Qonunchilikning falsafiy va doktrinal asoslari bo'yicha tahlillar va fikr almashish:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Discussion prompts list (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {DISCUSSION_PROMPTS.map((dp) => (
              <button
                key={dp.id}
                onClick={() => setActiveDiscussionId(dp.id)}
                className={`w-full p-3.5 text-left border text-xs font-editorial-body transition-colors cursor-pointer ${
                  activeDiscussionId === dp.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white text-[#1A1A1A] border-[#D1CCC0] hover:bg-[#F4F1EA]'
                }`}
              >
                <div className={`font-mono text-[10px] uppercase font-bold mb-1 ${
                  activeDiscussionId === dp.id ? 'text-[#EAE5D9]' : 'text-[#C8102E]'
                }`}>
                  0{dp.id}-Mavzu
                </div>
                <div className="font-semibold leading-snug">
                  {dp.savol}
                </div>
              </button>
            ))}
          </div>

          {/* Active Discussion Detail & User Notes (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#D1CCC0] p-5 flex flex-col justify-between">
            {(() => {
              const currentPrompt = DISCUSSION_PROMPTS.find((p) => p.id === activeDiscussionId) || DISCUSSION_PROMPTS[0];
              const thoughts = userThoughts[activeDiscussionId] || [];

              return (
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#0F5132] font-bold uppercase block mb-1">
                      Rasmiy Huquqiy Doktrina Tahlili
                    </span>
                    <h4 className="font-editorial-title text-base font-bold text-[#1A1A1A] mb-3">
                      {currentPrompt.savol}
                    </h4>
                    <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#1A1A1A] text-xs font-editorial-body text-[#292524] leading-relaxed mb-4">
                      {currentPrompt.tahlil}
                      <div className="font-mono text-[10px] text-[#59554E] mt-2 pt-2 border-t border-[#D1CCC0]">
                        Huquqiy asos: {currentPrompt.konstitutsiyaviyAsos}
                      </div>
                    </div>
                  </div>

                  {/* Thoughts / Community Notes */}
                  <div className="border-t border-[#D1CCC0] pt-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#59554E] mb-2">
                      Foydalanuvchi Mulohazalari ({thoughts.length}):
                    </div>
                    
                    <div className="space-y-2 max-h-40 overflow-y-auto mb-3">
                      {thoughts.length === 0 ? (
                        <div className="text-xs text-[#777] italic">Ushbu mavzu bo'yicha birinchi fikrni qoldiring...</div>
                      ) : (
                        thoughts.map((t, idx) => (
                          <div key={idx} className="p-2.5 bg-[#F4F1EA] text-xs font-editorial-body text-[#1A1A1A] border border-[#D1CCC0]">
                            «{t}»
                          </div>
                        ))
                      )}
                    </div>

                    {/* Add note input */}
                    <form onSubmit={handleAddThought} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="O'z fikringizni yozing..."
                        value={newThoughtText}
                        onChange={(e) => setNewThoughtText(e.target.value)}
                        className="flex-1 p-2 bg-white border border-[#D1CCC0] text-xs font-editorial-body"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-2 text-xs font-bold bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors cursor-pointer shrink-0"
                      >
                        Qo'shish
                      </button>
                    </form>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* 7.3 ATAMALAR LUG'ATI */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#D1CCC0] gap-4 mb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
              7.3-Bo'lim · Yuridik Terminologiya
            </div>
            <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
              Atamalar Lug'ati
            </h3>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#59554E]" />
            <input
              type="text"
              placeholder="Atamani qidirish..."
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 bg-white border border-[#D1CCC0] text-xs font-editorial-body w-52"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-editorial-body">
          {filteredGlossary.map((term, idx) => (
            <div key={idx} className="p-4 bg-white border border-[#D1CCC0] space-y-2">
              <div className="font-editorial-title text-base font-bold text-[#1A1A1A] pb-1 border-b border-[#EAE5D9]">
                {term.atama}
              </div>
              <p className="text-xs text-[#292524] leading-relaxed">
                {term.manosi}
              </p>
              <div className="text-[11px] text-[#59554E] bg-[#F4F1EA] p-2 border border-[#D1CCC0]">
                <strong>Amaliy misol:</strong> {term.amaliyMisol}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7.4 TEXNIK VA HUQUQIY MANBALAR (EXACT LEX.UZ ACTS) */}
      <div className="p-6 bg-[#EDEAE1] border border-[#D1CCC0] text-xs font-editorial-body text-[#333]">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#C8102E] font-bold mb-1">
          7.4-Bo'lim · Rasmiy Huquqiy Manbalar
        </div>
        <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A] mb-2">
          Rasmiy Huquqiy Manbalar va Amaldagi Qonunchilik Hujjatlari
        </h4>
        <p className="leading-relaxed mb-4">
          Ushbu nashrdagi tahlillar O'zbekiston Respublikasi Qonunchilik ma'lumotlari milliy bazasi (Lex.uz) ning 
          amaldagi qonun tahrirlari asosida ishlab chiqilgan:
        </p>

        <div className="space-y-3">
          <div className="p-3 bg-white border border-[#D1CCC0] flex items-start justify-between gap-4">
            <div>
              <div className="font-bold text-[#1A1A1A]">
                1. «Mahalliy davlat hokimiyati toʻgʻrisida»gi Oʻzbekiston Respublikasi Qonuni
              </div>
              <div className="text-[11px] text-[#59554E] mt-0.5">
                Hokim va Xalq deputatlari Kengashi vakolatlari, tayinlash, tasdiqlash va bekor qilish zanjiri.
              </div>
            </div>
            <a
              href="https://lex.uz/docs/-112170"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#1A1A1A] text-white hover:bg-[#C8102E] transition-colors text-[11px] font-mono font-bold shrink-0 inline-flex items-center gap-1"
            >
              <span>Lex.uz (-112170)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-3 bg-white border border-[#D1CCC0] flex items-start justify-between gap-4">
            <div>
              <div className="font-bold text-[#1A1A1A]">
                2. «Fuqarolarning oʻzini oʻzi boshqarish organlari toʻgʻrisida»gi Oʻzbekiston Respublikasi Qonuniga oʻzgartish va qoʻshimchalar kiritish haqida
              </div>
              <div className="text-[11px] text-[#59554E] mt-0.5">
                Mahalla (fuqarolar yig'ini) nodavlat maqomi, 8 ta komissiya, 5 ta vakolat klasteri va moliyaviy daxlsizlik kafolatlari.
              </div>
            </div>
            <a
              href="https://lex.uz/docs/-2156899"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#0F5132] text-white hover:bg-[#0b3d26] transition-colors text-[11px] font-mono font-bold shrink-0 inline-flex items-center gap-1"
            >
              <span>Lex.uz (-2156899)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-3 bg-[#FAF8F5] border border-[#D1CCC0] text-[11px] text-[#59554E]">
            <strong>Konstitutsiyaviy poydevor:</strong> O'zbekiston Respublikasi Konstitutsiyasi (XXI-XXII boblar) hamda O'zbekiston Respublikasi Saylov kodeksi.
          </div>
        </div>
      </div>
    </div>
  );
};
