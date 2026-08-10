export type IntensityLevel = 1 | 2 | 3 | 4 | 5;

export type SafetyLabel = {
  label: string;
  icon: string;
  settings: string[];
};

export type RegionalVariation = {
  region: "American" | "British" | "Australian";
  usage: string;
  note: string;
};

export type Tone = "Angry" | "Funny" | "Sarcastic" | "Friendly" | "Neutral" | "Disgusted" | "Surprised" | "Playful" | "Frustrated" | "Excited" | "Disappointed" | "Serious";

export type Demographics = {
  ageGroup: string;
  tone: Tone;
  genderNeutral: boolean;
};

export type NonVerbalCue = {
  facialExpression: string;
  bodyLanguage: string;
  gesture?: string;
};

export type ComparativeAnalysis = {
  commonMistakes: string[];
  saferAlternatives: string[];
  similarWords: string[];
  culturalNotes: string;
};

export interface SlangTerm {
  id: string;
  english: string;
  chinese: string;
  pinyin: string;
  pronunciation: string;
  literalMeaning: string;
  actualMeaning: string;
  detailsEn: string;
  detailsZh: string;
  intensity: IntensityLevel;
  intensityNote?: string;
  safetyLabels: SafetyLabel[];
  regionalVariations: RegionalVariation[];
  demographics: Demographics;
  nonVerbalCues: NonVerbalCue;
  comparative: ComparativeAnalysis;
  exampleEn: string;
  exampleZh: string;
  category: string;
  usageContext?: string;
  formality?: "casual" | "neutral" | "formal" | "rude" | "vulgar";
  audioAvailable?: boolean;
}

export interface DialogueExample {
  id: string;
  context: string;
  lines: {
    speaker: string;
    english: string;
    chinese: string;
    pinyin: string;
  }[];
  comprehensionNote: string;
}

export interface PracticeDrill {
  id: string;
  type: "role-play" | "listening-translation" | "situational-judgment" | "emotional-intelligence" | "register-comparison";
  title: string;
  instructions: string;
  instructionsZh: string;
  content: string;
  contentZh: string;
  answer?: string;
  answerZh?: string;
  options?: { label: string; labelZh: string; correct: boolean }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionZh: string;
  options: { label: string; labelZh: string; correct: boolean }[];
  explanation: string;
  explanationZh: string;
}

export interface SlangLesson {
  id: string;
  title: string;
  description: string;
  emoji: string;
  category: string;
  terms: SlangTerm[];
  dialogues: DialogueExample[];
  practiceDrills: PracticeDrill[];
  quiz: QuizQuestion[];
}

export type SlangLevel = "safe" | "internet" | "street" | "rough" | "text-speak";

export interface SlangLevelData {
  level: SlangLevel;
  title: string;
  description: string;
  emoji: string;
  color: string;
  items: SlangItem[];
}

export interface SlangItem {
  id: string;
  word: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  detailsEn?: string;
  detailsZh?: string;
  example: string;
  exampleZh: string;
  whoSaysIt: string;
  ageGroup: string;
  region: string;
  isOffensive: boolean;
  offensiveLevel: number;
  intensityNote?: string;
  safeAlternatives: string[];
  conversation: {
    speaker: string;
    line: string;
  }[];
  chineseTranslation: {
    speaker: string;
    line: string;
  }[];
  culturalNotes: string;
  usageContext?: string;
  formality?: "casual" | "neutral" | "formal" | "rude" | "vulgar";
  warning?: string;
  audioAvailable?: boolean;
}

export interface SlangModule {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  safetyDisclaimer: string;
  safetyDisclaimerZh: string;
  lessons: SlangLesson[];
  levels?: SlangLevelData[];
}