import React, { useState } from 'react';
import { MAHALLA_COMMISSIONS } from '../data/newspaperData.ts';
import { 
  Users, 
  Shield, 
  Landmark, 
  Building2, 
  Briefcase, 
  FileText, 
  Coins, 
  AlertCircle,
  CheckCircle2,
  Lock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const MAHALLA_PRINICIPLES = [
  "Qonuniylik",
  "Inson huquq va erkinliklari ustuvorligi",
  "Demokratizm",
  "Oshkoralik",
  "Ijtimoiy adolat",
  "Mahalliy masalalarda mustaqillik",
  "Jamoatchilik asosidagi o'zaro yordam",
  "Ijtimoiy sheriklik",
  "Urf-odat va an'analarni hisobga olish"
];

const DISMISSAL_REASONS = [
  { id: 1, sabab: "Vakolatni o'z zimmasidan ixtiyoriy soqit qilganda (iste'fo)", izoh: "Rais o'z arizasiga ko'ra vakolatini topshiradi." },
  { id: 2, sabab: "Axloq-odob normalarini buzgan yoki vazifalarni uzrsiz bajarmaganda", izoh: "Fuqarolar yig'inining maxsus qarori asosida muddatidan oldin tugatiladi." },
  { id: 3, sabab: "Sud tomonidan muomalaga layoqatsiz deb topilganda", izoh: "Sudning qonuniy kuchga kirgan hal qiluv qaroriga muvofiq." },
  { id: 4, sabab: "Sudning ayblov hukmi qonuniy kuchga kirganda", izoh: "Jinoiy javobgarlikka tortilgan taqdirda vakolat avtomatik to'xtatiladi." },
  { id: 5, sabab: "Bedarak yo'qolgan yoki vafot etgan deb e'lon qilinganda", izoh: "Sud qarori asosida rasmiylashtiriladi." },
  { id: 6, sabab: "O'zbekiston Respublikasi fuqaroligini yo'qotganda", izoh: "Fuqarolik to'xtatilishi bilan raislik vakolati ham tugaydi." },
  { id: 7, sabab: "Sog'lig'i yoki uzrli sabab bilan 3 oy davomida vazifalarni bajara olmaganda", izoh: "Imtihonlarda ko'p tushadi: 3 oy davomida xizmatga chiqa olmasa yangi saylov tayinlanadi." },
  { id: 8, sabab: "Vafot etganda", izoh: "Tegishli guvohnoma asosida vakolatlari tugatiladi." }
];

const AUTHORITY_GROUPS = [
  {
    nom: "1. Tashkiliy va Saylov Vakolatlari",
    bandlar: [
      "Rais, o'rinbosarlar (keksalar va yoshlar maslahatchilari), maslahatchilar va komissiya a'zolarini saylash;",
      "Mas'ul kotibni tasdiqlash;",
      "Tuman Kengashi saylov okrug komissiyalariga tavsiya berish, uchastka saylov komissiyalariga a'zolar taqdim etish;",
      "Saylov va referendumlarda kuzatuvchilar yuborish."
    ]
  },
  {
    nom: "2. Ijtimoiy Himoya Vakolatlari",
    bandlar: [
      "Nochor qatlam, kam ta'minlangan oilalarga (nikoh va to'y xarajatlarida) ko'mak va moddiy yordam ajratish;",
      "Yolg'iz keksalar, boquvchisini yo'qotganlar va yetim bolalarni ijtimoiy muhofaza qilish;",
      "Xotin-qizlar va bolalarga nisbatan zo'ravonlik profilaktikasi (rais IIO ni zudlik bilan xabardor qiladi);",
      "Ozodlikdan mahrum etish joylaridan qaytgan shaxslarning ijtimoiy reabilitatsiyasiga ko'maklashish."
    ]
  },
  {
    nom: "3. Iqtisodiy va Mulkiy Vakolatlar",
    bandlar: [
      "O'z mablag'larini shakllantirish, mol-mulkka egalik qilish va ixtiyoriy badallarni jalb etish;",
      "Tadbirkorlar kreditlariga kafillik berish va oilaviy biznesni qo'llab-quvvatlash;",
      "Dehqon xo'jaliklarini xo'jalik kitobiga kiritish va hisobini yuritish;",
      "Mahalla qoshida Maslahat markazlarini tashkil etish (yuridik shaxs maqomiga ega emas!)."
    ]
  },
  {
    nom: "4. Jamoatchilik Nazorati Vakolatlari",
    bandlar: [
      "Rais, maslahatchilar, komissiyalar, taftish komissiyasi hisobotlarini har chorakda eshitish;",
      "Hududdagi maktab, poliklinika, profilaktika inspektorlari hisobotlarini tinglash;",
      "Har chorakda tuman ijro hokimiyati idoralari rahbarlarining hisobotini eshitish (bayonnomalar hokimlikka yuboriladi);",
      "Qonunlar ijrosi bo'yicha davlat organlariga so'rovlar yuborish."
    ]
  },
  {
    nom: "5. Raisning Shaxsiy Vakolatlari (14, 15-moddalar)",
    bandlar: [
      "5 yilga saylanadi, VM namunasi bo'yicha maxsus Guvohnomaga ega;",
      "Yig'inni chaqiradi, shartnomalar tuzadi, mablag'larni tasarruf etadi, sudda yig'in manfaatini ifodalaydi;",
      "Oilaviy va mulkiy ahvol haqida rasmiy ma'lumotnomalar beradi;",
      "Fuqarolarni muomala layoqatini cheklash bo'yicha sudga ariza kiritishga haqli;",
      "15-moddaga asosan: O'limni qayd etishi hamda qonunda belgilangan ishonchnomalarni tasdiqlashi mumkin!"
    ]
  }
];

export const SectionMahalla: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<number>(0);

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="border-b-2 border-[#1A1A1A] pb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[#0F5132] font-bold">
            3-Bo'lim · Qonun Tahlili
          </div>
          <a
            href="https://lex.uz/docs/-2156899"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#1A1A1A] hover:text-[#0F5132] underline"
          >
            <span>Lex.uz: «Fuqarolarning oʻzini oʻzi boshqarish organlari toʻgʻrisida»gi Qonunga oʻzgartish va qoʻshimchalar kiritish haqida</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <h2 className="font-editorial-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mt-1">
          Fuqarolarning O'zini O'zi Boshqarishi — Mahalla
        </h2>
        <p className="text-sm font-editorial-sub italic text-[#59554E] mt-1 max-w-3xl">
          «Fuqarolarning oʻzini oʻzi boshqarish organlari toʻgʻrisida»gi Oʻzbekiston Respublikasi Qonuniga 
          oʻzgartish va qoʻshimchalar kiritish haqidagi Qonun (Lex.uz: -2156899) tahlili.
        </p>
      </div>

      {/* Featured Editorial Photo for Mahalla: page_3__e20eae25.png */}
      <div className="border border-[#1A1A1A] bg-white p-3 shadow-xs">
        <img 
          src="/assets/aistudio/page_3__e20eae25.png" 
          alt="Mahalla fuqarolar yig'inida fuqarolarni qabul qilish va jamoatchilik boshqaruvi"
          className="w-full h-auto max-h-[460px] object-cover object-center border border-[#D1CCC0]"
        />
        <div className="mt-2 px-1 text-xs font-editorial-sub italic text-[#59554E] flex items-center justify-between flex-wrap gap-2">
          <span>
            <strong>3-Rasm:</strong> Mahalla fuqarolar yig'inida aholi murojaatlarini qabul qilish va jamoatchilik boshqaruvi amaliyoti.
          </span>
          <span className="font-mono text-[10px] text-[#0F5132] font-semibold">
            FOB Qonuni 8-modda (Nodavlat Yuridik Shaxs Maqomi)
          </span>
        </div>
      </div>

      {/* 3.1 Asosiy Maqom, Kafolat va 9 ta Prinsip */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#59554E] mb-2">
          <span>3.1-Modda Tahlili</span>
          <span>·</span>
          <span>FOB 1–10-1-Moddalar</span>
        </div>
        <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A] mb-4">
          Nodavlat Yuridik Shaxs Maqomi va Qat'iy Kafolatlar
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-editorial-body text-[#292524] leading-relaxed">
          <div className="space-y-3">
            <p className="first-letter:text-4xl first-letter:font-editorial-title first-letter:font-bold first-letter:float-left first-letter:mr-2">
              <strong>Maqomi (8-modda):</strong> Shaharcha, qishloq, ovul va mahalla fuqarolar yig'inlari 
              <strong> davlat hokimiyati organlari tizimiga kirmaydi!</strong> Ular yuridik shaxs huquqlaridan 
              to'liq foydalanadi, o'z nomi yozilgan mustaqil muhrga ega va Vazirlar Mahkamasi belgilagan tartibda ro'yxatga olinadi.
            </p>
            <p>
              <strong>Kafolat va Aralashmaslik (4, 7-moddalar):</strong> Davlat organlari va mansabdor shaxslarning fuqarolar 
              yig'inlarining qonuniy faoliyatiga aralashuviga <strong>yo'l qo'yilmaydi</strong>. Shu bilan birga, davlat ularga to'la shart-sharoit 
              yaratadi va moliyaviy-texnik ko'maklashadi.
            </p>
            <div className="p-3 bg-white border border-[#D1CCC0] text-xs">
              <strong>Ishtirokchilar (9-modda):</strong> Tegishli hududda doimiy yashovchi <strong>18 yoshga to'lgan</strong> barcha shaxslar yig'inda teng huquqli qatnashuvchilardir.
            </div>
          </div>

          <div>
            <div className="p-4 bg-[#EDEAE1] border border-[#D1CCC0]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#0F5132] font-bold mb-2">
                Mahalla Boshqaruvining 9 ta Asosiy Prinsipi (5-modda):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {MAHALLA_PRINICIPLES.map((prin, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[#1A1A1A]">
                    <span className="font-mono text-[#0F5132] font-bold">0{i + 1}.</span>
                    <span>{prin}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 p-3 bg-white border border-[#D1CCC0] text-xs text-[#59554E]">
              <strong>Hudud o'zgarishi (6-modda):</strong> Mahallalarni tuzish, birlashtirish, bo'lish, tugatish yoki chegaralarini o'zgartirish faqat fuqarolar yig'ini iltimosnomasi asosida amalga oshiriladi.
            </div>
          </div>
        </div>
      </div>

      {/* 3.2 Yig'in Organlari: Kengash, 8 ta Komissiya va Taftish Komissiyasi */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
            3.2-Modda · FOB 9, 13, 18-Moddalar
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Mahallaning 3 Bo'g'inli Boshqaruv Tuzilmasi
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs font-editorial-body">
          {/* Organ 1 */}
          <div className="p-4 bg-white border border-[#D1CCC0] flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-[#C8102E] font-bold uppercase mb-1">
                Ijroiya Bo'g'ini
              </div>
              <h4 className="font-editorial-title text-base font-bold text-[#1A1A1A] mb-2">
                Fuqarolar Yig'ini Kengashi
              </h4>
              <p className="text-[#59554E] leading-relaxed mb-3">
                Yig'in qarorlarini bajaradi va yig'inlar oralig'ida mahallaning joriy operativ faoliyatini amalga oshiradi.
              </p>
              <div className="text-[11px] text-[#333] space-y-1 bg-[#F4F1EA] p-2.5 border border-[#D1CCC0]">
                <strong>Tarkibi:</strong> Rais, o'rinbosarlar, maslahatchilar, mas'ul kotib, xotin-qizlar faoli, profilaktika inspektori, maktab va bog'cha rahbarlari, oilaviy shifokorlik punkti rahbarlari.
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-[#EAE5D9] text-[11px] text-[#59554E]">
              Majlisi: Oyida kamida 1 marta (Kvorum 2/3).
            </div>
          </div>

          {/* Organ 2 */}
          <div className="p-4 bg-white border border-[#D1CCC0] flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-[#0F5132] font-bold uppercase mb-1">
                Sohaviy Bo'g'in
              </div>
              <h4 className="font-editorial-title text-base font-bold text-[#1A1A1A] mb-2">
                8 ta Yo'nalish Komissiyasi
              </h4>
              <p className="text-[#59554E] leading-relaxed mb-3">
                Mahallaning turli sohalarida aholi muammolarini hal qilish va jamoatchilik loyihalarini boshqarish.
              </p>
              <div className="text-[11px] text-[#333] space-y-1 bg-[#F4F1EA] p-2.5 border border-[#D1CCC0]">
                <strong>Saylanish qoidasi:</strong> Komissiya a'zolari yig'inda hozir bo'lganlarning yarmidan ko'p ovozi bilan saylanadi. Ularga rais va maslahatchilar rahbarlik qiladi.
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-[#EAE5D9] text-[11px] text-[#59554E]">
              Yarashtirish, Ma'rifat, Yoshlar, Biznes, Ekologiya va b.
            </div>
          </div>

          {/* Organ 3 */}
          <div className="p-4 bg-white border border-[#D1CCC0] flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-[#78350F] font-bold uppercase mb-1">
                Mustaqil Nazorat
              </div>
              <h4 className="font-editorial-title text-base font-bold text-[#1A1A1A] mb-2">
                Taftish Komissiyasi
              </h4>
              <p className="text-[#59554E] leading-relaxed mb-3">
                Mahallaning moliya-xo'jalik faoliyati, budjet sarflanishi va mulkiy hisobotlarini tekshiradi.
              </p>
              <div className="text-[11px] text-[#333] space-y-1 bg-[#FBF0EE] p-2.5 border border-[#E8C0B8]">
                <strong>Muhim huquqiy qoida:</strong> Butunlay mustaqil organ. Raisga yoki Kengashga emas, <strong>faqat va faqat Fuqarolar yig'iniga</strong> hisobdordir. Uning a'zolari Kengash tarkibida bo'la olmaydi.
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-[#EAE5D9] text-[11px] text-[#59554E]">
              Moliyaviy hisobot har chorakda eshitiladi.
            </div>
          </div>
        </div>

        {/* 8 Commissions Detailed List */}
        <div className="mt-6 pt-4 border-t border-[#D1CCC0]">
          <div className="text-xs font-mono uppercase tracking-widest text-[#59554E] mb-3">
            Faoliyat Yo'nalishlari Bo'yicha 8 ta Komissiya (18-modda):
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {MAHALLA_COMMISSIONS.map((c) => (
              <div key={c.id} className="p-3 bg-[#F4F1EA] border border-[#D1CCC0] text-xs">
                <div className="text-[10px] font-mono font-bold text-[#0F5132]">0{c.id}</div>
                <div className="font-bold text-[#1A1A1A] mt-0.5">{c.name}</div>
                <div className="text-[11px] text-[#59554E] mt-1">{c.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3.3 Yig'in Chaqirish Zanjiri & Kengash Majlisi */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-bold">
            3.3-Modda · FOB 21, 22-Moddalar
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Yig'in Chaqirish Zanjiri va Qaror Qabul Qilish Kvorumi
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs font-editorial-body">
          {/* 6 steps chain */}
          <div className="lg:col-span-8 space-y-3">
            <div className="font-bold text-sm text-[#1A1A1A] uppercase tracking-wide font-mono mb-2">
              Yig'in Chaqirish Bosqichlari (Timeline):
            </div>
            
            <div className="p-3 bg-white border border-[#D1CCC0]">
              <strong>1-qadam (Tashabbus):</strong> Rais, kengash, tuman Kengashi, hududiy muvofiqlashtirish kengashi yoki <strong>huquqli aholining kamida 1/3 qismi</strong> tashabbusi bilan.
            </div>
            <div className="p-3 bg-white border border-[#D1CCC0]">
              <strong>2-qadam (Davriylik):</strong> Har chorakda kamida 1 marta o'tkaziladi.
            </div>
            <div className="p-3 bg-white border border-[#D1CCC0]">
              <strong>3-qadam (Kvorum):</strong> Huquqli aholining <strong>yarmidan ko'pi</strong> kelsa vakolatli. (Agar aholini to'plash imkoni bo'lmasa, vakillar yig'ilishi chaqiriladi — kvorum <strong>kamida 2/3 qism</strong>).
            </div>
            <div className="p-3 bg-white border border-[#D1CCC0]">
              <strong>4-qadam (Jarayon):</strong> Yig'inni olib borish uchun rayosat saylanadi. Korxona vakillari faqat maslahat ovozi bilan qatnashadi.
            </div>
            <div className="p-3 bg-white border border-[#D1CCC0]">
              <strong>5-qadam (Qaror):</strong> Ochiq yoki yashirin ovoz bilan oddiy ko'pchilik ovozi (50% + 1) asosida qabul qilinadi.
            </div>
            <div className="p-3 bg-white border border-[#D1CCC0]">
              <strong>6-qadam (Bayonnoma):</strong> Sana, qatnashchilar, kun tartibi va qaror yoziladi. Rais va mas'ul kotib imzolaydi.
            </div>
          </div>

          {/* Kengash Majlisi Sidebar */}
          <div className="lg:col-span-4 p-5 bg-[#EDEAE1] border border-[#D1CCC0] flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#C8102E] font-bold mb-1">
                FOB 22-Modda
              </div>
              <h4 className="font-editorial-title text-base font-bold text-[#1A1A1A] mb-2">
                Yig'in Kengashi Majlisi
              </h4>
              <p className="text-xs text-[#59554E] leading-relaxed mb-4">
                Yig'inlar oralig'ida Kengash a'zolari (rais, o'rinbosarlar, kotib, soha vakillari) majlisi o'tkaziladi:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-white border border-[#D1CCC0]">
                  <strong>Davriyligi:</strong> Oyida kamida 1 marta.
                </div>
                <div className="p-2.5 bg-white border border-[#D1CCC0]">
                  <strong>Kvorum:</strong> A'zolarning <strong>kamida 2/3 qismi</strong> hozir bo'lsa vakolatli.
                </div>
                <div className="p-2.5 bg-white border border-[#D1CCC0]">
                  <strong>Qaror:</strong> Hozir bo'lganlarning <strong>yarmidan ko'pi</strong> yoqlasa, ochiq ovoz bilan qabul qilinadi.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D1CCC0] text-[11px] text-[#59554E] italic">
              «Eslatma: Kengash majlisida ovoz berish ro'yxatdagi emas, aynan hozir bo'lgan a'zolarga nisbatan hisoblanadi.»
            </div>
          </div>
        </div>
      </div>

      {/* 3.4 Vakolatlarni 5 Guruhda O'rganamiz */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#59554E]">
            3.4-Modda · FOB 11, 13, 14, 15-Moddalar
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Mahalla Vakolatlarining 5 Asosiy Klasteri
          </h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-[#D1CCC0] mb-4">
          {AUTHORITY_GROUPS.map((grp, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedGroup(idx)}
              className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedGroup === idx
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-[#EDEAE1] text-[#1A1A1A] hover:bg-[#E2DDD2]'
              }`}
            >
              {grp.nom.split('.')[1]}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 bg-white border border-[#D1CCC0]">
          <h4 className="font-editorial-title text-lg font-bold text-[#1A1A1A] mb-3">
            {AUTHORITY_GROUPS[selectedGroup].nom}
          </h4>
          <ul className="space-y-2 text-xs font-editorial-body text-[#292524] list-disc pl-5">
            {AUTHORITY_GROUPS[selectedGroup].bandlar.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3.5 Rais Vakolatini Muddatidan Oldin Tugatish (8 ta Holat) */}
      <div className="border border-[#D1CCC0] newspaper-pattern-card p-6 lg:p-8">
        <div className="border-b border-[#D1CCC0] pb-3 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-bold">
            3.5-Modda · FOB 24-Modda
          </div>
          <h3 className="font-editorial-title text-2xl font-bold text-[#1A1A1A]">
            Mahalla Raisi Vakolatini Muddatidan Oldin Tugatishning Qat'iy 8 Holati
          </h3>
          <p className="text-xs text-[#59554E] mt-1">
            Qonun qat'iy yopiq ro'yxatni belgilaydi. Hech bir mansabdor o'z ixtiyori bilan boshqa sabablar asosida raisni ishdan bo'shata olmaydi!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-editorial-body">
          {DISMISSAL_REASONS.map((reason) => (
            <div key={reason.id} className="p-4 bg-white border border-[#D1CCC0] flex flex-col justify-between">
              <div>
                <div className="font-mono text-[#C8102E] font-bold text-xs mb-1">
                  0{reason.id}-HOLAT
                </div>
                <div className="font-bold text-[#1A1A1A] mb-2 leading-snug">
                  {reason.sabab}
                </div>
              </div>
              <div className="text-[11px] text-[#59554E] pt-2 border-t border-[#EAE5D9]">
                {reason.izoh}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3.6 Moliya, Mulk Daxlsizligi va 4 ta Manba */}
      <div className="p-6 bg-[#EDEAE1] border border-[#D1CCC0]">
        <div className="text-xs font-mono uppercase tracking-wider text-[#0F5132] font-bold mb-1">
          3.6-Modda · FOB 26, 27-Moddalar
        </div>
        <h3 className="font-editorial-title text-xl font-bold text-[#1A1A1A] mb-3">
          Mahalla Mulki va 4 ta Moliyaviy Manbasi
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs mb-4">
          <div className="p-3 bg-white border border-[#D1CCC0]">
            <span className="font-bold text-[#1A1A1A] block">1. O'z mablag'lari:</span>
            Mahallaga tegishli mulklarni ijaraga berish, pullik xizmatlar va tadbirlardan tushumlar.
          </div>
          <div className="p-3 bg-white border border-[#D1CCC0]">
            <span className="font-bold text-[#1A1A1A] block">2. Mahalliy budjet:</span>
            Mahalliy hokimiyat tomonidan ajratiladigan subvensiya va maqsadli transferlar.
          </div>
          <div className="p-3 bg-white border border-[#D1CCC0]">
            <span className="font-bold text-[#1A1A1A] block">3. Homiylik xayriyalari:</span>
            Jismoniy va yuridik shaxslarning ixtiyoriy beg'araz begona qilinmaydigan badallari.
          </div>
          <div className="p-3 bg-white border border-[#D1CCC0]">
            <span className="font-bold text-[#1A1A1A] block">4. Boshqa manbalar:</span>
            Qonunchilikda taqiqlanmagan boshqa daromadlar va maxsus fondlar mablag'lari.
          </div>
        </div>

        <div className="p-3 bg-[#FAF8F5] border-l-2 border-[#0F5132] text-xs text-[#1A1A1A]">
          <strong>Mulk va Mablag' Daxlsizligi:</strong> Mahalla mablag'lari shaxsiy g'azna hisobvaraqlarida turadi va <strong>olib qo'yilishi qat'iyan taqiqlanadi!</strong> Kengash har chorakda yig'in oldida sarflangan har bir tiyin bo'yicha moliyaviy hisobot beradi.
        </div>
      </div>
    </div>
  );
};
