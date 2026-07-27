"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BookOpen } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const floatingCards = [
    { text: "Hello 你好", x: "10%", y: "20%", delay: 0 },
    { text: "Thank you 谢谢", x: "75%", y: "15%", delay: 0.5 },
    { text: "Restaurant 餐厅", x: "80%", y: "70%", delay: 1 },
    { text: "Happy 开心", x: "5%", y: "75%", delay: 1.5 },
    { text: "Welcome 欢迎", x: "45%", y: "80%", delay: 0.8 },
  ];

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/30 dark:via-background dark:to-purple-950/20" />

      {/* Floating vocabulary cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute z-0 hidden rounded-2xl border border-indigo-100 bg-white/80 px-4 py-2.5 text-sm font-medium text-indigo-700 shadow-lg backdrop-blur-sm dark:border-indigo-500/20 dark:bg-indigo-950/50 dark:text-indigo-300 md:block"
          style={{ left: card.x, top: card.y }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: [0, 1, 0.8, 1], scale: 1, y: [20, -10, -5, -10] }}
          transition={{
            duration: 4,
            delay: card.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {card.text}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
        >
          <span className="text-lg">🎓</span>
          Designed for Chinese adult learners
        </motion.div>

        <h1
          ref={titleRef}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          style={{ opacity: 0 }}
        >
          Learn Practical English
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            for Everyday Life
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          style={{ opacity: 0 }}
        >
          Interactive lessons, vocabulary building, pronunciation practice, and
          classroom tools — everything you need with your English-speaking
          teacher.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/student">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 px-8 text-lg shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              Start Learning
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/teacher">
            <Button size="lg" variant="outline" className="gap-2 px-8 text-lg">
              <Play className="h-5 w-5" />
              Teacher Demo
            </Button>
          </Link>
          <Link href="/vocabulary">
            <Button size="lg" variant="ghost" className="gap-2 px-8 text-lg">
              <BookOpen className="h-5 w-5" />
              Explore Curriculum
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
