"use client";

let voices: SpeechSynthesisVoice[] = [];

export function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];
  voices = window.speechSynthesis.getVoices();
  return voices;
}

export function speak(text: string, lang: string): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  if (!voices.length) {
    voices = window.speechSynthesis.getVoices();
  }

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.85;

  const prefix = lang.split("-")[0];
  let voice: SpeechSynthesisVoice | null = null;

  // Try exact match first
  for (let i = 0; i < voices.length; i++) {
    const v = voices[i];
    const vl = v.lang.replace("_", "-");
    if (vl === lang || vl === lang.toLowerCase()) {
      voice = v;
      break;
    }
  }

  // Try prefix match
  if (!voice) {
    for (let j = 0; j < voices.length; j++) {
      if (voices[j].lang.startsWith(prefix)) {
        voice = voices[j];
        break;
      }
    }
  }

  if (voice) utter.voice = voice;

  // Chinese fallback via Google TTS
  if (lang.startsWith("zh") && !voice) {
    const url =
      "https://translate.google.com/translate_tts?ie=UTF-8&q=" +
      encodeURIComponent(text) +
      "&tl=zh-CN&client=tw-ob";
    const audio = new Audio(url);
    audio.play().catch(() => {
      setTimeout(() => window.speechSynthesis.speak(utter), 80);
    });
  } else {
    setTimeout(() => window.speechSynthesis.speak(utter), 80);
  }
}
