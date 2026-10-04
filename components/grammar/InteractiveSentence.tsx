"use client";

import { useState } from "react";
import { Volume2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GrammarExample, InteractiveSentencePart } from "@/types/grammar";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { cn } from "@/lib/utils";

interface InteractiveSentenceProps {
  example: GrammarExample;
  chineseMode: "none" | "hint" | "full";
}

const DEFAULT_PARTS: Record<string, InteractiveSentencePart[]> = {
  default: [
    {
      text: "She",
      role: "subject",
      explanation: "'She' is the subject (the person performing the action).",
      explanationZh: "She 是主语（执行动作的人）。",
      colorClass: "hover:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-400/40",
    },
    {
      text: "plays",
      role: "verb",
      explanation: "'plays' is the action verb (third-person singular with -s).",
      explanationZh: "plays 是行为动词（第三人称单数加 -s）。",
      colorClass: "hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-400/40 font-bold",
    },
    {
      text: "basketball",
      role: "object",
      explanation: "'basketball' is the direct object (what she plays).",
      explanationZh: "basketball 是直接宾语（动作的承受对象）。",
      colorClass: "hover:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-400/40",
    },
    {
      text: "every weekend.",
      role: "time",
      explanation: "'every weekend' is a time adverbial showing frequency.",
      explanationZh: "every weekend 是时间状语，表示频率。",
      colorClass: "hover:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-400/40",
    },
  ],
};

export function InteractiveSentence({ example, chineseMode }: InteractiveSentenceProps) {
  const { speakEnglish } = useSpeechSynthesis();
  const [selectedPartIndex, setSelectedPartIndex] = useState<number | null>(null);

  // If example doesn't supply explicit parts, auto-split or provide default breakdown
  const parts: InteractiveSentencePart[] = example.parts && example.parts.length > 0
    ? example.parts
    : example.en.includes("plays basketball")
    ? DEFAULT_PARTS.default
    : example.en.split(" ").map((word, i) => {
        const clean = word.toLowerCase().replace(/[^a-z]/g, "");
        const isTarget = example.highlight && clean.includes(example.highlight.toLowerCase().replace(/[^a-z]/g, ""));
        return {
          text: word,
          role: isTarget ? "verb" : i === 0 ? "subject" : "object",
          explanation: isTarget
            ? `'${word}' is the key target verb in this pattern.`
            : i === 0
            ? `'${word}' functions as the sentence subject.`
            : `'${word}' completes the sentence idea.`,
          explanationZh: isTarget
            ? `'${word}' 是此句型的核心动词。`
            : i === 0
            ? `'${word}' 作为句子的主语。`
            : `'${word}' 补充句意。`,
        };
      });

  const selectedPart = selectedPartIndex !== null ? parts[selectedPartIndex] : null;

  return (
    <div className="p-4 sm:p-5 rounded-xl border bg-card/90 shadow-2xs space-y-3 transition-all">
      {/* Top Sentence Display with Audio and Clickable Words */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 flex flex-wrap items-center gap-1.5 sm:gap-2 text-base sm:text-lg">
          {parts.map((part, idx) => {
            const isSelected = selectedPartIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedPartIndex(isSelected ? null : idx)}
                className={cn(
                  "px-2 py-0.5 rounded transition-all cursor-pointer font-medium border border-transparent text-left",
                  part.colorClass || "hover:bg-muted text-foreground",
                  isSelected && "ring-2 ring-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/60 font-bold border-indigo-400"
                )}
                title={`Click to analyze "${part.text}"`}
              >
                {part.text}
              </button>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => speakEnglish(example.audioText || example.en)}
          className="h-8 px-2.5 text-xs gap-1.5 shrink-0 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600"
        >
          <Volume2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span className="hidden sm:inline">Listen</span>
        </Button>
      </div>

      {/* Chinese Translation (Controlled by Chinese Mode) */}
      {chineseMode !== "none" && example.zh && (
        <p className="text-xs sm:text-sm text-muted-foreground font-medium pl-1">
          {chineseMode === "hint" ? `💡 提示：${example.zh.slice(0, 10)}...` : example.zh}
        </p>
      )}

      {/* Dynamic Breakdown Panel when word is clicked */}
      {selectedPart ? (
        <div className="p-3 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 text-xs sm:text-sm space-y-1 animate-in fade-in duration-150">
          <div className="flex items-center justify-between text-indigo-700 dark:text-indigo-300 font-semibold">
            <span className="uppercase tracking-wider text-[11px] font-mono">
              Role: {selectedPart.role.toUpperCase()}
            </span>
            <button
              onClick={() => setSelectedPartIndex(null)}
              className="text-[11px] text-muted-foreground hover:text-foreground"
            >
              Close analysis
            </button>
          </div>
          <p className="text-foreground">{selectedPart.explanation}</p>
          {chineseMode !== "none" && selectedPart.explanationZh && (
            <p className="text-muted-foreground text-xs">{selectedPart.explanationZh}</p>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground pl-1">
          <Info className="w-3 h-3 text-indigo-500" />
          <span>Click any word above (Subject, Verb, Object) to reveal its grammatical role.</span>
        </div>
      )}

      {/* Static Grammar Note if present */}
      {example.explanation && !selectedPart && (
        <div className="text-xs text-muted-foreground bg-muted/40 p-2.5 rounded border border-border/40">
          <strong className="text-foreground">Note: </strong>
          {example.explanation}
        </div>
      )}
    </div>
  );
}
