"use client";

let voices: SpeechSynthesisVoice[] = [];
let voicesLoaded = false;
const voiceCache = new Map<string, SpeechSynthesisVoice | null>();

function getLangPrefix(lang: string): string {
  return lang.split("-")[0];
}

function findVoiceForLang(lang: string): SpeechSynthesisVoice | null {
  const currentVoices = window.speechSynthesis.getVoices();
  if (!currentVoices.length) return null;

  const prefix = getLangPrefix(lang);
  const normalizedLang = lang.toLowerCase();

  const candidates = currentVoices.filter((v) => {
    const vl = v.lang.replace("_", "-").toLowerCase();
    const vp = vl.split("-")[0];

    if (prefix === "zh") {
      return (
        vl === normalizedLang ||
        vl.startsWith(`${prefix}-`) ||
        vp === "zh" ||
        vp === "cmn"
      );
    }
    return vl === normalizedLang || vl.startsWith(`${prefix}-`);
  });

  if (!candidates.length) return null;

  const preferred = candidates.find((v) =>
    /google|microsoft|apple|samsung|huawei/i.test(v.name)
  );
  return preferred || candidates[0];
}

export function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];

  const load = () => {
    voices = window.speechSynthesis.getVoices();
    voicesLoaded = voices.length > 0;
    if (voicesLoaded) {
      voiceCache.clear();
    }
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

  let voice = voiceCache.get(lang) ?? null;

  if (!voice) {
    voice = findVoiceForLang(lang);
    voiceCache.set(lang, voice);
  }

  if (voice) {
    utter.voice = voice;
  }

  window.speechSynthesis.speak(utter);
}
