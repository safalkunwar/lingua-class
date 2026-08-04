"use client";

import { cn } from "@/lib/utils";
import { ConversationTopic } from "@/types/conversations";

interface CategorySidebarProps {
  topics: ConversationTopic[];
  activeTopicId: string;
  onSelectTopic: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  levelFilter: string;
  onLevelFilterChange: (level: string) => void;
}

export function CategorySidebar({
  topics,
  activeTopicId,
  onSelectTopic,
  searchQuery,
  onSearchChange,
  levelFilter,
  onLevelFilterChange,
}: CategorySidebarProps) {
  const levels = Array.from(new Set(topics.map((t) => t.level))).sort();

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === "all" || topic.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-4 space-y-4">
        {/* Search */}
        <div className="rounded-xl border bg-card p-4">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Level Filter */}
        <div className="rounded-xl border bg-card p-4">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
            Level
          </h3>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onLevelFilterChange("all")}
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-medium transition-colors",
                levelFilter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              All
            </button>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => onLevelFilterChange(level)}
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium transition-colors",
                  levelFilter === level
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                )}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="rounded-xl border bg-card overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
              Categories
            </h3>
          </div>
          <div className="max-h-[calc(100vh-300px)] overflow-y-auto p-2">
            <div className="space-y-0.5">
               {filteredTopics.map((topic) => {
                 const isActive = activeTopicId === topic.id;

                return (
                  <button
                    key={topic.id}
                    onClick={() => onSelectTopic(topic.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300"
                        : "hover:bg-muted"
                    )}
                  >
                    <span className="text-xl shrink-0">{topic.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">{topic.title}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {topic.level} · {topic.estimatedTime}
                      </p>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground shrink-0">
                      {topic.conversation.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}


