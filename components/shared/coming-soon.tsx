"use client";

import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
  emoji: string;
  title: string;
  description: string;
  features?: string[];
}

export function ComingSoon({ emoji, title, description, features }: ComingSoonProps) {
  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold">
            {emoji} {title}
          </h1>
          <p className="mt-1 text-muted-foreground">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="mx-auto max-w-2xl border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 dark:border-indigo-500/30 dark:from-indigo-950/30 dark:to-purple-950/20">
            <CardContent className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 text-5xl shadow-lg dark:bg-indigo-500/20"
              >
                {emoji}
              </motion.div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Sparkles className="h-4 w-4" />
                Coming Soon
              </div>

              <h2 className="mb-3 text-2xl font-bold">{title}</h2>
              <p className="mb-6 text-muted-foreground">{description}</p>

              {features && features.length > 0 && (
                <div className="mb-6 text-left">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Planned Features
                  </h3>
                  <ul className="space-y-2">
                    {features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="text-indigo-500">✦</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              <Link href="/vocabulary">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Explore Available Lessons
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
