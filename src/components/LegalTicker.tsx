import React, { useState } from 'react';
import { ArrowUpRight, Scale, ShieldAlert, Sparkles, X } from 'lucide-react';

interface TickerItem {
  id: string;
  label: string;
  value: string;
  unit: string;
  change: string;
  description: string;
  modda: string;
}

const TICKER_ITEMS: TickerItem[] = [
  { id: '1', label: 'VAKOLAT MUDDATI', value: '5', unit: 'YIL', change: 'Konstitutsiya', description: 'Hokim, Kengash deputati va Mahalla raisi birdek 5 yilga saylanadi / tayinlanadi.', modda: 'MDH 2, 16; FOB 23' },
  { id: '2', label: 'KETMA-KET CHEKLOV', value: '2', unit: 'MUDDAT', change: 'Qat\'iy chegara', description: 'Bir shaxs ketma-ket 2 muddatdan ortiq bir hududning hokimi yoki Kengash raisi bo\'la olmaydi.', modda: 'MDH 2, 16-1' },
  { id: '3', label: 'KENGASH KVORUMI', value: '2/3', unit: 'ISHTIROK', change: 'Kamida', description: 'Sessiya o\'z ishini boshlashi uchun deputatlar umumiy sonining kamida 2/3 qismi hozir bo\'lishi shart.', modda: 'MDH 19-modda' },
  { id: '4', label: 'MAHALLA KVORUMI', value: '50%+1', unit: 'AHOLI', change: 'Yarmidan ko\'p', description: 'Fuqarolar umumiy yig\'inida doimiy yashovchi huquqli aholining yarmidan ko\'pi qatnashishi kerak.', modda: 'FOB 21-modda' },
  { id: '5', label: 'NOMZOD CHEGARASI', value: '3', unit: 'MARTA', change: '1 oy ichida', description: 'Kengash hokim nomzodini ko\'pi bilan 3 marta rad eta oladi; shundan so\'ng Kengash tarqatilishi mumkin.', modda: 'MDH 2-modda' },
  { id: '6', label: 'YANGI SAYLOV', value: '3', unit: 'OY', change: 'Maksimal', description: 'Kengash tarqatilgan taqdirda yangi deputatlik saylovlari 3 oy ichida o\'tkaziladi.', modda: 'MDH 2-modda' },
  { id: '7', label: 'BIRINCHI SESSIYA', value: '3', unit: 'HAFTA', change: 'Saylovdan so\'ng', description: 'Saylov yakunlangach kechi bilan 3 hafta ichida birinchi sessiya chaqiriladi.', modda: 'MDH 17-modda' },
  { id: '8', label: 'SO\'ROVGA JAVOB', value: '10', unit: 'KUN', change: 'Yozma tartibda', description: 'Kengash so\'roviga mansabdor shaxs 10 kun ichida yozma tushuntirish berishi lozim.', modda: 'MDH 25-6-modda' },
  { id: '9', label: 'RAISNI BO\'SHATISH', value: '8', unit: 'HOLAT', change: 'Qonuniy asos', description: 'Mahalla raisi vakolati muddatidan oldin tugatilishi mumkin bo\'lgan qat\'iy 8 ta holat.', modda: 'FOB 24-modda' },
  { id: '10', label: 'MAHALLA PRINSIPLARI', value: '9', unit: 'PRINSIP', change: 'Konstitutsiyaviy', description: 'Qonuniylik, mustaqillik, ijtimoiy adolat, demokratizm, jamoatchilik nazorati va b.', modda: 'FOB 5-modda' }
];

export const LegalTicker: React.FC<{ onSelectMetric?: (item: TickerItem) => void }> = () => {
  const [selectedItem, setSelectedItem] = useState<TickerItem | null>(null);

  return (
    <div className="relative border-y border-[#D1CCC0] bg-[#FAF8F5]">
      {/* Ticker bar header */}
      <div className="flex items-center overflow-x-auto divide-x divide-[#D1CCC0] text-xs py-1.5 px-4 font-mono-numbers">
        <div className="flex items-center gap-2 pr-4 shrink-0 font-bold uppercase tracking-wider text-[#C8102E] font-editorial-body">
          <Scale className="w-3.5 h-3.5" />
          <span>HUQUQIY KO'RSATKICHLAR INDEKSI:</span>
        </div>

        {TICKER_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="flex items-center gap-2 px-3 py-0.5 hover:bg-[#EAE5D9] transition-colors shrink-0 text-left group"
            title="Tafsilotni ko'rish"
          >
            <span className="text-[11px] font-medium text-[#59554E] uppercase tracking-tight">
              {item.label}
            </span>
            <span className="font-bold text-[#1A1A1A] text-sm tabular-nums">
              {item.value}
            </span>
            <span className="text-[10px] text-[#0F5132] font-semibold bg-[#E7F0EB] px-1 py-0.2 rounded">
              {item.unit}
            </span>
          </button>
        ))}
      </div>

      {/* Detail modal for selected metric */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FAF8F5] border border-[#1A1A1A] max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-[#59554E] hover:text-[#1A1A1A]"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] mb-1">
              Rasmiy Qonuniy Me'yor
            </div>
            <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A] mb-2">
              {selectedItem.label}
            </h3>

            <div className="flex items-baseline gap-2 mb-4 pb-3 border-b border-[#D1CCC0]">
              <span className="text-4xl font-bold text-[#1A1A1A] font-mono-numbers">
                {selectedItem.value}
              </span>
              <span className="text-sm font-semibold text-[#0F5132] uppercase">
                {selectedItem.unit}
              </span>
              <span className="text-xs text-[#59554E] ml-auto">
                {selectedItem.change}
              </span>
            </div>

            <p className="font-editorial-body text-sm text-[#333] leading-relaxed mb-4">
              {selectedItem.description}
            </p>

            <div className="flex items-center justify-between text-xs text-[#59554E] pt-3 border-t border-[#D1CCC0]">
              <span className="font-semibold text-[#1A1A1A]">Huquqiy asos:</span>
              <span className="font-mono bg-[#EAE5D9] px-2 py-0.5 text-[#1A1A1A]">
                {selectedItem.modda}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
