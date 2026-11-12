import React, { useState } from 'react';
import { KENGASH_VS_MAHALLA, HOKIM_VS_RAIS_DEBATE } from '../data/newspaperData.ts';
import { 
  Columns, 
  GitCompare, 
  Scale, 
  ShieldCheck, 
  Layers, 
  HelpCircle,
  Building,
  UserCheck
} from 'lucide-react';

export const SectionComparisonDebate: React.FC = () => {
  const [activeDebatePoint, setActiveDebatePoint] = useState<number | null>(null);

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="border-b-2 border-[#1A1A1A] pb-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[#78350F] font-bold">
          4-Bo'lim · Qiyosiy Tahlil & Gazeta Debati
        </div>
        <h2 className="font-editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-1">
          Ikki Tizim Yonma-yon: Kesishuv Nuqtalari va Debat
        </h2>
        <p className="text-sm font-editorial-sub italic text-[#59554E] mt-1 max-w-3xl">
          The Economist va The New York Times an'anasidagi maxsus tahliliy munozara: 
          Ijro rahbari (Hokim) va Vakillik yetakchisi (Kengash raisi) o'rtasidagi vakolatlar chegarasi.
        </p>
      </div>

      {/* 5.3 NEWSPAPER EDITORIAL DEBATE: Hokim vs Kengash Raisi */}
      <div className="border-2 border-[#1A1A1A] newspaper-pattern-card p-6 lg:p-8">
        <div className="text-center max-w-2xl mx-auto pb-6 border-b border-[#D1CCC0] mb-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C8102E] font-bold">
            Editorial Debate · Maxsus Gazeta Munozarasi
          </div>
          <h3 className="font-editorial-title text-2xl sm:text-3xl font-bold text-[#1A1A1A] my-2">
            Hokim va Kengash Raisi: Kuchlar Balansi
          </h3>
          <p className="text-xs font-editorial-body text-[#59554E] leading-relaxed">
            Ilgari bitta shaxs qo'lida to'plangan ikki buyuk vakolat bugun ikki mustaqil institutga ajratildi. 
            Ushbu yonma-yon ustunlarda ularning huquqiy maqomi, mas'uliyati va bir-birini cheklash mexanizmlari qiyoslanadi.
          </p>
        </div>

        {/* Side-by-side debate columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#D1CCC0] bg-[#FAF8F5]">
          
          {/* Left Column: Hokim (Ijroiya yetakchisi) */}
          <div className="p-6 md:border-r border-b md:border-b-0 border-[#D1CCC0] bg-[#FFFDFB]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#C8102E] mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C8102E] font-bold block">
                  Ijroiya Boshlig'i
                </span>
                <h4 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
                  HOKIM
                </h4>
              </div>
              <span className="text-xs font-mono bg-[#FAF0F0] text-[#C8102E] px-2 py-1 font-bold">
                MDH 2, 21-23
              </span>
            </div>

            <div className="space-y-6 text-xs font-editorial-body">
              {HOKIM_VS_RAIS_DEBATE.map((row, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveDebatePoint(idx)}
                  className={`p-3 transition-colors ${
                    activeDebatePoint === idx ? 'bg-[#FAF0F0] border-l-2 border-[#C8102E]' : 'border-b border-[#EAE5D9]'
                  }`}
                >
                  <div className="text-[10px] font-mono text-[#59554E] uppercase mb-1">
                    {row.mezon}:
                  </div>
                  <p className="font-medium text-[#1A1A1A] leading-relaxed">
                    {row.hokim}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Kengash Raisi (Vakillik yetakchisi) */}
          <div className="p-6 bg-[#FAF8F5]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#0F5132] mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#0F5132] font-bold block">
                  Vakillik Rahbari
                </span>
                <h4 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
                  KENGASH RAISI
                </h4>
              </div>
              <span className="text-xs font-mono bg-[#F2F8F4] text-[#0F5132] px-2 py-1 font-bold">
                MDH 16, 16-1..4
              </span>
            </div>

            <div className="space-y-6 text-xs font-editorial-body">
              {HOKIM_VS_RAIS_DEBATE.map((row, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveDebatePoint(idx)}
                  className={`p-3 transition-colors ${
                    activeDebatePoint === idx ? 'bg-[#F2F8F4] border-l-2 border-[#0F5132]' : 'border-b border-[#EAE5D9]'
                  }`}
                >
                  <div className="text-[10px] font-mono text-[#59554E] uppercase mb-1">
                    {row.mezon}:
                  </div>
                  <p className="font-medium text-[#1A1A1A] leading-relaxed">
                    {row.kengashRaisi}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Balance Takeaway */}
        <div className="mt-6 p-4 bg-[#EDEAE1] border border-[#D1CCC0] text-xs text-[#292524] flex items-center justify-between flex-wrap gap-2">
          <span>
            <strong>Xulosa:</strong> Hokim yakkaboshchilik asosida ijroni boshqaradi va qarorlar chiqaradi. Kengash raisi esa kollegial sessiyaga rahbarlik qiladi va ijro ustidan deputatlik nazoratini ta'minlaydi.
          </span>
          <span className="font-mono text-[11px] font-bold text-[#1A1A1A]">
            Kuchlar Taqsimoti Prinsipi
          </span>
        </div>
      </div>

      {/* 5.1 Ikki Tizim Qayerda Kesishadi? */}
      <div className="border border-[#D1CCC0] bg-[#FAF8F5] p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
            5.1-Bo'lim · Amaliy Hamkorlik Nuqtalari
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Ikki Tizim Qayerda Kesishadi? (5 ta Nuqta)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-editorial-body">
          <div className="p-4 bg-white border border-[#D1CCC0]">
            <div className="font-mono font-bold text-[#C8102E] mb-1">1. HISOBOTLAR VA BAYONNOMALAR</div>
            <p className="text-[#333] leading-relaxed">
              Tuman ijro hokimiyati idoralari rahbarlari har chorakda fuqarolar yig'inida hisobot beradi (FOB 11). Mahalla bayonnomalari esa hokimliklarga yuboriladi va nazoratga olinadi.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#D1CCC0]">
            <div className="font-mono font-bold text-[#0F5132] mb-1">2. HUDUD VA CHEGARALAR</div>
            <p className="text-[#333] leading-relaxed">
              Mahalla chegaralarini o'zgartirish, birlashtirish yoki nom berish faqat mahalla iltimosnomasi asosida mahalliy davlat hokimiyati (Kengash va hokimlik) tomonidan hal etiladi (FOB 6).
            </p>
          </div>

          <div className="p-4 bg-white border border-[#D1CCC0]">
            <div className="font-mono font-bold text-[#78350F] mb-1">3. MODDIY YORDAM & MUVOFIQLASHTIRISH</div>
            <p className="text-[#333] leading-relaxed">
              Obodonlashtirish va ijtimoiy yordamda hokimlik budjeti manbalaridan foydalaniladi. Hokimlar muvofiqlashtirish kengashlariga jamoatchilik asosida raislik qiladi (FOB 13, 20).
            </p>
          </div>

          <div className="p-4 bg-white border border-[#D1CCC0]">
            <div className="font-mono font-bold text-[#1A1A1A] mb-1">4. SAYLOV VA TASHABBUS</div>
            <p className="text-[#333] leading-relaxed">
              Tuman Kengashi fuqarolar yig'inini chaqirish tashabbusi bilan chiqa oladi. Mahalla esa Kengash saylov komissiyalariga nomzodlar taqdim etadi va deputatlar uchrashuvini uyushtiradi.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#D1CCC0] md:col-span-2">
            <div className="font-mono font-bold text-[#C8102E] mb-1">5. IKKI QAVATLI NAZORAT TIZIMI (MUHIM!)</div>
            <p className="text-[#333] leading-relaxed mb-2">
              Davlat idoralari mahalliy boshqaruvda ikki qavatli qat'iy ierarxiya bo'yicha hisobdor qilingan:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] bg-[#F4F1EA] p-2 border border-[#D1CCC0]">
              <div>
                <strong>Huquq-tartibot:</strong> Tuman IIB boshlig'i Kengashga, profilaktika inspektori esa bevosita Fuqarolar yig'iniga hisobot beradi.
              </div>
              <div>
                <strong>Sog'liqni saqlash:</strong> Tuman tibbiyot birlashmasi Kengashga, hududiy poliklinika rahbari esa Fuqarolar yig'iniga hisobot beradi.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5.2 Broadsheet Comparison Table: Kengash vs Mahalla */}
      <div className="border border-[#D1CCC0] bg-[#FAF8F5] p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
            5.2-Jadval · Fundamental Taqqoslash
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Xalq Deputatlari Kengashi va Fuqarolar Yig'ini (Mahalla) Taqqoslamasi
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#D1CCC0] font-editorial-body">
            <thead className="bg-[#1A1A1A] text-white uppercase text-[10px] tracking-wider font-mono">
              <tr>
                <th className="p-3.5 border-r border-[#333] w-1/4">Qiyoslash Mezoni</th>
                <th className="p-3.5 border-r border-[#333] w-3/8 text-[#EAE5D9]">Xalq Deputatlari Kengashi</th>
                <th className="p-3.5 w-3/8 text-[#EAE5D9]">Fuqarolar Yig'ini (Mahalla)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1CCC0] bg-white">
              {KENGASH_VS_MAHALLA.map((row, i) => (
                <tr key={i} className="hover:bg-[#F4F1EA] transition-colors">
                  <td className="p-3.5 font-bold text-[#1A1A1A] border-r border-[#D1CCC0] bg-[#FAF8F5]">
                    {row.mezon}
                  </td>
                  <td className="p-3.5 border-r border-[#D1CCC0] text-[#292524] leading-relaxed">
                    {row.kengash}
                  </td>
                  <td className="p-3.5 text-[#292524] leading-relaxed">
                    {row.mahalla}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
