/**
 * Pure calculation logic for Local Government & Mahalla Legal Rules
 * (MDH Qonuni va FOB Qonuni bo'yicha kvorum, ovozlar va qonuniy mezonlar)
 */

export interface QuorumResult {
  requiredQuorum: number;
  isQuorumMet: boolean;
  quorumFormula: string;
  explanation: string;
}

export interface VoteResult {
  requiredVotes: number;
  isVotePassed: boolean;
  voteFormula: string;
  explanation: string;
}

/**
 * Kengash sessiyasi kvorumi (MDH Qonuni 19-modda):
 * Kamida 2/3 qism deputat qatnashsa vakolatli.
 */
export function checkKengashQuorum(totalDeputies: number, presentDeputies: number): QuorumResult {
  if (totalDeputies <= 0) {
    return {
      requiredQuorum: 0,
      isQuorumMet: false,
      quorumFormula: `Jami deputatlar soni: 0 nafar`,
      explanation: `Jami deputatlar soni 0 deb ko'rsatilgan. Kvorumni hisoblash uchun deputatlar soni kamida 1 nafar bo'lishi lozim.`
    };
  }
  const required = Math.ceil((totalDeputies * 2) / 3);
  const met = presentDeputies >= required;
  return {
    requiredQuorum: required,
    isQuorumMet: met,
    quorumFormula: `Jami ${totalDeputies} deputatning kamida 2/3 qismi = ${required} nafar`,
    explanation: met
      ? `Sessiya vakolatli: ${presentDeputies} nafar deputat qatnashmoqda (kamida ${required} nafar talab qilinadi).`
      : `Sessiya vakolatli EMAS: ${presentDeputies} nafar yetarli emas, kamida ${required} nafar deputat hozir bo'lishi shart.`
  };
}

/**
 * Kengashda ovoz berish:
 * - Odatiy masala: umumiy sonning oddiy ko'pchiligi (50% + 1)
 * - Maxsus masala (raisni muddatidan oldin ozod qilish va b.): umumiy sonning 2/3 qismidan ko'prog'i
 */
export function checkKengashVote(
  totalDeputies: number,
  yesVotes: number,
  type: 'ordinary' | 'special_two_thirds' | 'chair_dismissal'
): VoteResult {
  if (totalDeputies <= 0) {
    return {
      requiredVotes: 0,
      isVotePassed: false,
      voteFormula: `Jami deputatlar soni: 0 nafar`,
      explanation: `Deputatlar soni 0 kiritilgan. Qaror qabul qilish uchun deputatlar soni 0 dan katta bo'lishi lozim.`
    };
  }

  if (type === 'special_two_thirds' || type === 'chair_dismissal') {
    // 2/3 qismidan ko'prog'i (strictly greater than 2/3)
    const twoThirds = (totalDeputies * 2) / 3;
    const required = Math.floor(twoThirds) + 1;
    const passed = yesVotes >= required;
    return {
      requiredVotes: required,
      isVotePassed: passed,
      voteFormula: `Jami deputatlar sonining (${totalDeputies}) 2/3 qismidan ko'prog'i = kamida ${required} ovoz`,
      explanation: passed
        ? `Qaror qabul qilindi: ${yesVotes} ta ovoz olindi (kamida ${required} ta lozim).`
        : `Qaror qabul QILINMADI: ${yesVotes} ta ovoz kam, kamida ${required} ta ovoz kerak.`
    };
  }

  // Odatiy masalalar: umumiy sonning ko'pchiligi
  const required = Math.floor(totalDeputies / 2) + 1;
  const passed = yesVotes >= required;
  return {
    requiredVotes: required,
    isVotePassed: passed,
    voteFormula: `Jami deputatlar sonining (${totalDeputies}) oddiy ko'pchiligi = kamida ${required} ovoz`,
    explanation: passed
      ? `Qaror ma'qullandi: ${yesVotes} ta ovoz yoqladi (kamida ${required} ta lozim).`
      : `Qaror ma'qullanmadi: ${yesVotes} ta ovoz yetarli emas, kamida ${required} ta ovoz zarur.`
  };
}

/**
 * Mahalla Fuqarolar yig'ini kvorumi (FOB Qonuni 21-modda):
 * - Umumiy aholi yig'ilishi: huquqli aholining yarmidan ko'pi (50% + 1)
 * - Vakillar yig'ilishi: vakillarning kamida 2/3 qismi
 */
export function checkMahallaYiginQuorum(
  totalParticipants: number,
  presentCount: number,
  isVakillarYigilishi: boolean = false
): QuorumResult {
  if (totalParticipants <= 0) {
    return {
      requiredQuorum: 0,
      isQuorumMet: false,
      quorumFormula: `Jami ishtirokchilar soni: 0 nafar`,
      explanation: `Aholi yoki vakillar soni 0 deb ko'rsatilgan. Kvorum hisoblash uchun sonni kiriting.`
    };
  }

  if (isVakillarYigilishi) {
    const required = Math.ceil((totalParticipants * 2) / 3);
    const met = presentCount >= required;
    return {
      requiredQuorum: required,
      isQuorumMet: met,
      quorumFormula: `Vakillar yig'ilishida vakillarning (${totalParticipants}) kamida 2/3 qismi = ${required} nafar`,
      explanation: met
        ? `Vakillar yig'ilishi vakolatli: ${presentCount} nafar qatnashmoqda (kamida ${required} talab etiladi).`
        : `Vakillar yig'ilishi vakolatsiz: ${presentCount} yetarli emas, kamida ${required} vakil hozir bo'lishi shart.`
    };
  }

  const required = Math.floor(totalParticipants / 2) + 1;
  const met = presentCount >= required;
  return {
    requiredQuorum: required,
    isQuorumMet: met,
    quorumFormula: `Huquqli aholining (${totalParticipants}) yarmidan ko'pi = ${required} nafar`,
    explanation: met
      ? `Fuqarolar yig'ini vakolatli: ${presentCount} nafar aholi keldi (kamida ${required} lozim).`
      : `Fuqarolar yig'ini vakolatsiz: ${presentCount} nafar yetarli emas, kamida ${required} nafar kelishi kerak (Yig'ish imkoni bo'lmasa vakillar yig'ilishini o'tkazish mumkin).`
  };
}

