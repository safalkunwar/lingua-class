"use client";

import { GrammarVisualDiagram } from "@/types/grammar";
import { ArrowDown, ArrowRight, CheckCircle2, Sparkles, Clock, Split } from "lucide-react";
import { cn } from "@/lib/utils";

interface VisualDiagramProps {
  diagram: GrammarVisualDiagram;
  chineseMode: "none" | "hint" | "full";
}

export function VisualDiagram({ diagram, chineseMode }: VisualDiagramProps) {
  if (diagram.type === "svo") {
    return (
      <div className="p-5 sm:p-6 rounded-xl border bg-muted/20 space-y-4">
        {diagram.title && (
          <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <span>{diagram.title}</span>
            {chineseMode !== "none" && diagram.titleZh && <span>{diagram.titleZh}</span>}
          </div>
        )}

        {/* SVO Vertical / Horizontal Stack */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-2 sm:gap-3 py-2">
          {diagram.items?.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-2 sm:gap-3">
              <div
                className={cn(
                  "p-4 rounded-xl border text-center shadow-2xs w-full md:w-36 transition-all",
                  item.color || "bg-card border-border"
                )}
              >
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-muted-foreground block mb-1">
                  {item.label}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-foreground block">
                  {item.sublabel}
                </span>
                {chineseMode !== "none" && item.labelZh && (
                  <span className="text-xs text-muted-foreground block mt-0.5">
                    {item.labelZh}
                  </span>
                )}
              </div>

              {idx < (diagram.items?.length || 0) - 1 && (
                <div className="text-indigo-500 py-1 md:py-0">
                  <ArrowDown className="w-5 h-5 md:hidden mx-auto" />
                  <ArrowRight className="w-5 h-5 hidden md:block" />
                </div>
              )}
            </div>
          ))}
        </div>

        {diagram.formula && (
          <div className="text-center pt-2 border-t border-border/50 text-xs font-mono text-muted-foreground">
            <span className="text-foreground font-semibold">Formula: </span>
            {diagram.formula}
          </div>
        )}
      </div>
    );
  }

  if (diagram.type === "timeline") {
    const timeline = diagram.timeline || {
      past: "Yesterday (Finished)",
      now: "Present Moment",
      future: "Tomorrow (Upcoming)",
      highlight: "now",
    };

    return (
      <div className="p-5 sm:p-6 rounded-xl border bg-card space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <Clock className="w-4 h-4 text-indigo-500" />
          <span>Timeline Positioning</span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 py-3 text-center relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-border -translate-y-1/2 z-0 hidden sm:block" />

          {/* Past */}
          <div
            className={cn(
              "p-3 sm:p-4 rounded-xl border relative z-10 bg-card transition-all",
              timeline.highlight === "past"
                ? "ring-2 ring-indigo-500 border-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40"
                : "border-border/60"
            )}
          >
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground block mb-1">
              PAST (过去)
            </span>
            <p className="text-xs sm:text-sm font-medium text-foreground">{timeline.past}</p>
          </div>

          {/* Now */}
          <div
            className={cn(
              "p-3 sm:p-4 rounded-xl border relative z-10 bg-card transition-all",
              timeline.highlight === "now"
                ? "ring-2 ring-indigo-500 border-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40"
                : "border-border/60"
            )}
          >
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
              NOW (现在)
            </span>
            <p className="text-xs sm:text-sm font-medium text-foreground">{timeline.now}</p>
          </div>

          {/* Future */}
          <div
            className={cn(
              "p-3 sm:p-4 rounded-xl border relative z-10 bg-card transition-all",
              timeline.highlight === "future"
                ? "ring-2 ring-indigo-500 border-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/40"
                : "border-border/60"
            )}
          >
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground block mb-1">
              FUTURE (未来)
            </span>
            <p className="text-xs sm:text-sm font-medium text-foreground">{timeline.future}</p>
          </div>
        </div>
      </div>
    );
  }

  if (diagram.type === "concept_branch") {
    return (
      <div className="p-5 sm:p-6 rounded-xl border bg-card space-y-4">
        <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Split className="w-4 h-4 text-indigo-500" />
            {diagram.title || "Core Conceptual Distinction"}
          </span>
          {chineseMode !== "none" && diagram.titleZh && <span>{diagram.titleZh}</span>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {diagram.branches?.map((branch, idx) => (
            <div
              key={idx}
              className={cn(
                "p-4 rounded-xl border space-y-2",
                idx === 0
                  ? "bg-blue-50/40 dark:bg-blue-950/20 border-blue-200/60 dark:border-blue-900/40"
                  : "bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/40"
              )}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm sm:text-base text-foreground uppercase tracking-wide">
                  {branch.title}
                </h4>
                {chineseMode !== "none" && branch.titleZh && (
                  <span className="text-xs text-muted-foreground">{branch.titleZh}</span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-foreground/90 font-medium">
                &ldquo;{branch.meaning}&rdquo;
              </p>

              {chineseMode !== "none" && branch.meaningZh && (
                <p className="text-xs text-muted-foreground">{branch.meaningZh}</p>
              )}

              <div className="pt-2 border-t border-border/40 flex flex-wrap gap-1.5">
                {branch.examples.map((ex, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-card border text-xs font-mono font-medium text-foreground"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Fallback for custom diagram / flowchart
  return (
    <div className="p-4 rounded-xl border bg-muted/20 text-xs text-muted-foreground">
      {diagram.title}
    </div>
  );
}
