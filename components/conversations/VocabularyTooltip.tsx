"use client";

import { useState } from "react";
import { VocabWord } from "@/types/conversations";

interface VocabularyTooltipProps {
  word: VocabWord;
}

export function VocabularyTooltip({ word }: VocabularyTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="border-b border-dotted border-indigo-400 text-indigo-600 dark:text-indigo-400 cursor-pointer"
      >
        {word.word}
      </button>
      {isOpen && (
        <div className="absolute z-50 bottom-full left-0 mb-2 w-80 p-4 bg-card border rounded-xl shadow-lg">
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">{word.word}</p>
              <p className="text-xs text-muted-foreground">{word.phonetic}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {word.chinese}
              </p>
              <p className="text-xs text-muted-foreground">{word.pinyin}</p>
            </div>
            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground">{word.definitionEn}</p>
              <p className="text-xs text-muted-foreground mt-1">{word.definitionZh}</p>
            </div>
            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Example:</span> &ldquo;{word.exampleEn}&rdquo;
              </p>
              <p className="text-xs text-muted-foreground mt-1">{word.exampleZh}</p>
            </div>
            <div className="pt-2 border-t">
              <span className="text-[10px] px-1.5 py-0.5 rounded-full border bg-muted/50">
                {word.partOfSpeech}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full border bg-muted/50 ml-1">
                {word.register}
              </span>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