/**
 * Yig'in Kengashi majlisi kvorumi (FOB Qonuni 22-modda):
 * A'zolarning kamida 2/3 qismi hozir bo'lsa vakolatli.
 * Qaror: Hozir bo'lganlarning yarmidan ko'pi yoqlasa.
 */
export function checkYiginKengashiMeeting(
  totalMembers: number,
  presentMembers: number,
  yesVotes: number
): { quorum: QuorumResult; decision: VoteResult } {
  if (totalMembers <= 0) {
    const quorum: QuorumResult = {
      requiredQuorum: 0,
      isQuorumMet: false,
      quorumFormula: `Kengash a'zolari: 0 nafar`,
      explanation: `Kengash a'zolari soni 0 deb kiritilgan.`
    };
    const decision: VoteResult = {
      requiredVotes: 0,
      isVotePassed: false,
      voteFormula: `Ovozlar soni: 0`,
      explanation: `Kengash a'zolari mavjud emas.`
    };
    return { quorum, decision };
  }

  const requiredQuorum = Math.ceil((totalMembers * 2) / 3);
  const isQuorumMet = presentMembers >= requiredQuorum;

  const quorum: QuorumResult = {
    requiredQuorum,
    isQuorumMet,
    quorumFormula: `Kengash a'zolarining (${totalMembers}) kamida 2/3 qismi = ${requiredQuorum} nafar`,
    explanation: isQuorumMet
      ? `Majlis vakolatli: ${presentMembers} nafar a'zo qatnashmoqda.`
      : `Majlis vakolatsiz: ${presentMembers} yetarli emas, kamida ${requiredQuorum} a'zo kerak.`
  };

  // Decision requires majority of PRESENT members
  const requiredVotes = Math.floor(presentMembers / 2) + 1;
  const isVotePassed = isQuorumMet && yesVotes >= requiredVotes;

  const decision: VoteResult = {
    requiredVotes,
    isVotePassed,
    voteFormula: `Hozir bo'lganlarning (${presentMembers}) yarmidan ko'pi = ${requiredVotes} ovoz`,
    explanation: !isQuorumMet
      ? `Majlis vakolatsiz bo'lgani sababli qaror qabul qilinishi mumkin emas.`
      : isVotePassed
      ? `Qaror qabul qilindi: ${yesVotes} nafar a'zo qo'llab-quvvatladi (kamida ${requiredVotes} lozim).`
      : `Qaror qabul qilinmadi: ${yesVotes} ovoz yetarli emas (kamida ${requiredVotes} ta ovoz kerak).`
  };

  return { quorum, decision };
}

/**
 * Hokim tayinlash bosqichlari natijasi:
 * 0-marta (boshlang'ich/tasdiqlangan), 1-taqdimot, rad etilsa 1 oy ichida yana 2 marta. Jami 3 marta rad etilsa Prezident hokim v.b. tayinlaydi va Kengashni tarqatish huquqiga ega.
 */
export function evaluateHokimNominationRejection(rejectionCount: number): {
  canDissolveKengash: boolean;
  remainingAttempts: number;
  statusText: string;
  nextStep: string;
} {
  if (rejectionCount <= 0) {
    return {
      canDissolveKengash: false,
      remainingAttempts: 3,
      statusText: '0 marta rad etildi (Boshlang\'ich yoki ma\'qullangan holat)',
      nextStep: 'Nomzod hali rad etilmagan yoki birinchi urinishdayoq Kengash tomonidan ma\'qullangan. Hokim qonuniy vakolatlarini bajarishga kirishadi.'
    };
  }
  if (rejectionCount >= 3) {
    return {
      canDissolveKengash: true,
      remainingAttempts: 0,
      statusText: '3 marta rad etildi — Inqirozli huquqiy vaziyat',
      nextStep: 'Prezident hokim vazifasini bajaruvchini tayinlaydi va Kengashni tarqatish huquqiga ega bo\'ladi. Yangi saylov 3 oy ichida o\'tkaziladi.'
    };
  }
  const remaining = 3 - rejectionCount;
  return {
    canDissolveKengash: false,
    remainingAttempts: remaining,
    statusText: `${rejectionCount} marta rad etildi (${remaining} ta imkoniyat mavjud)`,
    nextStep: `Prezident zudlik bilan Kengashni tarqata olmaydi. Bir oy ichida qo'shimcha maslahatlashuv o'tkazilib, nomzod yana ${remaining} marta taqdim etilishi mumkin.`
  };
}
