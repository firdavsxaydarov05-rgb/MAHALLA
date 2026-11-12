import React from 'react';
import { ActiveTab } from '../types/data.ts';
import { Scale, BookOpen, ExternalLink } from 'lucide-react';

interface Props {
  onNavigate: (tab: ActiveTab) => void;
}

export const NewspaperFooter: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer 
      className="border-t-2 border-[#1A1A1A] mt-16 font-editorial-body text-xs text-[#59554E] relative overflow-hidden"
      style={{
        backgroundColor: "#FAF8F5",
        backgroundImage: "linear-gradient(rgba(250, 248, 245, 0.45), rgba(250, 248, 245, 0.50)), url('/assets/aistudio/page_4_7140832e.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "280px auto"
      }}
    >
      {/* Top Footer Strip */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 border-b border-[#D1CCC0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand & Editorial Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-3 bg-[#FAF8F5]/90 p-5 border border-[#D1CCC0] backdrop-blur-[2px] shadow-xs">
            <h4 className="font-editorial-title text-xl font-bold text-[#1A1A1A] uppercase tracking-wide">
              Hokimiyat Kimda?
            </h4>
            <p className="leading-relaxed text-xs text-[#333] max-w-md">
              The Economist va The New York Times an'analaridan ilhomlangan zamonaviy tahliliy gazeta. 
              Mahalliy davlat hokimiyati va Fuqarolarning o'zini o'zi boshqarish tizimlari bo'yicha interaktiv bilimlar xaritasi.
            </p>
            <div className="pt-2 text-xs text-[#1A1A1A] space-y-1.5 font-medium">
              <div>
                <strong>Asosiy qonuniy manbalar (Lex.uz):</strong>
              </div>
              <div>
                • <a href="https://lex.uz/docs/-112170" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8102E] underline">
                  «Mahalliy davlat hokimiyati toʻgʻrisida»gi Oʻzbekiston Respublikasi Qonuni (№ 112170)
                </a>
              </div>
              <div>
                • <a href="https://lex.uz/docs/-2156899" target="_blank" rel="noopener noreferrer" className="hover:text-[#C8102E] underline">
                  «Fuqarolarning oʻzini oʻzi boshqarish organlari toʻgʻrisida»gi Qonunga oʻzgartish va qoʻshimchalar kiritish haqida (№ 2156899)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Sections 1 (3 cols) */}
          <div className="lg:col-span-3 bg-[#FAF8F5]/90 p-5 border border-[#D1CCC0] backdrop-blur-[2px] shadow-xs">
            <div className="font-mono text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-3">
              Tahliliy Bo'limlar
            </div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('frontpage')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer text-left"
                >
                  Bosh Sahifa & Oltin Qoidalar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('hokim_kengash')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer text-left"
                >
                  Hokim va Kengash (MDH)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('mahalla')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer text-left"
                >
                  Mahalla (FOB Qonuni)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('comparison_debate')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer text-left"
                >
                  Hokim vs Rais Debati
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Sections 2 (4 cols) */}
          <div className="lg:col-span-4 bg-[#FAF8F5]/90 p-5 border border-[#D1CCC0] backdrop-blur-[2px] shadow-xs">
            <div className="font-mono text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-3">
              Interaktiv Modullar & Manbalar
            </div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('numbers_calculator')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer text-left font-semibold text-[#1A1A1A]"
                >
                  Kvorum va Ovozlar Kalkulyatori
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('traps_cases')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer text-left"
                >
                  Top-15 Tuzoqlar & 6 ta Vaziyatli Keyslar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('mnemonics_glossary')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer text-left"
                >
                  Mnemonik Formulalar (5-5-5, 3-3-3, 2/3)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('mnemonics_glossary')}
                  className="hover:text-[#C8102E] transition-colors cursor-pointer text-left"
                >
                  Yuridik Atamalar Izohli Lug'ati
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Colophon */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono-numbers bg-[#FAF8F5]/85 border-t border-[#D1CCC0]/50 backdrop-blur-[2px]">
        <div>
          © 2026 Tahliliy Gazeta. O'zbekiston Respublikasi Qonunchilik Tahlili.
        </div>
        <div className="flex items-center gap-4 text-[#59554E]">
          <span>Maxsus Nashr № 01</span>
          <span>·</span>
          <span>Font: Playfair Display & Source Sans 3</span>
          <span>·</span>
          <span>Qog'oz rangi: #F4F1EA</span>
        </div>
      </div>
    </footer>
  );
};
