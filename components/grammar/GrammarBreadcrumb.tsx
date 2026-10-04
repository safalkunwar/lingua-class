"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  labelZh?: string;
  href?: string;
}

interface GrammarBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function GrammarBreadcrumb({ items }: GrammarBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 overflow-x-auto py-1 scrollbar-none">
      <Link
        href="/grammar"
        className="flex items-center gap-1 hover:text-foreground shrink-0 font-medium transition-colors"
      >
        <span>📐</span>
        <span className="hidden sm:inline">Grammar</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-1 sm:space-x-2 shrink-0">
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0" />
            {isLast || !item.href ? (
              <span className="font-semibold text-foreground truncate max-w-[140px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors truncate max-w-[120px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
