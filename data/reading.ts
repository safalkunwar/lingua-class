import { ReadingPassage, ReadingCategory, ReadingLevel } from "@/types/reading";

export const READING_CATEGORIES: { id: ReadingCategory; title: string; description: string; emoji: string }[] = [
  { id: "deep-reading", title: "Deep Reading", description: "Philosophical and reflective passages about the human condition.", emoji: "📖" },
  { id: "ideas-human-nature", title: "Ideas & Human Nature", description: "Passages about ambition, fear, freedom, regret, discipline, and identity.", emoji: "🧠" },
  { id: "life-society", title: "Life & Society", description: "Modern life, technology, work, relationships, culture, and aging.", emoji: "🌍" },
  { id: "professional-business", title: "Professional & Business", description: "Leadership, decision-making, productivity, and workplace culture.", emoji: "💼" },
  { id: "literature-inspired", title: "Literature-Inspired", description: "Original passages inspired by literary and philosophical themes.", emoji: "📚" },
  { id: "modern-issues", title: "Modern Issues", description: "Short nonfiction about contemporary challenges and opportunities.", emoji: "📰" },
  { id: "science-psychology", title: "Science & Psychology", description: "Habits, memory, motivation, cognitive bias, and human behavior.", emoji: "🧪" },
];

export const READING_LEVELS: { level: ReadingLevel; label: string; description: string; color: string }[] = [
  { level: "A1", label: "Beginner", description: "100–180 words. Basic structure and simple inference.", color: "text-green-600" },
  { level: "A2", label: "Elementary", description: "180–250 words. Common vocabulary and main idea.", color: "text-emerald-600" },
  { level: "B1", label: "Intermediate", description: "250–350 words. Contextual vocab and author's purpose.", color: "text-blue-600" },
  { level: "B2", label: "Upper Intermediate", description: "350–500 words. Abstract ideas and implied meaning.", color: "text-indigo-600" },
  { level: "C1", label: "Advanced", description: "500–700 words. Nuanced arguments and rhetoric.", color: "text-purple-600" },
  { level: "C2", label: "Mastery", description: "700+ words. Sophisticated vocabulary and philosophical reasoning.", color: "text-rose-600" },
];

