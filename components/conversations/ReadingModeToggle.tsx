"use client";

import { Button } from "@/components/ui/button";
import { ReadingMode } from "./ConversationReader";

interface ReadingModeToggleProps {
  mode: ReadingMode;
  onToggle: () => void;
}

export function ReadingModeToggle({ mode, onToggle }: ReadingModeToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="gap-1.5"
    >
      {mode === "normal" ? "📖 Normal" : "🎯 Focused"}
    </Button>
  );
}
