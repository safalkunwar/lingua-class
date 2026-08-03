"use client";

import { useState } from "react";
import { GrammarPoint } from "@/types/conversations";

interface GrammarHintProps {
  grammar: GrammarPoint;
}

export function GrammarHint({ grammar }: GrammarHintProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
      >
        💡 {grammar.title}
      </button>
      {isOpen && (
        <div className="absolute z-50 bottom-full left-0 mb-2 w-96 p-4 bg-card border rounded-xl shadow-lg">
          <p className="text-sm font-medium mb-2">{grammar.explanation}</p>
          <div className="space-y-1.5">
            {grammar.examples.map((example, i) => (
              <p key={i} className="text-sm italic text-muted-foreground">
                "{example}"
              </p>
            ))}
          </div>
        </div>
      )}
    </span>
  );
}
