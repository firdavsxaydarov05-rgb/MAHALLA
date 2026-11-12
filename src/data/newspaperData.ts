import {
  GoldenRule,
  TimelineStep,
  Commission,
  SupervisionItem,
  ComparisonMatrixRow,
  DebateRow,
  TrapQuestion,
  CaseStudy,
  GlossaryTerm,
  MnemonicFormula,
  ExamQuestion,
  DiscussionPrompt
} from '../types/data.ts';

export const GOLDEN_RULES: GoldenRule[] = [
  {
    id: 1,
    title: "Mahalliy hokimiyat ikki ustunga tayanadi",
    detail: "Kengash — xalq vakillik organi, Hokim — ijroiya hokimiyati rahbari. Ular bir-birini cheklaydi va muvozanatda tutadi, lekin bir-birining vazifasini bajarmaydi.",
    legalAnchor: "MDH Qonuni 1-modda"
  },
  {
    id: 2,
    title: "Ikki tomonlama legitimlik",
    detail: "Hokim yuqoridan (Prezident yoki yuqori hokim tomonidan) tayinlanadi va tegishli Xalq deputatlari Kengashi tomonidan tasdiqlanadi. Ikkisining roziligisiz hokim lavozimga o'tira olmaydi.",
    legalAnchor: "MDH Qonuni 2-modda"
  },
  {
    id: 3,
    title: "Mahalla — davlat tizimidan tashqaridagi mustaqil institut",
    detail: "Mahalla (Fuqarolar yig'ini) davlat hokimiyati organlari tizimiga kirmaydi. Aholi saylaydigan, aholi oldida hisobdor, o'z muhriga ega mustaqil nodavlat yuridik shaxsdir.",
    legalAnchor: "FOB Qonuni 8-modda"
  },
  {
    id: 4,
    title: "Ikki tizimning uzviy bog'lanishi",
    detail: "Kengash va Mahalla hisobotlar eshitish, hududiy tashabbuslar, saylov komissiyalarini shakllantirish va mahalliy budjetdan moddiy ko'mak orqali o'zaro hamkorlik qiladi.",
    legalAnchor: "FOB 11, 13, 20-moddalar"
  },
  {
    id: 5,
    title: "Barcha vakolat muddatlari — 5 yil",
    detail: "Hokim, Kengash deputati va Mahalla raisining vakolat muddati bir xil: 5 yil. Eng ko'p adashiladigan jihat esa kvorum va ovoz nisbatlaridir (2/3 vs 50%+1).",
    legalAnchor: "MDH 2, 16; FOB 23-moddalar"
  }
];

export const HOKIM_TIMELINE: TimelineStep[] = [
  {
    step: 1,
    title: "1-qadam: Siyosiy partiya guruhlari bilan maslahatlashuv",
    description: "Prezident viloyat/Toshkent shahar Kengashidagi har bir siyosiy partiya guruhi bilan nomzod bo'yicha maslahatlashuv o'tkazadi.",
    legalBasis: "MDH Qonuni 2-modda"
  },
  {
    step: 2,
    title: "2-qadam: Nomzodning Kengashga taqdim etilishi",
    description: "Maslahatlashuvlardan so'ng Prezident (tuman/shaharda viloyat hokimi) nomzodni tegishli Kengashga tasdiqlash uchun rasman taqdim etadi.",
    legalBasis: "MDH Qonuni 2-modda"
  },
  {
    step: 3,
    title: "3-qadam: Dastur va antikorrupsiya rejasini himoya qilish",
    description: "Hokimlikka nomzod Kengash deputatlariga hududni ijtimoiy-iqtisodiy rivojlantirish dasturi hamda korrupsiyaga qarshi kurashish bo'yicha aniq rejasini taqdim etadi.",
    legalBasis: "MDH Qonuni 2-modda"
  },
  {
    step: 4,
    title: "4-qadam: Deputatlar ovoz berishi",
    description: "Nomzod tasdiqlanishi uchun deputatlar umumiy sonining oddiy ko'pchiligi (kamida 50% + 1 nafar) uni yoqlab ovoz berishi shart.",
    legalBasis: "MDH Qonuni 2-modda"
  },
  {
    step: 5,
    title: "5-qadam (Rad etilsa): Qo'shimcha taqdimotlar",
    description: "Agar nomzod yetarli ovoz ololmasa, qo'shimcha maslahatlashuvlar o'tkaziladi va bir oy ichida nomzod yana 2 marta taqdim etilishi mumkin (jami 3 marta).",
    isCrisis: true,
    legalBasis: "MDH Qonuni 2-modda"
  },
  {
    step: 6,
    title: "6-qadam (3 marta rad etilsa): Favqulodda huquqiy yechim",
    description: "Nomzod 3 marta rad etilsa, Prezident hokim vazifasini bajaruvchini tayinlaydi va Kengashni muddatidan oldin tarqatish huquqiga ega bo'ladi. Yangi saylov 3 oy ichida o'tkaziladi.",
    isCrisis: true,
    legalBasis: "MDH Qonuni 2-modda"
  },
  {
    step: 7,
    title: "7-qadam (Tasdiqlansa): Farmon qabul qilinishi",
    description: "Kengash ko'pchilik ovoz bilan ma'qullagan taqdirda, Prezident Kengash qaroriga muvofiq hokimni tayinlash to'g'risida Farmon qabul qiladi.",
    isApproval: true,
    legalBasis: "MDH Qonuni 2-modda"
  }
];

export const KENGASH_COMMISSIONS: Commission[] = [
  {
    id: 1,
    name: "Mahalliy budjet, tadbirkorlik va iqtisodiy islohotlar",
    description: "Mahalliy budjet loyihasi va uning ijrosi, mahalliy soliq va yig'imlar stavkalari, tadbirkorlik muhitini rivojlantirish dasturlarini ko'rib chiqadi."
  },
  {
    id: 2,
    name: "Korrupsiyaga qarshi kurash, ochiqlik va huquqiy masalalar",
    description: "Hokimlik va idoralarda korrupsiyaviy xavflarni tahlil qilish, jamoatchilik oldida hisobdorlik, normativ qarorlar qonuniyligini monitoring qilish."
  },
  {
    id: 3,
    name: "Ijtimoiy soha, yoshlar siyosati, madaniyat va sport",
    description: "Ta'lim, sog'liqni saqlash, yoshlar bandligi, moddiy yordam ajratish shaffofligi va madaniy ob'ektlarni saqlash masalalari."
  },
  {
    id: 4,
    name: "Agrar, qurilish, kommunal, ekologiya, sanoat va transport",
    description: "Bosh reja, hududiy qurilishlar, suv va yer resurslaridan oqilona foydalanish, obodonlashtirish hamda jamoat transporti tarmoqlari nazorati."
  },
  {
    id: 5,
    name: "Reglament va deputatlik odob-axloqi",
    description: "Kengash reglamentiga rioya etilishini ta'minlash, deputatlik odob-axloqi qoidalarini ko'rib chiqish va deputat so'rovlari ijrosini nazorat qilish."
  }
];

