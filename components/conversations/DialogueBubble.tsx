"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ConversationLine } from "@/types/conversations";
import { ReadingMode, ViewMode } from "./ConversationReader";

interface DialogueBubbleProps {
  line: ConversationLine;
  index: number;
  topicId: string;
  readingMode: ReadingMode;
  viewMode: ViewMode;
  teacherMode: boolean;
  favorites: Set<string>;
  onToggleFavorite: (lineIndex: number) => void;
  onPlayAudio: () => void;
  onPlayChineseAudio?: () => void;
  isFav: boolean;
  isCurrentLine?: boolean;
}

const SPEAKER_COLORS: Record<string, string> = {
  Alex: "#6366f1",
  Sarah: "#ec4899",
  Waiter: "#10b981",
  Mike: "#3b82f6",
  Emma: "#f59e0b",
  Barista: "#14b8a6",
  Lisa: "#f43f5e",
  "Sales associate": "#8b5cf6",
  Jenny: "#f97316",
  Passenger: "#0ea5e9",
  Driver: "#84cc16",
  Agent: "#06b6d4",
  David: "#d946ef",
  Amy: "#a855f7",
  John: "#22c55e",
  Tom: "#ef4444",
  Mia: "#ca8a04",
  James: "#78716c",
};

function getSpeakerColor(speaker: string): string {
  return SPEAKER_COLORS[speaker] || "#6b7280";
}

export function DialogueBubble({
  line,
  index,
  topicId,
  readingMode,
  viewMode,
  teacherMode,
  favorites,
  onToggleFavorite,
  onPlayAudio,
  onPlayChineseAudio,
  isFav,
  isCurrentLine = false,
}: DialogueBubbleProps) {
  const speakerColor = getSpeakerColor(line.speaker);
  const isFocused = readingMode === "focused";
  const isPresentation = viewMode === "presentation";

  return (
    <div
      className={cn(
        "flex gap-3 transition-all duration-300",
        isPresentation && "min-h-[60vh] items-center",
        isCurrentLine && "scale-[1.01]"
      )}
    >
      {/* Speaker Avatar */}
      <div
        className={cn(
          "shrink-0 rounded-full flex items-center justify-center text-white font-bold shadow-md transition-all",
          isPresentation ? "w-16 h-16 text-2xl" : "w-10 h-10 text-sm",
          isCurrentLine && "ring-4 ring-primary/30 ring-offset-2"
        )}
        style={{ backgroundColor: speakerColor }}
      >
        {line.speaker.charAt(0).toUpperCase()}
      </div>

      {/* Bubble */}
      <div
        className={cn(
          "flex-1 rounded-2xl shadow-sm transition-all",
          isPresentation ? "rounded-3xl p-8" : "p-4",
          isCurrentLine && "ring-2 ring-primary/20 shadow-md"
        )}
        style={{
          backgroundColor: `${speakerColor}14`,
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-semibold text-sm" style={{ color: speakerColor }}>
            {line.speaker}
          </span>
          {line.register && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full border bg-muted/50 text-muted-foreground">
              {line.register}
            </span>
          )}
          {isCurrentLine && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium animate-pulse">
              Playing
            </span>
          )}
        </div>

        {!isFocused && (
          <p
            className={cn(
              "text-foreground leading-relaxed",
              isPresentation ? "text-3xl" : "text-lg"
            )}
          >
            {line.line}
          </p>
        )}

        {isFocused && (
          <p
            className={cn(
              "text-foreground leading-relaxed cursor-pointer",
              isPresentation ? "text-3xl" : "text-lg"
            )}
            onClick={() => {}}
          >
            {line.line}
          </p>
        )}

        {/* Inline Actions */}
        <div className="flex items-center gap-1 mt-3">
          <button
            onClick={onPlayAudio}
            className="p-3 rounded-lg hover:bg-muted/50 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center group"
            title="Play English audio"
          >
            <span className="text-base group-hover:scale-110 transition-transform">🔊</span>
          </button>
          {onPlayChineseAudio && (
            <button
              onClick={onPlayChineseAudio}
              className="p-3 rounded-lg hover:bg-muted/50 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center group"
              title="Play Chinese audio"
            >
              <span className="text-base group-hover:scale-110 transition-transform">🇨🇳</span>
            </button>
          )}
          <button
            className="p-3 rounded-lg hover:bg-muted/50 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center group"
            title="Vocabulary"
          >
            <span className="text-base group-hover:scale-110 transition-transform">📖</span>
          </button>
          <button
            className="p-3 rounded-lg hover:bg-muted/50 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center group"
            title="Grammar hint"
          >
            <span className="text-base group-hover:scale-110 transition-transform">💡</span>
          </button>
          <button
            onClick={() => onToggleFavorite(index)}
            className={cn(
              "p-3 rounded-lg hover:bg-muted/50 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center",
              isFav && "text-amber-500"
            )}
            title="Favorite"
          >
            <span className="text-base">{isFav ? "⭐" : "☆"}</span>
          </button>
        </div>

        {/* Teacher Mode Content */}
        {teacherMode && line.note && (
          <div className="mt-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
              Teacher Note
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
              {line.note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
