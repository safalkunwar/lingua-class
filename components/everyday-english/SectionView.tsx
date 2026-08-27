"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { EverydayEnglishSection, PatternEntry } from "@/types/everyday-english";
import { PatternCard } from "@/components/everyday-english/PatternCard";
import { ExerciseCard } from "@/components/everyday-english/PracticeExercise";
import { TeacherModePanel } from "@/components/everyday-english/TeacherModePanel";
import { Search, GraduationCap, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface SectionViewProps {
  section: EverydayEnglishSection;
  onPatternClick?: (pattern: PatternEntry) => void;
}

export function SectionView({ section, onPatternClick }: SectionViewProps) {
  const [search, setSearch] = useState("");
  const [showTeacherMode, setShowTeacherMode] = useState(false);

  const filteredPatterns = section.patterns.filter((pattern) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      pattern.term.toLowerCase().includes(s) ||
      pattern.chinese.includes(s) ||
      pattern.meaning.toLowerCase().includes(s) ||
      pattern.relatedTerms.some((t) => t.toLowerCase().includes(s))
    );
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <span className="text-4xl sm:text-5xl block mb-3">{section.emoji}</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{section.title}</h1>
        <p className="text-lg text-muted-foreground mb-1">{section.titleZh}</p>
        <p className="text-muted-foreground max-w-2xl mx-auto">{section.descriptionZh}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">{section.patterns.length} patterns</Badge>
          <Badge variant="outline">{section.exercises.length} exercises</Badge>
          <Badge variant="outline" className="capitalize">{section.difficulty}</Badge>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search patterns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        {section.teacherPanel && (
          <Button
            variant="outline"
            onClick={() => setShowTeacherMode(!showTeacherMode)}
            className="gap-2 w-full sm:w-auto"
          >
            <GraduationCap className="w-4 h-4" />
            {showTeacherMode ? "Hide" : "Show"} Teacher Mode
          </Button>
        )}
      </div>

      {showTeacherMode && section.teacherPanel && (
        <TeacherModePanel panel={section.teacherPanel} />
      )}

      <Card className="p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          <h2 className="text-xl font-bold">Patterns</h2>
          <Badge variant="secondary" className="ml-auto">{filteredPatterns.length}</Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredPatterns.map((pattern) => (
            <PatternCard
              key={pattern.id}
              pattern={pattern}
              onRelatedClick={(term) => {
                setSearch(term);
              }}
            />
          ))}
        </div>
        {filteredPatterns.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No patterns found matching "{search}"</p>
          </div>
        )}
      </Card>

      {section.exercises.length > 0 && (
        <Card className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <h2 className="text-xl font-bold">Practice Exercises</h2>
            <Badge variant="secondary" className="ml-auto">{section.exercises.length}</Badge>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {section.exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </Card>
      )}

      <div className="pt-8 border-t">
        <Link href="/everyday-english">
          <Button variant="ghost">← Back to Everyday English Toolkit</Button>
        </Link>
      </div>
    </div>
  );
}