export const MAHALLA_COMMISSIONS: Commission[] = [
  { id: 1, name: "Yarashtirish komissiyasi", description: "Oilaviy nizolar, qo'shnilararo kelishmovchiliklarni sudgacha tinch yo'l bilan hal etish." },
  { id: 2, name: "Ma'rifat va ma'naviyat komissiyasi", description: "Kitobxonlik, madaniy tadbirlar, milliy qadriyatlar va ma'naviy tarbiya ishlari." },
  { id: 3, name: "Ijtimoiy qo'llab-quvvatlash komissiyasi", description: "Kam ta'minlangan oilalar, yolg'iz keksalar va nogironligi bo'lgan shaxslarga yordam ko'rsatish." },
  { id: 4, name: "Xotin-qizlar bilan ishlash komissiyasi", description: "Ayollar bandligi, ularning huquqlarini himoya qilish, zo'ravonlikdan jabrlanganlarga ko'mak." },
  { id: 5, name: "Voyaga yetmaganlar, yoshlar va sport komissiyasi", description: "Yoshlar tarbiyasi, to'garaklar, bo'sh vaqtni mazmunli tashkil etish va sport musobaqalari." },
  { id: 6, name: "Tadbirkorlik va oilaviy biznes komissiyasi", description: "Oilaviy tadbirkorlikni rivojlantirish, hunarmandchilik, imtiyozli kreditlarga tavsiya berish." },
  { id: 7, name: "Ekologiya, obodonlashtirish va ko'kalamzorlashtirish", description: "Mahalla ozodaligi, 'Yashil makon' loyihasi, chiqindilarni boshqarish va ariqlarni tozalash." },
  { id: 8, name: "Jamoatchilik nazorati va iste'molchilar huquqlari", description: "Savdo va xizmat ko'rsatish sifatini tekshirish, narxlar asossiz oshishining oldini olish." }
];

export const SUPERVISION_INSTRUMENTS: SupervisionItem[] = [
  {
    shakl: "Hokim hisoboti",
    modda: "MDH 25-1-modda",
    muddat: "Har yili. Viloyatda VM majlisidan keyin 10 kunda; tumanda viloyat majlisidan keyin 10 kunda.",
    cheklov: "Kengash kompleks baho beradi.",
    natija: "Qaror va hisobot rasmiy matbuotda va veb-saytda e'lon qilinishi shart."
  },
  {
    shakl: "Rahbarlar hisoboti (IIB, Adliya, Sog'liq)",
    modda: "MDH 25-2..5-moddalar",
    muddat: "IIB: profilaktika har chorakda, xavfsizlik 6 oyda. Adliya: viloyatda yilda 1, tumanda 6 oyda. Sog'liq: yarim yilda.",
    cheklov: "Mansabdorlar o'z sohalari doirasida axborot beradi.",
    natija: "Tanqidiy muhokama qilinadi, rahbarning lavozimga muvofiqligi haqida tavsiya qabul qilinadi."
  },
  {
    shakl: "Kengash so'rovi",
    modda: "MDH 25-6-modda",
    muddat: "Yozma javob 10 kun ichida, og'zaki javob keyingi sessiyada beriladi.",
    cheklov: "Tezkor-qidiruv, tergov, sud ish yurituvidagi ishlar, ijro va notarial harakatlar so'rov obyekti bo'la olmaydi!",
    natija: "Deputatlar umumiy sonining ko'pchilik ovozi bilan qabul qilinadi va rasmiy yuboriladi."
  },
  {
    shakl: "Kengash tekshiruvi",
    modda: "MDH 25-7, 8-moddalar",
    muddat: "Xavfsizlik va huquqlarga tahdid soluvchi faktlarni o'rganish zarurati paydo bo'lganda.",
    cheklov: "Maxsus komissiya tuziladi, mutaxassislar jalb etiladi (sud/tergov ishlariga aralashish taqiqlanadi).",
    natija: "Yakuniy hisobot Kengash sessiyasida ko'rib chiqilib, tegishli huquqiy qaror qabul qilinadi."
  }
];

export const KENGASH_VS_MAHALLA: ComparisonMatrixRow[] = [
  {
    mezon: "Konstitutsiyaviy Maqomi",
    kengash: "Davlat hokimiyatining mahalliy vakillik organi",
    mahalla: "Davlat hokimiyati tizimiga kirmaydi (mustaqil o'zini o'zi boshqarish organi, yuridik shaxs)"
  },
  {
    mezon: "Kim a'zo bo'ladi?",
    kengash: "Aholi tomonidan saylangan professional deputatlar",
    mahalla: "Tegishli hududda doimiy yashovchi 18 yoshga to'lgan barcha fuqarolar"
  },
  {
    mezon: "Rasmiy Muhri",
    kengash: "O'zbekiston Respublikasi Davlat gerbi tasviri tushirilgan muhr",
    mahalla: "Davlat gerbisiz, o'z nomi yozilgan alohida muhr"
  },
  {
    mezon: "Qabul qiladigan Hujjat turi",
    kengash: "Kengash Qarori (yagona elektron tizimda ro'yxatdan o'tadi)",
    mahalla: "Fuqarolar yig'ini Qarori (bayonnoma bilan rasmiylashtiriladi)"
  },
  {
    mezon: "Hujjatni Bekor qilish vakolati",
    kengash: "Oliy Majlis Senati yoki sud tomonidan bekor qilinadi",
    mahalla: "Qaror qabul qilgan organning o'zi yoki sud tomonidan bekor qilinadi"
  },
  {
    mezon: "Sessiya/Yig'ilish Kvorumi",
    kengash: "Deputatlar umumiy sonining kamida 2/3 qismi",
    mahalla: "Huquqli aholining yarmidan ko'pi (agar vakillar yig'ilishi bo'lsa 2/3 qism)"
  },
  {
    mezon: "Doimiy boshqaruv organi",
    kengash: "Kengash Raisi va Kotibiyat mudiri/xodimlari",
    mahalla: "Fuqarolar yig'ini kengashi, Rais va mas'ul kotib"
  },
  {
    mezon: "Komissiyalar tizimi",
    kengash: "5 ta doimiy sohaviy komissiya (qoida tariqasida)",
    mahalla: "Faoliyat yo'nalishlari bo'yicha 8 ta komissiya + Mustaqil Taftish komissiyasi"
  }
];

