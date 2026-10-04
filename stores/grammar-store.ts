"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CompletedLessonData {
  lessonId: string;
  categoryId: string;
  subcategoryId: string;
  completedAt: string;
  score: number;
}

export interface StrugglingTopic {
  topic: string;
  reason: string;
  lessonId: string;
  categoryId: string;
  subcategoryId: string;
  lessonTitle: string;
}

export type RecommendationType = "Start Here" | "Continue Learning" | "Review Weak Areas";

export interface RecommendedItem {
  type: RecommendationType;
  title: string;
  titleZh: string;
  categoryId: string;
  subcategoryId: string;
  lessonId: string;
  reason: string;
  reasonZh: string;
  level: string;
}

interface GrammarStoreState {
  completedLessons: Record<string, CompletedLessonData>;
  lastLesson: {
    lessonId: string;
    categoryId: string;
    subcategoryId: string;
    lessonTitle: string;
    slideIndex: number;
  } | null;
  strugglingTopics: StrugglingTopic[];

  // Actions
  recordLessonCompletion: (data: CompletedLessonData) => void;
  recordLastLesson: (
    lessonId: string,
    categoryId: string,
    subcategoryId: string,
    lessonTitle: string,
    slideIndex: number
  ) => void;
  recordStrugglingTopic: (struggle: StrugglingTopic) => void;
  clearStrugglingTopic: (lessonId: string) => void;
  resetGrammarProgress: () => void;
}

export const useGrammarStore = create<GrammarStoreState>()(
  persist(
    (set) => ({
      completedLessons: {},
      lastLesson: null,
      strugglingTopics: [],

      recordLessonCompletion: (data) =>
        set((state) => ({
          completedLessons: {
            ...state.completedLessons,
            [data.lessonId]: data,
          },
          // If score is low (< 70%), add to struggling topics
          strugglingTopics:
            data.score < 70
              ? [
                  ...state.strugglingTopics.filter((t) => t.lessonId !== data.lessonId),
                  {
                    topic: data.lessonId,
                    reason: "Low quiz score in recent session. Practice key rules again.",
                    lessonId: data.lessonId,
                    categoryId: data.categoryId,
                    subcategoryId: data.subcategoryId,
                    lessonTitle: data.lessonId.replace(/-/g, " "),
                  },
                ]
              : state.strugglingTopics.filter((t) => t.lessonId !== data.lessonId),
        })),

      recordLastLesson: (lessonId, categoryId, subcategoryId, lessonTitle, slideIndex) =>
        set({
          lastLesson: {
            lessonId,
            categoryId,
            subcategoryId,
            lessonTitle,
            slideIndex,
          },
        }),

      recordStrugglingTopic: (struggle) =>
        set((state) => ({
          strugglingTopics: [
            ...state.strugglingTopics.filter((t) => t.lessonId !== struggle.lessonId),
            struggle,
          ],
        })),

      clearStrugglingTopic: (lessonId) =>
        set((state) => ({
          strugglingTopics: state.strugglingTopics.filter((t) => t.lessonId !== lessonId),
        })),

      resetGrammarProgress: () =>
        set({
          completedLessons: {},
          lastLesson: null,
          strugglingTopics: [],
        }),
    }),
    {
      name: "lingua-class-grammar-progress",
    }
  )
);
