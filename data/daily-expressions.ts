import { DailyExpression } from "@/types/conversations";

export const dailyExpressions: DailyExpression[] = [
  {
    id: "dne-dont-mind",
    expression: "I don't mind",
    chinese: "我不介意",
    pinyin: "wǒ bù jiè yì",
    meaning: "Used to politely show that you have no preference or that something is acceptable to you.",
    whenToUse: "When someone asks if you like something or when making a group decision. Very common in restaurants, travel, and everyday choices.",
    whenNotToUse: "Avoid in formal settings where a definite answer is expected. Don't use when you actually have a strong preference — say what you want instead.",
    nativeFrequency: "Extremely common — used daily by native speakers.",
    commonMistakes: [
      { mistake: "Saying 'I don't mind' when you actually care", correction: "Express your real preference: 'I'd prefer...'" },
      { mistake: "Using in formal business meetings", correction: "Use 'Either option works for me' in formal contexts" }
    ],
    pronunciation: "/aɪ dəʊnt maɪnd/",
    funnyExample: "A: What do you want for dinner? B: I don't mind. A: Great, we're having sardines on ice cream.",
    memoryTrick: "Think: 'Mind' = 'care'. If you DON'T care = you DON'T MIND.",
    relatedExpressions: ["Never mind", "Mind your business", "Mind your own business", "Mind your step", "Keep in mind", "Would you mind...?", "Do you mind...?", "Mind if I...?"],
    collocations: ["don't mind at all", "not mind something", "wouldn't mind"],
    miniQuiz: [
      { question: "When is 'I don't mind' most appropriate?", options: ["When you have no preference", "When you're angry", "When you reject something", "When you're late"], correct: 0 }
    ],
    register: "neutral"
  },
  {
    id: "dne-ill-take-it",
    expression: "I'll take it",
    chinese: "我要了",
    pinyin: "wǒ yào le",
    meaning: "Used to decide to buy or choose something after considering it.",
    whenToUse: "Shopping, restaurants, markets, and any situation where you're deciding to accept an offer.",
    whenNotToUse: "Don't use when rejecting something. Use 'I'll pass' or 'No, thanks' instead.",
    nativeFrequency: "Very common — used multiple times per week in consumer situations.",
    commonMistakes: [
      { mistake: "Using in formal business negotiations", correction: "Use 'We accept your proposal' in formal settings" }
    ],
    pronunciation: "/aɪl teɪk ɪt/",
    funnyExample: "A: This car is $50,000. B: I'll take it! A: Great! Do you have the money? B: ...I'll think about it.",
    memoryTrick: "Think: 'TAKE it home = I want it.'",
    relatedExpressions: ["I'll go with that", "I'll have...", "I choose...", "I'd like...", "I'll stick with...", "I'll pass", "I'll skip it", "I'll think about it"],
    collocations: ["take it", "take it or leave it", "I'll take it"],
    miniQuiz: [
      { question: "What does 'I'll take it' mean?", options: ["I want to buy/choose it", "I reject it", "I'm thinking about it", "It's too expensive"], correct: 0 }
    ],
    register: "neutral"
  },
  {
    id: "dne-whats-up",
    expression: "What's up?",
    chinese: "怎么了？/ 在干嘛？",
    pinyin: "zěn me le? / zài gàn má?",
    meaning: "A casual greeting or way to ask what's happening. Can mean 'Hello', 'What's wrong?', or 'What are you doing?' depending on context.",
    whenToUse: "With friends, family, and peers. Very common informal greeting.",
    whenNotToUse: "Never use with strangers, superiors, or in formal settings. Use 'How are you?' instead.",
    nativeFrequency: "Extremely common among friends and peers.",
    commonMistakes: [
      { mistake: "Using with strangers or bosses", correction: "Use 'How are you?' or 'Hello' in formal situations" }
    ],
    pronunciation: "/wɒts ʌp/",
    funnyExample: "A: What's up? B: The ceiling! A: ...That's not what I meant.",
    memoryTrick: "Think: 'What is happening UP in your life?'",
    relatedExpressions: ["What's new?", "What's going on?", "How's it going?", "How are you?"],
    collocations: ["what's up with", "what's up doc", "what's up, man"],
    miniQuiz: [
      { question: "'What's up?' is best used:", options: ["With friends informally", "In job interviews", "At funerals", "With strangers"], correct: 0 }
    ],
    register: "casual"
  }
];

export default dailyExpressions;