export const HOKIM_VS_RAIS_DEBATE: DebateRow[] = [
  {
    mezon: "Kim tayinlaydi / saylaydi?",
    hokim: "Viloyatda: Prezident taqdim etadi, Kengash tasdiqlaydi. Tumanda: Viloyat hokimi tayinlaydi, Kengash tasdiqlaydi.",
    kengashRaisi: "Kengashning o'zi saylovda ishtirok etgan siyosiy partiyalar deputatlari orasidan saylaydi."
  },
  {
    mezon: "Vakolat muddati va cheklov",
    hokim: "5 yil. Ayni bir shaxs ketma-ket 2 muddatdan ortiq bir hududning hokimi bo'la olmaydi.",
    kengashRaisi: "Kengash vakolati muddatiga (5 yil). Ayni bir shaxs ketma-ket 2 muddatdan ortiq saylana olmaydi."
  },
  {
    mezon: "Boshqaruv va ishlash shakli",
    hokim: "Yakkaboshchilik asosida. Qaror va farmoyishlari uchun shaxsan o'zi to'liq javobgar.",
    kengashRaisi: "Jamoatchilik asosida ishlaydi. Sessiyani kollegial tarzda boshqaradi, Kengash qarorlarini imzolaydi."
  },
  {
    mezon: "Siyosiy partiya a'zoligi",
    hokim: "Qonunda partiya a'zoligini to'xtatish majburiyati ko'rsatilmagan.",
    kengashRaisi: "Vazifasini bajarish davrida siyosiy partiyaga a'zoligini to'xtatib turadi, fraksiya tarkibiga kirmaydi."
  },
  {
    mezon: "Lavozimlarni birga olib borish",
    hokim: "Kengash deputati bo'la oladi, ammo bir vaqtning o'zida Kengash raisi bo'la olmaydi!",
    kengashRaisi: "Hokim bo'la olmaydi, doimiy yoki boshqa komissiyalar tarkibiga a'zo bo'la olmaydi."
  },
  {
    mezon: "Muddatidan oldin ozod qilish tartibi",
    hokim: "Prezident (yoki yuqori hokim) farmoyishi, shuningdek sud hukmi yoki Kengash ishonchsizligi orqali.",
    kengashRaisi: "Kamida 1/3 deputatlar taklifi bilan kiritilib, deputatlar umumiy sonining 2/3 qismidan ko'prog'i ovoz berishi shart."
  }
];

