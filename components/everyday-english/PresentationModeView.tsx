"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PatternEntry, EverydayEnglishSection } from "@/types/everyday-english";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  Lightbulb,
  BookOpen,
  Target,
  AlertTriangle,
  X,
  Check,
  Globe,
} from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";

interface PresentationModeViewProps {
  section: EverydayEnglishSection;
  onBack: () => void;
}

export function PresentationModeView({ section, onBack }: PresentationModeViewProps) {
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [showMistakes, setShowMistakes] = useState(false);
  const [showExamples, setShowExamples] = useState(true);
  const [showConversations, setShowConversations] = useState(false);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const pattern = section.patterns[currentPatternIndex];
  const isFirst = currentPatternIndex === 0;
  const isLast = currentPatternIndex === section.patterns.length - 1;

  const nextPattern = () => {
    if (currentPatternIndex < section.patterns.length - 1) {
      setCurrentPatternIndex(currentPatternIndex + 1);
      setShowMistakes(false);
      setShowExamples(true);
      setShowConversations(false);
    }
  };

  const prevPattern = () => {
    if (currentPatternIndex > 0) {
      setCurrentPatternIndex(currentPatternIndex - 1);
      setShowMistakes(false);
      setShowExamples(true);
      setShowConversations(false);
    }
  };

  const handleSpeakMeaning = () => {
    speakEnglish(pattern.term);
  };

  const handleSpeakChinese = () => {
    speakChinese(pattern.chinese);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {section.title}
        </Button>
        <div className="flex gap-2">
          <Badge variant="outline" className="text-xs">{currentPatternIndex + 1} / {section.patterns.length}</Badge>
          <Badge variant="outline" className="capitalize text-xs">{section.difficulty}</Badge>
        </div>
      </div>

      <Card className="p-6 sm:p-8 max-w-3xl mx-auto">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold">{pattern.term}</h2>
              <Badge variant="outline" className="text-xs">{pattern.chinese}</Badge>
            </div>
            <div className="text-sm text-muted-foreground mb-2">{pattern.pinyin}</div>
            <p className="text-base text-primary font-semibold">{pattern.meaning}</p>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" onClick={handleSpeakMeaning} title="Speak English">
              <Volume2 className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" onClick={handleSpeakChinese} title="Speak Chinese">
              <Globe className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-2 mb-3">
          <Badge variant="secondary" className="capitalize text-xs">{pattern.register}</Badge>
          <Badge variant="outline" className="capitalize text-xs">{pattern.difficulty}</Badge>
          {pattern.warning && (
            <Badge variant="outline" className="text-xs text-amber-600">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Warning
            </Badge>
          )}
        </div>

        <div className="bg-muted/20 rounded-lg p-4 mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{pattern.culturalNotes || pattern.usageContext}</p>
        </div>

        {pattern.warning && (
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <strong className="text-amber-900 dark:text-amber-100 text-sm">Warning</strong>
            </div>
            <p className="text-sm text-amber-800 dark:text-amber-200">{pattern.warning}</p>
          </div>
        )}

        {pattern.safeAlternatives && pattern.safeAlternatives.length > 0 && (
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 text-green-600" />
              <strong className="text-green-900 dark:text-green-100 text-sm">Safe Alternatives</strong>
            </div>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              {pattern.safeAlternatives.map((alt, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>{alt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pattern.intensityNote && (
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-blue-600" />
              <strong className="text-blue-900 dark:text-blue-100 text-sm">Intensity Note</strong>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200">{pattern.intensityNote}</p>
          </div>
        )}

        {pattern.examples.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <h3 className="font-semibold">Examples</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowExamples(!showExamples)}>
                {showExamples ? "Hide" : "Show"} Examples
              </Button>
            </div>
            {showExamples && (
              <div className="space-y-3">
                {pattern.examples.map((ex, idx) => (
                  <div key={idx} className="bg-white dark:bg-black/30 rounded-lg p-3 border border-border">
                    <p className="font-medium text-base">{ex.en}</p>
                    <p className="text-sm text-muted-foreground">{ex.zh}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {pattern.commonMistakes.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <h3 className="font-semibold">Common Mistakes</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowMistakes(!showMistakes)}>
                {showMistakes ? "Hide" : "Show"} Mistakes
              </Button>
            </div>
            {showMistakes && (
              <div className="space-y-3">
                {pattern.commonMistakes.map((mistake, idx) => (
                  <div key={idx} className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                    <p className="text-sm line-through text-red-700 dark:text-red-300 flex items-center gap-1.5">
                      <X className="w-3 h-3" /> {mistake.mistake}
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400 font-medium mt-1 flex items-center gap-1.5">
                      <Check className="w-3 h-3" /> {mistake.correction}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {pattern.relatedTerms.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Related Terms</h3>
            <div className="flex flex-wrap gap-2">
              {pattern.relatedTerms.map((term) => (
                <Badge key={term} variant="secondary" className="text-xs">{term}</Badge>
              ))}
            </div>
          </div>
        )}

        {!isFirst || !isLast ? (
          <div className="flex justify-between pt-4 border-t">
            <Button variant="outline" onClick={prevPattern} disabled={isFirst}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button onClick={nextPattern} disabled={isLast}>
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        ) : (
          <div className="pt-4 border-t">
            <Link href="/everyday-english">
              <Button variant="ghost">
                <Target className="w-4 h-4 mr-1" />
                All Patterns
              </Button>
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
}
