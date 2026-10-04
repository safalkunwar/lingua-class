"use client";

import { useState } from "react";
import { GrammarTeacherGuide, TeacherTimingSchedule } from "@/types/grammar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Clock,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  MessageSquare,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

interface GrammarTeacherPanelProps {
  guide?: GrammarTeacherGuide;
  lessonTitle: string;
}

const DEFAULT_TIMING_SCHEDULE: TeacherTimingSchedule[] = [
  { phase: "Warm-up", duration: "0–5 min", activity: "Elicit action verbs from students using physical gestures and classroom realia." },
  { phase: "Concept Explanation", duration: "5–15 min", activity: "Present Subject-Verb-Object engine; explain physical action vs mental state." },
  { phase: "Guided Examples", duration: "15–25 min", activity: "Analyze interactive sentences together; model third-person singular agreements." },
  { phase: "Controlled Practice", duration: "25–35 min", activity: "Students complete sentence reordering and fill-in-the-blank drills individually." },
  { phase: "Real Scenario", duration: "35–45 min", activity: "Roleplay workplace dialogue; check verb inflection in authentic context." },
  { phase: "Speaking Activity", duration: "45–55 min", activity: "Pair drill: Ask student A what student B does every morning (oral practice)." },
  { phase: "Review & Wrap-up", duration: "55–60 min", activity: "Exit ticket: Ask 3 CCQs and assign 3-sentence daily routine writing homework." },
];

export function GrammarTeacherPanel({ guide, lessonTitle }: GrammarTeacherPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const timing = guide?.timingSchedule || DEFAULT_TIMING_SCHEDULE;
  const whatToExplain = guide?.whatToExplain || [
    "Clarify that action verbs depict concrete physical movement, while state verbs express condition/feeling.",
    "Stress that English requires a clear verb in every clause — unlike Chinese where adjectives can act as predicates (e.g. 她很忙 vs She is busy).",
    "Emphasize the third-person singular -s/-es rule when the subject is He, She, It, or a singular noun.",
  ];
  const questionsToAsk = guide?.questionsToAsk || guide?.conceptCheckQuestions || [
    "Is 'run' an action you can physically see or perform? (Yes)",
    "Can you say 'She eat apples' or must you say 'She eats apples'? Why? (Eats, because She is 3rd person singular)",
    "Can 'like' be used in continuous tense? Can I say 'I am liking coffee'? (No, like is a state verb)",
  ];
  const commonConfusion = guide?.commonConfusion || [
    "Chinese L1 omission of verb: 'He very tall' instead of 'He is tall'.",
    "Adding double verbs: 'I am agree' instead of 'I agree'.",
    "Dropping the 3rd person -s: 'My father work in Shanghai' instead of 'works'.",
  ];
  const extraExamples = guide?.extraExamples || [
    "She writes emails to clients every afternoon.",
    "The engineering team designs robust software architectures.",
    "We discuss project milestones during the Monday standup.",
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="inline-flex items-center justify-center rounded-md border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 h-8 px-2.5 text-xs font-medium gap-1.5 transition-colors cursor-pointer">
        <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        <span className="hidden sm:inline">Teacher Mode</span>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto p-5 sm:p-6 space-y-6">
        <SheetHeader className="border-b border-border pb-4">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            Teacher Pedagogical Dossier
          </div>
          <SheetTitle className="text-xl font-bold">{lessonTitle}</SheetTitle>
          <SheetDescription className="text-xs">
            Complete lesson roadmap, concept checking questions (CCQs), and Chinese learner pitfalls.
          </SheetDescription>
        </SheetHeader>

        {/* 1. Teaching Objective */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
            Teaching Objective
          </h4>
          <p className="text-sm font-medium text-foreground bg-muted/40 p-3 rounded-lg border border-border/60">
            {guide?.teachingObjective ||
              "Students will accurately identify and deploy action verbs in simple present sentences with 100% subject-verb agreement harmony."}
          </p>
        </div>

        {/* 2. Suggested Timing Schedule (45–60 mins) */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-500" />
            Suggested Timing Schedule (60 min)
          </h4>
          <div className="space-y-1.5">
            {timing.map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg border bg-card text-xs flex items-start justify-between gap-3"
              >
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground">{item.phase}</span>
                    <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold px-1.5 py-0.2 rounded bg-indigo-50 dark:bg-indigo-950/40">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. What to Explain */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            What to Explain
          </h4>
          <ul className="space-y-1.5 text-xs text-foreground/90 pl-1">
            {whatToExplain.map((exp, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span>{exp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Questions to Ask Students (CCQs) */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
            Questions to Ask Students (CCQs)
          </h4>
          <div className="space-y-1.5">
            {questionsToAsk.map((q, i) => (
              <div key={i} className="p-2.5 rounded bg-muted/40 text-xs border border-border/40">
                <span className="font-semibold text-foreground">Q{i + 1}: </span>
                <span className="text-foreground/90">{q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Common Student Confusion (Chinese L1 Pitfalls) */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            Common Student Confusion (Chinese L1 Pitfalls)
          </h4>
          <div className="space-y-1.5">
            {commonConfusion.map((conf, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg border border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20 text-xs text-rose-900 dark:text-rose-200"
              >
                {conf}
              </div>
            ))}
          </div>
        </div>

        {/* 6. Extra Examples & Speaking Activity */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
            Speaking Activity & Extra Drill
          </h4>
          <div className="p-3 rounded-lg bg-card border space-y-2 text-xs">
            <p className="font-semibold text-foreground">
              {guide?.speakingActivity || "Fast-fire routine drill: In pairs, learner A says a person (e.g. 'Elon Musk'), and learner B must name 2 actions they perform every day within 5 seconds."}
            </p>
            <div className="pt-2 border-t border-border/40 text-[11px] text-muted-foreground space-y-1">
              <span className="font-bold text-foreground">Extra board examples:</span>
              {extraExamples.map((ex, i) => (
                <p key={i} className="font-mono text-foreground/80">
                  - {ex}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 7. Homework */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
            Assigned Homework
          </h4>
          <div className="p-3 rounded-lg bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs text-emerald-950 dark:text-emerald-200">
            {guide?.homework ||
              "Write 5 sentences about your daily workplace routine using 5 different action verbs. Highlight the subject, verb, and object in different colors."}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
