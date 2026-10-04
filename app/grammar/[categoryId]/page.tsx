"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { getGrammarCategory, getSubcategoriesForCategory } from "@/data/grammar";
import { GrammarBreadcrumb } from "@/components/grammar/GrammarBreadcrumb";
import { GrammarSubcategoryCard } from "@/components/grammar/GrammarSubcategoryCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Layers } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default function GrammarCategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = React.use(params);
  const categoryId = resolvedParams.categoryId;

  const category = getGrammarCategory(categoryId);
  if (!category) {
    notFound();
  }

  const subcategories = getSubcategoriesForCategory(categoryId);

  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto w-full space-y-6 sm:space-y-8">
        {/* Breadcrumb Navigation */}
        <GrammarBreadcrumb
          items={[
            {
              label: category.name,
              labelZh: category.nameZh,
            },
          ]}
        />

        {/* Category Header */}
        <div className="border-b border-border/60 pb-5 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className="text-4xl sm:text-5xl select-none"
                role="img"
                aria-label={category.name}
              >
                {category.icon}
              </span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
                  <span>{category.name}</span>
                  <span className="text-sm font-normal text-muted-foreground px-2.5 py-0.5 rounded bg-muted">
                    {category.nameZh}
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-foreground/90 mt-1 font-medium">
                  &ldquo;{category.shortExplanation}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {category.description}
                </p>
              </div>
            </div>

            <Link href="/grammar" className="hidden sm:block shrink-0">
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> All Categories
              </Button>
            </Link>
          </div>
        </div>

        {/* Subcategories: Types of {Category} */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Types of {category.name}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Explore the distinct building blocks of {category.name.toLowerCase()} in English.
              </p>
            </div>

            <span className="text-xs font-mono text-muted-foreground">
              {subcategories.length} Types
            </span>
          </div>

          {subcategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {subcategories.map((subcategory) => (
                <GrammarSubcategoryCard key={subcategory.id} subcategory={subcategory} />
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center border-dashed bg-card space-y-3">
              <BookOpen className="w-8 h-8 text-muted-foreground mx-auto opacity-50" />
              <h3 className="font-semibold text-base">Types are being indexed</h3>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                The architecture for {category.name} is configured. Check out the completed exemplar types under <Link href="/grammar/verbs" className="text-indigo-600 underline font-medium">Verbs</Link>.
              </p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
