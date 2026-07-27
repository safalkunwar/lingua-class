"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IELTSTopic } from "@/types/ielts-speaking";
import { ieltsSpeakingPart1 } from "@/data/ielts-speaking-part1";
import { usePathname } from "next/navigation";

const topicColors: Record<string, string> = {
  hometown: "from-amber-400 to-orange-400",
  food: "from-red-400 to-pink-400",
  sports: "from-green-400 to-emerald-400",
  family: "from-blue-400 to-indigo-400",
  technology: "from-violet-400 to-purple-400",
  music: "from-fuchsia-400 to-pink-400",
  books: "from-cyan-400 to-blue-400",
  weather: "from-sky-400 to-teal-400",
};

export function IELSSpeakingTopicList() {
  const pathname = usePathname();
  const topics = ieltsSpeakingPart1.topics;

  return (
    <div className="flex">
      <div className="flex-1 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold">🎤 IELTS Speaking Part 1</h1>
          <p className="mt-1 text-muted-foreground">
            Master all essential topics with Cambridge-quality lessons, band upgrade examples, and native speaker tips.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge variant="secondary">A2 – B2 Level</Badge>
            <Badge variant="outline">Band 5 – Band 9</Badge>
            <Badge variant="outline">{topics.length} Topics</Badge>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/speaking/${topic.id}`}>
                <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                    <div className={`absolute inset-0 bg-gradient-to-br ${topic.color || topicColors[topic.id] || "from-indigo-400 to-purple-400"} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl">{topic.icon}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-lg font-extrabold leading-tight text-white drop-shadow-lg">
                        {topic.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="mb-3 text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {topic.cefrLevel}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {topic.estimatedTime}
                        </Badge>
                      </div>
                      <span className="text-sm font-medium text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">
                        Start →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <h2 className="text-2xl font-extrabold mb-4">🎯 Mock Tests</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Practice full Part 1 mock tests with recording, transcript, and evaluation.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => {
              const mock = topic.mockTests?.[0];
              if (!mock) return null;
              return (
                <motion.div
                  key={mock.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  <Link href={`/speaking/${topic.id}?mock=${encodeURIComponent(mock.id)}`}>
                    <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{topic.icon}</span>
                          <h3 className="text-base font-bold">{mock.title}</h3>
                        </div>
                        <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
                          Topics: {mock.questions.slice(0, 2).join(", ")}...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {Math.floor(mock.duration / 60)} min
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {mock.evaluationCriteria.length} Criteria
                            </Badge>
                          </div>
                          <span className="text-sm font-medium text-indigo-500 opacity-0 transition-opacity group-hover:opacity-100">
                            Start →
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
