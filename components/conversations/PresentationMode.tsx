"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function PresentationMode({ isOpen, onClose, children }: PresentationModeProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <span className="text-sm text-muted-foreground">Classroom Presentation Mode</span>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
