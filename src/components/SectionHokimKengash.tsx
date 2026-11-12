import React, { useState } from 'react';
import { 
  HOKIM_TIMELINE, 
  KENGASH_COMMISSIONS, 
  SUPERVISION_INSTRUMENTS 
} from '../data/newspaperData.ts';
import { 
  AlertTriangle, 
  CheckCircle, 
  ChevronRight, 
  Scale, 
  FileCheck, 
  ShieldAlert, 
  Building,
  UserCheck,
  Ban,
  Clock,
  Vote,
  FileSpreadsheet,
  ExternalLink
} from 'lucide-react';

export const SectionHokimKengash: React.FC = () => {
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(1);
  const [activeSupervisionTab, setActiveSupervisionTab] = useState<number>(0);

  return (
    <div className="space-y-10">
      {/* Section Header Strip */}
      <div className="border-b-2 border-[#1A1A1A] pb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold">
            2-Bo'lim · Qonun Tahlili
          </div>
          <a
            href="https://lex.uz/docs/-112170"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#1A1A1A] hover:text-[#C8102E] underline"
          >
            <span>Lex.uz: «Mahalliy davlat hokimiyati toʻgʻrisida»gi Oʻzbekiston Respublikasi Qonuni</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <h2 className="font-editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-1">
          Hokim va Xalq Deputatlari Kengashi
        </h2>
        <p className="text-sm font-editorial-sub italic text-[#59554E] mt-1 max-w-3xl">
          «Mahalliy davlat hokimiyati to'g'risida»gi Qonun (MDH Qonuni) bo'yicha vakillik va ijro hokimiyatining 
          institutsional balansi, tayinlash zanjiri hamda bekor qilish mezonlari.
        </p>
      </div>

      {/* Featured Editorial Photo for Hokim & Kengash: 2_page_6a77593e.jpg */}
      <div className="border border-[#1A1A1A] bg-white p-3 shadow-xs">
        <img 
          src="/assets/aistudio/2_page_6a77593e.jpg" 
          alt="Xalq deputatlari Kengashi sessiyasida ovoz berish jarayoni"
          className="w-full h-auto max-h-[460px] object-cover object-center border border-[#D1CCC0]"
        />
        <div className="mt-2 px-1 text-xs font-editorial-sub italic text-[#59554E] flex items-center justify-between flex-wrap gap-2">
          <span>
            <strong>2-Rasm:</strong> Xalq deputatlari Kengashi sessiyasida qarorlar qabul qilish va ovoz berish jarayoni. Deputat ovozini faqat shaxsan beradi.
          </span>
          <span className="font-mono text-[10px] text-[#0F5132] font-semibold">
            MDH Qonuni 19-modda (Kvorum: kamida 2/3)
          </span>
        </div>
      </div>

      {/* 2.1 Mahalliy Vakillik va Ijroiya Hokimiyati */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#59554E] mb-2">
          <span>2.1-Modda Tahlili</span>
          <span>·</span>
          <span>MDH 1-Modda</span>
        </div>
        <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A] mb-4">
          Mahalliy Vakillik va Ijroiya Hokimiyatining Asosiy Arxitekturasi
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-editorial-body leading-relaxed text-[#292524]">
          <div className="space-y-3">
            <p>
              <strong>Asosiy G'oya:</strong> Kengashlar xalq vakillik organi hisoblanadi, Hokim esa hududda ijro hokimiyatining yakkaboshchilik asosidagi rahbaridir. 
              Ikkala organ ham bir xil vazifalarni (ijtimoiy-iqtisodiy rivojlanish, qonun hujjatlari ijrosi, fuqarolarning o'zini o'zi boshqarish organlari bilan aloqa, aholini boshqaruvga jalb etish) birgalikda ta'minlaydi.
            </p>
            <p>
              <strong>Hisobdorlik Sub'ektlari:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#444]">
              <li><strong>Viloyat va Toshkent shahar hokimi:</strong> O'zbekiston Respublikasi Prezidenti va tegishli viloyat (Toshkent shahar) Kengashi oldida hisobdor.</li>
              <li><strong>Tuman va shahar hokimi:</strong> Yuqori turuvchi viloyat hokimi va tegishli tuman/shahar Kengashi oldida hisobdor.</li>
            </ul>
          </div>

          <div className="space-y-4">
            {/* Legal Trap Alert */}
            <div className="p-4 bg-[#FBF0EE] border border-[#C8102E] text-[#1A1A1A]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C8102E] uppercase mb-1">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Diqqat, Imtihon Tuzog'i!</span>
              </div>
              <p className="text-xs leading-relaxed">
                <strong>Tumanga bo'ysunadigan shaharlarda</strong> (masalan, tuman tarkibidagi kichik shaharchalarda) Kengash ko'rsatilgan organlar ro'yxatidan chiqarilgan! U yerda alohida Kengash tuzilmaydi.
              </p>
              <p className="text-xs leading-relaxed mt-2 pt-2 border-t border-[#E8C0B8]">
                <strong>Gerbli Muhr:</strong> Davlat gerbi tasviri tushirilgan muhr Kengashga ham, Hokimga ham tegishli bo'lib, ikkisi alohida mustaqil muhrlarga ega.
              </p>
            </div>

            <div className="p-3 bg-[#EAE5D9] border border-[#D1CCC0] text-xs">
              <span className="font-bold text-[#1A1A1A]">Bo'ysundirish Istisnosi:</span> Viloyat hokimi Vazirlar Mahkamasi bilan kelishgan holda shahar hokimini tuman hokimiga bo'ysundira oladi (shahar tarkibidagi tumanlar bundan mustasno). Bu qaror keyin viloyat Kengashi tomonidan tasdiqlanadi.
            </div>
          </div>
        </div>
      </div>

      {/* 2.2 Hokimni Tayinlash va Ozod Etish Zanjiri (Interactive Step Player) */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="flex items-center justify-between border-b border-[#D1CCC0] pb-3 mb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-bold">
              2.2-Modda Zanjiri · MDH 2-Modda
            </div>
            <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
              Hokimni Tayinlash va Ozod Etishning 7 Bosqichli Zanjiri
            </h3>
          </div>
          <span className="text-xs font-mono text-[#59554E] hidden sm:inline">
            Interaktiv Bosqichlar
          </span>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1 border border-[#D1CCC0] p-1 bg-[#F4F1EA] mb-6">
          {HOKIM_TIMELINE.map((item) => (
            <button
              key={item.step}
              onClick={() => setActiveTimelineStep(item.step)}
              className={`p-2 text-left transition-colors cursor-pointer ${
                activeTimelineStep === item.step
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'hover:bg-[#EAE5D9] text-[#1A1A1A]'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider opacity-80">
                Bosqich 0{item.step}
              </div>
              <div className="text-xs font-bold truncate">
                {item.step === 5 ? 'Rad etilsa' : item.step === 6 ? '3 marta rad' : item.step === 7 ? 'Tasdiqlansa' : `Qadam ${item.step}`}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Display Card */}
        {(() => {
          const stepData = HOKIM_TIMELINE.find((s) => s.step === activeTimelineStep) || HOKIM_TIMELINE[0];
          return (
            <div className={`p-6 border transition-colors ${
              stepData.isCrisis
                ? 'bg-[#FFF8F7] border-[#C8102E]'
                : stepData.isApproval
                ? 'bg-[#F2F8F4] border-[#0F5132]'
                : 'bg-white border-[#D1CCC0]'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 ${
                  stepData.isCrisis
                    ? 'bg-[#C8102E] text-white'
                    : stepData.isApproval
                    ? 'bg-[#0F5132] text-white'
                    : 'bg-[#1A1A1A] text-white'
                }`}>
                  {stepData.title}
                </span>
                <span className="text-xs font-mono text-[#59554E]">{stepData.legalBasis}</span>
              </div>

              <p className="font-editorial-body text-base text-[#1A1A1A] leading-relaxed mb-4">
                {stepData.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-3 border-t border-[#EAE5D9]">
                <span className="text-[#59554E]">Tuman/Shahar darajasida:</span>
                <span className="text-[#1A1A1A] font-semibold">
                  Tuman/shahar hokimini viloyat hokimi tayinlaydi (Prezident emas!), tegishli Kengash tasdiqlaydi.
                </span>
              </div>
            </div>
          );
        })()}

        {/* Term Limit Footer */}
        <div className="mt-6 p-4 bg-[#EDEAE1] border border-[#D1CCC0] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C8102E]" />
            <span className="font-bold text-[#1A1A1A]">Konstitutsiyaviy Muddat va Cheklov:</span>
            <span>Hokim vakolati <strong>5 yil</strong>. Bir shaxs ketma-ket 2 muddatdan ortiq bir hududning hokimi bo'la olmaydi.</span>
          </div>
          <span className="font-mono text-[#0F5132] font-semibold">MDH 2-modda</span>
        </div>
      </div>

      {/* 2.3 Kengashni Saylash va Kengash Raisi Cheklovlari */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (6 cols): Kengash Raisi vs Hokim Ajralishi */}
        <div className="lg:col-span-6 border border-[#D1CCC0] bg-[#FAF8F5] p-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E] mb-1">
            2.3-Modda · MDH 16, 16-1..4-Moddalar
          </div>
          <h3 className="font-editorial-title text-xl font-bold text-[#1A1A1A] mb-3">
            Kengash Raisi Maqomi va Qat'iy Cheklovlar
          </h3>

          <p className="text-xs text-[#4A4742] leading-relaxed mb-4">
            Tarixiy burilish: Hokim Kengash deputati bo'lishi mumkin, ammo bir vaqtning o'zida Kengash raisi bo'la olmaydi!
          </p>

          <div className="space-y-3 text-xs font-editorial-body">
            <div className="p-3 bg-white border border-[#D1CCC0]">
              <span className="font-bold text-[#1A1A1A] block mb-1">Jamoatchilik asosida ishlash:</span>
              Kengash raisi o'z vazifalarini jamoatchilik asosida amalga oshiradi (doimiy haq to'lanadigan asosiy ish joyidan ajralmagan holda).
            </div>

            <div className="p-3 bg-white border border-[#D1CCC0]">
              <span className="font-bold text-[#1A1A1A] block mb-1">Partiya a'zoligini to'xtatish:</span>
              Vazifasini bajarish davrida siyosiy partiya a'zoligini to'xtatib turadi, Kengashdagi partiya guruhlari yoki doimiy komissiyalar tarkibiga kira olmaydi.
            </div>

            <div className="p-3 bg-white border border-[#D1CCC0]">
              <span className="font-bold text-[#1A1A1A] block mb-1">Saylov davri:</span>
              Kengash vakolati muddatiga (5 yil), ketma-ket 2 muddatdan ortiq bo'lmagan muddatga saylanadi.
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Raisni Saylash vs Muddatidan Oldin Ozod Qilish */}
        <div className="lg:col-span-6 border border-[#D1CCC0] bg-[#FAF8F5] p-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-bold mb-1">
            Qiyosiy Huquqiy Blok
          </div>
          <h3 className="font-editorial-title text-xl font-bold text-[#1A1A1A] mb-3">
            Raisni Saylash va Muddatidan Oldin Ozod Qilish
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-editorial-body">
            {/* Saylash */}
            <div className="p-4 bg-[#F2F8F4] border border-[#0F5132]">
              <div className="font-bold text-[#0F5132] uppercase mb-1">Raisni Saylash</div>
              <ul className="space-y-1.5 text-[#292524]">
                <li><strong>Qachon:</strong> Birinchi sessiya raisni saylashdan boshlanadi.</li>
                <li><strong>Kim tavsiya qiladi:</strong> Siyosiy partiyalar vakillari guruhi deputatlar orasidan tavsiya etadi.</li>
                <li><strong>Talab etiladigan ovoz:</strong> Deputatlar umumiy sonining oddiy ko'pchiligi (50% + 1).</li>
                <li><strong>Qarorni imzolaydi:</strong> Sessiyada raislik qiluvchi.</li>
              </ul>
            </div>

            {/* Muddatidan oldin ozod qilish */}
            <div className="p-4 bg-[#FFF8F7] border border-[#C8102E]">
              <div className="font-bold text-[#C8102E] uppercase mb-1">Muddatidan Oldin Ozod Qilish</div>
              <ul className="space-y-1.5 text-[#292524]">
                <li><strong>Tashabbus:</strong> Deputatlar umumiy sonining kamida <strong>1/3 qismi</strong> taklifi bilan.</li>
                <li><strong>Kim raislik qiladi:</strong> Doimiy komissiya raislaridan biri.</li>
                <li><strong>Talab etiladigan ovoz:</strong> Deputatlar umumiy sonining <strong>2/3 qismidan ko'prog'i!</strong></li>
                <li><strong>Natija:</strong> Rais o'z vakolatini zudlik bilan topshiradi.</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-[#EDEAE1] border border-[#D1CCC0] text-xs">
            <strong>Rais Vakolatlari (16-2-modda):</strong> Sessiyalarga masalalar tayyorlashga rahbarlik qiladi, Kotibiyat mudiri va xodimlarini tayinlaydi, qaror va bayonnomalarni imzolaydi, sessiyani chaqiradi, komissiyalar ishini muvofiqlashtiradi.
          </div>
        </div>
      </div>

      {/* 2.4 Sessiyalar va 5 ta Doimiy Komissiya */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
            2.4-Modda · MDH 17, 19, 19-1
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Sessiya Tartibi, Kvorum va 5 ta Doimiy Komissiya
          </h3>
        </div>

        {/* Rules strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-xs">
          <div className="p-3 bg-white border border-[#D1CCC0]">
            <span className="font-bold text-[#1A1A1A] block">Davriylik:</span>
            Har chorakda kamida 1 marta chaqiriladi. Tashabbus: deputatlarning kamida 2/3 qismi yoki hokim. Xabardor qilish: kamida 3 kun oldin.
          </div>
          <div className="p-3 bg-white border border-[#D1CCC0]">
            <span className="font-bold text-[#1A1A1A] block">Birinchi sessiya:</span>
            Hokim chaqiradi (saylovdan keyin kechi bilan 3 hafta ichida), saylov komissiyasi raisi ochadi. Organlar 1 oyda tuziladi.
          </div>
          <div className="p-3 bg-white border border-[#D1CCC0]">
            <span className="font-bold text-[#1A1A1A] block">Kvorum va Ovoz:</span>
            Kamida 2/3 deputat qatnashsa vakolatli. Ovoz faqat shaxsan beriladi (elektron tizim yoki byulleten orqali).
          </div>
        </div>

        {/* 5 Commissions grid */}
        <div className="border-t border-[#D1CCC0] pt-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#59554E] mb-3">
            Qoida tariqasida tuziladigan 5 ta doimiy komissiya:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {KENGASH_COMMISSIONS.map((comm) => (
              <div key={comm.id} className="p-3 bg-[#F4F1EA] border border-[#D1CCC0]">
                <div className="text-[10px] font-mono text-[#C8102E] font-bold">0{comm.id}-KOMISSIYA</div>
                <div className="font-bold text-xs text-[#1A1A1A] mt-0.5">{comm.name}</div>
                <div className="text-[11px] text-[#59554E] mt-1 leading-normal">{comm.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2.6 Nazorat Vositalari Jadvali (MDH 25-1 dan 25-8 gacha) */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#0F5132] font-bold">
            2.6-Modda · Deputatlik va Parlament Nazorati
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Kengashning 4 Asosiy Nazorat Vositalari
          </h3>
          <p className="text-xs text-[#59554E] mt-1">
            Faqat viloyat Kengashiga xos: Budjetlararo transfertlar, yer uchastkalarini jamoat ehtiyoji uchun kompensatsiya evaziga olib qo'yish va mulkni buzish, Ombudsman hisoboti, yodgorliklarni o'rnatish/ko'chirish.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#D1CCC0] font-editorial-body">
            <thead className="bg-[#1A1A1A] text-white uppercase text-[10px] tracking-wider font-mono">
              <tr>
                <th className="p-3 border-r border-[#333]">Nazorat shakli</th>
                <th className="p-3 border-r border-[#333]">Modda</th>
                <th className="p-3 border-r border-[#333]">Muddati va tartibi</th>
                <th className="p-3 border-r border-[#333]">Cheklov va shartlar</th>
                <th className="p-3">Natijasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D1CCC0] bg-white">
              {SUPERVISION_INSTRUMENTS.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F4F1EA] transition-colors">
                  <td className="p-3 font-bold text-[#1A1A1A] border-r border-[#D1CCC0]">{item.shakl}</td>
                  <td className="p-3 font-mono text-[#C8102E] border-r border-[#D1CCC0] whitespace-nowrap">{item.modda}</td>
                  <td className="p-3 border-r border-[#D1CCC0]">{item.muddat}</td>
                  <td className="p-3 border-r border-[#D1CCC0] text-[#59554E]">{item.cheklov}</td>
                  <td className="p-3 font-medium text-[#0F5132]">{item.natija}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2.7 Hujjatlar, Bekor Qilish Zanjiri va MUHIM ISTISNO! */}
      <div className="border border-[#D1CCC0] bg-[#FAF8F5] p-6 lg:p-8 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
            2.7-Modda · MDH 6, 26, 28, 29-Moddalar
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Hujjatlar Turlari va Bekor Qilish Zanjiri
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white border border-[#D1CCC0]">
            <h4 className="font-bold text-sm text-[#1A1A1A] mb-2">Hujjatlar Turlari:</h4>
            <p className="mb-2"><strong>Kengash:</strong> Qaror qabul qiladi.</p>
            <p className="mb-2"><strong>Hokim:</strong> Qaror qabul qiladi va farmoyish chiqaradi.</p>
            <p className="text-[#59554E]">
              Barcha hujjatlar <strong>Yagona elektron tizimda</strong> ishlab chiqiladi va ro'yxatdan o'tkaziladi. 
              Ro'yxatdan o'tmagan hujjat huquqiy oqibat keltirib chiqarmaydi!
            </p>
          </div>

          <div className="p-4 bg-white border border-[#D1CCC0]">
            <h4 className="font-bold text-sm text-[#1A1A1A] mb-2">Bekor Qilish Zanjiri:</h4>
            <ul className="space-y-1.5 text-[#333]">
              <li><strong>Kengash qarori qonunga zid bo'lsa:</strong> Hokim taqdimnoma kiritadi ➔ Kengash 1 oyda ko'radi ➔ rad etilsa Senat yoki sudga murojaat qilinadi ➔ <strong>Oliy Majlis Senati</strong> bekor qiladi.</li>
              <li><strong>Hokim hujjati qonunga zid bo'lsa:</strong> <strong>Prezident</strong> to'xtatadi yoki bekor qiladi. Vazirlar Mahkamasi ham davlat manfaatiga zid bo'lsa bekor qila oladi.</li>
            </ul>
          </div>
        </div>

        {/* Big Red Legal Alert: MUHIM ISTISNO! */}
        <div className="p-6 bg-[#FAF0F0] border-2 border-[#C8102E] text-[#1A1A1A]">
          <div className="flex items-center gap-2 text-sm font-mono font-bold text-[#C8102E] uppercase mb-2">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span>KONSTITUTSIYAVIY MUHIM ISTISNO!</span>
          </div>
          <p className="font-editorial-title text-lg font-bold text-[#1A1A1A] mb-2">
            Xususiy mulk huquqi va yer uchastkasiga bo'lgan huquq yuzaga kelishiga asos bo'lgan qarorlar va hujjatlar yuqori organlar tomonidan bekor qilinmaydi!
          </p>
          <p className="text-xs text-[#59554E] leading-relaxed">
            Agar tuman yoki viloyat hokimi qonunni buzgan holda yer yoki ob'ekt ajratish haqida qaror chiqargan bo'lsa ham, 
            Prezident, Vazirlar Mahkamasi yoki yuqori hokim uni ma'muriy tartibda bekor qila olmaydi. 
            Xususiy mulk daxlsizligi nuqtai nazaridan bu masala <strong>faqat va faqat mustaqil sud orqali</strong> hal etilishi shart (MDH Qonuni 21-1 va 26-moddalar).
          </p>
        </div>
      </div>
    </div>
  );
};
