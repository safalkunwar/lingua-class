"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TeacherPanel } from "@/types/everyday-english";
import { ChevronDown, ChevronUp, Volume2, GraduationCap } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { cn } from "@/lib/utils";

interface TeacherModePanelProps {
  panel: TeacherPanel;
}

export function TeacherModePanel({ panel }: TeacherModePanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDrill, setActiveDrill] = useState<number | null>(null);
  const { speakEnglish } = useSpeechSynthesis();

  const handlePlayDrill = (drill: string) => {
    speakEnglish(drill);
  };

  return (
    <Card className="p-5 sm:p-6 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between p-0 h-auto hover:bg-transparent"
      >
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-amber-600" />
          <span className="font-semibold text-amber-900 dark:text-amber-100">Teacher Mode</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-amber-600" /> : <ChevronDown className="w-5 h-5 text-amber-600" />}
      </Button>

      {isOpen && (
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">Explain it simply</h4>
            <p className="text-sm text-muted-foreground">{panel.simpleExplanation}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">中文解释</h4>
            <p className="text-sm text-muted-foreground">{panel.chineseExplanation}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">Common Chinese learner difficulty</h4>
            <p className="text-sm text-muted-foreground">{panel.learnerDifficulty}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">Teaching tip</h4>
            <p className="text-sm text-muted-foreground">{panel.teachingTip}</p>
          </div>

          {panel.drills.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-2">Rapid-fire Drills</h4>
              <div className="space-y-1.5">
                {panel.drills.map((drill, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-lg bg-white/50 dark:bg-black/20 cursor-pointer hover:bg-white/80 dark:hover:bg-black/30 transition-colors",
                      activeDrill === idx && "ring-2 ring-amber-400"
                    )}
                    onClick={() => setActiveDrill(activeDrill === idx ? null : idx)}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayDrill(drill);
                      }}
                      className="h-7 w-7 shrink-0"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </Button>
                    <p className="text-sm">{drill}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
