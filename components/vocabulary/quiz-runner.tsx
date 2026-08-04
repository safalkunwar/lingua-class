"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Trophy, RotateCw, Volume2 } from "lucide-react";
import { VocabItem } from "@/types/curriculum";
import { cn } from "@/lib/utils";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

interface QuizRunnerProps {
  items: VocabItem[];
  allItems: VocabItem[];
  onComplete: (score: number, total: number) => void;
  onRestart: () => void;
}

interface QuizQuestion {
  correct: VocabItem;
  options: VocabItem[];
  selected: string | null;
  answered: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuiz(items: VocabItem[], allItems: VocabItem[]): QuizQuestion[] {
  return items.map((item) => {
    const wrong = shuffle(allItems.filter((i) => i.english !== item.english)).slice(0, 3);
    const options = shuffle([item, ...wrong]);
    return {
      correct: item,
      options,
      selected: null,
      answered: false,
    };
  });
}

export function QuizRunner({ items, allItems, onComplete, onRestart }: QuizRunnerProps) {
  const [quiz, setQuiz] = useState<QuizQuestion[]>(() => buildQuiz(items, allItems));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const total = quiz.length;
  const current = quiz[currentIdx];

  const handleSelect = (option: VocabItem) => {
    if (current.answered) return;

    const isCorrect = option.english === current.correct.english;
    const newQuiz = [...quiz];
    newQuiz[currentIdx] = {
      ...current,
      selected: option.english,
      answered: true,
    };
    setQuiz(newQuiz);

    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      if (currentIdx < total - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        setFinished(true);
        onComplete(isCorrect ? score + 1 : score, total);
      }
    }, 1000);
  };

  const restart = () => {
    setQuiz(buildQuiz(items, allItems));
    setCurrentIdx(0);
    setScore(0);
    setFinished(false);
    onRestart();
  };

  if (finished) {
    const percent = Math.round((score / total) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center"
      >
        <Card className="w-full max-w-md border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 dark:border-indigo-500/30 dark:from-indigo-950/30 dark:to-purple-950/20">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/20"
            >
              <Trophy className="h-10 w-10 text-amber-500" />
            </motion.div>

            <h2 className="mb-2 text-3xl font-extrabold">Quiz Complete!</h2>
            <p className="mb-6 text-muted-foreground">Great job on completing this quiz!</p>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-card/60 p-4">
                <div className="text-3xl font-extrabold text-emerald-500">
                  {score}/{total}
                </div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="rounded-xl bg-card/60 p-4">
                <div className="text-3xl font-extrabold text-indigo-500">
                  {percent}%
                </div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
            </div>

            <Button onClick={restart} className="gap-2 bg-indigo-500 hover:bg-indigo-600">
              <RotateCw className="h-4 w-4" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex items-center gap-3">
        <Badge variant="secondary">
          Question {currentIdx + 1} of {total}
        </Badge>
        <Badge variant="outline" className="gap-1">
          Score: {score}
        </Badge>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="w-full max-w-lg"
        >
          <Card className="mb-6 overflow-hidden">
            <div className="relative h-40 w-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(current.correct.imageKeyword || current.correct.english)}?width=600&height=400&nologo=true`}
                alt={current.correct.english}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
            <CardContent className="p-8 text-center">
              <div className="mb-3 text-4xl">{current.correct.emoji}</div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                What is the English for
              </h2>
              <div className="mt-2 flex items-center justify-center gap-2">
                <p className="text-3xl font-extrabold text-pink-500">
                  {current.correct.chinese}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => speakChinese(current.correct.chinese)}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-1 flex items-center justify-center gap-2">
                <p className="text-base text-muted-foreground">
                  {current.correct.pinyin}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => speakEnglish(current.correct.english)}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-3 sm:grid-cols-2">
            {current.options.map((option) => {
              const isSelected = current.selected === option.english;
              const isCorrect = option.english === current.correct.english;
              const showResult = current.answered;

              return (
                <Button
                  key={option.english}
                  variant="outline"
                  size="lg"
                  disabled={current.answered}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "h-auto justify-start py-4 text-left transition-all",
                    showResult && isCorrect && "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
                    showResult && isSelected && !isCorrect && "border-red-500 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
                    !showResult && "hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10"
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="text-lg font-bold">{option.english}</span>
                    {showResult && isCorrect && <Check className="h-5 w-5 text-emerald-500" />}
                    {showResult && isSelected && !isCorrect && <X className="h-5 w-5 text-red-500" />}
                  </div>
                </Button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
