"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Volume2,
  AlertTriangle,
  Shield,
  MessageSquare,
  Target,
  HelpCircle,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { slangModule } from "@/data/slang-module";
import { useLearningStore } from "@/stores/learning-store";

type Tab = "terms" | "dialogues" | "practice" | "quiz";

export default function SlangModulePage() {
  const [lessonIndex, setLessonIndex] = useState(0);
  const [tab, setTab] = useState<Tab>("terms");
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const { updateLevelProgress, addXp, incrementStreak, incrementWeeklyProgress } =
    useLearningStore();

  const lesson = slangModule.lessons[lessonIndex];
  const terms = lesson.terms;
  const selectedTermData = terms.find((t) => t.id === selectedTerm);

  const goNext = () => {
    if (lessonIndex < slangModule.lessons.length - 1) {
      setLessonIndex(lessonIndex + 1);
      setTab("terms");
      setSelectedTerm(null);
      setShowQuizResults(false);
      setQuizAnswers({});
    }
  };

  const goPrev = () => {
    if (lessonIndex > 0) {
      setLessonIndex(lessonIndex - 1);
      setTab("terms");
      setSelectedTerm(null);
      setShowQuizResults(false);
      setQuizAnswers({});
    }
  };

  const recordProgress = () => {
    updateLevelProgress(slangModule.id, {
      cardsReviewed: lessonIndex + 1,
      completed: lessonIndex + 1 >= slangModule.lessons.length,
    });
    addXp(25);
    incrementStreak();
    incrementWeeklyProgress();
  };

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "terms", label: "Terms", icon: <BookOpen className="h-4 w-4" /> },
    { key: "dialogues", label: "Dialogues", icon: <MessageSquare className="h-4 w-4" /> },
    { key: "practice", label: "Practice", icon: <Target className="h-4 w-4" /> },
    { key: "quiz", label: "Quiz", icon: <HelpCircle className="h-4 w-4" /> },
  ];

  const intensityColor = (level: number) => {
    if (level <= 1) return "text-green-600 bg-green-50 border-green-200";
    if (level === 2) return "text-yellow-700 bg-yellow-50 border-yellow-200";
    if (level === 3) return "text-orange-700 bg-orange-50 border-orange-200";
    if (level === 4) return "text-red-700 bg-red-50 border-red-200";
    return "text-rose-700 bg-rose-50 border-rose-200";
  };

  const intensityLabel = (level: number) => {
    if (level <= 1) return "Very Mild";
    if (level === 2) return "Mild";
    if (level === 3) return "Moderate";
    if (level === 4) return "Strong";
    return "Extreme";
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <Link href="/student">
          <Button variant="ghost" className="mb-4 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-2xl border border-border bg-gradient-to-br from-rose-50 to-orange-50 p-6 dark:from-rose-950/20 dark:to-orange-950/20"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">{slangModule.emoji}</div>
            <div className="flex-1">
              <h1 className="text-2xl font-extrabold sm:text-3xl">{slangModule.title}</h1>
              <p className="mt-1 text-muted-foreground">{slangModule.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-200">
                  <Shield className="h-3 w-3" />
                  Safety First
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-medium text-rose-800 dark:border-rose-700 dark:bg-rose-950/30 dark:text-rose-200">
                  <AlertTriangle className="h-3 w-3" />
                  Context Matters
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950/30">
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Disclaimer:</strong> {slangModule.safetyDisclaimer}
            </p>
          </div>
        </motion.div>

        {/* Lesson Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" size="sm" onClick={goPrev} disabled={lessonIndex === 0}>
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous Lesson
          </Button>
          <div className="text-center">
            <p className="text-sm font-medium">
              Lesson {lessonIndex + 1} of {slangModule.lessons.length}
            </p>
            <p className="text-xs text-muted-foreground">
              {lesson.emoji} {lesson.title}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={goNext}
            disabled={lessonIndex === slangModule.lessons.length - 1}
          >
            Next Lesson
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>Lesson Progress</span>
            <span>{Math.round(((lessonIndex + 1) / slangModule.lessons.length) * 100)}%</span>
          </div>
          <Progress
            value={((lessonIndex + 1) / slangModule.lessons.length) * 100}
            className="h-2"
          />
        </div>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <Button
              key={t.key}
              variant={tab === t.key ? "default" : "outline"}
              size="sm"
              onClick={() => setTab(t.key)}
              className="gap-2"
            >
              {t.icon}
              {t.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${lessonIndex}-${tab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {tab === "terms" && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {terms.map((term) => (
                  <motion.div
                    key={term.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedTerm(selectedTerm === term.id ? null : term.id)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      selectedTerm === term.id
                        ? "border-indigo-300 bg-indigo-50 dark:border-indigo-700 dark:bg-indigo-950/30"
                        : "border-border bg-card hover:border-indigo-200"
                    }`}
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold">{term.english}</h3>
                        <p className="text-xs text-muted-foreground">{term.chinese}</p>
                      </div>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-xs font-medium ${intensityColor(
                          term.intensity
                        )}`}
                      >
                        {intensityLabel(term.intensity)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{term.actualMeaning}</p>
                    {selectedTerm === term.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 space-y-2 border-t border-border pt-3"
                      >
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">Details</p>
                          <p className="text-sm">{term.detailsEn}</p>
                          <p className="text-xs text-muted-foreground">{term.detailsZh}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">Example</p>
                          <p className="text-sm italic">"{term.exampleEn}"</p>
                          <p className="text-xs text-muted-foreground">{term.exampleZh}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">Safety</p>
                          <div className="flex flex-wrap gap-1">
                            {term.safetyLabels.map((label, idx) => (
                              <span
                                key={idx}
                                className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs"
                              >
                                {label.icon} {label.label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">Safer Alternatives</p>
                          <p className="text-sm">{term.comparative.saferAlternatives.join(", ")}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {tab === "dialogues" && (
              <div className="space-y-4">
                {lesson.dialogues.map((dialogue) => (
                  <motion.div
                    key={dialogue.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-indigo-500" />
                      <h3 className="font-semibold">{dialogue.context}</h3>
                    </div>
                    <div className="space-y-3">
                      {dialogue.lines.map((line, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                              {line.speaker[0]}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{line.speaker}</p>
                            <p className="text-sm">{line.english}</p>
                            <p className="text-xs text-muted-foreground">{line.chinese}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-lg border border-indigo-200 bg-indigo-50 p-3 dark:border-indigo-700 dark:bg-indigo-950/20">
                      <p className="text-xs font-medium text-indigo-900 dark:text-indigo-100">
                        💡 {dialogue.comprehensionNote}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {tab === "practice" && (
              <div className="space-y-4">
                {lesson.practiceDrills.map((drill) => (
                  <motion.div
                    key={drill.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-indigo-500" />
                      <h3 className="font-semibold">{drill.title}</h3>
                    </div>
                    <p className="mb-2 text-sm">{drill.instructions}</p>
                    <p className="text-xs text-muted-foreground">{drill.instructionsZh}</p>
                    <div className="mt-3 rounded-lg border border-border bg-muted/50 p-4">
                      <p className="text-sm font-medium">Task:</p>
                      <p className="text-sm text-muted-foreground">{drill.content}</p>
                      <p className="text-xs text-muted-foreground">{drill.contentZh}</p>
                    </div>
                    {drill.options && (
                      <div className="mt-3 space-y-2">
                        {drill.options.map((option, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-border bg-muted/30 p-3"
                          >
                            <p className="text-sm">{option.label}</p>
                            <p className="text-xs text-muted-foreground">{option.labelZh}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {drill.answer && (
                      <div className="mt-3 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-700 dark:bg-green-950/20">
                        <p className="text-xs font-medium text-green-900 dark:text-green-100">
                          ✅ Answer: {drill.answer}
                        </p>
                        {drill.answerZh && (
                          <p className="text-xs text-green-800 dark:text-green-200">
                            {drill.answerZh}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {tab === "quiz" && (
              <div className="space-y-6">
                {lesson.quiz.map((q, idx) => {
                  const isAnswered = quizAnswers[q.id] !== undefined;
                  const isCorrect = isAnswered && lesson.quiz[idx].options[quizAnswers[q.id]]?.correct;

                  return (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <div className="mb-4">
                        <p className="font-medium">
                          {idx + 1}. {q.question}
                        </p>
                        <p className="text-xs text-muted-foreground">{q.questionZh}</p>
                      </div>
                      <div className="space-y-2">
                        {q.options.map((option, optIdx) => {
                          const isSelected = quizAnswers[q.id] === optIdx;
                          const isOptionCorrect = option.correct;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                if (!isAnswered) {
                                  setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                                }
                              }}
                              disabled={isAnswered}
                              className={`w-full rounded-lg border p-3 text-left transition-all ${
                                isSelected && isOptionCorrect
                                  ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/20"
                                  : isSelected && !isOptionCorrect
                                  ? "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950/20"
                                  : isOptionCorrect && isAnswered
                                  ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/20"
                                  : "border-border bg-muted/30 hover:border-indigo-200"
                              }`}
                            >
                              <p className="text-sm">{option.label}</p>
                              <p className="text-xs text-muted-foreground">{option.labelZh}</p>
                            </button>
                          );
                        })}
                      </div>
                      {isAnswered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 rounded-lg border border-indigo-200 bg-indigo-50 p-3 dark:border-indigo-700 dark:bg-indigo-950/20"
                        >
                          <p className="text-sm text-indigo-900 dark:text-indigo-100">
                            <strong>Explanation:</strong> {q.explanation}
                          </p>
                          <p className="text-xs text-indigo-800 dark:text-indigo-200">
                            {q.explanationZh}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <Button variant="outline" onClick={goPrev} disabled={lessonIndex === 0}>
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Button>
          {lessonIndex === slangModule.lessons.length - 1 ? (
            <Link href="/student">
              <Button onClick={recordProgress}>Complete Module</Button>
            </Link>
          ) : (
            <Button onClick={goNext}>
              Next Lesson
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