export const TRAP_QUESTIONS: TrapQuestion[] = [
  {
    id: 1,
    savol: "Hokim bir vaqtning o'zida Kengash deputati bo'la oladimi?",
    javob: "Ha, bo'la oladi. Lekin Kengash raisi bo'la olmaydi!",
    izoh: "Hokim xalq deputatlari Kengashiga deputat bo'lib saylanish huquqiga ega, biroq 'Kuchlar taqsimoti' tamoyiliga ko'ra Kengash raisi lavozimini egallashi qat'iyan taqiqlangan.",
    modda: "MDH Qonuni 16-1-modda",
    qonun: "MDH"
  },
  {
    id: 2,
    savol: "Kengash hokim nomzodini rad etsa, nomzod yana necha marta taqdim etiladi?",
    javob: "Dastlabki taqdimotdan so'ng yana 2 marta (jami 3 marta).",
    izoh: "Bir oy ichida qo'shimcha maslahatlashuvlar o'tkazilib, nomzod yana 2 marta kiritiladi. Faqat 3 marta rad etilsagina Prezident Kengashni tarqatish huquqiga ega bo'ladi.",
    modda: "MDH Qonuni 2-modda",
    qonun: "MDH"
  },
  {
    id: 3,
    savol: "Kengashning yangi chaqiriqdagi birinchi sessiyasini kim chaqiradi va kim ochadi?",
    javob: "Hokim chaqiradi (saylovdan keyin 3 hafta ichida), saylov komissiyasi raisi ochadi.",
    izoh: "Birinchi sessiyani amaldagi hokim chaqiradi, tegishli hududiy saylov komissiyasi raisi ochadi va Kengash raisi saylangunga qadar unga raislik qiladi.",
    modda: "MDH Qonuni 17-modda",
    qonun: "MDH"
  },
  {
    id: 4,
    savol: "Kengash raisini muddatidan oldin ozod qilishda sessiyaga kim raislik qiladi?",
    javob: "Doimiy komissiya raislaridan biri.",
    izoh: "Manfaatlar to'qnashuvining oldini olish uchun raisning o'zi emas, balki Kengashning doimiy komissiyalari raislaridan biri majlisga raislik qiladi.",
    modda: "MDH Qonuni 16-1-modda",
    qonun: "MDH"
  },
  {
    id: 5,
    savol: "Deputat o'z ovozini boshqa bir hamkasbiga ishonchnoma orqali topshira oladimi?",
    javob: "Yo'q, mutlaqo mumkin emas. Deputat ovozini faqat shaxsan beradi.",
    izoh: "Deputat ovoz berish huquqini hech kimga berolmaydi. Ovoz elektron tizim yoki byulleten orqali faqat shaxsan (ochiq yoki yashirin) beriladi.",
    modda: "MDH Qonuni 19-modda",
    qonun: "MDH"
  },
  {
    id: 6,
    savol: "Kengash sessiyasida va Mahalla kengashi majlisida ovozlar qanday nisbatda hisoblanadi?",
    javob: "Kengashda umumiy deputatlar soniga nisbatan, Mahalla kengashida esa hozir bo'lganlarga nisbatan hisoblanadi.",
    izoh: "Bu imtihonlarda eng ko'p uchraydigan tuzoq! Kengashda qaror qabul qilishda ro'yxatdagi jami deputatlar bazasi olinadi, mahalla kengashida esa majlisda hozir bo'lgan a'zolarning yarmidan ko'pi kifoya.",
    modda: "MDH 19, FOB 22-moddalar",
    qonun: "IKKISI"
  },
  {
    id: 7,
    savol: "Qonunga zid deb topilgan Hokim hujjatini (qaror yoki farmoyish) kim bekor qiladi?",
    javob: "Prezident bekor qiladi; davlat manfaatiga zid bo'lsa Vazirlar Mahkamasi ham bekor qila oladi.",
    izoh: "Kengash hokim qarorini to'g'ridan-to'g'ri bekor qila olmaydi, balki sudga yoki Senatga murojaat qiladi. Ijro hokimiyati tizimi bo'yicha Prezident va Hukumat bekor qilish vakolatiga ega.",
    modda: "MDH Qonuni 28-modda",
    qonun: "MDH"
  },
  {
    id: 8,
    savol: "Kengashning qonunga zid qarorini kim bekor qiladi?",
    javob: "Oliy Majlis Senati bekor qiladi.",
    izoh: "Vakillik organi qarorini bekor qilish faqat yuqori turuvchi vakillik palatasi — Oliy Majlis Senatining mutlaq vakolatiga kiradi (yoki sud orqali).",
    modda: "MDH Qonuni 26-modda",
    qonun: "MDH"
  },
  {
    id: 9,
    savol: "Yuqori organlar quyi hokimiyatning har qanday noqonuniy hujjatini bekor qila oladimi?",
    javob: "Yo'q! Xususiy mulk va yer uchastkasiga huquq beruvchi qarorlar bekor qilinmaydi.",
    izoh: "O'zbekiston Respublikasi qonunlariga ko'ra xususiy mulk huquqi daxlsizdir. Agar noqonuniy qaror asosida mulk yoki yer huquqi vujudga kelgan bo'lsa, uni yuqori idora bekor qila olmaydi, faqat sud orqali ko'rib chiqiladi!",
    modda: "MDH Qonuni 21-1, 26-moddalar",
    qonun: "MDH"
  },
  {
    id: 10,
    savol: "Yagona elektron tizimda ro'yxatdan o'tmagan hokimlik yoki Kengash hujjati kuchga kiradimi?",
    javob: "Yo'q, ro'yxatdan o'tmagan hujjat hech qanday huquqiy oqibat keltirib chiqarmaydi.",
    izoh: "Barcha qaror va farmoyishlar Yagona elektron tizimga kiritilishi shart. Ro'yxatsiz chiqarilgan 'qog'oz' qarorlar yuridik kuchga ega emas.",
    modda: "MDH Qonuni 6-modda",
    qonun: "MDH"
  },
  {
    id: 11,
    savol: "Kengash so'rovi tergov organi yoki sud ish yurituvidagi ishlar bo'yicha yuborilishi mumkinmi?",
    javob: "Yo'q, mutlaqo mumkin emas.",
    izoh: "Sud va tergov mustaqilligini ta'minlash maqsadida tezkor-qidiruv, tergov, surishtiruv, sud ishlari va notarial harakatlar Kengash so'rovi predmeti bo'la olmaydi.",
    modda: "MDH Qonuni 25-6-modda",
    qonun: "MDH"
  },
  {
    id: 12,
    savol: "Fuqarolar yig'ini (Mahalla) davlat hokimiyati organi hisoblanadimi?",
    javob: "Yo'q, davlat hokimiyati tizimiga kirmaydi, lekin mustaqil yuridik shaxsdir.",
    izoh: "Mahalla fuqarolarning o'zini o'zi boshqarish institutidir. U davlat tuzilmasi bo'lmasa-da, qonuniy vakolatlarga, o'z muhriga va mustaqil bank hisobvarag'iga ega.",
    modda: "FOB Qonuni 8-modda",
    qonun: "FOB"
  },
  {
    id: 13,
    savol: "Mahalladagi Taftish komissiyasi kimga hisobdor?",
    javob: "Faqat va faqat Fuqarolar yig'iniga hisobdor.",
    izoh: "Taftish komissiyasi Mahalla kengashiga yoki raisga bo'ysunmaydi. U mustaqil organ bo'lib, o'z hisobotini to'g'ridan-to'g'ri fuqarolar yig'iniga taqdim etadi.",
    modda: "FOB Qonuni 18-modda",
    qonun: "FOB"
  },
  {
    id: 14,
    savol: "Mahalla qoshida ochiladigan Maslahat markazlari mustaqil yuridik shaxs hisoblanadimi?",
    javob: "Yo'q, yuridik shaxs maqomiga ega emas.",
    izoh: "Maslahat markazlari aholiga ko'maklashish uchun mahalla qoshida jamoatchilik asosida faoliyat yuritadi va alohida korxona yoki yuridik shaxs sanalmaydi.",
    modda: "FOB Qonuni 13-modda",
    qonun: "FOB"
  },
  {
    id: 15,
    savol: "Mahalla budjetiga tushgan yoki jamg'arma mablag'lari yuqori davlat organlari tomonidan olib qo'yilishi mumkinmi?",
    javob: "Yo'q, mahalla mablag'lari olib qo'yilishi qat'iyan taqiqlanadi.",
    izoh: "Fuqarolar yig'inining 4 ta moliyaviy manbasi daxlsizdir. Ular shaxsiy g'azna hisobvaraqlarida saqlanadi va ularni olib qo'yish yoki boshqa maqsadlarga yo'naltirish qonunga xilofdir.",
    modda: "FOB Qonuni 27-modda",
    qonun: "FOB"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    keys: "1-keys: Hokim nomzodining birinchi rad etilishi",
    savol: "Viloyat Kengashi sessiyasida Prezident tomonidan taqdim etilgan hokim nomzodi yetarli ovoz to'play olmadi va rad etildi. Prezident darhol ushbu Kengashni tarqatib yuborish huquqiga egami?",
    yechim: "Yo'q, Prezident Kengashni darhol tarqata olmaydi. Qonunchilikka ko'ra, dastlabki rad etishdan so'ng bir oy muddatda qo'shimcha maslahatlashuvlar o'tkazilib, nomzod yana 2 marta taqdim etilishi kerak. Prezidentda Kengashni muddatidan oldin tarqatish huquqi faqat nomzod ketma-ket 3 marta rad etilgan taqdirdagina vujudga keladi.",
    huquqiyAsos: "MDH Qonuni 2-modda"
  },
  {
    id: 2,
    keys: "2-keys: Kengash sessiyasining kvorum yetishmovchiligi",
    savol: "Tuman xalq deputatlari Kengashida jami 30 nafar deputat mavjud. Navbatdagi sessiyaga ulardan 18 nafari yetib keldi. Mazkur sessiya qonuniy vakolatlimi va uning qabul qilgan qarorlari yuridik kuchga egami?",
    yechim: "Sessiya vakolatli emas va unda qabul qilingan har qanday qaror qonuniy kuchga ega bo'lmaydi. Sababi, MDH Qonunining 19-moddasiga ko'ra, Kengash sessiyasi deputatlar umumiy sonining kamida uchdan ikki qismi (2/3) qatnashgandagina vakolatli hisoblanadi. 30 deputatning 2/3 qismi kamida 20 nafarni tashkil etadi. 18 deputat bilan ochilgan sessiya kvorumga ega emas.",
    huquqiyAsos: "MDH Qonuni 19-modda"
  },
  {
    id: 3,
    keys: "3-keys: Aholi soni ko'p mahallada fuqarolar yig'ini o'tkazish",
    savol: "Mahallada ovoz berish huquqiga ega 900 nafar fuqaro istiqomat qiladi. Umumiy yig'inga 430 nafar fuqaro qatnashdi. Yig'in vakolatlimi? Agar aholini to'liq to'plash imkoni bo'lmasa qonuniy chiqish yo'li qanday?",
    yechim: "430 kishi bilan o'tkazilgan fuqarolar yig'ini vakolatli emas, chunki FOB Qonunining 21-moddasi bo'yicha huquqli aholining yarmidan ko'pi (900 ning yarmidan ko'pi = kamida 451 nafar) hozir bo'lishi shart. Chiqish yo'li: Kengash qarori bilan hovli, uy va ko'chalardan vakillar yuborilib, 'Vakillar yig'ilishi' chaqiriladi. Vakillar yig'ilishida esa saylangan vakillarning kamida 2/3 qismi qatnashsa kifoya.",
    huquqiyAsos: "FOB Qonuni 21-modda"
  },
  {
    id: 4,
    keys: "4-keys: Mahalla kengashi majlisida kvorum hisoblash",
    savol: "Mahalla fuqarolar yig'ini Kengashi 10 nafar a'zodan iborat. Oylik majlisga 6 nafar a'zo keldi va ulardan 5 nafari qarorni yoqlab ovoz berdi. Bu qaror amalda kuchga kiradimi?",
    yechim: "Yo'q, qaror kuchga kirmaydi. Chunki FOB Qonunining 22-moddasiga ko'ra Mahalla kengashi majlisi a'zolarining kamida 2/3 qismi hozir bo'lsa vakolatlidir. 10 a'zoning 2/3 qismi 6.67 ni, ya'ni yaxlitlaganda kamida 7 nafar a'zoni talab qiladi. 6 nafar a'zo bilan o'tkazilgan majlis kvorumga ega emasligi sababli unda qabul qilingan qaror bekor sanaladi.",
    huquqiyAsos: "FOB Qonuni 22-modda"
  },
  {
    id: 5,
    keys: "5-keys: Noqonuniy qaror asosida berilgan yer uchastkasi",
    savol: "Tuman hokimi vakolatidan chetga chiqib, qishloq xo'jaligi yerini fuqaroga tadbirkorlik uchun ajratish to'g'risida qaror chiqargan. Keyinchalik fuqaro ushbu yerda ob'ekt qurib, yerga bo'lgan mulk huquqini davlat ro'yxatidan o'tkazgan. Viloyat hokimi ushbu tuman hokimining qarorini bekor qila oladimi?",
    yechim: "Yo'q, viloyat hokimi bu qarorni to'g'ridan-to'g'ri bekor qila olmaydi. Qonunchilikka binoan, xususiy mulk huquqi va yer uchastkasiga bo'lgan huquq yuzaga kelishiga asos bo'lgan hokim hujjatlari yuqori turuvchi organlar tomonidan bekor qilinmaydi! Bunday holatda nizo faqat va faqat sud tartibida ko'rib chiqilishi mumkin.",
    huquqiyAsos: "MDH Qonuni 21-1 va 26-moddalar"
  },
  {
    id: 6,
    keys: "6-keys: Mahalla raisining uzoq muddatli kasalligi",
    savol: "Mahalla fuqarolar yig'ini raisi betobligi sababli 3 oydan ortiq muddat davomida o'z xizmat vazifalarini bajara olmadi. Qonunga ko'ra qanday huquqiy oqibat yuzaga keladi?",
    yechim: "FOB Qonunining 24-moddasiga binoan, fuqarolar yig'ini raisi sog'lig'i holatiga yoki boshqa uzrli sabablarga ko'ra 3 oy davomida o'z vazifalarini bajara olmasa, uning vakolatlari Fuqarolar yig'ini (vakillar yig'ilishi) tomonidan muddatidan oldin tugatiladi va yangi saylov o'tkaziladi.",
    huquqiyAsos: "FOB Qonuni 24-modda"
  }
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    atama: "Partiya guruhi",
    manosi: "Kengashdagi bir siyosiy partiyadan saylangan deputatlar tomonidan siyosiy qarashlarni ilgari surish uchun tuziladigan deputatlik birlashmasi.",
    amaliyMisol: "Viloyat Kengashida 'O'zLiDeP' yoki 'Milliy Tiklanish' deputatlari alohida partiya guruhi sifatida ro'yxatga olinadi."
  },
  {
    atama: "Siyosiy partiyalar vakillari guruhi",
    manosi: "Kengash raisini saylash uchun birinchi sessiyada maxsus tuziladigan vaqtinchalik guruh. Saylovda ishtirok etgan har bir partiyadan deputatlar kiradi.",
    amaliyMisol: "Birinchi sessiyada tuziladi va deputatlar orasidan Kengash raisi nomzodlarini ilgari surish tavsiyasini ishlab chiqadi."
  },
  {
    atama: "Taqdimnoma",
    manosi: "Hokim, Kengash raisi yoki prokuror tomonidan rasmiy tartibda huquqbuzarlikni bartaraf etish yoki nomzod tasdiqlash uchun kiritiladigan rasmiy hujjat.",
    amaliyMisol: "Hokim Kengash qarorini qonunga zid deb topsa, uni qayta ko'rish haqida Kengashga taqdimnoma kiritadi (Kengash 1 oyda ko'rib chiqadi)."
  },
  {
    atama: "Protest",
    manosi: "Prokuror tomonidan qonunga zid bo'lgan hokim yoki mahalla hujjatini bekor qilish yoki o'zgartirish talabi bilan keltiriladigan qat'iy e'tiroz hujjati.",
    amaliyMisol: "Tuman prokurori hokimning tartibga zid farmoyishiga protest bildiradi, hokim uni qayta ko'rib chiqishi shart."
  },
  {
    atama: "Kvorum",
    manosi: "Kengash sessiyasi yoki fuqarolar yig'ilishini qonuniy vakolatli deb topish va qaror qabul qilish uchun talab etiladigan a'zolarning minimal soni.",
    amaliyMisol: "Kengash sessiyasida kamida 2/3 deputat, Mahalla fuqarolar yig'inida esa huquqli aholining yarmidan ko'pi hozir bo'lishi shart."
  },
  {
    atama: "Yagona elektron tizim",
    manosi: "Mahalliy ijroiya va vakillik organlarining barcha qaror va farmoyishlarini ishlab chiqish, kelishish va ro'yxatga olishga mo'ljallangan markazlashgan davlat tizimi ('E-Qaror').",
    amaliyMisol: "Hokim qarori faqat ushbu tizimda ro'yxatdan o'tgandan keyingina huquqiy kuchga ega bo'ladi."
  },
  {
    atama: "Kommunal mulk",
    manosi: "Tegishli ma'muriy-hududiy tuzilma (viloyat, shahar, tuman) aholisining manfaatlari uchun xizmat qiladigan davlat mulki ob'ektlari.",
    amaliyMisol: "Mahalliy suv tozalash inshootlari, tuman ko'chalari va maktabgacha ta'lim muassasalari kommunal mulk sanaladi."
  }
];

