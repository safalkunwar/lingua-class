"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PenTool, Save, Check } from "lucide-react";

interface GrammarNotesSheetProps {
  lessonId: string;
  lessonTitle: string;
}

export function GrammarNotesSheet({ lessonId, lessonTitle }: GrammarNotesSheetProps) {
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const savedNote = localStorage.getItem(`grammar-note-${lessonId}`);
      if (savedNote) setNote(savedNote);
    } catch {}
  }, [lessonId]);

  const handleSave = () => {
    try {
      localStorage.setItem(`grammar-note-${lessonId}`, note);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {}
  };

  return (
    <Sheet>
      <SheetTrigger className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 gap-1.5 text-xs font-medium">
        <PenTool className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Take Note</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-[90vw] sm:max-w-md flex flex-col">
        <SheetHeader className="pb-3 border-b">
          <SheetTitle className="text-base font-bold flex items-center gap-2">
            <PenTool className="w-4 h-4 text-indigo-600" />
            Study Notes
          </SheetTitle>
          <p className="text-xs text-muted-foreground truncate">{lessonTitle}</p>
        </SheetHeader>

        <div className="flex-1 py-4 flex flex-col gap-3">
          <p className="text-xs text-muted-foreground">
            Write down sentence examples, memory tricks, or questions for your teacher. Notes are saved automatically to your device.
          </p>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. Remember: 'He works' not 'He is work'. Ask teacher about transitive phrasal verbs..."
            className="flex-1 min-h-[220px] resize-none text-sm p-3 font-mono leading-relaxed"
          />
          <Button
            onClick={handleSave}
            size="sm"
            className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" /> Saved!
              </>
            ) : (
              <>
                <Save className="w-4 h-4" /> Save Notes
              </>
            )}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
