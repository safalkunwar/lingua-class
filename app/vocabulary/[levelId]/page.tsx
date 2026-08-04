"use client";

import { useState } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Flashcard } from "@/components/vocabulary/flashcard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  FileQuestion,
  Volume2,
} from "lucide-react";
import { curriculum } from "@/data/curriculum";
import { useLearningStore } from "@/stores/learning-store";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

export default function FlashcardViewerPage() {
  const params = useParams<{ levelId: string }>();
  const router = useRouter();
  const level = curriculum.find((l) => l.id === params.levelId);

  const [cardIdx, setCardIdx] = useState(0);

  const { updateLevelProgress, addXp, incrementStreak, incrementWeeklyProgress, unlockAchievement } =
    useLearningStore();
  const { speakEnglish } = useSpeechSynthesis();

  if (!level) notFound();

  const total = level!.items.length;
  const item = level!.items[cardIdx];
  const percent = Math.round(((cardIdx + 1) / total) * 100);

  const goNext = () => {
    if (cardIdx < total - 1) {
      setCardIdx(cardIdx + 1);
      recordProgress();
    }
  };

  const goPrev = () => {
    if (cardIdx > 0) setCardIdx(cardIdx - 1);
  };

  const recordProgress = () => {
    updateLevelProgress(level!.id, {
      cardsReviewed: cardIdx + 2 > total ? total : cardIdx + 2,
      completed: cardIdx + 2 >= total,
    });
    addXp(10);
    incrementStreak();
    incrementWeeklyProgress();

    // Unlock achievements
    if (cardIdx === 0) unlockAchievement("first-lesson");
    if (cardIdx + 2 >= total) unlockAchievement("vocab-master");
  };

  const startQuiz = () => {
    recordProgress();
    router.push(`/vocabulary/${level!.id}/quiz`);
  };

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <Link href="/vocabulary">
          <Button variant="ghost" className="mb-4 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Levels
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold sm:text-3xl">{level!.title}</h1>
          <p className="mt-1 text-muted-foreground">{level!.description}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>Progress: {cardIdx + 1} / {total}</span>
            <span>{percent}%</span>
          </div>
          <Progress value={percent} className="h-2" />
        </div>

        {/* Flashcard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cardIdx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-8 flex justify-center"
          >
            <Flashcard item={item} cardNumber={cardIdx} total={total} />
          </motion.div>
        </AnimatePresence>

        {/* Detail panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 max-w-2xl rounded-2xl border border-border bg-card p-6"
        >
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Example Sentence
          </h3>
          <div className="mb-4 rounded-lg border-l-4 border-indigo-400 bg-indigo-50/50 p-4 dark:bg-indigo-950/20">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{item.exampleEn}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.exampleZh}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => speakEnglish(item.exampleEn)}
              >
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Definition
          </h3>
          <p className="text-sm text-muted-foreground">{item.detailsEn}</p>
          <p className="mt-1 text-sm text-muted-foreground">{item.detailsZh}</p>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={cardIdx === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-5 w-5" />
            Previous
          </Button>

          <div className="flex gap-1.5">
            {level!.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCardIdx(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === cardIdx
                    ? "w-8 bg-indigo-500"
                    : i < cardIdx
                    ? "w-2.5 bg-emerald-400"
                    : "w-2.5 bg-muted hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          {cardIdx === total - 1 ? (
            <Button onClick={startQuiz} className="gap-2 bg-emerald-500 hover:bg-emerald-600">
              <FileQuestion className="h-5 w-5" />
              Start Quiz
            </Button>
          ) : (
            <Button onClick={goNext} className="gap-2 bg-indigo-500 hover:bg-indigo-600">
              Next
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
