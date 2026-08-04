"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Play,
  Pause,
  Repeat,
  Languages,
  Star,
  Search,
  BookOpen,
  Volume2,
  X,
} from "lucide-react";

interface StickyToolbarProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onReplay: () => void;
  showChinese: boolean;
  onToggleChinese: () => void;
  favoritesCount: number;
  onToggleFavorites: () => void;
  onSearch: () => void;
  onDictionary: () => void;
  onClose?: () => void;
}

export function StickyToolbar({
  isPlaying,
  onPlay,
  onPause,
  onReplay,
  showChinese,
  onToggleChinese,
  favoritesCount,
  onToggleFavorites,
  onSearch,
  onDictionary,
  onClose,
}: StickyToolbarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t shadow-lg">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="flex items-center gap-1 sm:gap-2 h-14">
          {/* Audio Controls */}
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={isPlaying ? onPause : onPlay}
              className="h-11 w-11 hover:bg-muted/80"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={onReplay}
              className="h-11 w-11 hover:bg-muted/80 hidden sm:flex"
              title="Replay"
            >
              <Repeat className="w-4 h-4" />
            </Button>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-muted-foreground/20 hidden sm:block" />

          {/* Toggle Chinese */}
          <Button
            size="icon"
            variant={showChinese ? "default" : "ghost"}
            onClick={onToggleChinese}
            className={cn(
              "h-11 w-11 hidden sm:flex",
              showChinese && "bg-primary/10 text-primary hover:bg-primary/20"
            )}
            title={showChinese ? "Hide Chinese" : "Show Chinese"}
          >
            <Languages className="w-4 h-4" />
          </Button>

          {/* Favorites */}
          <Button
            size="icon"
            variant="ghost"
            onClick={onToggleFavorites}
            className="h-11 w-11 hidden sm:flex relative"
            title="Favorites"
          >
            <Star className="w-4 h-4" />
            {favoritesCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </Button>

          {/* Search */}
          <Button
            size="icon"
            variant="ghost"
            onClick={onSearch}
            className="h-11 w-11 hidden sm:flex"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </Button>

          {/* Dictionary */}
          <Button
            size="icon"
            variant="ghost"
            onClick={onDictionary}
            className="h-11 w-11 hidden sm:flex"
            title="Dictionary"
          >
            <BookOpen className="w-4 h-4" />
          </Button>

          {/* Close (when in focused mode) */}
          {onClose && (
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              className="h-11 w-11 ml-auto"
              title="Exit focused mode"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
