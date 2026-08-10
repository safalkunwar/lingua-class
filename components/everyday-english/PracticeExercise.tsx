"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PracticeExercise, ExerciseType } from "@/types/everyday-english";
import { CheckCircle2, XCircle, Lightbulb, Volume2 } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { cn } from "@/lib/utils";

interface PracticeExerciseProps {
  exercise: PracticeExercise;
  onComplete?: (correct: boolean) => void;
}

const TYPE_LABELS: Record<ExerciseType, string> = {
  "fill-blank": "Fill in the Blank",
  "error-correction": "Error Correction",
  translation: "Translation",
  "sentence-builder": "Sentence Builder",
  listening: "Listening Drill",
  speaking: "Speaking Drill",
};

const TYPE_COLORS: Record<ExerciseType, string> = {
  "fill-blank": "bg-blue-100 text-blue-800 border-blue-200",
  "error-correction": "bg-red-100 text-red-800 border-red-200",
  translation: "bg-purple-100 text-purple-800 border-purple-200",
  "sentence-builder": "bg-green-100 text-green-800 border-green-200",
  listening: "bg-orange-100 text-orange-800 border-orange-200",
  speaking: "bg-pink-100 text-pink-800 border-pink-200",
};

export function ExerciseCard({ exercise, onComplete }: PracticeExerciseProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    const correct = selectedAnswer === exercise.correctAnswer;
    setIsCorrect(correct);
    onComplete?.(correct);
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowHint(false);
  };

  const handlePlayQuestion = () => {
    speakEnglish(exercise.question);
  };

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <Badge variant="outline" className={cn("text-xs", TYPE_COLORS[exercise.type])}>
          {TYPE_LABELS[exercise.type]}
        </Badge>
      </div>

      <div className="flex items-start gap-2 mb-4">
        <Button
          size="icon"
          variant="ghost"
          onClick={handlePlayQuestion}
          className="h-8 w-8 shrink-0 mt-0.5"
        >
          <Volume2 className="w-4 h-4" />
        </Button>
        <div>
          <p className="text-base sm:text-lg font-medium">{exercise.question}</p>
          <p className="text-sm text-muted-foreground">{exercise.questionZh}</p>
        </div>
      </div>

      {exercise.options && (
        <div className="space-y-2 mb-4">
          {exercise.options.map((option, idx) => {
            let optionClass = "w-full text-left p-3 rounded-lg border hover:bg-muted/50 transition-all";
            if (selectedAnswer === idx) {
              optionClass += " border-primary bg-primary/5";
            }
            if (isCorrect !== null && idx === exercise.correctAnswer) {
              optionClass += " border-green-500 bg-green-50 dark:bg-green-950/20";
            }
            if (isCorrect === false && selectedAnswer === idx && idx !== exercise.correctAnswer) {
              optionClass += " border-red-500 bg-red-50 dark:bg-red-950/20";
            }

            return (
              <button
                key={idx}
                onClick={() => setSelectedAnswer(idx)}
                disabled={isCorrect !== null}
                className={optionClass}
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-medium">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm sm:text-base">{option}</span>
                  {isCorrect !== null && idx === exercise.correctAnswer && (
                    <CheckCircle2 className="w-4 h-4 text-green-600 ml-auto" />
                  )}
                  {isCorrect === false && selectedAnswer === idx && idx !== exercise.correctAnswer && (
                    <XCircle className="w-4 h-4 text-red-600 ml-auto" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      <div className="flex items-center gap-2">
        {isCorrect === null ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="gap-2"
          >
            Check Answer
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={handleRetry}
            className="gap-2"
          >
            Try Again
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowHint(!showHint)}
          className="gap-1.5"
        >
          <Lightbulb className="w-3.5 h-3.5" />
          Hint
        </Button>
      </div>

      {showHint && (
        <div className="mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-300">{exercise.hint}</p>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{exercise.hintZh}</p>
        </div>
      )}

      {isCorrect !== null && (
        <div className={cn(
          "mt-3 p-3 rounded-lg flex items-center gap-2",
          isCorrect ? "bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800"
        )}>
          {isCorrect ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <p className="text-sm font-medium text-green-800 dark:text-green-300">Correct! Well done!</p>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 text-red-600" />
              <p className="text-sm font-medium text-red-800 dark:text-red-300">Not quite. The correct answer is highlighted above.</p>
            </>
          )}
        </div>
      )}
    </Card>
  );
}
