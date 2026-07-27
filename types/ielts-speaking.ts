export interface VocabEntry {
  english: string;
  ipa: string;
  chinese: string;
  meaning: string;
  exampleSentence: string;
  commonCollocations: string[];
}

export interface CollocationEntry {
  phrase: string;
  chinese: string;
  example: string;
  commonMistake?: string;
}

export interface BandAnswer {
  band: number;
  label: string;
  answer: string;
  explanation: string;
}

export interface GrammarPoint {
  title: string;
  titleChinese: string;
  visualType: string;
  content: string;
  examples: { english: string; chinese: string }[];
  commonMistakes: { mistake: string; correction: string; chineseExplanation: string }[];
  miniExercise?: { question: string; answer: string; explanation: string };
}

export interface VisualCard {
  english: string;
  icon: string;
  color: string;
  emoji: string;
  miniExplanation: string;
  exampleSentence: string;
  chinese: string;
  commonCollocations: string[];
}

export interface ConversationExpansion {
  question: string;
  oneWord: string;
  oneSentence: string;
  threeSentences: string;
  band7: string;
  band9: string;
}

export interface DrillExercise {
  type: string;
  title: string;
  description: string;
  prompt: string;
  chineseInstruction: string;
}

export interface CommonMistake {
  mistake: string;
  whyItHappens: string;
  correction: string;
  chineseExplanation: string;
}

export interface TopicSection {
  id: string;
  title: string;
  content: string;
  chineseTranslation?: string;
  visualType?: string;
}

export interface IELTSTopic {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  cefrLevel: string;
  estimatedTime: string;
  introduction: {
    whyIELTSAsks: string;
    whatExaminerWants: string;
    commonMistakes: string;
    bandComparison: {
      band5: string;
      band7: string;
      band9: string;
    };
    chineseExplanation: string;
  };
  frequentlyAskedQuestions: string[];
  speakingStructure: {
    flow: string[];
    whyItWorks: string;
    bandExamples: BandAnswer[];
  };
  sentenceStarters: string[];
  vocabulary: VocabEntry[];
  collocations: CollocationEntry[];
  universalPhrases: string[];
  grammarBox: GrammarPoint[];
  visualExplanations: TopicSection[];
  nativeSpeakerTips: {
    category: string;
    alternatives: { insteadOf: string; useInstead: string }[];
  }[];
  bandUpgrade: {
    question: string;
    bands: BandAnswer[];
  }[];
  pronunciation: {
    feature: string;
    explanation: string;
    examples: { word: string; ipa: string; tip: string }[];
    chineseTips: string;
  }[];
  conversationExpansions: ConversationExpansion[];
  dailyDrills: DrillExercise[];
  commonMistakes: CommonMistake[];
  visualCards: VisualCard[];
  memorySection: {
    quickFormulas: string[];
    mindMapNodes: { central: string; branches: string[] };
    flashcards: { front: string; back: string }[];
    mnemonics: { word: string; trick: string }[];
    cheatSheet: string[];
  };
  mockTests: {
    id: string;
    title: string;
    duration: number;
    questions: string[];
    transcript: string;
    evaluationCriteria: { criterion: string; weight: number; description: string }[];
    sampleAnswer: string;
  }[];
  bandScore?: {
    overall?: number;
    criteria: { criterion: string; score: number; feedback: string }[];
  };
}

export interface IELTSSpeakingModule {
  moduleTitle: string;
  moduleDescription: string;
  topics: IELTSTopic[];
}
