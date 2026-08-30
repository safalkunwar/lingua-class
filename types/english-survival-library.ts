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

export interface MeaningCard {
  title: string;
  titleZh: string;
  meaning: string;
  meaningZh: string;
  example: string;
  exampleZh: string;
  situation?: string;
  color?: "blue" | "green" | "yellow" | "purple" | "red" | "teal";
}

export interface ExampleCategory {
  label: string;
  labelZh: string;
  emoji: string;
  examples: { en: string; zh: string; explanation?: string }[];
}

export interface QuickSummaryItem {
  word: string;
  mainIdea: string;
  chinese: string;
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
  funnyMoments?: { title: string; titleZh: string; situation: string; dialogue: string; punchline: string; lesson: string }[];
  structures?: { name: string; nameZh: string; formula: string; example: string; tip: string }[];
  techniques?: { name: string; description: string; tip: string }[];
  miniDrills: MiniDrill[];
  teacherNotes?: string;
  teacherNotesZh?: string;
  xpReward: number;
  keyWords?: { word: string; meaning: string; meaningZh: string }[];
  quickSummary?: QuickSummaryItem[];
  meaningCards?: MeaningCard[];
  exampleCategories?: ExampleCategory[];
  compareSection?: { title: string; titleZh: string; items: { label: string; labelZh: string; en: string; zh: string }[] };
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
