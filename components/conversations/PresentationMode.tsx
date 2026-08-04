"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ConversationTopic, ChineseLine } from "@/types/conversations";
import { X, ChevronLeft, ChevronRight, Eye, EyeOff, Volume2, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";

interface PresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
  topic: ConversationTopic;
  chineseTranslation: ChineseLine[];
  currentLineIndex: number;
  isPlaying: boolean;
  showChinese: boolean;
  onPlayEnglish: (text: string) => void;
  onPlayChinese: (text: string) => void;
  onPrevLine: () => void;
  onNextLine: () => void;
  onToggleChinese: () => void;
  autoPlay: boolean;
  onToggleAutoPlay: () => void;
}

const TEACHER_SPEAKERS = new Set(["Teacher", "Waiter", "Driver", "Agent", "Receptionist", "Waiter", "Clerk"]);
const CUSTOMER_SPEAKERS = new Set(["Customer", "Passenger", "Jenny", "Sarah", "Alex", "Mike", "Emma", "Anna", "Ben"]);

export function PresentationMode({
  isOpen,
  onClose,
  topic,
  chineseTranslation,
  currentLineIndex,
  isPlaying,
  showChinese,
  onPlayEnglish,
  onPlayChinese,
  onPrevLine,
  onNextLine,
  onToggleChinese,
  autoPlay,
  onToggleAutoPlay,
}: PresentationModeProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const currentLine = topic.conversation[currentLineIndex];
  const currentChinese = chineseTranslation[currentLineIndex];

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        onNextLine();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        onPrevLine();
      } else if (e.key === "Escape") {
        onClose();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "c" || e.key === "C") {
        onToggleChinese();
      } else if (e.key === "h" || e.key === "H") {
        setShowControls((s) => !s);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, onNextLine, onPrevLine, onToggleChinese, toggleFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (!isOpen) return null;

  const isTeacher = currentLine ? TEACHER_SPEAKERS.has(currentLine.speaker) : false;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      {/* Header */}
      {showControls && (
        <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold">🎓 Presentation Mode</span>
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {topic.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowControls(!showControls)}
              title="Toggle controls (H)"
            >
              {showControls ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              title="Fullscreen (F)"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} title="Exit (Esc)">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Main Presentation Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          {/* Topic Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-4xl sm:text-5xl block mb-3">{topic.emoji}</span>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{topic.title}</h1>
            <p className="text-muted-foreground text-sm sm:text-base">{topic.description}</p>
            <div className="flex justify-center gap-3 mt-4">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                {topic.level}
              </span>
              <span className="text-sm text-muted-foreground">
                {topic.estimatedTime}
              </span>
            </div>
          </div>

          {/* Current Dialogue - Large Format */}
          {currentLine && (
            <div className="max-w-4xl mx-auto mb-8">
              <div className="rounded-3xl border bg-card p-6 sm:p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg shrink-0"
                    style={{
                      backgroundColor: isTeacher ? "#10b981" : "#6366f1",
                    }}
                  >
                    {currentLine.speaker.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {currentLine.speaker}
                    </h3>
                    {currentLine.register && (
                      <span className="text-xs px-2 py-0.5 rounded-full border bg-muted/50 text-muted-foreground mt-1 inline-block">
                        {currentLine.register}
                      </span>
                    )}
                  </div>
                </div>

                {/* English Text */}
                <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-6 font-medium">
                  {currentLine.line}
                </p>

                {/* Chinese Translation */}
                {showChinese && currentChinese && (
                  <div className="pt-6 border-t border-dashed border-muted-foreground/20">
                    <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-muted-foreground">
                      {currentChinese.line}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-3 mt-8 pt-6 border-t">
                  <Button
                    size="lg"
                    onClick={() => onPlayEnglish(currentLine.line)}
                    className="gap-2 h-12 px-6 text-base"
                  >
                    <Volume2 className="w-5 h-5" />
                    {isPlaying ? "Playing..." : "Play English"}
                  </Button>
                  {currentChinese && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => onPlayChinese(currentChinese.line)}
                      className="gap-2 h-12 px-6 text-base"
                    >
                      <span className="text-lg">🇨🇳</span>
                      Play Chinese
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* All Dialogue Overview */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
              Full Dialogue
            </h3>
            <div className="space-y-3">
              {topic.conversation.map((line, idx) => {
                const isCurrent = idx === currentLineIndex;
                const chineseLine = chineseTranslation[idx];
                const isTeacher = TEACHER_SPEAKERS.has(line.speaker);
                const isCustomer = CUSTOMER_SPEAKERS.has(line.speaker);

                return (
                  <div
                    key={idx}
                    className={cn(
                      "grid gap-4 transition-all",
                      isCurrent ? "opacity-100" : "opacity-40 hover:opacity-70"
                    )}
                    style={{
                      gridTemplateColumns: "auto 1fr",
                    }}
                  >
                    {/* Speaker indicator */}
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                        style={{
                          backgroundColor: isTeacher ? "#10b981" : isCustomer ? "#6366f1" : "#6b7280",
                        }}
                      >
                        {line.speaker.charAt(0)}
                      </div>
                      <span className="text-[10px] text-muted-foreground text-center leading-tight">
                        {isTeacher ? "Teacher" : isCustomer ? "Student" : line.speaker}
                      </span>
                    </div>

                    {/* Dialogue content */}
                    <div
                      className={cn(
                        "p-4 rounded-xl",
                        isTeacher && "text-left bg-muted/20",
                        isCustomer && "text-left bg-primary/5"
                      )}
                    >
                      <p className={cn("text-sm sm:text-base", isCurrent && "text-primary font-medium")}>
                        {line.line}
                      </p>
                      {showChinese && chineseLine && (
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {chineseLine.line}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      {showControls && (
        <div className="border-t bg-background/95 backdrop-blur p-4 shrink-0">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onPrevLine}
                disabled={currentLineIndex === 0}
                className="gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onNextLine}
                disabled={currentLineIndex >= topic.conversation.length - 1}
                className="gap-1"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Line {currentLineIndex + 1} / {topic.conversation.length}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleChinese}
                className="gap-1.5"
              >
                {showChinese ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span className="hidden sm:inline">Chinese</span>
              </Button>
              <Button
                variant={autoPlay ? "default" : "ghost"}
                size="sm"
                onClick={onToggleAutoPlay}
                className="gap-1.5"
              >
                Auto: {autoPlay ? "ON" : "OFF"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
