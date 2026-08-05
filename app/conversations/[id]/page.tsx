"use client";

import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { conversations } from "@/data/conversations";
import { use } from "react";
import { LessonLayout } from "@/components/conversations/LessonLayout";
import { PresentationMode } from "@/components/conversations/PresentationMode";
import { StickyToolbar } from "@/components/conversations/StickyToolbar";
import { ChevronLeft, ChevronRight, Maximize, BookOpen } from "lucide-react";
import { useState, useCallback, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { speak } from "@/lib/speech";

export default function ConversationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const topic = conversations.find((c) => c.id === resolvedParams.id);

  if (!topic) {
    notFound();
  }

  const topicIndex = conversations.findIndex((c) => c.id === resolvedParams.id);
  const prevTopic = topicIndex > 0 ? conversations[topicIndex - 1] : null;
  const nextTopic = topicIndex < conversations.length - 1 ? conversations[topicIndex + 1] : null;

  const [viewMode, setViewMode] = useState<"read" | "presentation">("read");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showChinese, setShowChinese] = useState(true);

  const chineseTranslation = topic.chineseTranslation || [];
  const lines = useMemo(() => topic.conversation || [], [topic.conversation]);

  const toggleFavorite = useCallback((key: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, []);

  const playEnglish = useCallback((text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      speak(text, "en-US");
      setIsPlaying(true);
    }
  }, []);

  const playChinese = useCallback((text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      speak(text, "zh-CN");
      setIsPlaying(true);
    }
  }, []);

  const stopAudio = useCallback(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setAutoPlay((a) => !a);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    let cancelled = false;

    const playNext = () => {
      if (cancelled) return;
      setCurrentLine((prev) => {
        if (prev >= lines.length - 1) {
          setAutoPlay(false);
          return prev;
        }
        const next = prev + 1;
        const line = lines[next];
        if (line) {
          speak(line.line, "en-US");
        }
        return next;
      });
    };

    const timer = setInterval(playNext, 3000);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [autoPlay, lines]);

  useEffect(() => {
    const handleEnd = () => {
      setIsPlaying(false);
    };

    if ("speechSynthesis" in window) {
      const checkEnd = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          handleEnd();
        }
      }, 500);

      return () => clearInterval(checkEnd);
    }
  }, [currentLine]);

  const handlePrevLine = useCallback(() => {
    setCurrentLine((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNextLine = useCallback(() => {
    setCurrentLine((prev) => Math.min(lines.length - 1, prev + 1));
  }, [lines.length]);

  return (
    <div className="flex min-h-screen">
      <StudentSidebar />

      <main className="flex-1 min-w-0 pb-14">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <div className="flex items-center gap-2">
              <Link href="/conversations">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              </Link>
              <div className="hidden sm:flex items-center gap-2">
                {prevTopic && (
                  <Link href={`/conversations/${prevTopic.id}`}>
                    <Button variant="ghost" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                      {prevTopic.emoji}
                    </Button>
                  </Link>
                )}
                {nextTopic && (
                  <Link href={`/conversations/${nextTopic.id}`}>
                    <Button variant="ghost" size="sm">
                      {nextTopic.emoji}
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowChinese((s) => !s)}
                className="gap-1.5"
              >
                <BookOpen className="w-4 h-4" />
                {showChinese ? "Hide Chinese" : "Show Chinese"}
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => setViewMode("presentation")}
                className="gap-1.5"
              >
                <Maximize className="w-4 h-4" />
                <span className="hidden sm:inline">Present</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Lesson Layout */}
        <div className="px-4 sm:px-6 py-6 sm:py-8">
          <LessonLayout
            topic={topic}
            chineseTranslation={chineseTranslation}
            currentLineIndex={currentLine}
            isPlaying={isPlaying}
            showChinese={showChinese}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onPlayEnglish={playEnglish}
            onPlayChinese={playChinese}
            onCopy={(text) => {
              navigator.clipboard.writeText(text);
            }}
          />
        </div>

        {/* Sticky Toolbar */}
        <StickyToolbar
          isPlaying={isPlaying}
          onPlay={() => lines[currentLine] && playEnglish(lines[currentLine].line)}
          onPause={stopAudio}
          onReplay={() => lines[currentLine] && playEnglish(lines[currentLine].line)}
          showChinese={showChinese}
          onToggleChinese={() => setShowChinese((s) => !s)}
          favoritesCount={favorites.size}
          onToggleFavorites={() => {}}
          onSearch={() => {}}
          onDictionary={() => {}}
        />

        {/* Presentation Mode */}
        <PresentationMode
          isOpen={viewMode === "presentation"}
          onClose={() => setViewMode("read")}
          topic={topic}
          chineseTranslation={chineseTranslation}
          currentLineIndex={currentLine}
          isPlaying={isPlaying}
          playbackRate={1}
          showChinese={showChinese}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onPlayEnglish={playEnglish}
          onPlayChinese={playChinese}
          onPrevLine={handlePrevLine}
          onNextLine={handleNextLine}
          onToggleChinese={() => setShowChinese((s) => !s)}
          autoPlay={autoPlay}
          onToggleAutoPlay={toggleAutoPlay}
          onPlaybackRateChange={() => {}}
        />

        {/* Next/Previous Navigation */}
        <div className="px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevTopic ? (
              <Link href={`/conversations/${prevTopic.id}`} className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  {prevTopic.emoji} {prevTopic.title}
                </Button>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
            {nextTopic ? (
              <Link href={`/conversations/${nextTopic.id}`} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto gap-2">
                  {nextTopic.emoji} {nextTopic.title}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
