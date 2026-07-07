"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 text-center text-white shadow-2xl shadow-indigo-500/25 sm:p-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
        >
          <Sparkles className="h-8 w-8" />
        </motion.div>

        <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
          Ready to start your English journey?
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-lg text-white/90">
          Join LinguaClass and transform how you learn English. Interactive
          lessons, real-time pronunciation feedback, and a classroom that
          feels alive.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/student">
            <Button
              size="lg"
              className="gap-2 bg-white px-8 text-lg font-bold text-indigo-600 shadow-lg hover:bg-white/90"
            >
              Start Learning Free
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
