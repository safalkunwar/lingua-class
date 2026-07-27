"use client";

import { useEffect, useCallback } from "react";
import { loadVoices, speak } from "@/lib/speech";

export function useSpeechSynthesis() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        loadVoices();
      };
    }
  }, []);

  const speakEnglish = useCallback((text: string) => {
    speak(text, "en-US");
  }, []);

  const speakChinese = useCallback((text: string) => {
    speak(text, "zh-CN");
  }, []);

  return { speakEnglish, speakChinese, speak };
}
