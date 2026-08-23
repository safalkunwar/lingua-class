"use client";

import { usePathname } from "next/navigation";
import { GraduationCap, Heart } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  return (
    <footer className="border-t border-border/40 bg-muted/30 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-muted-foreground">
          <GraduationCap className="h-5 w-5" />
          <span className="font-semibold">LinguaClass</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Made with <Heart className="inline h-3.5 w-3.5 text-pink-500" /> for Chinese adult learners
        </p>
      </div>
    </footer>
  );
}
