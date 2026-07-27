"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TeacherSidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MonitorPlay,
  BookOpen,
  Users,
  FileText,
  ClipboardCheck,
  Presentation,
  ArrowRight,
  Lightbulb,
  ClipboardList,
} from "lucide-react";
import { curriculum } from "@/data/curriculum";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TeacherDashboard() {
  return (
    <div className="flex">
      <TeacherSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-extrabold">Teacher Dashboard</h1>
            <p className="mt-1 text-muted-foreground">
              You never have to explain Chinese. Every lesson includes translations and audio.
            </p>
          </div>
          <Link href="/classroom">
            <Button size="lg" className="gap-2 bg-indigo-500 hover:bg-indigo-600">
              <MonitorPlay className="h-5 w-5" />
              Start Classroom
            </Button>
          </Link>
        </motion.div>

        {/* Teacher Features Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-5 dark:border-indigo-500/30 dark:from-indigo-950/30 dark:to-purple-950/20"
        >
          <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
            <Lightbulb className="h-5 w-5 text-indigo-500" />
            Every lesson automatically includes:
          </h3>
          <div className="flex flex-wrap gap-2">
            {["English", "Chinese Translation", "Native Audio", "Usage", "Examples", "Common Mistakes", "Exercises", "Teaching Notes", "Speaking Drill", "Homework"].map((feature) => (
              <Badge
                key={feature}
                variant="secondary"
                className="bg-white text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Lessons Grid */}
        <motion.div variants={container} initial="hidden" animate="show">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <BookOpen className="h-5 w-5 text-indigo-500" />
            Available Lessons
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {curriculum.map((level) => (
              <motion.div key={level.id} variants={item}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-500/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{level.title}</CardTitle>
                      <Badge variant="outline">{level.items.length} words</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {level.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link href={`/teacher/lesson/${level.id}`}>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <FileText className="h-4 w-4" />
                          View Lesson Plan
                        </Button>
                      </Link>
                      <Link href="/classroom">
                        <Button className="w-full justify-start gap-2 bg-indigo-500 hover:bg-indigo-600">
                          <Presentation className="h-4 w-4" />
                          Present to Class
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {[
            { icon: Users, label: "Active Students", value: "12", color: "text-blue-500" },
            { icon: BookOpen, label: "Total Lessons", value: String(curriculum.length), color: "text-indigo-500" },
            { icon: ClipboardCheck, label: "Homework to Grade", value: "5", color: "text-amber-500" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={item}>
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
        </motion.div>
      </div>
    </div>
  );
}
