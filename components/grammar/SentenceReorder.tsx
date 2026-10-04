"use client";

import { useState } from "react";
import { ReorderSentence } from "@/types/grammar";
import { Button } from "@/components/ui/button";
import { CheckCircle2, RotateCcw, Volume2, Sparkles, AlertCircle } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { cn } from "@/lib/utils";

interface SentenceReorderProps {
  reorder: ReorderSentence;
  chineseMode: "none" | "hint" | "full";
  onSuccess?: () => void;
}

export function SentenceReorder({ reorder, chineseMode, onSuccess }: SentenceReorderProps) {
  const { speakEnglish } = useSpeechSynthesis();
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>([...reorder.segments]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (word: string, index: number) => {
    if (isSubmitted && isCorrect) return;
    setIsSubmitted(false);
    setIsCorrect(null);
    setSelectedTokens([...selectedTokens, word]);
    const updated = [...availableTokens];
    updated.splice(index, 1);
    setAvailableTokens(updated);
  };

  const handleRemove = (word: string, index: number) => {
    if (isSubmitted && isCorrect) return;
    setIsSubmitted(false);
    setIsCorrect(null);
    const updated = [...selectedTokens];
    updated.splice(index, 1);
    setSelectedTokens(updated);
    setAvailableTokens([...availableTokens, word]);
  };

  const handleReset = () => {
    setSelectedTokens([]);
    setAvailableTokens([...reorder.segments]);
    setIsSubmitted(false);
    setIsCorrect(null);
  };

  const handleCheck = () => {
    setIsSubmitted(true);
    const isOrderCorrect =
      selectedTokens.length === reorder.correctOrder.length &&
      selectedTokens.every((val, i) => val === reorder.correctOrder[i]);

    setIsCorrect(isOrderCorrect);
    if (isOrderCorrect) {
      speakEnglish(reorder.audioText || reorder.correctOrder.join(" "));
      onSuccess?.();
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-xl border bg-card space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Sentence Builder Drill (Reorder)
        </span>
        <Button variant="ghost" size="sm" onClick={handleReset} className="h-7 text-xs gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </Button>
      </div>

      {chineseMode !== "none" && reorder.translationZh && (
        <p className="text-xs sm:text-sm text-foreground/80 font-medium">
          Target meaning: <span className="text-foreground">{reorder.translationZh}</span>
        </p>
      )}

      {/* Drop Zone: Selected Tokens */}
      <div
        className={cn(
          "min-h-14 p-3 rounded-lg border-2 border-dashed flex flex-wrap items-center gap-2 transition-all",
          isCorrect === true
            ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/20"
            : isCorrect === false
            ? "border-rose-500 bg-rose-50/30 dark:bg-rose-950/20"
            : "border-border/80 bg-muted/20"
        )}
      >
        {selectedTokens.length === 0 ? (
          <span className="text-xs text-muted-foreground italic pl-1">
            Click the word tiles below in the correct grammatical order...
          </span>
        ) : (
          selectedTokens.map((word, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleRemove(word, idx)}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-medium text-xs sm:text-sm shadow-xs hover:bg-indigo-700 transition-colors"
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* Available Word Bank */}
      <div className="space-y-1.5 pt-1">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Word Bank:
        </span>
        <div className="flex flex-wrap gap-2">
          {availableTokens.map((word, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(word, idx)}
              className="px-3 py-1.5 rounded-lg bg-muted text-foreground border hover:border-indigo-400 font-medium text-xs sm:text-sm transition-all"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="pt-2 flex items-center justify-between gap-3">
        <div className="text-xs">
          {isCorrect === true && (
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" /> Excellent! Correct sentence structure.
            </span>
          )}
          {isCorrect === false && (
            <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold">
              <AlertCircle className="w-4 h-4" /> Not quite in natural order. Try again or check the Subject–Verb–Object rule.
            </span>
          )}
        </div>

        <Button
          onClick={handleCheck}
          disabled={selectedTokens.length === 0}
          size="sm"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs h-9 px-4 shrink-0"
        >
          Check Order
        </Button>
      </div>
    </div>
  );
}
