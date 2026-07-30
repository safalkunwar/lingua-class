"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  MessageCircle,
  Mic,
  Headphones,
  BookText,
  PenTool,
  BarChart3,
  Layers,
  Home,
  Presentation,
  Volume2,
  GraduationCap,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarLink {
  href: string;
  label: string;
  icon: React.ElementType;
  emoji?: string;
}

export function StudentSidebar() {
  const pathname = usePathname();

  const links: SidebarLink[] = [
    { href: "/vocabulary", label: "Vocabulary", icon: BookOpen, emoji: "📚" },
    { href: "/word-book", label: "Word Book", icon: BookText, emoji: "📖" },
    { href: "/conversations", label: "Conversations", icon: MessageSquare, emoji: "💬" },
    { href: "/image-guessing", label: "Image Guessing", icon: Sparkles, emoji: "🖼️" },
    { href: "/flashcards", label: "Flashcards", icon: Layers, emoji: "🃏" },
    { href: "/speaking", label: "Speaking", icon: Mic, emoji: "🎤" },
    { href: "/listening", label: "Listening", icon: Headphones, emoji: "🎧" },
    { href: "/reading", label: "Reading", icon: BookText, emoji: "📖" },
    { href: "/writing", label: "Writing", icon: PenTool, emoji: "✍️" },
  ];

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border/40 bg-card/50 lg:block">
      <div className="flex h-full flex-col gap-1 p-4">
        <h3 className="mb-2 px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Learning Tools
        </h3>
        {links.map((link) => {
          const Icon = link.icon;
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
    { href: "/teacher", label: "Dashboard", icon: Home, emoji: "🏠" },
    { href: "/classroom", label: "Classroom", icon: Presentation, emoji: "🏫" },
    { href: "/vocabulary", label: "Lesson Content", icon: BookOpen, emoji: "📚" },
  ];

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border/40 bg-card/50 lg:block">
      <div className="flex h-full flex-col gap-1 p-4">
        <h3 className="mb-2 px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Teacher Tools
        </h3>
        {links.map((link) => {
          const Icon = link.icon;
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
