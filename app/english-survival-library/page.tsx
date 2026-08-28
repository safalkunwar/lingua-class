"use client";

import { useState, useMemo } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useLearningStore } from "@/stores/learning-store";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { survivalCategories, survivalResources } from "@/data/english-survival-library";
import { SurvivalResource } from "@/types/english-survival-library";
import { motion } from "framer-motion";
import { Search, Zap, BookOpen, Volume2, Filter } from "lucide-react";
import Link from "next/link";

export default function EnglishSurvivalLibraryPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return survivalResources.filter((r) => {
      if (activeCategory && r.category !== activeCategory) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.titleZh.includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.summary.toLowerCase().includes(q) ||
        r.summaryZh.includes(q)
      );
    });
  }, [query, activeCategory]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  const openResource = (resource: SurvivalResource) => {
    updateLevelProgress(resource.id, {
      cardsReviewed: (resource.miniDrills?.length || 0),
      completed: false,
    });
    addXp(5);
    incrementStreak();
    incrementWeeklyProgress();
  };

  return (
    <div className="flex min-w-0">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">📚 English Survival Library</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            English doesn't have to be confusing. Find it. Understand it. Practice it. Use it.
          </p>
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
            英语不用那么复杂。找到它，理解它，练习它，然后真正用起来。
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="What are you struggling with?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant={activeCategory === null ? "default" : "outline"} size="sm" onClick={() => setActiveCategory(null)}>
                All
              </Button>
              {survivalCategories.slice(0, 6).map((cat) => (
                <Button key={cat.id} variant={activeCategory === cat.id ? "default" : "outline"} size="sm" onClick={() => setActiveCategory(cat.id)}>
                  <span className="mr-1">{cat.emoji}</span>
                  {cat.title}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource, idx) => (
            <motion.div key={resource.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="min-w-0">
              <Card className="h-full cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 border-2 hover:border-indigo-300 dark:hover:border-indigo-700 group">
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">{resource.emoji}</span>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">{resource.title}</h3>
                      <p className="text-xs text-muted-foreground">{resource.titleZh}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{resource.summary}</p>
                  <p className="text-xs text-muted-foreground mb-4">{resource.summaryZh}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      <Zap className="h-3 w-3 mr-1" />
                      {resource.xpReward} XP
                    </Badge>
                    <Badge variant="outline" className="text-xs capitalize">
                      {resource.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/english-survival-library/${resource.id}`} className="flex-1">
                      <Button className="w-full gap-2" onClick={() => openResource(resource)}>
                        <BookOpen className="h-4 w-4" />
                        Study
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" onClick={() => toggleFavorite(resource.id)}>
                      {favorites.includes(resource.id) ? "⭐" : "☆"}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No resources found matching "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