export const readingPassages: ReadingPassage[] = [
  {
    id: "ordinary-day",
    title: "An Ordinary Day",
    author: "LinguaClass Original",
    source: "Original",
    category: "deep-reading",
    level: "B2",
    theme: "mortality",
    estimatedMinutes: 4,
    wordCount: 142,
    passage:
      "Death rarely announces itself. It does not always arrive after a dramatic farewell or at the end of a meaningful chapter. Sometimes it comes on an ordinary morning, while someone is still making plans for next month, answering messages, postponing a difficult conversation, or telling themselves that there will always be more time.\n\nThe strange thing about life is that we know it will end, yet we behave as though our own ending belongs to some distant future. We postpone happiness until the next holiday. We postpone courage until we feel ready. We postpone important conversations because tomorrow seems guaranteed.\n\nBut tomorrow has never signed a contract with us.\n\nPerhaps remembering that life is temporary does not make life darker. Perhaps it makes ordinary moments more valuable. The cup of tea. The conversation. The walk home. The person sitting beside you. None of these moments look extraordinary while they are happening. That may be precisely why they matter.",
    translation:
      "死亡很少会提前宣告自己。它并不总是在一场戏剧性的告别之后到来，也不总是在一个有意义的章节结束时降临。有时它就出现在一个普通的早晨，而某人还在为下个月做计划、回复消息、推迟一场艰难的对话，或者告诉自己总会有更多的时间。\n\n关于生命，奇怪的是：我们知道它终将结束，却表现得好像自己的结局只属于某个遥远的未来。我们把幸福推迟到下一个假期。我们把勇气推迟到我们感觉准备好的那一天。我们把重要的对话推迟，因为明天似乎是理所当然的。\n\n但明天从未与我们签过任何合同。\n\n也许记住生命是短暂的并不会让生命变得更黑暗。也许它会让平凡的瞬间变得更加珍贵。那杯茶。那段对话。回家的路。坐在你身边的人。这些时刻在发生时看起来并不非凡。而这恰恰可能就是它们重要的原因。",
    vocabulary: [
      { word: "announce", meaning: "to make something known publicly or officially", chinese: "宣布；告知", partOfSpeech: "verb", example: "The company announced a new policy.", exampleChinese: "公司宣布了一项新政策。", collocations: ["announce a decision", "announce a plan", "announce a change"] },
      { word: "postpone", meaning: "to delay something until a later time", chinese: "推迟；延期", partOfSpeech: "verb", example: "We decided to postpone the meeting.", exampleChinese: "我们决定推迟会议。", collocations: ["postpone a meeting", "postpone a decision", "postpone a trip"] },
      { word: "dramatic", meaning: "sudden, exciting, or surprising", chinese: "戏剧性的；引人注目的", partOfSpeech: "adjective", example: "There was a dramatic change in her behavior.", exampleChinese: "她的行为发生了戏剧性的变化。", collocations: ["dramatic change", "dramatic increase", "dramatic effect"] },
      { word: "temporary", meaning: "lasting for a short time only", chinese: "临时的；暂时的", partOfSpeech: "adjective", example: "The job is only temporary.", exampleChinese: "这份工作只是临时的。", collocations: ["temporary solution", "temporary job", "temporary accommodation"] },
      { word: "ordinary", meaning: "normal or usual, not special or unusual", chinese: "普通的；平凡的", partOfSpeech: "adjective", example: "It was an ordinary day.", exampleChinese: "那是普通的一天。", collocations: ["ordinary day", "ordinary people", "ordinary life"] },
    ],
    collocations: [
      { phrase: "postpone happiness", meaning: "delay feeling happy until a future moment", chinese: "推迟幸福", example: "We postpone happiness until the next holiday." },
      { phrase: "postpone courage", meaning: "delay being brave or taking action", chinese: "推迟勇气", example: "We postpone courage until we feel ready." },
      { phrase: "make plans", meaning: "decide what you will do in the future", chinese: "制定计划", example: "She is making plans for next month." },
      { phrase: "answer messages", meaning: "reply to texts, emails, or calls", chinese: "回复消息", example: "He spent the morning answering messages." },
      { phrase: "sign a contract", meaning: "formally agree to something in writing", chinese: "签署合同", example: "Tomorrow has never signed a contract with us." },
    ],
    grammarPoints: [
      { title: "Present Simple for Universal Truths", explanation: "The author uses present simple ('Death rarely announces itself') to make a statement feel like a timeless, universal fact rather than a specific event.", example: "The sun rises in the east.", chineseExplanation: "作者使用一般现在时，让陈述听起来像是 timeless、普遍的事实，而不是某个特定事件。" },
      { title: "Modal Verb: Perhaps", explanation: "'Perhaps' softens the statement and shows uncertainty or open-mindedness. It invites the reader to consider an idea rather than forcing a conclusion.", example: "Perhaps the rain will stop soon.", chineseExplanation: "'Perhaps' 弱化了陈述的语气，表示不确定或开放的态度。它邀请读者去思考一个观点，而不是强迫得出一个结论。" },
      { title: "Parallel Structure", explanation: "'We postpone happiness... We postpone courage... We postpone important conversations...' The repetition creates rhythm and emphasizes the pattern of delay.", example: "She likes reading, writing, and painting.", chineseExplanation: "排比结构通过重复 'We postpone...' 创造节奏感，并强调拖延的模式。" },
    ],
    questions: [
      { id: "q1", type: "main-idea", question: "What is the passage mainly about?", chinese: "这篇文章主要讲了什么？", options: ["How to plan for the future", "How people avoid thinking about death", "Why tomorrow is unreliable", "The importance of ordinary moments"], correctAnswer: 3, explanation: "The passage explores how awareness of life's temporary nature can make ordinary moments more valuable.", chineseExplanation: "文章探讨了意识到生命短暂如何让平凡的时刻变得更加珍贵。" },
      { id: "q2", type: "inference", question: "What can we infer from the author's statement 'tomorrow has never signed a contract with us'?", chinese: "从作者所说的'明天从未与我们签过任何合同'可以推断出什么？", options: ["Contracts are unreliable", "The future is not guaranteed", "We should sign more contracts", "Tomorrow is a legal concept"], correctAnswer: 1, explanation: "This metaphor suggests that the future is uncertain and we should not assume it will arrive as expected.", chineseExplanation: "这个隐喻表明未来是不确定的，我们不应该假设它会如期而至。" },
      { id: "q3", type: "vocabulary-in-context", question: "What does 'postpone' mean in this passage?", chinese: "在这篇文章中，'postpone' 是什么意思？", options: ["Cancel", "Delay until later", "Accept immediately", "Forget about"], correctAnswer: 1, explanation: "To postpone means to delay something until a later time.", chineseExplanation: "Postpone 意味着将某事推迟到稍后的时间。" },
      { id: "q4", type: "tone", question: "What is the author's tone in this passage?", chinese: "作者在这篇文章中的语气是什么？", options: ["Angry", "Sarcastic", "Reflective", "Excited"], correctAnswer: 2, explanation: "The author reflects thoughtfully on how people think about time and mortality, without strong emotion or judgment.", chineseExplanation: "作者 thoughtfully 地反思人们如何思考时间和死亡，没有强烈的情感或评判。" },
      { id: "q5", type: "authors-purpose", question: "Why does the author mention 'the cup of tea' and 'the walk home'?", chinese: "作者为什么提到'那杯茶'和'回家的路'？", options: ["To give cooking advice", "To show that small ordinary moments matter", "To criticize people who drink tea", "To describe a typical day"], correctAnswer: 1, explanation: "These examples illustrate the author's point that ordinary, unremarkable moments are often the most valuable.", chineseExplanation: "这些例子说明作者的观点：平凡、不起眼的时刻往往是最珍贵的。" },
      { id: "q6", type: "critical-thinking", question: "Do you agree that remembering life is temporary makes ordinary moments more valuable? Why or why not?", chinese: "你同意记住生命是短暂的会让平凡时刻更有价值吗？为什么？", explanation: "There is no single correct answer. The goal is to evaluate the author's argument and relate it to your own experience.", chineseExplanation: "没有唯一正确答案。目标是评估作者的论点并将其与你自己的经历联系起来。" },
    ],
    discussionQuestions: [
      "Do you often postpone important conversations? Why?",
      "What would you do differently if you knew you had only one year left?",
      "Is it better to live in the present or plan carefully for the future?",
    ],
    writingPrompt: { title: "Write About an Ordinary Moment", prompt: "Write 100–150 words about a small, ordinary moment that you now realize was meaningful.", wordCount: "100–150 words" },
    speakingPrompt: { title: "Talk for One Minute", prompt: "What would you change if you knew you had limited time?", usefulExpressions: ["In my opinion...", "From my perspective...", "I think...", "The passage made me realize...", "One thing that stood out to me was..."] },
    authorChoices: [
      { phrase: "Death rarely announces itself.", alternative: "Death is unpredictable.", explanation: "The original phrase personifies death and creates a more vivid, memorable image. 'Rarely announces itself' suggests quietness and suddenness.", technique: "Personification" },
      { phrase: "Tomorrow has never signed a contract with us.", alternative: "Tomorrow is not guaranteed.", explanation: "The metaphor of a contract makes the idea more concrete and emotionally resonant. A contract implies obligation and certainty; the absence of one highlights risk.", technique: "Metaphor" },
    ],
    sentenceBreakdowns: [
      { sentence: "We postpone happiness until the next holiday.", subject: "We", verb: "postpone", object: "happiness", timeExpression: "until the next holiday", chineseExplanation: "我们把幸福推迟到下一个假期。", note: "postpone + noun is a common collocation. Do not say 'postpone to do something'." },
      { sentence: "The cup of tea. The conversation. The walk home.", subject: "(implied you)", verb: "(none — fragments)", object: "The cup of tea / The conversation / The walk home", chineseExplanation: "这是三个名词短语的排比，不是完整句子。作者故意用简短、碎片化的表达来强调这些瞬间的简洁与珍贵。", note: "These are sentence fragments used for literary effect. They create a slow, reflective rhythm." },
    ],
    readingStrategies: [
      { title: "Skimming", description: "Read quickly to understand the general idea without stopping at every word.", tip: "Focus on the first and last sentences of each paragraph." },
      { title: "Inference", description: "Understand information that isn't directly stated.", tip: "Look for words like 'perhaps', 'strange', and 'may' — they often signal inference." },
      { title: "Tone Detection", description: "Understand the author's attitude toward the topic.", tip: "Ask: Is the author judging, reflecting, arguing, or simply describing?" },
    ],
    tips: { tip1: "Don't translate every word. Read the whole sentence first.", tip2: "Look for subject + verb before checking a dictionary.", tip3: "Use punctuation to break long sentences into smaller ideas.", tip4: "Notice contrast words: however, yet, but, although.", tip5: "Look for cause and effect: because, therefore, consequently.", tip6: "Pay attention to the author's opinion words: perhaps, arguably, clearly.", tip7: "After reading, try to summarize the main idea in one sentence." },
    teacherGuide: { objective: "Students will understand a philosophical passage about mortality and practice inference, tone detection, and critical thinking.", warmUp: ["If you knew you had only one year left to live, what would you change?", "Why do people postpone important conversations?", "What does 'ordinary' mean to you?"], keyVocabulary: ["announce", "postpone", "dramatic", "temporary", "ordinary"], grammarFocus: ["Present Simple for universal truths", "Modal verbs (perhaps)", "Parallel structure"], readingStrategy: "Inference — understanding what the author implies without directly stating it.", discussionQuestions: ["Do you often postpone important things?", "What makes a moment 'extraordinary'?", "Is thinking about death helpful or harmful?"], debateQuestion: "Does knowing life is temporary make people live better?", speakingExtension: "Talk for one minute about what you would change with limited time.", writingExtension: "Write 100–150 words about an ordinary moment that now seems meaningful.", lessonPlan: [{ time: "5 min", activity: "Warm-up discussion" }, { time: "10 min", activity: "First reading for gist" }, { time: "10 min", activity: "Vocabulary and language focus" }, { time: "10 min", activity: "Comprehension and inference questions" }, { time: "5 min", activity: "Critical thinking discussion" }, { time: "5 min", activity: "Speaking or writing extension" }] },
    tags: ["mortality", "time", "philosophy", "mindfulness", "life"],
  },
  {
    id: "busy-cost",
    title: "The Quiet Cost of Always Being Busy",
    author: "LinguaClass Original",
    source: "Original",
    category: "life-society",
    level: "A2",
    theme: "modern life",
    estimatedMinutes: 3,
    wordCount: 165,
    passage:
      "Many people today feel proud of being busy. They say it like it is a good thing. 'I am so busy,' they say, as if being busy means they are important.\n\nBut being busy is not the same as being productive. A person can be very busy and still not do anything meaningful. They can answer emails all day, attend meetings that could have been an email, and move from one task to another without finishing anything.\n\nAt the end of the day, they feel tired but not satisfied. They ask themselves: 'What did I actually achieve today?'\n\nThe answer is often: not much.\n\nA quiet life is not a wasted life. A calm day is not a bad day. Sometimes the most important thing you can do is sit quietly, think clearly, and do one thing well.",
    translation:
      "如今许多人因忙碌而感到自豪。他们说这话时好像这是一件好事。'我太忙了，'他们说，好像忙碌就意味着他们很重要。\n\n但忙碌并不等于高效。一个人可能非常忙，却仍然没有做任何有意义的事情。他们可以整天回复电子邮件，参加那些本可以用邮件解决的会议，从一个任务跳到另一个任务，却什么也完成不了。\n\n在一天结束时，他们感到疲惫但并不满足。他们问自己：'我今天到底完成了什么？'\n\n答案往往是：没多少。\n\n宁静的生活不是 wasted life。平静的日子也不是糟糕的日子。有时你能做的最重要的事就是静静地坐着，清晰地思考，并把一件事做好。",
    vocabulary: [
      { word: "productive", meaning: "achieving a lot of work or results", chinese: "多产的；富有成效的", partOfSpeech: "adjective", example: "I had a productive meeting.", exampleChinese: "我开了一个富有成效的会议。", collocations: ["productive day", "productive meeting", "productive work"] },
      { word: "meaningful", meaning: "important and having a purpose", chinese: "有意义的", partOfSpeech: "adjective", example: "We had a meaningful conversation.", exampleChinese: "我们进行了一次有意义的谈话。", collocations: ["meaningful life", "meaningful work", "meaningful relationship"] },
      { word: "achieve", meaning: "to succeed in finishing something or reaching a goal", chinese: "达成；实现", partOfSpeech: "verb", example: "She worked hard to achieve her goals.", exampleChinese: "她努力工作以实现目标。", collocations: ["achieve a goal", "achieve success", "achieve results"] },
    ],
    collocations: [
      { phrase: "feel proud of", meaning: "feel good about something you did", chinese: "为...感到自豪", example: "Many people feel proud of being busy." },
      { phrase: "attend meetings", meaning: "go to meetings", chinese: "参加会议", example: "He attends too many meetings." },
      { phrase: "feel tired", meaning: "experience physical or mental tiredness", chinese: "感到疲惫", example: "I always feel tired after work." },
      { phrase: "do one thing well", meaning: "focus on quality over quantity", chinese: "把一件事做好", example: "It is better to do one thing well than many things poorly." },
    ],
    grammarPoints: [
      { title: "Comparative: not the same as", explanation: "'Being busy is not the same as being productive' compares two ideas using 'the same as'.", example: "Love is not the same as dependence.", chineseExplanation: "'being busy is not the same as being productive' 用 'the same as' 比较两个观点。" },
      { title: "Past Simple for yesterday's actions", explanation: "The passage uses past simple ('they felt tired') to describe completed actions or states in the recent past.", example: "They finished the project yesterday.", chineseExplanation: "文章用一般过去时描述最近过去完成的动作或状态。" },
    ],
    questions: [
      { id: "q1", type: "main-idea", question: "What is the main idea of this passage?", chinese: "这篇文章的主旨是什么？", options: ["Busy people are always successful", "Being busy is the same as being productive", "A quiet life can be valuable", "Meetings are always useless"], correctAnswer: 2, explanation: "The author argues that being busy does not equal being productive and that a quiet life has value.", chineseExplanation: "作者认为忙碌不等于高效，宁静的生活也有价值。" },
      { id: "q2", type: "inference", question: "What can we infer about people who say 'I am so busy'?", chinese: "我们可以对说'我太忙了'的人做出什么推断？", options: ["They are very efficient", "They may want to seem important", "They have no work", "They are always happy"], correctAnswer: 1, explanation: "The passage suggests that people sometimes use 'busy' to show status or importance.", chineseExplanation: "文章暗示人们有时用'忙'来显示地位或重要性。" },
      { id: "q3", type: "detail", question: "According to the passage, what does a person often feel at the end of a busy day?", chinese: "根据文章，忙碌一天结束时人们通常会感到什么？", options: ["Excited", "Tired but not satisfied", "Very proud", "Hungry"], correctAnswer: 1, explanation: "The author writes: 'At the end of the day, they feel tired but not satisfied.'", chineseExplanation: "作者写道：'在一天结束时，他们感到疲惫但并不满足。'" },
      { id: "q4", type: "vocabulary-in-context", question: "In the passage, what does 'productive' mean?", chinese: "在这篇文章中，'productive' 是什么意思？", options: ["Busy", "Relaxed", "Achieving results", "Tired"], correctAnswer: 2, explanation: "Productive means achieving or producing a significant amount of results.", chineseExplanation: "Productive 意味着取得或产生大量的成果。" },
      { id: "q5", type: "critical-thinking", question: "Do you think society today rewards people for being busy? Give examples.", chinese: "你认为当今社会奖励忙碌的人吗？举例说明。", explanation: "Consider workplace culture, social media, and personal relationships.", chineseExplanation: "考虑职场文化、社交媒体和人际关系。" },
    ],
    discussionQuestions: ["Do you feel pressure to be busy? Where does it come from?", "Is it possible to be calm in a busy world?", "What would you remove from your daily schedule to be more peaceful?"],
    writingPrompt: { title: "A Day of Quiet", prompt: "Describe one day when you did very little but felt it was a good day. Why?", wordCount: "80–120 words" },
    speakingPrompt: { title: "Busy vs. Productive", prompt: "What is the difference between being busy and being productive in your life?", usefulExpressions: ["In my opinion...", "I find that...", "One thing I learned is...", "I used to think..."] },
    authorChoices: [{ phrase: "I am so busy", alternative: "I have a lot of work", explanation: "The author highlights how people use 'busy' as a badge of importance rather than simply describing their workload.", technique: "Social observation" }],
    sentenceBreakdowns: [{ sentence: "A person can be very busy and still not do anything meaningful.", subject: "A person", verb: "can be", object: "very busy", chineseExplanation: "一个人可以很忙，但仍然没有做任何有意义的事情。", note: "'still' shows contrast — the sentence compares being busy with doing meaningful work." }],
    readingStrategies: [
      { title: "Skimming", description: "Read quickly to identify the main argument.", tip: "Notice the contrast between 'proud of being busy' and 'not the same as being productive'." },
      { title: "Inference", description: "Understand the author's attitude toward modern work culture.", tip: "Look for words like 'proud', 'satisfied', and 'quiet' to find the author's opinion." },
    ],
    tips: { tip1: "Read the title and ask: What is the writer likely criticizing or supporting?", tip2: "Look for examples after general statements.", tip3: "Notice the contrast words: 'but', 'not the same as', 'yet'.", tip4: "When you see a list, each item supports the main idea.", tip5: "Don't assume 'busy' is always positive — the author questions it.", tip6: "Use context to guess meaning before checking a dictionary.", tip7: "After reading, say the main idea out loud in your own words." },
    teacherGuide: { objective: "Students will read a short opinion text, identify the main idea, and discuss modern attitudes toward work and rest.", warmUp: ["How many hours did you work or study yesterday?", "Do you feel proud when you are busy? Why?", "What is the difference between 'busy' and 'productive'?"], keyVocabulary: ["productive", "meaningful", "achieve", "attend", "satisfied"], grammarFocus: ["Comparative structures", "Past simple", "Adjective + noun collocations"], readingStrategy: "Skimming — identify the writer's main argument quickly.", discussionQuestions: ["Is it possible to be calm in a busy world?", "What would you remove from your daily schedule?", "Do you think 'busy' is a status symbol?"], debateQuestion: "Should society value rest as much as work?", speakingExtension: "Describe your ideal quiet day.", writingExtension: "Write 80–120 words about a day when you did very little but felt good.", lessonPlan: [{ time: "5 min", activity: "Warm-up: busy vs. productive" }, { time: "8 min", activity: "First reading for gist" }, { time: "8 min", activity: "Vocabulary focus" }, { time: "10 min", activity: "Comprehension questions" }, { time: "7 min", activity: "Discussion" }, { time: "5 min", activity: "Writing / speaking extension" }] },
    tags: ["modern life", "productivity", "rest", "society", "A2"],
  },
];
