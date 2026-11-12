import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkKengashQuorum,
  checkKengashVote,
  checkMahallaYiginQuorum,
  checkYiginKengashiMeeting,
  evaluateHokimNominationRejection
} from './calculator.ts';

test('Kengash Quorum: 30 deputatdan 20 tasi kelsa vakolatli, 18 tasi kelsa vakolatsiz (2-keys test)', () => {
  // 30 * 2/3 = 20
  const result18 = checkKengashQuorum(30, 18);
  assert.equal(result18.requiredQuorum, 20);
  assert.equal(result18.isQuorumMet, false);

  const result20 = checkKengashQuorum(30, 20);
  assert.equal(result20.isQuorumMet, true);
});

test('Kengash Ovoz berish: Oddiy ko\'pchilik vs 2/3 qismidan ko\'prog\'i (raisni ozod qilish)', () => {
  // 30 deputat: oddiy ko'pchilik = 16
  const voteOrdinary15 = checkKengashVote(30, 15, 'ordinary');
  assert.equal(voteOrdinary15.requiredVotes, 16);
  assert.equal(voteOrdinary15.isVotePassed, false);

  const voteOrdinary16 = checkKengashVote(30, 16, 'ordinary');
  assert.equal(voteOrdinary16.isVotePassed, true);

  // Raisni ozod qilish: 2/3 dan ko'prog'i (30 * 2/3 = 20 -> kamida 21 kerak!)
  const chairVote20 = checkKengashVote(30, 20, 'chair_dismissal');
  assert.equal(chairVote20.requiredVotes, 21);
  assert.equal(chairVote20.isVotePassed, false);

  const chairVote21 = checkKengashVote(30, 21, 'chair_dismissal');
  assert.equal(chairVote21.isVotePassed, true);
});

test('Mahalla Yig\'ini Kvorumi: 900 aholidan 430 kelsa vakolatsiz, 451 kelsa vakolatli (3-keys test)', () => {
  const result430 = checkMahallaYiginQuorum(900, 430, false);
  assert.equal(result430.requiredQuorum, 451);
  assert.equal(result430.isQuorumMet, false);

  const result451 = checkMahallaYiginQuorum(900, 451, false);
  assert.equal(result451.isQuorumMet, true);

  // Vakillar yig'ilishi (2/3): 900 vakildan 600 tasi
  const resultVakil = checkMahallaYiginQuorum(900, 600, true);
  assert.equal(resultVakil.requiredQuorum, 600);
  assert.equal(resultVakil.isQuorumMet, true);
});

test('Yig\'in Kengashi majlisi: 10 a\'zodan 6 tasi kelsa vakolatsiz (4-keys test: kamida 7 kishi kerak)', () => {
  const meeting6 = checkYiginKengashiMeeting(10, 6, 5);
  assert.equal(meeting6.quorum.requiredQuorum, 7);
  assert.equal(meeting6.quorum.isQuorumMet, false);
  assert.equal(meeting6.decision.isVotePassed, false);

  const meeting7 = checkYiginKengashiMeeting(10, 7, 4);
  assert.equal(meeting7.quorum.isQuorumMet, true);
  assert.equal(meeting7.decision.isVotePassed, true);
});

test('Hokim nomzodi rad etilishi: 1 yoki 2 marta rad etilganda Prezident Kengashni tarqata olmaydi (1-keys)', () => {
  const step0 = evaluateHokimNominationRejection(0);
  assert.equal(step0.canDissolveKengash, false);
  assert.equal(step0.remainingAttempts, 3);

  const step1 = evaluateHokimNominationRejection(1);
  assert.equal(step1.canDissolveKengash, false);
  assert.equal(step1.remainingAttempts, 2);

  const step3 = evaluateHokimNominationRejection(3);
  assert.equal(step3.canDissolveKengash, true);
  assert.equal(step3.remainingAttempts, 0);
});

test('Zero-value safety: barcha 5 ta modul 0 qiymatda xatosiz ishlaydi', () => {
  // 1. Kengash Quorum 0 da
  const kq0 = checkKengashQuorum(0, 0);
  assert.equal(kq0.isQuorumMet, false);
  assert.equal(kq0.requiredQuorum, 0);

  // 2. Kengash Vote 0 da
  const kv0 = checkKengashVote(0, 0, 'ordinary');
  assert.equal(kv0.isVotePassed, false);

  // 3. Mahalla Quorum 0 da
  const mq0 = checkMahallaYiginQuorum(0, 0, false);
  assert.equal(mq0.isQuorumMet, false);

  // 4. Yig'in Kengashi Majlisi 0 da
  const yk0 = checkYiginKengashiMeeting(0, 0, 0);
  assert.equal(yk0.quorum.isQuorumMet, false);
  assert.equal(yk0.decision.isVotePassed, false);

  // 5. Hokim rad etilishi 0 da
  const rej0 = evaluateHokimNominationRejection(0);
  assert.equal(rej0.canDissolveKengash, false);
  assert.equal(rej0.remainingAttempts, 3);
});
