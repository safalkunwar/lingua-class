"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { QuizRunner } from "@/components/vocabulary/quiz-runner";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { curriculum } from "@/data/curriculum";
import { useLearningStore } from "@/stores/learning-store";

export default function QuizPage() {
  const params = useParams<{ levelId: string }>();
  const level = curriculum.find((l) => l.id === params.levelId);

  const { updateLevelProgress, addXp, unlockAchievement } = useLearningStore();

  if (!level) notFound();

  // Gather all items for generating wrong answers
  const allItems = curriculum.flatMap((l) => l.items);
  const items = level!.items;

  const handleComplete = (score: number, total: number) => {
    const percent = Math.round((score / total) * 100);
    updateLevelProgress(level!.id, {
      quizScore: percent,
      quizAttempts: 1,
      bestQuizScore: Math.max(percent, 0),
      completed: true,
    });
    addXp(score * 5);
    if (percent === 100) unlockAchievement("quiz-perfect");
  };

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <Link href={`/vocabulary/${level!.id}`}>
          <Button variant="ghost" className="mb-4 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Flashcards
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl font-extrabold">🧠 Quiz: {level!.title}</h1>
          <p className="mt-1 text-muted-foreground">
            Choose the correct English word for each Chinese translation.
          </p>
        </motion.div>

        <QuizRunner
          items={items}
          allItems={allItems}
          onComplete={handleComplete}
          onRestart={() => {}}
        />
      </div>
    </div>
  );
}
