"use client";

import { cn } from "@/lib/utils";
import { ConversationTopic } from "@/types/conversations";
import { PracticeBlock } from "@/components/conversations/PracticeBlock";
import { DialogueBubble } from "@/components/conversations/DialogueBubble";

export type ReadingMode = "normal" | "focused";
export type ViewMode = "read" | "presentation";

interface ConversationReaderProps {
  topic: ConversationTopic;
  readingMode: ReadingMode;
  teacherMode: boolean;
  viewMode: ViewMode;
  favorites: Set<string>;
  onToggleFavorite: (lineIndex: number) => void;
  onToggleTeacherMode: () => void;
  onToggleReadingMode: () => void;
  onTogglePresentationMode: () => void;
  onPlayAudio: () => void;
  chineseTranslation?: { speaker: string; line: string }[];
  onPlayChineseAudio?: (text: string) => void;
  currentLine?: number;
}

export function ConversationReader({
  topic,
  readingMode,
  teacherMode,
  viewMode,
  favorites,
  onToggleFavorite,
  onToggleTeacherMode,
  onToggleReadingMode,
  onTogglePresentationMode,
  onPlayAudio,
  chineseTranslation = [],
  onPlayChineseAudio,
  currentLine = 0,
}: ConversationReaderProps) {
  const conversation = topic.conversation || [];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-4 space-y-4">
          <div className="rounded-xl border bg-card p-4">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
              Topic Info
            </h3>
            <div className="space-y-2">
              <div className="text-2xl">{topic.emoji}</div>
              <h2 className="font-bold text-lg leading-tight">{topic.title}</h2>
              <p className="text-xs text-muted-foreground">{topic.description}</p>
              <div className="flex gap-2">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {topic.level}
                </span>
                <span className="text-xs text-muted-foreground">{topic.estimatedTime}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-4">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
              Reading Mode
            </h3>
            <button
              onClick={onToggleReadingMode}
              className="w-full rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              {readingMode === "normal" ? "📖 Normal Mode" : "🎯 Focused Mode"}
            </button>
            <p className="text-xs text-muted-foreground mt-2">
              {readingMode === "normal"
                ? "Shows English, Chinese, and all notes"
                : "English only. Tap to reveal Chinese."}
            </p>
          </div>

          <div className="rounded-xl border bg-card p-4">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
              Teacher Mode
            </h3>
            <button
              onClick={onToggleTeacherMode}
              className={cn(
                "w-full rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                teacherMode
                  ? "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-950/30"
                  : "hover:bg-muted"
              )}
            >
              {teacherMode ? "👩‍🏫 Teacher Mode: ON" : "👩‍🏫 Teacher Mode: OFF"}
            </button>
            <p className="text-xs text-muted-foreground mt-2">
              {teacherMode
                ? "Showing teaching tips and notes"
                : "Learner content only"}
            </p>
          </div>

          <div className="rounded-xl border bg-card p-4">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
              Classroom
            </h3>
            <button
              onClick={onTogglePresentationMode}
              className="w-full rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              🖥️ Presentation Mode
            </button>
          </div>

          {topic.registerMarkers && topic.registerMarkers.length > 0 && (
            <div className="rounded-xl border bg-card p-4">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Register Levels
              </h3>
              <div className="space-y-1.5">
                {topic.registerMarkers.map((marker) => (
                  <div
                    key={marker.level}
                    className="text-xs px-2 py-1 rounded-full border bg-muted/50"
                  >
                    <span className="font-medium">{marker.label}</span>
                    <span className="text-muted-foreground ml-1">— {marker.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Reading Area */}
      <main className="flex-1 min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden mb-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{topic.emoji}</span>
            <div>
              <h1 className="text-xl font-bold">{topic.title}</h1>
              <div className="flex gap-2 mt-1">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {topic.level}
                </span>
                <span className="text-xs text-muted-foreground">{topic.estimatedTime}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
            <button
              onClick={onToggleReadingMode}
              className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
            >
              {readingMode === "normal" ? "📖 Normal" : "🎯 Focused"}
            </button>
            <button
              onClick={onToggleTeacherMode}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                teacherMode && "bg-indigo-50 border-indigo-200 text-indigo-700"
              )}
            >
              👩‍🏫 Teacher {teacherMode ? "ON" : "OFF"}
            </button>
            <button
              onClick={onTogglePresentationMode}
              className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
            >
              🖥️ Present
            </button>
          </div>
        </div>

        {/* Conversation Display */}
        <div className="max-w-[800px]">
          <div className="space-y-6">
            {conversation.map((line, index) => {
              const isFav = favorites.has(`${topic.id}-${index}`);
              const chineseLine = chineseTranslation[index]?.line;

              return (
                <DialogueBubble
                  key={index}
                  line={line}
                  index={index}
                  topicId={topic.id}
                  readingMode={readingMode}
                  viewMode={viewMode}
                  teacherMode={teacherMode}
                  favorites={favorites}
                  onToggleFavorite={onToggleFavorite}
                  onPlayAudio={onPlayAudio}
                  onPlayChineseAudio={chineseLine && onPlayChineseAudio ? () => onPlayChineseAudio(chineseLine) : undefined}
                  isFav={isFav}
                  isCurrentLine={currentLine === index}
                  chineseLine={chineseLine}
                />
              );
            })}
          </div>

          {/* Progressive Practice Blocks */}
          <div className="mt-12 space-y-6">
            {conversation.length > 0 && (
              <PracticeBlock
                topic={topic}
                startIndex={Math.floor(conversation.length / 2)}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
