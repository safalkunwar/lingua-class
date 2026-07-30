"use client";

import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { conversations } from "@/data/conversations";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";

type LevelFilter = "all" | "A1" | "A2" | "B1" | "B2";

export default function ConversationsPage() {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const cats = new Set(conversations.map((c) => c.level));
    return Array.from(cats).sort();
  }, []);

  const filteredConversations = useMemo(() => {
    return conversations.filter((c) => {
      const matchesSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = levelFilter === "all" || c.level === levelFilter;
      return matchesSearch && matchesLevel;
    });
  }, [search, levelFilter]);

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8 flex flex-col min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight">💬 Conversations</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Real-life dialogues to help you speak naturally in everyday situations
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {conversations.length} topics
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              {filteredConversations.reduce((sum, c) => sum + c.conversation.length, 0)} dialogues
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex gap-2 flex-wrap justify-center">
              {(["all", ...categories] as LevelFilter[]).map((level) => (
                <Button
                  key={level}
                  onClick={() => setLevelFilter(level)}
                  variant={levelFilter === level ? "default" : "outline"}
                  size="sm"
                  className="capitalize"
                >
                  {level === "all" ? "All" : level}
                </Button>
              ))}
            </div>
            <div className="sm:max-w-md w-full">
              <Input
                placeholder="Search conversations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        {filteredConversations.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 flex-1 flex flex-col items-center justify-center"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No conversations found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter.</p>
          </motion.div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredConversations.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/conversations/${topic.id}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group border-2 hover:border-indigo-200">
                    <div className="p-6 text-center">
                      <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                        {topic.emoji}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {topic.description}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {topic.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {topic.estimatedTime}
                        </Badge>
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {topic.conversation.length} lines
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
