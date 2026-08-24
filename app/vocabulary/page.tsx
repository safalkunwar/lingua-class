"use client";

import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { LevelCard } from "@/components/vocabulary/level-card";
import { curriculum } from "@/data/curriculum";

export default function VocabularyPage() {
  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold">📚 Vocabulary Explorer</h1>
          <p className="mt-1 text-muted-foreground">
            Choose a level to start learning new words with flashcards and quizzes.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((level, i) => (
            <LevelCard key={level.id} level={level} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