export const MNEMONICS: MnemonicFormula[] = [
  {
    kod: "5 - 5 - 5",
    formula: "Hokim · Kengash deputati · Mahalla raisi = 5 YIL",
    izoh: "Mahalliy darajadagi barcha boshqaruv sub'ektlarining konstitutsiyaviy vakolat muddati aynan 5 yil qilib belgilangan."
  },
  {
    kod: "2 MUDDAT",
    formula: "Ketma-ket 2 muddatdan ortiq emas",
    izoh: "Ayni bir shaxs ketma-ket ikki muddatdan ortiq bir hududning hokimi yoki Kengash raisi bo'la olmaydi."
  },
  {
    kod: "3 - 3 - 3",
    formula: "Nomzod 3 marta · Yangi saylov 3 oy · Birinchi sessiya 3 hafta",
    izoh: "Hokim nomzodi Kengashga ko'pi bilan 3 marta taqdim etiladi; Kengash tarqatilgach yangi saylov 3 oy ichida o'tkaziladi; saylovdan so'ng birinchi sessiya 3 haftada chaqiriladi."
  },
  {
    kod: "2 / 3 KVORUM",
    formula: "Kengash kvorumi · Kengash majlisi kvorumi · Vakillar yig'ilishi kvorumi",
    izoh: "Kengash sessiyasida (kamida 2/3), Mahalla kengashi majlisida (kamida 2/3) va Mahalla vakillar yig'ilishida (kamida 2/3) ishtirok talab etiladi."
  },
  {
    kod: "YARIM (50% + 1)",
    formula: "Mahalla yig'ini kvorumi & Kengashda oddiy qaror",
    izoh: "Fuqarolar umumiy yig'inida huquqli aholining yarmidan ko'pi kelsa vakolatli. Kengashda esa odatiy masalalar umumiy sonning oddiy ko'pchiligi bilan o'tadi."
  },
  {
    kod: "1 / 3 TASHABBUS",
    formula: "Mahalla yig'ini chaqirish · Raisni ozod qilish taklifi",
    izoh: "Fuqarolar yig'inini aholining kamida 1/3 qismi tashabbusi bilan chaqirish mumkin; Kengash raisini muddatidan oldin bo'shatish masalasini kamida 1/3 deputat qo'zg'ata oladi."
  },
  {
    kod: "10 KUN",
    formula: "Kengash so'roviga yozma javob · VM majlisidan keyingi hisobot",
    izoh: "Kengash so'roviga mansabdor 10 kunda yozma javob berishi lozim; viloyat hokimi VM majlisidan keyin 10 kundan kechiktirmay hisobot beradi."
  },
  {
    kod: "BEKOR QILISH",
    formula: "Kengash ➔ Senat | Hokim ➔ Prezident / VM | Mahalla ➔ O'zi / Sud",
    izoh: "Kengash qarorini yuqori palata — Senat; Hokim qarorini Prezident va Hukumat; Mahalla qarorini yig'inning o'zi yoki sud bekor qiladi."
  }
];

