"use client";

import { Button } from "@/components/ui/button";

interface TeacherModeToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export function TeacherModeToggle({ enabled, onToggle }: TeacherModeToggleProps) {
  return (
    <Button
      variant={enabled ? "default" : "outline"}
      size="sm"
      onClick={onToggle}
      className="gap-1.5"
    >
      👩‍🏫 Teacher Mode {enabled ? "ON" : "OFF"}
    </Button>
  );
}
