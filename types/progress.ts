export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: number | null;
}

export interface LevelProgress {
  levelId: string;
  cardsReviewed: number;
  quizScore: number | null;
  quizAttempts: number;
  bestQuizScore: number;
  completed: boolean;
}

export interface LearningProgress {
  totalXp: number;
  streak: number;
  lastStudyDate: string | null;
  weeklyGoal: number;
  weeklyProgress: number;
  vocabularyMastered: number;
  lessonsCompleted: number;
  levelProgress: Record<string, LevelProgress>;
  achievements: Record<string, boolean>;
  speakingScore: number;
  listeningScore: number;
  readingScore: number;
  grammarScore: number;
}
