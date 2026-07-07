"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LearningProgress, LevelProgress } from "@/types/progress";

interface LearningState extends LearningProgress {
  addXp: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  updateLevelProgress: (levelId: string, update: Partial<LevelProgress>) => void;
  unlockAchievement: (id: string) => void;
  setWeeklyGoal: (goal: number) => void;
  incrementWeeklyProgress: () => void;
  resetWeeklyProgress: () => void;
  setSpeakingScore: (score: number) => void;
  setListeningScore: (score: number) => void;
  setReadingScore: (score: number) => void;
  setGrammarScore: (score: number) => void;
}

const defaultProgress: LearningProgress = {
  totalXp: 0,
  streak: 0,
  lastStudyDate: null,
  weeklyGoal: 50,
  weeklyProgress: 0,
  vocabularyMastered: 0,
  lessonsCompleted: 0,
  levelProgress: {},
  achievements: {},
  speakingScore: 0,
  listeningScore: 0,
  readingScore: 0,
  grammarScore: 0,
};

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      ...defaultProgress,

      addXp: (amount) =>
        set((state) => ({ totalXp: state.totalXp + amount })),

      incrementStreak: () =>
        set((state) => {
          const today = new Date().toISOString().split("T")[0];
          const lastDate = state.lastStudyDate;
          if (lastDate === today) return state;
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split("T")[0];
          if (lastDate === yesterdayStr) {
            return { streak: state.streak + 1, lastStudyDate: today };
          }
          return { streak: 1, lastStudyDate: today };
        }),

      resetStreak: () => set({ streak: 0 }),

      updateLevelProgress: (levelId, update) =>
        set((state) => {
          const existing = state.levelProgress[levelId] ?? {
            levelId,
            cardsReviewed: 0,
            quizScore: null,
            quizAttempts: 0,
            bestQuizScore: 0,
            completed: false,
          };
          return {
            levelProgress: {
              ...state.levelProgress,
              [levelId]: { ...existing, levelId, ...update },
            },
          };
        }),

      unlockAchievement: (id) =>
        set((state) => ({
          achievements: { ...state.achievements, [id]: true },
        })),

      setWeeklyGoal: (goal) => set({ weeklyGoal: goal }),
      incrementWeeklyProgress: () =>
        set((state) => ({ weeklyProgress: state.weeklyProgress + 1 })),
      resetWeeklyProgress: () => set({ weeklyProgress: 0 }),

      setSpeakingScore: (score) => set({ speakingScore: score }),
      setListeningScore: (score) => set({ listeningScore: score }),
      setReadingScore: (score) => set({ readingScore: score }),
      setGrammarScore: (score) => set({ grammarScore: score }),
    }),
    {
      name: "lingua-class-progress",
    }
  )
);
