"use client";

let voices: SpeechSynthesisVoice[] = [];
let voicesLoaded = false;

export function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];

  const load = () => {
    voices = window.speechSynthesis.getVoices();
    voicesLoaded = voices.length > 0;
  };

  load();

  if (!voicesLoaded) {
    window.speechSynthesis.addEventListener("voiceschanged", load, { once: true });
  }

  return voices;
}

export function speak(text: string, lang: string): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  if (!voicesLoaded || !voices.length) {
    loadVoices();
  }

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.85;

  const prefix = lang.split("-")[0];
  let voice: SpeechSynthesisVoice | null = null;

  const tryFindVoice = (): SpeechSynthesisVoice | null => {
    const currentVoices = window.speechSynthesis.getVoices();
    if (!currentVoices.length) return null;

    const candidates = currentVoices.filter((v) => {
      const vl = v.lang.replace("_", "-").toLowerCase();
      const vp = vl.split("-")[0];
      if (prefix === "zh") {
        return (
          vl === lang ||
          vl.startsWith(`${prefix}-`) ||
          vp === "zh" ||
          vp === "cmn"
        );
      }
      return vl === lang || vl.startsWith(`${prefix}-`);
    });

    return candidates[0] || null;
  };

  voice = tryFindVoice();

  if (voice) {
    utter.voice = voice;
  }

  window.speechSynthesis.speak(utter);
}
