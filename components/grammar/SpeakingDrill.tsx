"use client";

import { useState } from "react";
import { SpeakingDrillItem } from "@/types/grammar";
import { Button } from "@/components/ui/button";
import { Volume2, Mic, CheckCircle2, Sparkles } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";
import { cn } from "@/lib/utils";

interface SpeakingDrillProps {
  drill: SpeakingDrillItem;
  chineseMode: "none" | "hint" | "full";
  onSuccess?: () => void;
}

export function SpeakingDrill({ drill, chineseMode, onSuccess }: SpeakingDrillProps) {
  const { speakEnglish } = useSpeechSynthesis();
  const { isListening, transcript, startListening, stopListening, isSupported } =
    useSpeechRecognition();

  const [hasPracticed, setHasPracticed] = useState(false);

  const toggleRecording = () => {
    if (isListening) {
      stopListening();
      setHasPracticed(true);
      onSuccess?.();
    } else {
      startListening();
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-xl border bg-card space-y-4">
      <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        <span>Speaking Fluency & Muscle Memory Drill</span>
        <span className="font-mono text-indigo-600 dark:text-indigo-400">Oral Output</span>
      </div>

      <p className="text-xs sm:text-sm text-foreground/80 font-medium">{drill.prompt}</p>

      {/* Target Sentence Card */}
      <div className="p-4 sm:p-5 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
              &ldquo;{drill.targetSentence}&rdquo;
            </h4>
            {drill.phonetic && (
              <p className="text-xs font-mono text-muted-foreground mt-0.5">
                {drill.phonetic}
              </p>
            )}
            {chineseMode !== "none" && drill.targetSentenceZh && (
              <p className="text-xs text-muted-foreground mt-1">
                {drill.targetSentenceZh}
              </p>
            )}
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={() => speakEnglish(drill.targetSentence)}
            className="h-8 px-2.5 text-xs gap-1.5 shrink-0 bg-card hover:bg-muted"
          >
            <Volume2 className="w-4 h-4 text-indigo-600" />
            <span>Listen</span>
          </Button>
        </div>

        {drill.tips && (
          <div className="pt-2 border-t border-border/40 text-xs text-muted-foreground">
            <strong className="text-foreground">Speaking Tip: </strong>
            {drill.tips}
          </div>
        )}
      </div>

      {/* Speech Recording / Practice Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        {isSupported ? (
          <div className="flex items-center gap-3">
            <Button
              type="button"
              onClick={toggleRecording}
              className={cn(
                "h-10 px-4 text-xs font-semibold gap-2 transition-all",
                isListening
                  ? "bg-rose-600 hover:bg-rose-700 text-white animate-pulse"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              )}
            >
              <Mic className="w-4 h-4" />
              <span>{isListening ? "Stop & Check" : "Tap to Speak"}</span>
            </Button>

            {transcript && (
              <span className="text-xs text-foreground/90 italic line-clamp-1">
                You said: &ldquo;{transcript}&rdquo;
              </span>
            )}
          </div>
        ) : (
          <Button
            type="button"
            onClick={() => {
              setHasPracticed(true);
              onSuccess?.();
            }}
            variant="outline"
            size="sm"
            className="text-xs h-9"
          >
            I Practiced Saying This Aloud 3 Times
          </Button>
        )}

        {hasPracticed && (
          <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4" /> Fluency drill completed!
          </span>
        )}
      </div>
    </div>
  );
}
