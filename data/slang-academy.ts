export type SlangLevel = "safe" | "internet" | "street" | "rough";

export interface SlangItem {
  id: string;
  word: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  example: string;
  exampleZh: string;
  whoSaysIt: string;
  ageGroup: string;
  region: string;
  isOffensive: boolean;
  offensiveLevel: number;
  safeAlternatives: string[];
  conversation: {
    speaker: string;
    line: string;
  }[];
  chineseTranslation: {
    speaker: string;
    line: string;
  }[];
  culturalNotes: string;
  warning?: string;
}

export interface SlangLevelData {
  level: SlangLevel;
  title: string;
  description: string;
  emoji: string;
  color: string;
  items: SlangItem[];
}

export const slangAcademy: SlangLevelData[] = [
  {
    level: "safe",
    title: "Safe Slang",
    description: "Everyday casual expressions that are widely accepted and safe to use in most situations.",
    emoji: "😊",
    color: "from-green-400 to-emerald-400",
    items: [
      {
        id: "safe-1",
        word: "No worries",
        chinese: "没关系",
        pinyin: "méi guān xi",
        meaning: "It's okay / You're welcome / No problem",
        example: "Sorry I'm late! — No worries, we just got here.",
        exampleZh: "对不起我迟到了！——没关系，我们刚到。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["No problem", "It's okay", "Don't worry about it", "All good"],
        conversation: [
          { speaker: "Amy", line: "Sorry I'm late!" },
          { speaker: "John", line: "No worries, we just got here." },
          { speaker: "Amy", line: "Thanks for being understanding." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "对不起我迟到了！" },
          { speaker: "John", line: "没关系，我们刚到。" },
          { speaker: "Amy", line: "谢谢你的理解。" }
        ],
        culturalNotes: "'No worries' is uniquely Australian but now understood everywhere. It's the most common response to apologies in casual speech."
      },
      {
        id: "safe-2",
        word: "My bad",
        chinese: "我的错",
        pinyin: "wǒ de cuò",
        meaning: "My mistake / I'm sorry",
        example: "I forgot to text you back. My bad!",
        exampleZh: "我忘了回你短信。我的错！",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "American, Australian, British",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["My mistake", "I'm sorry", "I apologize", "That was my fault"],
        conversation: [
          { speaker: "Tom", line: "You were supposed to bring the tickets!" },
          { speaker: "Lisa", line: "Oh no, my bad. I totally forgot." },
          { speaker: "Tom", line: "It happens. Let's just buy new ones." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "你该带票的！" },
          { speaker: "Lisa", line: "哦不，我的错。我完全忘了。" },
          { speaker: "Tom", line: "常有的事。我们买新的吧。" }
        ],
        culturalNotes: "'My bad' is American slang that went mainstream. It's casual but acceptable in most situations."
      },
      {
        id: "safe-3",
        word: "No way",
        chinese: "不会吧/真的吗",
        pinyin: "bú huì ba / zhēn de ma",
        meaning: "Really? / That's surprising / I don't believe it",
        example: "No way! I won the lottery!",
        exampleZh: "不会吧！我中彩票了！",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Really?", "Are you serious?", "No kidding"],
        conversation: [
          { speaker: "Amy", line: "I just got a new job!" },
          { speaker: "John", line: "No way! Congratulations!" },
          { speaker: "Amy", line: "Thanks! I'm so excited." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我刚得到一份新工作！" },
          { speaker: "John", line: "不会吧！恭喜！" },
          { speaker: "Amy", line: "谢谢！我很兴奋。" }
        ],
        culturalNotes: "'No way' can express surprise or disbelief. It's very common in casual speech."
      },
      {
        id: "safe-4",
        word: "Fair enough",
        chinese: "有道理/好吧",
        pinyin: "yǒu dào lǐ / hǎo ba",
        meaning: "I understand your point / That's reasonable",
        example: "I don't like it, but fair enough.",
        exampleZh: "我不喜欢，但你说得有道理。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["I see your point", "That's reasonable", "I understand"],
        conversation: [
          { speaker: "Tom", line: "I think we should leave early." },
          { speaker: "Lisa", line: "I'd rather stay longer, but fair enough." },
          { speaker: "Tom", line: "We can always come back next time." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "我觉得我们应该早点走。" },
          { speaker: "Lisa", line: "我宁愿多待一会儿，但你说得有道理。" },
          { speaker: "Tom", line: "我们下次可以再来。" }
        ],
        culturalNotes: "'Fair enough' is a very common way to acknowledge someone else's point even if you disagree."
      },
      {
        id: "safe-5",
        word: "No biggie",
        chinese: "没什么大不了的",
        pinyin: "méi shén me dà bù liǎo de",
        meaning: "No problem / It's not a big deal",
        example: "Sorry I'm late! — No biggie.",
        exampleZh: "对不起我迟到了！——没什么大不了的。",
        whoSaysIt: "Everyone",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["No problem", "It's okay", "Don't worry about it", "No worries"],
        conversation: [
          { speaker: "Amy", line: "I'm sorry I forgot your birthday." },
          { speaker: "John", line: "No biggie, let's celebrate this weekend instead." },
          { speaker: "Amy", line: "You're the best. Dinner is on me!" }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "对不起我忘了你的生日。" },
          { speaker: "John", line: "没什么大不了的，我们这周末再庆祝吧。" },
          { speaker: "Amy", line: "你真好。我请客吃饭！" }
        ],
        culturalNotes: "'No biggie' is casual American slang for 'no problem.' It's very common in the US and now understood everywhere."
      },
      {
        id: "safe-6",
        word: "Hang out",
        chinese: "闲逛/出去玩",
        pinyin: "xián guàng / chū qù wán",
        meaning: "Spend time together casually",
        example: "Do you want to hang out after school?",
        exampleZh: "放学后想一起玩吗？",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Spend time together", "Meet up", "Get together", "Hang"],
        conversation: [
          { speaker: "Lisa", line: "We should hang out sometime." },
          { speaker: "Tom", line: "Sure! How about this weekend?" },
          { speaker: "Lisa", line: "Perfect. I'll text you the details." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我们 sometime 一起玩吧。" },
          { speaker: "Tom", line: "好啊！这周末怎么样？" },
          { speaker: "Lisa", line: "完美。我会发信息给你详情。" }
        ],
        culturalNotes: "'Hang out' is the standard phrase for casual time with friends. It has no romantic implication unless context suggests otherwise."
      },
      {
        id: "safe-7",
        word: "Chill",
        chinese: "放松/冷静",
        pinyin: "fàng sōng / lěng jìng",
        meaning: "Relax / Calm down / Casual and relaxed",
        example: "Just chill, it's not a big deal.",
        exampleZh: "放松点，没什么大不了的。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Relax", "Calm down", "Take it easy", "Be cool"],
        conversation: [
          { speaker: "Amy", line: "I'm so stressed about the exam." },
          { speaker: "John", line: "Chill, you've studied hard." },
          { speaker: "Amy", line: "I know, but I still feel nervous." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我考试压力好大。" },
          { speaker: "John", line: "放松，你已经努力复习了。" },
          { speaker: "Amy", line: "我知道，但我还是紧张。" }
        ],
        culturalNotes: "'Chill' can mean 'relax' or describe a relaxed person/ situation. 'Chill out' means 'calm down.' Very common in casual speech."
      },
      {
        id: "safe-8",
        word: "Vibe",
        chinese: "氛围/感觉",
        pinyin: "fēn wéi / gǎn jué",
        meaning: "The atmosphere or feeling of a place/situation",
        example: "This coffee shop has good vibes.",
        exampleZh: "这家咖啡店氛围很好。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Atmosphere", "Feeling", "Mood", "Energy"],
        conversation: [
          { speaker: "Lisa", line: "I love this place. It has such good vibes." },
          { speaker: "Tom", line: "Yeah, it's so relaxing here." },
          { speaker: "Lisa", line: "We should come back this weekend." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我喜欢这个地方。氛围很好。" },
          { speaker: "Tom", line: "是啊，这里好放松。" },
          { speaker: "Lisa", line: "我们这周末应该再来。" }
        ],
        culturalNotes: "'Vibe' refers to the emotional atmosphere of a place or situation. 'Good vibes' means positive atmosphere. 'Bad vibes' means negative or uncomfortable atmosphere."
      },
      {
        id: "safe-9",
        word: "Bet",
        chinese: "一言为定/没问题",
        pinyin: "yī yán wéi dìng / méi wèn tí",
        meaning: "Agreement / confirmation / 'okay'",
        example: "We meeting at 5? — Bet.",
        exampleZh: "我们5点见面？——一言为定。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Sure", "Okay", "Agreed", "Sounds good"],
        conversation: [
          { speaker: "Amy", line: "We should hang out this weekend." },
          { speaker: "John", line: "Bet! Where do you want to go?" },
          { speaker: "Amy", line: "I'll text you the details." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "我们这周末应该一起玩。" },
          { speaker: "John", line: "一言为定！你想去哪？" },
          { speaker: "Amy", line: "我会发信息给你详情。" }
        ],
        culturalNotes: "'Bet' is a very common way to say 'agreed' or 'okay' in casual speech. Originated from AAVE but now used by everyone."
      },
      {
        id: "safe-10",
        word: "I feel you",
        chinese: "我懂你/我理解你",
        pinyin: "wǒ dǒng nǐ / wǒ lǐ jiě nǐ",
        meaning: "I understand you / I empathize with you",
        example: "I'm so stressed about the exam. — I feel you, I have three this week.",
        exampleZh: "我考试压力好大。——我懂你，我这周也有三个考试。",
        whoSaysIt: "Everyone, especially young people",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["I understand", "I get it", "I know what you mean", "Same here"],
        conversation: [
          { speaker: "Lisa", line: "I'm so tired. I barely slept last night." },
          { speaker: "Tom", line: "I feel you. I was up until 3am studying too." },
          { speaker: "Lisa", line: "We should take a nap after class." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我累死了。我昨晚几乎没睡。" },
          { speaker: "Tom", line: "我懂你。我也学习到凌晨3点。" },
          { speaker: "Lisa", line: "我们课后应该小睡一下。" }
        ],
        culturalNotes: "'I feel you' is a casual way to show empathy. It means 'I understand your situation because I've been there.' Very common in casual speech."
      },
      {
        id: "safe-11",
        word: "Facts",
        chinese: "事实/真的",
        pinyin: "shì shí / zhēn de",
        meaning: "That's true / I agree completely",
        example: "This weather is amazing. — Facts!",
        exampleZh: "这天气好棒。——真的！",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["True", "I agree", "That's right", "No lie"],
        conversation: [
          { speaker: "Jake", line: "Pizza is the best food ever." },
          { speaker: "Mia", line: "Facts! I could eat it every day." },
          { speaker: "Jake", line: "Same. No other food compares." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "披萨是最好吃的食物。" },
          { speaker: "Mia", line: "真的！我每天都想吃。" },
          { speaker: "Jake", line: "一样。没有其他食物能比。" }
        ],
        culturalNotes: "'Facts' is used to strongly agree with something. It means 'that's true' or 'I agree 100%.' Common in casual speech and social media comments."
      }
    ]
  },
  {
    level: "internet",
    title: "Internet English",
    description: "Texting, social media, and gaming slang that has entered everyday speech.",
    emoji: "📱",
    color: "from-blue-400 to-cyan-400",
    items: [
      {
        id: "internet-1",
        word: "Ghost",
        chinese: "突然消失",
        pinyin: "tū rán xiāo shī",
        meaning: "To cut off all communication without explanation",
        example: "We went on three dates and then he ghosted me.",
        exampleZh: "我们约会了三次，然后他就突然不回我消息了。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-35",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Stopped replying", "Cut off contact", "Stopped messaging"],
        conversation: [
          { speaker: "Casey", line: "He's been ghosting me for a week." },
          { speaker: "Morgan", line: "That's so rude. Just block him." },
          { speaker: "Casey", line: "I know, but it's so confusing." }
        ],
        chineseTranslation: [
          { speaker: "Casey", line: "他已经一周不回我消息了。" },
          { speaker: "Morgan", line: "太粗鲁了。直接拉黑他吧。" },
          { speaker: "Casey", line: "我知道，但真的很困惑。" }
        ],
        culturalNotes: "Originated from online dating culture. Now used in all digital communication contexts."
      },
      {
        id: "internet-2",
        word: "Sus",
        chinese: "可疑的",
        pinyin: "kě yí de",
        meaning: "Suspicious, sketchy, or questionable",
        example: "He said he was working late but I saw him at the movies. That's sus.",
        exampleZh: "他说他在加班，但我看到他在电影院。这很可疑。",
        whoSaysIt: "Gamers, teens, young adults",
        ageGroup: "13-30",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Suspicious", "Sketchy", "Questionable", "Dodgy"],
        conversation: [
          { speaker: "Sam", line: "That deal seems too good to be true." },
          { speaker: "Riley", line: "Yeah, it's kinda sus." },
          { speaker: "Sam", line: "Let's do some research first." }
        ],
        chineseTranslation: [
          { speaker: "Sam", line: "那笔交易好得令人怀疑。" },
          { speaker: "Riley", line: "是的，有点可疑。" },
          { speaker: "Sam", line: "我们先做点调查吧。" }
        ],
        culturalNotes: "Popularized by the game 'Among Us' in 2020. Shortened from 'suspicious'."
      },
      {
        id: "internet-3",
        word: "GOAT",
        chinese: "史上最伟大的",
        pinyin: "shǐ shàng zuì wěi dà de",
        meaning: "Greatest Of All Time",
        example: "Messi is the GOAT of football.",
        exampleZh: "梅西是足球史上最伟大的球员。",
        whoSaysIt: "Sports fans, social media users, teens",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["The best ever", "Greatest of all time", "Legend"],
        conversation: [
          { speaker: "Jake", line: "Did you see that match? LeBron is the GOAT." },
          { speaker: "Mia", line: "I think Jordan is better, but respect." },
          { speaker: "Jake", line: "We can agree to disagree." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "你看到那场比赛了吗？勒布朗是史上最伟大的。" },
          { speaker: "Mia", line: "我觉得乔丹更棒，但respect。" },
          { speaker: "Jake", line: "我们求同存异吧。" }
        ],
        culturalNotes: "Very common in sports and social media. Written in all caps."
      },
      {
        id: "internet-4",
        word: "FOMO",
        chinese: "错失恐惧症",
        pinyin: "cuò shī kǒng jù zhèng",
        meaning: "Fear Of Missing Out — anxiety that you're missing out on something others are doing",
        example: "I went to the party even though I was tired because of FOMO.",
        exampleZh: "我尽管很累还是去了派对，因为怕错过。",
        whoSaysIt: "Everyone, especially young adults",
        ageGroup: "Teens to 40s",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Fear of missing out", "Not wanting to miss out", "Keeping up with others"],
        conversation: [
          { speaker: "Lisa", line: "I'm exhausted but I have to go to this concert." },
          { speaker: "Tom", line: "FOMO?" },
          { speaker: "Lisa", line: "Guilty. I can't stand the thought of missing it." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我累死了，但必须去看这个演唱会。" },
          { speaker: "Tom", line: "怕错过？" },
          { speaker: "Lisa", line: "罪有应得。我受不了错过的想法。" }
        ],
        culturalNotes: "Very common in social media and modern life. Often used as a noun."
      },
      {
        id: "internet-8",
        word: "Slaps",
        chinese: "超棒/好听到爆",
        pinyin: "chāo bàng / hǎo tīng dào bào",
        meaning: "Really good, especially music or food",
        example: "This new album slaps!",
        exampleZh: "这张新专辑超棒！",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "American, British, Australian",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Great", "Amazing", "Fantastic", "Really good"],
        conversation: [
          { speaker: "Casey", line: "Have you heard the new track?" },
          { speaker: "Morgan", line: "Yeah, it slaps! Been on repeat all day." },
          { speaker: "Casey", line: "Right? The beat is insane." }
        ],
        chineseTranslation: [
          { speaker: "Casey", line: "你听新歌了吗？" },
          { speaker: "Morgan", line: "听了，超棒！今天一直在循环播放。" },
          { speaker: "Casey", line: "是吧？节奏太疯狂了。" }
        ],
        culturalNotes: "'Slaps' is modern slang meaning something is exceptionally good. Originated in music culture but now used for food, fashion, and more."
      },
      {
        id: "internet-9",
        word: "Vibe check",
        chinese: "氛围检查/察言观色",
        pinyin: "fēn wéi jiǎn chá / chá yán guān sè",
        meaning: "Assessing the mood or atmosphere of a situation",
        example: "I need to do a quick vibe check before I go in there.",
        exampleZh: "进去之前我需要先察言观色一下。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-35",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Check the mood", "Read the room", "See how people feel", "Assess the situation"],
        conversation: [
          { speaker: "Taylor", line: "Should we go in?" },
          { speaker: "Jordan", line: "Hold on, let me do a vibe check first." },
          { speaker: "Taylor", line: "Good call. Looks like they're having a meeting." }
        ],
        chineseTranslation: [
          { speaker: "Taylor", line: "我们该进去吗？" },
          { speaker: "Jordan", line: "等等，我先察言观色一下。" },
          { speaker: "Taylor", line: "好主意。看起来他们正在开会。" }
        ],
        culturalNotes: "'Vibe check' became popular on social media around 2019. It means assessing whether the mood is positive, negative, or tense."
      },
      {
        id: "internet-5",
        word: "Cap",
        chinese: "谎言/吹牛",
        pinyin: "huǎng yán / chuī niú",
        meaning: "Lie / exaggeration / to claim something false",
        example: "No cap, I studied for 10 hours for that test.",
        exampleZh: "真的，我为那次考试学习了10个小时。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "American (originally AAVE), now global",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Lie", "Exaggeration", "False claim", "Untruth"],
        conversation: [
          { speaker: "Jake", line: "No cap, that was the best concert ever." },
          { speaker: "Mia", line: "I know! The energy was insane." },
          { speaker: "Jake", line: "We have to go to their next show." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "真的，那是史上最棒的演唱会。" },
          { speaker: "Mia", line: "我知道！现场气氛太疯狂了。" },
          { speaker: "Jake", line: "我们一定要去看他们的下一场演出。" }
        ],
        culturalNotes: "'Cap' means 'lie' in slang. 'No cap' means 'no lie' or 'I'm telling the truth.' Originated in African American Vernacular English."
      },
      {
        id: "internet-6",
        word: "Rizz",
        chinese: "魅力/撩妹/撩汉",
        pinyin: "mèi lì / liáo mèi / liáo hàn",
        meaning: "Charisma or ability to attract romantic interest",
        example: "He's got mad rizz. Every girl at the party was talking to him.",
        exampleZh: "他魅力十足。派对上的每个女孩都在和他说话。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-25",
        region: "American, British, Australian",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Charisma", "Charm", "Smooth talker", "Game"],
        conversation: [
          { speaker: "Casey", line: "Did you see Jake talking to Sarah?" },
          { speaker: "Morgan", line: "Yeah, he's got serious rizz." },
          { speaker: "Casey", line: "I know! I'm jealous." }
        ],
        chineseTranslation: [
          { speaker: "Casey", line: "你看到Jake和Sarah说话了吗？" },
          { speaker: "Morgan", line: "看了，他魅力十足。" },
          { speaker: "Casey", line: "我知道！我嫉妒了。" }
        ],
        culturalNotes: "Short for 'charisma.' Popularized by TikTok and Gen Z. Can be used for anyone who is good at attracting others romantically."
      },
      {
        id: "internet-7",
        word: "Simp",
        chinese: "舔狗/讨好者",
        pinyin: "tiǎn gǒu / tǎo hǎo zhě",
        meaning: "Someone who does too much for someone they like, often with no reciprocation",
        example: "He's simping for Sarah. He bought her a PS5 on the second date.",
        exampleZh: "他在讨好Sarah。他第二次约会就给她买了PS5。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-25",
        region: "American, British, Australian",
        isOffensive: true,
        offensiveLevel: 2,
        safeAlternatives: ["Devoted", "Attentive", "Enthusiastic", "Hopeful romantic"],
        conversation: [
          { speaker: "Tom", line: "Jake is simping so hard for Sarah right now." },
          { speaker: "Lisa", line: "I know! He bought her a PS5 on the second date." },
          { speaker: "Tom", line: "That's wild. She hasn't even said she likes him." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "Jake现在在拼命讨好Sarah。" },
          { speaker: "Lisa", line: "我知道！他第二次约会就给她买了PS5。" },
          { speaker: "Tom", line: "太疯狂了。她甚至没说过喜欢他。" }
        ],
        culturalNotes: "Often used as an insult, but can be self-deprecating. Implies the person is being taken advantage of. Use carefully - can be hurtful."
      }
    ]
  },
  {
    level: "street",
    title: "Street English",
    description: "Expressions you'll hear on the street, in movies, and among young people. Learn who says them and when.",
    emoji: "🏙️",
    color: "from-orange-400 to-red-400",
    items: [
      {
        id: "street-1",
        word: "No cap",
        chinese: "真的/没骗你",
        pinyin: "zhēn de / méi piāo nǐ",
        meaning: "No lie / For real / Honestly",
        example: "No cap, I studied for 10 hours for that test.",
        exampleZh: "真的，我为那次考试学习了10个小时。",
        whoSaysIt: "Teens, young adults, hip-hop culture",
        ageGroup: "13-30",
        region: "American (originally AAVE), now global",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Honestly", "For real", "I promise", "Truth"],
        conversation: [
          { speaker: "Jake", line: "No cap, that was the best concert ever." },
          { speaker: "Mia", line: "I know! The energy was insane." },
          { speaker: "Jake", line: "We have to go to their next show." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "真的，那是史上最棒的演唱会。" },
          { speaker: "Mia", line: "我知道！现场气氛太疯狂了。" },
          { speaker: "Jake", line: "我们一定要去看他们的下一场演出。" }
        ],
        culturalNotes: "Originated in African American Vernacular English (AAVE) and hip-hop culture. Important to recognize its origins and use respectfully.",
        warning: "Be aware of AAVE origins. Don't mock AAVE while using its slang."
      },
      {
        id: "street-2",
        word: "Salty",
        chinese: "恼怒的/酸的",
        pinyin: "nǎo nǎo de / suān de",
        meaning: "Bitter, annoyed, or upset, especially about a small defeat",
        example: "He's still salty about losing the game yesterday.",
        exampleZh: "他还在为昨天输掉比赛而恼怒。",
        whoSaysIt: "Teens, young adults, gamers",
        ageGroup: "13-30",
        region: "American, Australian, British",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Annoyed", "Bitter", "Upset", "Frustrated"],
        conversation: [
          { speaker: "Jake", line: "You're still mad I beat you?" },
          { speaker: "Mia", line: "I'm not mad, just a little salty." },
          { speaker: "Jake", line: "Rematch? I'll go easy on you." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "你还在为我赢了你而生气吗？" },
          { speaker: "Mia", line: "我没生气，只是有点恼怒。" },
          { speaker: "Jake", line: "再来一局？我会让着你的。" }
        ],
        culturalNotes: "Common in gaming and competitive contexts. Can be playful among friends."
      },
      {
        id: "street-3",
        word: "Clap back",
        chinese: "反驳/回击",
        pinyin: "fǎn bó / huí jī",
        meaning: "To respond sharply or win an argument with a comeback",
        example: "She clapped back so hard he couldn't say anything else.",
        exampleZh: "她反驳得太厉害，他再也说不出什么了。",
        whoSaysIt: "Teens, young adults, social media users",
        ageGroup: "13-35",
        region: "American, British",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Comeback", "Sharp reply", "Witty response", "Retort"],
        conversation: [
          { speaker: "Tom", line: "You're not good enough for this team." },
          { speaker: "Lisa", line: "Says the guy who missed every shot yesterday. Clap back." },
          { speaker: "Tom", line: "Okay, that was fair." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "你不够好进这个队。" },
          { speaker: "Lisa", line: "那个昨天每次都投丢的人这么说。反驳。" },
          { speaker: "Tom", line: "好吧，你说得对。" }
        ],
        culturalNotes: "Popularized by social media and hip-hop. A 'clap back' is a sharp, often public, response to criticism."
      },
      {
        id: "street-4",
        word: "Flex",
        chinese: "炫耀/展示",
        pinyin: "xuàn yào / zhǎn shì",
        meaning: "To show off or display something proudly",
        example: "He's just flexing his new watch.",
        exampleZh: "他只是在炫耀他的新手表。",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-35",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Show off", "Display", "Share", "Be proud of"],
        conversation: [
          { speaker: "Jake", line: "Did you see his new car?" },
          { speaker: "Mia", line: "He's been flexing it all week." },
          { speaker: "Jake", line: "I know, right? Just let him have his moment." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "你看到他的新车了吗？" },
          { speaker: "Mia", line: "他整个星期都在炫耀。" },
          { speaker: "Jake", line: "是吧？就让他得意一下吧。" }
        ],
        culturalNotes: "Can be positive or negative depending on context. 'Flex' alone is often negative, but 'flex your skills' can be positive."
      },
      {
        id: "street-5",
        word: "Deadass",
        chinese: "说真的/真的假的",
        pinyin: "shuō zhēn de / zhēn de jiǎ de",
        meaning: "Seriously / For real / I'm not joking",
        example: "Deadass? You're going to travel the world?",
        exampleZh: "说真的？你要去环游世界？",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "American (originally AAVE), now global",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["Really?", "Are you serious?", "For real?", "No way"],
        conversation: [
          { speaker: "Jake", line: "I'm actually moving to Japan next month." },
          { speaker: "Mia", line: "Deadass? That's wild!" },
          { speaker: "Jake", line: "Deadass. I already quit my job." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "我下个月真的要搬到日本去了。" },
          { speaker: "Mia", line: "说真的？太疯狂了！" },
          { speaker: "Jake", line: "说真的。我已经辞职了。" }
        ],
        culturalNotes: "Originated in African American Vernacular English (AAVE). Now used widely but still associated with AAVE."
      },
      {
        id: "street-6",
        word: "Bussin'",
        chinese: "好吃到爆/棒极了",
        pinyin: "hǎo chī dào bào / bàng jí le",
        meaning: "Really good, especially food",
        example: "This mac and cheese is bussin'!",
        exampleZh: "这通心粉和奶酪好吃到爆！",
        whoSaysIt: "Teens, young adults",
        ageGroup: "13-30",
        region: "American, British, Australian",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Delicious", "Amazing", "Great", "Fantastic"],
        conversation: [
          { speaker: "Taylor", line: "Try the wings! They're bussin'!" },
          { speaker: "Jordan", line: "Wow, you're right. This is amazing." },
          { speaker: "Taylor", line: "Told you! Best wings in the city." }
        ],
        chineseTranslation: [
          { speaker: "Taylor", line: "尝尝鸡翅！好吃到爆！" },
          { speaker: "Jordan", line: "哇，你说得对。这太棒了。" },
          { speaker: "Taylor", line: "跟你说过了！城里最好的鸡翅。" }
        ],
        culturalNotes: "Popular slang for food that tastes amazing. Originated in African American communities but now widely used."
      },
      {
        id: "street-7",
        word: "No cap",
        chinese: "真的/没骗你",
        pinyin: "zhēn de / méi piāo nǐ",
        meaning: "No lie / For real / Honestly",
        example: "No cap, I studied for 10 hours for that test.",
        exampleZh: "真的，我为那次考试学习了10个小时。",
        whoSaysIt: "Teens, young adults, hip-hop culture",
        ageGroup: "13-30",
        region: "American (originally AAVE), now global",
        isOffensive: false,
        offensiveLevel: 0,
        safeAlternatives: ["Honestly", "For real", "I promise", "Truth"],
        conversation: [
          { speaker: "Jake", line: "No cap, that was the best concert ever." },
          { speaker: "Mia", line: "I know! The energy was insane." },
          { speaker: "Jake", line: "We have to go to their next show." }
        ],
        chineseTranslation: [
          { speaker: "Jake", line: "真的，那是史上最棒的演唱会。" },
          { speaker: "Mia", line: "我知道！现场气氛太疯狂了。" },
          { speaker: "Jake", line: "我们一定要去看他们的下一场演出。" }
        ],
        culturalNotes: "Originated in African American Vernacular English (AAVE) and hip-hop culture. Important to recognize its origins and use respectfully.",
        warning: "Be aware of AAVE origins. Don't mock AAVE while using its slang."
      }
    ]
  },
  {
    level: "rough",
    title: "Rough English",
    description: "Strong language that you need to understand but should use with extreme caution. Learn when it's rude, when it's bullying, and when it's acceptable among friends.",
    emoji: "⚠️",
    color: "from-red-400 to-rose-400",
    items: [
      {
        id: "rough-1",
        word: "Shut up",
        chinese: "闭嘴",
        pinyin: "bì zuǐ",
        meaning: "Be quiet / Stop talking",
        example: "Oh my god, shut up! That's amazing!",
        exampleZh: "哦我的天，闭嘴！那太棒了！",
        whoSaysIt: "Everyone, but tone matters hugely",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 3,
        safeAlternatives: ["Be quiet", "Stop talking", "Quiet please", "Hang on"],
        conversation: [
          { speaker: "Emma", line: "You won't believe what happened..." },
          { speaker: "Jake", line: "Oh my god, shut up! That's amazing!" },
          { speaker: "Emma", line: "I know! Can you believe it?" }
        ],
        chineseTranslation: [
          { speaker: "Emma", line: "你绝对不会相信发生了什么..." },
          { speaker: "Jake", line: "哦我的天，闭嘴！那太棒了！" },
          { speaker: "Emma", line: "我知道！你能相信吗？" }
        ],
        culturalNotes: "Among friends, 'shut up' can mean 'wow, that's shocking/exciting!' Never use with strangers, superiors, or in formal settings.",
        warning: "WARNING: 'Shut up' is rude when used literally. Among friends with excited tone, it can mean 'wow!' When in doubt, don't use it."
      },
      {
        id: "rough-2",
        word: "What the heck?",
        chinese: "搞什么鬼？",
        pinyin: "gǎ shén me guǐ?",
        meaning: "Expression of surprise or frustration (mild)",
        example: "What the heck? I just parked here!",
        exampleZh: "搞什么鬼？我刚刚停在这的！",
        whoSaysIt: "Everyone, including parents around children",
        ageGroup: "All ages",
        region: "All English-speaking countries",
        isOffensive: false,
        offensiveLevel: 1,
        safeAlternatives: ["What on earth?", "What's going on?", "Really?"],
        conversation: [
          { speaker: "Tom", line: "What the heck? My phone just died." },
          { speaker: "Lisa", line: "Did you charge it last night?" },
          { speaker: "Tom", line: "I thought I did. Ugh, this is the worst." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "搞什么鬼？我手机刚没电了。" },
          { speaker: "Lisa", line: "你昨晚充电了吗？" },
          { speaker: "Tom", line: "我以为充了。唉，太糟了。" }
        ],
        culturalNotes: "'Heck' is a family-friendly alternative to 'hell'. Safe for all ages."
      },
      {
        id: "rough-3",
        word: "Freaking",
        chinese: "该死的/该死的",
        pinyin: "gāi sǐ de",
        meaning: "Intensifier for frustration (mild profanity)",
        example: "Where are my freaking keys?",
        exampleZh: "我该死的钥匙在哪？",
        whoSaysIt: "Teens, young adults",
        ageGroup: "Teens and above",
        region: "American, Australian",
        isOffensive: true,
        offensiveLevel: 2,
        safeAlternatives: ["Darn", "Dang", "Flipping", "Shoot"],
        conversation: [
          { speaker: "Lisa", line: "I can't find my freaking charger." },
          { speaker: "Tom", line: "Did you check your bag?" },
          { speaker: "Lisa", line: "Yes! This is so frustrating." }
        ],
        chineseTranslation: [
          { speaker: "Lisa", line: "我找不到我该死的充电器了。" },
          { speaker: "Tom", line: "你检查过你的包了吗？" },
          { speaker: "Lisa", line: "检查过了！太令人沮丧了。" }
        ],
        culturalNotes: "Milder than 'f***ing' but still considered profanity by some. Common in casual speech."
      },
      {
        id: "rough-4",
        word: "Dumb",
        chinese: "愚蠢的/笨蛋",
        pinyin: "yú chǔn / běn dàn",
        meaning: "Stupid or foolish (insult)",
        example: "That was a dumb idea.",
        exampleZh: "那是个愚蠢的主意。",
        whoSaysIt: "Everyone when frustrated",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 2,
        safeAlternatives: ["Unwise", "Not the best idea", "Careless", "That wasn't smart"],
        conversation: [
          { speaker: "Tom", line: "Why did you do that? That was so dumb." },
          { speaker: "Lisa", line: "I know, I wasn't thinking." },
          { speaker: "Tom", line: "Just be more careful next time." }
        ],
        chineseTranslation: [
          { speaker: "Tom", line: "你为什么要那样做？太蠢了。" },
          { speaker: "Lisa", line: "我知道，我没想清楚。" },
          { speaker: "Tom", line: "下次小心点。" }
        ],
        culturalNotes: "Common mild insult. Less severe than 'idiot' but still rude. Often used to describe actions rather than people."
      },
      {
        id: "rough-5",
        word: "Hate you",
        chinese: "讨厌你/恨你",
        pinyin: "tǎo yàn nǐ / hèn nǐ",
        meaning: "I strongly dislike you (very strong, often not literal)",
        example: "I hate you! You ruined my party.",
        exampleZh: "我讨厌你！你毁了我的派对。",
        whoSaysIt: "Angry people, upset friends, dramatic teens",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 4,
        safeAlternatives: ["I'm really upset with you", "I'm angry", "That hurt my feelings", "I'm disappointed"],
        conversation: [
          { speaker: "Mia", line: "I hate you! You told everyone my secret!" },
          { speaker: "Jake", line: "I'm sorry, it slipped out." },
          { speaker: "Mia", line: "That's not okay. I need you to apologize." }
        ],
        chineseTranslation: [
          { speaker: "Mia", line: "我讨厌你！你把我的秘密告诉所有人了！" },
          { speaker: "Jake", line: "对不起，我脱口而出了。" },
          { speaker: "Mia", line: "这不行。你需要道歉。" }
        ],
        culturalNotes: "Very strong expression. Rarely literal among friends, but still hurtful. Among teens, it's often dramatic and temporary. Adults should avoid using it.",
        warning: "WARNING: 'I hate you' is extremely hurtful. Even when said in anger, it can cause lasting emotional damage. Never use this expression lightly."
      },
      {
        id: "rough-6",
        word: "Jerk",
        chinese: "混蛋",
        pinyin: "hún dàn",
        meaning: "Rude or unpleasant person",
        example: "The guy who cut in line is such a jerk.",
        exampleZh: "那个插队的人真是个混蛋。",
        whoSaysIt: "Everyone",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 3,
        safeAlternatives: ["Rude person", "Unpleasant person", "Unkind person", "That person was rude"],
        conversation: [
          { speaker: "Amy", line: "Did you see that guy cut in line?" },
          { speaker: "John", line: "Yeah, what a jerk." },
          { speaker: "Amy", line: "I should have said something." }
        ],
        chineseTranslation: [
          { speaker: "Amy", line: "你看到那个插队的人了吗？" },
          { speaker: "John", line: "看到了，真是个混蛋。" },
          { speaker: "Amy", line: "我应该说点什么的。" }
        ],
        culturalNotes: "One of the most common mild insults in American English. Still rude but widely used among friends to describe others."
      },
      {
        id: "rough-7",
        word: "Loser",
        chinese: "失败者",
        pinyin: "shī bài zhě",
        meaning: "Unsuccessful or pathetic person",
        example: "Oh, you lost again? Typical loser.",
        exampleZh: "哦，你又输了？典型的失败者。",
        whoSaysIt: "Bullies, angry people, teasing friends",
        ageGroup: "All ages (especially school)",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 4,
        safeAlternatives: ["Unlucky", "Unsuccessful", "Having a rough time", "That was tough"],
        conversation: [
          { speaker: "Sam", line: "Loser! Get better at the game." },
          { speaker: "Riley", line: "Shut up, weirdo. Rematch!" },
          { speaker: "Sam", line: "You're just mad because I won." }
        ],
        chineseTranslation: [
          { speaker: "Sam", line: "失败者！游戏练好点。" },
          { speaker: "Riley", line: "闭嘴，怪人。再来一局！" },
          { speaker: "Sam", line: "你只是因为我赢了才生气。" }
        ],
        culturalNotes: "Common in school bullying. Should be avoided in adult professional contexts. Can be playful among friends depending on tone.",
        warning: "WARNING: 'Loser' can be bullying language. Using it toward someone who is struggling is cruel."
      },
      {
        id: "rough-8",
        word: "Idiot",
        chinese: "白痴/笨蛋",
        pinyin: "bái chǐ / běn dàn",
        meaning: "Stupid person (insult)",
        example: "You idiot! You locked the keys in the car again.",
        exampleZh: "你个笨蛋！你又把钥匙锁在车里了。",
        whoSaysIt: "Everyone when frustrated",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 3,
        safeAlternatives: ["Silly", "Careless", "Unwise", "That was a mistake"],
        conversation: [
          { speaker: "Alex", line: "You idiot! You deleted the whole folder!" },
          { speaker: "Jordan", line: "I know, I'm so sorry. It was an accident." },
          { speaker: "Alex", line: "Whatever. Just don't be such a jerk next time." }
        ],
        chineseTranslation: [
          { speaker: "Alex", line: "你个白痴！你把整个文件夹都删了！" },
          { speaker: "Jordan", line: "我知道，对不起。那是意外。" },
          { speaker: "Alex", line: "算了。下次别那么混蛋。" }
        ],
        culturalNotes: "Mild-to-moderate insult. Less severe than some other words but still rude. Common in everyday speech among friends."
      },
      {
        id: "rough-9",
        word: "Drop dead",
        chinese: "去死吧",
        pinyin: "qù sǐ ba",
        meaning: "Go away / Leave me alone (very rude)",
        example: "Drop dead! I don't want to talk to you.",
        exampleZh: "去死吧！我不想和你说话。",
        whoSaysIt: "Angry people, bullies",
        ageGroup: "Teens and above",
        region: "All English-speaking countries",
        isOffensive: true,
        offensiveLevel: 5,
        safeAlternatives: ["I don't want to talk", "Leave me alone", "I'm not interested", "Go away"],
        conversation: [
          { speaker: "Alex", line: "I don't want to see you here again." },
          { speaker: "Sam", line: "Drop dead! I wasn't even talking to you." },
          { speaker: "Alex", line: "Watch your mouth." }
        ],
        chineseTranslation: [
          { speaker: "Alex", line: "我不想再在这里看到你。" },
          { speaker: "Sam", line: "去死吧！我甚至没在和你说话。" },
          { speaker: "Alex", line: "注意你的嘴巴。" }
        ],
        culturalNotes: "Extremely rude. Considered a serious insult. Can be considered harassment. Students should understand it but never use it.",
        warning: "EXTREME WARNING: 'Drop dead' is one of the rudest expressions in English. It can be considered a threat. Never use this expression."
      }
    ]
  }
];

export default slangAcademy;