export const EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    savol: "Viloyat hokimini kim lavozimga tayinlaydi va kim tasdiqlaydi?",
    variantlar: [
      "Vazirlar Mahkamasi tayinlaydi, Oliy Majlis tasdiqlaydi",
      "Prezident tayinlaydi, viloyat xalq deputatlari Kengashi tasdiqlaydi",
      "Viloyat Kengashi saylaydi, Prezident tasdiqlaydi",
      "Bosh vazir tayinlaydi, Prezident tasdiqlaydi"
    ],
    togriJavobIndex: 1,
    izoh: "MDH Qonunining 2-moddasiga ko'ra, viloyat va Toshkent shahar hokimi Prezident tomonidan tayinlanadi va tegishli Kengash tomonidan tasdiqlanadi.",
    modda: "MDH Qonuni 2-modda"
  },
  {
    id: 2,
    savol: "Xalq deputatlari Kengashi raisini muddatidan oldin lavozimidan ozod etish uchun qancha ovoz talab qilinadi?",
    variantlar: [
      "Majlisda hozir bo'lganlarning oddiy ko'pchiligi",
      "Deputatlar umumiy sonining oddiy ko'pchiligi (50% + 1)",
      "Deputatlar umumiy sonining 2/3 qismidan ko'prog'i",
      "Siyosiy partiya yetakchilarining bir ovozdan roziligi"
    ],
    togriJavobIndex: 2,
    izoh: "MDH Qonunining 16-1-moddasiga muvofiq, raisni ozod qilish uchun deputatlar umumiy sonining kamida uchdan ikki qismidan ko'prog'i ovoz berishi shart.",
    modda: "MDH Qonuni 16-1-modda"
  },
  {
    id: 3,
    savol: "Fuqarolar yig'ini (Mahalla) raisi qaysi davlat organiga hisobot beradi?",
    variantlar: [
      "Tuman hokimiga",
      "Viloyat Kengashiga",
      "Fuqarolar yig'inining o'ziga va aholiga",
      "Mahalla va nuroniylarni qo'llab-quvvatlash vazirligiga"
    ],
    togriJavobIndex: 2,
    izoh: "Mahalla davlat tizimiga kirmaydi, shuning uchun Mahalla raisi faqat o'zini saylagan fuqarolar yig'ini (aholi) oldida hisobdordir.",
    modda: "FOB Qonuni 8 va 14-moddalar"
  },
  {
    id: 4,
    savol: "Kengash so'rovi qaysi masalalar bo'yicha yuborilishi mumkin emas?",
    variantlar: [
      "Mahalliy budjet xarajatlari bo'yicha",
      "Tergov, sud ishlari va notarial harakatlar bo'yicha",
      "Ichki ishlar idoralarining profilaktika choralari bo'yicha",
      "Obodonlashtirish bo'limi faoliyati bo'yicha"
    ],
    togriJavobIndex: 1,
    izoh: "MDH Qonuni 25-6-moddasiga asosan tezkor-qidiruv, surishtiruv, tergov, sud ishlari va notarial ishlar so'rov ob'ekti bo'la olmaydi.",
    modda: "MDH Qonuni 25-6-modda"
  },
  {
    id: 5,
    savol: "Mahalla fuqarolar yig'ini raisining vakolatlari qaysi holatda muddatidan oldin tugatilishi mumkin?",
    variantlar: [
      "Hokimning yozma ko'rsatmasi berilganda",
      "Sog'lig'i yoki boshqa uzrli sabab bilan 3 oy davomida vazifasini bajara olmaganda",
      "Kengash sessiyasida unga ishonchsizlik bildirilganda",
      "Birorta xorijiy davlatga xizmat safariga ketganda"
    ],
    togriJavobIndex: 1,
    izoh: "FOB Qonunining 24-moddasida ko'rsatilgan 8 ta holatdan biri — rais uzrli sabab bilan ketma-ket 3 oy o'z vazifalarini bajara olmagan holatdir.",
    modda: "FOB Qonuni 24-modda"
  },
  {
    id: 6,
    savol: "Qaysi idora xalq deputatlari Kengashining qonunga zid qarorini bekor qilishga haqli?",
    variantlar: [
      "Vazirlar Mahkamasi",
      "Tegishli hudud hokimi",
      "Oliy Majlis Senati",
      "Hisob palatasi"
    ],
    togriJavobIndex: 2,
    izoh: "MDH Qonuni 26-moddasiga ko'ra Kengashning qarori qonunga zid bo'lsa Oliy Majlis Senati tomonidan bekor qilinadi.",
    modda: "MDH Qonuni 26-modda"
  },
  {
    id: 7,
    savol: "Hokim qabul qiladigan huquqiy hujjat turlari to'g'ri ko'rsatilgan qatorni toping:",
    variantlar: [
      "Faqat Farmoyish",
      "Faqat Qaror",
      "Qaror va Farmoyish",
      "Buyruq va Ko'rsatma"
    ],
    togriJavobIndex: 2,
    izoh: "Hokim o'z vakolatlari doirasida normativ va yakka tartibdagi 'qarorlar' qabul qiladi hamda tezkor masalalar bo'yicha 'farmoyishlar' chiqaradi.",
    modda: "MDH Qonuni 6-modda"
  },
  {
    id: 8,
    savol: "Kengashda 'Reglament va deputatlik odob-axloqi' komissiyasining asosiy vazifasi nima?",
    variantlar: [
      "Soliq tushumlarini undirish",
      "Kengash reglamentiga rioya etilishini va deputatlar etikasi nazoratini ta'minlash",
      "Mahalla raislarini lavozimga tayinlash",
      "Jinoyatchilik holatlarini mustaqil tergov qilish"
    ],
    togriJavobIndex: 1,
    izoh: "Kengashdagi 5 ta doimiy komissiyadan biri bo'lib, sessiya tartibi, qonun qoidalari va deputatlarning xulq-atvori me'yorlarini nazorat qiladi.",
    modda: "MDH Qonuni 19-1-modda"
  },
  {
    id: 9,
    savol: "Nima sababdan yer uchastkasi yoki xususiy mulk huquqini beruvchi qarorlar yuqori organ tomonidan bekor qilinmaydi?",
    variantlar: [
      "Chunki bu qarorlar maxfiy hisoblanadi",
      "Xususiy mulk daxlsizligi kafolatlanganligi sababli buni faqat sud ko'rib chiqishi mumkin",
      "Hokimlikning bunday qarorlari 1 kunda kuchini yo'qotadi",
      "Vazirlar Mahkamasiga tegishli shikoyat qilish taqiqlangan"
    ],
    togriJavobIndex: 1,
    izoh: "Qonunda qat'iy belgilangan: xususiy mulk va yer huquqi paydo bo'lishiga asos bo'lgan hujjatlar yuqori organ tomonidan ma'muriy yo'l bilan bekor qilinmaydi, faqat sud orqali hal etiladi.",
    modda: "MDH Qonuni 21-1 va 26-moddalar"
  },
  {
    id: 10,
    savol: "Xalq deputatlari Kengashi birinchi sessiyasini kim ochadi?",
    variantlar: [
      "Hudud hokimi",
      "Kengashdagi eng yoshi ulug' deputat",
      "Tegishli saylov komissiyasi raisi",
      "Oliy Majlis Senati vakili"
    ],
    togriJavobIndex: 2,
    izoh: "Yangi saylangan Kengashning birinchi sessiyasini saylov komissiyasi raisi ochadi va Kengash raisi saylangunga qadar unga raislik qiladi.",
    modda: "MDH Qonuni 17-modda"
  }
];

