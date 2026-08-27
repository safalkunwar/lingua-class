"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { readingPassages, READING_CATEGORIES, READING_LEVELS } from "@/data/reading";
import { ReadingLevel, ReadingCategory } from "@/types/reading";
import Link from "next/link";
import { BookOpen, Clock, BarChart3, Sparkles } from "lucide-react";

type CategoryFilter = ReadingCategory | "all";
type LevelFilter = ReadingLevel | "all";

export default function ReadingPage() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");

  const filtered = readingPassages.filter((p) => {
    const matchesCategory = categoryFilter === "all" || p.category === categoryFilter;
    const matchesLevel = levelFilter === "all" || p.level === levelFilter;
    return matchesCategory && matchesLevel;
  });

  const categoryMeta = (id: ReadingCategory) => READING_CATEGORIES.find((c) => c.id === id);
  const levelMeta = (level: ReadingLevel) => READING_LEVELS.find((l) => l.level === level);

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">📚 Reading Room</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Deep reading for serious learners. Philosophy, psychology, modern life, and more — with guided vocabulary, inference practice, and critical thinking.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">{readingPassages.length} passages</Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">Original content</Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">Chinese support</Badge>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 flex-wrap">
            <Button variant={categoryFilter === "all" ? "default" : "outline"} size="sm" onClick={() => setCategoryFilter("all")}>All</Button>
            {READING_CATEGORIES.map((cat) => (
              <Button key={cat.id} variant={categoryFilter === cat.id ? "default" : "outline"} size="sm" onClick={() => setCategoryFilter(cat.id)}>{cat.emoji} {cat.title}</Button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {READING_LEVELS.map((lv) => (
              <Button key={lv.level} variant={levelFilter === lv.level ? "default" : "outline"} size="sm" onClick={() => setLevelFilter(lv.level)}>{lv.level}</Button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((passage, idx) => {
            const cat = categoryMeta(passage.category);
            const lv = levelMeta(passage.level);
            return (
              <motion.div key={passage.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.03 }}>
                <Link href={`/reading/${passage.id}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl dark:bg-indigo-500/10">{cat?.emoji}</div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors">{passage.title}</h3>
                          <p className="text-xs text-muted-foreground">{passage.author}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{passage.passage.slice(0, 120)}...</p>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="text-xs">{passage.level}</Badge>
                        <Badge variant="outline" className="text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{passage.estimatedMinutes} min</Badge>
                        <Badge variant="outline" className="text-xs">{passage.wordCount} words</Badge>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold mb-2">No passages found</h3>
            <p>Try adjusting your category or level filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
