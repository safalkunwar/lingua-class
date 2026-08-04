"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { Level } from "@/types/curriculum";
import { useLearningStore } from "@/stores/learning-store";

interface LevelCardProps {
  level: Level;
  index: number;
}

export function LevelCard({ level, index }: LevelCardProps) {
  const levelProgress = useLearningStore((s) => s.levelProgress[level.id]);

  const reviewed = levelProgress?.cardsReviewed ?? 0;
  const total = level.items.length;
  const percent = total > 0 ? Math.round((reviewed / total) * 100) : 0;
  const isComplete = levelProgress?.completed ?? false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      <Link href={`/vocabulary/${level.id}`}>
        <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/30">
          {isComplete && (
            <div className="absolute right-3 top-3 z-10 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
              Complete
            </div>
          )}
          <CardContent className="p-0">
            <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/20 sm:h-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(level.items[0]?.imageKeyword || level.id)}?width=800&height=500&nologo=true`}
                alt={level.title}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-lg font-extrabold leading-tight text-white drop-shadow-lg">
                  {level.title}
                </h3>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                  {level.cefrLevel || `Level ${index + 1}`}
                </Badge>
                <Badge variant="outline">{total} words</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {level.description}
              </p>

              {reviewed > 0 && (
                <div className="mt-4 mb-2">
                  <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{percent}%</span>
                  </div>
                  <Progress value={percent} className="h-1.5" />
                </div>
              )}

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">
                Start learning
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
