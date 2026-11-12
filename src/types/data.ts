export type ActiveTab =
  | 'frontpage'
  | 'hokim_kengash'
  | 'mahalla'
  | 'comparison_debate'
  | 'numbers_calculator'
  | 'traps_cases'
  | 'mnemonics_glossary';

export interface GoldenRule {
  id: number;
  title: string;
  detail: string;
  legalAnchor: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  isCrisis?: boolean;
  isApproval?: boolean;
  legalBasis: string;
}

export interface Commission {
  id: number;
  name: string;
  description: string;
}

export interface SupervisionItem {
  shakl: string;
  modda: string;
  muddat: string;
  cheklov: string;
  natija: string;
}

export interface ComparisonMatrixRow {
  mezon: string;
  kengash: string;
  mahalla: string;
}

export interface DebateRow {
  mezon: string;
  hokim: string;
  kengashRaisi: string;
}

export interface TrapQuestion {
  id: number;
  savol: string;
  javob: string;
  izoh: string;
  modda: string;
  qonun: 'MDH' | 'FOB' | 'IKKISI';
}

export interface CaseStudy {
  id: number;
  keys: string;
  savol: string;
  yechim: string;
  huquqiyAsos: string;
}

export interface GlossaryTerm {
  atama: string;
  manosi: string;
  amaliyMisol: string;
}

export interface MnemonicFormula {
  kod: string;
  formula: string;
  izoh: string;
}

export interface ExamQuestion {
  id: number;
  savol: string;
  variantlar: string[];
  togriJavobIndex: number;
  izoh: string;
  modda: string;
}

export interface DiscussionPrompt {
  id: number;
  savol: string;
  tahlil: string;
  konstitutsiyaviyAsos: string;
}
