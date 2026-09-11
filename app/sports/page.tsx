"use client";

import { useState } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { sportsCategories, basketballSubModules } from "@/data/sports-basketball";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search, BookOpen, MessageSquare, Sparkles, Trophy, Users, Mic, Gamepad2, Volume2, MessageCircle, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SUB_MODULE_ICONS: Record<string, { icon: React.ElementType; color: string }> = {
  "basketball-basics": { icon: BookOpen, color: "text-blue-500" },
  "basketball-vocabulary": { icon: BookOpen, color: "text-green-500" },
  "basketball-positions": { icon: Users, color: "text-purple-500" },
  "basketball-slang": { icon: Sparkles, color: "text-orange-500" },
  "watching-a-game": { icon: Gamepad2, color: "text-red-500" },
  "talking-with-fans": { icon: MessageCircle, color: "text-teal-500" },
  "talking-with-players": { icon: Users, color: "text-indigo-500" },
  "asking-questions": { icon: MessageSquare, color: "text-pink-500" },
  "basketball-pronunciation": { icon: Mic, color: "text-cyan-500" },
  "game-commentary": { icon: Volume2, color: "text-amber-500" },
  "basketball-small-talk": { icon: MessageCircle, color: "text-lime-500" },
  "meet-stephen-curry": { icon: Star, color: "text-yellow-500" },
};

export default function SportsPage() {
  const [search, setSearch] = useState("");

  const basketballModules = basketballSubModules.filter((m) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      m.title.toLowerCase().includes(s) ||
      m.titleZh.includes(s) ||
      m.description.toLowerCase().includes(s) ||
      m.descriptionZh.includes(s)
    );
  });

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight">🏅 Sports English</h1>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
            Learn English through sports — basketball vocabulary, fan slang, game commentary, and the ultimate fan mission: Meeting Stephen Curry.
          </p>
          <p className="mt-1 text-muted-foreground max-w-3xl mx-auto text-sm">
            通过体育学习英语——篮球词汇、球迷俚语、比赛解说，以及终极球迷任务：会见斯蒂芬·库里。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search basketball modules..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="text-5xl sm:text-6xl">🏀</div>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold mb-1">Basketball</h2>
                <p className="text-muted-foreground mb-3">
                  Master basketball English: court vocabulary, fan slang, game commentary, and the ultimate fan mission — Meeting Stephen Curry.
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  掌握篮球英语：球场词汇、球迷俚语、比赛解说，以及终极球迷任务——会见斯蒂芬·库里。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{basketballSubModules.length} modules</Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Special Mission
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4">Basketball Modules</h3>
          {basketballModules.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>No modules found matching "{search}"</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {basketballModules.map((module, index) => {
                const Icon = SUB_MODULE_ICONS[module.id]?.icon || BookOpen;
                const iconColor = SUB_MODULE_ICONS[module.id]?.color || "text-gray-500";
                const href =
                  module.id === "meet-stephen-curry"
                    ? "/sports/basketball/curry-mission"
                    : `/sports/basketball/${module.id}`;
                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link href={href as any}>
                      <Card className="p-5 h-full hover:shadow-lg transition-all cursor-pointer hover:border-primary/50 group">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={cn("text-3xl", iconColor)}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors">
                              {module.emoji} {module.title}
                            </h3>
                            <p className="text-xs text-muted-foreground">{module.titleZh}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{module.descriptionZh}</p>
                        <div className="mt-3">
                          <Badge variant="outline" className="text-xs capitalize">
                            {module.type}
                          </Badge>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
