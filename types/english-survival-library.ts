export type SurvivalDifficulty = "Starter" | "Elementary" | "Intermediate" | "Upper Intermediate" | "Advanced";

export interface MiniDrill {
  type: "choose" | "fill-blank" | "match" | "listen" | "rewrite" | "speak";
  question: string;
  questionZh: string;
  options?: { text: string; textZh: string; isCorrect?: boolean }[];
  answer?: string;
  blank?: string;
  pairs?: { left: string; right: string }[];
  audioText?: string;
}

export interface SurvivalResource {
  id: string;
  title: string;
  titleZh: string;
  category: string;
  subcategory?: string;
  difficulty: SurvivalDifficulty;
  tags: string[];
  emoji: string;
  summary: string;
  summaryZh: string;
  explanation: string;
  explanationZh: string;
  examples: { en: string; zh: string; explanation?: string }[];
  commonMistakes?: { mistake: string; correction: string; correctionZh: string }[];
  chunks?: { chunk: string; meaning: string; chinese: string; example: string }[];
  comparisonTable?: { term: string; meaning: string; chinese: string; situation: string }[];
  pronunciation?: { phonetic: string; tip: string; tipZh: string; audioText?: string };
  audioText?: string;
  miniDrills: MiniDrill[];
  teacherNotes?: string;
  teacherNotesZh?: string;
  xpReward: number;
}

export interface SurvivalCategory {
  id: string;
  title: string;
  titleZh: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  color: string;
}
