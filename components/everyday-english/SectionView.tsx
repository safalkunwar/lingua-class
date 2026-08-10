"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EverydayEnglishSection, PatternEntry } from "@/types/everyday-english";
import { PatternCard } from "@/components/everyday-english/PatternCard";
import { ExerciseCard } from "@/components/everyday-english/PracticeExercise";
import { TeacherModePanel } from "@/components/everyday-english/TeacherModePanel";
import { Search, GraduationCap } from "lucide-react";
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
    <div className="space-y-6">
      <div className="text-center mb-8">
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

      <Tabs defaultValue="patterns" className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="patterns" className="flex-1 sm:flex-none">Patterns ({filteredPatterns.length})</TabsTrigger>
          <TabsTrigger value="exercises">Exercises ({section.exercises.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="patterns" className="mt-6">
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
        </TabsContent>
        <TabsContent value="exercises" className="mt-6">
          <div className="space-y-4 max-w-3xl mx-auto">
            {section.exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="pt-8 border-t">
        <Link href="/everyday-english">
          <Button variant="ghost">← Back to Everyday English Toolkit</Button>
        </Link>
      </div>
    </div>
  );
}
