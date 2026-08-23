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
import { Search, BookOpen, MessageSquare, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BusinessEnglishPage() {
  const [search, setSearch] = useState("");

  const filtered = businessEnglishData.categories.filter((cat) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      cat.title.toLowerCase().includes(s) ||
      cat.titleZh.includes(s) ||
      cat.description.toLowerCase().includes(s) ||
      businessEnglishData.lessons.some(
        (l) => l.categoryId === cat.id && (l.title.toLowerCase().includes(s) || l.titleZh.includes(s))
      )
    );
  });

  const totalLessons = businessEnglishData.lessons.length;
  const totalVocabulary = businessEnglishData.vocabulary.length;
  const totalIdioms = businessEnglishData.idioms.length;

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight">💼 Business English</h1>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
            Communicate confidently at work, in meetings, emails, interviews, presentations, negotiations, and international business situations.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {businessEnglishData.categories.length} categories
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {totalLessons} lessons
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {totalVocabulary} vocabulary
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {totalIdioms} idioms
            </Badge>
          </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/business-english/vocabulary">
              <Button variant="default" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Explore Business Vocabulary
              </Button>
            </Link>
            <Link href="/business-english/idioms">
              <Button variant="outline" className="gap-2">
                <Sparkles className="w-4 h-4" />
                Idioms & Corporate Decoder
              </Button>
            </Link>
            <Link href="/business-english/read">
              <Button variant="secondary" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Read Mode — All Lessons
              </Button>
            </Link>
          </div>
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
              placeholder="Search categories, lessons, or vocabulary..."
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
          {filtered.map((category, idx) => {
            const lessonCount = businessEnglishData.lessons.filter((l) => l.categoryId === category.id).length;
            return (
              <div key={category.id} className="h-full">
                <Link href={`/business-english/${category.id}`}>
                  <Card className="p-5 sm:p-6 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">{category.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">{category.title}</h3>
                        <p className="text-xs text-muted-foreground">{category.titleZh}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{category.descriptionZh}</p>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">{lessonCount} lessons</Badge>
                      <Badge variant="outline" className={cn("text-xs capitalize")}>
                        {category.id.replace("-", " ")}
                      </Badge>
                    </div>
                  </Card>
                </Link>
              </div>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No categories found matching "{search}"</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <Link href="/business-english/vocabulary">
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-8 h-8 text-indigo-500" />
                <h3 className="font-bold text-lg">Business Vocabulary</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {totalVocabulary} terms with definitions, examples, collocations, and common mistakes.
              </p>
              <Badge variant="secondary" className="text-xs">{totalVocabulary} words</Badge>
            </Card>
          </Link>
          <Link href="/business-english/idioms">
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-8 h-8 text-amber-500" />
                <h3 className="font-bold text-lg">Idioms & Decoder</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {totalIdioms} idioms plus corporate speak decoded. Learn what they really mean.
              </p>
              <Badge variant="secondary" className="text-xs">{totalIdioms} idioms</Badge>
            </Card>
          </Link>
          <Link href="/business-english/emails">
            <Card className="p-6 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-8 h-8 text-emerald-500" />
                <h3 className="font-bold text-lg">Email Templates</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Professional email templates for common business situations.
              </p>
              <Badge variant="secondary" className="text-xs">{businessEnglishData.emailTemplates.length} templates</Badge>
            </Card>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
