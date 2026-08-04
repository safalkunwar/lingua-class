"use client";

import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { conversations } from "@/data/conversations";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock } from "lucide-react";
import Link from "next/link";

type LevelFilter = "all" | "A1" | "A2" | "B1" | "B2";

const CATEGORY_ICONS: Record<string, { icon: string; label: string }> = {
  "first-meeting": { icon: "🤝", label: "Meeting" },
  "ordering-restaurant": { icon: "🍽️", label: "Restaurant" },
  "coffee-shop": { icon: "☕", label: "Coffee" },
  "coffee-shop-basics": { icon: "☕", label: "Coffee" },
  "coffee-shop-meeting": { icon: "☕", label: "Coffee" },
  "grocery-shopping": { icon: "🛒", label: "Shopping" },
  "shopping-basics": { icon: "🛍️", label: "Shopping" },
  "supermarket-shopping": { icon: "🛒", label: "Shopping" },
  "airport-checkin": { icon: "✈️", label: "Airport" },
  "taxi-ride": { icon: "🚕", label: "Taxi" },
  "public-transport": { icon: "🚌", label: "Transport" },
  "asking-directions": { icon: "🗺️", label: "Directions" },
  "weekend-plans": { icon: "📅", label: "Social" },
  "making-cancelling-plans": { icon: "📅", label: "Social" },
  "family-talk": { icon: "👨‍👩‍👧‍👦", label: "Family" },
  "meeting-neighbors": { icon: "🏘️", label: "Social" },
  "daily-small-talk": { icon: "💬", label: "Small Talk" },
  "coworkers-small-talk": { icon: "💼", label: "Office" },
  "greeting-people": { icon: "👋", label: "Greetings" },
  "phone-calls-basics": { icon: "📞", label: "Phone" },
  "asking-for-help": { icon: "🙋", label: "Help" },
  "weather-chat": { icon: "🌤️", label: "Weather" },
  "internet-social-media": { icon: "📱", label: "Digital" },
  "bank-basics": { icon: "🏦", label: "Bank" },
  "doctor-visit": { icon: "🏥", label: "Health" },
  "pharmacy": { icon: "💊", label: "Health" },
  "making-appointments": { icon: "📆", label: "Appointments" },
  "hotel-checkin": { icon: "🏨", label: "Hotel" },
  "post-office": { icon: "📮", label: "Post Office" },
  "at-the-gym": { icon: "🏋️", label: "Gym" },
  "at-the-gym-beginner": { icon: "🏋️", label: "Gym" },
  "at-laundromat": { icon: "🧺", label: "Laundromat" },
  "pet-store": { icon: "🐾", label: "Pet Store" },
  "library-visit": { icon: "📚", label: "Library" },
  "hair-salon": { icon: "💇", label: "Salon" },
};

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

  const selectedTopic = selectedCategory !== "all"
    ? conversations.find((c) => c.id === selectedCategory)
    : null;

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col min-h-screen">
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

        {/* Search and Filters - Collapsible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <details className="group">
            <summary className="list-none flex items-center justify-center cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
              <span className="group-open:rotate-90 transition-transform mr-1">▶</span>
              Search & Filters
            </summary>
            <div className="mt-4 space-y-4">
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
            </div>
          </details>
        </motion.div>

        {/* Category Chips - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:flex-wrap">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cnChip(selectedCategory === "all")}
            >
              📋 All
            </button>
            {conversations.map((topic) => {
              const cat = CATEGORY_ICONS[topic.id] || { icon: topic.emoji, label: topic.title };
              const isSelected = selectedCategory === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedCategory(topic.id)}
                  className={cnChip(isSelected)}
                >
                  <span>{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Category Preview or Grid */}
        {selectedTopic ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800 bg-card overflow-hidden">
              <Link href={`/conversations/${selectedTopic.id}`}>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl sm:text-6xl">{selectedTopic.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold mb-1">{selectedTopic.title}</h3>
                      <p className="text-muted-foreground mb-3">{selectedTopic.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{selectedTopic.level}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {selectedTopic.estimatedTime}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {selectedTopic.conversation.length} lines
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory("all")}
              className="mt-3"
            >
              ← Show all categories
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {filteredConversations.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No conversations found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredConversations.map((topic, index) => {
                  const cat = CATEGORY_ICONS[topic.id] || { icon: topic.emoji, label: topic.title };
                  return (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Link href={`/conversations/${topic.id}`}>
                        <div className="h-full rounded-xl border-2 hover:border-indigo-200 dark:hover:border-indigo-800 bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group">
                          <div className="p-5">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-3xl group-hover:scale-110 transition-transform">
                                {topic.emoji}
                              </span>
                              <div className="min-w-0 flex-1">
                                <h3 className="font-bold text-base leading-tight truncate">
                                  {topic.title}
                                </h3>
                                <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                  {cat.label}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                              {topic.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              <Badge variant="secondary" className="text-xs">
                                {topic.level}
                              </Badge>
                              <Badge variant="outline" className="text-xs flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {topic.estimatedTime}
                              </Badge>
                              <Badge variant="outline" className="text-xs flex items-center gap-1">
                                <MessageCircle className="w-3 h-3" />
                                {topic.conversation.length}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function cnChip(isSelected: boolean): string {
  return [
    "shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full border text-sm font-medium transition-all cursor-pointer",
    isSelected
      ? "bg-indigo-50 border-indigo-300 text-indigo-700 dark:bg-indigo-950/30 dark:border-indigo-700 dark:text-indigo-300"
      : "bg-card hover:bg-muted border-border",
  ].join(" ");
}
