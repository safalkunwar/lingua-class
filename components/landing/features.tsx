"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  Mic,
  Headphones,
  BookText,
  PenTool,
  MonitorPlay,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    emoji: "📚",
    title: "Vocabulary Explorer",
    description:
      "Every word has its own page with translation, pronunciation, examples, and practice.",
  },
  {
    icon: Mic,
    emoji: "🎤",
    title: "Speaking Studio",
    description:
      "Practice pronunciation with real-time feedback. Speak, listen, and improve.",
  },
  {
    icon: Headphones,
    emoji: "🎧",
    title: "Listening Lab",
    description:
      "Train your ear with native English conversations, British and American accents.",
  },
  {
    icon: BookText,
    emoji: "📖",
    title: "Reading Center",
    description:
      "Read stories, news, and articles with Chinese translations and vocabulary popups.",
  },
  {
    icon: PenTool,
    emoji: "✍️",
    title: "Writing Workshop",
    description:
      "Practice writing messages, emails, paragraphs, and essays with guidance.",
  },
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "Conversation Simulator",
    description:
      "Real-life scenarios: restaurant, airport, office, doctor, and more.",
  },
  {
    icon: MonitorPlay,
    emoji: "🏫",
    title: "Classroom Mode",
    description:
      "Projector-ready presentations for teachers. Large visuals, audio, and interactive questions.",
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Progress Dashboard",
    description:
      "Track your XP, streaks, achievements, and skill scores across all areas.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-indigo-500">Learn English</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From vocabulary to conversation, from reading to writing — LinguaClass
            covers every skill you need.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={item}>
                <Card className="group h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-200 dark:hover:border-indigo-500/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-2xl dark:bg-indigo-500/10">
                      {feature.emoji}
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
