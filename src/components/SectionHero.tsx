import React from 'react';
import { ActiveTab } from '../types/data.ts';
import { GOLDEN_RULES } from '../data/newspaperData.ts';
import { 
  Building2, 
  Users, 
  Scale, 
  Calculator, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface Props {
  onNavigate: (tab: ActiveTab) => void;
  onOpenCalculator: () => void;
}

export const SectionHero: React.FC<Props> = ({ onNavigate, onOpenCalculator }) => {
  return (
    <div className="space-y-8">
      {/* Editorial Headline & Lead Story Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#D1CCC0]">
        
        {/* Left Column (8 cols): Lead Analytical Article with 1_page Photo */}
        <div className="lg:col-span-8 p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#D1CCC0] newspaper-pattern-card">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8102E] mb-3">
            <span>Bosh Maqola</span>
            <span aria-hidden="true">·</span>
            <span>Konstitutsiyaviy Islohotlar</span>
            <span aria-hidden="true">·</span>
            <span>Tahliliy Sharh</span>
          </div>

          <h2 className="font-editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.15] mb-5">
            Bitta savolga javob qidiramiz: Mahalliy darajada kim kimni tayinlaydi va kim kimga aralasha olmaydi?
          </h2>

          <div className="text-base sm:text-lg font-editorial-sub italic text-[#4A4742] leading-relaxed mb-6 pb-6 border-b border-[#D1CCC0]">
            «Siz bu qonunlarni allaqachon o'qigansiz. Shuning uchun bu yerda quruq moddalarni qayta sanamaymiz. 
            Mahalliy hokimiyat qanday ishlaydi, hokim nima uchun Kengash raisi bo'la olmaydi va nima sababdan mahalla davlat organi emas?»
          </div>

          {/* Featured Editorial Photo: 1_page_e4813b0d.webp */}
          <div className="mb-6 border border-[#1A1A1A] bg-white p-2">
            <img 
              src="/assets/aistudio/1_page_e4813b0d.webp" 
              alt="Hokimiyat va Kengash tahlili: Hokim nomzodini tasdiqlash"
              className="w-full h-auto max-h-[420px] object-cover object-top border border-[#D1CCC0]"
            />
            <div className="mt-2 px-1 text-xs font-editorial-sub italic text-[#59554E] flex items-center justify-between flex-wrap gap-2">
              <span>
                <strong>1-Rasm:</strong> Xalq deputatlari Kengashi sessiyasida viloyat/shahar hokimligi nomzodini ko'rib chiqish va tasdiqlash jarayoni.
              </span>
              <span className="font-mono text-[10px] text-[#1A1A1A] uppercase">
                MDH Qonuni 2-modda
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#292524] text-sm leading-relaxed font-editorial-body text-justify">
            <div>
              <p className="first-letter:text-5xl first-letter:font-editorial-title first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#1A1A1A] mb-4">
                O'zbekistonning yangi tahrirdagi Konstitutsiyasi va «Mahalliy davlat hokimiyati to'g'risida»gi 
                Qonun mahalliy boshqaruv arxitekturasida fundamental burilish yasadi. Bir vaqtning o'zida ham viloyat, tuman 
                ijroiya organi rahbari, ham xalq vakillik organi — Kengash raisi bo'lib o'tirgan hokimlik tizimiga 
                to'liq chek qo'yildi.
              </p>
              <p>
                Bugungi kunda mahalliy hokimiyat <strong>ikki mustaqil ustunga</strong> tayanadi: saylovchilar mandati 
                bilan ta'minlangan Xalq deputatlari Kengashi (vakillik) hamda qonunlar ijrosini ta'minlovchi 
                Hokim (ijroiya organi). Ular bir-birini tiyib turadi, ammo bir-birining vakolatiga aralashmaydi.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Shu bilan birga, jamiyatning o'zagini tashkil etuvchi <strong>Mahalla (Fuqarolar yig'ini)</strong> davlat 
                hokimiyati organlari tizimiga mutlaqo kirmaydi! Mahalla — aholi o'z xohishi bilan saylaydigan, 
                o'z muhriga, mustaqil hisobvarag'i va byudjetiga ega bo'lgan nodavlat fuqarolik institutidir.
              </p>
              <div className="p-4 bg-[#EDEAE1] border border-[#D1CCC0]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-bold mb-1">
                  Amaliy Xulosa
                </div>
                <p className="text-xs text-[#1A1A1A] italic">
                  «Hokim Kengashga deputat bo'la oladi, lekin rais bo'la olmaydi. Kengash qarorini Senat bekor qiladi, 
                  hokim hujjatini esa Prezident yoki Hukumat. Agar hokim xato qilib xususiy mulk yoki yer ajratgan bo'lsa, 
                  buni faqat sud bekor qila oladi!»
                </p>
              </div>
            </div>
          </div>

          {/* Visual Interactive Power Flow / Diagram */}
          <div className="mt-8 pt-6 border-t border-[#D1CCC0]">
            <div className="text-xs font-mono uppercase tracking-widest text-[#59554E] mb-3">
              Mahalliy Hokimiyat va Mahalla Arxitekturasi
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-xs">
              <div className="p-4 bg-[#FAF8F5] border border-[#1A1A1A] text-left">
                <div className="text-[10px] font-mono text-[#C8102E] uppercase font-bold">Ijro Hokimiyati</div>
                <div className="font-editorial-title text-base font-bold text-[#1A1A1A] mt-0.5">HOKIM</div>
                <div className="text-xs text-[#59554E] mt-1">Yakkaboshchilik asosida boshqaradi. Yuqoridan tayinlanadi, Kengash tasdiqlaydi. 5 yil muddat.</div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#1A1A1A] text-left">
                <div className="text-[10px] font-mono text-[#0F5132] uppercase font-bold">Vakillik Organi</div>
                <div className="font-editorial-title text-base font-bold text-[#1A1A1A] mt-0.5">KENGASH</div>
                <div className="text-xs text-[#59554E] mt-1">Aholi saylaydi. Rais deputatlar orasidan saylanadi. Budjet, nazorat va qarorlar. Kvorum 2/3.</div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#1A1A1A] text-left">
                <div className="text-[10px] font-mono text-[#78350F] uppercase font-bold">O'zini O'zi Boshqarish</div>
                <div className="font-editorial-title text-base font-bold text-[#1A1A1A] mt-0.5">MAHALLA</div>
                <div className="text-xs text-[#59554E] mt-1">Davlat organi emas! Aholi saylaydi va unga hisobdor. 8 ta komissiya va mustaqil taftish.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): 30 Soniyalik Oltin Qoidalar Widget with page 4 background pattern */}
        <div 
          className="lg:col-span-4 p-6 lg:p-8 flex flex-col justify-between relative border-l border-[#D1CCC0] overflow-hidden"
          style={{
            backgroundColor: "#F4F1EA",
            backgroundImage: "linear-gradient(rgba(244, 241, 234, 0.40), rgba(244, 241, 234, 0.45)), url('/assets/aistudio/page_4_7140832e.webp')",
            backgroundRepeat: "repeat",
            backgroundSize: "260px auto"
          }}
        >
          <div>
            <div className="pb-3 border-b-2 border-[#1A1A1A] mb-4 bg-[#FAF8F5]/90 p-3 border border-[#D1CCC0] backdrop-blur-[2px]">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] font-bold">
                Bosh Sahifa Vidjeti
              </div>
              <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
                30 Soniyalik Oltin Qoidalar
              </h3>
              <p className="text-xs text-[#59554E] mt-1 font-editorial-body">
                Imtihon va amaliyotda 90% xatolarning oldini oluvchi konstitutsiyaviy mezonlar:
              </p>
            </div>

            <div className="space-y-3">
              {GOLDEN_RULES.map((rule) => (
                <div key={rule.id} className="p-3 bg-[#FAF8F5]/90 border border-[#D1CCC0] backdrop-blur-[2px] shadow-xs hover:border-[#1A1A1A] transition-colors">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono-numbers text-xs font-bold text-white bg-[#C8102E] w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      0{rule.id}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[#1A1A1A] leading-tight font-editorial-body">
                        {rule.title}
                      </h4>
                      <p className="text-xs text-[#333] mt-1 leading-normal font-editorial-body">
                        {rule.detail}
                      </p>
                      <div className="text-[10px] font-mono text-[#0F5132] font-semibold mt-1">
                        {rule.legalAnchor}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Calculator Callout */}
          <div className="mt-6 pt-4 border-t border-[#1A1A1A] bg-[#FAF8F5]/90 p-3 border border-[#D1CCC0] backdrop-blur-[2px]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 font-mono">
              Interaktiv Hisob-Kitob
            </div>
            <button
              onClick={onOpenCalculator}
              className="w-full py-2.5 px-3 text-xs font-bold bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors cursor-pointer text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <Calculator className="w-4 h-4" />
              <span>Kvorum va Ovozlar Kalkulyatori</span>
            </button>
          </div>
        </div>

      </div>

      {/* Six Interactive Department Desks (Sayt Menyusi - Broadsheet Grid) */}
      <div>
        <div className="flex items-center justify-between border-b-2 border-[#1A1A1A] pb-2 mb-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#59554E]">
              Nashr Mundarijasi
            </div>
            <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
              Interaktiv Bilimlar Xaritasi & Gazeta Bo'limlari
            </h3>
          </div>
          <span className="text-xs font-mono text-[#59554E] hidden sm:inline">
            6 ta asosiy tahliliy modul
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#D1CCC0] divide-y md:divide-y-0 md:divide-x lg:divide-y-0 divide-[#D1CCC0] newspaper-pattern-card">
          {/* Card 1 */}
          <div 
            onClick={() => onNavigate('hokim_kengash')}
            className="p-6 hover:bg-[#F4F1EA] transition-colors cursor-pointer flex flex-col justify-between group border-b lg:border-b-0 border-[#D1CCC0]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#59554E] mb-2">
                <span className="text-[#C8102E] font-bold">1-BO'LIM</span>
                <span>MDH Qonuni</span>
              </div>
              <h4 className="font-editorial-title text-xl font-bold text-[#1A1A1A] group-hover:text-[#C8102E] transition-colors mb-2">
                Hokim va Xalq deputatlari Kengashi
              </h4>
              <p className="text-xs text-[#59554E] leading-relaxed mb-4">
                Vakillik va ijro hokimiyati, hokimni 7 bosqichli tayinlash zanjiri, Kengash raisi cheklovlari, 5 ta doimiy komissiya va nazorat vositalari.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#1A1A1A] group-hover:text-[#C8102E] pt-3 border-t border-[#EAE5D9]">
              <span>Tahlilni ochish</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => onNavigate('mahalla')}
            className="p-6 hover:bg-[#F4F1EA] transition-colors cursor-pointer flex flex-col justify-between group border-b lg:border-b-0 border-[#D1CCC0]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#0F5132] mb-2">
                <span className="text-[#0F5132] font-bold">2-BO'LIM</span>
                <span>FOB Qonuni</span>
              </div>
              <h4 className="font-editorial-title text-xl font-bold text-[#1A1A1A] group-hover:text-[#0F5132] transition-colors mb-2">
                Fuqarolarning O'zini O'zi Boshqarishi (Mahalla)
              </h4>
              <p className="text-xs text-[#59554E] leading-relaxed mb-4">
                Mahallaning nodavlat maqomi, 9 ta prinsip, Yig'in kengashi, 8 ta komissiya, mustaqil Taftish, rais vakolatini tugatishning 8 ta holati va 4 moliyaviy manba.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#1A1A1A] group-hover:text-[#0F5132] pt-3 border-t border-[#EAE5D9]">
              <span>Tahlilni ochish</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => onNavigate('comparison_debate')}
            className="p-6 hover:bg-[#F4F1EA] transition-colors cursor-pointer flex flex-col justify-between group border-b lg:border-b-0 border-[#D1CCC0]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#78350F] mb-2">
                <span className="text-[#78350F] font-bold">3-BO'LIM</span>
                <span>Munozara & Matritsa</span>
              </div>
              <h4 className="font-editorial-title text-xl font-bold text-[#1A1A1A] group-hover:text-[#78350F] transition-colors mb-2">
                Ikki Tizim Yonma-yon: Hokim vs Rais Debati
              </h4>
              <p className="text-xs text-[#59554E] leading-relaxed mb-4">
                Gazeta munozarasi uslubidagi qiyosiy ustunlar: Hokim va Kengash raisi, Kengash va Mahalla o'rtasidagi kesishuv nuqtalari hamda 2 qavatli nazorat tizimi.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#1A1A1A] group-hover:text-[#78350F] pt-3 border-t border-[#EAE5D9]">
              <span>Munozaraga o'tish</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Second Row of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-b border-[#D1CCC0] bg-[#FAF8F5] divide-y md:divide-y-0 md:divide-x lg:divide-y-0 divide-[#D1CCC0]">
          {/* Card 4 */}
          <div 
            onClick={() => onNavigate('numbers_calculator')}
            className="p-6 hover:bg-[#F4F1EA] transition-colors cursor-pointer flex flex-col justify-between group border-b lg:border-b-0 border-[#D1CCC0]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A] mb-2">
                <span className="text-[#1A1A1A] font-bold">4-BO'LIM</span>
                <span>Statistika & Interaktiv</span>
              </div>
              <h4 className="font-editorial-title text-xl font-bold text-[#1A1A1A] group-hover:text-[#C8102E] transition-colors mb-2">
                Raqamlar Kartochkasi & Kvorum Kalkulyatori
              </h4>
              <p className="text-xs text-[#59554E] leading-relaxed mb-4">
                Muddatlar jadvali, kvorum va ovoz berish formulalari, hisobotlar davriyligi va real vaqtda deputat/aholi kvorumini hisoblovchi kalkulyator.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#1A1A1A] group-hover:text-[#C8102E] pt-3 border-t border-[#EAE5D9]">
              <span>Kalkulyatorni ochish</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 5 */}
          <div 
            onClick={() => onNavigate('traps_cases')}
            className="p-6 hover:bg-[#F4F1EA] transition-colors cursor-pointer flex flex-col justify-between group border-b lg:border-b-0 border-[#D1CCC0]"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#C8102E] mb-2">
                <span className="text-[#C8102E] font-bold">5-BO'LIM</span>
                <span>Amaliy Sinov</span>
              </div>
              <h4 className="font-editorial-title text-xl font-bold text-[#1A1A1A] group-hover:text-[#C8102E] transition-colors mb-2">
                Top-15 Tuzoqlar & 6 ta Vaziyatli Keyslar
              </h4>
              <p className="text-xs text-[#59554E] leading-relaxed mb-4">
                Imtihonlarda eng ko'p chalg'itadigan 15 ta huquqiy tuzoq va 6 ta real hayotiy kazusning qonuniy sud yechimlari.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#1A1A1A] group-hover:text-[#C8102E] pt-3 border-t border-[#EAE5D9]">
              <span>Keyslarni yechish</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 6 */}
          <div 
            onClick={() => onNavigate('mnemonics_glossary')}
            className="p-6 hover:bg-[#F4F1EA] transition-colors cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#0F5132] mb-2">
                <span className="text-[#0F5132] font-bold">6-BO'LIM</span>
                <span>Xotira & Lug'at</span>
              </div>
              <h4 className="font-editorial-title text-xl font-bold text-[#1A1A1A] group-hover:text-[#0F5132] transition-colors mb-2">
                Mnemonika, Atamalar Lug'ati & Muhokama
              </h4>
              <p className="text-xs text-[#59554E] leading-relaxed mb-4">
                5-5-5, 3-3-3, 2/3 formulalari, taqdimnoma, protest, kvorum kabi professional yuridik terminlar lug'ati va 4 ta konseptual muhokama mavzusi.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-[#1A1A1A] group-hover:text-[#0F5132] pt-3 border-t border-[#EAE5D9]">
              <span>Lug'atni ko'rish</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
