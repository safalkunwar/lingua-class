"use client";

import { useState } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { businessEnglishData } from "@/data/business-english";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Search, BookOpen, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BusinessCategoryPage() {
  const params = useParams<{ categoryId: string }>();
  const category = businessEnglishData.categories.find((c) => c.id === params.categoryId);

  const [search, setSearch] = useState("");

  if (!category) {
    notFound();
  }

  const lessons = businessEnglishData.lessons.filter((l) => l.categoryId === category.id);
  const filtered = lessons.filter((l) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return l.title.toLowerCase().includes(s) || l.titleZh.includes(s) || l.situation.toLowerCase().includes(s);
  });

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
            <Link href="/business-english">
              <Button variant="ghost">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Business English
              </Button>
            </Link>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-sm">{lessons.length} lessons</Badge>
              <Link href="/business-english/read">
                <Button variant="secondary" size="sm" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Read Mode
                </Button>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <div className="text-5xl mb-3">{category.emoji}</div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{category.title}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{category.descriptionZh}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search lessons..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((lesson, idx) => (
              <div key={lesson.id} className="h-full">
                <Link href={`/business-english/${category.id}/${lesson.id}`}>
                  <Card className="p-5 sm:p-6 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">{lesson.title}</h3>
                        <p className="text-xs text-muted-foreground">{lesson.titleZh}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{lesson.situationZh}</p>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">{lesson.level}</Badge>
                      <Badge variant="outline" className="text-xs capitalize">
                        {lesson.objectiveZh.slice(0, 20)}...
                      </Badge>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No lessons found matching "{search}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
