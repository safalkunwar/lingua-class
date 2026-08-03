"use client";

import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { conversations } from "@/data/conversations";
import { use } from "react";
import { motion } from "framer-motion";
import { ConversationReader } from "@/components/conversations/ConversationReader";
import { CategorySidebar } from "@/components/conversations/CategorySidebar";
import { AudioController } from "@/components/conversations/AudioController";
import { PracticeBlock } from "@/components/conversations/PracticeBlock";
import { PresentationMode } from "@/components/conversations/PresentationMode";
import { ReadingModeToggle } from "@/components/conversations/ReadingModeToggle";
import { TeacherModeToggle } from "@/components/conversations/TeacherModeToggle";
import { ChevronLeft, ChevronRight, Search, MessageCircle, Clock } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ReadingMode = "normal" | "focused";

export default function ConversationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const topic = conversations.find((c) => c.id === resolvedParams.id);

  if (!topic) {
    notFound();
  }

  const topicIndex = conversations.findIndex((c) => c.id === resolvedParams.id);
  const prevTopic = topicIndex > 0 ? conversations[topicIndex - 1] : null;
  const nextTopic = topicIndex < conversations.length - 1 ? conversations[topicIndex + 1] : null;

  const [readingMode, setReadingMode] = useState<ReadingMode>("normal");
  const [teacherMode, setTeacherMode] = useState(false);
  const [viewMode, setViewMode] = useState<"read" | "presentation">("read");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [currentLineText, setCurrentLineText] = useState("");
  const [audioLanguage, setAudioLanguage] = useState<"en" | "zh">("en");

  const audioRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggleFavorite = useCallback((lineIndex: number) => {
    setFavorites((prev) => {
      const key = `${topic.id}-${lineIndex}`;
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, [topic.id]);

  const playAudio = useCallback(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const lines = topic.conversation || [];
      const line = lines[currentLine];
      if (line) {
        setCurrentLineText(line.line);
        setAudioLanguage("en");
        const utterance = new SpeechSynthesisUtterance(line.line);
        const englishVoice = window.speechSynthesis.getVoices().find(v => v.lang.startsWith("en"));
        if (englishVoice) utterance.voice = englishVoice;
        utterance.rate = playbackRate;
        utterance.onend = () => {
          if (autoPlay && currentLine < lines.length - 1) {
            setCurrentLine((prev) => prev + 1);
            setTimeout(() => playAudio(), 500);
          } else {
            setIsPlaying(false);
            setCurrentLineText("");
          }
        };
        audioRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  }, [topic, currentLine, playbackRate, autoPlay]);

  const playChineseAudio = useCallback((text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setCurrentLineText(text);
      setAudioLanguage("zh");
      const utterance = new SpeechSynthesisUtterance(text);
      const chineseVoice = window.speechSynthesis.getVoices().find(v => v.lang.startsWith("zh"));
      if (chineseVoice) utterance.voice = chineseVoice;
      utterance.rate = playbackRate;
      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentLineText("");
      };
      audioRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  }, [playbackRate]);

  const pauseAudio = useCallback(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentLineText("");
    }
  }, []);

  const handlePlaybackRateChange = useCallback((rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying) {
      pauseAudio();
      setTimeout(playAudio, 100);
    }
  }, [isPlaying, pauseAudio, playAudio]);

  return (
    <div className="flex min-h-screen">
      <StudentSidebar />
      <div className="flex-1 flex">
        {/* Desktop Category Sidebar */}
        <CategorySidebar
          topics={conversations}
          activeTopicId={topic.id}
          onSelectTopic={(id) => {
            if (id !== topic.id) {
              window.location.href = `/conversations/${id}`;
            }
          }}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          levelFilter={levelFilter}
          onLevelFilterChange={setLevelFilter}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-24">
          {/* Header */}
          <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
              <Link href="/conversations">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <ReadingModeToggle mode={readingMode} onToggle={() => setReadingMode((m) => m === "normal" ? "focused" : "normal")} />
                <TeacherModeToggle enabled={teacherMode} onToggle={() => setTeacherMode((t) => !t)} />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("presentation")}
                >
                  🖥️ Present
                </Button>
              </div>
            </div>
          </div>

          {/* Topic Header */}
          <div className="px-4 sm:px-6 py-6 border-b">
            <div className="flex items-start gap-4">
              <span className="text-4xl sm:text-5xl">{topic.emoji}</span>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{topic.title}</h1>
                <p className="text-muted-foreground mt-1">{topic.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="secondary">{topic.level}</Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {topic.estimatedTime}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {topic.conversation.length} lines
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Conversation Reader */}
          <div className="px-4 sm:px-6 py-6">
          <ConversationReader
            topic={topic}
            readingMode={readingMode}
            teacherMode={teacherMode}
            viewMode={viewMode}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onToggleTeacherMode={() => setTeacherMode((t) => !t)}
            onToggleReadingMode={() => setReadingMode((m) => m === "normal" ? "focused" : "normal")}
            onTogglePresentationMode={() => setViewMode("presentation")}
            onPlayAudio={playAudio}
            onPauseAudio={pauseAudio}
            audioPlaying={isPlaying}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRateChange}
            autoPlay={autoPlay}
            onToggleAutoPlay={() => setAutoPlay((a) => !a)}
            chineseTranslation={topic.chineseTranslation}
            onPlayChineseAudio={playChineseAudio}
            currentLine={currentLine}
          />
          </div>

          {/* Bottom Navigation */}
          <div className="px-4 sm:px-6 py-6 flex justify-between items-center border-t">
            {prevTopic ? (
              <Link href={`/conversations/${prevTopic.id}`}>
                <Button variant="outline">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {prevTopic.emoji} {prevTopic.title}
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {nextTopic ? (
              <Link href={`/conversations/${nextTopic.id}`}>
                <Button variant="outline">
                  {nextTopic.emoji} {nextTopic.title}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>

        {/* Audio Controller */}
        <AudioController
          isPlaying={isPlaying}
          onPlay={playAudio}
          onPause={pauseAudio}
          playbackRate={playbackRate}
          onPlaybackRateChange={handlePlaybackRateChange}
          autoPlay={autoPlay}
          onToggleAutoPlay={() => setAutoPlay((a) => !a)}
          currentLine={currentLine}
          totalLines={topic.conversation.length}
          currentText={currentLineText}
          language={audioLanguage}
        />

        {/* Presentation Mode Overlay */}
        <PresentationMode
          isOpen={viewMode === "presentation"}
          onClose={() => setViewMode("read")}
        >
          <div className="max-w-4xl mx-auto px-4 py-8">
            <ConversationReader
              topic={topic}
              readingMode={readingMode}
              teacherMode={teacherMode}
              viewMode="presentation"
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onToggleTeacherMode={() => setTeacherMode((t) => !t)}
              onToggleReadingMode={() => setReadingMode((m) => m === "normal" ? "focused" : "normal")}
              onTogglePresentationMode={() => setViewMode("read")}
              onPlayAudio={playAudio}
              onPauseAudio={pauseAudio}
              audioPlaying={isPlaying}
              playbackRate={playbackRate}
              onPlaybackRateChange={handlePlaybackRateChange}
              autoPlay={autoPlay}
              onToggleAutoPlay={() => setAutoPlay((a) => !a)}
              chineseTranslation={topic.chineseTranslation}
              onPlayChineseAudio={playChineseAudio}
              currentLine={currentLine}
            />
          </div>
          {/* Audio Controller in Presentation Mode */}
          <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <AudioController
                isPlaying={isPlaying}
                onPlay={playAudio}
                onPause={pauseAudio}
                playbackRate={playbackRate}
                onPlaybackRateChange={handlePlaybackRateChange}
                autoPlay={autoPlay}
                onToggleAutoPlay={() => setAutoPlay((a) => !a)}
                currentLine={currentLine}
                totalLines={topic.conversation.length}
                currentText={currentLineText}
                language={audioLanguage}
              />
            </div>
          </div>
        </PresentationMode>
      </div>
    </div>
  );
}
