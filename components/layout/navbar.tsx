"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  BookOpen,
  MessageCircle,
  Mic,
  Headphones,
  BookText,
  PenTool,
  BarChart3,
  Settings,
  Sun,
  Moon,
  MonitorPlay,
  LayoutDashboard,
  Layers,
  MessageSquare,
  BookMarked,
  AlertTriangle,
  LogOut,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePreferencesStore } from "@/stores/preferences-store";
import { cn } from "@/lib/utils";

const studentLinks = [
  { href: "/student", label: "Dashboard", icon: LayoutDashboard },
  { href: "/vocabulary", label: "Vocabulary", icon: BookOpen },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/conversations", label: "Conversations", icon: MessageCircle },
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

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = usePreferencesStore();
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (pathname === "/login") {
    return null;
  }

  const isTeacher = pathname.startsWith("/teacher") || pathname.startsWith("/classroom");
  const links = isTeacher ? teacherLinks : studentLinks;

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    window.location.href = "/login";
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Lingua<span className="text-indigo-500">Class</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/student" && pathname.startsWith(link.href));
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "gap-2",
                    isActive && "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Link href="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </Link>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-lg bg-muted px-2 py-1 text-sm">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">{user.username}</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Link href="/login">
                  <Button size="sm">Sign in</Button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
