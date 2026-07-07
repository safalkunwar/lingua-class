"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Flame,
  Trophy,
  Target,
  Headphones,
  Mic,
  BookText,
  Languages,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useLearningStore } from "@/stores/learning-store";
import { curriculum } from "@/data/curriculum";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function StudentDashboard() {
  const progress = useLearningStore();

  const todayLevel = curriculum[0];
  const weeklyPercent = progress.weeklyGoal > 0
    ? Math.min(100, Math.round((progress.weeklyProgress / progress.weeklyGoal) * 100))
    : 0;

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold">Welcome back! 👋</h1>
          <p className="mt-1 text-muted-foreground">
            Continue your English learning journey today.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {/* Today's Lesson */}
          <motion.div variants={item} className="md:col-span-2 xl:col-span-1">
            <Card className="overflow-hidden border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 dark:border-indigo-500/30 dark:from-indigo-950/30 dark:to-purple-950/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-indigo-500" />
                    Today&apos;s Lesson
                  </CardTitle>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                    {todayLevel.items.length} words
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="mb-1 text-xl font-bold">{todayLevel.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {todayLevel.description}
                </p>
                <Link href={`/vocabulary/${todayLevel.id}`}>
                  <Button className="gap-2 bg-indigo-500 hover:bg-indigo-600">
                    Continue Lesson
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Streak */}
          <motion.div variants={item}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Flame className="h-5 w-5 text-orange-500" />
                  Learning Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-orange-500">
                    {progress.streak}
                  </span>
                  <span className="text-muted-foreground">days</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {progress.streak > 0
                    ? "Keep it going! Study today to maintain your streak."
                    : "Start studying today to build your streak!"}
                </p>
                <div className="mt-3 flex gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium ${
                        i < progress.streak
                          ? "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Weekly Goal */}
          <motion.div variants={item}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="h-5 w-5 text-emerald-500" />
                  Weekly Goal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold">
                    {progress.weeklyProgress}
                  </span>
                  <span className="text-muted-foreground">
                    / {progress.weeklyGoal} XP
                  </span>
                </div>
                <Progress value={weeklyPercent} className="h-3" />
                <p className="mt-2 text-sm text-muted-foreground">
                  {weeklyPercent >= 100
                    ? "🎉 You've reached your weekly goal!"
                    : `${100 - weeklyPercent}% to go this week`}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Total XP */}
          <motion.div variants={item}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Zap className="h-5 w-5 text-amber-500" />
                  Total XP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-amber-500">
                    {progress.totalXp}
                  </span>
                  <span className="text-muted-foreground">points earned</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  <span>Keep learning to earn more XP!</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skill Scores */}
          <motion.div variants={item} className="md:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Languages className="h-5 w-5 text-indigo-500" />
                  Skill Scores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { label: "Speaking", score: progress.speakingScore, icon: Mic, color: "text-pink-500" },
                    { label: "Listening", score: progress.listeningScore, icon: Headphones, color: "text-purple-500" },
                    { label: "Reading", score: progress.readingScore, icon: BookText, color: "text-blue-500" },
                    { label: "Grammar", score: progress.grammarScore, icon: BookOpen, color: "text-emerald-500" },
                  ].map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.label}
                        className="flex flex-col items-center rounded-2xl bg-muted/50 p-4"
                      >
                        <Icon className={`mb-2 h-6 w-6 ${skill.color}`} />
                        <span className="text-2xl font-extrabold">{skill.score}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={item}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "first-lesson", icon: "🌟", label: "First Lesson" },
                    { id: "vocab-master", icon: "📚", label: "Vocab Master" },
                    { id: "streak-7", icon: "🔥", label: "7-Day Streak" },
                    { id: "quiz-perfect", icon: "💯", label: "Perfect Quiz" },
                    { id: "speaker", icon: "🎤", label: "Speaker" },
                    { id: "listener", icon: "🎧", label: "Listener" },
                  ].map((achievement) => {
                    const unlocked = progress.achievements[achievement.id];
                    return (
                      <div
                        key={achievement.id}
                        className={`flex flex-col items-center rounded-xl p-3 text-center ${
                          unlocked
                            ? "bg-amber-50 dark:bg-amber-500/10"
                            : "bg-muted/30 opacity-40 grayscale"
                        }`}
                      >
                        <span className="text-2xl">{achievement.icon}</span>
                        <span className="mt-1 text-xs font-medium">
                          {achievement.label}
                        </span>
                        {unlocked && (
                          <Star className="mt-1 h-3 w-3 text-amber-500" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
