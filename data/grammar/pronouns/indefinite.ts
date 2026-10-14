import { GrammarLesson } from "@/types/grammar";

export const indefiniteLesson: GrammarLesson = {
  id: "indefinite-foundation",
  subcategoryId: "indefinite",
  categoryId: "pronouns",
  title: "Indefinite Pronouns: someone, anything, nothing",
  titleZh: "不定代词：someone, anything, nothing",
  subtitle: "Refer to non-specific people or things",
  level: "A2",
  estimatedMinutes: 30,
  lessonIndex: 2,
  totalLessonsInSubcategory: 6,
  description: "Learn to use indefinite pronouns for non-specific references.",
  descriptionZh: "学习使用不定代词进行非特指。",
  objectives: [
    "use someone/anyone/no one for people",
    "use something/anything/nothing for things",
    "use some/any/no/much/many for quantities",
    "distinguish between affirmative, negative, and questions",
    "avoid common mistakes with double negatives",
    "use indefinite pronouns in subject and object positions",
  ],
  teacherGuide: {
    teachingObjective:
      "Students will learn that indefinite pronouns refer to people or things without specifying exactly which ones. The choice depends on affirmative, negative, or question contexts.",
    whatToExplain: [
      "Affirmative: someone, something, some\n  Negative: no one, nothing, none\n  Questions: anyone, anything, any\n  Much/many for quantities\n\n  Someone called. (affirmative - person)\n  Did anyone call? (question - person)\n  No one called. (negative - person)\n\n  I want something. (affirmative - thing)\n  Do you want anything? (question - thing)\n  I want nothing. (negative - thing)\n\n  I have some money. (affirmative - quantity)\n  Do you have any money? (question - quantity)\n  I have no money. (negative - quantity)\n\n  Much = uncountable (much water)\n  Many = countable (many books)",
    ],
    questionsToAsk: [
      "Should I say 'someone' or 'anyone' in a question?",
      "Is it 'something' or 'anything' in a negative sentence?",
      "When do I use 'much' vs 'many'?",
      "Is 'no one' the same as 'nobody'?",
    ],
    commonConfusion: [
      "Using 'any' in affirmative sentences → WRONG",
      "Double negatives: 'I don't want nothing' → WRONG",
      "Using 'much' with countable nouns → WRONG",
      "Confusing 'some' and 'any' in questions",
    ],
    timingSchedule: [
      { phase: "Introduce some/any/no", duration: "0–7 min", activity: "Affirmative/negative/question contexts" },
      { phase: "People: someone/anyone/no one", duration: "7–14 min", activity: "Someone called, Did anyone call?" },
      { phase: "Things: something/anything/nothing", duration: "14–20 min", activity: "I want something, Do you want anything?" },
      { phase: "Quantities: some/any/no/much/many", duration: "20–25 min", activity: "I have some money, Do you have any money?" },
      { phase: "Speaking practice", duration: "25–30 min", activity: "Students create sentences with each type" },
    ],
  },
  homework: {
    title: "Indefinite Pronouns Homework",
    titleZh: "不定代词作业",
    tasks: [
      {
        type: "writing",
        instruction: "Write 15 sentences using indefinite pronouns: 5 affirmative, 5 questions, 5 negative.",
        instructionZh: "写15个句子使用不定代词：5个肯定句，5个疑问句，5个否定句。",
        sampleAnswer: "Someone called me. Did anyone call? No one called. I want something. Do you want anything? I want nothing. I have some money. Do you have any money? I have no money.",
      },
      {
        type: "speaking",
        instruction: "Record 45 seconds asking about people and things using indefinite pronouns in questions.",
        instructionZh: "录制45秒用不定代词询问人和事物。",
        sampleAnswer: "Did anyone see my keys? Is there anything to eat? Does anyone want coffee?",
      },
    ],
  },
  slides: [
    {
      id: "slide-1-welcome",
      slideNumber: 1,
      type: "TITLE",
      sectionTitle: "1. Welcome",
      title: "Indefinite Pronouns: someone, anything, nothing",
      titleZh: "不定代词：someone, anything, nothing",
      content:
        "Indefinite pronouns refer to people or things without specifying exactly which ones. The choice depends on whether the sentence is affirmative, negative, or a question.",
      contentZh:
        "不定代词指代人或事物但不具体说明是哪些。选择取决于句子是肯定句、否定句还是疑问句。",
      keyPoints: [
        "Affirmative: someone, something, some",
        "Negative: no one, nothing, none",
        "Questions: anyone, anything, any",
        "Much/many for quantities",
      ],
    },
    {
      id: "slide-2-people",
      slideNumber: 2,
      type: "RULE",
      sectionTitle: "2. People Pronouns",
      title: "Someone/Anyone/No One",
      titleZh: "Someone/Anyone/No One",
      content:
        "Affirmative: someone\n\n  Someone called me.\n  Someone left their bag.\n\n  Questions: anyone\n\n  Did anyone call you?\n  Is anyone here?\n\n  Negative: no one (same as nobody)\n\n  No one called me.\n  No one left their bag.\n\n  NOT: I don't want nobody. (double negative - WRONG)",
      contentZh:
        "肯定句：someone\n\n  Someone called me.（有人给我打电话）\n  Someone left their bag.（有人落下了包）\n\n  疑问句：anyone\n\n  Did anyone call you?（有人给你打电话吗？）\n  Is anyone here?（这里有人吗？）\n\n  否定句：no one（与nobody相同）\n\n  No one called me.（没有人给我打电话）\n  No one left their bag.（没有人落下包）\n\n  错误：I don't want nobody.（双重否定 - WRONG）",
    },
    {
      id: "slide-3-things",
      slideNumber: 3,
      type: "RULE",
      sectionTitle: "3. Things Pronouns",
      title: "Something/Anything/Nothing",
      titleZh: "Something/Anything/Nothing",
      content:
        "Affirmative: something\n\n  I want something to eat.\n  I need something to wear.\n\n  Questions: anything\n\n  Do you want anything to drink?\n  Is there anything in the fridge?\n\n  Negative: nothing\n\n  I want nothing to eat.\n  There is nothing in the fridge.\n\n  NOT: I don't want nothing. (double negative - WRONG)",
      contentZh:
        "肯定句：something\n\n  I want something to eat.（我想吃点东西）\n  I need something to wear.（我需要穿点东西）\n\n  疑问句：anything\n\n  Do you want anything to drink?（你想喝点东西吗？）\n  Is there anything in the fridge?（冰箱里有东西吗？）\n\n  否定句：nothing\n\n  I want nothing to eat.（我不想吃东西）\n  There is nothing in the fridge.（冰箱里什么都没有）\n\n  错误：I don't want nothing.（双重否定 - WRONG）",
    },
    {
      id: "slide-4-quantities",
      slideNumber: 4,
      type: "RULE",
      sectionTitle: "4. Quantity Pronouns",
      title: "Some/Any/No/Much/Many",
      titleZh: "Some/Any/No/Much/Many",
      content:
        "Affirmative: some\n\n  I have some money.\n  I want some water.\n\n  Questions: any\n\n  Do you have any money?\n  Do you want any water?\n\n  Negative: no\n\n  I have no money.\n  I want no water.\n\n  Much = uncountable\n  Many = countable\n\n  I don't have much water. (uncountable)\n  I don't have many books. (countable)\n\n  NOT: I don't have much books. (WRONG - countable)",
      contentZh:
        "肯定句：some\n\n  I have some money.（我有一些钱）\n  I want some water.（我想要一些水）\n\n  疑问句：any\n\n  Do you have any money?（你有钱吗？）\n  Do you want any water?（你想要水吗？）\n\n  否定句：no\n\n  I have no money.（我没有钱）\n  I want no water.（我不想要水）\n\n  Much = 不可数\n  Many = 可数\n\n  I don't have much water.（我不太多水 - 不可数）\n  I don't have many books。（我不太多书 - 可数）\n\n  错误：I don't have much books.（错误 - books是可数名词）",
    },
    {
      id: "slide-5-common-mistake",
      slideNumber: 5,
      type: "COMMON_MISTAKE",
      sectionTitle: "5. Common Mistakes",
      title: "5 Mistakes with Indefinite Pronouns",
      titleZh: "不定代词的5个常见错误",
      mistakes: [
        {
          wrong: "I don't want nothing.",
          right: "I want nothing. or I don't want anything.",
          explanation: "Double negative - in English, two negatives make a positive.",
          explanationZh: "双重否定 - 在英语中，两个否定构成肯定。",
          why: "Direct translation from Chinese where double negatives are acceptable.",
        },
        {
          wrong: "Do you have some money?",
          right: "Do you have any money?",
          explanation: "In questions, use 'any', not 'some'.",
          explanationZh: "在疑问句中，用'any'，不用'some'。",
          why: "Overgeneralizing 'some' from affirmative sentences.",
        },
        {
          wrong: "I have much books.",
          right: "I have many books.",
          explanation: "Much is for uncountable, many for countable.",
          explanationZh: "Much用于不可数名词，many用于可数名词。",
          why: "Confusing countable and uncountable nouns.",
        },
        {
          wrong: "Anyone called me.",
          right: "Someone called me.",
          explanation: "Affirmative sentences use 'someone', not 'anyone'.",
          explanationZh: "肯定句用'someone'，不用'anyone'。",
          why: "Students overgeneralize from questions to affirmatives.",
        },
        {
          wrong: "I want something to drink nothing.",
          right: "I want nothing to drink. or I don't want anything to drink.",
          explanation: "Either use 'nothing' or 'don't want anything' - not both.",
          explanationZh: "要么用'nothing'，要么用'don't want anything' - 不能同时用。",
          why: "Mixing negative forms incorrectly.",
        },
      ],
    },
    {
      id: "slide-6-real-life",
      slideNumber: 6,
      type: "REAL_LIFE_SCENARIO",
      sectionTitle: "6. Real Life Scenario",
      title: "At the Party",
      titleZh: "在聚会中",
      scenario: {
        context: "People at a party asking about food, drinks, and other guests.",
        contextZh: "人们在聚会中询问食物、饮料和其他客人。",
        dialogue: [
          {
            speaker: "Person 1",
            en: "Is anyone here from Japan?",
            zh: "这里有人来自日本吗？",
            isTargetGrammar: true,
          },
          {
            speaker: "Person 2",
            en: "No one is from Japan, but someone is from Korea.",
            zh: "没有人来自日本，但有人来自韩国。",
            isTargetGrammar: true,
          },
          {
            speaker: "Person 3",
            en: "Do you want something to eat?",
            zh: "你想吃点东西吗？",
            isTargetGrammar: true,
          },
          {
            speaker: "Person 4",
            en: "I want nothing. I'm full.",
            zh: "我不想吃东西。我饱了。",
            isTargetGrammar: true,
          },
          {
            speaker: "Person 5",
            en: "Is there anything to drink?",
            zh: "有东西喝吗？",
            isTargetGrammar: true,
          },
          {
            speaker: "Person 6",
            en: "There's something to drink in the fridge.",
            zh: "冰箱里有东西喝。",
            isTargetGrammar: true,
          },
        ],
        task: "Notice: 'anyone' (question), 'no one' (negative), 'someone' (affirmative), 'something' (affirmative/question), 'nothing' (negative), 'anything' (question).",
        taskZh: "注意：'anyyone'（疑问句），'no one'（否定句），'someone'（肯定句），'something'（肯定/疑问句），'nothing'（否定句），'anything'（疑问句）。",
      },
    },
    {
      id: "slide-7-speaking",
      slideNumber: 7,
      type: "SPEAKING_DRILL",
      sectionTitle: "7. Speaking Practice",
      title: "Asking About Availability",
      titleZh: "询问可用性",
      speakingDrill: {
        prompt: "Record 30 seconds asking about food, drinks, and people using indefinite pronouns.",
        targetSentence:
          "Is anyone hungry? Is there anything to eat? Do you want something to drink?",
        targetSentenceZh: "有人饿吗？有东西吃吗？你想喝点东西吗？",
        tips: "Use 'anyone' for people questions, 'anything' for things questions, 'something' for affirmative offers.",
      },
    },
    {
      id: "slide-8-quiz",
      slideNumber: 8,
      type: "MULTIPLE_CHOICE",
      sectionTitle: "8. Quick Quiz",
      title: "Choose the Correct Sentence",
      titleZh: "选择正确的句子",
      question: {
        question: "Someone called / Anyone called",
        questionZh: "Someone called / Anyone called",
        options: ["a. Someone called", "b. Anyone called", "c. Both are correct"],
        correctIndex: 0,
        explanation: "Someone refers to a person we know; Anyone refers to any person.",
        explanationZh: "Someone 指我们知道的人；Anyone 指任何一个人。",
        xpReward: 10,
      },
    },
    {
      id: "slide-9-challenge",
      slideNumber: 9,
      type: "CHALLENGE",
      sectionTitle: "9. Week Challenge",
      title: "20-Sentence Challenge",
      titleZh: "20句话挑战",
      content: "Write 20 sentences using indefinite pronouns:\n\n- 5 affirmative (someone, something, some)\n- 5 questions (anyone, anything, any)\n- 5 negative (no one, nothing, no)\n- 5 quantity (much/many)\n\nEach sentence must be grammatically correct and meaningful.",
      contentZh:
        "写20个句子使用不定代词：\n\n- 5个肯定句（someone, something, some）\n- 5个疑问句（anyone, anything, any）\n- 5个否定句（no one, nothing, no）\n- 5个量词（much/many）\n\n每句话必须在语法上正确且有意义。",
    },
  ],
};