export const DISCUSSION_PROMPTS: DiscussionPrompt[] = [
  {
    id: 1,
    savol: "Nega hokim bir vaqtning o'zida Kengash raisi bo'la olmaydi? Kuchlar taqsimoti nuqtai nazaridan tahlil qiling.",
    tahlil: "Tarixiy islohotlarga qadar O'zbekistonda hokim bir paytning o'zida ham ijro boshlig'i, ham vakillik organi (Kengash) raisi bo'lib kelgan. Bu hokimning o'z faoliyatini o'zi nazorat qilishiga olib kelgan. Hozirgi Konstitutsiya va MDH Qonuni bu ikki lavozimni qat'iy ajratdi. Kengash mustaqil vakillik organi sifatida ijro hokimiyati (hokimlik) faoliyatini nazorat qiladi va tiyib turadi.",
    konstitutsiyaviyAsos: "Konstitutsiya 120-modda, MDH Qonuni 16-1-modda"
  },
  {
    id: 2,
    savol: "Nega Kengash raisini saylash uchun oddiy ko'pchilik, ozod qilish uchun esa 2/3 dan ko'p ovoz talab qilinadi?",
    tahlil: "Bu huquqiy muvozanat 'institutsional barqarorlik' (stabilite) prinsipiga tayanadi. Agar raisni oddiy ko'pchilik bilan bo'shatish mumkin bo'lganida, siyosiy fraksiyalarning har qanday kichik kelishmovchiligi Kengash boshqaruvini beqarorlashtirgan bo'lardi. 2/3 ovoz talabi raisga bosim o'tkazilishidan himoya qiladi va uni faqat o'ta jiddiy kamchiliklar bo'lgandagina ozod etish imkonini beradi.",
    konstitutsiyaviyAsos: "MDH Qonuni 16-1-modda"
  },
  {
    id: 3,
    savol: "Mahalla davlat hokimiyati tizimiga kirmaydi, lekin davlat uni qo'llab-quvvatlaydi va moliyalashtiradi. Bu huquqiy ziddiyatmi?",
    tahlil: "Yo'q, bu ziddiyat emas, balki fuqarolik jamiyati institutlarining ijtimoiy sheriklik modelidir. Davlat mahalliy aholining o'zini o'zi boshqarish huquqini ta'minlash uchun unga sharoit yaratadi va mahalliy budjetdan subvensiyalar ajratadi. Shu bilan birga, davlat mansabdorlarining mahallaning ichki mustaqil qarorlariga aralashishi qonunan qat'iy taqiqlangan.",
    konstitutsiyaviyAsos: "Konstitutsiya 127-modda, FOB Qonuni 4, 7 va 8-moddalar"
  },
  {
    id: 4,
    savol: "Nega xususiy mulk va yer huquqiga asos bo'lgan qarorlar yuqori organlar tomonidan bekor qilinishidan mustasno etilgan?",
    tahlil: "Chunki xususiy mulk daxlsizligi Konstitutsiyaviy kafolatdir. Agar hokimlik xato qilgan bo'lsa-da, uning qaroriga ishonib mulkka egalik qilgan vijdonli fuqaroning huquqi himoyalanadi. Davlat organi o'z xatosini fuqaro hisobiga bir tomonlama ma'muriy buyruq bilan to'g'irlay olmaydi — bu faqat sud orqali kompensatsiya masalalari bilan birga ko'riladi.",
    konstitutsiyaviyAsos: "Konstitutsiya 65-modda, MDH Qonuni 21-1 va 26-moddalar"
  }
];

