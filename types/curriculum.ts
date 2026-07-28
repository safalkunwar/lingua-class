// ============= VOCABULARY =============
export interface VocabItem {
  english: string;
  word: string;
  partOfSpeech: string;
  breakdown: string;
  chinese: string;
  pinyin: string;
  emoji: string;
  imageKeyword: string;
  detailsEn: string;
  detailsZh: string;
  exampleEn: string;
  exampleZh: string;
  definitionEn: string;
  definitionZh: string;
  examples: { en: string; zh: string }[];
  collocations: string[];
  synonyms: string[];
  antonyms: string[];
  commonMistakes: { mistake: string; correction: string }[];
  level: string;
  category: string;
  comparative?: string;
  superlative?: string;
  pronunciationTips?: string;
  memoryTrick?: string;
}

// ============= WORD BOOK EXTENSION =============
export interface WordBookItem extends Omit<VocabItem, "level" | "category"> {
  id: string;
  topic: string;
  level: string;
  category: string;
  comparative?: string;
  superlative?: string;
  pronunciationTips?: string;
  memoryTrick?: string;
}

export interface WordBookTopic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  color: string;
  words: WordBookItem[];
}

// ============= PHRASES (daily-use) =============
export interface PhraseItem {
  phrase: string;
  chinese: string;
  pinyin: string;
  formality: "casual" | "neutral" | "formal";
  situation: string;
  definitionEn: string;
  definitionZh: string;
  examples: { en: string; zh: string }[];
}

// ============= DIALOGUES =============
export interface DialogueLine {
  speaker: string;
  english: string;
  chinese: string;
  pinyin: string;
  note?: string;
}

export interface Dialogue {
  id: string;
  title: string;
  description: string;
  emoji: string;
  scenario: string;
  lines: DialogueLine[];
}

// ============= TASKS / EXERCISES =============
export type TaskType =
  | "multiple-choice"
  | "fill-blank"
  | "translation"
  | "matching"
  | "speaking"
  | "ordering";

export interface Task {
  id: string;
  type: TaskType;
  prompt: string;
  promptZh?: string;
  // multiple-choice
  options?: string[];
  answer: string | string[];
  // matching
  pairs?: { left: string; right: string }[];
  // fill-blank: list of acceptable answers
  acceptable?: string[];
  // translation target language
  targetLang?: "en" | "zh";
  hint?: string;
  explanation?: string;
}

// ============= DIAGRAMS =============
export type DiagramType = "mindmap" | "flow" | "sentence" | "tree" | "comparison";
export interface Diagram {
  type: DiagramType;
  title: string;
  // Mermaid syntax diagram definition
  mermaid: string;
}

// ============= LEVEL =============
export interface Level {
  id: string;
  title: string;
  description: string;
  cefrLevel: string; // e.g. A1, A2, B1, B2, C1
  emoji: string;
  color: string; // tailwind gradient class e.g. "from-blue-400 to-cyan-400"
  category: string;
  wordCount?: number;
  items: VocabItem[];
  phrases: PhraseItem[];
  dialogues: Dialogue[];
  tasks: Task[];
  diagrams: Diagram[];
}

