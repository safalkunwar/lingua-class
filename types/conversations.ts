export interface ConversationTopic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  color: string;
  level: string;
  estimatedTime: string;
  vocabularyPreview: {
    word: string;
    phonetic: string;
    chinese: string;
    partOfSpeech: string;
  }[];
  conversation: {
    speaker: string;
    line: string;
  }[];
  chineseTranslation: {
    speaker: string;
    line: string;
  }[];
  usefulExpressions: {
    expression: string;
    meaning: string;
    usage: string;
  }[];
  grammarFocus: {
    title: string;
    explanation: string;
    examples: string[];
  }[];
  collocationsAndChunks: {
    chunk: string;
    meaning: string;
    example: string;
  }[];
  pronunciationTips: {
    tip: string;
    example: string;
  }[];
  commonMistakes: {
    mistake: string;
    correction: string;
    explanation: string;
  }[];
  rolePlayPractice: {
    scenario: string;
    prompts: string[];
  }[];
  vocabularyExpansion: {
    word: string;
    synonyms: string[];
    antonyms: string[];
    example: string;
  }[];
  shadowingPractice: string[];
  speakingChallenge: {
    instruction: string;
    hints: string[];
  };
}
