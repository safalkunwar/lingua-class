"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, ChevronRight } from "lucide-react";
import { PracticeActivity } from "@/types/conversations";

interface PracticeSectionProps {
  activities: PracticeActivity[];
  title?: string;
}

const ACTIVITY_ICONS: Record<string, string> = {
  "fill-blank": "✏️",
  rearrange: "🔀",
  match: "🔗",
  listening: "🎧",
  translation: "🌐",
  shadowing: "🎭",
  "role-play": "🎬",
  speaking: "🎤",
  discussion: "💬",
};

export function PracticeSection({ activities, title = "Practice Activities" }: PracticeSectionProps) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const toggleComplete = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const activeActivity = activities.find((a) => a.id === selectedActivity);

  if (activeActivity) {
    return (
      <section className="py-8 sm:py-12 border-t">
        <div className="flex items-center gap-2 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedActivity(null)}
            className="gap-1"
          >
            ← Back to activities
          </Button>
        </div>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{ACTIVITY_ICONS[activeActivity.type] || "📝"}</span>
            <h3 className="text-xl sm:text-2xl font-bold">{activeActivity.title}</h3>
          </div>

          <p className="text-sm text-muted-foreground mb-1">{activeActivity.titleZh}</p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-muted/30 border">
              <p className="text-xs font-medium text-muted-foreground mb-2">Instructions</p>
              <p className="text-sm mb-1">{activeActivity.instructions}</p>
              <p className="text-xs text-muted-foreground">{activeActivity.instructionsZh}</p>
            </div>

            <div className="p-5 rounded-xl border bg-card">
              <p className="text-sm whitespace-pre-line">{activeActivity.content}</p>
              {activeActivity.contentZh && (
                <p className="text-xs text-muted-foreground mt-2">{activeActivity.contentZh}</p>
              )}
            </div>

            {activeActivity.options && (
              <div className="flex flex-wrap gap-2">
                {activeActivity.options.map((opt, idx) => (
                  <Button
                    key={idx}
                    variant={activeActivity.correctAnswer === idx ? "default" : "outline"}
                    size="sm"
                    className="text-sm"
                  >
                    {opt}
                  </Button>
                ))}
              </div>
            )}

            {activeActivity.hints && activeActivity.hints.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
                <p className="text-xs font-medium text-amber-700 dark:text-amber-300 mb-2">💡 Hints</p>
                <ul className="space-y-1">
                  {activeActivity.hints.map((hint, idx) => (
                    <li key={idx} className="text-sm text-amber-800 dark:text-amber-200">
                      • {hint}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <Button
                onClick={() => toggleComplete(activeActivity.id)}
                className={cn(
                  "gap-2",
                  completed.has(activeActivity.id) && "bg-green-600 hover:bg-green-700"
                )}
              >
                {completed.has(activeActivity.id) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Completed
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4" /> Mark Complete
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 border-t">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-3">
        <span>🎯</span> {title}
      </h2>
      <p className="text-muted-foreground mb-6">
        {activities.length} activities to practice what you learned
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {activities.map((activity) => {
          const isDone = completed.has(activity.id);

          return (
            <button
              key={activity.id}
              onClick={() => setSelectedActivity(activity.id)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border bg-card text-left transition-all hover:shadow-sm hover:border-primary/30",
                isDone && "bg-green-50/50 border-green-200 dark:bg-green-950/20 dark:border-green-800"
              )}
            >
              <span className="text-2xl shrink-0">
                {ACTIVITY_ICONS[activity.type] || "📝"}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">{activity.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {activity.instructions}
                </p>
              </div>
              <div className="shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