export const REPORT_FREQUENCIES = [
  { organ: "Kengash sessiyasi chaqirilishi", chastota: "Har chorakda kamida 1 marta", organTuri: "Kengash", asos: "MDH 17" },
  { organ: "Fuqarolar yig'ini chaqirilishi", chastota: "Har chorakda kamida 1 marta", organTuri: "Mahalla", asos: "FOB 21" },
  { organ: "Yig'in kengashi oylik majlisi", chastota: "Oyida kamida 1 marta", organTuri: "Mahalla", asos: "FOB 22" },
  { organ: "Yig'in kengashining moliyaviy hisoboti", chastota: "Har chorakda", organTuri: "Mahalla", asos: "FOB 27" },
  { organ: "Hokimning yillik hisoboti (Kengashga)", chastota: "Har yili (VM majlisidan keyin 10 kunda)", organTuri: "Hokimlik", asos: "MDH 25-1" },
  { organ: "Ijro organlari rahbarlarining mahalladagi hisoboti", chastota: "Har chorakda", organTuri: "Ijro idoralari", asos: "FOB 11" },
  { organ: "IIB profilaktika hisoboti (Kengashga)", chastota: "Har chorakda", organTuri: "Huquq-tartibot", asos: "MDH 25-2" },
  { organ: "IIB jamoat xavfsizligi hisoboti (viloyatda)", chastota: "Har 6 oyda (tumanda har chorakda)", organTuri: "Huquq-tartibot", asos: "MDH 25-2" },
  { organ: "Prokurorlar axboroti (Kengashga)", chastota: "Har yili", organTuri: "Prokuratura", asos: "MDH 25-3" },
  { organ: "Adliya hisoboti (viloyat / tuman)", chastota: "Viloyatda har yili / tumanda har 6 oyda", organTuri: "Adliya", asos: "MDH 25-4" },
  { organ: "Sog'liqni saqlash / Yoshlar agentligi hisoboti", chastota: "Har yarim yilda (olti oyda)", organTuri: "Ijtimoiy", asos: "MDH 25-5" },
  { organ: "Xalq qabulxonalari axboroti", chastota: "Har chorakda", organTuri: "Prezident apparati", asos: "MDH 25" },
  { organ: "Ombudsman va Bolalar ombudsmani vakillari", chastota: "Har yili (Faqat viloyat Kengashida)", organTuri: "Inson huquqlari", asos: "MDH 24" }
];

export const DURATION_TABLE = [
  { nima: "Hokim vakolat muddati", qiymat: "5 yil", qonun: "MDH 2-modda", toifa: "Vakolat" },
  { nima: "Kengash deputatlari vakolat muddati", qiymat: "5 yil", qonun: "MDH 16-modda", toifa: "Vakolat" },
  { nima: "Fuqarolar yig'ini raisi vakolat muddati", qiymat: "5 yil", qonun: "FOB 23-modda", toifa: "Vakolat" },
  { nima: "Hokim va Kengash raisi ketma-ketlik cheklovi", qiymat: "Ketma-ket 2 muddatdan ortiq emas", qonun: "MDH 2, 16-1", toifa: "Cheklov" },
  { nima: "Qo'shimcha hokim nomzodi taqdim etish muddati", qiymat: "1 oy ichida yana 2 marta", qonun: "MDH 2-modda", toifa: "Jarayon" },
  { nima: "Kengash tarqatilgach yangi saylov o'tkazish", qiymat: "3 oy ichida", qonun: "MDH 2-modda", toifa: "Favqulodda" },
  { nima: "Saylovdan keyin birinchi sessiya chaqirilishi", qiymat: "Saylovdan 3 hafta ichida", qonun: "MDH 17-modda", toifa: "Jarayon" },
  { nima: "Kengash organlarining birinchi sessiyadan tuzilishi", qiymat: "1 oy ichida", qonun: "MDH 17-modda", toifa: "Tuzilma" },
  { nima: "Sessiya haqida deputatlarni xabardor qilish", qiymat: "Kamida 3 kun oldin", qonun: "MDH 17-modda", toifa: "Jarayon" },
  { nima: "Hokim hisoboti sessiyasi muddati", qiymat: "VM majlisidan keyin 10 kundan kechiktirmay", qonun: "MDH 25-1", toifa: "Nazorat" },
  { nima: "Kengash so'roviga yozma javob muddati", qiymat: "10 kun ichida", qonun: "MDH 25-6", toifa: "Nazorat" },
  { nima: "Hokim taqdimnomasini Kengash ko'rib chiqishi", qiymat: "1 oy ichida", qonun: "MDH 26-modda", toifa: "Nazorat" },
  { nima: "Mahalla raisining kasallik tufayli vakolati tugashi", qiymat: "3 oy davomida bajara olmasa", qonun: "FOB 24-modda", toifa: "Tugatish" }
];
