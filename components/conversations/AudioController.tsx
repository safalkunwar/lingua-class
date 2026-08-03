"use client";

import { Button } from "@/components/ui/button";

interface AudioControllerProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  playbackRate: number;
  onPlaybackRateChange: (rate: number) => void;
  autoPlay: boolean;
  onToggleAutoPlay: () => void;
  currentLine?: number;
  totalLines: number;
}

const PLAYBACK_RATES = [0.75, 1, 1.25];

export function AudioController({
  isPlaying,
  onPlay,
  onPause,
  playbackRate,
  onPlaybackRateChange,
  autoPlay,
  onToggleAutoPlay,
  currentLine = 0,
  totalLines,
}: AudioControllerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t">
      <div className="max-w-3xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={isPlaying ? onPause : onPlay}
              className="h-12 w-12"
            >
              {isPlaying ? "⏸️" : "▶️"}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={onPlay}
              className="h-12 w-12"
            >
              🔁
            </Button>
          </div>

          <div className="flex-1">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: totalLines > 0 ? `${((currentLine + 1) / totalLines) * 100}%` : "0%" }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-muted-foreground">
                Line {currentLine + 1} / {totalLines}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {PLAYBACK_RATES.map((rate) => (
              <Button
                key={rate}
                size="sm"
                variant={playbackRate === rate ? "default" : "ghost"}
                onClick={() => onPlaybackRateChange(rate)}
                className="h-10 px-3 text-xs"
              >
                {rate}x
              </Button>
            ))}
          </div>

          <Button
            size="sm"
            variant={autoPlay ? "default" : "ghost"}
            onClick={onToggleAutoPlay}
            className="h-10 px-4 text-xs"
          >
            Auto Play: {autoPlay ? "ON" : "OFF"}
          </Button>
        </div>
      </div>
    </div>
  );
}
