"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  BookOpen,
  MessageCircle,
  BookMarked,
  MessageSquare,
  Briefcase,
  Image,
  Layers,
  Mic,
  Headphones,
  BookText,
  PenTool,
  Rocket,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function StudentSidebar() {
  const pathname = usePathname();

  const links: SidebarLink[] = [
    { href: "/vocabulary", label: "Vocabulary", icon: BookOpen },
    { href: "/word-book", label: "Word Book", icon: BookOpen },
    { href: "/conversations", label: "Conversations", icon: MessageCircle },
    { href: "/everyday-english", label: "Everyday English", icon: BookMarked },
    { href: "/daily-expressions", label: "Daily Expressions", icon: BookMarked },
    { href: "/slang-academy", label: "Slang Academy", icon: MessageSquare },
    { href: "/business-english", label: "Business English", icon: Briefcase },
    { href: "/image-guessing", label: "Image Guessing", icon: Image },
    { href: "/flashcards", label: "Flashcards", icon: Layers },
    { href: "/speaking", label: "Speaking", icon: Mic },
    { href: "/listening", label: "Listening", icon: Headphones },
    { href: "/reading", label: "Reading", icon: BookText },
    { href: "/writing", label: "Writing", icon: PenTool },
    { href: "/english-boost", label: "English Boost", icon: Rocket },
  ];

  const sportsLinks: SidebarLink[] = [
    { href: "/sports", label: "Sports", icon: Trophy },
    { href: "/sports/basketball", label: "Basketball", icon: Trophy },
    { href: "/sports/basketball/curry-mission", label: "Meet Stephen Curry", icon: Trophy },
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
                <Icon className="h-4 w-4" />
                {link.label}
              </Button>
            </Link>
          );
        })}

        <Separator className="my-4" />
        <h3 className="mb-2 px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Sports
        </h3>
        {sportsLinks.map((link) => {
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
                <Icon className="h-4 w-4" />
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
    { href: "/teacher", label: "Dashboard", icon: GraduationCap },
    { href: "/classroom", label: "Classroom", icon: GraduationCap },
    { href: "/vocabulary", label: "Lesson Content", icon: BookOpen },
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
                <Icon className="h-4 w-4" />
                {link.label}
              </Button>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}