"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type LanguageMode = "en" | "zh";

interface PreferencesState {
  languageMode: LanguageMode;
  theme: "light" | "dark" | "system";
  setLanguageMode: (mode: LanguageMode) => void;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      languageMode: "en",
      theme: "light",
      setLanguageMode: (mode) => set({ languageMode: mode }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "lingua-class-preferences",
    }
  )
);
