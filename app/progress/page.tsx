"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { StudentSidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { useLearningStore } from "@/stores/learning-store";
import { curriculum } from "@/data/curriculum";
import {
  Trophy,
  Flame,
  Zap,
  Target,
  BookOpen,
  Star,
} from "lucide-react";

// Note: using recharts which is built on top of d3, lighter than chart.js for React
// We installed chart.js but recharts integrates more cleanly with React/Next.js

export default function ProgressDashboard() {
  const progress = useLearningStore();

  const skillData = [
    { skill: "Speaking", score: progress.speakingScore, fullMark: 100 },
    { skill: "Listening", score: progress.listeningScore, fullMark: 100 },
    { skill: "Reading", score: progress.readingScore, fullMark: 100 },
    { skill: "Grammar", score: progress.grammarScore, fullMark: 100 },
  ];

  const levelData = curriculum.map((level) => {
    const lp = progress.levelProgress[level.id];
    return {
      name: `L${curriculum.indexOf(level) + 1}`,
      words: level.items.length,
      reviewed: lp?.cardsReviewed ?? 0,
      score: lp?.bestQuizScore ?? 0,
    };
  });

  const achievements = [
    { id: "first-lesson", icon: "🌟", label: "First Lesson" },
    { id: "vocab-master", icon: "📚", label: "Vocab Master" },
    { id: "streak-7", icon: "🔥", label: "7-Day Streak" },
    { id: "quiz-perfect", icon: "💯", label: "Perfect Quiz" },
    { id: "speaker", icon: "🎤", label: "Speaker" },
    { id: "listener", icon: "🎧", label: "Listener" },
  ];

  const unlockedCount = achievements.filter((a) => progress.achievements[a.id]).length;
  const weeklyPercent = Math.min(100, Math.round((progress.weeklyProgress / progress.weeklyGoal) * 100));

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold">📊 Progress Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            Track your learning journey and celebrate your achievements.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Flame, label: "Day Streak", value: progress.streak, color: "text-orange-500" },
            { icon: Zap, label: "Total XP", value: progress.totalXp, color: "text-amber-500" },
            { icon: BookOpen, label: "Words Reviewed", value: progress.vocabularyMastered, color: "text-indigo-500" },
            { icon: Trophy, label: "Achievements", value: `${unlockedCount}/${achievements.length}`, color: "text-yellow-500" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          {/* Skill Radar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Skill Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={skillData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="#6366f1"
                      fill="#6366f1"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Level Progress Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Words Reviewed per Level</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={levelData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="reviewed" fill="#6366f1" name="Reviewed" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="words" fill="#e879f9" name="Total" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Weekly Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-500" />
                Weekly Goal Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex justify-between">
                <span className="text-2xl font-extrabold">
                  {progress.weeklyProgress} / {progress.weeklyGoal} XP
                </span>
                <Badge variant="secondary">{weeklyPercent}%</Badge>
              </div>
              <Progress value={weeklyPercent} className="h-3" />
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Achievements ({unlockedCount} / {achievements.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                {achievements.map((achievement) => {
                  const unlocked = progress.achievements[achievement.id];
                  return (
                    <div
                      key={achievement.id}
                      className={`flex flex-col items-center rounded-xl p-4 text-center ${
                        unlocked
                          ? "bg-amber-50 dark:bg-amber-500/10"
                          : "bg-muted/30 opacity-40 grayscale"
                      }`}
                    >
                      <span className="text-3xl">{achievement.icon}</span>
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
      </div>
    </div>
  );
}
