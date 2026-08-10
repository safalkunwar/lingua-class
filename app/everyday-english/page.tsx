"use client";

import { useState } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { everydayEnglishSections } from "@/data/everyday-english";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search, BookOpen, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: "bg-green-100 text-green-800 border-green-200",
  elementary: "bg-blue-100 text-blue-800 border-blue-200",
  intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  "upper-intermediate": "bg-orange-100 text-orange-800 border-orange-200",
  advanced: "bg-red-100 text-red-800 border-red-200",
};

export default function EverydayEnglishPage() {
  const [search, setSearch] = useState("");

  const filtered = everydayEnglishSections.filter((section) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      section.title.toLowerCase().includes(s) ||
      section.titleZh.includes(s) ||
      section.description.toLowerCase().includes(s) ||
      section.patterns.some(
        (p) =>
          p.term.toLowerCase().includes(s) ||
          p.chinese.includes(s) ||
          p.relatedTerms.some((t) => t.toLowerCase().includes(s))
      )
    );
  });

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight">🛠️ Everyday English Toolkit</h1>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
            Master the small language patterns, expressions, and structures that native speakers use every day but textbooks often overlook.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {everydayEnglishSections.length} sections
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {everydayEnglishSections.reduce((acc, s) => acc + s.patterns.length, 0)} patterns
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {everydayEnglishSections.reduce((acc, s) => acc + s.exercises.length, 0)} exercises
            </Badge>
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
              placeholder="Search sections, patterns, or Chinese terms..."
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
          {filtered.map((section, idx) => (
            <Link key={section.id} href={`/everyday-english/${section.id}`}>
              <Card className="p-5 sm:p-6 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">{section.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">{section.title}</h3>
                    <p className="text-xs text-muted-foreground">{section.titleZh}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{section.descriptionZh}</p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-xs">{section.patterns.length} patterns</Badge>
                  <Badge variant="outline" className={cn("text-xs capitalize", DIFFICULTY_COLORS[section.difficulty])}>
                    {section.difficulty}
                  </Badge>
                </div>
              </Card>
            </Link>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No sections found matching "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
