export interface Choice {
  id: string;
  text: string;
  textZh: string;
  nextScene: string;
  xp: number;
  isCorrect?: boolean;
  feedback?: string;
  feedbackZh?: string;
}

export interface VocabularyItem {
  word: string;
  chinese: string;
  meaning: string;
  example: string;
  audioText?: string;
}

export interface Scene {
  id: string;
  type: "story" | "dialogue" | "challenge" | "chaos" | "boss" | "ending" | "translation-trap";
  narration: string;
  narrationZh: string;
  character?: string;
  characterEmoji?: string;
  dialogue?: string;
  dialogueZh?: string;
  choices: Choice[];
  vocabulary?: VocabularyItem[];
  speakingPrompt?: string;
  audioText?: string;
  chaosEvent?: string;
  chaosOptions?: string[];
  translationTrap?: {
    literal: string;
    natural: string;
    explanation: string;
  };
  stealPhrase?: {
    phrase: string;
    chinese: string;
    situation: string;
    formality: string;
  };
  timeLimit?: number;
  xpReward: number;
}

export interface EnglishBoostChapter {
  id: string;
  title: string;
  titleZh: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  difficulty: string;
  xpReward: number;
  theme: string;
  scenes: Scene[];
}
