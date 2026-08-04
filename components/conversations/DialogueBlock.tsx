"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ConversationLine, ChineseLine } from "@/types/conversations";
import { Copy, Star, Volume2, Repeat, Languages } from "lucide-react";

interface DialogueBlockProps {
  line: ConversationLine;
  chineseLine?: ChineseLine;
  index: number;
  topicId: string;
  isCurrentLine?: boolean;
  isPlaying?: boolean;
  onPlayEnglish: (text: string) => void;
  onPlayChinese: (text: string) => void;
  onReplay?: () => void;
  onToggleFavorite: (key: string) => void;
  isFavorited: boolean;
  showChinese: boolean;
  onCopy?: (text: string) => void;
  speakerColor?: string;
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

export function DialogueBlock({
  line,
  chineseLine,
  index,
  topicId,
  isCurrentLine = false,
  isPlaying = false,
  onPlayEnglish,
  onPlayChinese,
  onReplay,
  onToggleFavorite,
  isFavorited,
  showChinese,
  onCopy,
  speakerColor,
}: DialogueBlockProps) {
  const color = speakerColor || getSpeakerColor(line.speaker);
  const chineseText = chineseLine?.line || "";
  const favKey = `${topicId}-${index}`;

  return (
    <div
      id={`line-${index}`}
      className={cn(
        "rounded-2xl border bg-card transition-all duration-300",
        isCurrentLine && "ring-2 ring-primary/30 shadow-lg bg-primary/[0.02]"
      )}
    >
      <div className="p-5 sm:p-6">
        {/* Speaker Avatar + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="shrink-0 rounded-full flex items-center justify-center text-white font-bold shadow-md w-10 h-10 sm:w-12 sm:h-12 text-base sm:text-lg"
            style={{ backgroundColor: color }}
          >
            {line.speaker.charAt(0).toUpperCase()}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm sm:text-base" style={{ color }}>
              {line.speaker}
            </span>
            {line.register && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0.5 h-auto">
                {line.register}
              </Badge>
            )}
            {isCurrentLine && isPlaying && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium animate-pulse">
                Playing
              </span>
            )}
          </div>
        </div>

        {/* English Text */}
        <p className="text-lg sm:text-xl leading-relaxed text-foreground mb-3">
          {line.line}
        </p>

        {/* Chinese Translation */}
        {showChinese && chineseText && (
          <div className="mb-4 p-3 rounded-xl bg-muted/30 border border-dashed border-muted-foreground/20">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {chineseText}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-muted-foreground/10">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onPlayEnglish(line.line)}
            className="h-10 px-3 text-xs font-medium gap-1.5"
            title="Play English audio"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">English</span>
          </Button>

          {chineseText && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onPlayChinese(chineseText)}
              className="h-10 px-3 text-xs font-medium gap-1.5"
              title="Play Chinese audio"
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">中文</span>
            </Button>
          )}

          {onReplay && (
            <Button
              size="sm"
              variant="ghost"
              onClick={onReplay}
              className="h-10 px-3 text-xs font-medium"
              title="Replay"
            >
              <Repeat className="w-3.5 h-3.5" />
            </Button>
          )}

          {onCopy && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onCopy(line.line)}
              className="h-10 px-3 text-xs font-medium gap-1.5"
              title="Copy text"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy</span>
            </Button>
          )}

          <div className="flex-1" />

          <Button
            size="sm"
            variant="ghost"
            onClick={() => onToggleFavorite(favKey)}
            className={cn(
              "h-10 px-3 text-xs font-medium gap-1.5",
              isFavorited && "text-amber-500"
            )}
            title="Favorite"
          >
            <Star className={cn("w-3.5 h-3.5", isFavorited && "fill-current")} />
            <span className="hidden sm:inline">{isFavorited ? "Saved" : "Save"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
