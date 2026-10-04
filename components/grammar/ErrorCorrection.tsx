"use client";

import { useState } from "react";
import { ErrorCorrectionItem } from "@/types/grammar";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ErrorCorrectionProps {
  item: ErrorCorrectionItem;
  chineseMode: "none" | "hint" | "full";
  onSuccess?: () => void;
}

export function ErrorCorrection({ item, chineseMode, onSuccess }: ErrorCorrectionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isCorrect = selectedOption === item.correctWord;

  const handleSubmit = (option: string) => {
    setSelectedOption(option);
    setIsSubmitted(true);
    if (option === item.correctWord) {
      onSuccess?.();
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-xl border bg-card space-y-4">
      <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        <span>Find & Fix the Error</span>
        <span className="text-rose-500 font-bold">1 Mistake in this sentence</span>
      </div>

      {/* Target Sentence with highlighted faulty word */}
      <div className="p-4 rounded-xl bg-muted/30 border border-border/80 text-base sm:text-lg font-medium text-foreground">
        {item.sentence.split(" ").map((word, i) => {
          const isError = word.toLowerCase().includes(item.errorWord.toLowerCase());
          return (
            <span
              key={i}
              className={cn(
                "mr-1.5 inline-block",
                isError && "text-rose-600 dark:text-rose-400 font-bold underline decoration-wavy decoration-rose-500 underline-offset-4"
              )}
            >
              {word}
            </span>
          );
        })}
      </div>

      {/* Fix Options */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-muted-foreground">
          Select the correct replacement for &quot;<span className="text-foreground">{item.errorWord}</span>&quot;:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {item.options.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSubmit(opt)}
                className={cn(
                  "p-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center",
                  isSubmitted && opt === item.correctWord && "bg-emerald-500 text-white border-emerald-600 font-bold",
                  isSubmitted && isSelected && opt !== item.correctWord && "bg-rose-500 text-white border-rose-600 line-through",
                  !isSubmitted && "bg-card hover:border-indigo-400 hover:bg-muted text-foreground"
                )}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Feedback & Rationale */}
      {isSubmitted && (
        <div
          className={cn(
            "p-3.5 rounded-xl border text-xs sm:text-sm space-y-1 animate-in fade-in duration-150",
            isCorrect
              ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 text-emerald-900 dark:text-emerald-200"
              : "bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 text-rose-900 dark:text-rose-200"
          )}
        >
          <div className="flex items-center gap-1.5 font-bold">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Correct fix!
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-rose-600" /> Incorrect choice.
              </>
            )}
          </div>
          <p>{item.explanation}</p>
          {chineseMode !== "none" && item.explanationZh && (
            <p className="text-xs opacity-90 mt-0.5">{item.explanationZh}</p>
          )}
        </div>
      )}
    </div>
  );
}
