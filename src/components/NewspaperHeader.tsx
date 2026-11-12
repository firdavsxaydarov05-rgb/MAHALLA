import React from 'react';
import { ActiveTab } from '../types/data.ts';
import { ExternalLink, Calculator } from 'lucide-react';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenCalculator: () => void;
}

export const NewspaperHeader: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  onOpenCalculator,
}) => {
  return (
    <header className="border-b-2 border-[#1A1A1A] bg-[#F4F1EA]">
      {/* Newspaper Top Meta Strip with Direct Lex.uz References */}
      <div className="border-b border-[#D1CCC0] py-1.5 px-4 lg:px-8 text-[11px] text-[#59554E] flex flex-wrap items-center justify-between gap-2 uppercase tracking-wider font-mono-numbers bg-[#FAF8F5]">
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          <span className="font-semibold text-[#1A1A1A]">№ 01 (Maxsus nashr)</span>
          <span>·</span>
          <span>Toshkent shahri</span>
          <span>·</span>
          <span className="text-[#0F5132] font-semibold">Lex.uz Rasmiy Manbalar Tahriri:</span>
        </div>
        
        <div className="flex items-center flex-wrap gap-3">
          <a
            href="https://lex.uz/docs/-112170"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#1A1A1A] hover:text-[#C8102E] font-semibold underline decoration-[#D1CCC0] transition-colors"
            title="Qonun matnini Lex.uz da ochish: Mahalliy davlat hokimiyati toʻgʻrisida"
          >
            <span>«Mahalliy davlat hokimiyati toʻgʻrisida» (№ 112170)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>·</span>
          <a
            href="https://lex.uz/docs/-2156899"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#1A1A1A] hover:text-[#C8102E] font-semibold underline decoration-[#D1CCC0] transition-colors"
            title="Qonun matnini Lex.uz da ochish: Fuqarolarning oʻzini oʻzi boshqarish organlari toʻgʻrisida"
          >
            <span>«Fuqarolarning oʻzini oʻzi boshqarish organlari toʻgʻrisida» (№ 2156899)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Grand Broadsheet Masthead with user's zagalovka_972f9901.jpeg Background */}
      <div 
        className="py-12 sm:py-16 md:py-20 px-4 lg:px-8 text-center border-b-2 border-[#1A1A1A] relative bg-cover bg-center overflow-hidden bg-[#F4F1EA]"
        style={{
          backgroundImage: "url('/assets/aistudio/zagalovka_972f9901.jpeg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#59554E] mb-2 font-bold">
            Davlat Boshqaruvi va Fuqarolarning O'zini O'zi Boshqarishi Tahlilnomasi
          </div>
          
          <h1 className="font-editorial-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1A1A1A] uppercase my-3 drop-shadow-sm">
            Hokimiyat Kimda?
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-sm md:text-base font-editorial-sub italic text-[#222] max-w-3xl mx-auto mt-2">
            <span className="h-px w-10 sm:w-20 bg-[#1A1A1A]"></span>
            <span className="font-medium">Hokim, Xalq deputatlari Kengashi va Mahalla tizimining qiyosiy huquqiy xaritasi</span>
            <span className="h-px w-10 sm:w-20 bg-[#1A1A1A]"></span>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs font-editorial-body text-[#222] flex-wrap">
            <a 
              href="https://lex.uz/docs/-112170" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C8102E] underline flex items-center gap-1 font-bold bg-[#F4F1EA]/85 px-2 py-0.5 border border-[#D1CCC0]/60"
            >
              <span>«Mahalliy davlat hokimiyati toʻgʻrisida»gi Oʻzbekiston Respublikasi Qonuni</span>
              <ExternalLink className="w-3 h-3 inline" />
            </a>
            <span>·</span>
            <a 
              href="https://lex.uz/docs/-2156899" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C8102E] underline flex items-center gap-1 font-bold bg-[#F4F1EA]/85 px-2 py-0.5 border border-[#D1CCC0]/60"
            >
              <span>«Fuqarolarning oʻzini oʻzi boshqarish organlari toʻgʻrisida»gi Qonunga oʻzgartish va qoʻshimchalar kiritish haqida</span>
              <ExternalLink className="w-3 h-3 inline" />
            </a>
          </div>
        </div>
      </div>

      {/* Strict 3-Zone Navigation Bar */}
      <div className="px-4 lg:px-8 py-2.5 flex items-center justify-between gap-6 bg-[#FAF8F5]">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => setActiveTab('frontpage')}
          className="text-sm font-bold tracking-tight text-[#1A1A1A] uppercase font-editorial-title whitespace-nowrap shrink-0 hover:text-[#C8102E] transition-colors cursor-pointer text-left"
        >
          Tahliliy Gazeta
        </button>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#59554E] overflow-x-auto py-1">
          <button
            onClick={() => setActiveTab('frontpage')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'frontpage'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent hover:text-[#1A1A1A]'
            }`}
          >
            Bosh Sahifa
          </button>
          <button
            onClick={() => setActiveTab('hokim_kengash')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'hokim_kengash'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent hover:text-[#1A1A1A]'
            }`}
          >
            Hokim va Kengash
          </button>
          <button
            onClick={() => setActiveTab('mahalla')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'mahalla'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent hover:text-[#1A1A1A]'
            }`}
          >
            Mahalla (FOB)
          </button>
          <button
            onClick={() => setActiveTab('comparison_debate')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'comparison_debate'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent hover:text-[#1A1A1A]'
            }`}
          >
            Taqqoslama & Debat
          </button>
          <button
            onClick={() => setActiveTab('numbers_calculator')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'numbers_calculator'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent hover:text-[#1A1A1A]'
            }`}
          >
            Raqamlar & Kvorum
          </button>
          <button
            onClick={() => setActiveTab('traps_cases')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'traps_cases'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent hover:text-[#1A1A1A]'
            }`}
          >
            Tuzoqlar & Keyslar
          </button>
          <button
            onClick={() => setActiveTab('mnemonics_glossary')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'mnemonics_glossary'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent hover:text-[#1A1A1A]'
            }`}
          >
            Mnemonika & Lug'at
          </button>
        </nav>

        {/* Zone 3: Primary Action (Imtihon Test removed per request) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#1A1A1A] hover:bg-[#333] transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Kvorum Kalkulyatori</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar for smaller screens */}
      <div className="lg:hidden flex items-center overflow-x-auto gap-3 py-2 px-4 border-t border-[#D1CCC0] bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider text-[#59554E]">
        <button
          onClick={() => setActiveTab('frontpage')}
          className={`whitespace-nowrap shrink-0 py-1 px-2 ${activeTab === 'frontpage' ? 'bg-[#1A1A1A] text-white' : ''}`}
        >
          Bosh Sahifa
        </button>
        <button
          onClick={() => setActiveTab('hokim_kengash')}
          className={`whitespace-nowrap shrink-0 py-1 px-2 ${activeTab === 'hokim_kengash' ? 'bg-[#1A1A1A] text-white' : ''}`}
        >
          Hokim & Kengash
        </button>
        <button
          onClick={() => setActiveTab('mahalla')}
          className={`whitespace-nowrap shrink-0 py-1 px-2 ${activeTab === 'mahalla' ? 'bg-[#1A1A1A] text-white' : ''}`}
        >
          Mahalla
        </button>
        <button
          onClick={() => setActiveTab('comparison_debate')}
          className={`whitespace-nowrap shrink-0 py-1 px-2 ${activeTab === 'comparison_debate' ? 'bg-[#1A1A1A] text-white' : ''}`}
        >
          Debat & Taqqoslama
        </button>
        <button
          onClick={() => setActiveTab('numbers_calculator')}
          className={`whitespace-nowrap shrink-0 py-1 px-2 ${activeTab === 'numbers_calculator' ? 'bg-[#1A1A1A] text-white' : ''}`}
        >
          Raqamlar & Kvorum
        </button>
        <button
          onClick={() => setActiveTab('traps_cases')}
          className={`whitespace-nowrap shrink-0 py-1 px-2 ${activeTab === 'traps_cases' ? 'bg-[#1A1A1A] text-white' : ''}`}
        >
          Tuzoqlar & Keyslar
        </button>
        <button
          onClick={() => setActiveTab('mnemonics_glossary')}
          className={`whitespace-nowrap shrink-0 py-1 px-2 ${activeTab === 'mnemonics_glossary' ? 'bg-[#1A1A1A] text-white' : ''}`}
        >
          Mnemonika & Lug'at
        </button>
      </div>
    </header>
  );
};
