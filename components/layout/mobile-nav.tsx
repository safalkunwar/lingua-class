"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Shield, MonitorPlay, LayoutDashboard, Layers, MessageSquare, BookMarked, AlertTriangle, BookOpen, Mic, Headphones, BookText, PenTool, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const studentLinks = [
  { href: "/student", label: "Dashboard", icon: LayoutDashboard },
  { href: "/vocabulary", label: "Vocabulary", icon: BookOpen },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/conversations", label: "Conversations", icon: MessageSquare },
  { href: "/daily-expressions", label: "Daily Expressions", icon: BookMarked },
  { href: "/slang-academy", label: "Slang Academy", icon: MessageSquare },
  { href: "/rough-english", label: "Rough English", icon: AlertTriangle },
  { href: "/speaking", label: "Speaking", icon: Mic },
  { href: "/listening", label: "Listening", icon: Headphones },
  { href: "/reading", label: "Reading", icon: BookText },
  { href: "/writing", label: "Writing", icon: PenTool },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

const teacherLinks = [
  { href: "/teacher", label: "Dashboard", icon: LayoutDashboard },
  { href: "/classroom", label: "Classroom", icon: MonitorPlay },
  { href: "/vocabulary", label: "Lessons", icon: BookOpen },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

type SessionUser = { username: string; name?: string; role?: string } | null;

export function MobileNav() {
  const pathname = usePathname();
  const [user, setUser] = useState<SessionUser>(null);
  const isTeacher = pathname.startsWith("/teacher") || pathname.startsWith("/classroom");
  const links = isTeacher ? teacherLinks : studentLinks;

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setUser(data.user ?? null);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  const allLinks =
    user?.role === "admin"
      ? [{ href: "/admin", label: "Admin Panel", icon: Shield as typeof LayoutDashboard }, ...links]
      : links;

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-2 text-left">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              Lingua<span className="text-indigo-500">Class</span>
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 p-3 overflow-y-auto">
          {allLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/student" && link.href !== "/admin" && pathname.startsWith(link.href));
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-10",
                    isActive && "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
                    link.href === "/admin" && "text-rose-600 dark:text-rose-400"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </nav>
        {user && (
          <div className="border-t px-4 py-3 text-sm text-muted-foreground">
            Signed in as <span className="font-medium text-foreground">{user.name || user.username}</span>
            {user.role && <span className="ml-1.5 capitalize">({user.role})</span>}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
