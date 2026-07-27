"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Moon,
  Sun,
  Languages,
  Bell,
  Target,
  Trash2,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import { usePreferencesStore } from "@/stores/preferences-store";
import { useLearningStore } from "@/stores/learning-store";

export default function SettingsPage() {
  const { theme, setTheme, languageMode, setLanguageMode } = usePreferencesStore();
  const { weeklyGoal, setWeeklyGoal } = useLearningStore();

  const resetProgress = () => {
    if (typeof window !== "undefined") {
      if (window.confirm("Are you sure? This will reset all your learning progress.")) {
        localStorage.removeItem("lingua-class-progress");
        window.location.reload();
      }
    }
  };

  const settingsGroups: {
    title: string;
    description: string;
    icon: LucideIcon;
    items: React.ReactNode;
  }[] = [
    {
      title: "Appearance",
      description: "Customize how LinguaClass looks",
      icon: theme === "dark" ? Moon : Sun,
      items: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Theme</div>
              <div className="text-sm text-muted-foreground">
                Choose light or dark mode
              </div>
            </div>
            <Select value={theme} onValueChange={(v) => setTheme(v as "light" | "dark" | "system")}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">🌞 Light</SelectItem>
                <SelectItem value="dark">🌙 Dark</SelectItem>
                <SelectItem value="system">💻 System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
    },
    {
      title: "Language",
      description: "Set your learning language direction",
      icon: Languages,
      items: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Learning Mode</div>
              <div className="text-sm text-muted-foreground">
                What language are you learning?
              </div>
            </div>
            <Select value={languageMode} onValueChange={(v) => setLanguageMode(v as "en" | "zh")}>
              <SelectTrigger className="w-[220px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇺🇸 Learn English (I speak Chinese)</SelectItem>
                <SelectItem value="zh">🇨🇳 Learn Chinese (I speak English)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
    },
    {
      title: "Learning Goals",
      description: "Configure your weekly study targets",
      icon: Target,
      items: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Weekly XP Goal</div>
              <div className="text-sm text-muted-foreground">
                How many XP points to earn each week
              </div>
            </div>
            <Select value={String(weeklyGoal)} onValueChange={(v) => setWeeklyGoal(Number(v))}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">25 XP</SelectItem>
                <SelectItem value="50">50 XP</SelectItem>
                <SelectItem value="100">100 XP</SelectItem>
                <SelectItem value="200">200 XP</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-3xl p-6 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-extrabold">⚙️ Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Customize your LinguaClass experience.
        </p>
      </motion.div>

      <div className="space-y-6">
        {settingsGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-indigo-500" />
                    {group.title}
                  </CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>{group.items}</CardContent>
              </Card>
            </motion.div>
          );
        })}

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-red-200 dark:border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <Trash2 className="h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>
                These actions cannot be undone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Reset all progress</div>
                  <div className="text-sm text-muted-foreground">
                    Delete all XP, streaks, and achievements
                  </div>
                </div>
                <Button variant="destructive" onClick={resetProgress}>
                  Reset Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
