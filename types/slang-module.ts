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

export type Tone = "Angry" | "Funny" | "Sarcastic" | "Friendly" | "Neutral" | "Disgusted" | "Surprised" | "Playful";

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
  safetyLabels: SafetyLabel[];
  regionalVariations: RegionalVariation[];
  demographics: Demographics;
  nonVerbalCues: NonVerbalCue;
  comparative: ComparativeAnalysis;
  exampleEn: string;
  exampleZh: string;
  category: string;
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

export interface SlangModule {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  safetyDisclaimer: string;
  safetyDisclaimerZh: string;
  lessons: SlangLesson[];
}