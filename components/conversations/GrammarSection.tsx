"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

interface GrammarPoint {
  title: string;
  explanation: string;
  explanationZh?: string;
  examples: string[];
  examplesZh?: string[];
  miniExercise?: {
    question: string;
    questionZh?: string;
    options?: string[];
    correct?: string;
  };
}

interface GrammarSectionProps {
  points: GrammarPoint[];
  title?: string;
}

export function GrammarSection({ points, title = "Grammar Focus" }: GrammarSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-8 sm:py-12 border-t">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
        <span>📐</span> {title}
      </h2>

      <div className="space-y-4">
        {points.map((point, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border bg-card overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                  <span className="font-semibold text-base sm:text-lg">{point.title}</span>
                </div>
                <Badge variant="outline" className="text-xs shrink-0">
                  Rule
                </Badge>
              </button>

              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 space-y-4">
                  {/* Explanation */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="p-3 rounded-lg bg-muted/30">
                      <p className="text-xs font-medium text-muted-foreground mb-1">English</p>
                      <p className="text-sm leading-relaxed">{point.explanation}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/30">
                      <p className="text-xs font-medium text-muted-foreground mb-1">中文解释</p>
                      <p className="text-sm leading-relaxed">{point.explanationZh}</p>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Examples from dialogue
                    </p>
                    <ul className="space-y-2">
                      {point.examples.map((ex, exIdx) => (
                        <li
                          key={exIdx}
                          className="text-sm p-2.5 rounded-lg bg-muted/20 border border-muted"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mini Exercise */}
                  {point.miniExercise && (
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-sm font-medium mb-2">Mini Exercise</p>
                      <p className="text-sm mb-3">{point.miniExercise.question}</p>
                      {point.miniExercise.options && (
                        <div className="flex flex-wrap gap-2">
                          {point.miniExercise.options.map((opt, optIdx) => {
                            const ex = point.miniExercise!;
                            return (
                              <Button
                                key={optIdx}
                                variant={ex.correct === opt ? "default" : "outline"}
                                size="sm"
                                className="text-xs"
                              >
                                {opt}
                              </Button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
