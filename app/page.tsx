"use client";

import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { CTA } from "@/components/landing/cta";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}
