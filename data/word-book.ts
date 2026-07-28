import { WordBookTopic } from "@/types/curriculum";

export const wordBook: WordBookTopic[] = [
  {
    id: "daily-life",
    title: "Daily Life",
    emoji: "🌅",
    description: "Everyday vocabulary for home, routines, meals, and common activities.",
    color: "from-amber-400 to-orange-400",
    words: [
      {
        id: "dl-1", topic: "Daily Life", level: "A1", category: "Routine",
        english: "Wake up", word: "wake up", partOfSpeech: "phrasal verb",
        breakdown: "weyk up", chinese: "醒来", pinyin: "xǐng lái",
        emoji: "⏰", imageKeyword: "alarm clock morning",
        definitionEn: "To stop sleeping and become conscious.",
        definitionZh: "停止睡眠并恢复意识。",
        detailsEn: "Usually followed by 'at ... o'clock'. Common collocation: wake up early.",
        detailsZh: "通常后接 at ... o'clock。常见搭配：wake up early。",
        exampleEn: "I wake up at 7 a.m. every day.",
        exampleZh: "我每天早上7点醒来。",
        examples: [
          { en: "She wakes up early to exercise.", zh: "她早起锻炼。" },
          { en: "The noise woke me up.", zh: "噪音把我吵醒了。" }
        ],
        collocations: ["wake up early", "wake up late", "wake someone up"],
        synonyms: ["awake", "arise"], antonyms: ["fall asleep"],
        commonMistakes: [{ mistake: "Saying 'wake me up' when you mean yourself", correction: "Say 'I wake up' or 'wake me up' for others." }],
        pronunciationTips: "Two syllables. Stress the first: WEYK-up. 'Up' is very short.",
        memoryTrick: "Wake = 醒, up = 起来. Imagine your bed is a lake and you wake up out of it."
      },
      {
        id: "dl-2", topic: "Daily Life", level: "A1", category: "Routine",
        english: "Get dressed", word: "get dressed", partOfSpeech: "phrasal verb",
        breakdown: "get drest", chinese: "穿衣服", pinyin: "chuān yī fu",
        emoji: "👔", imageKeyword: "getting dressed",
        definitionEn: "To put clothes on your body.",
        definitionZh: "把衣服穿在身上。",
        detailsEn: "Use 'get dressed' for the whole action. Use 'dress' for the general act.",
        detailsZh: "用 get dressed 表示整个穿衣动作。dress 表示穿衣这件事。",
        exampleEn: "I get dressed after breakfast.",
        exampleZh: "我早饭后穿衣服。",
        examples: [
          { en: "He got dressed quickly.", zh: "他很快穿好了衣服。" },
          { en: "The child can get dressed alone.", zh: "这个孩子能自己穿衣服。" }
        ],
        collocations: ["get dressed quickly", "get dressed for work", "get up and get dressed"],
        synonyms: ["dress", "put on clothes"], antonyms: ["undress", "get undressed"],
        commonMistakes: [{ mistake: "Using 'wear' instead of 'get dressed' in continuous action", correction: "Use 'get dressed' for the action; 'wear' describes the state." }],
        pronunciationTips: "'Dressed' sounds like 'drest'. Link 'get-dressed' quickly.",
        memoryTrick: "Get = 变得, dressed = 穿好的. You become dressed."
      },
      {
        id: "dl-3", topic: "Daily Life", level: "A1", category: "Meals",
        english: "Breakfast", word: "breakfast", partOfSpeech: "noun",
        breakdown: "BREK-fast", chinese: "早餐", pinyin: "zǎo cān",
        emoji: "🥞", imageKeyword: "breakfast food",
        definitionEn: "The first meal of the day, eaten in the morning.",
        definitionZh: "一天中的第一餐，在早上吃。",
        detailsEn: "Common breakfast foods: cereal, toast, eggs, coffee.",
        detailsZh: "常见早餐食物：cereal、toast、eggs、coffee。",
        exampleEn: "Breakfast is the most important meal.",
        exampleZh: "早餐是一天中最重要的一餐。",
        examples: [
          { en: "I skipped breakfast today.", zh: "我今天没吃早餐。" },
          { en: "Let's have breakfast together.", zh: "我们一起吃早餐吧。" }
        ],
        collocations: ["have breakfast", "eat breakfast", "skip breakfast", "breakfast time"],
        synonyms: ["morning meal"], antonyms: [],
        commonMistakes: [{ mistake: "Saying 'take breakfast'", correction: "Use 'have' or 'eat' breakfast." }],
        pronunciationTips: "Stress the first syllable: BREK-fast. Two syllables.",
        memoryTrick: "Break = 打破, fast = 禁食. You break your overnight fast with breakfast."
      },
      {
        id: "dl-4", topic: "Daily Life", level: "A1", category: "Meals",
        english: "Lunch", word: "lunch", partOfSpeech: "noun",
        breakdown: "looch", chinese: "午餐", pinyin: "wǔ cān",
        emoji: "🥗", imageKeyword: "lunch box",
        definitionEn: "The meal eaten in the middle of the day.",
        definitionZh: "一天中午吃的那顿饭。",
        detailsEn: "In many countries, lunch is around 12–1 p.m.",
        detailsZh: "在许多国家，午餐在中午12点到1点左右。",
        exampleEn: "Let's have lunch together.",
        exampleZh: "我们一起吃午餐吧。",
        examples: [
          { en: "What's for lunch?", zh: "午餐吃什么？" },
          { en: "I brought lunch from home.", zh: "我带了自制午餐。" }
        ],
        collocations: ["have lunch", "lunch break", "lunch time", "pack lunch"],
        synonyms: ["midday meal"], antonyms: [],
        commonMistakes: [{ mistake: "Adding 'the' unnecessarily", correction: "Just say 'have lunch', not 'have the lunch'." }],
        pronunciationTips: "One syllable: looch. The 'nch' is soft like in 'bench'.",
        memoryTrick: "Lunch = 午餐. Remember: L is for Lunch."
      },
      {
        id: "dl-5", topic: "Daily Life", level: "A1", category: "Meals",
        english: "Dinner", word: "dinner", partOfSpeech: "noun",
        breakdown: "DIN-er", chinese: "晚餐", pinyin: "wǎn cān",
        emoji: "🍽️", imageKeyword: "dinner table",
        definitionEn: "The main meal of the day, usually in the evening.",
        definitionZh: "一天中的主餐，通常在晚上。",
        detailsEn: "For many families, dinner is the biggest meal. In some cultures, it's called supper.",
        detailsZh: "对许多家庭来说，晚餐是最大的一餐。在某些文化中称为 supper。",
        exampleEn: "We had dinner at a restaurant.",
        exampleZh: "我们在一家餐厅吃了晚餐。",
        examples: [
          { en: "Dinner is ready.", zh: "晚餐准备好了。" },
          { en: "After dinner, we watched a movie.", zh: "晚饭后我们看了一部电影。" }
        ],
        collocations: ["have dinner", "cook dinner", "dinner party", "invite to dinner"],
        synonyms: ["supper", "evening meal"], antonyms: [],
        commonMistakes: [{ mistake: "Confusing dinner with lunch", correction: "Dinner is usually evening; lunch is midday." }],
        pronunciationTips: "Stress the first syllable: DIN-er. The 'er' is weak.",
        memoryTrick: "Dinner = DIN. Imagine a loud DIN of conversation at a dinner party."
      },
      {
        id: "dl-6", topic: "Daily Life", level: "A2", category: "Housework",
        english: "Clean", word: "clean", partOfSpeech: "adjective / verb",
        breakdown: "kleen", chinese: "打扫；干净的", pinyin: "dǎ sǎo; gān jìng",
        emoji: "🧹", imageKeyword: "cleaning house",
        definitionEn: "To remove dirt; free from dirt.",
        definitionZh: "去除污垢；无污垢的。",
        detailsEn: "As a verb: clean the room. As an adjective: a clean shirt.",
        detailsZh: "作动词：clean the room。作形容词：a clean shirt。",
        exampleEn: "I clean my room every Saturday.",
        exampleZh: "我每周六打扫房间。",
        examples: [
          { en: "The kitchen is very clean.", zh: "厨房很干净。" },
          { en: "Please clean your shoes.", zh: "请擦干净你的鞋子。" }
        ],
        collocations: ["clean the house", "clean up", "cleanliness", "clean room"],
        synonyms: ["tidy", "spotless", "neat"], antonyms: ["dirty", "messy"],
        comparative: "cleaner", superlative: "cleanest",
        commonMistakes: [{ mistake: "Using 'clean' for people only", correction: "'Clean' is for objects, rooms, or clothes. Use 'tidy' for organized spaces." }],
        pronunciationTips: "Long 'ee': kleen. The 'c' sounds like 'k'.",
        memoryTrick: "Clean = C-Lean. C-shaped room is lean (without clutter) and clean."
      },
      {
        id: "dl-7", topic: "Daily Life", level: "A2", category: "Shopping",
        english: "Grocery", word: "grocery", partOfSpeech: "noun",
        breakdown: "GRO-suh-ree", chinese: "食品杂货", pinyin: "shí pǐn zá huò",
        emoji: "🛒", imageKeyword: "grocery shopping",
        definitionEn: "Food and household items bought at a store.",
        definitionZh: "在商店购买的食品和家居用品。",
        detailsEn: "Common phrase: grocery store / do the groceries.",
        detailsZh: "常见短语：grocery store / do the groceries。",
        exampleEn: "I need to buy groceries.",
        exampleZh: "我需要买食品杂货。",
        examples: [
          { en: "The grocery store is closed.", zh: "食品杂货店关门了。" },
          { en: "Let's do the groceries online.", zh: "我们在线购买食品杂货吧。" }
        ],
        collocations: ["grocery store", "grocery list", "do groceries", "grocery shopping"],
        synonyms: ["food shop", "supermarket"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'grocery' to mean the store", correction: "Use 'grocery store' or 'groceries' for items." }],
        pronunciationTips: "Three syllables: GRO-suh-ree. Stress the first.",
        memoryTrick: "Grocery = grow + er + y. Food that grows comes from the grocery."
      },
      {
        id: "dl-8", topic: "Daily Life", level: "B1", category: "Routine",
        english: "Commute", word: "commute", partOfSpeech: "verb / noun",
        breakdown: "kuh-MYOOT", chinese: "通勤", pinyin: "tōng qín",
        emoji: "🚗", imageKeyword: "commuting traffic",
        definitionEn: "The journey from home to work and back.",
        definitionZh: "从家到工作地点再返回的旅程。",
        detailsEn: "Common: commute to work, long commute, commute time.",
        detailsZh: "常见搭配：commute to work、long commute、commute time。",
        exampleEn: "My commute takes 45 minutes.",
        exampleZh: "我的通勤时间45分钟。",
        examples: [
          { en: "The commute is stressful.", zh: "通勤很累人。" },
          { en: "She commutes by train.", zh: "她坐火车通勤。" }
        ],
        collocations: ["commute to work", "daily commute", "long commute", "commute time"],
        synonyms: ["travel to work", "journey"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'commute' for short distances", correction: "Commute usually implies regular travel to work/school, not just going anywhere." }],
        pronunciationTips: "Stress the second syllable: kuh-MYOOT.",
        memoryTrick: "Com = 一起, mute = 沉默. You commute in silence together with others."
      },
      {
        id: "dl-9", topic: "Daily Life", level: "B1", category: "Shopping",
        english: "Budget", word: "budget", partOfSpeech: "noun / verb",
        breakdown: "BUDJ-it", chinese: "预算", pinyin: "yù suàn",
        emoji: "💰", imageKeyword: "budget planning",
        definitionEn: "A plan for how much money to spend.",
        definitionZh: "花钱的计划。",
        detailsEn: "As a verb: to budget carefully. As a noun: monthly budget.",
        detailsZh: "作动词：budget carefully。作名词：monthly budget。",
        exampleEn: "I budget $200 for groceries.",
        exampleZh: "我预留200美元买食品杂货。",
        examples: [
          { en: "We're on a tight budget.", zh: "我们的预算很紧。" },
          { en: "Budget for unexpected expenses.", zh: "为意外支出做预算。" }
        ],
        collocations: ["tight budget", "budget plan", "budget for", "over budget"],
        synonyms: ["allowance", "plan"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'budget' only as a noun", correction: "It can be a verb too: 'I need to budget carefully.'" }],
        pronunciationTips: "Stress the first syllable: BUDJ-it. Short 'u'.",
        memoryTrick: "Budget sounds like ‘巴哲’ — money (巴) needs careful planning (哲)."
      },
      {
        id: "dl-10", topic: "Daily Life", level: "A2", category: "Weather",
        english: "Forecast", word: "forecast", partOfSpeech: "noun / verb",
        breakdown: "FOR-cast", chinese: "天气预报", pinyin: "tiān qì yù bào",
        emoji: "🌤️", imageKeyword: "weather forecast",
        definitionEn: "A prediction about future weather conditions.",
        definitionZh: "对未来天气状况的预测。",
        detailsEn: "Common: weather forecast, forecast for tomorrow.",
        detailsZh: "常见搭配：weather forecast、forecast for tomorrow。",
        exampleEn: "The forecast says it will rain.",
        exampleZh: "天气预报说要下雨。",
        examples: [
          { en: "Check the forecast before hiking.", zh: "远足前查看天气预报。" },
          { en: "The forecast was wrong.", zh: "天气预报错了。" }
        ],
        collocations: ["weather forecast", "accurate forecast", "forecast for", "economic forecast"],
        synonyms: ["prediction", "outlook"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'forecast' only for weather", correction: "It can predict sales, trends, and more." }],
        pronunciationTips: "Stress the first syllable: FOR-cast.",
        memoryTrick: "Fore = 前, cast = 投. 向前投去 = 预测未来."
      },
      {
        id: "dl-11", topic: "Daily Life", level: "A2", category: "Housework",
        english: "Laundry", word: "laundry", partOfSpeech: "noun",
        breakdown: "LAWN-dree", chinese: "洗衣", pinyin: "xǐ yī",
        emoji: "🧺", imageKeyword: "laundry basket",
        definitionEn: "Clothes and linens that need washing or are being washed.",
        definitionZh: "需要洗或正在洗的衣物和织物。",
        detailsEn: "Common: do the laundry, laundry room, laundry basket.",
        detailsZh: "常见搭配：do the laundry、laundry room、laundry basket。",
        exampleEn: "I need to do the laundry.",
        exampleZh: "我需要洗衣服。",
        examples: [
          { en: "The laundry is done.", zh: "衣服洗好了。" },
          { en: "Put it in the laundry basket.", zh: "把它扔进洗衣篮。" }
        ],
        collocations: ["do the laundry", "laundry room", "laundry basket", "laundry service"],
        synonyms: ["washing"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'laundry' as a verb", correction: "Use 'do the laundry' or 'wash clothes'." }],
        pronunciationTips: "Two syllables: LAWN-dree. Stress the first.",
        memoryTrick: "Laundry = 洗 (wash) + dry. It sounds like 'laundry'."
      },
      {
        id: "dl-17", topic: "Daily Life", level: "A2", category: "Routine",
        english: "Exercise", word: "exercise", partOfSpeech: "noun / verb",
        breakdown: "EK-ser-syz", chinese: "锻炼", pinyin: "duàn liàn",
        emoji: "🏃", imageKeyword: "person exercising",
        definitionEn: "Physical activity to improve health.",
        definitionZh: "为改善健康而进行的体育活动。",
        detailsEn: "Common: do exercise, regular exercise, morning exercise.",
        detailsZh: "常见搭配：do exercise、regular exercise、morning exercise。",
        exampleEn: "I exercise every morning.",
        exampleZh: "我每天早上锻炼。",
        examples: [
          { en: "Exercise keeps you healthy.", zh: "锻炼让你保持健康。" },
          { en: "She exercises for 30 minutes daily.", zh: "她每天锻炼30分钟。" }
        ],
        collocations: ["do exercise", "regular exercise", "exercise routine", "morning exercise"],
        synonyms: ["workout", "activity"], antonyms: ["sedentary"],
        commonMistakes: [{ mistake: "Using 'sport' for all physical activity", correction: "Exercise = 锻炼; sport = 体育运动. Exercise is broader." }],
        pronunciationTips: "Stress the first syllable: EK-ser-syz.",
        memoryTrick: "Ex + ercise. Ex (extra) + ercise (sounds like 锻炼) = extra training."
      },
      {
        id: "dl-18", topic: "Daily Life", level: "A2", category: "Housework",
        english: "Dishwasher", word: "dishwasher", partOfSpeech: "noun",
        breakdown: "DISH-wah-sher", chinese: "洗碗机", pinyin: "xǐ wán jī",
        emoji: "🍽️", imageKeyword: "dishwasher machine",
        definitionEn: "A machine that washes dishes automatically.",
        definitionZh: "自动洗碗的机器。",
        detailsEn: "Common: load the dishwasher, run the dishwasher.",
        detailsZh: "常见搭配：load the dishwasher、run the dishwasher。",
        exampleEn: "The dishwasher is broken.",
        exampleZh: "洗碗机坏了。",
        examples: [
          { en: "Load the dishwasher after dinner.", zh: "晚饭后把碗放进洗碗机。" },
          { en: "We bought a new dishwasher.", zh: "我们买了一台新洗碗机。" }
        ],
        collocations: ["load dishwasher", "run dishwasher", "dishwasher detergent", "built-in dishwasher"],
        synonyms: ["dishwashing machine"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'dishwash' as a verb", correction: "Use 'run the dishwasher' or 'wash dishes'; 'dishwash' is rare." }],
        pronunciationTips: "Stress the first syllable: DISH-wah-sher.",
        memoryTrick: "Dish + washer. A machine that washes dishes."
      },
      {
        id: "dl-19", topic: "Daily Life", level: "B1", category: "Finance",
        english: "Expense", word: "expense", partOfSpeech: "noun",
        breakdown: "ik-SPENS", chinese: "开销", pinyin: "kāi xiāo",
        emoji: "💸", imageKeyword: "expenses receipt",
        definitionEn: "The cost of something; money spent.",
        definitionZh: "某物的成本；花费的钱。",
        detailsEn: "Common: cover expenses, monthly expenses, expense report.",
        detailsZh: "常见搭配：cover expenses、monthly expenses、expense report。",
        exampleEn: "Travel expenses are high.",
        exampleZh: "旅行费用很高。",
        examples: [
          { en: "The company covers all expenses.", zh: "公司支付所有费用。" },
          { en: "Keep track of your expenses.", zh: "记录你的开销。" }
        ],
        collocations: ["cover expenses", "monthly expenses", "expense report", "living expenses"],
        synonyms: ["cost", "charge"], antonyms: ["income"],
        commonMistakes: [{ mistake: "Using 'expensive' as a noun", correction: "Expense is the noun; expensive is the adjective." }],
        pronunciationTips: "Stress the second syllable: ik-SPENS.",
        memoryTrick: "Expense = ex + pense. Ex (former) + pense (think of money) = spending."
      },
      {
        id: "dl-20", topic: "Daily Life", level: "B1", category: "Routine",
        english: "Routine", word: "routine", partOfSpeech: "noun / adjective",
        breakdown: "roo-TEEN", chinese: "常规；日常的", pinyin: "cháng guī; rì cháng de",
        emoji: "📅", imageKeyword: "daily routine planner",
        definitionEn: "A fixed set of actions done regularly.",
        definitionZh: "定期进行的固定行为。",
        detailsEn: "Common: daily routine, morning routine, routine check.",
        detailsZh: "常见搭配：daily routine、morning routine、routine check。",
        exampleEn: "I have a morning routine.",
        exampleZh: "我有晨间常规。",
        examples: [
          { en: "She follows a strict routine.", zh: "她遵循严格的日常安排。" },
          { en: "The job became routine.", zh: "工作变得例行公事。" }
        ],
        collocations: ["daily routine", "morning routine", "routine maintenance", "routine check"],
        synonyms: ["schedule", "habit"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'routine' only positively", correction: "It can be neutral or negative: 'routine job' = boring repetition." }],
        pronunciationTips: "Stress the second syllable: roo-TEEN.",
        memoryTrick: "Route + ine. A regular route you follow every day."
      }
    ]
  },
  {
    id: "travel",
    title: "Travel",
    emoji: "✈️",
    description: "Airports, hotels, directions, sightseeing, and transportation.",
    color: "from-sky-400 to-cyan-400",
    words: [
      {
        id: "tv-1", topic: "Travel", level: "A2", category: "Documents",
        english: "Passport", word: "passport", partOfSpeech: "noun",
        breakdown: "PASS-port", chinese: "护照", pinyin: "hù zhào",
        emoji: "🛂", imageKeyword: "passport document",
        definitionEn: "Official document for international travel.",
        definitionZh: "国际旅行的官方证件。",
        detailsEn: "Required at borders. Keep it safe.",
        detailsZh: "在边境需要出示。请妥善保管。",
        exampleEn: "Don't forget your passport.",
        exampleZh: "别忘了带护照。",
        examples: [
          { en: "My passport expires next year.", zh: "我的护照明年过期。" },
          { en: "Passport control is on the left.", zh: "护照检查在左边。" }
        ],
        collocations: ["valid passport", "renew passport", "passport control", "passport photo"],
        synonyms: ["travel document"], antonyms: [],
        commonMistakes: [{ mistake: "Calling it 护照本 constantly in English", correction: "Just say passport." }],
        pronunciationTips: "Stress first syllable: PASS-port.",
        memoryTrick: "Pass + port. You pass through ports with it."
      },
      {
        id: "tv-2", topic: "Travel", level: "A1", category: "Documents",
        english: "Ticket", word: "ticket", partOfSpeech: "noun",
        breakdown: "TIK-it", chinese: "票", pinyin: "piào",
        emoji: "🎫", imageKeyword: "train ticket",
        definitionEn: "Entry document for transport or events.",
        definitionZh: "交通或活动的入场凭证。",
        detailsEn: "Types: plane ticket, train ticket, e-ticket.",
        detailsZh: "类型：plane ticket、train ticket、e-ticket。",
        exampleEn: "I bought a round-trip ticket.",
        exampleZh: "我买了一张往返票。",
        examples: [
          { en: "One ticket to London, please.", zh: "请给我一张去伦敦的票。" },
          { en: "The ticket is valid for 30 days.", zh: "这张票30天内有效。" }
        ],
        collocations: ["buy a ticket", "one-way ticket", "round-trip ticket", "e-ticket"],
        synonyms: ["pass", "voucher"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'ticket book' for all tickets", correction: "Use specific terms: boarding pass, entry ticket." }],
        pronunciationTips: "Short i: TIK-it.",
        memoryTrick: "Ticket sounds like ‘提克特’ — you 提 (show) a ticket."
      },
      {
        id: "tv-3", topic: "Travel", level: "A2", category: "Lodging",
        english: "Reservation", word: "reservation", partOfSpeech: "noun",
        breakdown: "rez-er-VAY-shun", chinese: "预订", pinyin: "yù dìng",
        emoji: "📅", imageKeyword: "hotel reservation",
        definitionEn: "An arrangement to secure a room or seat in advance.",
        definitionZh: "提前预订房间或座位的安排。",
        detailsEn: "Common: make a reservation, cancel reservation.",
        detailsZh: "常见搭配：make a reservation、cancel reservation。",
        exampleEn: "I have a reservation under Smith.",
        exampleZh: "我以Smith的名字预订了。",
        examples: [
          { en: "Make a reservation for two.", zh: "预订两人的位置。" },
          { en: "The reservation was cancelled.", zh: "预订被取消了。" }
        ],
        collocations: ["make a reservation", "cancel reservation", "hotel reservation"],
        synonyms: ["booking"], antonyms: ["walk-in"],
        commonMistakes: [{ mistake: "Using 'reserve' as a noun", correction: "Reserve is usually a verb; reservation is the noun." }],
        pronunciationTips: "Stress fourth syllable: rez-er-VAY-shun.",
        memoryTrick: "Re + serve + ation. You're serving yourself a spot ahead."
      },
      {
        id: "tv-4", topic: "Travel", level: "A2", category: "Luggage",
        english: "Baggage", word: "baggage", partOfSpeech: "noun",
        breakdown: "BAG-ij", chinese: "行李", pinyin: "xíng lǐ",
        emoji: "🧳", imageKeyword: "luggage at airport",
        definitionEn: "Suitcases and bags taken on a trip.",
        definitionZh: "旅行时携带的行李箱和包。",
        detailsEn: "Uncountable. Use 'pieces of baggage' or 'bags'.",
        detailsZh: "不可数。用 pieces of baggage 或 bags。",
        exampleEn: "My baggage weighs 20 kg.",
        exampleZh: "我的行李重20公斤。",
        examples: [
          { en: "Hand baggage only, please.", zh: "请只带手提行李。" },
          { en: "Baggage claim is downstairs.", zh: "行李提取在楼下。" }
        ],
        collocations: ["baggage allowance", "baggage claim", "excess baggage", "carry-on baggage"],
        synonyms: ["luggage"], antonyms: [],
        commonMistakes: [{ mistake: "Saying 'baggages'", correction: "Baggage is uncountable." }],
        pronunciationTips: "Soft g: BAG-ij. 'Age' sounds like 'ij'.",
        memoryTrick: "Bag + age. Your bags grow heavier with age."
      },
      {
        id: "tv-5", topic: "Travel", level: "A2", category: "Transport",
        english: "Ferry", word: "ferry", partOfSpeech: "noun",
        breakdown: "FERR-ee", chinese: "渡轮", pinyin: "dù lún",
        emoji: "⛴️", imageKeyword: "ferry boat",
        definitionEn: "A boat that carries people and vehicles across water.",
        definitionZh: "载人和车辆过水的船。",
        detailsEn: "Common: ferry terminal, ferry ride, cross by ferry.",
        detailsZh: "常见搭配：ferry terminal、ferry ride、cross by ferry。",
        exampleEn: "We took the ferry to the island.",
        exampleZh: "我们坐渡轮到岛上。",
        examples: [
          { en: "The ferry departs at 6 a.m.", zh: "渡轮早上6点出发。" },
          { en: "Ferry tickets are cheap.", zh: "渡轮票很便宜。" }
        ],
        collocations: ["ferry terminal", "ferry ride", "by ferry", "ferry crossing"],
        synonyms: ["boat", "ship"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'ship' for short water crossings", correction: "Use 'ferry' for short, regular crossings; 'ship' is larger." }],
        pronunciationTips: "Two syllables: FERR-ee. Stress the first.",
        memoryTrick: "Ferry = ferry. It carries you across the water like a bus on water."
      },
      {
        id: "tv-6", topic: "Travel", level: "A1", category: "Directions",
        english: "Map", word: "map", partOfSpeech: "noun",
        breakdown: "map", chinese: "地图", pinyin: "dì tú",
        emoji: "🗺️", imageKeyword: "world map",
        definitionEn: "A drawing showing places and directions.",
        definitionZh: "显示地点和方向的地图。",
        detailsEn: "Useful for asking directions: 'Where is ... on the map?'",
        detailsZh: "问路时有用："Where is ... on the map?"",
        exampleEn: "Look at the map, please.",
        exampleZh: "请看地图。",
        examples: [
          { en: "The map shows the airport.", zh: "地图上标有机场。" },
          { en: "I have a map on my phone.", zh: "我手机上有地图。" }
        ],
        collocations: ["road map", "map of", "on the map", "map app"],
        synonyms: ["chart", "atlas"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'map' as a verb in formal writing", correction: "Use 'chart' or 'plan' as verbs." }],
        pronunciationTips: "Short 'a': map. Like 'cap' with 'm'.",
        memoryTrick: "Map looks like a flat land map. Map = 地图."
      },
      {
        id: "tv-7", topic: "Travel", level: "A1", category: "Transport",
        english: "Train", word: "train", partOfSpeech: "noun / verb",
        breakdown: "trayn", chinese: "火车；训练", pinyin: "huǒ chē; xùn liàn",
        emoji: "🚆", imageKeyword: "train station",
        definitionEn: "A vehicle running on rails; also means to teach a skill.",
        definitionZh: "在铁轨上运行的交通工具；也指训练技能。",
        detailsEn: "As verb: train to be a teacher. As noun: catch the train.",
        detailsZh: "作动词：train to be a teacher。作名词：catch the train。",
        exampleEn: "The train leaves at 9.",
        exampleZh: "火车9点开。",
        examples: [
          { en: "I take the train to work.", zh: "我坐火车上班。" },
          { en: "She is training to be a nurse.", zh: "她正在接受培训成为护士。" }
        ],
        collocations: ["catch a train", "train station", "high-speed train", "train timetable"],
        synonyms: ["rail", "railway"], antonyms: [],
        commonMistakes: [{ mistake: "Confusing train with education", correction: "Context matters: 'train' for transport vs education." }],
        pronunciationTips: "Long 'a': trayn. Like 'plane' but with 'tr'.",
        memoryTrick: "Train = 火车. T shaped like a train track."
      },
      {
        id: "tv-8", topic: "Travel", level: "A1", category: "Transport",
        english: "Bus", word: "bus", partOfSpeech: "noun",
        breakdown: "buhs", chinese: "公交车", pinyin: "gōng jiāo chē",
        emoji: "🚌", imageKeyword: "bus stop",
        definitionEn: "A large vehicle carrying passengers along a route.",
        definitionZh: "沿路线运送乘客的大型车辆。",
        detailsEn: "Common: bus stop, bus station, catch the bus.",
        detailsZh: "常见搭配：bus stop、bus station、catch the bus。",
        exampleEn: "I missed the bus.",
        exampleZh: "我错过了公交车。",
        examples: [
          { en: "The bus is crowded.", zh: "公交车很挤。" },
          { en: "Take bus number 42.", zh: "坐42路公交车。" }
        ],
        collocations: ["bus stop", "bus station", "catch the bus", "bus route"],
        synonyms: ["coach"], antonyms: [],
        commonMistakes: [{ mistake: "Using plural 'buses' incorrectly", correction: "Plural is buses (es added)." }],
        pronunciationTips: "Short 'u': buhs. One syllable.",
        memoryTrick: "Bus = 巴. 公交车像巴 (bus) 士一样又大又长."
      },
      {
        id: "tv-9", topic: "Travel", level: "A2", category: "Lodging",
        english: "Hotel", word: "hotel", partOfSpeech: "noun",
        breakdown: "hoh-TEL", chinese: "酒店", pinyin: "jiǔ diàn",
        emoji: "🏨", imageKeyword: "hotel building",
        definitionEn: "A place where travelers stay overnight.",
        definitionZh: "旅客过夜住宿的地方。",
        detailsEn: "Types: budget hotel, luxury hotel, boutique hotel.",
        detailsZh: "类型：budget hotel、luxury hotel、boutique hotel。",
        exampleEn: "The hotel has free Wi-Fi.",
        exampleZh: "酒店有免费Wi-Fi。",
        examples: [
          { en: "Check in at the hotel.", zh: "到酒店办理入住。" },
          { en: "The hotel is fully booked.", zh: "酒店已订满。" }
        ],
        collocations: ["book a hotel", "hotel room", "hotel lobby", "luxury hotel"],
        synonyms: ["inn", "motel", "resort"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'hotel' as a verb", correction: "Use 'stay at a hotel' or 'book a hotel'." }],
        pronunciationTips: "Stress the second syllable: hoh-TEL.",
        memoryTrick: "Hotel = ho + tel. 呼 (ho) 吸 (tel) — you rest and breathe easy."
      }
    ]
  },
  {
    id: "work-business",
    title: "Work & Business",
    emoji: "💼",
    description: "Office vocabulary, meetings, careers, and professional communication.",
    color: "from-indigo-400 to-blue-400",
    words: [
      {
        id: "wb-1", topic: "Work", level: "B1", category: "Office",
        english: "Meeting", word: "meeting", partOfSpeech: "noun",
        breakdown: "MEET-ing", chinese: "会议", pinyin: "huì yì",
        emoji: "🗓️", imageKeyword: "business meeting",
        definitionEn: "An organized discussion at work.",
        definitionZh: "工作中组织的讨论会。",
        detailsEn: "Types: team meeting, board meeting, one-on-one.",
        detailsZh: "类型：team meeting、board meeting、one-on-one。",
        exampleEn: "We have a meeting at 10.",
        exampleZh: "我们10点有个会议。",
        examples: [
          { en: "The meeting was productive.", zh: "会议很高效。" },
          { en: "Can we reschedule the meeting?", zh: "我们可以改期会议吗？" }
        ],
        collocations: ["have a meeting", "attend a meeting", "team meeting", "board meeting"],
        synonyms: ["conference", "discussion"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'see a meeting'", correction: "Use 'have' or 'attend'." }],
        pronunciationTips: "Stress first syllable: MEET-ing. Long 'ee'.",
        memoryTrick: "Meeting = meet + ing. People keep meeting."
      },
      {
        id: "wb-2", topic: "Work", level: "B2", category: "Tasks",
        english: "Deadline", word: "deadline", partOfSpeech: "noun",
        breakdown: "DEAD-line", chinese: "截止日期", pinyin: "jié zhǐ rī qī",
        emoji: "⏰", imageKeyword: "deadline clock",
        definitionEn: "The latest time by which something must be finished.",
        definitionZh: "必须完成某事的最晚时间。",
        detailsEn: "Common phrases: meet the deadline, miss the deadline.",
        detailsZh: "常见搭配：meet the deadline、miss the deadline。",
        exampleEn: "The deadline is tomorrow.",
        exampleZh: "截止日期是明天。",
        examples: [
          { en: "We need to meet the deadline.", zh: "我们需要赶上截止日期。" },
          { en: "It's past the deadline.", zh: "超过截止日期了。" }
        ],
        collocations: ["meet a deadline", "miss the deadline", "tight deadline", "deadline approaches"],
        synonyms: ["time limit", "cutoff"], antonyms: [],
        commonMistakes: [{ mistake: "Writing 'dead line' as two words", correction: "It's one word: deadline." }],
        pronunciationTips: "Stress first syllable: DEAD-line.",
        memoryTrick: "Deadline = dead + line. Cross the line and your project is dead."
      },
      {
        id: "wb-3", topic: "Work", level: "B2", category: "Career",
        english: "Promotion", word: "promotion", partOfSpeech: "noun",
        breakdown: "pro-MO-tion", chinese: "晋升", pinyin: "jìn shēng",
        emoji: "📈", imageKeyword: "career promotion",
        definitionEn: "Advancement to a higher position.",
        definitionZh: "晋升到更高的职位。",
        detailsEn: "Often includes higher salary and more responsibility.",
        detailsZh: "通常包括更高薪水和更多责任。",
        exampleEn: "She got a promotion after six months.",
        exampleZh: "她六个月后获得了晋升。",
        examples: [
          { en: "He is looking for a promotion.", zh: "他在寻求晋升。" },
          { en: "Promotion opportunities are rare here.", zh: "这里晋升机会很少。" }
        ],
        collocations: ["get a promotion", "promotion to manager", "promotion opportunity"],
        synonyms: ["advancement", "rise"], antonyms: ["demotion"],
        commonMistakes: [{ mistake: "Confusing with promotional", correction: "Promotion = 晋升; promotional = 促销的." }],
        pronunciationTips: "Stress second syllable: pro-MO-tion. Four syllables.",
        memoryTrick: "Promotion sounds like 'pro-motion' — a professional move upward."
      },
      {
        id: "wb-4", topic: "Work", level: "B2", category: "Tasks",
        english: "Negotiate", word: "negotiate", partOfSpeech: "verb",
        breakdown: "ni-GO-shee-ate", chinese: "谈判", pinyin: "tán pàn",
        emoji: "🤝", imageKeyword: "business negotiation",
        definitionEn: "To discuss terms to reach an agreement.",
        definitionZh: "讨论条款以达成协议。",
        detailsEn: "Common: negotiate a deal, negotiate salary.",
        detailsZh: "常见搭配：negotiate a deal、negotiate salary。",
        exampleEn: "We need to negotiate the price.",
        exampleZh: "我们需要谈价格。",
        examples: [
          { en: "She negotiated a better contract.", zh: "她谈妥了一份更好的合同。" },
          { en: "They negotiated for two days.", zh: "他们谈判了两天。" }
        ],
        collocations: ["negotiate a deal", "negotiate terms", "negotiate salary", "negotiate with"],
        synonyms: ["discuss", "mediate", "bargain"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'arrange' instead", correction: "Negotiate implies compromise; arrange is more about organizing." }],
        pronunciationTips: "Stress third syllable: ni-GO-shee-ate.",
        memoryTrick: "Go = 去, she = 她. 她去谈判. Negotiate = ni-go-shee-ate."
      },
      {
        id: "wb-5", topic: "Work", level: "B2", category: "Career",
        english: "Resume", word: "resume", partOfSpeech: "noun",
        breakdown: "REZ-oo-may", chinese: "简历", pinyin: "jiǎn lì",
        emoji: "📄", imageKeyword: "resume document",
        definitionEn: "A document summarizing your work experience.",
        definitionZh: "总结工作经历的文件。",
        detailsEn: "In British English, often called CV (curriculum vitae).",
        detailsZh: "英式英语常叫 CV (curriculum vitae)。",
        exampleEn: "Send me your resume by Friday.",
        exampleZh: "周五前把你的简历发给我。",
        examples: [
          { en: "Her resume is very impressive.", zh: "她的简历令人印象深刻。" },
          { en: "Update your resume regularly.", zh: "定期更新简历。" }
        ],
        collocations: ["submit a resume", "update resume", "resume template", "job resume"],
        synonyms: ["CV", "curriculum vitae"], antonyms: [],
        commonMistakes: [{ mistake: "Pronouncing as 'res-ume' (again)", correction: "In this context, it's REZ-oo-may. The verb 'resume' (继续) is ri-ZOOM." }],
        pronunciationTips: "Stress first syllable: REZ-oo-may. Three syllables.",
        memoryTrick: "Re = 重新, sume = 总结. 重新总结你的经历 = resume."
      },
      {
        id: "wb-6", topic: "Work", level: "B1", category: "Tasks",
        english: "Task", word: "task", partOfSpeech: "noun",
        breakdown: "task", chinese: "任务", pinyin: "rèn wu",
        emoji: "✅", imageKeyword: "work task list",
        definitionEn: "A piece of work that needs to be done.",
        definitionZh: "需要完成的一项工作。",
        detailsEn: "Common: complete a task, assign a task, task force.",
        detailsZh: "常见搭配：complete a task、assign a task、task force。",
        exampleEn: "My task is to review the report.",
        exampleZh: "我的任务是审查报告。",
        examples: [
          { en: "Finish the task before lunch.", zh: "午饭前完成任务。" },
          { en: "The task requires focus.", zh: "这个任务需要专注。" }
        ],
        collocations: ["complete a task", "assign a task", "task force", "main task"],
        synonyms: ["job", "assignment", "duty"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'task' as a verb", correction: "Use 'assign a task' or 'complete a task'; task is primarily a noun." }],
        pronunciationTips: "One syllable: task. Like 'mask' with 't'.",
        memoryTrick: "Task = task. Simple: a task is a piece of work."
      }
    ]
  },
  {
    id: "shopping",
    title: "Shopping",
    emoji: "🛍️",
    description: "Clothes, sizes, prices, bargaining, returns, and payment.",
    color: "from-pink-400 to-rose-400",
    words: [
      {
        id: "sh-1", topic: "Shopping", level: "A1", category: "Clothes",
        english: "Size", word: "size", partOfSpeech: "noun",
        breakdown: "syz", chinese: "尺寸", pinyin: "chǐ cun",
        emoji: "📏", imageKeyword: "clothing size tag",
        definitionEn: "A standardized measurement for clothing.",
        definitionZh: "服装的标准尺寸。",
        detailsEn: "Common: S, M, L, XL. Also medium, large.",
        detailsZh: "常见：S、M、L、XL。也常用 medium、large。",
        exampleEn: "What size do you wear?",
        exampleZh: "你穿多大码？",
        examples: [
          { en: "Do you have this in a smaller size?", zh: "这件有小一号的吗？" },
          { en: "Size 42, please.", zh: "请给我42码。" }
        ],
        collocations: ["what size", "size up", "size down", "full size"],
        synonyms: ["fit", "measurement"], antonyms: [],
        commonMistakes: [{ mistake: "Using '尺码' in English", correction: "Just say 'size'." }],
        pronunciationTips: "Like 'sighs' with a 'z': syz.",
        memoryTrick: "Size sounds like ‘赛斯’ — competing for the best size."
      },
      {
        id: "sh-2", topic: "Shopping", level: "A2", category: "Price",
        english: "Expensive", word: "expensive", partOfSpeech: "adjective",
        breakdown: "ik-SPEN-siv", chinese: "贵的", pinyin: "guì de",
        emoji: "💸", imageKeyword: "expensive shopping bag",
        definitionEn: "Costing a lot of money.",
        definitionZh: "花费很多钱；价格高的。",
        detailsEn: "Opposite: cheap / inexpensive.",
        detailsZh: "反义词：cheap / inexpensive。",
        exampleEn: "This jacket is too expensive.",
        exampleZh: "这件夹克太贵了。",
        examples: [
          { en: "Luxury cars are expensive.", zh: "豪车很贵。" },
          { en: "It's worth it even if expensive.", zh: "即使贵也值得。" }
        ],
        collocations: ["too expensive", "expensive item", "expensive city"],
        synonyms: ["pricey", "costly"], antonyms: ["cheap", "affordable"],
        comparative: "more expensive", superlative: "most expensive",
        commonMistakes: [{ mistake: "Using 'expansive'", correction: "Expensive = 贵的; expansive = 广阔的." }],
        pronunciationTips: "Stress second syllable: ik-SPEN-siv.",
        memoryTrick: "Ex + pen + sive = you spent all your ex-pennies."
      },
      {
        id: "sh-3", topic: "Shopping", level: "A2", category: "Actions",
        english: "Try on", word: "try on", partOfSpeech: "phrasal verb",
        breakdown: "try on", chinese: "试穿", pinyin: "shì chuān",
        emoji: "👕", imageKeyword: "trying on clothes",
        definitionEn: "To put on clothes to check the fit.",
        definitionZh: "穿上衣服检查是否合身。",
        detailsEn: "Object goes middle: try the shirt on / try it on.",
        detailsZh: "宾语放中间：try the shirt on / try it on。",
        exampleEn: "I want to try on this jacket.",
        exampleZh: "我想试穿这件夹克。",
        examples: [
          { en: "Can I try these shoes on?", zh: "我可以试穿这双鞋吗？" },
          { en: "She tried on three dresses.", zh: "她试穿了三条连衣裙。" }
        ],
        collocations: ["try on clothes", "try on shoes", "try something on"],
        synonyms: ["test fit"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'try it' for clothes", correction: "Use 'try it on' for clothes; 'try it' is for experiences like food." }],
        pronunciationTips: "Both words are short and linked: try-on.",
        memoryTrick: "Try + on = you literally try it ON your body."
      },
      {
        id: "sh-4", topic: "Shopping", level: "A2", category: "Payment",
        english: "Receipt", word: "receipt", partOfSpeech: "noun",
        breakdown: "ri-SEET", chinese: "收据", pinyin: "shōu jù",
        emoji: "🧾", imageKeyword: "shopping receipt",
        definitionEn: "A piece of paper proving a purchase was made.",
        definitionZh: "证明已完成购买的纸张。",
        detailsEn: "Keep receipts for returns and warranties.",
        detailsZh: "保留收据用于退货和保修。",
        exampleEn: "Here is your receipt.",
        exampleZh: "这是您的收据。",
        examples: [
          { en: "Can I have a receipt?", zh: "请给我一张收据。" },
          { en: "The receipt shows $50.", zh: "收据显示50美元。" }
        ],
        collocations: ["ask for a receipt", "keep the receipt", "store receipt"],
        synonyms: ["proof of purchase"], antonyms: [],
        commonMistakes: [{ mistake: "Confusing receipt with recipe", correction: "Receipt = 收据; recipe = 食谱. Different meanings." }],
        pronunciationTips: "Stress the second syllable: ri-SEET. 'Ceit' sounds like 'seat'.",
        memoryTrick: "Receipt = re + ceipt. You receive (re) a ceipt (note) after paying."
      },
      {
        id: "sh-5", topic: "Shopping", level: "A1", category: "Actions",
        english: "Bargain", word: "bargain", partOfSpeech: "noun / verb",
        breakdown: "BAR-guhn", chinese: "讨价还价", pinyin: "tǎo jià huán jià",
        emoji: "💬", imageKeyword: "market bargaining",
        definitionEn: "To negotiate the price; also a good deal.",
        definitionZh: "商议价格；也指划算的交易。",
        detailsEn: "Common: bargain for a better price, it's a bargain.",
        detailsZh: "常见搭配：bargain for a better price、it's a bargain。",
        exampleEn: "I got it for a bargain.",
        exampleZh: "我低价买到了它。",
        examples: [
          { en: "Can you bargain at this shop?", zh: "这家店能讨价还价吗？" },
          { en: "That shirt is a real bargain.", zh: "那件衬衫真的很划算。" }
        ],
        collocations: ["bargain for", "bargain price", "real bargain", "bargain basement"],
        synonyms: ["deal", "discount"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'bargain' as an adjective", correction: "Use 'bargain price' or 'bargain deal'; 'bargain' is mainly noun/verb." }],
        pronunciationTips: "Stress the first syllable: BAR-guhn.",
        memoryTrick: "Bar + gain. You gain something at the bar (market) by bargaining."
      }
    ]
  },
  {
    id: "friends-social",
    title: "Friends & Social Life",
    emoji: "👥",
    description: "Making plans, hanging out, and social expressions.",
    color: "from-emerald-400 to-teal-400",
    words: [
      {
        id: "fr-1", topic: "Friends", level: "A2", category: "Social verbs",
        english: "Hang out", word: "hang out", partOfSpeech: "phrasal verb",
        breakdown: "hang out", chinese: "闲逛；出去玩", pinyin: "xián guàng; chū qù wán",
        emoji: "☕", imageKeyword: "friends coffee",
        definitionEn: "To spend time with friends in a relaxed way.",
        definitionZh: "以轻松的方式和朋友共度时光。",
        detailsEn: "Very common casual expression. Not formal.",
        detailsZh: "非常常用的非正式表达。不适用于正式场合。",
        exampleEn: "Let's hang out this weekend.",
        exampleZh: "这个周末我们一起出去玩吧。",
        examples: [
          { en: "We hung out at the mall.", zh: "我们在商场闲逛。" },
          { en: "Where do you usually hang out?", zh: "你通常在哪里玩？" }
        ],
        collocations: ["hang out with friends", "hang out at", "just hanging out"],
        synonyms: ["chill", "spend time", "socialize"], antonyms: [],
        commonMistakes: [{ mistake: "Using it in business emails", correction: "Hang out is casual only. Use 'meet' or 'get together' at work." }],
        pronunciationTips: "Both words unstressed in natural speech: hang OUT.",
        memoryTrick: "Hang = 挂, Out = 出去. Friends hang out together like clothes hanging on a line outside."
      },
      {
        id: "fr-2", topic: "Friends", level: "B1", category: "Events",
        english: "Get together", word: "get together", partOfSpeech: "phrasal verb",
        breakdown: "get to-geth-er", chinese: "聚会", pinyin: "jù huì",
        emoji: "🎉", imageKeyword: "party friends",
        definitionEn: "To meet socially, often for a meal or celebration.",
        definitionZh: "socially 聚会，通常为了吃饭或庆祝。",
        detailsEn: "More organized than 'hang out'; implies planned gathering.",
        detailsZh: "比 hang out 更有组织性；常指计划好的聚会。",
        exampleEn: "We should get together soon.",
        exampleZh: "我们应该很快聚一聚。",
        examples: [
          { en: "Let's get together for dinner.", zh: "我们一起吃晚饭吧。" },
          { en: "The family gets together every holiday.", zh: "全家每个假期都聚会。" }
        ],
        collocations: ["get together for", "get together with", "family get-together"],
        synonyms: ["meet up", "gather"], antonyms: [],
        commonMistakes: [{ mistake: "Using for formal meetings", correction: "Use 'meeting' for work; use 'get together' for friends/family." }],
        pronunciationTips: "Link smoothly: get-to-GETH-er. Stress 'geth'.",
        memoryTrick: "Get + together = get together = 聚会."
      },
      {
        id: "fr-3", topic: "Friends", level: "A2", category: "Relationships",
        english: "Best friend", word: "best friend", partOfSpeech: "noun",
        breakdown: "best friend", chinese: "最好的朋友", pinyin: "zuì hǎo de péng yǒu",
        emoji: "🤝", imageKeyword: "best friends together",
        definitionEn: "A person you know well and like very much.",
        definitionZh: "你很了解并且非常喜欢的人。",
        detailsEn: "Common: childhood best friend, be best friends with.",
        detailsZh: "常见搭配：childhood best friend、be best friends with。",
        exampleEn: "She is my best friend.",
        exampleZh: "她是我最好的朋友。",
        examples: [
          { en: "We've been best friends since childhood.", zh: "我们从小就是最好的朋友。" },
          { en: "He made many best friends at university.", zh: "他在大学交了很多好朋友。" }
        ],
        collocations: ["best friend since childhood", "best friends with", "become best friends"],
        synonyms: ["close friend", "companion"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'good friend' when you mean 'best friend'", correction: "'Best friend' is stronger; 'good friend' is less intimate." }],
        pronunciationTips: "Stress both words equally: BEST friend.",
        memoryTrick: "Best = 最好的, friend = 朋友. The top-ranked friend."
      },
      {
        id: "fr-4", topic: "Friends", level: "A2", category: "Social",
        english: "Party", word: "party", partOfSpeech: "noun",
        breakdown: "PAR-tee", chinese: "派对", pinyin: "pài duì",
        emoji: "🎉", imageKeyword: "birthday party",
        definitionEn: "A social gathering for celebration.",
        definitionZh: "为庆祝而举行的社交聚会。",
        detailsEn: "Common: birthday party, surprise party, house party.",
        detailsZh: "常见搭配：birthday party、surprise party、house party。",
        exampleEn: "Are you going to the party?",
        exampleZh: "你要去派对吗？",
        examples: [
          { en: "The party starts at 8.", zh: "派对8点开始。" },
          { en: "It was a great party.", zh: "派对很棒。" }
        ],
        collocations: ["birthday party", "surprise party", "house party", "party guest"],
        synonyms: ["gathering", "celebration"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'party' only for nightlife", correction: "It can be any celebration, including family parties." }],
        pronunciationTips: "Stress the first syllable: PAR-tee.",
        memoryTrick: "Party = 派对. Par = 派, ty = 队. A team for celebration."
      }
    ]
  },
  {
    id: "restaurants",
    title: "Restaurants & Food",
    emoji: "🍽️",
    description: "Ordering, ingredients, cooking methods, and dining conversation.",
    color: "from-orange-400 to-red-400",
    words: [
      {
        id: "rt-1", topic: "Restaurants", level: "A1", category: "Taste",
        english: "Delicious", word: "delicious", partOfSpeech: "adjective",
        breakdown: "de-LISH-us", chinese: "美味的", pinyin: "měi wèi de",
        emoji: "😋", imageKeyword: "tasty food",
        definitionEn: "Tasting very good; pleasant to eat or drink.",
        definitionZh: "味道很好；令人愉快的饮食。",
        detailsEn: "A stronger, more specific word than just 'good'.",
        detailsZh: "比单纯的‘good’更强、更具体。",
        exampleEn: "This soup is delicious.",
        exampleZh: "这汤很美味。",
        examples: [
          { en: "Everything tasted delicious.", zh: "每样东西都很好吃。" },
          { en: "Smells delicious!", zh: "闻起来真香！" }
        ],
        collocations: ["absolutely delicious", "look delicious", "taste delicious"],
        synonyms: ["tasty", "yummy", "flavorful"], antonyms: ["disgusting", "terrible"],
        comparative: "more delicious", superlative: "most delicious",
        commonMistakes: [{ mistake: "Using 'delicious' for everything", correction: "Vary with tasty, savory, aromatic, flavorful." }],
        pronunciationTips: "Stress the second syllable: de-LISH-us. Four syllables.",
        memoryTrick: "Delicious = de + li + cious. ‘力的’ + ‘吃’ = so good it gives you strength."
      },
      {
        id: "rt-2", topic: "Restaurants", level: "A1", category: "Payment",
        english: "Bill", word: "bill", partOfSpeech: "noun",
        breakdown: "bil", chinese: "账单", pinyin: "zhàng dān",
        emoji: "🧾", imageKeyword: "restaurant bill",
        definitionEn: "The amount of money you owe for a meal or service.",
        definitionZh: "餐饮或服务的应付金额。",
        detailsEn: "In American English, ask for the 'check'. In British English, ask for the 'bill'.",
        detailsZh: "美式英语用 check，英式英语用 bill。",
        exampleEn: "Can we have the bill, please?",
        exampleZh: "请给我们账单。",
        examples: [
          { en: "The bill comes to $45.", zh: "账单共45美元。" },
          { en: "We split the bill.", zh: "我们AA制。" }
        ],
        collocations: ["pay the bill", "split the bill", "bill please", "foot the bill"],
        synonyms: ["check", "invoice"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'bill' only for money notes", correction: "In restaurants, bill = 账单; note = 纸币." }],
        pronunciationTips: "Short 'i': bil. One syllable.",
        memoryTrick: "Bill sounds like ‘ bills ’ — imagine a long list of bills (tally marks) on the receipt."
      },
      {
        id: "rt-3", topic: "Restaurants", level: "A2", category: "Ordering",
        english: "Reservation", word: "reservation", partOfSpeech: "noun",
        breakdown: "rez-er-VAY-shun", chinese: "预订", pinyin: "yù dìng",
        emoji: "📅", imageKeyword: "restaurant reservation",
        definitionEn: "An arrangement to secure a table in advance.",
        definitionZh: "提前订座位的安排。",
        detailsEn: "Common: make a reservation, reservation for two, cancel reservation.",
        detailsZh: "常见搭配：make a reservation、reservation for two、cancel reservation。",
        exampleEn: "I have a reservation at 7 p.m.",
        exampleZh: "我预订了晚上7点的位置。",
        examples: [
          { en: "Do we need a reservation?", zh: "我们需要预订吗？" },
          { en: "The reservation is under Lee.", zh: "预订名字是Lee。" }
        ],
        collocations: ["make a reservation", "table reservation", "reservation system", "reservation desk"],
        synonyms: ["booking"], antonyms: ["walk-in"],
        commonMistakes: [{ mistake: "Using 'book' in American English", correction: "Use 'reservation' in the US; 'booking' is common in the UK." }],
        pronunciationTips: "Stress fourth syllable: rez-er-VAY-shun.",
        memoryTrick: "Re + serve + ation. You're reserving a seat for yourself."
      },
      {
        id: "rt-4", topic: "Restaurants", level: "A1", category: "Ordering",
        english: "Menu", word: "menu", partOfSpeech: "noun",
        breakdown: "MEN-yoo", chinese: "菜单", pinyin: "cài dān",
        emoji: "📋", imageKeyword: "restaurant menu",
        definitionEn: "A list of food and drink options at a restaurant.",
        definitionZh: "餐厅里列出食物和饮料的清单。",
        detailsEn: "You can ask for a menu when you sit down.",
        detailsZh: "坐下后可以索要菜单。",
        exampleEn: "Can I see the menu, please?",
        exampleZh: "请给我看一下菜单。",
        examples: [
          { en: "The menu has many options.", zh: "菜单有很多选项。" },
          { en: "Do you have a vegetarian menu?", zh: "你们有素食菜单吗？" }
        ],
        collocations: ["check the menu", "menu options", "daily menu", "set menu"],
        synonyms: ["list of dishes"], antonyms: [],
        commonMistakes: [{ mistake: "Saying 'card' instead of menu", correction: "Use 'menu' for food lists; 'card' is for credit card or business card." }],
        pronunciationTips: "Stress the first syllable: MEN-yoo. Final 'oo' as in 'moon'.",
        memoryTrick: "Menu sounds like ‘妹牛’ — imagine the menu shows cute cows (牛) for beef dishes."
      },
      {
        id: "rt-5", topic: "Restaurants", level: "B1", category: "Dining",
        english: "Reservation", word: "wait", partOfSpeech: "verb",
        breakdown: "wayt", chinese: "等待", pinyin: "děng dài",
        emoji: "⏳", imageKeyword: "waiting in line",
        definitionEn: "To stay in place until something happens.",
        definitionZh: "停留在某处直到某事发生。",
        detailsEn: "Common: wait for, wait in line, wait staff.",
        detailsZh: "常见搭配：wait for、wait in line、wait staff。",
        exampleEn: "Please wait here.",
        exampleZh: "请在这里等。",
        examples: [
          { en: "I waited for 30 minutes.", zh: "我等了30分钟。" },
          { en: "The food is worth the wait.", zh: "这食物值得等。" }
        ],
        collocations: ["wait for", "wait in line", "wait staff", "wait and see"],
        synonyms: ["stay", "pause"], antonyms: ["leave", "go"],
        commonMistakes: [{ mistake: "Using 'wait on someone' incorrectly", correction: "In American English, 'wait on' can mean serve; in British English it's 'wait for'." }],
        pronunciationTips: "One syllable: wayt. Like 'weight' without 'e'.",
        memoryTrick: "Wait = 等待. Imagine a waiter (wait + er) waiting on you."
      }
    ]
  },
  {
    id: "airport",
    title: "Airport",
    emoji: "✈️",
    description: "Check-in, security, boarding, delays, and helpful phrases for travellers.",
    color: "from-sky-400 to-blue-400",
    words: [
      {
        id: "ap-1", topic: "Airport", level: "A2", category: "Process",
        english: "Check-in", word: "check-in", partOfSpeech: "noun",
        breakdown: "check in", chinese: "值机", pinyin: "zhí jī",
        emoji: "🛫", imageKeyword: "check-in counter",
        definitionEn: "The process of confirming your presence and getting your boarding pass.",
        definitionZh: "确认到场并获取登机牌的过程。",
        detailsEn: "Usually opens 2–3 hours before departure and closes 45–60 minutes before.",
        detailsZh: "通常起飞前2–3小时开放，起飞前45–60分钟关闭。",
        exampleEn: "Check-in closes one hour before the flight.",
        exampleZh: "值机在起飞前1小时截止。",
        examples: [
          { en: "I need to check in online.", zh: "我需要在线值机。" },
          { en: "The check-in desk is over there.", zh: "值机柜台在那边。" }
        ],
        collocations: ["online check-in", "check-in counter", "check-in desk", "check-in time"],
        synonyms: ["registration"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'register' instead", correction: "At airports, use 'check-in'; 'register' is for hotels or schools." }],
        pronunciationTips: "Both words are even in stress: CHECK-IN.",
        memoryTrick: "Check + in = check your ticket and go in to the airport area."
      },
      {
        id: "ap-2", topic: "Airport", level: "A2", category: "Safety",
        english: "Security", word: "security", partOfSpeech: "noun",
        breakdown: "si-CYOOR-i-tee", chinese: "安检", pinyin: "ān jiǎn",
        emoji: "🛡️", imageKeyword: "airport security",
        definitionEn: "Checks and measures to keep passengers safe.",
        definitionZh: "保障乘客安全的检查与措施。",
        detailsEn: "Common: security check, security line, security officer.",
        detailsZh: "常见搭配：security check、security line、security officer。",
        exampleEn: "Security takes time.",
        exampleZh: "安检需要时间。",
        examples: [
          { en: "Go through security first.", zh: "先过安检。" },
          { en: "Security found a forbidden item.", zh: "安检发现了一个违禁品。" }
        ],
        collocations: ["security check", "security line", "security officer", "security screen"],
        synonyms: ["safety", "screening"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'safe' as a noun", correction: "Use 'security' for the system/person; 'safe' is an adjective." }],
        pronunciationTips: "Stress the second syllable: si-CYOOR-i-tee.",
        memoryTrick: "Secure + ity. Security makes you feel secure."
      },
      {
        id: "ap-3", topic: "Airport", level: "A1", category: "Process",
        english: "Gate", word: "gate", partOfSpeech: "noun",
        breakdown: "gayt", chinese: "登机口", pinyin: "dēng jī kǒu",
        emoji: "🚪", imageKeyword: "airport gate sign",
        definitionEn: "The opening through which passengers board the plane.",
        definitionZh: "乘客登机的入口。",
        detailsEn: "Always check your gate number on the boarding pass.",
        detailsZh: "务必查看登机牌上的登机口号。",
        exampleEn: "The gate closes at 8:30.",
        exampleZh: "登机口8:30关闭。",
        examples: [
          { en: "Please proceed to gate 12.", zh: "请前往12号登机口。" },
          { en: "The gate changed to 15.", zh: "登机口改到15号。" }
        ],
        collocations: ["boarding gate", "gate number", "gate closes", "go to the gate"],
        synonyms: ["door", "entrance"], antonyms: [],
        commonMistakes: [{ mistake: "Saying 'door' instead of 'gate' at airports", correction: "Use 'gate' for the boarding entrance; 'door' is for rooms/buildings." }],
        pronunciationTips: "One syllable: gayt. Like 'date' with 'g'.",
        memoryTrick: "Gate = 口. It's the entry gate to the plane."
      },
      {
        id: "ap-4", topic: "Airport", level: "A2", category: "Documents",
        english: "Boarding pass", word: "boarding pass", partOfSpeech: "noun",
        breakdown: "BORD-ing pas", chinese: "登机牌", pinyin: "dēng jī pái",
        emoji: "🎫", imageKeyword: "boarding pass ticket",
        definitionEn: "A document showing you are allowed to board a flight.",
        definitionZh: "允许登机的凭证。",
        detailsEn: "Shows gate, seat, and boarding time. Can be paper or digital.",
        detailsZh: "显示登机口、座位和登机时间。可以是纸质或电子版。",
        exampleEn: "I lost my boarding pass.",
        exampleZh: "我把登机牌弄丢了。",
        examples: [
          { en: "Show your boarding pass, please.", zh: "请出示登机牌。" },
          { en: "Save the boarding pass to your phone.", zh: "把登机牌保存到手机里。" }
        ],
        collocations: ["boarding pass", "boarding pass control", "digital boarding pass", "lost boarding pass"],
        synonyms: ["boarding ticket"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'ticket' only", correction: "At airports, use 'boarding pass' for the actual boarding document." }],
        pronunciationTips: "Stress first syllable: BORD-ing pass.",
        memoryTrick: "Board = 登机, pass = 証. Boarding pass = 登机証."
      },
      {
        id: "ap-5", topic: "Airport", level: "B1", category: "Process",
        english: "Departure", word: "departure", partOfSpeech: "noun",
        breakdown: "di-PAR-ture", chinese: "出发", pinyin: "chū fā",
        emoji: "🛫", imageKeyword: "airplane takeoff",
        definitionEn: "The act of leaving, especially by plane.",
        definitionZh: "离开的行为，尤指乘坐飞机。",
        detailsEn: "Check departure boards for gate and time.",
        detailsZh: "查看出发牌了解登机口和时间。",
        exampleEn: "The departure time is 8:15 a.m.",
        exampleZh: "出发时间是上午8点15分。",
        examples: [
          { en: "Departure gate 12.", zh: "12号出发登机口。" },
          { en: "Check-in closes 45 minutes before departure.", zh: "起飞前45分钟停止值机。" }
        ],
        collocations: ["departure time", "departure gate", "departure lounge", "board departure"],
        synonyms: ["takeoff", "leaving"], antonyms: ["arrival"],
        commonMistakes: [{ mistake: "Using 'leave' in announcements", correction: "Airports use 'departure', not 'leaving'." }],
        pronunciationTips: "Stress the second syllable: di-PAR-ture.",
        memoryTrick: "Departure = depart + ure. Depart means to leave; ure makes it a noun."
      }
    ]
  },
  {
    id: "education",
    title: "Education",
    emoji: "🎓",
    description: "School, university, exams, studying, and academic vocabulary.",
    color: "from-purple-400 to-indigo-400",
    words: [
      {
        id: "ed-1", topic: "Education", level: "A2", category: "Study",
        english: "Homework", word: "homework", partOfSpeech: "noun",
        breakdown: "HOME-work", chinese: "家庭作业", pinyin: "jiā tíng zuò yè",
        emoji: "📚", imageKeyword: "student homework",
        definitionEn: "Tasks assigned to students to do outside class.",
        definitionZh: "学生课后完成的作业。",
        detailsEn: "Uncountable. Say 'do homework', not 'do a homework'.",
        detailsZh: "不可数。说 do homework，不说 do a homework。",
        exampleEn: "I have too much homework tonight.",
        exampleZh: "我今晚作业太多了。",
        examples: [
          { en: "Finish your homework first.", zh: "先完成作业。" },
          { en: "Homework helps us practice.", zh: "作业帮助我们练习。" }
        ],
        collocations: ["do homework", "finish homework", "too much homework", "homework assignment"],
        synonyms: ["assignment"], antonyms: [],
        commonMistakes: [{ mistake: "Saying 'do a homework'", correction: "Homework is uncountable." }],
        pronunciationTips: "Stress the first syllable: HOME-work.",
        memoryTrick: "Home + work. You do work at home."
      },
      {
        id: "ed-2", topic: "Education", level: "A2", category: "Study",
        english: "Exam", word: "exam", partOfSpeech: "noun",
        breakdown: "ig-ZAM", chinese: "考试", pinyin: "kǎo shì",
        emoji: "📝", imageKeyword: "student exam",
        definitionEn: "A formal test of knowledge or ability.",
        definitionZh: "对知识或能力的正式测试。",
        detailsEn: "Common: take an exam, exam results, final exam.",
        detailsZh: "常见搭配：take an exam、exam results、final exam。",
        exampleEn: "The exam is next Monday.",
        exampleZh: "考试在下周一。",
        examples: [
          { en: "I passed the exam.", zh: "我通过了考试。" },
          { en: "She studied hard for the exam.", zh: "她为了考试努力学习。" }
        ],
        collocations: ["take an exam", "exam results", "final exam", "exam preparation"],
        synonyms: ["test", "assessment"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'test' for all formal assessments", correction: "'Exam' is usually longer and more formal; 'test' is shorter/less formal." }],
        pronunciationTips: "Stress the second syllable: ig-ZAM.",
        memoryTrick: "Exam = ex + am. Ex (former) + am (上午) = you test in the morning."
      },
      {
        id: "ed-3", topic: "Education", level: "B1", category: "Academic",
        english: "Research", word: "research", partOfSpeech: "noun / verb",
        breakdown: "ri-SEARCH", chinese: "研究", pinyin: "yán jiū",
        emoji: "🔬", imageKeyword: "research lab",
        definitionEn: "A detailed study to discover new information.",
        definitionZh: "为发现新信息而进行的详细研究。",
        detailsEn: "Common: do research, research paper, research topic.",
        detailsZh: "常见搭配：do research、research paper、research topic。",
        exampleEn: "I'm doing research on AI.",
        exampleZh: "我正在做人工智能方面的研究。",
        examples: [
          { en: "Her research is published.", zh: "她的研究发表了。" },
          { en: "We need more research.", zh: "我们需要更多研究。" }
        ],
        collocations: ["do research", "research paper", "research topic", "market research"],
        synonyms: ["study", "investigation"], antonyms: [],
        commonMistakes: [{ mistake: "Pronouncing as 'ree-search'", correction: "Stress second syllable: ri-SEARCH." }],
        pronunciationTips: "Stress the second syllable: ri-SEARCH.",
        memoryTrick: "Re + search. Search again and again = research."
      },
      {
        id: "ed-4", topic: "Education", level: "B2", category: "Academic",
        english: "Theory", word: "theory", partOfSpeech: "noun",
        breakdown: "THEE-uh-ree", chinese: "理论", pinyin: "lǐ lùn",
        emoji: "💡", imageKeyword: "theory lightbulb",
        definitionEn: "An idea or set of ideas that explains something.",
        definitionZh: "解释某事的观点或观点体系。",
        detailsEn: "Common: in theory, theory of relativity, music theory.",
        detailsZh: "常见搭配：in theory、theory of relativity、music theory。",
        exampleEn: "In theory, it should work.",
        exampleZh: "理论上，它应该可行。",
        examples: [
          { en: "He developed a new theory.", zh: "他提出了一个新理论。" },
          { en: "The theory is hard to prove.", zh: "这个理论很难证明。" }
        ],
        collocations: ["in theory", "theory of", "economic theory", "music theory"],
        synonyms: ["hypothesis", "idea"], antonyms: ["practice", "fact"],
        commonMistakes: [{ mistake: "Confusing theory with hypothesis", correction: "A theory is broader and usually tested; a hypothesis is a proposed explanation." }],
        pronunciationTips: "Three syllables: THEE-uh-ree. Stress first.",
        memoryTrick: "Theory = 理论. Theo (神) + ry (人) = god-level idea."
      }
    ]
  },
  {
    id: "health",
    title: "Health",
    emoji: "🏥",
    description: "Body parts, illnesses, medicine, visits to the doctor, and staying healthy.",
    color: "from-teal-400 to-green-400",
    words: [
      {
        id: "hl-1", topic: "Health", level: "A1", category: "Illness",
        english: "Headache", word: "headache", partOfSpeech: "noun",
        breakdown: "HEAD-ake", chinese: "头痛", pinyin: "tóu tòng",
        emoji: "🤒", imageKeyword: "headache pain",
        definitionEn: "A continuous pain in the head.",
        definitionZh: "头部持续的疼痛。",
        detailsEn: "Common: I have a headache. Take medicine or rest.",
        detailsZh: "常见表达：I have a headache。吃药或休息。",
        exampleEn: "I have a terrible headache.",
        exampleZh: "我头痛得厉害。",
        examples: [
          { en: "She has a headache from the noise.", zh: "她因为噪音头痛。" },
          { en: "A cold can cause a headache.", zh: "感冒可能引起头痛。" }
        ],
        collocations: ["have a headache", "terrible headache", "headache relief", "get a headache"],
        synonyms: ["migraine"], antonyms: [],
        commonMistakes: [{ mistake: "Saying 'my head hurts' every time", correction: "Both are okay; 'headache' is more natural for general pain." }],
        pronunciationTips: "Stress the first syllable: HEAD-ake.",
        memoryTrick: "Head + ache. Your head aches."
      },
      {
        id: "hl-2", topic: "Health", level: "A1", category: "Illness",
        english: "Fever", word: "fever", partOfSpeech: "noun",
        breakdown: "FEE-ver", chinese: "发烧", pinyin: "fā shāo",
        emoji: "🤒", imageKeyword: "fever temperature",
        definitionEn: "An abnormally high body temperature.",
        definitionZh: "体温异常升高。",
        detailsEn: "Common: have a fever, break a fever, high fever.",
        detailsZh: "常见搭配：have a fever、break a fever、high fever。",
        exampleEn: "She has a fever.",
        exampleZh: "她发烧了。",
        examples: [
          { en: "The fever broke after two days.", zh: "两天后烧退下来了。" },
          { en: "Call the doctor if the fever continues.", zh: "如果发烧持续，请给医生打电话。" }
        ],
        collocations: ["have a fever", "break a fever", "high fever", "fever reduces"],
        synonyms: ["temperature", "pyrexia"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'have a cold' when it's actually fever", correction: "Cold = 感冒; fever = 发烧. They can happen together but are not the same." }],
        pronunciationTips: "Two syllables: FEE-ver. Stress the first.",
        memoryTrick: "Fever = 发烧. Feels like fire (热)."
      },
      {
        id: "hl-3", topic: "Health", level: "A1", category: "Body",
        english: "Throat", word: "throat", partOfSpeech: "noun",
        breakdown: "throht", chinese: "喉咙", pinyin: "hóu lóng",
        emoji: "🗣️", imageKeyword: "throat pain",
        definitionEn: "The part of the body where the mouth meets the stomach and lungs.",
        definitionZh: "口腔与胃和肺相连的身体部位。",
        detailsEn: "Common: sore throat, throat lozenge, clear your throat.",
        detailsZh: "常见搭配：sore throat、throat lozenge、clear your throat。",
        exampleEn: "My throat hurts.",
        exampleZh: "我喉咙痛。",
        examples: [
          { en: "She has a sore throat.", zh: "她喉咙痛。" },
          { en: "Drink warm water for your throat.", zh: "喝温水润喉。" }
        ],
        collocations: ["sore throat", "throat pain", "throat lozenge", "clear your throat"],
        synonyms: ["gullet"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'neck' for throat", correction: "Throat = 喉咙; neck = 脖子. They are different body parts." }],
        pronunciationTips: "One syllable: throht. 'Th' is soft, like in 'this'.",
        memoryTrick: "Throat = 喉咙. Imagine a narrow road (throat) for air and food."
      },
      {
        id: "hl-4", topic: "Health", level: "B1", category: "Treatment",
        english: "Medicine", word: "medicine", partOfSpeech: "noun",
        breakdown: "MED-i-sin", chinese: "药", pinyin: "yào",
        emoji: "💊", imageKeyword: "medicine pills",
        definitionEn: "A substance used to treat illness or pain.",
        definitionZh: "用于治疗疾病或疼痛的物质。",
        detailsEn: "Common: take medicine, medicine cabinet, alternative medicine.",
        detailsZh: "常见搭配：take medicine、medicine cabinet、alternative medicine。",
        exampleEn: "Take your medicine after meals.",
        exampleZh: "饭后吃药。",
        examples: [
          { en: "The doctor prescribed medicine.", zh: "医生开了药。" },
          { en: "Store medicine in a cool place.", zh: "把药存放在阴凉处。" }
        ],
        collocations: ["take medicine", "prescribe medicine", "medicine cabinet", "alternative medicine"],
        synonyms: ["drug", "treatment", "medication"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'medication' for every drug", correction: "'Medicine' is general; 'medication' is more clinical." }],
        pronunciationTips: "Stress the first syllable: MED-i-sin. Three syllables.",
        memoryTrick: "Medicine = med + icine. Med = medical, icine sounds like 药."
      }
    ]
  },
  {
    id: "weather",
    title: "Weather",
    emoji: "🌤️",
    description: "Weather conditions, forecasts, seasons, and climate vocabulary.",
    color: "from-sky-400 to-blue-400",
    words: [
      {
        id: "wt-1", topic: "Weather", level: "A1", category: "Conditions",
        english: "Sunny", word: "sunny", partOfSpeech: "adjective",
        breakdown: "SUN-ee", chinese: "晴朗的", pinyin: "qíng lǎng de",
        emoji: "☀️", imageKeyword: "sunny sky",
        definitionEn: "Bright with lots of sunshine.",
        definitionZh: "阳光明媚的。",
        detailsEn: "Use after 'it's': It's sunny today.",
        detailsZh: "用在 it's 后面：It's sunny today。",
        exampleEn: "It's a sunny day.",
        exampleZh: "今天天气晴朗。",
        examples: [
          { en: "The beach is sunny in summer.", zh: "夏天海滩阳光明媚。" },
          { en: "It turned sunny after lunch.", zh: "午后天晴了。" }
        ],
        collocations: ["sunny day", "sunny weather", "sunny side", "sunny disposition"],
        synonyms: ["bright", "clear"], antonyms: ["cloudy", "rainy"],
        comparative: "sunnier", superlative: "sunniest",
        commonMistakes: [{ mistake: "Using 'sunshine' as an adjective", correction: "Use 'sunny' as the adjective; 'sunshine' is a noun." }],
        pronunciationTips: "Stress the first syllable: SUN-ee. Two syllables.",
        memoryTrick: "Sun + ny. Full of sun."
      },
      {
        id: "wt-2", topic: "Weather", level: "A1", category: "Conditions",
        english: "Rainy", word: "rainy", partOfSpeech: "adjective",
        breakdown: "RAY-nee", chinese: "下雨的", pinyin: "xià yǔ de",
        emoji: "🌧️", imageKeyword: "rainy day",
        definitionEn: "Characterized by rain.",
        definitionZh: "多雨的。",
        detailsEn: "Use after 'it's': It's rainy today.",
        detailsZh: "用在 it's 后面：It's rainy today。",
        exampleEn: "It's a rainy afternoon.",
        exampleZh: "这是一个下雨的下午。",
        examples: [
          { en: "Rainy days make me sleepy.", zh: "下雨天让我想睡觉。" },
          { en: "Take an umbrella on rainy days.", zh: "下雨天带伞。" }
        ],
        collocations: ["rainy day", "rainy season", "rainy weather", "rainy afternoon"],
        synonyms: ["wet", "drizzly"], antonyms: ["dry", "sunny"],
        comparative: "rainier", superlative: "rainiest",
        commonMistakes: [{ mistake: "Using 'rain' as an adjective", correction: "Use 'rainy' as the adjective; 'rain' is a noun/verb." }],
        pronunciationTips: "Two syllables: RAY-nee. Stress the first.",
        memoryTrick: "Rain + y. Full of rain."
      },
      {
        id: "wt-3", topic: "Weather", level: "A2", category: "Conditions",
        english: "Humidity", word: "humidity", partOfSpeech: "noun",
        breakdown: "hyoo-MID-i-tee", chinese: "湿度", pinyin: "shī dù",
        emoji: "💦", imageKeyword: "humid summer",
        definitionEn: "The amount of water vapor in the air.",
        definitionZh: "空气中水蒸气的含量。",
        detailsEn: "Common: high humidity, humidity level, humidity control.",
        detailsZh: "常见搭配：high humidity、humidity level、humidity control。",
        exampleEn: "The humidity is very high today.",
        exampleZh: "今天湿度很高。",
        examples: [
          { en: "High humidity makes it feel hotter.", zh: "高湿度让人感觉更热。" },
          { en: "The humidity drops at night.", zh: "夜间湿度下降。" }
        ],
        collocations: ["high humidity", "humidity level", "humidity control", "relative humidity"],
        synonyms: ["moisture", "dampness"], antonyms: ["dryness"],
        commonMistakes: [{ mistake: "Using 'wet' as a noun", correction: "Use 'humidity' for moisture in air; 'wet' is an adjective or verb." }],
        pronunciationTips: "Stress the third syllable: hyoo-MID-i-tee. Four syllables.",
        memoryTrick: "Humid + ity. Humidity = the state of being humid (潮湿)."
      },
      {
        id: "wt-4", topic: "Weather", level: "B1", category: "Climate",
        english: "Mild", word: "mild", partOfSpeech: "adjective",
        breakdown: "mylehd", chinese: "温和的", pinyin: "wēn hé de",
        emoji: "🍃", imageKeyword: "mild weather",
        definitionEn: "Not extreme; moderate in temperature or strength.",
        definitionZh: "不极端的；温度或强度中等的。",
        detailsEn: "Common: mild weather, mild winter, mild flavor.",
        detailsZh: "常见搭配：mild weather、mild winter、mild flavor。",
        exampleEn: "We had a mild winter this year.",
        exampleZh: "今年冬天很温和。",
        examples: [
          { en: "Mild weather is good for hiking.", zh: "温和的天气适合远足。" },
          { en: "He has a mild temper.", zh: "他性格温和。" }
        ],
        collocations: ["mild weather", "mild winter", "mild climate", "mild flavor"],
        synonyms: ["moderate", "gentle"], antonyms: ["severe", "extreme"],
        comparative: "milder", superlative: "mildest",
        commonMistakes: [{ mistake: "Using 'soft' for weather", correction: "Use 'mild' for weather; 'soft' is for textures or voices." }],
        pronunciationTips: "One syllable: mylehd. Like 'child' with 'm'.",
        memoryTrick: "Mild = 温和的. Sounds like ‘ma il de’ — mother (妈) is gentle (温和)."
      }
    ]
  },
  {
    id: "technology",
    title: "Technology",
    emoji: "💻",
    description: "Devices, apps, internet terms, and modern digital life.",
    color: "from-violet-400 to-purple-400",
    words: [
      {
        id: "tc-1", topic: "Technology", level: "A2", category: "Devices",
        english: "Smartphone", word: "smartphone", partOfSpeech: "noun",
        breakdown: "SMART-phone", chinese: "智能手机", pinyin: "zhì néng shǒu jī",
        emoji: "📱", imageKeyword: "smartphone device",
        definitionEn: "A mobile phone with advanced computing abilities.",
        definitionZh: "具有高级计算功能的手机。",
        detailsEn: "Common: charge your smartphone, smartphone app, smartphone camera.",
        detailsZh: "常见搭配：charge your smartphone、smartphone app、smartphone camera。",
        exampleEn: "I left my smartphone at home.",
        exampleZh: "我把智能手机落家里了。",
        examples: [
          { en: "Smartphones make life easier.", zh: "智能手机让生活更轻松。" },
          { en: "She upgraded to a new smartphone.", zh: "她换了一部新智能手机。" }
        ],
        collocations: ["charge smartphone", "smartphone app", "smartphone camera", "smartphone usage"],
        synonyms: ["mobile phone", "cell phone"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'mobile' instead of 'smartphone'", correction: "Mobile = 移动的; smartphone = 智能手机 with apps." }],
        pronunciationTips: "Stress the first syllable: SMART-phone.",
        memoryTrick: "Smart + phone. A phone that is smart."
      }
    ]
  },
  {
    id: "pte-ielts",
    title: "PTE IELTS Academic",
    emoji: "📝",
    description: "High-frequency academic and exam vocabulary for PTE and IELTS preparation.",
    color: "from-blue-400 to-indigo-400",
    words: [
      {
        id: "ac-1", topic: "Academic", level: "B2", category: "Writing",
        english: "Analyze", word: "analyze", partOfSpeech: "verb",
        breakdown: "AN-uh-lyze", chinese: "分析", pinyin: "fēn xī",
        emoji: "🔍", imageKeyword: "data analysis chart",
        definitionEn: "To examine something in detail to understand it better.",
        definitionZh: "详细检查某物以更好地理解。",
        detailsEn: "Common in essays: analyze data, analyze the results, analyze critically.",
        detailsZh: "常见于作文：analyze data、analyze the results、analyze critically。",
        exampleEn: "We need to analyze the data carefully.",
        exampleZh: "我们需要仔细分析数据。",
        examples: [
          { en: "The report analyzes market trends.", zh: "这份报告分析了市场趋势。" },
          { en: "She analyzed the problem deeply.", zh: "她深入分析了这个问题。" }
        ],
        collocations: ["analyze data", "analyze results", "analyze carefully", "analyze critically"],
        synonyms: ["examine", "study", "evaluate"], antonyms: ["summarize"],
        commonMistakes: [{ mistake: "Using 'analyse' spelling inconsistently", correction: "American English: analyze; British English: analyse." }],
        pronunciationTips: "Stress the first syllable: AN-uh-lyze.",
        memoryTrick: "A + nalyze = A + 分析. You give something an analysis."
      }
    ]
  },
  {
    id: "friends",
    title: "Friends & Social Life",
    emoji: "👥",
    description: "Social plans, relationships, celebrations, and casual conversation.",
    color: "from-emerald-400 to-teal-400",
    words: [
      {
        id: "fr-2", topic: "Friends", level: "B1", category: "Events",
        english: "Get together", word: "get together", partOfSpeech: "phrasal verb",
        breakdown: "get to-geth-er", chinese: "聚会", pinyin: "jù huì",
        emoji: "🎉", imageKeyword: "party friends",
        definitionEn: "To meet socially, often for a meal or celebration.",
        definitionZh: "socially 聚会，通常为了吃饭或庆祝。",
        detailsEn: "More organized than 'hang out'; implies planned gathering.",
        detailsZh: "比 hang out 更有组织性；常指计划好的聚会。",
        exampleEn: "We should get together soon.",
        exampleZh: "我们应该很快聚一聚。",
        examples: [
          { en: "Let's get together for dinner.", zh: "我们一起吃晚饭吧。" },
          { en: "The family gets together every holiday.", zh: "全家每个假期都聚会。" }
        ],
        collocations: ["get together for", "get together with", "family get-together"],
        synonyms: ["meet up", "gather"], antonyms: [],
        commonMistakes: [{ mistake: "Using for formal meetings", correction: "Use 'meeting' for work; use 'get together' for friends/family." }],
        pronunciationTips: "Link smoothly: get-to-GETH-er. Stress 'geth'.",
        memoryTrick: "Get + together = get together = 聚会."
      }
    ]
  }
]
