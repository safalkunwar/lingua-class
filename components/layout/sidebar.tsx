"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarLink {
  href: string;
  label: string;
  emoji?: string;
}

export function StudentSidebar() {
  const pathname = usePathname();

  const links: SidebarLink[] = [
    { href: "/vocabulary", label: "Vocabulary", emoji: "📚" },
    { href: "/word-book", label: "Word Book", emoji: "📖" },
    { href: "/conversations", label: "Conversations", emoji: "💬" },
    { href: "/everyday-english", label: "Everyday English", emoji: "🛠️" },
    { href: "/rough-english", label: "Rough English", emoji: "⚠️" },
    { href: "/daily-expressions", label: "Daily Expressions", emoji: "📚" },
    { href: "/slang-academy", label: "Slang Academy", emoji: "🎭" },
    { href: "/slang-module", label: "Slang Module", emoji: "🗣️" },
    { href: "/image-guessing", label: "Image Guessing", emoji: "🖼️" },
    { href: "/flashcards", label: "Flashcards", emoji: "🃏" },
    { href: "/speaking", label: "Speaking", emoji: "🎤" },
    { href: "/listening", label: "Listening", emoji: "🎧" },
    { href: "/reading", label: "Reading", emoji: "📖" },
    { href: "/writing", label: "Writing", emoji: "✍️" },
  ];

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border/40 bg-card/50 lg:block">
      <div className="flex h-full flex-col gap-1 p-4">
        <h3 className="mb-2 px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Learning Tools
        </h3>
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link key={link.href} href={link.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  isActive && "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                )}
              >
                <span className="text-lg">{link.emoji}</span>
                {link.label}
              </Button>
            </Link>
          );
        })}
        <Separator className="my-4" />
        <Link href="/lesson-library">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <GraduationCap className="h-5 w-5" />
            Lesson Library
          </Button>
        </Link>
      </div>
    </aside>
  );
}

export function TeacherSidebar() {
  const pathname = usePathname();

  const links: SidebarLink[] = [
    { href: "/teacher", label: "Dashboard", emoji: "🏠" },
    { href: "/classroom", label: "Classroom", emoji: "🏫" },
    { href: "/vocabulary", label: "Lesson Content", emoji: "📚" },
  ];

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border/40 bg-card/50 lg:block">
      <div className="flex h-full flex-col gap-1 p-4">
        <h3 className="mb-2 px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Teacher Tools
        </h3>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  isActive && "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                )}
              >
                <span className="text-lg">{link.emoji}</span>
                {link.label}
              </Button>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
