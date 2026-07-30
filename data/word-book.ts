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
        detailsZh: "问路时有用：\"Where is ... on the map?\"",
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
      },
      {
        id: "sh-6", topic: "Shopping", level: "A2", category: "Actions",
        english: "Refund", word: "refund", partOfSpeech: "noun / verb",
        breakdown: "REE-fund", chinese: "退款", pinyin: "tuì kuǎn",
        emoji: "💵", imageKeyword: "refund money",
        definitionEn: "Money returned when returning a purchase.",
        definitionZh: "退货时返还的钱。",
        detailsEn: "Common: ask for a refund, full refund, refund policy.",
        detailsZh: "常见：ask for a refund、full refund、refund policy。",
        exampleEn: "I got a full refund.",
        exampleZh: "我获得了全额退款。",
        examples: [
          { en: "Can I get a refund?", zh: "我能退款吗？" },
          { en: "The refund took two weeks.", zh: "退款花了两周。" }
        ],
        collocations: ["ask for a refund", "full refund", "refund policy", "get a refund"],
        synonyms: ["reimbursement", "repayment"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'return' for money only", correction: "'Return' = 退货; 'refund' = 退款 (money back)." }],
        pronunciationTips: "Stress the first syllable: REE-fund.",
        memoryTrick: "Re + fund. Money sent back to your fund."
      },
      {
        id: "sh-7", topic: "Shopping", level: "A2", category: "Payment",
        english: "Cash", word: "cash", partOfSpeech: "noun",
        breakdown: "kash", chinese: "现金", pinyin: "xiàn jīn",
        emoji: "💵", imageKeyword: "cash money",
        definitionEn: "Money in the form of coins or bills.",
        definitionZh: "硬币或纸币形式的钱。",
        detailsEn: "Common: pay in cash, cash only, cash card.",
        detailsZh: "常见：pay in cash、cash only、cash card。",
        exampleEn: "Do you accept cash?",
        exampleZh: "你们收现金吗？",
        examples: [
          { en: "I paid in cash.", zh: "我用现金付的。" },
          { en: "No cash accepted here.", zh: "这里不收现金。" }
        ],
        collocations: ["pay in cash", "cash only", "cash card", "cash transaction"],
        synonyms: ["money", "currency"], antonyms: ["card", "credit"],
        commonMistakes: [{ mistake: "Using 'cash' as a verb", correction: "'Cash' is mainly a noun; verb use is rare." }],
        pronunciationTips: "One syllable: kash. Like 'cash' in 'cash register'.",
        memoryTrick: "Cash = 现金. Sounds like  cache (储存) — stored money."
      },
      {
        id: "sh-8", topic: "Shopping", level: "A2", category: "Actions",
        english: "Browse", word: "browse", partOfSpeech: "verb",
        breakdown: "browz", chinese: "浏览", pinyin: "liú lǎn",
        emoji: "🛍️", imageKeyword: "browsing shops",
        definitionEn: "To look through things casually.",
        definitionZh: "随意查看物品。",
        detailsEn: "Common: browse the store, browse online, window browse.",
        detailsZh: "常见：browse the store、browse online、window browse。",
        exampleEn: "I like browsing bookstores.",
        exampleZh: "我喜欢浏览书店。",
        examples: [
          { en: "She browsed the dresses.", zh: "她浏览了连衣裙。" },
          { en: "I browse online shops daily.", zh: "我每天浏览网店。" }
        ],
        collocations: ["browse the store", "browse online", "browse shops", "window browse"],
        synonyms: ["look through", "scan"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'search' instead of 'browse'", correction: "'Browse' = casual looking; 'search' = with purpose." }],
        pronunciationTips: "One syllable: browz. Like 'browse' with 'ow'.",
        memoryTrick: "Browse = 浏览. Like a cow grazing (browse) through fields."
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
      },
      {
        id: "fr-5", topic: "Friends", level: "A2", category: "Social",
        english: "Conversation", word: "conversation", partOfSpeech: "noun",
        breakdown: "kon-ver-SAY-shun", chinese: "对话", pinyin: "duì huà",
        emoji: "💬", imageKeyword: "people talking",
        definitionEn: "An informal talk between two or more people.",
        definitionZh: "两个人或更多人之间的非正式交谈。",
        detailsEn: "Common: have a conversation, start a conversation, casual conversation.",
        detailsZh: "常见：have a conversation、start a conversation、casual conversation。",
        exampleEn: "We had a great conversation.",
        exampleZh: "我们聊得很开心。",
        examples: [
          { en: "The conversation turned to travel.", zh: "对话转到了旅行。" },
          { en: "She started a conversation with me.", zh: "她和我开始聊天。" }
        ],
        collocations: ["have conversation", "start conversation", "casual conversation", "conversation with"],
        synonyms: ["chat", "talk", "discussion"], antonyms: ["silence"],
        commonMistakes: [{ mistake: "Using 'conversation' as a verb", correction: "Use 'have a conversation' or 'talk to someone'." }],
        pronunciationTips: "Stress the third syllable: kon-ver-SAY-shun.",
        memoryTrick: "Conversa = turn together. Talking back and forth."
      },
      {
        id: "fr-6", topic: "Friends", level: "A1", category: "Social",
        english: "Chat", word: "chat", partOfSpeech: "noun / verb",
        breakdown: "chat", chinese: "闲聊", pinyin: "xián liáo",
        emoji: "💭", imageKeyword: "casual chat",
        definitionEn: "A friendly, informal conversation.",
        definitionZh: "友好、非正式的交谈。",
        detailsEn: "Common: have a chat, chat with friends, quick chat.",
        detailsZh: "常见：have a chat、chat with friends、quick chat。",
        exampleEn: "We had a quick chat.",
        exampleZh: "我们 quick chat 了一下。",
        examples: [
          { en: "I chatted with my neighbor.", zh: "我和邻居聊了聊。" },
          { en: "Let us have a chat.", zh: "我们聊聊吧。" }
        ],
        collocations: ["have chat", "chat with", "quick chat", "chat about"],
        synonyms: ["talk", "conversation", "gossip"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'chat' for formal meetings", correction: "Chat is informal; use 'meeting' for formal settings." }],
        pronunciationTips: "One syllable: chat. Like 'cat' with 'ch'.",
        memoryTrick: "Chat = 聊天. Friendly talk, like a cat purring."
      },
      {
        id: "fr-7", topic: "Friends", level: "B1", category: "Relationships",
        english: "Friendship", word: "friendship", partOfSpeech: "noun",
        breakdown: "FREND-ship", chinese: "友谊", pinyin: "yǒu yì",
        emoji: "🤝", imageKeyword: "friendship bond",
        definitionEn: "The state of being friends with someone.",
        definitionZh: "与某人成为朋友的状态。",
        detailsEn: "Common: build friendship, strong friendship, lifelong friendship.",
        detailsZh: "常见：build friendship、strong friendship、lifelong friendship。",
        exampleEn: "Their friendship is strong.",
        exampleZh: "他们的友谊很深厚。",
        examples: [
          { en: "Friendship takes time to build.", zh: "友谊需要时间培养。" },
          { en: "She values friendship highly.", zh: "她高度重视友谊。" }
        ],
        collocations: ["build friendship", "strong friendship", "lifelong friendship", "friendship with"],
        synonyms: ["companionship", "relationship"], antonyms: ["enmity"],
        commonMistakes: [{ mistake: "Using 'friend' as a noun for the concept", correction: "'Friendship' is the noun for the relationship." }],
        pronunciationTips: "Stress the first syllable: FREND-ship.",
        memoryTrick: "Friend + ship. The ship that carries friends together."
      },
      {
        id: "fr-8", topic: "Friends", level: "A2", category: "Social",
        english: "Neighbor", word: "neighbor", partOfSpeech: "noun",
        breakdown: "NAY-ber", chinese: "邻居", pinyin: "lín jū",
        emoji: "🏘️", imageKeyword: "neighbor house",
        definitionEn: "A person who lives near you.",
        definitionZh: "住在你附近的人。",
        detailsEn: "Common: next-door neighbor, friendly neighbor, neighborly.",
        detailsZh: "常见：next-door neighbor、friendly neighbor、neighborly。",
        exampleEn: "My neighbor is very kind.",
        exampleZh: "我的邻居很友善。",
        examples: [
          { en: "We borrowed sugar from our neighbor.", zh: "我们向邻居借了糖。" },
          { en: "The neighbor helped with the package.", zh: "邻居帮忙拿了包裹。" }
        ],
        collocations: ["next-door neighbor", "friendly neighbor", "neighborly", "neighbor neighborhood"],
        synonyms: ["resident", "local"], antonyms: [],
        commonMistakes: [{ mistake: "'Neighbour' spelling", correction: "American English: neighbor. British: neighbour." }],
        pronunciationTips: "Stress the first syllable: NAY-ber.",
        memoryTrick: "Neigh = near, bor = bear. A near-by resident."
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
      },
      {
        id: "rt-6", topic: "Restaurants", level: "A1", category: "Payment",
        english: "Tip", word: "tip", partOfSpeech: "noun / verb",
        breakdown: "tip", chinese: "小费", pinyin: "xiǎo fèi",
        emoji: "💰", imageKeyword: "restaurant tip",
        definitionEn: "Extra money given for service.",
        definitionZh: "为服务额外给的钱。",
        detailsEn: "Common: leave a tip, tip the waiter, generous tip.",
        detailsZh: "常见：leave a tip、tip the waiter、generous tip。",
        exampleEn: "We left a 20% tip.",
        exampleZh: "我们留下了20%的小费。",
        examples: [
          { en: "The service was great, so we tipped well.", zh: "服务很好，所以我们给了不少小费。" },
          { en: "Is tipping required here?", zh: "这里需要给小费吗？" }
        ],
        collocations: ["leave a tip", "tip the waiter", "generous tip", "tip money"],
        synonyms: ["gratuity", "bonus"], antonyms: [],
        commonMistakes: [{ mistake: "Tipping too much or too little", correction: "In the US, 15-20% is standard." }],
        pronunciationTips: "One syllable: tip. Like 'tip' of a finger.",
        memoryTrick: "Tip = 小费. Extra money on top."
      },
      {
        id: "rt-7", topic: "Restaurants", level: "A2", category: "Dining",
        english: "Order", word: "order", partOfSpeech: "verb / noun",
        breakdown: "OR-der", chinese: "点餐；订单", pinyin: "diǎn cān; dìng dān",
        emoji: "📝", imageKeyword: "ordering food",
        definitionEn: "To request food; also the request itself.",
        definitionZh: "请求食物；也指请求本身。",
        detailsEn: "Common: order food, place an order, order drinks.",
        detailsZh: "常见：order food、place an order、order drinks。",
        exampleEn: "I ordered the pasta.",
        exampleZh: "我点了意面。",
        examples: [
          { en: "Can I take your order?", zh: "我可以为您点餐了吗？" },
          { en: "The order took 20 minutes.", zh: "订单花了20分钟。" }
        ],
        collocations: ["order food", "place an order", "order drinks", "take order"],
        synonyms: ["request", "book"], antonyms: [],
        commonMistakes: [{ mistake: "'Can I order you?'", correction: "Say 'Can I take your order?'" }],
        pronunciationTips: "Stress the first syllable: OR-der.",
        memoryTrick: "Order = 点餐. Arrange your food in order."
      },
      {
        id: "rt-8", topic: "Restaurants", level: "A2", category: "Dining",
        english: "Waiter", word: "waiter", partOfSpeech: "noun",
        breakdown: "WAY-ter", chinese: "服务员", pinyin: "fú wù yuán",
        emoji: "🧑‍🍳", imageKeyword: "restaurant waiter",
        definitionEn: "A person who serves food in a restaurant.",
        definitionZh: "在餐厅里供应食物的人。",
        detailsEn: "Common: call the waiter, waiter service, head waiter.",
        detailsZh: "常见：call the waiter、waiter service、head waiter。",
        exampleEn: "The waiter brought the menu.",
        exampleZh: "服务员拿来了菜单。",
        examples: [
          { en: "Can we have the waiter?", zh: "我们能叫服务员吗？" },
          { en: "The waiter was very friendly.", zh: "服务员很友好。" }
        ],
        collocations: ["call the waiter", "waiter service", "head waiter", "waiter tip"],
        synonyms: ["server", "attendant"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'waiter' for all staff", correction: "Waiter = male server; waitress = female; server = gender neutral." }],
        pronunciationTips: "Two syllables: WAY-ter. Stress the first.",
        memoryTrick: "Wait + er. A person who waits on you."
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
      },
      {
        id: "ap-6", topic: "Airport", level: "A2", category: "Process",
        english: "Delay", word: "delay", partOfSpeech: "noun / verb",
        breakdown: "di-LAY", chinese: "延误", pinyin: "yán wù",
        emoji: "⏱️", imageKeyword: "flight delay",
        definitionEn: "When something happens later than planned.",
        definitionZh: "某事比计划晚发生。",
        detailsEn: "Common: flight delay, delay announcement, delay due to weather.",
        detailsZh: "常见：flight delay、delay announcement、delay due to weather。",
        exampleEn: "There is a 2-hour delay.",
        exampleZh: "延误了2小时。",
        examples: [
          { en: "The flight was delayed.", zh: "航班延误了。" },
          { en: "Delay caused by weather.", zh: "因天气延误。" }
        ],
        collocations: ["flight delay", "delay announcement", "delay due to", "delay period"],
        synonyms: ["postponement", "wait"], antonyms: ["on time"],
        commonMistakes: [{ mistake: "Using 'late' for official announcements", correction: "Airports use 'delay'; 'late' is casual." }],
        pronunciationTips: "Stress the second syllable: di-LAY.",
        memoryTrick: "De + lay. De (down) + lay (放) = put it down later."
      },
      {
        id: "ap-7", topic: "Airport", level: "A1", category: "Documents",
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
        commonMistakes: [{ mistake: "Calling it 护照本 constantly", correction: "Just say passport." }],
        pronunciationTips: "Stress first syllable: PASS-port.",
        memoryTrick: "Pass + port. You pass through ports with it."
      },
      {
        id: "ap-8", topic: "Airport", level: "A1", category: "Documents",
        english: "Luggage", word: "luggage", partOfSpeech: "noun",
        breakdown: "LUG-ij", chinese: "行李", pinyin: "xíng lǐ",
        emoji: "🧳", imageKeyword: "airport luggage",
        definitionEn: "Bags and cases you travel with.",
        definitionZh: "你旅行时携带的包和箱子。",
        detailsEn: "Common: carry-on luggage, checked luggage, luggage claim.",
        detailsZh: "常见：carry-on luggage、checked luggage、luggage claim。",
        exampleEn: "My luggage is heavy.",
        exampleZh: "我的行李很重。",
        examples: [
          { en: "How many pieces of luggage?", zh: "几件行李？" },
          { en: "Luggage claim is over there.", zh: "行李提取处在那。" }
        ],
        collocations: ["carry-on luggage", "checked luggage", "luggage claim", "luggage tag"],
        synonyms: ["bags", "suitcases"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'baggage' and 'luggage' interchangeably", correction: "Both are fine; 'luggage' is more common in travel." }],
        pronunciationTips: "Two syllables: LUG-ij. Stress the first.",
        memoryTrick: "Lug = carry, age = thing. Carry things = luggage."
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
      },
      {
        id: "ed-5", topic: "Education", level: "A2", category: "Academic",
        english: "Teacher", word: "teacher", partOfSpeech: "noun",
        breakdown: "TEE-cher", chinese: "老师", pinyin: "lǎo shī",
        emoji: "👩‍🏫", imageKeyword: "teacher classroom",
        definitionEn: "A person who teaches students.",
        definitionZh: "教学生的人。",
        detailsEn: "Common: English teacher, history teacher, favorite teacher.",
        detailsZh: "常见：English teacher、history teacher、favorite teacher。",
        exampleEn: "She is my math teacher.",
        exampleZh: "她是我的数学老师。",
        examples: [
          { en: "Who is your favorite teacher?", zh: "你最喜欢的老师是谁？" },
          { en: "The teacher explained it well.", zh: "老师解释得很好。" }
        ],
        collocations: ["English teacher", "classroom teacher", "music teacher", "science teacher"],
        synonyms: ["instructor", "educator"], antonyms: ["student"],
        commonMistakes: [{ mistake: "Using 'teach' for people", correction: "'Teacher' is the person; 'teach' is the action." }],
        pronunciationTips: "Stress the first syllable: TEE-cher.",
        memoryTrick: "Teach + er. One who teaches."
      },
      {
        id: "ed-6", topic: "Education", level: "A1", category: "Academic",
        english: "Student", word: "student", partOfSpeech: "noun",
        breakdown: "STOO-dent", chinese: "学生", pinyin: "xué shēng",
        emoji: "🎒", imageKeyword: "student studying",
        definitionEn: "A person who is studying at a school or university.",
        definitionZh: "在学校或大学学习的人。",
        detailsEn: "Common: university student, student life, international student.",
        detailsZh: "常见：university student、student life、international student。",
        exampleEn: "I am a university student.",
        exampleZh: "我是大学生。",
        examples: [
          { en: "She is a straight-A student.", zh: "她是优等生。" },
          { en: "The students are listening.", zh: "学生们在听讲。" }
        ],
        collocations: ["university student", "international student", "student life", "medical student"],
        synonyms: ["learner", "pupil"], antonyms: ["teacher"],
        commonMistakes: [{ mistake: "Using 'pupil' for all learners", correction: "'Student' is general; 'pupil' is often for younger learners." }],
        pronunciationTips: "Stress the first syllable: STOO-dent.",
        memoryTrick: "Study + ent. One who studies."
      },
      {
        id: "ed-7", topic: "Education", level: "B1", category: "Academic",
        english: "Knowledge", word: "knowledge", partOfSpeech: "noun",
        breakdown: "NOL-ij", chinese: "知识", pinyin: "zhī shi",
        emoji: "📚", imageKeyword: "knowledge books",
        definitionEn: "Information and skills acquired through experience or education.",
        definitionZh: "通过经验或教育获得的信息和技能。",
        detailsEn: "Common: general knowledge, subject knowledge, advance knowledge.",
        detailsZh: "常见：general knowledge、subject knowledge、advance knowledge。",
        exampleEn: "Knowledge is power.",
        exampleZh: "知识就是力量。",
        examples: [
          { en: "He has deep knowledge of AI.", zh: "他对AI有深入了解。" },
          { en: "Books increase knowledge.", zh: "书籍增长知识。" }
        ],
        collocations: ["general knowledge", "subject knowledge", "advance knowledge", "practical knowledge"],
        synonyms: ["understanding", "wisdom"], antonyms: ["ignorance"],
        commonMistakes: [{ mistake: "Using 'knowledgements'", correction: "The noun is 'knowledge'; 'knowledgements' is incorrect." }],
        pronunciationTips: "Stress the first syllable: NOL-ij.",
        memoryTrick: "Know + ledge. What you know sits on the ledge of your mind."
      },
      {
        id: "ed-8", topic: "Education", level: "B1", category: "Academic",
        english: "Lecture", word: "lecture", partOfSpeech: "noun / verb",
        breakdown: "LEK-cher", chinese: "讲座", pinyin: "jiǎng zuò",
        emoji: "🎓", imageKeyword: "university lecture",
        definitionEn: "A formal educational talk or speech.",
        definitionZh: "正式的教育性讲话。",
        detailsEn: "Common: attend a lecture, lecture hall, give a lecture.",
        detailsZh: "常见：attend a lecture、lecture hall、give a lecture。",
        exampleEn: "The lecture starts at 9.",
        exampleZh: "讲座9点开始。",
        examples: [
          { en: "I missed the first lecture.", zh: "我错过了第一堂课。" },
          { en: "He lectures on economics.", zh: "他讲经济学。" }
        ],
        collocations: ["attend lecture", "lecture hall", "give lecture", "guest lecture"],
        synonyms: ["seminar", "talk", "class"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'lesson' for university talks", correction: "'Lecture' is for formal academic talks." }],
        pronunciationTips: "Stress the first syllable: LEK-cher.",
        memoryTrick: "Lect + ure. A talk for learning."
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
      },
      {
        id: "hl-5", topic: "Health", level: "A2", category: "Medical",
        english: "Doctor", word: "doctor", partOfSpeech: "noun",
        breakdown: "DOK-ter", chinese: "医生", pinyin: "yī shēng",
        emoji: "👨‍⚕️", imageKeyword: "doctor medical",
        definitionEn: "A person who treats sick people.",
        definitionZh: "治疗病人的人。",
        detailsEn: "Common: see a doctor, family doctor, doctor appointment.",
        detailsZh: "常见：see a doctor、family doctor、doctor appointment。",
        exampleEn: "I need to see a doctor.",
        exampleZh: "我需要看医生。",
        examples: [
          { en: "The doctor gave her medicine.", zh: "医生给了她药。" },
          { en: "Ask the doctor for advice.", zh: "问医生寻求建议。" }
        ],
        collocations: ["see doctor", "family doctor", "doctor appointment", "doctor visit"],
        synonyms: ["physician", "surgeon"], antonyms: ["patient"],
        commonMistakes: [{ mistake: "Using 'doc' in formal settings", correction: "'Doc' is informal; use 'doctor' in formal contexts." }],
        pronunciationTips: "Stress the first syllable: DOK-ter.",
        memoryTrick: "Doctor = 医生. Someone with a doctorate."
      },
      {
        id: "hl-6", topic: "Health", level: "A2", category: "Medical",
        english: "Hospital", word: "hospital", partOfSpeech: "noun",
        breakdown: "HOS-pi-tl", chinese: "医院", pinyin: "yī yuàn",
        emoji: "🏥", imageKeyword: "hospital building",
        definitionEn: "A place where sick people are treated.",
        definitionZh: "治疗病人的地方。",
        detailsEn: "Common: go to hospital, hospital bed, hospital staff.",
        detailsZh: "常见：go to hospital、hospital bed、hospital staff。",
        exampleEn: "She went to the hospital.",
        exampleZh: "她去了医院。",
        examples: [
          { en: "He is still in the hospital.", zh: "他还在医院。" },
          { en: "The hospital is nearby.", zh: "医院在附近。" }
        ],
        collocations: ["go to hospital", "hospital bed", "hospital staff", "hospital visit"],
        synonyms: ["clinic", "medical center"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'hotel' instead of 'hospital'", correction: "'Hospital' is for medical care; 'hotel' is for sleep." }],
        pronunciationTips: "Stress the first syllable: HOS-pi-tl.",
        memoryTrick: "Hospit = host + ital. Hosts the ill."
      },
      {
        id: "hl-7", topic: "Health", level: "B1", category: "Medical",
        english: "Checkup", word: "checkup", partOfSpeech: "noun",
        breakdown: "CHEK-up", chinese: "体检", pinyin: "tǐ jiǎn",
        emoji: "🩺", imageKeyword: "medical checkup",
        definitionEn: "A general medical examination.",
        definitionZh: "常规医学检查。",
        detailsEn: "Common: regular checkup, medical checkup, annual checkup.",
        detailsZh: "常见：regular checkup、medical checkup、annual checkup。",
        exampleEn: "I go for a checkup every year.",
        exampleZh: "我每年做一次体检。",
        examples: [
          { en: "The checkup showed good health.", zh: "体检显示健康良好。" },
          { en: "Schedule a checkup with your doctor.", zh: "和医生预约体检。" }
        ],
        collocations: ["regular checkup", "medical checkup", "annual checkup", "health checkup"],
        synonyms: ["examination", "screening"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'check up' as two words for noun", correction: "Use 'checkup' as one word for the noun." }],
        pronunciationTips: "Stress the first syllable: CHEK-up.",
        memoryTrick: "Check + up. Check your health status."
      },
      {
        id: "hl-8", topic: "Health", level: "B1", category: "Medical",
        english: "Symptom", word: "symptom", partOfSpeech: "noun",
        breakdown: "SIMP-tuhm", chinese: "症状", pinyin: "zhèng zhuàng",
        emoji: "🤒", imageKeyword: "symptoms signs",
        definitionEn: "A physical sign of an illness.",
        definitionZh: "疾病的物理迹象。",
        detailsEn: "Common: mild symptom, serious symptom, early symptom.",
        detailsZh: "常见：mild symptom、serious symptom、early symptom。",
        exampleEn: "Fever is a common symptom.",
        exampleZh: "发烧是常见症状。",
        examples: [
          { en: "What symptoms do you have?", zh: "你有什么症状？" },
          { en: "The symptoms disappeared.", zh: "症状消失了。" }
        ],
        collocations: ["mild symptom", "serious symptom", "early symptom", "symptom of"],
        synonyms: ["sign", "indication"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'symptom' for feelings only", correction: "It refers to observable or measurable signs of illness." }],
        pronunciationTips: "Stress the first syllable: SIMP-tuhm.",
        memoryTrick: "Sym = together, ptom = fall. Signs that fall together from an illness."
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
      },
      {
        id: "wt-5", topic: "Weather", level: "A2", category: "Conditions",
        english: "Storm", word: "storm", partOfSpeech: "noun / verb",
        breakdown: "storm", chinese: "暴风雨", pinyin: "bào fēng yǔ",
        emoji: "⛈️", imageKeyword: "thunderstorm",
        definitionEn: "A violent weather event with wind and rain.",
        definitionZh: "伴有大风和雨的剧烈天气事件。",
        detailsEn: "Common: thunderstorm, snowstorm, sandstorm, ride out a storm.",
        detailsZh: "常见：thunderstorm、snowstorm、sandstorm、ride out a storm。",
        exampleEn: "A storm is coming.",
        exampleZh: "暴风雨要来了。",
        examples: [
          { en: "The storm caused damage.", zh: "暴风雨造成了破坏。" },
          { en: "We rode out the storm.", zh: "我们挺过了暴风雨。" }
        ],
        collocations: ["thunderstorm", "snowstorm", "sandstorm", "brainstorm"],
        synonyms: ["tempest", "gale"], antonyms: ["calm"],
        commonMistakes: [{ mistake: "'He stormed out' for weather", correction: "As a verb 'stormed' means anger; noun is the weather event." }],
        pronunciationTips: "One syllable: storm.",
        memoryTrick: "Storm = 暴风雨. Violent weather storm."
      },
      {
        id: "wt-6", topic: "Weather", level: "A1", category: "Conditions",
        english: "Cloudy", word: "cloudy", partOfSpeech: "adjective",
        breakdown: "KLOUD-ee", chinese: "多云的", pinyin: "duō yún de",
        emoji: "☁️", imageKeyword: "cloudy sky",
        definitionEn: "Covered with or characterized by clouds.",
        definitionZh: "被云覆盖或以云为特征。",
        detailsEn: "Common: cloudy day, cloudy weather, get cloudy.",
        detailsZh: "常见：cloudy day、cloudy weather、get cloudy。",
        exampleEn: "It is cloudy today.",
        exampleZh: "今天多云。",
        examples: [
          { en: "It might turn cloudy later.", zh: "之后可能转阴。" },
          { en: "Cloudy weather is cool.", zh: "多云天气很凉爽。" }
        ],
        collocations: ["cloudy day", "cloudy weather", "turn cloudy", "mostly cloudy"],
        synonyms: ["overcast", "grey"], antonyms: ["clear", "sunny"],
        commonMistakes: [{ mistake: "Using 'clouded' for weather", correction: "Use 'cloudy' for weather; 'clouded' is for judgment or minds." }],
        pronunciationTips: "Stress the first syllable: KLOUD-ee.",
        memoryTrick: "Cloud + y. Full of clouds."
      },
      {
        id: "wt-7", topic: "Weather", level: "B1", category: "Climate",
        english: "Forecast", word: "forecast", partOfSpeech: "noun / verb",
        breakdown: "FOR-cast", chinese: "预报", pinyin: "yù bào",
        emoji: "📈", imageKeyword: "weather forecast",
        definitionEn: "A prediction about future weather.",
        definitionZh: "对未来天气的预测。",
        detailsEn: "Common: weather forecast, accurate forecast, forecast for tomorrow.",
        detailsZh: "常见：weather forecast、accurate forecast、forecast for tomorrow。",
        exampleEn: "Check the forecast before hiking.",
        exampleZh: "远足前查看天气预报。",
        examples: [
          { en: "The forecast was wrong.", zh: "天气预报错了。" },
          { en: "Forecast calls for sun.", zh: "天气预报说是晴天。" }
        ],
        collocations: ["weather forecast", "accurate forecast", "forecast for", "weather prediction"],
        synonyms: ["prediction", "outlook"], antonyms: [],
        commonMistakes: [{ mistake: "Using for only weather", correction: "It can predict sales, trends, and more." }],
        pronunciationTips: "Stress the first syllable: FOR-cast.",
        memoryTrick: "Fore = forward, cast = project. Project forward = predict."
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
      },
      {
        id: "tc-2", topic: "Technology", level: "A2", category: "Devices",
        english: "Laptop", word: "laptop", partOfSpeech: "noun",
        breakdown: "LAP-top", chinese: "笔记本电脑", pinyin: "bǐ jì běn diàn nǎo",
        emoji: "💻", imageKeyword: "laptop computer",
        definitionEn: "A portable personal computer.",
        definitionZh: "便携式个人电脑。",
        detailsEn: "Common: open laptop, laptop charger, laptop bag, work on a laptop.",
        detailsZh: "常见搭配：open laptop、laptop charger、laptop bag、work on a laptop。",
        exampleEn: "I take my laptop to school.",
        exampleZh: "我带笔记本电脑去学校。",
        examples: [
          { en: "Her laptop is very fast.", zh: "她的电脑很快。" },
          { en: "Don't forget your laptop charger.", zh: "别忘了带电脑充电器。" }
        ],
        collocations: ["open laptop", "laptop charger", "laptop bag", "use laptop"],
        synonyms: ["notebook", "portable computer"], antonyms: ["desktop"],
        commonMistakes: [{ mistake: "Using 'computer' only for desktops", correction: "A laptop is also a computer." }],
        pronunciationTips: "Stress the first syllable: LAP-top.",
        memoryTrick: "Lap + top. A computer that fits on your lap."
      },
      {
        id: "tc-3", topic: "Technology", level: "A2", category: "Devices",
        english: "Charge", word: "charge", partOfSpeech: "verb / noun",
        breakdown: "chahrj", chinese: "充电", pinyin: "chōng diàn",
        emoji: "🔋", imageKeyword: "battery charging",
        definitionEn: "To add electrical power to a battery.",
        definitionZh: "为电池添加电力。",
        detailsEn: "Common: charge phone, charge laptop, battery charge.",
        detailsZh: "常见搭配：charge phone、charge laptop、battery charge。",
        exampleEn: "I need to charge my phone.",
        exampleZh: "我需要给手机充电。",
        examples: [
          { en: "Charge the device overnight.", zh: "整夜充电。" },
          { en: "The battery won't charge.", zh: "电池充不了电。" }
        ],
        collocations: ["charge phone", "charge laptop", "battery charge", "fast charge"],
        synonyms: ["power up", "recharge"], antonyms: ["drain", "discharge"],
        commonMistakes: [{ mistake: "Using 'fill' instead of 'charge' for batteries", correction: "'Charge' is specific to electricity/batteries." }],
        pronunciationTips: "Like 'large' with 'ch': chahrj.",
        memoryTrick: "Charge = 充电. Put energy in."
      },
      {
        id: "tc-4", topic: "Technology", level: "A2", category: "Internet",
        english: "Browser", word: "browser", partOfSpeech: "noun",
        breakdown: "BROW-zer", chinese: "浏览器", pinyin: "liú lǎn qì",
        emoji: "🌐", imageKeyword: "web browser",
        definitionEn: "Software for accessing the internet.",
        definitionZh: "访问互联网的软件。",
        detailsEn: "Common: web browser, browser tab, browser app.",
        detailsZh: "常见搭配：web browser、browser tab、browser app。",
        exampleEn: "Which browser do you use?",
        exampleZh: "你用哪个浏览器？",
        examples: [
          { en: "Chrome is a popular browser.", zh: "Chrome是流行的浏览器。" },
          { en: "Open a new browser tab.", zh: "打开一个新的浏览器标签页。" }
        ],
        collocations: ["web browser", "browser tab", "browser app", "browser extension"],
        synonyms: ["web browser", "internet explorer"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'explorer' as the generic word", correction: "'Browser' is the standard term." }],
        pronunciationTips: "Stress the first syllable: BROW-zer.",
        memoryTrick: "Browse + er. A tool that browses the web."
      },
      {
        id: "tc-5", topic: "Technology", level: "A2", category: "Internet",
        english: "Internet", word: "internet", partOfSpeech: "noun",
        breakdown: "IN-ter-net", chinese: "互联网", pinyin: "hù lián wǎng",
        emoji: "🌐", imageKeyword: "internet network",
        definitionEn: "The global system of connected computers.",
        definitionZh: "全球计算机连接系统。",
        detailsEn: "Common: on the internet, use the internet, internet connection.",
        detailsZh: "常见：on the internet、use the internet、internet connection。",
        exampleEn: "I found it on the internet.",
        exampleZh: "我在网上找到了它。",
        examples: [
          { en: "The internet is slow.", zh: "网速很慢。" },
          { en: "Use the internet carefully.", zh: "小心使用互联网。" }
        ],
        collocations: ["on the internet", "use the internet", "internet connection", "internet safety"],
        synonyms: ["web", "net"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'internet' with capital always", correction: "Internet = 互联网 (modern usage, lowercase)." }],
        pronunciationTips: "Three syllables: IN-ter-net. Stress the first.",
        memoryTrick: "Inter (between) + net (网). Network between computers."
      },
      {
        id: "tc-6", topic: "Technology", level: "A2", category: "Apps",
        english: "App", word: "app", partOfSpeech: "noun",
        breakdown: "ap", chinese: "应用程序", pinyin: "yìng yòng chéng xù",
        emoji: "📲", imageKeyword: "mobile app",
        definitionEn: "A software program for a phone or computer.",
        definitionZh: "用于手机或计算机的软件程序。",
        detailsEn: "Common: download an app, app store, mobile app.",
        detailsZh: "常见：download an app、app store、mobile app。",
        exampleEn: "This app is useful.",
        exampleZh: "这个应用很有用。",
        examples: [
          { en: "Download the app now.", zh: "现在下载应用。" },
          { en: "The app is free.", zh: "应用是免费的。" }
        ],
        collocations: ["download an app", "app store", "mobile app", "app developer"],
        synonyms: ["application", "software"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'app' for websites", correction: "App = 应用 (software); website = 网站 (browser)." }],
        pronunciationTips: "One syllable: ap. Short 'a'.",
        memoryTrick: "App = 应用. Application shortened to app."
      },
      {
        id: "tc-7", topic: "Technology", level: "A1", category: "Devices",
        english: "Screen", word: "screen", partOfSpeech: "noun",
        breakdown: "skreen", chinese: "屏幕", pinyin: "píng mǔ",
        emoji: "🖥️", imageKeyword: "phone screen",
        definitionEn: "The flat surface where you see images.",
        definitionZh: "显示图像的平面。",
        detailsEn: "Common: phone screen, screen size, screen time.",
        detailsZh: "常见：phone screen、screen size、screen time。",
        exampleEn: "The screen is cracked.",
        exampleZh: "屏幕碎了。",
        examples: [
          { en: "Clean the screen gently.", zh: "轻轻擦拭屏幕。" },
          { en: "Screen time affects sleep.", zh: "屏幕时间影响睡眠。" }
        ],
        collocations: ["phone screen", "screen size", "screen time", "touch screen"],
        synonyms: ["display", "monitor"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'screen' only for TVs", correction: "Screens are on phones, laptops, watches, etc." }],
        pronunciationTips: "One syllable: skreen. Like 'scream' without 'm'.",
        memoryTrick: "Screen = 屏幕. Like a clean(干净) scene."
      },
      {
        id: "tc-8", topic: "Technology", level: "B1", category: "Devices",
        english: "Device", word: "device", partOfSpeech: "noun",
        breakdown: "di-VYS", chinese: "设备", pinyin: "shè bèi",
        emoji: "📱", imageKeyword: "tech devices",
        definitionEn: "A piece of equipment made for a purpose.",
        definitionZh: "为特定目的制造的设备。",
        detailsEn: "Common: electronic device, mobile device, smart device.",
        detailsZh: "常见：electronic device、mobile device、smart device。",
        exampleEn: "This device is very useful.",
        exampleZh: "这个设备很有用。",
        examples: [
          { en: "Connect the device to Wi-Fi.", zh: "将设备连接到Wi-Fi。" },
          { en: "The device needs charging.", zh: "设备需要充电。" }
        ],
        collocations: ["electronic device", "mobile device", "smart device", "device support"],
        synonyms: ["gadget", "tool", "equipment"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'device' for software only", correction: "Device = hardware; app = software." }],
        pronunciationTips: "Two syllables: di-VYS. Stress the second.",
        memoryTrick: "De + vice. De (down) + vice (工具) = a tool down to use."
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
      },
      {
        id: "ac-2", topic: "Academic", level: "B2", category: "Speaking",
        english: "Fluency", word: "fluency", partOfSpeech: "noun",
        breakdown: "FLOO-en-see", chinese: "流利", pinyin: "liú lì",
        emoji: "🗣️", imageKeyword: "speaking fluently",
        definitionEn: "The ability to speak smoothly and easily.",
        definitionZh: "流畅自如地说话的能力。",
        detailsEn: "Common: spoken fluency, fluency in English, develop fluency.",
        detailsZh: "常见：spoken fluency、fluency in English、develop fluency。",
        exampleEn: "Her fluency in English is impressive.",
        exampleZh: "她的英语流利度令人印象深刻。",
        examples: [
          { en: "Practice improves fluency.", zh: "练习提高流利度。" },
          { en: "He lacks fluency in speech.", zh: "他说话缺乏流利度。" }
        ],
        collocations: ["spoken fluency", "fluency in", "develop fluency", "fluency practice"],
        synonyms: ["flow", "smoothness", "ease"], antonyms: ["hesitation", "struggle"],
        commonMistakes: [{ mistake: "'Fluency' is only about speed", correction: "It also includes smoothness and coherence." }],
        pronunciationTips: "Stress the first syllable: FLOO-en-see.",
        memoryTrick: "Flu + ency. Flowing speech without blocks."
      },
      {
        id: "ac-3", topic: "Academic", level: "B2", category: "Writing",
        english: "Paraphrase", word: "paraphrase", partOfSpeech: "verb / noun",
        breakdown: "PAIR-uh-frayz", chinese: "改写", pinyin: "gǎi xiě",
        emoji: "📝", imageKeyword: "paraphrasing text",
        definitionEn: "To express meaning using different words.",
        definitionZh: "用不同词语表达意思。",
        detailsEn: "Common: paraphrase the text, paraphrase in your own words.",
        detailsZh: "常见：paraphrase the text、paraphrase in your own words。",
        exampleEn: "Please paraphrase this sentence.",
        exampleZh: "请改写这句话。",
        examples: [
          { en: "She paraphrased the author.", zh: "她改写了作者的话。" },
          { en: "Good paraphrasing shows understanding.", zh: "好的改写体现理解。" }
        ],
        collocations: ["paraphrase text", "paraphrase sentence", "paraphrase in own words", "paraphrase quote"],
        synonyms: ["rephrase", "rewrite", "restate"], antonyms: ["copy", "plagiarize"],
        commonMistakes: [{ mistake: "Copying words while claiming to paraphrase", correction: "Use different structure and synonyms." }],
        pronunciationTips: "Stress the second syllable: PAIR-uh-frayz.",
        memoryTrick: "Para + phrase. Say the phrase differently."
      },
      {
        id: "ac-4", topic: "Academic", level: "B2", category: "Writing",
        english: "Coherence", word: "coherence", partOfSpeech: "noun",
        breakdown: "koh-HERE-ens", chinese: "连贯性", pinyin: "lián guàn xìng",
        emoji: "🔗", imageKeyword: "coherent writing",
        definitionEn: "Logical and consistent connection between ideas.",
        definitionZh: "观点之间的逻辑一致连接。",
        detailsEn: "Common: text coherence, logical coherence, maintain coherence.",
        detailsZh: "常见：text coherence、logical coherence、maintain coherence。",
        exampleEn: "Coherence is important in essays.",
        exampleZh: "连贯性在文章中很重要。",
        examples: [
          { en: "The essay lacks coherence.", zh: "文章缺乏连贯性。" },
          { en: "She improved coherence with transitions.", zh: "她用连接词提高了连贯性。" }
        ],
        collocations: ["text coherence", "logical coherence", "maintain coherence", "coherence in writing"],
        synonyms: ["consistency", "logic", "flow"], antonyms: ["incoherence", "chaos"],
        commonMistakes: [{ mistake: "Confusing coherence with cohesion", correction: "Coherence = logical ideas; cohesion = linking words." }],
        pronunciationTips: "Stress the second syllable: koh-HERE-ens.",
        memoryTrick: "Co = together, here = stand. Ideas that stand together."
      },
      {
        id: "ac-5", topic: "Academic", level: "B2", category: "Speaking",
        english: "Lecture", word: "lecture", partOfSpeech: "noun / verb",
        breakdown: "LEK-cher", chinese: "讲座", pinyin: "jiǎng zuò",
        emoji: "🎓", imageKeyword: "university lecture",
        definitionEn: "A formal educational talk or speech.",
        definitionZh: "正式的教育性讲话。",
        detailsEn: "Common: attend a lecture, lecture hall, give a lecture.",
        detailsZh: "常见：attend a lecture、lecture hall、give a lecture。",
        exampleEn: "The lecture starts at 9.",
        exampleZh: "讲座9点开始。",
        examples: [
          { en: "I missed the first lecture.", zh: "我错过了第一堂课。" },
          { en: "He lectures on economics.", zh: "他讲经济学。" }
        ],
        collocations: ["attend lecture", "lecture hall", "give lecture", "guest lecture"],
        synonyms: ["seminar", "talk", "class"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'lesson' for university talks", correction: "'Lecture' is for formal academic talks." }],
        pronunciationTips: "Stress the first syllable: LEK-cher.",
        memoryTrick: "Lect + ure. A talk for learning."
      },
      {
        id: "ac-6", topic: "Academic", level: "B2", category: "Writing",
        english: "Hypothesis", word: "hypothesis", partOfSpeech: "noun",
        breakdown: "hye-POTH-uh-sis", chinese: "假设", pinyin: "jiǎ shè",
        emoji: "🧪", imageKeyword: "scientific hypothesis",
        definitionEn: "A proposed explanation made as a starting point for investigation.",
        definitionZh: "作为调查起点的拟议解释。",
        detailsEn: "Common: test a hypothesis, scientific hypothesis, working hypothesis.",
        detailsZh: "常见：test a hypothesis、scientific hypothesis、working hypothesis。",
        exampleEn: "The hypothesis was proven wrong.",
        exampleZh: "假设被证明是错误的。",
        examples: [
          { en: "She wrote a clear hypothesis.", zh: "她写了一个清晰的假设。" },
          { en: "Scientists test hypotheses.", zh: "科学家检验假设。" }
        ],
        collocations: ["test hypothesis", "scientific hypothesis", "working hypothesis", "hypothesis testing"],
        synonyms: ["theory", "guess", "proposition"], antonyms: ["fact", "proof"],
        commonMistakes: [{ mistake: "Plural is 'hypothesises'", correction: "Plural is 'hypotheses'." }],
        pronunciationTips: "Stress the third syllable: hye-POTH-uh-sis.",
        memoryTrick: "Hypo = under, thesis = placing. An educated guess placed before proof.",
        superlative: "hypotheses"
      },
      {
        id: "ac-7", topic: "Academic", level: "B2", category: "Writing",
        english: "Argument", word: "argument", partOfSpeech: "noun",
        breakdown: "AHR-gyuh-ment", chinese: "论点", pinyin: "lùn diǎn",
        emoji: "💬", imageKeyword: "debate argument",
        definitionEn: "A reason or set of reasons supporting a conclusion.",
        definitionZh: "支持结论的理由。",
        detailsEn: "Common: present an argument, strong argument, counter argument.",
        detailsZh: "常见：present an argument、strong argument、counter argument。",
        exampleEn: "She presented a strong argument.",
        exampleZh: "她提出了有力的论点。",
        examples: [
          { en: "His argument was convincing.", zh: "他的论点很有说服力。" },
          { en: "They had an argument.", zh: "他们发生了争论。" }
        ],
        collocations: ["strong argument", "present argument", "counter argument", "argument essay"],
        synonyms: ["reasoning", "case", "point"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'argument' only for fights", correction: "In academic writing, it means a reasoned point." }],
        pronunciationTips: "Stress the first syllable: AHR-gyuh-ment.",
        memoryTrick: "Argue + ment. A reasoned point in a debate."
      },
      {
        id: "ac-8", topic: "Academic", level: "B2", category: "Reading",
        english: "Criticize", word: "criticize", partOfSpeech: "verb",
        breakdown: "KRIT-i-syz", chinese: "批评", pinyin: "pī píng",
        emoji: "🧐", imageKeyword: "critique analysis",
        definitionEn: "To point out the faults of something.",
        definitionZh: "指出某事的错误。",
        detailsEn: "Common in essays: criticize an idea, constructive criticism.",
        detailsZh: "常见于作文：criticize an idea、constructive criticism。",
        exampleEn: "He criticized the proposal.",
        exampleZh: "他批评了这个提议。",
        examples: [
          { en: "The paper criticizes current policy.", zh: "论文批评了现行政策。" },
          { en: "Constructive criticism helps improvement.", zh: "建设性批评帮助改进。" }
        ],
        collocations: ["criticize idea", "criticize policy", "constructive criticism", "criticize method"],
        synonyms: ["challenge", "question", "evaluate"], antonyms: ["praise"],
        commonMistakes: [{ mistake: "Using only negative meaning", correction: "It can be neutral or constructive in academic contexts." }],
        pronunciationTips: "Stress the first syllable: KRIT-i-syz.",
        memoryTrick: "Critic + ize. Make a critic judgment."
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
         id: "fr-social-2", topic: "Friends", level: "B1", category: "Events",
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
        id: "fr-social-3", topic: "Friends", level: "A2", category: "Relationships",
        english: "Trust", word: "trust", partOfSpeech: "noun / verb",
        breakdown: "trust", chinese: "信任", pinyin: "xìn rèn",
        emoji: "🤝", imageKeyword: "trust between friends",
        definitionEn: "Firm belief in reliability of someone.",
        definitionZh: "对某人可靠性的坚定信念。",
        detailsEn: "Common: gain trust, build trust, lose trust.",
        detailsZh: "常见：gain trust、build trust、lose trust。",
        exampleEn: "Trust is important in friendship.",
        exampleZh: "信任在友谊中很重要。",
        examples: [
          { en: "I trust my best friend.", zh: "我信任我最好的朋友。" },
          { en: "It takes time to build trust.", zh: "建立信任需要时间。" }
        ],
        collocations: ["build trust", "gain trust", "lose trust", "mutual trust"],
        synonyms: ["confidence", "faith"], antonyms: ["distrust", "suspicion"],
        commonMistakes: [{ mistake: "'Trust' only as a noun", correction: "As a verb: 'I trust you.' As a noun: 'I have trust in you.'" }],
        pronunciationTips: "One syllable: trust.",
        memoryTrick: "Trust = 信任. Like 戳思特 — deeply trust."
      },
      {
        id: "fr-social-4", topic: "Friends", level: "B1", category: "Support",
        english: "Supportive", word: "supportive", partOfSpeech: "adjective",
        breakdown: "suh-POR-tiv", chinese: "支持的", pinyin: "zhī chí de",
        emoji: "💪", imageKeyword: "supportive friend",
        definitionEn: "Giving encouragement or help.",
        definitionZh: "给予鼓励或帮助。",
        detailsEn: "Common: supportive friend, supportive family, be supportive.",
        detailsZh: "常见：supportive friend、supportive family、be supportive。",
        exampleEn: "She is very supportive.",
        exampleZh: "她很支持人。",
        examples: [
          { en: "My parents are supportive.", zh: "我父母很支持我。" },
          { en: "Be supportive of your friends.", zh: "支持你的朋友。" }
        ],
        collocations: ["be supportive", "supportive friend", "supportive family", "very supportive"],
        synonyms: ["encouraging", "helpful"], antonyms: ["unsupportive", "hostile"],
        commonMistakes: [{ mistake: "Using 'support' as the adjective", correction: "Use 'supportive' for the adjective form." }],
        pronunciationTips: "Stress the second syllable: suh-POR-tiv.",
        memoryTrick: "Support + ive. A person who gives support."
      },
      {
        id: "fr-social-5", topic: "Friends", level: "A2", category: "Relationships",
        english: "Memory", word: "memory", partOfSpeech: "noun",
        breakdown: "MEM-er-ee", chinese: "回忆", pinyin: "huí yì",
        emoji: "📸", imageKeyword: "shared memories",
        definitionEn: "Something remembered from the past.",
        definitionZh: "过去记得的事情。",
        detailsEn: "Common: childhood memory, happy memory, memory of.",
        detailsZh: "常见：childhood memory、happy memory、memory of。",
        exampleEn: "I have a good memory of that trip.",
        exampleZh: "我对那次旅行有美好的回忆。",
        examples: [
          { en: "That is a great memory.", zh: "那是美好的回忆。" },
          { en: "She has a strong memory.", zh: "她记忆力很好。" }
        ],
        collocations: ["childhood memory", "happy memory", "memory of", "precious memory"],
        synonyms: ["recollection", "remembrance"], antonyms: ["forgetfulness"],
        commonMistakes: [{ mistake: "Using 'memories' for ability", correction: "'Memory' = ability; 'memories' = specific events." }],
        pronunciationTips: "Stress the first syllable: MEM-er-ee.",
        memoryTrick: "Mem + ory. Remember + y = memory."
      },
      {
        id: "fr-social-6", topic: "Friends", level: "A2", category: "Relationships",
        english: "Loyalty", word: "loyalty", partOfSpeech: "noun",
        breakdown: "LOY-al-tee", chinese: "忠诚", pinyin: "zhōng chéng",
        emoji: "🛡️", imageKeyword: "loyalty symbol",
        definitionEn: "The quality of being faithful and devoted.",
        definitionZh: "忠诚和奉献的品质。",
        detailsEn: "Common: show loyalty, loyalty to friends, loyalty program.",
        detailsZh: "常见：show loyalty、loyalty to friends、loyalty program。",
        exampleEn: "His loyalty to friends is strong.",
        exampleZh: "他对朋友的忠诚很强。",
        examples: [
          { en: "Loyalty is a great quality.", zh: "忠诚是很棒的品质。" },
          { en: "They value loyalty in a friend.", zh: "他们重视朋友的忠诚。" }
        ],
        collocations: ["show loyalty", "loyalty to", "loyalty program", "loyalty and trust"],
        synonyms: ["faithfulness", "devotion"], antonyms: ["betrayal", "disloyalty"],
        commonMistakes: [{ mistake: "Using 'loyal' as a noun", correction: "'Loyalty' is the noun." }],
        pronunciationTips: "Stress the second syllable: LOY-al-tee.",
        memoryTrick: "Loyal + ty. The state of being loyal."
      },
      {
        id: "fr-social-7", topic: "Friends", level: "A2", category: "Social",
        english: "Invite", word: "invite", partOfSpeech: "verb",
        breakdown: "in-VYT", chinese: "邀请", pinyin: "yāo qǐng",
        emoji: "💌", imageKeyword: "party invitation",
        definitionEn: "To ask someone to come to an event.",
        definitionZh: "邀请某人参加活动。",
        detailsEn: "Common: invite to dinner, invite someone over, invite friends.",
        detailsZh: "常见：invite to dinner、invite someone over、invite friends。",
        exampleEn: "I invited her to my party.",
        exampleZh: "我邀请她来我的派对。",
        examples: [
          { en: "Did you invite Tom?", zh: "你邀请汤姆了吗？" },
          { en: "We invited them over for dinner.", zh: "我们邀请他们过来吃晚饭。" }
        ],
        collocations: ["invite to", "invite over", "invite friends", "invite someone"],
        synonyms: ["ask", "request"], antonyms: ["exclude", "dismiss"],
        commonMistakes: [{ mistake: "Using 'invite for' instead of 'invite to'", correction: "Say 'invite someone to something.'" }],
        pronunciationTips: "Stress the second syllable: in-VYT.",
        memoryTrick: "In + vite. Send in an invitation."
      },
      {
        id: "fr-social-8", topic: "Friends", level: "A2", category: "Social",
        english: "Apologize", word: "apologize", partOfSpeech: "verb",
        breakdown: "uh-POL-uh-jyz", chinese: "道歉", pinyin: "dào qiàn",
        emoji: "🙇", imageKeyword: "apologize gesture",
        definitionEn: "To say sorry for a mistake or offense.",
        definitionZh: "为错误或冒犯说对不起。",
        detailsEn: "Common: apologize to someone, apologize for, apologize sincerely.",
        detailsZh: "常见：apologize to someone、apologize for、apologize sincerely。",
        exampleEn: "I apologize for being late.",
        exampleZh: "我为迟到道歉。",
        examples: [
          { en: "She apologized to her friend.", zh: "她向朋友道歉了。" },
          { en: "Please accept my apology.", zh: "请接受我的道歉。" }
        ],
        collocations: ["apologize to", "apologize for", "apologize sincerely", "accept apology"],
        synonyms: ["sorry", "regret"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'sorry' as a verb", correction: "Use 'apologize' as a verb; 'sorry' is an adjective." }],
        pronunciationTips: "Stress the third syllable: uh-POL-uh-jyz.",
        memoryTrick: "A + pole + o + gize. A gesture of apology."
      },
      {
        id: "fr-social-9", topic: "Friends", level: "A2", category: "Social",
        english: "Compliment", word: "compliment", partOfSpeech: "noun / verb",
        breakdown: "KOM-pluh-ment", chinese: "赞美", pinyin: "zàn měi",
        emoji: "💬", imageKeyword: "giving compliment",
        definitionEn: "A polite expression of praise or admiration.",
        definitionZh: "礼貌的赞扬或钦佩表达。",
        detailsEn: "Common: give a compliment, receive a compliment, compliment someone.",
        detailsZh: "常见：give a compliment、receive a compliment、compliment someone。",
        exampleEn: "She gave him a compliment.",
        exampleZh: "她给了他一个赞美。",
        examples: [
          { en: "That is a nice compliment.", zh: "那是个很好的赞美。" },
          { en: "He complimented my cooking.", zh: "他赞美了我的厨艺。" }
        ],
        collocations: ["give a compliment", "receive a compliment", "compliment someone", "backhanded compliment"],
        synonyms: ["praise", "flattery"], antonyms: ["insult", "criticism"],
        commonMistakes: [{ mistake: "Using 'compliment' for 'complement'", correction: "Compliment = 赞美; complement = 补充." }],
        pronunciationTips: "Stress the first syllable: KOM-pluh-ment.",
        memoryTrick: "Com + pliment. Complete (complete) the praise."
      }
    ]
  },
  {
    id: "home",
    title: "Home & House",
    emoji: "🏠",
    description: "Rooms, furniture, appliances, and household items.",
    color: "from-blue-400 to-indigo-400",
    words: [
      {
        id: "hm-1", topic: "Home", level: "A1", category: "Rooms",
        english: "Kitchen", word: "kitchen", partOfSpeech: "noun",
        breakdown: "KICH-en", chinese: "厨房", pinyin: "chú fáng",
        emoji: "🍳", imageKeyword: "kitchen room",
        definitionEn: "The room where you cook food.",
        definitionZh: "你做饭的房间。",
        detailsEn: "Common: kitchen cabinet, kitchen sink, modern kitchen.",
        detailsZh: "常见搭配：kitchen cabinet、kitchen sink、modern kitchen。",
        exampleEn: "She cooked in the kitchen.",
        exampleZh: "她在厨房做饭了。",
        examples: [
          { en: "The kitchen is clean.", zh: "厨房很干净。" },
          { en: "I left the keys in the kitchen.", zh: "我把钥匙落在厨房了。" }
        ],
        collocations: ["kitchen cabinet", "kitchen sink", "modern kitchen", "kitchen table"],
        synonyms: ["cookroom"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'kitchen' for dining only", correction: "Kitchen = 厨房 (cook); dining room = 餐厅 (eat)." }],
        pronunciationTips: "Two syllables: KICH-en. Stress the first.",
        memoryTrick: "Kit + chen. Kitchen = 厨房 (cook place)."
      },
      {
        id: "hm-2", topic: "Home", level: "A1", category: "Rooms",
        english: "Bedroom", word: "bedroom", partOfSpeech: "noun",
        breakdown: "BED-room", chinese: "卧室", pinyin: "wò shì",
        emoji: "🛏️", imageKeyword: "bedroom bed",
        definitionEn: "The room where you sleep.",
        definitionZh: "你睡觉的房间。",
        detailsEn: "Common: master bedroom, bedroom door, bedroom window.",
        detailsZh: "常见搭配：master bedroom、bedroom door、bedroom window。",
        exampleEn: "My bedroom is small.",
        exampleZh: "我的卧室很小。",
        examples: [
          { en: "She decorated her bedroom.", zh: "她装饰了卧室。" },
          { en: "The bedroom is upstairs.", zh: "卧室在楼上。" }
        ],
        collocations: ["master bedroom", "bedroom door", "bedroom window", "bedroom furniture"],
        synonyms: ["sleeping room"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'bedroom' for any private room", correction: "Bedroom = 卧室 (sleep); study = 书房 (work)." }],
        pronunciationTips: "Two syllables: BED-room. Stress the first.",
        memoryTrick: "Bed + room. A room with a bed."
      },
      {
        id: "hm-3", topic: "Home", level: "A2", category: "Furniture",
        english: "Table", word: "table", partOfSpeech: "noun",
        breakdown: "TAY-bul", chinese: "桌子", pinyin: "zhuō zi",
        emoji: "🪑", imageKeyword: "dining table",
        definitionEn: "A piece of furniture with a flat top and legs.",
        definitionZh: "有平坦顶部和腿的家具。",
        detailsEn: "Common: dining table, coffee table, round table.",
        detailsZh: "常见搭配：dining table、coffee table、round table。",
        exampleEn: "The table is wooden.",
        exampleZh: "桌子是木头的。",
        examples: [
          { en: "Set the table for dinner.", zh: "摆好餐桌准备晚饭。" },
          { en: "The table seats six.", zh: "这张桌子坐六个人。" }
        ],
        collocations: ["dining table", "coffee table", "round table", "table lamp"],
        synonyms: ["desk", "counter"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'table' for desks only", correction: "Table = 桌子 (general); desk = 书桌 (work)." }],
        pronunciationTips: "Two syllables: TAY-bul. Stress the first.",
        memoryTrick: "Table = 桌子. T (table) + able (可用的) = usable surface."
      },
      {
        id: "hm-4", topic: "Home", level: "A2", category: "Furniture",
        english: "Sofa", word: "sofa", partOfSpeech: "noun",
        breakdown: "SO-fuh", chinese: "沙发", pinyin: "shā fā",
        emoji: "🛋️", imageKeyword: "living room sofa",
        definitionEn: "A long comfortable seat for more than one person.",
        definitionZh: "供多人使用的长舒适座位。",
        detailsEn: "Common: sofa bed, leather sofa, sit on the sofa.",
        detailsZh: "常见搭配：sofa bed、leather sofa、sit on the sofa。",
        exampleEn: "The sofa is very comfortable.",
        exampleZh: "沙发很舒服。",
        examples: [
          { en: "We watched TV on the sofa.", zh: "我们在沙发上看电视。" },
          { en: "The sofa is too small.", zh: "沙发太小了。" }
        ],
        collocations: ["sofa bed", "leather sofa", "sit on the sofa", "sofa cover"],
        synonyms: ["couch", "settee"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'sofa' for chairs", correction: "Sofa = 沙发 (multi-person); chair = 椅子 (single)." }],
        pronunciationTips: "Two syllables: SO-fuh. Stress the first.",
        memoryTrick: "Sofa = 沙发. So (于是) + fa (发) = sit and relax."
      },
      {
        id: "hm-5", topic: "Home", level: "A2", category: "Appliances",
        english: "Refrigerator", word: "refrigerator", partOfSpeech: "noun",
        breakdown: "ri-FRIG-er-ay-ter", chinese: "冰箱", pinyin: "bīng xiāng",
        emoji: "❄️", imageKeyword: "refrigerator fridge",
        definitionEn: "An appliance that keeps food cold.",
        definitionZh: "保持食物凉爽的设备。",
        detailsEn: "Common: fridge, refrigerator door, refrigerator temperature.",
        detailsZh: "常见搭配：fridge、refrigerator door、refrigerator temperature。",
        exampleEn: "The refrigerator is full.",
        exampleZh: "冰箱满了。",
        examples: [
          { en: "Put the milk in the refrigerator.", zh: "把牛奶放进冰箱。" },
          { en: "The refrigerator broke.", zh: "冰箱坏了。" }
        ],
        collocations: ["refrigerator door", "refrigerator temperature", "mini refrigerator", "refrigerator magnet"],
        synonyms: ["fridge"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'refrigerator' in casual speech always", correction: "Use 'fridge' in casual speech; 'refrigerator' is formal." }],
        pronunciationTips: "Five syllables: ri-FRIG-er-ay-ter. Stress the second.",
        memoryTrick: "Refrigera + tor. Keep food cold (冷冻) in this tor (machine)."
      },
      {
        id: "hm-6", topic: "Home", level: "A1", category: "Appliances",
        english: "Television", word: "television", partOfSpeech: "noun",
        breakdown: "TEL-uh-VIZH-un", chinese: "电视", pinyin: "diàn shì",
        emoji: "📺", imageKeyword: "television tv",
        definitionEn: "A device for watching shows.",
        definitionZh: "观看节目的设备。",
        detailsEn: "Common: watch television, TV remote, television screen.",
        detailsZh: "常见搭配：watch television、TV remote、television screen。",
        exampleEn: "We watched television last night.",
        exampleZh: "我们昨晚看电视了。",
        examples: [
          { en: "The television is too loud.", zh: "电视太吵了。" },
          { en: "Turn off the television.", zh: "关掉电视。" }
        ],
        collocations: ["watch television", "television screen", "television remote", "television show"],
        synonyms: ["TV"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'TV' and 'television' interchangeably without formality note", correction: "'TV' is informal; 'television' is formal." }],
        pronunciationTips: "Four syllables: TEL-uh-VIZH-un. Stress the third.",
        memoryTrick: "Tele (远) + vision (看见)。Far see = TV."
      },
      {
        id: "hm-7", topic: "Home", level: "B1", category: "Repairs",
        english: "Renovate", word: "renovate", partOfSpeech: "verb",
        breakdown: "REN-uh-vayt", chinese: "装修；翻新", pinyin: "zhuāng xiū; fān xīn",
        emoji: "🔨", imageKeyword: "home renovation",
        definitionEn: "To repair and improve a building.",
        definitionZh: "修理和改善建筑物。",
        detailsEn: "Common: renovate the kitchen, renovate a house, home renovation.",
        detailsZh: "常见搭配：renovate the kitchen、renovate a house、home renovation。",
        exampleEn: "They renovated the old house.",
        exampleZh: "他们翻新了老房子。",
        examples: [
          { en: "Renovation took three months.", zh: "装修用了三个月。" },
          { en: "She wants to renovate her apartment.", zh: "她想装修她的公寓。" }
        ],
        collocations: ["renovate the kitchen", "home renovation", "renovate a house", "renovation project"],
        synonyms: ["restore", "remodel", "repair"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'renovate' for cleaning", correction: "Renovate = 装修 (structural); clean = 清洁." }],
        pronunciationTips: "Stress the second syllable: REN-uh-vayt.",
        memoryTrick: "Re + novate. Re (again) + novate (new) = make new again."
      },
      {
        id: "hm-8", topic: "Home", level: "B1", category: "Utilities",
        english: "Mortgage", word: "mortgage", partOfSpeech: "noun / verb",
        breakdown: "MAWR-gij", chinese: "抵押贷款", pinyin: "dǐ yā dài kuǎn",
        emoji: "🏦", imageKeyword: "mortgage house",
        definitionEn: "A loan for buying property.",
        definitionZh: "购买财产的贷款。",
        detailsEn: "Common: pay the mortgage, mortgage rate, mortgage payment.",
        detailsZh: "常见搭配：pay the mortgage、mortgage rate、mortgage payment。",
        exampleEn: "The mortgage is expensive.",
        exampleZh: "抵押贷款很贵。",
        examples: [
          { en: "They paid off their mortgage.", zh: "他们还清了抵押贷款。" },
          { en: "Mortgage rates rose.", zh: "抵押贷款利率上升了。" }
        ],
        collocations: ["pay the mortgage", "mortgage rate", "mortgage payment", "mortgage loan"],
        synonyms: ["loan", "home loan"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'mortgage' for rent", correction: "Mortgage = 抵押贷款 (buying); rent = 租金 (leasing)." }],
        pronunciationTips: "Two syllables: MAWR-gij. Stress the first.",
        memoryTrick: "Mort (死亡) + gage (抵押)。A pledge until death = long-term loan."
      }
    ]
  },
  {
    id: "nature-outdoors",
    title: "Nature & Outdoors",
    emoji: "🌲",
    description: "Animals, plants, weather, landscapes, and outdoor activities.",
    color: "from-emerald-400 to-green-400",
    words: [
      {
        id: "no-1", topic: "Nature", level: "A1", category: "Animals",
        english: "Dog", word: "dog", partOfSpeech: "noun",
        breakdown: "dawg", chinese: "狗", pinyin: "gǒu",
        emoji: "🐶", imageKeyword: "cute dog",
        definitionEn: "A common pet animal that barks.",
        definitionZh: "常见的会叫的宠物动物。",
        detailsEn: "Common: pet dog, dog walk, dog food.",
        detailsZh: "常见搭配：pet dog、dog walk、dog food。",
        exampleEn: "I have a dog.",
        exampleZh: "我有一只狗。",
        examples: [
          { en: "The dog is friendly.", zh: "狗很友好。" },
          { en: "She walks her dog daily.", zh: "她每天遛狗。" }
        ],
        collocations: ["pet dog", "dog walk", "dog food", "dog owner"],
        synonyms: ["canine", "puppy"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'dog' for all canines", correction: "Dog = 狗; wolf = 狼." }],
        pronunciationTips: "One syllable: dawg. Like 'log' with 'd'.",
        memoryTrick: "Dog = 狗. D + og (欧歌) = dog barks."
      },
      {
        id: "no-2", topic: "Nature", level: "A1", category: "Animals",
        english: "Cat", word: "cat", partOfSpeech: "noun",
        breakdown: "kat", chinese: "猫", pinyin: "māo",
        emoji: "🐱", imageKeyword: "cute cat",
        definitionEn: "A small pet animal that meows.",
        definitionZh: "会喵喵叫的小宠物动物。",
        detailsEn: "Common: pet cat, cat food, cat nap.",
        detailsZh: "常见搭配：pet cat、cat food、cat nap。",
        exampleEn: "The cat is sleeping.",
        exampleZh: "猫在睡觉。",
        examples: [
          { en: "Cats like milk.", zh: "猫喜欢牛奶。" },
          { en: "She adopted a cat.", zh: "她领养了一只猫。" }
        ],
        collocations: ["pet cat", "cat food", "cat nap", "cat owner"],
        synonyms: ["feline", "kitten"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'cat' for all felines", correction: "Cat = 猫; tiger = 老虎." }],
        pronunciationTips: "One syllable: kat. Like 'hat' with 'c'.",
        memoryTrick: "Cat = 猫. C + at (在) = cat is at home."
      },
      {
        id: "no-3", topic: "Nature", level: "A2", category: "Plants",
        english: "Tree", word: "tree", partOfSpeech: "noun",
        breakdown: "tree", chinese: "树", pinyin: "shù",
        emoji: "🌳", imageKeyword: "big tree",
        definitionEn: "A tall plant with a trunk and branches.",
        definitionZh: "有树干和树枝的高大植物。",
        detailsEn: "Common: fruit tree, climb a tree, tree house.",
        detailsZh: "常见搭配：fruit tree、climb a tree、tree house。",
        exampleEn: "The tree is very tall.",
        exampleZh: "树很高。",
        examples: [
          { en: "Birds live in the tree.", zh: "鸟住在树上。" },
          { en: "We planted a tree.", zh: "我们种了一棵树。" }
        ],
        collocations: ["fruit tree", "climb a tree", "tree house", "family tree"],
        synonyms: ["plant", "shrub"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'tree' for bushes", correction: "Tree = 树 (tall); bush = 灌木 (short)." }],
        pronunciationTips: "One syllable: tree. Long 'ee'.",
        memoryTrick: "Tree = 树. Green and tall."
      },
      {
        id: "no-4", topic: "Nature", level: "A1", category: "Weather",
        english: "Sun", word: "sun", partOfSpeech: "noun",
        breakdown: "sun", chinese: "太阳", pinyin: "tài yáng",
        emoji: "☀️", imageKeyword: "bright sun",
        definitionEn: "The star that gives us light and heat.",
        definitionZh: "给我们光和热的星球。",
        detailsEn: "Common: sunny day, sun shines, sun protection.",
        detailsZh: "常见搭配：sunny day、sun shines、sun protection。",
        exampleEn: "The sun is bright today.",
        exampleZh: "太阳今天很亮。",
        examples: [
          { en: "The sun rises in the east.", zh: "太阳从东方升起。" },
          { en: "Protect your skin from the sun.", zh: "保护皮肤免受太阳伤害。" }
        ],
        collocations: ["sunny day", "sun shines", "sun protection", "morning sun"],
        synonyms: ["star", "sunlight"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'sun' for 'son'", correction: "Sun = 太阳 (star); son = 儿子 (child)." }],
        pronunciationTips: "One syllable: sun. Short 'u'.",
        memoryTrick: "Sun = 太阳. Son (儿子) of the sky."
      },
      {
        id: "no-5", topic: "Nature", level: "A2", category: "Activities",
        english: "Camping", word: "camping", partOfSpeech: "noun",
        breakdown: "KAM-ping", chinese: "露营", pinyin: "lù yíng",
        emoji: "⛺", imageKeyword: "tent camping",
        definitionEn: "Staying outdoors in a tent.",
        definitionZh: "在帐篷里待在户外。",
        detailsEn: "Common: go camping, camping site, camping gear.",
        detailsZh: "常见搭配：go camping、camping site、camping gear。",
        exampleEn: "We went camping last weekend.",
        exampleZh: "我们上周末去露营了。",
        examples: [
          { en: "Camping is fun in summer.", zh: "夏天露营很有趣。" },
          { en: "She enjoys camping.", zh: "她喜欢露营。" }
        ],
        collocations: ["go camping", "camping site", "camping gear", "camping trip"],
        synonyms: ["outdoors", "tenting"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'camp' only for military", correction: "Camp = 营地; camping = 露营 (recreational)." }],
        pronunciationTips: "Two syllables: KAM-ping. Stress the first.",
         memoryTrick: "Camp + ing. Camp (营地) + ing (进行中) = camping."
      },
      {
        id: "no-6", topic: "Nature", level: "A1", category: "Animals",
        english: "Bird", word: "bird", partOfSpeech: "noun",
        breakdown: "burd", chinese: "鸟", pinyin: "niǎo",
        emoji: "🐦", imageKeyword: "small bird",
        definitionEn: "A small animal with wings that can fly.",
        definitionZh: "有翅膀会飞的小动物。",
        detailsEn: "Common: pet bird, bird nest, bird watching.",
        detailsZh: "常见：pet bird、bird nest、bird watching。",
        exampleEn: "I heard a bird singing.",
        exampleZh: "我听到一只鸟在唱歌。",
        examples: [
          { en: "The bird flew away.", zh: "鸟飞走了。" },
          { en: "Birds build nests in spring.", zh: "鸟儿春天筑巢。" }
        ],
        collocations: ["pet bird", "bird nest", "bird watching", "bird species"],
        synonyms: ["fowl", "avian"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'bird' for all flying animals", correction: "Bird = 鸟; bat = 蝙蝠 (mammal)." }],
        pronunciationTips: "One syllable: burd. Like 'word' with 'b'.",
        memoryTrick: "Bird = 鸟. B + ird (ird) = bird flies."
      },
      {
        id: "no-7", topic: "Nature", level: "A2", category: "Plants",
        english: "Flower", word: "flower", partOfSpeech: "noun",
        breakdown: "FLOW-er", chinese: "花", pinyin: "huā",
        emoji: "🌸", imageKeyword: "colorful flower",
        definitionEn: "The colorful part of a plant.",
        definitionZh: "植物的彩色部分。",
        detailsEn: "Common: flower garden, flower shop, flower bouquet.",
        detailsZh: "常见：flower garden、flower shop、flower bouquet。",
        exampleEn: "She picked a flower.",
        exampleZh: "她摘了一朵花。",
        examples: [
          { en: "The flowers are blooming.", zh: "花在盛开。" },
          { en: "He bought flowers for mom.", zh: "他给妈妈买了花。" }
        ],
        collocations: ["flower garden", "flower shop", "flower bouquet", "flower power"],
        synonyms: ["blossom", "bloom"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'flour' instead of 'flower'", correction: "Flour = 面粉; flower = 花." }],
        pronunciationTips: "Two syllables: FLOW-er. Stress the first.",
        memoryTrick: "Flow + er. A flower flows with beauty."
      },
      {
        id: "no-8", topic: "Nature", level: "A2", category: "Landscapes",
        english: "Mountain", word: "mountain", partOfSpeech: "noun",
        breakdown: "MOUN-ten", chinese: "山", pinyin: "shān",
        emoji: "🏔️", imageKeyword: "mountain landscape",
        definitionEn: "A very high hill or natural elevation.",
        definitionZh: "非常高的山丘或自然高地。",
        detailsEn: "Common: climb a mountain, mountain view, mountain range.",
        detailsZh: "常见：climb a mountain、mountain view、mountain range。",
        exampleEn: "The mountain is covered in snow.",
        exampleZh: "山被雪覆盖。",
        examples: [
          { en: "We hiked the mountain.", zh: "我们徒步登山了。" },
          { en: "The view from the mountain was amazing.", zh: "从山顶看景色很美。" }
        ],
        collocations: ["climb a mountain", "mountain view", "mountain range", "mountain climbing"],
        synonyms: ["peak", "hill", "summit"], antonyms: ["valley"],
        commonMistakes: [{ mistake: "Using 'mountain' for small hills", correction: "Mountain = 大山; hill = 小山." }],
        pronunciationTips: "Two syllables: MOUN-ten. Stress the first.",
        memoryTrick: "Mount + ain. A mountain is a mount (mount) + ain (large)."
      }
    ]
  },
  {
    id: "language-communication",
    title: "Language & Communication",
    emoji: "💬",
    description: "Speaking, writing, languages, and communication skills.",
    color: "from-cyan-400 to-blue-400",
    words: [
      {
        id: "lc-1", topic: "Language", level: "A1", category: "Speaking",
        english: "Speak", word: "speak", partOfSpeech: "verb",
        breakdown: "speek", chinese: "说（语言）", pinyin: "shuō (yǔ yán)",
        emoji: "🗣️", imageKeyword: "person speaking",
        definitionEn: "To say words using your voice.",
        definitionZh: "用你的声音说出词语。",
        detailsEn: "Common: speak English, speak loudly, speak to someone.",
        detailsZh: "常见搭配：speak English、speak loudly、speak to someone。",
        exampleEn: "I speak a little Spanish.",
        exampleZh: "我会说一点西班牙语。",
        examples: [
          { en: "Speak clearly, please.", zh: "请清楚地说话。" },
          { en: "She speaks three languages.", zh: "她会说三种语言。" }
        ],
        collocations: ["speak English", "speak loudly", "speak to someone", "speak up"],
        synonyms: ["talk", "say"], antonyms: ["listen"],
        commonMistakes: [{ mistake: "Using 'speak' for 'talk' always", correction: "Speak = 说 (formal/ language); talk = 谈话 (casual)." }],
        pronunciationTips: "One syllable: speek. Long 'ee'.",
        memoryTrick: "Speak = 说. Speech + k. Speak your mind."
      },
      {
        id: "lc-2", topic: "Language", level: "A2", category: "Writing",
        english: "Letter", word: "letter", partOfSpeech: "noun",
        breakdown: "LET-er", chinese: "信；字母", pinyin: "xìn; zì mǔ",
        emoji: "✉️", imageKeyword: "mail letter",
        definitionEn: "A written message; also a symbol of the alphabet.",
        definitionZh: "书面信息；也指字母表中的符号。",
        detailsEn: "Common: write a letter, love letter, capital letter.",
        detailsZh: "常见搭配：write a letter、love letter、capital letter。",
        exampleEn: "She wrote a letter.",
        exampleZh: "她写了一封信。",
        examples: [
          { en: "I got a letter from my friend.", zh: "我收到了朋友的信。" },
          { en: "The letter 'A' is first.", zh: "字母'A'排第一。" }
        ],
        collocations: ["write a letter", "love letter", "capital letter", "open letter"],
        synonyms: ["message", "epistle"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'letter' for email always", correction: "Letter = 信 (physical); email = 电子邮件 (digital)." }],
        pronunciationTips: "Two syllables: LET-er. Stress the first.",
        memoryTrick: "Let + ter. Let (让) + ter (特) = let me send a letter."
      },
      {
        id: "lc-3", topic: "Language", level: "B1", category: "Grammar",
        english: "Grammar", word: "grammar", partOfSpeech: "noun",
        breakdown: "GRAM-er", chinese: "语法", pinyin: "yǔ fǎ",
        emoji: "📖", imageKeyword: "grammar book",
        definitionEn: "The rules for how words are used in a language.",
        definitionZh: "语言中词语使用的规则。",
        detailsEn: "Common: English grammar, grammar rules, grammar check.",
        detailsZh: "常见搭配：English grammar、grammar rules、grammar check。",
        exampleEn: "Grammar is important.",
        exampleZh: "语法很重要。",
        examples: [
          { en: "She teaches grammar.", zh: "她教语法。" },
          { en: "Check your grammar.", zh: "检查你的语法。" }
        ],
        collocations: ["English grammar", "grammar rules", "grammar check", "grammar book"],
        synonyms: ["syntax", "structure"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'grammar' for vocabulary", correction: "Grammar = 语法 (rules); vocabulary = 词汇 (words)." }],
        pronunciationTips: "Two syllables: GRAM-er. Stress the first.",
        memoryTrick: "Gram + mar. Gram (gram) + mar (妈) = mom teaches grammar."
      },
      {
        id: "lc-4", topic: "Language", level: "B2", category: "Vocabulary",
        english: "Vocabulary", word: "vocabulary", partOfSpeech: "noun",
        breakdown: "voh-KAB-yuh-ler-ee", chinese: "词汇", pinyin: "cí huì",
        emoji: "📚", imageKeyword: "vocabulary words",
        definitionEn: "All the words known and used by a person.",
        definitionZh: "一个人知道和使用的所有词语。",
        detailsEn: "Common: build vocabulary, vocabulary list, academic vocabulary.",
        detailsZh: "常见搭配：build vocabulary、vocabulary list、academic vocabulary。",
        exampleEn: "Reading improves vocabulary.",
        exampleZh: "阅读提高词汇量。",
        examples: [
          { en: "Learn new vocabulary daily.", zh: "每天学习新词汇。" },
          { en: "Her vocabulary is huge.", zh: "她的词汇量很大。" }
        ],
        collocations: ["build vocabulary", "vocabulary list", "academic vocabulary", "vocabulary size"],
        synonyms: ["lexicon", "word stock"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'vocabulary' for single words", correction: "Vocabulary = 词汇 (collection); word = 单词 (single)." }],
        pronunciationTips: "Five syllables: voh-KAB-yuh-ler-ee. Stress the second.",
         memoryTrick: "Vocab + ulary. Vocab (词语) + ulary (memory tool) = vocabulary."
      },
      {
        id: "lc-5", topic: "Language", level: "A1", category: "Communication",
        english: "Hello", word: "hello", partOfSpeech: "noun / interjection",
        breakdown: "heh-LOH", chinese: "你好", pinyin: "nǐ hǎo",
        emoji: "👋", imageKeyword: "hello greeting",
        definitionEn: "A greeting or expression of goodwill.",
        definitionZh: "问候或良好意愿的表达。",
        detailsEn: "Common: say hello, hello there, hello everyone.",
        detailsZh: "常见：say hello、hello there、hello everyone。",
        exampleEn: "Hello, how are you?",
        exampleZh: "你好，你好吗？",
        examples: [
          { en: "She said hello cheerfully.", zh: "她愉快地问好。" },
          { en: "Hello from the other side.", zh: "另一边的问候。" }
        ],
        collocations: ["say hello", "hello there", "hello everyone", "hello again"],
        synonyms: ["greeting", "hi"], antonyms: ["goodbye"],
        commonMistakes: [{ mistake: "Using only in formal settings", correction: "'Hello' is versatile: casual and formal." }],
        pronunciationTips: "Stress the second syllable: heh-LOH.",
        memoryTrick: "Hello = 你好. An ancient greeting meaning whole/healthy."
      },
      {
        id: "lc-6", topic: "Language", level: "A2", category: "Communication",
        english: "Listen", word: "listen", partOfSpeech: "verb",
        breakdown: "LIS-en", chinese: "听", pinyin: "tīng",
        emoji: "👂", imageKeyword: "listening person",
        definitionEn: "To give attention to sound or speech.",
        definitionZh: "注意听声音或讲话。",
        detailsEn: "Common: listen to music, listen carefully, listen up.",
        detailsZh: "常见：listen to music、listen carefully、listen up。",
        exampleEn: "I listen to podcasts daily.",
        exampleZh: "我每天听播客。",
        examples: [
          { en: "Listen carefully.", zh: "仔细听。" },
          { en: "She listens well.", zh: "她听得很认真。" }
        ],
        collocations: ["listen to", "listen carefully", "listen up", "listen to music"],
        synonyms: ["hear", "pay attention"], antonyms: ["ignore"],
        commonMistakes: [{ mistake: "'Listen something'", correction: "'Listen TO something'." }],
        pronunciationTips: "One syllable: LIS-en.",
        memoryTrick: "Listen = 听. Implies active attention."
      },
      {
        id: "lc-7", topic: "Language", level: "B1", category: "Writing",
        english: "Essay", word: "essay", partOfSpeech: "noun",
        breakdown: "ES-ay", chinese: "文章", pinyin: "wén zhāng",
        emoji: "📝", imageKeyword: "essay writing",
        definitionEn: "A short piece of writing on a subject.",
        definitionZh: "关于某一主题的短文。",
        detailsEn: "Common: write an essay, argumentative essay, essay topic.",
        detailsZh: "常见：write an essay、argumentative essay、essay topic。",
        exampleEn: "I wrote an essay about climate change.",
        exampleZh: "我写了一篇关于气候变化的文章。",
        examples: [
          { en: "Her essay won a prize.", zh: "她的文章获奖了。" },
          { en: "The essay is 500 words.", zh: "文章500字。" }
        ],
        collocations: ["write essay", "argumentative essay", "essay topic", "essay writing"],
        synonyms: ["article", "composition"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'story' for academic writing", correction: "'Essay' is structured and argumentative; 'story' is narrative." }],
        pronunciationTips: "Stress the first syllable: ES-ay.",
        memoryTrick: "Essay = S + say. A written piece that says something."
      },
      {
        id: "lc-8", topic: "Language", level: "B1", category: "Communication",
        english: "Spelling", word: "spelling", partOfSpeech: "noun",
        breakdown: "SPEL-ing", chinese: "拼写", pinyin: "pīn xiě",
        emoji: "✍️", imageKeyword: "spelling words",
        definitionEn: "The way a word is written.",
        definitionZh: "单词的书写方式。",
        detailsEn: "Common: correct spelling, spelling mistake, spelling bee.",
        detailsZh: "常见：correct spelling、spelling mistake、spelling bee。",
        exampleEn: "The spelling is tricky.",
        exampleZh: "这个拼写很棘手。",
        examples: [
          { en: "Check the spelling.", zh: "检查拼写。" },
          { en: "She won the spelling bee.", zh: "她赢得了拼写比赛。" }
        ],
        collocations: ["correct spelling", "spelling mistake", "spelling bee", "spelling test"],
        synonyms: ["orthography"], antonyms: [],
        commonMistakes: [{ mistake: "'Spelling' as a verb", correction: "Use 'spell' as a verb: 'How do you spell it?'" }],
        pronunciationTips: "Stress the first syllable: SPEL-ing.",
        memoryTrick: "Spell + ing. The act of spelling."
      }
    ]
  },
  {
    id: "science-technology",
    title: "Science & Technology",
    emoji: "🔬",
    description: "Science terms, computers, internet, and modern tech.",
    color: "from-violet-400 to-indigo-400",
    words: [
      {
        id: "st-1", topic: "Science", level: "A2", category: "Physics",
        english: "Energy", word: "energy", partOfSpeech: "noun",
        breakdown: "EN-er-jee", chinese: "能量", pinyin: "néng liàng",
        emoji: "⚡", imageKeyword: "energy power",
        definitionEn: "The ability to do work or produce heat.",
        definitionZh: "做功或产生热量的能力。",
        detailsEn: "Common: renewable energy, solar energy, energy saving.",
        detailsZh: "常见搭配：renewable energy、solar energy、energy saving。",
        exampleEn: "Solar energy is clean.",
        exampleZh: "太阳能是清洁的。",
        examples: [
          { en: "Energy comes from the sun.", zh: "能量来自太阳。" },
          { en: "Save energy at home.", zh: "在家节约能源。" }
        ],
        collocations: ["renewable energy", "solar energy", "energy saving", "clean energy"],
        synonyms: ["power", "strength"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'energy' for electricity always", correction: "Energy = 能量 (general); electricity = 电力 (specific)." }],
        pronunciationTips: "Three syllables: EN-er-jee. Stress the first.",
        memoryTrick: "En + er + gy. En (give) + er (人) + gy (give energy)."
      },
      {
        id: "st-2", topic: "Science", level: "B1", category: "Chemistry",
        english: "Experiment", word: "experiment", partOfSpeech: "noun / verb",
        breakdown: "ik-SPER-i-ment", chinese: "实验", pinyin: "shí yàn",
        emoji: "🧪", imageKeyword: "science experiment",
        definitionEn: "A test to discover something.",
        definitionZh: "为发现某事而进行的测试。",
        detailsEn: "Common: do an experiment, science experiment, experiment result.",
        detailsZh: "常见搭配：do an experiment、science experiment、experiment result。",
        exampleEn: "The experiment succeeded.",
        exampleZh: "实验成功了。",
        examples: [
          { en: "Do an experiment in class.", zh: "在课堂上做实验。" },
          { en: "The experiment failed.", zh: "实验失败了。" }
        ],
        collocations: ["do an experiment", "science experiment", "experiment result", "experiment procedure"],
        synonyms: ["test", "trial"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'test' for all experiments", correction: "Experiment = 实验 (scientific); test = 测试 (general)." }],
        pronunciationTips: "Stress the second syllable: ik-SPER-i-ment.",
        memoryTrick: "Ex + per + i + ment. Ex (out) + per (try) = try out = experiment."
      },
      {
        id: "st-3", topic: "Technology", level: "A1", category: "Internet",
        english: "Computer", word: "computer", partOfSpeech: "noun",
        breakdown: "kuhm-PYOO-ter", chinese: "电脑", pinyin: "diàn nǎo",
        emoji: "💻", imageKeyword: "desktop computer",
        definitionEn: "An electronic device for processing data.",
        definitionZh: "处理数据的电子设备。",
        detailsEn: "Common: use a computer, laptop computer, computer screen.",
        detailsZh: "常见搭配：use a computer、laptop computer、computer screen。",
        exampleEn: "I work on my computer.",
        exampleZh: "我用电脑工作。",
        examples: [
          { en: "The computer is new.", zh: "电脑是新的。" },
          { en: "She bought a computer.", zh: "她买了一台电脑。" }
        ],
        collocations: ["use a computer", "laptop computer", "computer screen", "computer game"],
        synonyms: ["PC", "laptop"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'computer' for calculators", correction: "Computer = 电脑 (general); calculator = 计算器 (math only)." }],
        pronunciationTips: "Stress the second syllable: kuhm-PYOO-ter.",
        memoryTrick: "Com (共同) + put (放) + er (人)。共同放数据的人 = computer."
      },
      {
        id: "st-4", topic: "Technology", level: "B1", category: "Internet",
        english: "Software", word: "software", partOfSpeech: "noun",
        breakdown: "SORFT-wair", chinese: "软件", pinyin: "ruǎn jiàn",
        emoji: "💿", imageKeyword: "software app",
        definitionEn: "Programs and data used by computers.",
        definitionZh: "计算机使用的程序和数据。",
        detailsEn: "Common: install software, software update, software engineer.",
        detailsZh: "常见搭配：install software、software update、software engineer。",
        exampleEn: "The software is free.",
        exampleZh: "软件是免费的。",
        examples: [
          { en: "Install the software now.", zh: "现在安装软件。" },
          { en: "Software updates are ready.", zh: "软件更新准备好了。" }
        ],
        collocations: ["install software", "software update", "software engineer", "software development"],
        synonyms: ["program", "application"], antonyms: ["hardware"],
        commonMistakes: [{ mistake: "Using 'software' for hardware", correction: "Software = 软件 (programs); hardware = 硬件 (physical)." }],
        pronunciationTips: "Two syllables: SORFT-wair. Stress the first.",
         memoryTrick: "Soft (软的) + ware (ware)。Soft ware = software."
      },
      {
        id: "st-5", topic: "Science", level: "A2", category: "Technology",
        english: "Innovation", word: "innovation", partOfSpeech: "noun",
        breakdown: "in-uh-VAY-shun", chinese: "创新", pinyin: "chuàng xīn",
        emoji: "💡", imageKeyword: "innovation idea",
        definitionEn: "A new method, idea, or product.",
        definitionZh: "新方法、想法或产品。",
        detailsEn: "Common: technological innovation, drive innovation, innovation hub.",
        detailsZh: "常见：technological innovation、drive innovation、innovation hub。",
        exampleEn: "Innovation drives growth.",
        exampleZh: "创新驱动增长。",
        examples: [
          { en: "The company values innovation.", zh: "公司重视创新。" },
          { en: "She led the innovation team.", zh: "她领导创新团队。" }
        ],
        collocations: ["technological innovation", "drive innovation", "innovation hub", "innovation culture"],
        synonyms: ["invention", "creativity", "novelty"], antonyms: ["tradition"],
        commonMistakes: [{ mistake: "'Innovation' for small changes", correction: "It implies something significantly new." }],
        pronunciationTips: "Stress the fourth syllable: in-uh-VAY-shun.",
        memoryTrick: "In + nova + tion. A new thing that comes in."
      },
      {
        id: "st-6", topic: "Science", level: "A2", category: "Research",
        english: "Data", word: "data", partOfSpeech: "noun",
        breakdown: "DAY-tuh", chinese: "数据", pinyin: "shù jù",
        emoji: "📊", imageKeyword: "data analysis",
        definitionEn: "Facts and statistics collected for reference.",
        definitionZh: "收集供参考的事实和统计资料。",
        detailsEn: "Common: collect data, analyze data, big data.",
        detailsZh: "常见：collect data、analyze data、big data。",
        exampleEn: "We need more data.",
        exampleZh: "我们需要更多数据。",
        examples: [
          { en: "The data supports the theory.", zh: "数据支持理论。" },
          { en: "She analyzed the data.", zh: "她分析了数据。" }
        ],
        collocations: ["collect data", "analyze data", "big data", "data analysis"],
        synonyms: ["information", "statistics", "facts"], antonyms: [],
        commonMistakes: [{ mistake: "'Data is' in formal writing", correction: "Formal: 'Data are'; informal: 'Data is'." }],
        pronunciationTips: "Stress the first syllable: DAY-tuh.",
        memoryTrick: "Data = 数据. Facts you can count."
      },
      {
        id: "st-7", topic: "Science", level: "B1", category: "Research",
        english: "Research", word: "research", partOfSpeech: "noun / verb",
        breakdown: "REE-surch", chinese: "研究", pinyin: "yán jiū",
        emoji: "🔬", imageKeyword: "research lab",
        definitionEn: "Systematic investigation to establish facts.",
        definitionZh: "为建立事实而进行的系统性调查。",
        detailsEn: "Common: conduct research, research paper, research findings.",
        detailsZh: "常见：conduct research、research paper、research findings。",
        exampleEn: "She is doing research.",
        exampleZh: "她正在做研究。",
        examples: [
          { en: "The research shows benefits.", zh: "研究显示好处。" },
          { en: "He published his research.", zh: "他发表了他的研究。" }
        ],
        collocations: ["conduct research", "research paper", "research findings", "research method"],
        synonyms: ["study", "investigation", "analysis"], antonyms: [],
        commonMistakes: [{ mistake: "'Do a research'", correction: "Use 'conduct research' or 'do research' without 'a'." }],
        pronunciationTips: "Stress the first syllable: REE-surch.",
        memoryTrick: "Re + search. Search again systematically."
      },
      {
        id: "st-8", topic: "Science", level: "B1", category: "Technology",
        english: "Hypothesis", word: "hypothesis", partOfSpeech: "noun",
        breakdown: "hye-POTH-uh-sis", chinese: "假说", pinyin: "jiǎ shuō",
        emoji: "🧪", imageKeyword: "scientific hypothesis",
        definitionEn: "An educated guess before testing.",
        definitionZh: "测试前的有根据的猜测。",
        detailsEn: "Common: test a hypothesis, scientific hypothesis, working hypothesis.",
        detailsZh: "常见：test a hypothesis、scientific hypothesis、working hypothesis。",
        exampleEn: "The hypothesis was proven wrong.",
        exampleZh: "假说被证明是错的。",
        examples: [
          { en: "She proposed a hypothesis.", zh: "她提出了一个假说。" },
          { en: "Test the hypothesis carefully.", zh: "仔细检验假说。" }
        ],
        collocations: ["test hypothesis", "scientific hypothesis", "working hypothesis", "hypothesis testing"],
        synonyms: ["theory", "guess", "proposition"], antonyms: ["fact"],
        commonMistakes: [{ mistake: "Plural is 'hypothesises'", correction: "Plural is 'hypotheses'." }],
        pronunciationTips: "Stress the third syllable: hye-POTH-uh-sis.",
        memoryTrick: "Hypo = under, thesis = placing. A guess placed before proof.",
        superlative: "hypotheses"
      }
    ]
  },
  {
    id: "arts-culture",
    title: "Arts & Culture",
    emoji: "🎨",
     description: "Art, music, museums, books, and cultural activities.",
     color: "from-pink-400 to-purple-400",
     words: [
       {
         id: "ac-arts-1", topic: "Arts", level: "A2", category: "Visual Art",
        english: "Painting", word: "painting", partOfSpeech: "noun",
        breakdown: "PAYNT-ing", chinese: "绘画；画作", pinyin: "huì huà; huà zuò",
        emoji: "🖼️", imageKeyword: "canvas painting",
        definitionEn: "A picture made with paint.",
        definitionZh: "用颜料做的图画。",
        detailsEn: "Common: oil painting, painting class, wall painting.",
        detailsZh: "常见搭配：oil painting、painting class、wall painting。",
        exampleEn: "She loves painting.",
        exampleZh: "她喜欢绘画。",
        examples: [
          { en: "The painting is beautiful.", zh: "画很漂亮。" },
          { en: "He is learning painting.", zh: "他在学画画。" }
        ],
        collocations: ["oil painting", "painting class", "wall painting", "painting tool"],
        synonyms: ["artwork", "picture"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'paint' as noun for finished work", correction: "Paint = 颜料 (material); painting = 画作 (finished)." }],
        pronunciationTips: "Two syllables: PAINT-ing. Stress the first.",
        memoryTrick: "Paint + ing. The art of painting."
      },
      {
        id: "ac-2", topic: "Arts", level: "B1", category: "Music",
        english: "Piano", word: "piano", partOfSpeech: "noun",
        breakdown: "pee-AN-oh", chinese: "钢琴", pinyin: "gāng qín",
        emoji: "🎹", imageKeyword: "piano keyboard",
        definitionEn: "A large musical instrument with black and white keys.",
        definitionZh: "有黑白键的大型乐器。",
        detailsEn: "Common: play the piano, piano lesson, piano music.",
        detailsZh: "常见搭配：play the piano、piano lesson、piano music。",
        exampleEn: "She plays the piano well.",
        exampleZh: "她钢琴弹得好。",
        examples: [
          { en: "The piano is in the hall.", zh: "钢琴在大厅里。" },
          { en: "He practices piano daily.", zh: "他每天练习钢琴。" }
        ],
        collocations: ["play the piano", "piano lesson", "piano music", "piano recital"],
        synonyms: ["keyboard", "instrument"], antonyms: [],
        commonMistakes: [{ mistake: "Dropping 'the' before piano", correction: "Use 'the piano' when playing." }],
        pronunciationTips: "Three syllables: pee-AN-oh. Stress the second.",
        memoryTrick: "Piano = 钢琴. Pi (音) + ano (安诺) = piano sounds."
      },
      {
        id: "ac-3", topic: "Culture", level: "A2", category: "Museums",
        english: "Museum", word: "museum", partOfSpeech: "noun",
        breakdown: "myoo-ZEE-um", chinese: "博物馆", pinyin: "bó wù guǎn",
        emoji: "🏛️", imageKeyword: "museum building",
        definitionEn: "A building where important objects are kept.",
        definitionZh: "保存重要物品的建筑。",
        detailsEn: "Common: visit a museum, art museum, museum ticket.",
        detailsZh: "常见搭配：visit a museum、art museum、museum ticket。",
        exampleEn: "The museum is open today.",
        exampleZh: "博物馆今天开放。",
        examples: [
          { en: "We visited the museum.", zh: "我们参观了博物馆。" },
          { en: "Museum entry is free.", zh: "博物馆免费进入。" }
        ],
        collocations: ["visit a museum", "art museum", "museum ticket", "museum exhibit"],
        synonyms: ["gallery", "exhibition"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'museum' for galleries only", correction: "Museum = 博物馆 (collections); gallery = 画廊 (art sales)." }],
        pronunciationTips: "Three syllables: myoo-ZEE-um. Stress the second.",
        memoryTrick: "Muse (缪斯) + um (地方)。A place for muses (arts)."
      },
      {
        id: "ac-4", topic: "Culture", level: "B1", category: "Books",
        english: "Literature", word: "literature", partOfSpeech: "noun",
        breakdown: "LIT-er-uh-chur", chinese: "文学", pinyin: "wén xué",
        emoji: "📖", imageKeyword: "literature books",
        definitionEn: "Written works with artistic value.",
        definitionZh: "具有艺术价值的书面作品。",
        detailsEn: "Common: English literature, study literature, modern literature.",
        detailsZh: "常见搭配：English literature、study literature、modern literature。",
        exampleEn: "She studies literature.",
        exampleZh: "她研究文学。",
        examples: [
          { en: "Literature reflects culture.", zh: "文学反映文化。" },
          { en: "He loves classic literature.", zh: "他喜欢古典文学。" }
        ],
        collocations: ["English literature", "study literature", "modern literature", "literature review"],
        synonyms: ["writing", "books"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'literature' for any reading", correction: "Literature = 文学 (artistic); reading = 阅读 (general)." }],
        pronunciationTips: "Four syllables: LIT-er-uh-chur. Stress the first.",
         memoryTrick: "Liter (字母) + ature. Written art = literature."
      },
      {
        id: "ac-5", topic: "Arts", level: "A2", category: "Music",
        english: "Music", word: "music", partOfSpeech: "noun",
        breakdown: "MYOO-zik", chinese: "音乐", pinyin: "yīn yuè",
        emoji: "🎵", imageKeyword: "musical notes",
        definitionEn: "Vocal or instrumental sounds combined.",
        definitionZh: "结合的人声或乐器声。",
        detailsEn: "Common: listen to music, play music, music genre.",
        detailsZh: "常见：listen to music、play music、music genre。",
        exampleEn: "I enjoy listening to music.",
        exampleZh: "我喜欢听音乐。",
        examples: [
          { en: "Music relaxes me.", zh: "音乐让我放松。" },
          { en: "She plays music professionally.", zh: "她专业演奏音乐。" }
        ],
        collocations: ["listen to music", "play music", "music genre", "music festival"],
        synonyms: ["melody", "harmony"], antonyms: ["silence"],
        commonMistakes: [{ mistake: "'Listen music'", correction: "Use 'listen TO music'." }],
        pronunciationTips: "Stress the first syllable: MYOO-zik.",
        memoryTrick: "Music = 音乐. Muse + ic. Inspired by the muse."
      },
      {
        id: "ac-6", topic: "Arts", level: "B1", category: "Culture",
        english: "Theater", word: "theater", partOfSpeech: "noun",
        breakdown: "THEE-uh-ter", chinese: "剧院", pinyin: "jù yuàn",
        emoji: "🎭", imageKeyword: "theater stage",
        definitionEn: "A building where plays are performed.",
        definitionZh: "上演戏剧的建筑。",
        detailsEn: "Common: go to the theater, theater performance, movie theater.",
        detailsZh: "常见：go to the theater、theater performance、movie theater。",
        exampleEn: "We went to the theater.",
        exampleZh: "我们去了剧院。",
        examples: [
          { en: "The theater is downtown.", zh: "剧院在市中心。" },
          { en: "She works in theater.", zh: "她在剧院工作。" }
        ],
        collocations: ["go to theater", "theater performance", "movie theater", "theater arts"],
        synonyms: ["cinema", "auditorium", "playhouse"], antonyms: [],
        commonMistakes: [{ mistake: "'Theatre' spelling", correction: "American English: theater. British: theatre. Both are correct." }],
        pronunciationTips: "Stress the first syllable: THEE-uh-ter.",
        memoryTrick: "Thea = god, ter = place. A place for the performing arts."
      },
      {
        id: "ac-7", topic: "Arts", level: "B1", category: "Culture",
        english: "Exhibition", word: "exhibition", partOfSpeech: "noun",
        breakdown: "ek-suh-BISH-un", chinese: "展览", pinyin: "zhǎn lǎn",
        emoji: "🖼️", imageKeyword: "art exhibition",
        definitionEn: "A public display of art or items.",
        definitionZh: "艺术品或物品的公开展览。",
        detailsEn: "Common: art exhibition, exhibition hall, exhibition center.",
        detailsZh: "常见：art exhibition、exhibition hall、exhibition center。",
        exampleEn: "The exhibition opens Monday.",
        exampleZh: "展览周一开幕。",
        examples: [
          { en: "She curated the exhibition.", zh: "她策划了这个展览。" },
          { en: "The exhibition attracted many visitors.", zh: "展览吸引了很多游客。" }
        ],
        collocations: ["art exhibition", "exhibition hall", "exhibition center", "exhibition opening"],
        synonyms: ["display", "show", "gallery"], antonyms: [],
        commonMistakes: [{ mistake: "'Exhibition' for private showings", correction: "It implies a public display." }],
        pronunciationTips: "Stress the third syllable: ek-suh-BISH-un.",
        memoryTrick: "Ex + hibit + ion. Ex = out, hibit = hold. Hold out for public view."
      },
      {
        id: "ac-8", topic: "Arts", level: "A2", category: "Culture",
        english: "Artist", word: "artist", partOfSpeech: "noun",
        breakdown: "AR-tist", chinese: "艺术家", pinyin: "yì shù jiā",
        emoji: "🎨", imageKeyword: "artist painting",
        definitionEn: "A person who creates art.",
        definitionZh: "创造艺术的人。",
        detailsEn: "Common: visual artist, digital artist, artist residency.",
        detailsZh: "常见：visual artist、digital artist、artist residency。",
        exampleEn: "She is a talented artist.",
        exampleZh: "她是一位有才华的艺术家。",
        examples: [
          { en: "The artist painted the mural.", zh: "艺术家画了壁画。" },
          { en: "Every artist needs inspiration.", zh: "每位艺术家都需要灵感。" }
        ],
        collocations: ["visual artist", "digital artist", "artist residency", "artist community"],
        synonyms: ["painter", "creator", "designer"], antonyms: [],
        commonMistakes: [{ mistake: "'Art' for people", correction: "'Artist' is the person; 'art' is the work." }],
        pronunciationTips: "Stress the first syllable: AR-tist.",
        memoryTrick: "Art + ist. One who makes art."
      }
    ]
  },
  {
    id: "business-career",
    title: "Business & Career",
    emoji: "💼",
    description: "Work, office, career, meetings, and business English.",
    color: "from-slate-400 to-gray-400",
    words: [
      {
        id: "bc-1", topic: "Business", level: "A2", category: "Office",
        english: "Office", word: "office", partOfSpeech: "noun",
        breakdown: "OF-is", chinese: "办公室", pinyin: "bàn gōng shì",
        emoji: "🏢", imageKeyword: "office building",
        definitionEn: "A place where people work.",
        definitionZh: "人们工作的地方。",
        detailsEn: "Common: work in an office, office hours, office manager.",
        detailsZh: "常见搭配：work in an office、office hours、office manager。",
        exampleEn: "I work in an office.",
        exampleZh: "我在办公室工作。",
        examples: [
          { en: "The office is downtown.", zh: "办公室在市中心。" },
          { en: "She left the office early.", zh: "她早离开了办公室。" }
        ],
        collocations: ["work in an office", "office hours", "office manager", "office space"],
        synonyms: ["workplace", "bureau"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'office' for home work", correction: "Office = 办公室 (company); home office = 家庭办公室." }],
        pronunciationTips: "Two syllables: OF-is. Stress the first.",
        memoryTrick: "Off + ice. Off (离开) + ice (冰) = leave the cold office."
      },
      {
        id: "bc-2", topic: "Business", level: "B1", category: "Tasks",
        english: "Task", word: "task", partOfSpeech: "noun",
        breakdown: "task", chinese: "任务", pinyin: "rèn wù",
        emoji: "📋", imageKeyword: "work task",
        definitionEn: "A piece of work to be done.",
        definitionZh: "要做的工作。",
        detailsEn: "Common: complete a task, daily tasks, task list.",
        detailsZh: "常见搭配：complete a task、daily tasks、task list。",
        exampleEn: "The task is difficult.",
        exampleZh: "任务很难。",
        examples: [
          { en: "Finish the task now.", zh: "现在完成任务。" },
          { en: "She has many tasks.", zh: "她有很多任务。" }
        ],
        collocations: ["complete a task", "daily tasks", "task list", "main task"],
        synonyms: ["job", "duty", "assignment"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'task' for jobs always", correction: "Task = 任务 (specific); job = 工作 (general)." }],
        pronunciationTips: "One syllable: task. Like 'mask' with 't'.",
        memoryTrick: "Task = 任务. T (work) + ask = ask someone to do a task."
      },
      {
        id: "bc-3", topic: "Business", level: "B1", category: "Team",
        english: "Colleague", word: "colleague", partOfSpeech: "noun",
        breakdown: "KOL-eeg", chinese: "同事", pinyin: "tóng shì",
        emoji: "👨‍💼", imageKeyword: "office colleagues",
        definitionEn: "A person you work with.",
        definitionZh: "和你一起工作的人。",
        detailsEn: "Common: work colleague, former colleague, colleague meeting.",
        detailsZh: "常见搭配：work colleague、former colleague、colleague meeting。",
        exampleEn: "My colleague helped me.",
        exampleZh: "我的同事帮了我。",
        examples: [
          { en: "She is a great colleague.", zh: "她是位很棒的同事。" },
          { en: "Colleagues can become friends.", zh: "同事可以成为朋友。" }
        ],
        collocations: ["work colleague", "former colleague", "colleague meeting", "trusted colleague"],
        synonyms: ["coworker", "peer"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'classmate' for work", correction: "Colleague = 同事; classmate = 同学." }],
        pronunciationTips: "Two syllables: KOL-eeg. Stress the first.",
        memoryTrick: "Col + league. You are in the same league (team)."
      },
      {
        id: "bc-4", topic: "Business", level: "B2", category: "Career",
        english: "Promotion", word: "promotion", partOfSpeech: "noun",
        breakdown: "pro-MO-tion", chinese: "晋升；推广", pinyin: "jìn shēng; tuī guǎng",
        emoji: "📈", imageKeyword: "job promotion",
        definitionEn: "A move to a higher position; also marketing activity.",
        definitionZh: "升到更高职位；也指促销活动。",
        detailsEn: "Common: get a promotion, job promotion, sales promotion.",
        detailsZh: "常见搭配：get a promotion、job promotion、sales promotion。",
        exampleEn: "She got a promotion.",
        exampleZh: "她晋升了。",
        examples: [
          { en: "He deserves a promotion.", zh: "他值得晋升。" },
          { en: "The promotion ends Friday.", zh: "促销周五结束。" }
        ],
        collocations: ["get a promotion", "job promotion", "sales promotion", "promotion campaign"],
        synonyms: ["advancement", "advertising"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'promotion' for demotion", correction: "Promotion = 晋升; demotion = 降职." }],
        pronunciationTips: "Stress the second syllable: pro-MO-tion.",
        memoryTrick: "Pro (forward) + motion (move). Move forward = promotion."
      },
      {
        id: "bc-5", topic: "Business", level: "B1", category: "Meetings",
        english: "Agenda", word: "agenda", partOfSpeech: "noun",
        breakdown: "uh-JEN-duh", chinese: "议程", pinyin: "yì chéng",
        emoji: "📝", imageKeyword: "meeting agenda",
        definitionEn: "A list of topics to discuss in a meeting.",
        definitionZh: "会议中要讨论的主题清单。",
        detailsEn: "Common: meeting agenda, agenda item, set the agenda.",
        detailsZh: "常见搭配：meeting agenda、agenda item、set the agenda。",
        exampleEn: "What is the agenda?",
        exampleZh: "议程是什么？",
        examples: [
          { en: "The agenda has five items.", zh: "议程有五个项目。" },
          { en: "Send the agenda before the meeting.", zh: "开会前发送议程。" }
        ],
        collocations: ["meeting agenda", "agenda item", "set the agenda", "agenda for"],
        synonyms: ["schedule", "plan"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'agenda' as singular only", correction: "Agenda is plural in Latin, but singular in English." }],
        pronunciationTips: "Three syllables: uh-JEN-duh. Stress the second.",
        memoryTrick: "A + gen + da. A (list) + gen (生成) + da (拿) = list to take."
      },
      {
        id: "bc-6", topic: "Business", level: "A2", category: "Tasks",
        english: "Deadline", word: "deadline", partOfSpeech: "noun",
        breakdown: "DED-lyne", chinese: "截止日期", pinyin: "jié zhǐ rì qī",
        emoji: "⏰", imageKeyword: "deadline calendar",
        definitionEn: "The latest time by which something must be finished.",
        definitionZh: "必须完成某事的最晚时间。",
        detailsEn: "Common: meet a deadline, tight deadline, deadline approaches.",
        detailsZh: "常见搭配：meet a deadline、tight deadline、deadline approaches。",
        exampleEn: "The deadline is Friday.",
        exampleZh: "截止日期是周五。",
        examples: [
          { en: "She met the deadline.", zh: "她赶上了截止日期。" },
          { en: "We need more time for the deadline.", zh: "截止日期快到了。" }
        ],
        collocations: ["meet a deadline", "tight deadline", "deadline approaches", "deadline pressure"],
        synonyms: ["time limit", "due date"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'deadline' casually", correction: "Deadline is formal/work-related." }],
        pronunciationTips: "Two syllables: DED-lyne. Stress the first.",
        memoryTrick: "Dead + line. A line you must cross before it's dead (too late)."
      },
      {
        id: "bc-7", topic: "Business", level: "B1", category: "Finance",
        english: "Budget", word: "budget", partOfSpeech: "noun / verb",
        breakdown: "BUDJ-it", chinese: "预算", pinyin: "yù suàn",
        emoji: "💵", imageKeyword: "budget planning",
        definitionEn: "A plan for how much money to spend.",
        definitionZh: "花钱的计划。",
        detailsEn: "Common: annual budget, budget plan, stick to a budget.",
        detailsZh: "常见搭配：annual budget、budget plan、stick to a budget。",
        exampleEn: "We need a budget.",
        exampleZh: "我们需要一个预算。",
        examples: [
          { en: "The budget is tight.", zh: "预算很紧。" },
          { en: "She budgets carefully.", zh: "她小心地做预算。" }
        ],
        collocations: ["annual budget", "budget plan", "stick to a budget", "budget meeting"],
        synonyms: ["plan", "allowance"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'budget' for price always", correction: "Budget = 预算 (plan); price = 价格 (cost)." }],
        pronunciationTips: "Two syllables: BUDJ-it. Stress the first.",
        memoryTrick: "Bud + get. Get a bud (sprout) of money for your plan."
      },
      {
        id: "bc-8", topic: "Career", level: "B2", category: "Jobs",
        english: "Resume", word: "resume", partOfSpeech: "noun",
        breakdown: "REZ-oo-may", chinese: "简历", pinyin: "jiǎn lì",
        emoji: "📄", imageKeyword: "resume document",
        definitionEn: "A document summarizing your work experience.",
        definitionZh: "总结你工作经历的文件。",
        detailsEn: "Common: write a resume, resume template, resume skills.",
        detailsZh: "常见搭配：write a resume、resume template、resume skills。",
        exampleEn: "Update your resume.",
        exampleZh: "更新你的简历。",
        examples: [
          { en: "She sent her resume.", zh: "她发送了简历。" },
          { en: "The resume looks professional.", zh: "简历看起来很专业。" }
        ],
        collocations: ["write a resume", "resume template", "resume skills", "resume builder"],
        synonyms: ["CV", "curriculum vitae"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'CV' in American contexts", correction: "Resume = 简历 (US); CV = 学术简历 (UK/academic)." }],
        pronunciationTips: "Three syllables: REZ-oo-may. Stress the first.",
        memoryTrick: "Re + sume (总结). Re (again) + sume = sum up your life = resume."
      }
    ]
  },
  {
    id: "personal-growth",
    title: "Personal Growth & Mindfulness",
    emoji: "🌱",
    description: "Self-improvement, habits, goals, and mental health.",
    color: "from-lime-400 to-green-400",
    words: [
      {
        id: "pg-1", topic: "Growth", level: "B1", category: "Improvement",
        english: "Improve", word: "improve", partOfSpeech: "verb",
        breakdown: "im-PROOVE", chinese: "改善；提高", pinyin: "gǎi shàn; tí gāo",
        emoji: "📈", imageKeyword: "improvement graph",
        definitionEn: "To make something better.",
        definitionZh: "使某事更好。",
        detailsEn: "Common: improve skills, improve English, improve health.",
        detailsZh: "常见搭配：improve skills、improve English、improve health。",
        exampleEn: "I want to improve my speaking.",
        exampleZh: "我想提高我的口语。",
        examples: [
          { en: "Practice improves skills.", zh: "练习提高技能。" },
          { en: "She improved her score.", zh: "她提高了分数。" }
        ],
        collocations: ["improve skills", "improve English", "improve health", "improve performance"],
        synonyms: ["better", "enhance", "upgrade"], antonyms: ["worsen", "decline"],
        commonMistakes: [{ mistake: "Using 'improve' for people directly", correction: "Improve skills/health/performance; use 'improve yourself' for personal growth." }],
        pronunciationTips: "Stress the second syllable: im-PROOVE.",
        memoryTrick: "Im (in) + prove (证明). Prove in = improve."
      },
      {
        id: "pg-2", topic: "Growth", level: "A2", category: "Habits",
        english: "Habit", word: "habit", partOfSpeech: "noun",
        breakdown: "HAB-it", chinese: "习惯", pinyin: "xí guàn",
        emoji: "🔄", imageKeyword: "daily habit",
        definitionEn: "Something you do regularly.",
        definitionZh: "你定期做的事情。",
        detailsEn: "Common: good habit, bad habit, break a habit.",
        detailsZh: "常见搭配：good habit、bad habit、break a habit。",
        exampleEn: "Reading is a good habit.",
        exampleZh: "阅读是好习惯。",
        examples: [
          { en: "She has a morning habit.", zh: "她有晨间习惯。" },
          { en: "Break the bad habit.", zh: "改掉坏习惯。" }
        ],
        collocations: ["good habit", "bad habit", "break a habit", "daily habit"],
        synonyms: ["routine", "practice"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'habit' only negatively", correction: "Habits can be good or bad." }],
        pronunciationTips: "Two syllables: HAB-it. Stress the first.",
        memoryTrick: "Habit = 习惯. Have + it. You have it regularly."
      },
      {
        id: "pg-3", topic: "Mindfulness", level: "B1", category: "Focus",
        english: "Focus", word: "focus", partOfSpeech: "verb / noun",
        breakdown: "FO-kus", chinese: "集中；重点", pinyin: "jí zhōng; zhòng diǎn",
        emoji: "🎯", imageKeyword: "focus target",
        definitionEn: "To concentrate; the center of attention.",
        definitionZh: "集中；注意力的中心。",
        detailsEn: "Common: focus on, lose focus, focus energy.",
        detailsZh: "常见搭配：focus on、lose focus、focus energy。",
        exampleEn: "Focus on your goals.",
        exampleZh: "专注于你的目标。",
        examples: [
          { en: "She focused deeply.", zh: "她很专注。" },
          { en: "The focus is on quality.", zh: "重点在质量上。" }
        ],
        collocations: ["focus on", "lose focus", "focus energy", "main focus"],
        synonyms: ["concentrate", "attention"], antonyms: ["distract"],
        commonMistakes: [{ mistake: "Using 'focus' without 'on'", correction: "Focus on something." }],
        pronunciationTips: "Two syllables: FO-kus. Stress the first.",
        memoryTrick: "Focus = 焦点. Fo (火) + cus (ocus) = fire at the center."
      },
      {
        id: "pg-4", topic: "Mindfulness", level: "B2", category: "Mental",
        english: "Resilience", word: "resilience", partOfSpeech: "noun",
        breakdown: "rih-ZIL-yens", chinese: "韧性；恢复力", pinyin: "rèn xìng; huī fù lì",
        emoji: "🧘", imageKeyword: "mental resilience",
        definitionEn: "The ability to recover from difficulties.",
        definitionZh: "从困难中恢复的能力。",
        detailsEn: "Common: emotional resilience, build resilience, mental resilience.",
        detailsZh: "常见搭配：emotional resilience、build resilience、mental resilience。",
        exampleEn: "She showed great resilience.",
        exampleZh: "她展现了极大的韧性。",
        examples: [
          { en: "Resilience helps in hard times.", zh: "韧性帮助度过困难时期。" },
          { en: "Build resilience through practice.", zh: "通过练习建立韧性。" }
        ],
        collocations: ["emotional resilience", "build resilience", "mental resilience", "resilience skills"],
        synonyms: ["toughness", "strength"], antonyms: ["weakness", "fragility"],
        commonMistakes: [{ mistake: "Using 'resistance' for emotions", correction: "Resilience = 韧性 (bounce back); resistance = 抵抗力 (fight)." }],
        pronunciationTips: "Three syllables: rih-ZIL-yens. Stress the second.",
         memoryTrick: "Re (again) + sil (silk) + ience. Bounce back like silk."
      },
      {
        id: "pg-5", topic: "Growth", level: "B1", category: "Goals",
        english: "Goal", word: "goal", partOfSpeech: "noun",
        breakdown: "gohl", chinese: "目标", pinyin: "mù biāo",
        emoji: "🎯", imageKeyword: "goal target",
        definitionEn: "Something you aim to achieve.",
        definitionZh: "你想要达成的某件事。",
        detailsEn: "Common: set a goal, achieve a goal, long-term goal.",
        detailsZh: "常见：set a goal、achieve a goal、long-term goal。",
        exampleEn: "My goal is to learn English.",
        exampleZh: "我的目标是学英语。",
        examples: [
          { en: "She achieved her goal.", zh: "她实现了目标。" },
          { en: "Set realistic goals.", zh: "设定现实的目标。" }
        ],
        collocations: ["set goal", "achieve goal", "long-term goal", "goal setting"],
        synonyms: ["aim", "target", "objective"], antonyms: [],
        commonMistakes: [{ mistake: "'My goal is to travel' missing verb", correction: "Correct: 'My goal is to travel.'" }],
        pronunciationTips: "One syllable: gohl.",
        memoryTrick: "Goal = 目标. Like a goal in soccer."
      },
      {
        id: "pg-6", topic: "Growth", level: "B1", category: "Motivation",
        english: "Motivation", word: "motivation", partOfSpeech: "noun",
        breakdown: "moh-tuh-VAY-shun", chinese: "动力", pinyin: "dòng lì",
        emoji: "🔥", imageKeyword: "motivation energy",
        definitionEn: "The reason or enthusiasm for doing something.",
        definitionZh: "做某事的理由或热情。",
        detailsEn: "Common: lack motivation, boost motivation, intrinsic motivation.",
        detailsZh: "常见：lack motivation、boost motivation、intrinsic motivation。",
        exampleEn: "I need more motivation.",
        exampleZh: "我需要更多动力。",
        examples: [
          { en: "Her motivation is inspiring.", zh: "她的动力很激励人。" },
          { en: "What is your motivation?", zh: "你的动力是什么？" }
        ],
        collocations: ["lack motivation", "boost motivation", "intrinsic motivation", "motivation for"],
        synonyms: ["drive", "enthusiasm", "inspiration"], antonyms: ["apathy"],
        commonMistakes: [{ mistake: "'Motivate' as a noun", correction: "'Motivation' is the noun; 'motivate' is the verb." }],
        pronunciationTips: "Stress the fourth syllable: moh-tuh-VAY-shun.",
        memoryTrick: "Motive + action. Motive behind the action."
      },
      {
        id: "pg-7", topic: "Growth", level: "A2", category: "Progress",
        english: "Progress", word: "progress", partOfSpeech: "noun / verb",
        breakdown: "PROG-ress", chinese: "进步", pinyin: "jìn bù",
        emoji: "📈", imageKeyword: "progress chart",
        definitionEn: "Forward or onward movement toward a goal.",
        definitionZh: "朝向目标的前进或发展。",
        detailsEn: "Common: make progress, track progress, slow progress.",
        detailsZh: "常见：make progress、track progress、slow progress。",
        exampleEn: "You are making progress.",
        exampleZh: "你在进步。",
        examples: [
          { en: "The project shows progress.", zh: "项目显示进展。" },
          { en: "We need to assess progress.", zh: "我们需要评估进展。" }
        ],
        collocations: ["make progress", "track progress", "slow progress", "progress toward"],
        synonyms: ["advancement", "improvement"], antonyms: ["stagnation", "regression"],
        commonMistakes: [{ mistake: "'Progress' as 'process'", correction: "'Progress' = movement forward; 'process' = series of steps." }],
        pronunciationTips: "Stress the first syllable: PROG-ress.",
        memoryTrick: "Pro = forward, gress = step. Step forward."
      },
      {
        id: "pg-8", topic: "Growth", level: "A2", category: "Habits",
        english: "Discipline", word: "discipline", partOfSpeech: "noun / verb",
        breakdown: "DIS-uh-plin", chinese: "纪律；自律", pinyin: "jí lǜ; zì lǜ",
        emoji: "🧠", imageKeyword: "self discipline",
        definitionEn: "The practice of training yourself to follow rules.",
        definitionZh: "训练自己遵守规则的做法。",
        detailsEn: "Common: self-discipline, mental discipline, strict discipline.",
        detailsZh: "常见：self-discipline、mental discipline、strict discipline。",
        exampleEn: "Discipline leads to success.",
        exampleZh: "自律带来成功。",
        examples: [
          { en: "She has great discipline.", zh: "她很自律。" },
          { en: "You need discipline to study.", zh: "学习需要自律。" }
        ],
        collocations: ["self-discipline", "mental discipline", "strict discipline", "discipline and focus"],
        synonyms: ["self-control", "order"], antonyms: ["chaos"],
        commonMistakes: [{ mistake: "Using 'discipline' only as punishment", correction: "It also means self-control and training." }],
        pronunciationTips: "Three syllables: DIS-uh-plin. Stress the first.",
        memoryTrick: "Dis (away) + ci (say) + pline (line). Keep away from chaos = discipline."
      }
    ]
  },
  {
    id: "culture-travel",
    title: "Culture & Travel Deep Dive",
    emoji: "🌍",
    description: "Customs, traditions, sightseeing, and travel experiences.",
    color: "from-teal-400 to-cyan-400",
    words: [
      {
        id: "ct-1", topic: "Culture", level: "B1", category: "Customs",
        english: "Tradition", word: "tradition", partOfSpeech: "noun",
        breakdown: "truh-DISH-un", chinese: "传统", pinyin: "chuán tǒng",
        emoji: "🏮", imageKeyword: "cultural tradition",
        definitionEn: "A custom or belief passed down through generations.",
        definitionZh: "代代相传的习俗或信仰。",
        detailsEn: "Common: family tradition, cultural tradition, break tradition.",
        detailsZh: "常见搭配：family tradition、cultural tradition、break tradition。",
        exampleEn: "It is a family tradition.",
        exampleZh: "这是一个家庭传统。",
        examples: [
          { en: "The tradition continues.", zh: "传统继续着。" },
          { en: "She respects tradition.", zh: "她尊重传统。" }
        ],
        collocations: ["family tradition", "cultural tradition", "break tradition", "local tradition"],
        synonyms: ["custom", "practice"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'tradition' for trends", correction: "Tradition = 传统 (old); trend = 潮流 (new)." }],
        pronunciationTips: "Three syllables: truh-DISH-un. Stress the second.",
        memoryTrick: "Tra + dition. Tra (transfer) + dition (give) = pass down."
      },
      {
        id: "ct-2", topic: "Travel", level: "A2", category: "Sightseeing",
        english: "Sightseeing", word: "sightseeing", partOfSpeech: "noun",
        breakdown: "SITE-see-ing", chinese: "观光", pinyin: "guān guāng",
        emoji: "📸", imageKeyword: "sightseeing tour",
        definitionEn: "Visiting interesting places as a tourist.",
        definitionZh: "作为游客参观有趣的地方。",
        detailsEn: "Common: go sightseeing, sightseeing tour, sightseeing bus.",
        detailsZh: "常见搭配：go sightseeing、sightseeing tour、sightseeing bus。",
        exampleEn: "We went sightseeing in Paris.",
        exampleZh: "我们在巴黎观光了。",
        examples: [
          { en: "Sightseeing is fun.", zh: "观光很有趣。" },
          { en: "Book a sightseeing tour.", zh: "预订观光旅游。" }
        ],
        collocations: ["go sightseeing", "sightseeing tour", "sightseeing bus", "sightseeing spot"],
        synonyms: ["tourism", " touring"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'sight' only for vision", correction: "Sight = 视觉 (seeing); sightseeing = 观光 (tourism)." }],
        pronunciationTips: "Three syllables: SITE-see-ing. Stress the first.",
        memoryTrick: "Sight + seeing. Seeing sights = sightseeing."
      },
      {
        id: "ct-3", topic: "Culture", level: "A1", category: "Customs",
        english: "Custom", word: "custom", partOfSpeech: "noun",
        breakdown: "KUS-tum", chinese: "习俗", pinyin: "xí sú",
        emoji: "🎎", imageKeyword: "cultural custom",
        definitionEn: "A traditional way of doing things.",
        definitionZh: "做某事的传统方式。",
        detailsEn: "Common: local custom, follow custom, traditional custom.",
        detailsZh: "常见搭配：local custom、follow custom、traditional custom。",
        exampleEn: "It is a local custom.",
        exampleZh: "这是一个当地习俗。",
        examples: [
          { en: "Customs vary by country.", zh: "习俗因国家而异。" },
          { en: "Follow the local custom.", zh: "遵循当地习俗。" }
        ],
        collocations: ["local custom", "follow custom", "traditional custom", "customary practice"],
        synonyms: ["tradition", "habit"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'costume' for custom", correction: "Custom = 习俗; costume = 服装." }],
        pronunciationTips: "Two syllables: KUS-tum. Stress the first.",
        memoryTrick: "Custom = 习俗. Cus (customers) + tom (people) = people's habit."
      },
      {
        id: "ct-4", topic: "Travel", level: "B1", category: "Planning",
        english: "Itinerary", word: "itinerary", partOfSpeech: "noun",
        breakdown: "eye-tin-er-air-ee", chinese: "行程", pinyin: "xíng chéng",
        emoji: "🗺️", imageKeyword: "travel itinerary",
        definitionEn: "A plan of where to go and when.",
        definitionZh: "去哪里和什么时候的计划。",
        detailsEn: "Common: travel itinerary, day itinerary, change itinerary.",
        detailsZh: "常见搭配：travel itinerary、day itinerary、change itinerary。",
        exampleEn: "The itinerary is full.",
        exampleZh: "行程很满。",
        examples: [
          { en: "Check the itinerary.", zh: "查看行程。" },
          { en: "She changed the itinerary.", zh: "她更改了行程。" }
        ],
        collocations: ["travel itinerary", "day itinerary", "change itinerary", "detailed itinerary"],
        synonyms: ["plan", "schedule", "route"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'schedule' always", correction: "Itinerary = 行程 (travel); schedule = 时间表 (general)." }],
        pronunciationTips: "Five syllables: eye-tin-er-air-ee. Stress the fourth.",
         memoryTrick: "I + tiner + ary. I (我) + tiner (旅行) + ary (形容词). My travel plan."
      },
      {
        id: "ct-5", topic: "Culture", level: "A2", category: "Travel",
        english: "Culture", word: "culture", partOfSpeech: "noun",
        breakdown: "KUL-cher", chinese: "文化", pinyin: "wén huà",
        emoji: "🏛️", imageKeyword: "cultural symbol",
        definitionEn: "The customs, arts, and achievements of a group.",
        definitionZh: "一个群体的习俗、艺术和成就。",
        detailsEn: "Common: local culture, cultural difference, culture shock.",
        detailsZh: "常见：local culture、cultural difference、culture shock。",
        exampleEn: "I love learning about culture.",
        exampleZh: "我喜欢了解文化。",
        examples: [
          { en: "The culture is fascinating.", zh: "文化很迷人。" },
          { en: "She studies ancient culture.", zh: "她研究古代文化。" }
        ],
        collocations: ["local culture", "cultural difference", "culture shock", "culture shock"],
        synonyms: ["civilization", "society"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'culture' for nationality only", correction: "Culture includes arts, customs, and achievements." }],
        pronunciationTips: "Two syllables: KUL-cher. Stress the first.",
        memoryTrick: "Cult + ure. Cultivate (培养) + ure (名词后缀) = nurtured way of life."
      },
      {
        id: "ct-6", topic: "Travel", level: "A2", category: "Planning",
        english: "Guidebook", word: "guidebook", partOfSpeech: "noun",
        breakdown: "GIDE-book", chinese: "旅游指南", pinyin: "lǚ yóu zhǐ nán",
        emoji: "📒", imageKeyword: "travel guidebook",
        definitionEn: "A book with information about a place.",
        definitionZh: "提供某地信息的书。",
        detailsEn: "Common: travel guidebook, city guidebook, online guidebook.",
        detailsZh: "常见：travel guidebook、city guidebook、online guidebook。",
        exampleEn: "I bought a guidebook for Tokyo.",
        exampleZh: "我买了东京的旅游指南。",
        examples: [
          { en: "The guidebook recommended a hotel.", zh: "指南推荐了一家酒店。" },
          { en: "Read the guidebook before traveling.", zh: "旅行前阅读指南。" }
        ],
        collocations: ["travel guidebook", "city guidebook", "online guidebook", "guidebook recommendation"],
        synonyms: ["handbook", "manual"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'guide' for the book", correction: "'Guide' is the person; 'guidebook' is the book." }],
        pronunciationTips: "Two syllables: GIDE-book. Stress the first.",
        memoryTrick: "Guide + book. A book that guides you."
      },
      {
        id: "ct-7", topic: "Travel", level: "A2", category: "Sightseeing",
        english: "Landmark", word: "landmark", partOfSpeech: "noun",
        breakdown: "LAND-mark", chinese: "地标", pinyin: "dì biāo",
        emoji: "🗼", imageKeyword: "famous landmark",
        definitionEn: "A famous place or object that people recognize.",
        definitionZh: "人们认识的名胜或物体。",
        detailsEn: "Common: famous landmark, historical landmark, visit a landmark.",
        detailsZh: "常见：famous landmark、historical landmark、visit a landmark。",
        exampleEn: "The tower is a famous landmark.",
        exampleZh: "这座塔是著名地标。",
        examples: [
          { en: "We visited the landmark.", zh: "我们参观了地标。" },
          { en: "It is a historical landmark.", zh: "这是历史地标。" }
        ],
        collocations: ["famous landmark", "historical landmark", "visit landmark", "landmark building"],
        synonyms: ["monument", "attraction"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'marker' for landmarks", correction: "Landmark = 地标 (famous); marker = 标记 (small sign)." }],
        pronunciationTips: "Two syllables: LAND-mark. Stress the first.",
        memoryTrick: "Land + mark. A mark on the land that everyone knows."
      },
      {
        id: "ct-8", topic: "Travel", level: "A2", category: "Planning",
        english: "Passport", word: "passport", partOfSpeech: "noun",
        breakdown: "PASS-port", chinese: "护照", pinyin: "hù zhào",
        emoji: "🛂", imageKeyword: "passport travel",
        definitionEn: "An official document for international travel.",
        definitionZh: "国际旅行的官方证件。",
        detailsEn: "Required at borders. Check expiration dates.",
        detailsZh: "在边境需要。检查有效期。",
        exampleEn: "Don't forget your passport.",
        exampleZh: "别忘了带护照。",
        examples: [
          { en: "My passport expires next year.", zh: "我的护照明年过期。" },
          { en: "Passport control is crowded.", zh: "护照检查很拥挤。" }
        ],
        collocations: ["valid passport", "renew passport", "passport control", "passport photo"],
        synonyms: ["travel document", "visa"], antonyms: [],
        commonMistakes: [{ mistake: "Calling it 护照本 constantly", correction: "Just say passport." }],
        pronunciationTips: "Two syllables: PASS-port. Stress the first.",
        memoryTrick: "Pass + port. Pass through ports with this document."
      }
    ]
  },
  {
     id: "digital-life",
     title: "Digital Life & Internet",
     emoji: "🌐",
     description: "Internet, social media, apps, and online activities.",
     color: "from-blue-400 to-indigo-400",
     words: [
       {
         id: "dl-digital-1", topic: "Digital", level: "A1", category: "Internet",
        english: "Internet", word: "internet", partOfSpeech: "noun",
        breakdown: "IN-ter-net", chinese: "互联网", pinyin: "hù lián wǎng",
        emoji: "🌐", imageKeyword: "internet network",
        definitionEn: "The global system of connected computers.",
        definitionZh: "全球计算机连接系统。",
        detailsEn: "Common: on the internet, use the internet, internet connection.",
        detailsZh: "常见搭配：on the internet、use the internet、internet connection。",
        exampleEn: "I found it on the internet.",
        exampleZh: "我在网上找到了它。",
        examples: [
          { en: "The internet is slow.", zh: "网速很慢。" },
          { en: "Use the internet carefully.", zh: "小心使用互联网。" }
        ],
        collocations: ["on the internet", "use the internet", "internet connection", "internet safety"],
        synonyms: ["web", "net"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'internet' with capital always", correction: "Internet = 互联网 (modern usage, lowercase)." }],
        pronunciationTips: "Three syllables: IN-ter-net. Stress the first.",
        memoryTrick: "Inter (between) + net (网). Network between computers."
      },
         {
           id: "dl-digital-2", topic: "Digital", level: "A2", category: "Social",
        english: "Post", word: "post", partOfSpeech: "verb / noun",
        breakdown: "pohst", chinese: "发布；帖子", pinyin: "fā bù; tiě zǐ",
        emoji: "📱", imageKeyword: "social media post",
        definitionEn: "To publish something online; also the published item.",
        definitionZh: "在网上发布某物；也指发布的内容。",
        detailsEn: "Common: post a photo, social media post, blog post.",
        detailsZh: "常见搭配：post a photo、social media post、blog post。",
        exampleEn: "She posted a photo.",
        exampleZh: "她发布了一张照片。",
        examples: [
          { en: "I post on Instagram daily.", zh: "我每天在Instagram上发帖。" },
          { en: "The post went viral.", zh: "帖子爆红了。" }
        ],
        collocations: ["post a photo", "social media post", "blog post", "post comment"],
        synonyms: ["publish", "share"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'post' for mail only", correction: "Post = 发布 (online); mail = 邮寄 (physical)." }],
        pronunciationTips: "One syllable: pohst. Like 'post' mail with 'o'.",
        memoryTrick: "Post = 发布. Post (邮件) online = post."
      },
         {
           id: "dl-digital-3", topic: "Digital", level: "A2", category: "Apps",
        english: "App", word: "app", partOfSpeech: "noun",
        breakdown: "ap", chinese: "应用程序", pinyin: "yìng yòng chéng xù",
        emoji: "📲", imageKeyword: "mobile app",
        definitionEn: "A software program for a phone or computer.",
        definitionZh: "用于手机或计算机的软件程序。",
        detailsEn: "Common: download an app, app store, mobile app.",
        detailsZh: "常见搭配：download an app、app store、mobile app。",
        exampleEn: "This app is useful.",
        exampleZh: "这个应用很有用。",
        examples: [
          { en: "Download the app now.", zh: "现在下载应用。" },
          { en: "The app is free.", zh: "应用是免费的。" }
        ],
        collocations: ["download an app", "app store", "mobile app", "app developer"],
        synonyms: ["application", "software"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'app' for websites", correction: "App = 应用 (software); website = 网站 (browser)." }],
        pronunciationTips: "One syllable: ap. Short 'a'.",
        memoryTrick: "App = 应用. Application shortened to app."
      },
         {
           id: "dl-digital-4", topic: "Digital", level: "B1", category: "Communication",
        english: "Notification", word: "notification", partOfSpeech: "noun",
        breakdown: "noh-tif-i-KAY-shun", chinese: "通知", pinyin: "tōng zhī",
        emoji: "🔔", imageKeyword: "phone notification",
        definitionEn: "An alert or message from an app or website.",
        definitionZh: "来自应用或网站的提醒或消息。",
        detailsEn: "Common: push notification, notification center, turn off notifications.",
        detailsZh: "常见搭配：push notification、notification center、turn off notifications。",
        exampleEn: "I got a notification.",
        exampleZh: "我收到了一条通知。",
        examples: [
          { en: "Turn off notifications.", zh: "关闭通知。" },
          { en: "The notification said 'hello'.", zh: "通知说'你好'。" }
        ],
        collocations: ["push notification", "notification center", "turn off notifications", "receive notification"],
        synonyms: ["alert", "message"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'message' for all alerts", correction: "Notification = 通知 (alert); message = 消息 (content)." }],
        pronunciationTips: "Five syllables: noh-tif-i-KAY-shun. Stress the fourth.",
         memoryTrick: "Notif (通知) + ication (名词后缀). Notification = 通知."
      },
      {
        id: "dl-digital-5", topic: "Digital", level: "A2", category: "Internet",
        english: "Website", word: "website", partOfSpeech: "noun",
        breakdown: "WEBS-ite", chinese: "网站", pinyin: "wǎng zhàn",
        emoji: "🌍", imageKeyword: "website browser",
        definitionEn: "A set of pages on the internet.",
        definitionZh: "互联网上的一组页面。",
        detailsEn: "Common: visit a website, website design, website builder.",
        detailsZh: "常见：visit a website、website design、website builder。",
        exampleEn: "The website is down.",
        exampleZh: "网站打不开了。",
        examples: [
          { en: "Visit our website for more.", zh: "访问我们的网站了解更多。" },
          { en: "The website loads slowly.", zh: "网站加载很慢。" }
        ],
        collocations: ["visit website", "website design", "website builder", "official website"],
        synonyms: ["site", "portal"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'webpage' for the whole site", correction: "Website = 网站 (collection); webpage = 网页 (single page)." }],
        pronunciationTips: "Two syllables: WEBS-ite. Stress the first.",
        memoryTrick: "Web + site. A site on the web."
      },
      {
        id: "dl-digital-6", topic: "Digital", level: "B1", category: "Communication",
        english: "Social media", word: "social media", partOfSpeech: "noun",
        breakdown: "SOH-shul MEE-dee-uh", chinese: "社交媒体", pinyin: "shè jiāo méi tǐ",
        emoji: "📱", imageKeyword: "social media apps",
        definitionEn: "Websites and apps for social networking.",
        definitionZh: "用于社交网络的网站和应用。",
        detailsEn: "Common: on social media, social media account, social media post.",
        detailsZh: "常见：on social media、social media account、social media post。",
        exampleEn: "She is famous on social media.",
        exampleZh: "她在社交媒体上很火。",
        examples: [
          { en: "Social media connects people.", zh: "社交媒体连接人们。" },
          { en: "Check your social media.", zh: "查看你的社交媒体。" }
        ],
        collocations: ["on social media", "social media account", "social media post", "social media marketing"],
        synonyms: ["networking sites", "online platforms"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'social network' for all platforms", correction: "Social media = 社交媒体 (content sharing)." }],
        pronunciationTips: "Stress the first words: SOH-shul MEE-dee-uh.",
        memoryTrick: "Social + media. Media for social interaction."
      },
      {
        id: "dl-digital-7", topic: "Digital", level: "A2", category: "Apps",
        english: "Download", word: "download", partOfSpeech: "verb / noun",
        breakdown: "DOWN-lohd", chinese: "下载", pinyin: "xià zài",
        emoji: "⬇️", imageKeyword: "download file",
        definitionEn: "To copy data from the internet to a device.",
        definitionZh: "将数据从互联网复制到设备。",
        detailsEn: "Common: download app, download file, download speed.",
        detailsZh: "常见：download app、download file、download speed。",
        exampleEn: "Download the file now.",
        exampleZh: "现在下载文件。",
        examples: [
          { en: "I downloaded the app.", zh: "我下载了应用。" },
          { en: "The download failed.", zh: "下载失败了。" }
        ],
        collocations: ["download app", "download file", "download speed", "download data"],
        synonyms: ["save", "transfer"], antonyms: ["upload"],
        commonMistakes: [{ mistake: "'Downloade' spelling", correction: "Download, not downloade." }],
        pronunciationTips: "Stress the second syllable: DOWN-lohd.",
        memoryTrick: "Down + load. Bring data down from the cloud."
      },
      {
        id: "dl-digital-8", topic: "Digital", level: "B1", category: "Online",
        english: "Streaming", word: "streaming", partOfSpeech: "noun / verb",
        breakdown: "STREE-ming", chinese: "流媒体", pinyin: "liú méi tǐ",
        emoji: "📺", imageKeyword: "streaming video",
        definitionEn: "Watching or listening to content online.",
        definitionZh: "在线观看或收听内容。",
        detailsEn: "Common: video streaming, streaming service, live streaming.",
        detailsZh: "常见：video streaming、streaming service、live streaming。",
        exampleEn: "I enjoy streaming movies.",
        exampleZh: "我喜欢在线看电影。",
        examples: [
          { en: "Streaming is very popular.", zh: "流媒体很流行。" },
          { en: "He started streaming games.", zh: "他开始直播游戏。" }
        ],
        collocations: ["video streaming", "streaming service", "live streaming", "streaming platform"],
        synonyms: ["broadcasting", "online viewing"], antonyms: ["downloading"],
        commonMistakes: [{ mistake: "Using 'streaming' for downloading", correction: "Streaming = 流媒体 (online); download = 下载 (offline)." }],
        pronunciationTips: "Stress the first syllable: STREE-ming.",
        memoryTrick: "Stream + ing. Continuous flow like a stream."
      }
    ]
  },
  {
    id: "animals-nature",
    title: "Animals & Nature",
    emoji: "🐾",
    description: "Animals, plants, seasons, and the natural world.",
    color: "from-green-400 to-emerald-400",
    words: [
      {
        id: "an-1", topic: "Animals", level: "A1", category: "Pets",
        english: "Dog", word: "dog", partOfSpeech: "noun",
        breakdown: "dawg", chinese: "狗", pinyin: "gǒu",
        emoji: "🐶", imageKeyword: "cute dog",
        definitionEn: "A common pet animal.",
        definitionZh: "常见的宠物动物。",
        detailsEn: "Common: pet dog, dog walk, dog food.",
        detailsZh: "常见搭配：pet dog、dog walk、dog food。",
        exampleEn: "I have a dog.",
        exampleZh: "我有一只狗。",
        examples: [
          { en: "The dog is friendly.", zh: "狗很友好。" },
          { en: "She walks her dog daily.", zh: "她每天遛狗。" }
        ],
        collocations: ["pet dog", "dog walk", "dog food", "dog owner"],
        synonyms: ["canine", "puppy"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'dog' for all canines", correction: "Dog = 狗; wolf = 狼." }],
        pronunciationTips: "One syllable: dawg.",
        memoryTrick: "Dog = 狗. D + og (欧歌) = dog barks."
      },
      {
        id: "an-2", topic: "Animals", level: "A1", category: "Pets",
        english: "Cat", word: "cat", partOfSpeech: "noun",
        breakdown: "kat", chinese: "猫", pinyin: "māo",
        emoji: "🐱", imageKeyword: "cute cat",
        definitionEn: "A small pet animal.",
        definitionZh: "小宠物动物。",
        detailsEn: "Common: pet cat, cat food, cat nap.",
        detailsZh: "常见搭配：pet cat、cat food、cat nap。",
        exampleEn: "The cat is sleeping.",
        exampleZh: "猫在睡觉。",
        examples: [
          { en: "Cats like milk.", zh: "猫喜欢牛奶。" },
          { en: "She adopted a cat.", zh: "她领养了一只猫。" }
        ],
        collocations: ["pet cat", "cat food", "cat nap", "cat owner"],
        synonyms: ["feline", "kitten"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'cat' for all felines", correction: "Cat = 猫; tiger = 老虎." }],
        pronunciationTips: "One syllable: kat.",
        memoryTrick: "Cat = 猫. C + at (在) = cat is at home."
      },
      {
        id: "an-3", topic: "Animals", level: "A2", category: "Wild",
        english: "Elephant", word: "elephant", partOfSpeech: "noun",
        breakdown: "EL-uh-fant", chinese: "大象", pinyin: "dà xiàng",
        emoji: "🐘", imageKeyword: "elephant animal",
        definitionEn: "A very large animal with a trunk.",
        definitionZh: "有长鼻的非常大的动物。",
        detailsEn: "Common: African elephant, elephant herd, elephant trunk.",
        detailsZh: "常见搭配：African elephant、elephant herd、elephant trunk。",
        exampleEn: "The elephant is huge.",
        exampleZh: "大象很大。",
        examples: [
          { en: "Elephants have long trunks.", zh: "大象有长鼻子。" },
          { en: "We saw an elephant at the zoo.", zh: "我们在动物园看到了大象。" }
        ],
        collocations: ["African elephant", "elephant herd", "elephant trunk", "elephant sanctuary"],
        synonyms: ["mammal"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'elephant' for 'trunk' only", correction: "Elephant = 大象 (animal); trunk = 象鼻." }],
        pronunciationTips: "Three syllables: EL-uh-fant. Stress the first.",
        memoryTrick: "Ele + phant. Ele (large) + phant (phant = fan) = big fan animal = elephant."
      },
      {
        id: "an-4", topic: "Nature", level: "A1", category: "Plants",
        english: "Flower", word: "flower", partOfSpeech: "noun",
        breakdown: "FLOW-er", chinese: "花", pinyin: "huā",
        emoji: "🌸", imageKeyword: "colorful flower",
        definitionEn: "The colorful part of a plant.",
        definitionZh: "植物上色彩鲜艳的部分。",
        detailsEn: "Common: beautiful flower, flower shop, flower garden.",
        detailsZh: "常见搭配：beautiful flower、flower shop、flower garden。",
        exampleEn: "She picked a flower.",
        exampleZh: "她摘了一朵花。",
        examples: [
          { en: "The flower smells good.", zh: "花闻起来很香。" },
          { en: "Flowers bloom in spring.", zh: "花在春天盛开。" }
        ],
        collocations: ["beautiful flower", "flower shop", "flower garden", "flower bouquet"],
        synonyms: ["blossom", "bloom"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'flour' (面粉) for 'flower' (花)", correction: "Flower = 花 (plant); flour = 面粉 (baking)." }],
        pronunciationTips: "Two syllables: FLOW-er. Stress the first.",
        memoryTrick: "Flower = 花. Flow + er. Flowers flow with color."
      },
      {
        id: "an-5", topic: "Nature", level: "A2", category: "Landscape",
        english: "River", word: "river", partOfSpeech: "noun",
        breakdown: "RIV-er", chinese: "河流", pinyin: "hé liú",
        emoji: "🏞️", imageKeyword: "flowing river",
        definitionEn: "A large natural flow of water.",
        definitionZh: "大的天然水流。",
        detailsEn: "Common: cross the river, river bank, river water.",
        detailsZh: "常见搭配：cross the river、river bank、river water。",
        exampleEn: "The river is long.",
        exampleZh: "河流很长。",
        examples: [
          { en: "We swam in the river.", zh: "我们在河里游泳了。" },
          { en: "The river flows to the sea.", zh: "河流流向大海。" }
        ],
        collocations: ["cross the river", "river bank", "river water", "river cruise"],
        synonyms: ["stream", "creek"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'river' for lakes", correction: "River = 河流 (flowing); lake = 湖 (still)." }],
        pronunciationTips: "Two syllables: RIV-er. Stress the first.",
        memoryTrick: "River = 河流. Riv (rive) + er. Water  riv er = river."
      },
      {
        id: "an-6", topic: "Nature", level: "A1", category: "Weather",
        english: "Cloud", word: "cloud", partOfSpeech: "noun",
        breakdown: "klowd", chinese: "云", pinyin: "yún",
        emoji: "☁️", imageKeyword: "fluffy cloud",
        definitionEn: "A visible mass of water in the sky.",
        definitionZh: "天空中可见的水的聚集。",
        detailsEn: "Common: white cloud, cloud cover, under a cloud.",
        detailsZh: "常见搭配：white cloud、cloud cover、under a cloud。",
        exampleEn: "The cloud is white.",
        exampleZh: "云是白色的。",
        examples: [
          { en: "Clouds bring rain.", zh: "云带来雨。" },
          { en: "Look at that cloud!", zh: "看那片云！" }
        ],
        collocations: ["white cloud", "cloud cover", "under a cloud", "cloudy sky"],
        synonyms: ["vapor", "fog"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'cloud' for 'clown'", correction: "Cloud = 云; clown = 小丑." }],
        pronunciationTips: "One syllable: klowd. Like 'loud' with 'c'.",
        memoryTrick: "Cloud = 云. Cl (cloud) + oud (large) = large white cloud."
      },
      {
        id: "an-7", topic: "Nature", level: "A1", category: "Animals",
        english: "Bird", word: "bird", partOfSpeech: "noun",
        breakdown: "burd", chinese: "鸟", pinyin: "niǎo",
        emoji: "🐦", imageKeyword: "small bird",
        definitionEn: "A small animal with wings that can fly.",
        definitionZh: "有翅膀会飞的小动物。",
        detailsEn: "Common: pet bird, bird nest, bird watching.",
        detailsZh: "常见：pet bird、bird nest、bird watching。",
        exampleEn: "I heard a bird singing.",
        exampleZh: "我听到一只鸟在唱歌。",
        examples: [
          { en: "The bird flew away.", zh: "鸟飞走了。" },
          { en: "Birds build nests in spring.", zh: "鸟儿春天筑巢。" }
        ],
        collocations: ["pet bird", "bird nest", "bird watching", "bird species"],
        synonyms: ["fowl", "avian"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'bird' for all flying animals", correction: "Bird = 鸟; bat = 蝙蝠." }],
        pronunciationTips: "One syllable: burd. Like 'word' with 'b'.",
        memoryTrick: "Bird = 鸟. B + ird (ird) = bird flies."
      },
      {
        id: "an-8", topic: "Nature", level: "A2", category: "Plants",
        english: "Tree", word: "tree", partOfSpeech: "noun",
        breakdown: "tree", chinese: "树", pinyin: "shù",
        emoji: "🌳", imageKeyword: "big tree",
        definitionEn: "A tall plant with a trunk and branches.",
        definitionZh: "有树干和树枝的高大植物。",
        detailsEn: "Common: fruit tree, climb a tree, tree house.",
        detailsZh: "常见：fruit tree、climb a tree、tree house。",
        exampleEn: "The tree is very tall.",
        exampleZh: "树很高。",
        examples: [
          { en: "Birds live in the tree.", zh: "鸟住在树上。" },
          { en: "We planted a tree.", zh: "我们种了一棵树。" }
        ],
        collocations: ["fruit tree", "climb a tree", "tree house", "family tree"],
        synonyms: ["plant", "shrub"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'tree' for bushes", correction: "Tree = 树 (tall); bush = 灌木 (short)." }],
        pronunciationTips: "One syllable: tree. Long 'ee'.",
        memoryTrick: "Tree = 树. Green and tall."
      }
    ]
  },
  {
    id: "food-drink",
    title: "Food & Drink",
    emoji: "🍕",
    description: "Meals, snacks, drinks, cooking, and dining out.",
    color: "from-orange-400 to-red-400",
    words: [
      {
        id: "fd-1", topic: "Food", level: "A1", category: "Meals",
        english: "Breakfast", word: "breakfast", partOfSpeech: "noun",
        breakdown: "BREK-fast", chinese: "早餐", pinyin: "zǎo cān",
        emoji: "🥞", imageKeyword: "breakfast food",
        definitionEn: "The first meal of the day.",
        definitionZh: "一天中的第一餐。",
        detailsEn: "Common: eat breakfast, have breakfast, breakfast menu.",
        detailsZh: "常见搭配：eat breakfast、have breakfast、breakfast menu。",
        exampleEn: "I eat breakfast at 7.",
        exampleZh: "我7点吃早餐。",
        examples: [
          { en: "Breakfast is important.", zh: "早餐很重要。" },
          { en: "We had breakfast together.", zh: "我们一起吃了早餐。" }
        ],
        collocations: ["eat breakfast", "have breakfast", "breakfast menu", "breakfast time"],
        synonyms: ["morning meal"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'breakfast' as verb", correction: "Breakfast as verb is rare: 'We breakfasted early'." }],
        pronunciationTips: "Two syllables: BREK-fast. Stress the first.",
        memoryTrick: "Break + fast. Break the fast (night) = morning meal."
      },
      {
        id: "fd-2", topic: "Food", level: "A2", category: "Taste",
        english: "Delicious", word: "delicious", partOfSpeech: "adjective",
        breakdown: "dih-LISH-us", chinese: "美味的", pinyin: "měi wèi de",
        emoji: "😋", imageKeyword: "delicious food",
        definitionEn: "Tasting very good.",
        definitionZh: "味道非常好。",
        detailsEn: "Common: delicious food, absolutely delicious, delicious meal.",
        detailsZh: "常见搭配：delicious food、absolutely delicious、delicious meal。",
        exampleEn: "The food is delicious.",
        exampleZh: "食物很美味。",
        examples: [
          { en: "This is a delicious cake.", zh: "这是美味的蛋糕。" },
          { en: "She cooked a delicious dinner.", zh: "她做了美味的晚餐。" }
        ],
        collocations: ["delicious food", "absolutely delicious", "delicious meal", "delicious taste"],
        synonyms: ["tasty", "yummy", "flavorful"], antonyms: ["disgusting", "terrible"],
        commonMistakes: [{ mistake: "Using 'delicious' for non-food things often", correction: "Primarily for food; for experiences use 'wonderful'." }],
        pronunciationTips: "Stress the second syllable: dih-LISH-us.",
        memoryTrick: "De + lish + ious. De (very) + lish (立食) = very tasty."
      },
      {
        id: "fd-3", topic: "Food", level: "B1", category: "Ingredients",
        english: "Ingredient", word: "ingredient", partOfSpeech: "noun",
        breakdown: "in-GREE-dee-ent", chinese: "食材；成分", pinyin: "shí cái; chéng fèn",
        emoji: "🧄", imageKeyword: "food ingredients",
        definitionEn: "One of the substances used to make a dish.",
        definitionZh: "用来制作菜肴的物质之一。",
        detailsEn: "Common: fresh ingredients, main ingredient, secret ingredient.",
        detailsZh: "常见搭配：fresh ingredients、main ingredient、secret ingredient。",
        exampleEn: "Fresh ingredients make better food.",
        exampleZh: "新鲜食材做出更好的食物。",
        examples: [
          { en: "What are the ingredients?", zh: "食材是什么？" },
          { en: "She listed all ingredients.", zh: "她列出了所有食材。" }
        ],
        collocations: ["fresh ingredients", "main ingredient", "secret ingredient", "organic ingredients"],
        synonyms: ["component", "element"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'ingredient' for recipes only", correction: "Use for food, cosmetics, or mixtures." }],
        pronunciationTips: "Stress the second syllable: in-GREE-dee-ent.",
        memoryTrick: "In + gredient. In (enter) + gredient (gradual) = 食材 gradual进入 dish."
      },
      {
        id: "fd-4", topic: "Food", level: "A2", category: "Restaurant",
        english: "Menu", word: "menu", partOfSpeech: "noun",
        breakdown: "MEN-yoo", chinese: "菜单", pinyin: "cài dān",
        emoji: "📋", imageKeyword: "restaurant menu",
        definitionEn: "A list of dishes available at a restaurant.",
        definitionZh: "餐厅供应的菜肴清单。",
        detailsEn: "Common: read the menu, menu options, special menu.",
        detailsZh: "常见搭配：read the menu、menu options、special menu。",
        exampleEn: "Can I see the menu?",
        exampleZh: "能看一下菜单吗？",
        examples: [
          { en: "The menu has many options.", zh: "菜单有很多选择。" },
          { en: "She checked the menu.", zh: "她看了菜单。" }
        ],
        collocations: ["read the menu", "menu options", "special menu", "menu board"],
        synonyms: ["list", "card"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'menu' for food itself", correction: "Menu = 菜单; food = 食物." }],
        pronunciationTips: "Two syllables: MEN-yoo. Stress the first.",
        memoryTrick: "Menu = 菜单. Men (people) + u (you) = list for you."
      },
      {
        id: "fd-5", topic: "Food", level: "A1", category: "Meals",
        english: "Water", word: "water", partOfSpeech: "noun",
        breakdown: "WAW-ter", chinese: "水", pinyin: "shuǐ",
        emoji: "💧", imageKeyword: "glass of water",
        definitionEn: "A clear liquid we drink.",
        definitionZh: "我们喝的清澈液体。",
        detailsEn: "Common: drink water, bottle of water, warm water.",
        detailsZh: "常见搭配：drink water、bottle of water、warm water。",
        exampleEn: "I need some water.",
        exampleZh: "我需要一些水。",
        examples: [
          { en: "Water is essential for life.", zh: "水对生命至关重要。" },
          { en: "Can I have water?", zh: "能给我点水吗？" }
        ],
        collocations: ["drink water", "bottle of water", "warm water", "fresh water"],
        synonyms: ["H2O"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'water' as verb casually", correction: "'Water' as verb means to give water: 'water the plants'." }],
        pronunciationTips: "Two syllables: WAW-ter. Stress the first.",
        memoryTrick: "Water = 水. What you drink."
      },
      {
        id: "fd-6", topic: "Food", level: "A2", category: "Taste",
        english: "Spicy", word: "spicy", partOfSpeech: "adjective",
        breakdown: "SPY-see", chinese: "辣的", pinyin: "là de",
        emoji: "🌶️", imageKeyword: "spicy food",
        definitionEn: "Having a strong, hot taste.",
        definitionZh: "有强烈辣味的。",
        detailsEn: "Common: spicy food, very spicy, love spicy.",
        detailsZh: "常见搭配：spicy food、very spicy、love spicy。",
        exampleEn: "This curry is too spicy.",
        exampleZh: "这个咖喱太辣了。",
        examples: [
          { en: "I like spicy food.", zh: "我喜欢辣的食物。" },
          { en: "Is this dish spicy?", zh: "这道菜辣吗？" }
        ],
        collocations: ["spicy food", "very spicy", "spicy dish", "spicy soup"],
        synonyms: ["hot", "pungent"], antonyms: ["mild", "bland"],
        commonMistakes: [{ mistake: "Using 'hot' only for temperature", correction: "'Spicy' is for taste; 'hot' can mean temperature or spice." }],
        pronunciationTips: "Two syllables: SPY-see. Stress the first.",
        memoryTrick: "Spice + y. Full of spice."
      },
      {
        id: "fd-7", topic: "Food", level: "B1", category: "Meals",
        english: "Buffet", word: "buffet", partOfSpeech: "noun",
        breakdown: "boo-FAY", chinese: "自助餐", pinyin: "zì zhù cān",
        emoji: "🍱", imageKeyword: "buffet table",
        definitionEn: "A meal where you serve yourself.",
        definitionZh: "自己取餐的一餐。",
        detailsEn: "Common: all-you-can-eat buffet, breakfast buffet, buffet dinner.",
        detailsZh: "常见搭配：all-you-can-eat buffet、breakfast buffet、buffet dinner。",
        exampleEn: "We ate at a buffet.",
        exampleZh: "我们在自助餐厅吃了饭。",
        examples: [
          { en: "The buffet has many options.", zh: "自助餐有很多选择。" },
          { en: "Avoid overeating at buffets.", zh: "在自助餐避免暴饮暴食。" }
        ],
        collocations: ["all-you-can-eat buffet", "breakfast buffet", "buffet dinner", "buffet style"],
        synonyms: ["self-service meal"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'buffet' as verb for hitting", correction: "Buffet (verb) = 连续击打; buffet (noun) = 自助餐." }],
        pronunciationTips: "Two syllables: boo-FAY. Stress the second.",
        memoryTrick: "Buffet = 自助餐. Buff (many) + et (small) = many small dishes."
      },
      {
        id: "fd-8", topic: "Food", level: "A2", category: "Shopping",
        english: "Grocery", word: "grocery", partOfSpeech: "noun",
        breakdown: "GRO-suh-ree", chinese: "食品杂货", pinyin: "shí pǐn zá huò",
        emoji: "🛒", imageKeyword: "grocery shopping",
        definitionEn: "Food and household items bought at a store.",
        definitionZh: "在商店购买的食品和家居用品。",
        detailsEn: "Common: grocery store, do groceries, grocery list.",
        detailsZh: "常见搭配：grocery store、do groceries、grocery list。",
        exampleEn: "I need to buy groceries.",
        exampleZh: "我需要买食品杂货。",
        examples: [
          { en: "The grocery store is nearby.", zh: "食品杂货店在附近。" },
          { en: "Let's do the groceries online.", zh: "我们在线购买食品杂货吧。" }
        ],
        collocations: ["grocery store", "grocery list", "do groceries", "grocery shopping"],
        synonyms: ["food shop", "supermarket"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'grocery' to mean the store", correction: "Use 'grocery store' or 'groceries' for items." }],
        pronunciationTips: "Three syllables: GRO-suh-ree. Stress the first.",
        memoryTrick: "Grocery = grow + er + y. Food that grows comes from the grocery."
      }
    ]
  },
  {
    id: "travel-transport",
    title: "Travel & Transport",
    emoji: "✈️",
    description: "Airports, hotels, directions, tickets, and travel essentials.",
    color: "from-sky-400 to-blue-400",
    words: [
      {
        id: "tt-1", topic: "Travel", level: "A1", category: "Directions",
        english: "Map", word: "map", partOfSpeech: "noun",
        breakdown: "map", chinese: "地图", pinyin: "dì tú",
        emoji: "🗺️", imageKeyword: "world map",
        definitionEn: "A drawing showing places and directions.",
        definitionZh: "显示地点和方向的地图。",
        detailsEn: "Common: look at the map, map application, on the map.",
        detailsZh: "常见搭配：look at the map、map application、on the map。",
        exampleEn: "Look at the map, please.",
        exampleZh: "请看地图。",
        examples: [
          { en: "The map shows the airport.", zh: "地图上标有机场。" },
          { en: "I have a map on my phone.", zh: "我手机上有地图。" }
        ],
        collocations: ["look at the map", "map application", "on the map", "map of"],
        synonyms: ["chart", "plan"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'map' for GPS only", correction: "Use 'map' for both paper and digital versions." }],
        pronunciationTips: "One syllable: map.",
        memoryTrick: "Map = 地图. M + ap. Maps have apps."
      },
      {
        id: "tt-2", topic: "Travel", level: "A2", category: "Transport",
        english: "Train", word: "train", partOfSpeech: "noun / verb",
        breakdown: "trayn", chinese: "火车；训练", pinyin: "huǒ chē; xùn liàn",
        emoji: "🚆", imageKeyword: "train station",
        definitionEn: "A large vehicle on rails; also to teach skills.",
        definitionZh: "在轨道上的大型交通工具；也指培训技能。",
        detailsEn: "Common: take a train, train station, train ticket.",
        detailsZh: "常见搭配：take a train、train station、train ticket。",
        exampleEn: "I take the train to work.",
        exampleZh: "我坐火车上班。",
        examples: [
          { en: "The train is punctual.", zh: "火车很准时。" },
          { en: "She trains new staff.", zh: "她培训新员工。" }
        ],
        collocations: ["take the train", "train station", "train ticket", "high-speed train"],
        synonyms: ["rail", "locomotive"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'train' for subway only", correction: "Train = 火车; subway/metro = 地铁." }],
        pronunciationTips: "One syllable: trayn. Long 'a'.",
        memoryTrick: "Train = 火车. T + rain (rain). Trains run like the rain."
      },
      {
        id: "tt-3", topic: "Travel", level: "A2", category: "Lodging",
        english: "Hotel", word: "hotel", partOfSpeech: "noun",
        breakdown: "ho-TEL", chinese: "酒店", pinyin: "jiǔ diàn",
        emoji: "🏨", imageKeyword: "hotel building",
        definitionEn: "A place where you pay to stay.",
        definitionZh: "旅行时付费住宿的地方。",
        detailsEn: "Common: book a hotel, hotel room, luxury hotel.",
        detailsZh: "常见搭配：book a hotel、hotel room、luxury hotel。",
        exampleEn: "The hotel is clean.",
        exampleZh: "酒店很干净。",
        examples: [
          { en: "We stayed at a hotel.", zh: "我们住了一家酒店。" },
          { en: "The hotel offers breakfast.", zh: "酒店提供早餐。" }
        ],
        collocations: ["book a hotel", "hotel room", "luxury hotel", "hotel lobby"],
        synonyms: ["inn", "motel", "resort"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'hotel' for apartments", correction: "Hotel = 酒店 (short stay); apartment = 公寓 (long stay)." }],
        pronunciationTips: "Two syllables: ho-TEL. Stress the second.",
        memoryTrick: "Ho + tel. Ho (hello) + tel (telephone) = hotel (call to book)."
      },
      {
        id: "tt-4", topic: "Travel", level: "B1", category: "Tickets",
        english: "Reservation", word: "reservation", partOfSpeech: "noun",
        breakdown: "rez-er-VAY-shun", chinese: "预订", pinyin: "yù dìng",
        emoji: "🎫", imageKeyword: "hotel reservation",
        definitionEn: "An arrangement to have a seat, room, or ticket at a future time.",
        definitionZh: "提前安排座位、房间或票。",
        detailsEn: "Common: make a reservation, hotel reservation, flight reservation.",
        detailsZh: "常见搭配：make a reservation、hotel reservation、flight reservation。",
        exampleEn: "I made a dinner reservation.",
        exampleZh: "我预订了晚餐。",
        examples: [
          { en: "Do you have a reservation?", zh: "您有预订吗？" },
          { en: "The reservation is under my name.", zh: "预订在我的名下。" }
        ],
        collocations: ["make a reservation", "hotel reservation", "flight reservation", "confirm reservation"],
        synonyms: ["booking"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'reservation' for tickets without booking", correction: "Reservation = 预订 (seat/room); ticket = 票." }],
        pronunciationTips: "Stress the third syllable: rez-er-VAY-shun.",
        memoryTrick: "Re + serve + ation. Reserve a seat in advance."
      },
      {
        id: "tt-5", topic: "Travel", level: "A1", category: "Directions",
        english: "Airport", word: "airport", partOfSpeech: "noun",
        breakdown: "AIR-port", chinese: "机场", pinyin: "jī chǎng",
        emoji: "✈️", imageKeyword: "airport terminal",
        definitionEn: "A place where planes take off and land.",
        definitionZh: "飞机起降的地方。",
        detailsEn: "Common: at the airport, airport security, airport terminal.",
        detailsZh: "常见搭配：at the airport、airport security、airport terminal。",
        exampleEn: "We arrived at the airport early.",
        exampleZh: "我们很早就到了机场。",
        examples: [
          { en: "The airport is far away.", zh: "机场很远。" },
          { en: "She works at the airport.", zh: "她在机场工作。" }
        ],
        collocations: ["at the airport", "airport security", "airport terminal", "international airport"],
        synonyms: ["airfield", "aerodrome"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'airport' for heliports", correction: "Airport = 机场 for planes; heliport = 直升机停机坪." }],
        pronunciationTips: "Two syllables: AIR-port. Stress the first.",
        memoryTrick: "Air + port. A port (harbor) for airplanes (air)."
      },
      {
        id: "tt-6", topic: "Travel", level: "A2", category: "Transport",
        english: "Subway", word: "subway", partOfSpeech: "noun",
        breakdown: "SUB-way", chinese: "地铁", pinyin: "dì tiě",
        emoji: "🚇", imageKeyword: "subway train",
        definitionEn: "An underground train system.",
        definitionZh: "城市中的地下火车系统。",
        detailsEn: "Common: take the subway, subway station, subway map.",
        detailsZh: "常见搭配：take the subway、subway station、subway map。",
        exampleEn: "I take the subway to work.",
        exampleZh: "我坐地铁上班。",
        examples: [
          { en: "The subway is fast.", zh: "地铁很快。" },
          { en: "Which subway line goes downtown?", zh: "哪条地铁线去市中心？" }
        ],
        collocations: ["take the subway", "subway station", "subway map", "subway line"],
        synonyms: ["metro", "underground", "tube"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'subway' for all underground trains", correction: "American: subway; British: underground." }],
        pronunciationTips: "Two syllables: SUB-way. Stress the first.",
        memoryTrick: "Sub (under) + way (road). A road under the city."
      },
      {
        id: "tt-7", topic: "Travel", level: "A1", category: "Tickets",
        english: "Ticket", word: "ticket", partOfSpeech: "noun",
        breakdown: "TIK-it", chinese: "票", pinyin: "piào",
        emoji: "🎫", imageKeyword: "travel ticket",
        definitionEn: "A document allowing you to enter or travel.",
        definitionZh: "允许你进入或旅行的证件。",
        detailsEn: "Common: buy a ticket, train ticket, movie ticket.",
        detailsZh: "常见：buy a ticket、train ticket、movie ticket。",
        exampleEn: "I bought a ticket online.",
        exampleZh: "我在网上买了票。",
        examples: [
          { en: "The ticket is valid for one day.", zh: "票一天有效。" },
          { en: "Please show your ticket.", zh: "请出示你的票。" }
        ],
        collocations: ["buy a ticket", "train ticket", "movie ticket", "ticket office"],
        synonyms: ["pass", "voucher"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'ticket' for all documents", correction: "Ticket = 票 (entry); passport = 护照 (identity)." }],
        pronunciationTips: "Two syllables: TIK-it. Stress the first.",
        memoryTrick: "Ticket = 票. Ticket sounds like 'strip' — a small paper strip."
      },
      {
        id: "tt-8", topic: "Travel", level: "A2", category: "Luggage",
        english: "Luggage", word: "luggage", partOfSpeech: "noun",
        breakdown: "LUG-ij", chinese: "行李", pinyin: "xíng lǐ",
        emoji: "🧳", imageKeyword: "travel luggage",
        definitionEn: "Bags and cases you travel with.",
        definitionZh: "你旅行时携带的包和箱子。",
        detailsEn: "Common: carry-on luggage, checked luggage, luggage claim.",
        detailsZh: "常见：carry-on luggage、checked luggage、luggage claim。",
        exampleEn: "My luggage is heavy.",
        exampleZh: "我的行李很重。",
        examples: [
          { en: "How many pieces of luggage?", zh: "几件行李？" },
          { en: "Luggage claim is over there.", zh: "行李提取处在那。" }
        ],
        collocations: ["carry-on luggage", "checked luggage", "luggage claim", "luggage tag"],
        synonyms: ["bags", "suitcases"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'baggage' and 'luggage' interchangeably", correction: "Both are fine; 'luggage' is more common." }],
        pronunciationTips: "Two syllables: LUG-ij. Stress the first.",
        memoryTrick: "Lug = carry, age = thing. Carry things = luggage."
      }
    ]
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    emoji: "🏥",
    description: "Body parts, illnesses, medicine, hospitals, and healthy habits.",
    color: "from-teal-400 to-cyan-400",
    words: [
      {
        id: "hw-1", topic: "Health", level: "A1", category: "Body",
        english: "Head", word: "head", partOfSpeech: "noun",
        breakdown: "hed", chinese: "头", pinyin: "tóu",
        emoji: "🧑", imageKeyword: "person head",
        definitionEn: "The top part of the human body.",
        definitionZh: "人体的顶部。",
        detailsEn: "Common: head of the table, headache, head injury.",
        detailsZh: "常见搭配：head of the table、headache、head injury。",
        exampleEn: "She nodded her head.",
        exampleZh: "她点了点头。",
        examples: [
          { en: "He hurt his head.", zh: "他伤到了头。" },
          { en: "Wear a helmet on your head.", zh: "头上戴头盔。" }
        ],
        collocations: ["head of the table", "headache", "head injury", "head teacher"],
        synonyms: ["top", "crown"], antonyms: ["foot"],
        commonMistakes: [{ mistake: "Using 'head' for leader always", correction: "Head = 头 (body); head of company = 负责人." }],
        pronunciationTips: "One syllable: hed.",
        memoryTrick: "Head = 头. He + ad. He (人) + ad (广告放上头) = head."
      },
      {
        id: "hw-2", topic: "Health", level: "A2", category: "Symptoms",
        english: "Fever", word: "fever", partOfSpeech: "noun",
        breakdown: "FEE-ver", chinese: "发烧", pinyin: "fā shāo",
        emoji: "🌡️", imageKeyword: "fever thermometer",
        definitionEn: "An abnormally high body temperature.",
        definitionZh: "异常的体温升高。",
        detailsEn: "Common: have a fever, high fever, break a fever.",
        detailsZh: "常见搭配：have a fever、high fever、break a fever。",
        exampleEn: "He has a fever today.",
        exampleZh: "他今天发烧了。",
        examples: [
          { en: "The fever broke after medicine.", zh: "吃了药后烧退了。" },
          { en: "Check for fever.", zh: "检查是否发烧。" }
        ],
        collocations: ["have a fever", "high fever", "break a fever", "fever temperature"],
        synonyms: ["temperature", "pyrexia"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'fever' for cold only", correction: "Fever is high temperature from any cause." }],
        pronunciationTips: "Two syllables: FEE-ver. Stress the first.",
        memoryTrick: "Fever = 发烧. Feels like fire burning inside."
      },
      {
        id: "hw-3", topic: "Health", level: "A1", category: "Medicine",
        english: "Medicine", word: "medicine", partOfSpeech: "noun",
        breakdown: "MED-i-sin", chinese: "药", pinyin: "yào",
        emoji: "💊", imageKeyword: "medicine pills",
        definitionEn: "A substance used to treat illness.",
        definitionZh: "用于治疗疾病的物质。",
        detailsEn: "Common: take medicine, cold medicine, medicine cabinet.",
        detailsZh: "常见搭配：take medicine、cold medicine、medicine cabinet。",
        exampleEn: "Take your medicine.",
        exampleZh: "吃药。",
        examples: [
          { en: "The doctor gave her medicine.", zh: "医生给了她药。" },
          { en: "Store medicine safely.", zh: "安全存放药品。" }
        ],
        collocations: ["take medicine", "cold medicine", "medicine cabinet", "prescribe medicine"],
        synonyms: ["drug", "medication", "remedy"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'medicines' plural for a single pill", correction: "Use 'medicine' as uncountable for the substance." }],
        pronunciationTips: "Three syllables: MED-i-sin. Stress the first.",
        memoryTrick: "Med + icine. Medical + icine = medicine."
      },
      {
        id: "hw-4", topic: "Health", level: "A2", category: "Body",
        english: "Tooth", word: "tooth", partOfSpeech: "noun",
        breakdown: "tooth", chinese: "牙齿", pinyin: "yá chǐ",
        emoji: "🦷", imageKeyword: "tooth smile",
        definitionEn: "One of the hard white objects in your mouth.",
        definitionZh: "你嘴里坚硬的白色物体之一。",
        detailsEn: "Common: brush your teeth, toothache, lose a tooth.",
        detailsZh: "常见搭配：brush your teeth、toothache、lose a tooth。",
        exampleEn: "My tooth hurts.",
        exampleZh: "我牙疼。",
        examples: [
          { en: "Brush your teeth twice daily.", zh: "每天刷两次牙。" },
          { en: "She lost a baby tooth.", zh: "她掉了一颗乳牙。" }
        ],
        collocations: ["brush your teeth", "toothache", "lose a tooth", "baby tooth"],
        synonyms: ["molar", "incisor"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'tooth' for plural", correction: "Plural is 'teeth'." }],
        pronunciationTips: "One syllable: tooth. Like 'boot' with 't'.",
        memoryTrick: "Tooth = 牙齿. T + ooth (out) = stick out from mouth."
      },
      {
        id: "hw-5", topic: "Health", level: "A1", category: "Illness",
        english: "Cough", word: "cough", partOfSpeech: "verb / noun",
        breakdown: "kawf", chinese: "咳嗽", pinyin: "ké sou",
        emoji: "😷", imageKeyword: "coughing person",
        definitionEn: "To force air out of the lungs.",
        definitionZh: "把空气从肺部逼出。",
        detailsEn: "Common: have a cough, dry cough, bad cough.",
        detailsZh: "常见搭配：have a cough、dry cough、bad cough。",
        exampleEn: "I have a bad cough.",
        exampleZh: "我咳嗽得很厉害。",
        examples: [
          { en: "She coughed all night.", zh: "她咳嗽了一整夜。" },
          { en: "Cough drops help.", zh: "润喉糖有帮助。" }
        ],
        collocations: ["have a cough", "dry cough", "cough medicine", "cough drops"],
        synonyms: ["cold", "tickle"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'cough' for sneezing", correction: "Cough = 咳嗽; sneeze = 打喷嚏." }],
        pronunciationTips: "One syllable: kawf. Like 'off' with 'c'.",
        memoryTrick: "Cough = 咳嗽. Onomatopoeia: 'cough' sounds like coughing."
      },
      {
        id: "hw-6", topic: "Wellness", level: "B1", category: "Exercise",
        english: "Exercise", word: "exercise", partOfSpeech: "noun / verb",
        breakdown: "EK-ser-syz", chinese: "锻炼", pinyin: "duàn liàn",
        emoji: "🏃", imageKeyword: "person exercising",
        definitionEn: "Physical activity to improve health.",
        definitionZh: "为改善健康而进行的体育活动。",
        detailsEn: "Common: do exercise, regular exercise, morning exercise.",
        detailsZh: "常见搭配：do exercise、regular exercise、morning exercise。",
        exampleEn: "Exercise keeps you healthy.",
        exampleZh: "锻炼让你保持健康。",
        examples: [
          { en: "Morning exercise is good.", zh: "晨间锻炼很好。" },
          { en: "She exercises daily.", zh: "她每天锻炼。" }
        ],
        collocations: ["do exercise", "regular exercise", "morning exercise", "exercise routine"],
        synonyms: ["workout", "activity"], antonyms: ["sedentary"],
        commonMistakes: [{ mistake: "Using 'sport' for all activity", correction: "Exercise = 锻炼; sport = 体育运动." }],
        pronunciationTips: "Stress the first syllable: EK-ser-syz.",
         memoryTrick: "Ex (extra) + ercise (锻炼) = extra training."
      },
      {
        id: "hw-7", topic: "Health", level: "A2", category: "Medical",
        english: "Doctor", word: "doctor", partOfSpeech: "noun",
        breakdown: "DOK-ter", chinese: "医生", pinyin: "yī shēng",
        emoji: "👨‍⚕️", imageKeyword: "doctor medical",
        definitionEn: "A person who treats sick people.",
        definitionZh: "治疗病人的人。",
        detailsEn: "Common: see a doctor, family doctor, doctor appointment.",
        detailsZh: "常见：see a doctor、family doctor、doctor appointment。",
        exampleEn: "I need to see a doctor.",
        exampleZh: "我需要看医生。",
        examples: [
          { en: "The doctor gave her medicine.", zh: "医生给了她药。" },
          { en: "Ask the doctor for advice.", zh: "问医生寻求建议。" }
        ],
        collocations: ["see doctor", "family doctor", "doctor appointment", "doctor visit"],
        synonyms: ["physician", "surgeon"], antonyms: ["patient"],
        commonMistakes: [{ mistake: "Using 'doc' in formal settings", correction: "'Doc' is informal; use 'doctor' in formal contexts." }],
        pronunciationTips: "Stress the first syllable: DOK-ter.",
        memoryTrick: "Doctor = 医生. Someone with a doctorate."
      },
      {
        id: "hw-8", topic: "Health", level: "A2", category: "Medical",
        english: "Hospital", word: "hospital", partOfSpeech: "noun",
        breakdown: "HOS-pi-tl", chinese: "医院", pinyin: "yī yuàn",
        emoji: "🏥", imageKeyword: "hospital building",
        definitionEn: "A place where sick people are treated.",
        definitionZh: "治疗病人的地方。",
        detailsEn: "Common: go to hospital, hospital bed, hospital staff.",
        detailsZh: "常见：go to hospital、hospital bed、hospital staff。",
        exampleEn: "She went to the hospital.",
        exampleZh: "她去了医院。",
        examples: [
          { en: "He is still in the hospital.", zh: "他还在医院。" },
          { en: "The hospital is nearby.", zh: "医院在附近。" }
        ],
        collocations: ["go to hospital", "hospital bed", "hospital staff", "hospital visit"],
        synonyms: ["clinic", "medical center"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'hotel' instead of 'hospital'", correction: "'Hospital' is for medical care; 'hotel' is for sleep." }],
        pronunciationTips: "Stress the first syllable: HOS-pi-tl.",
        memoryTrick: "Hospit = host + ital. Hosts the ill."
      }
    ]
  },
  {
    id: "professional-skills",
    title: "Professional Skills",
    emoji: "💼",
    description: "Workplace strategy, leadership language, and high-level professional communication.",
    color: "from-indigo-400 to-purple-400",
    words: [
      {
        id: "ps-1", topic: "Professional Skills", level: "C1", category: "Strategy",
        english: "Encompass", word: "encompass", partOfSpeech: "verb",
        breakdown: "en-KUM-puhss", chinese: "包括", pinyin: "bāo kuò",
        emoji: "🔄", imageKeyword: "inclusion diagram",
        definitionEn: "To include comprehensively; surround.",
        definitionZh: "全面包括；包围。",
        detailsEn: "Common: encompasses multiple areas, encompass all aspects.",
        detailsZh: "常见搭配：encompass multiple areas、encompass all aspects。",
        exampleEn: "The course encompasses grammar and speaking.",
        exampleZh: "这门课程包括语法和口语。",
        examples: [
          { en: "The report encompasses all departments.", zh: "这份报告涵盖所有部门。" },
          { en: "Her skills encompass both design and code.", zh: "她的技能涵盖设计和编程。" }
        ],
        collocations: ["encompass all", "encompass multiple", "encompass areas"],
        synonyms: ["include", "cover", "comprise"], antonyms: ["exclude", "omit"],
        commonMistakes: [{ mistake: "Using 'encompass' for simple lists", correction: "Use 'include' for simple lists; 'encompass' implies full coverage." }],
        pronunciationTips: "Stress second syllable: en-KUM-puhss.",
        memoryTrick: "Com = 全部, pass = 通过. Pass through all = encompass everything."
      },
      {
        id: "ps-2", topic: "Professional Skills", level: "C1", category: "Strategy",
        english: "Ubiquitous", word: "ubiquitous", partOfSpeech: "adjective",
        breakdown: "yoo-BIK-wi-tuhs", chinese: "无处不在的", pinyin: "wú chù bù zài de",
        emoji: "🌐", imageKeyword: "omnipresent network",
        definitionEn: "Present everywhere at the same time.",
        definitionZh: "同时在各个地方都存在。",
        detailsEn: "Common: ubiquitous technology, ubiquitous access.",
        detailsZh: "常见搭配：ubiquitous technology、ubiquitous access。",
        exampleEn: "Smartphones are ubiquitous today.",
        exampleZh: "智能手机今天无处不在。",
        examples: [
          { en: "Coffee shops are ubiquitous in the city.", zh: "城市里到处是咖啡店。" },
          { en: "GPS has become ubiquitous.", zh: "GPS已经无处不在。" }
        ],
        collocations: ["ubiquitous technology", "ubiquitous access", "ubiquitous presence"],
        synonyms: ["omnipresent", "pervasive"], antonyms: ["rare", "scarce"],
        commonMistakes: [{ mistake: "Using 'ubiquitous' for common objects casually", correction: "Reserve for things that are truly everywhere." }],
        pronunciationTips: "Stress second syllable: yoo-BIK-wi-tuhs.",
        memoryTrick: "Ubi =  everywhere, quit = exit, ous = adjective. Everywhere = ubiquitous."
      },
      {
        id: "ps-3", topic: " Professional Skills", level: "C1", category: "Leadership",
        english: "Pragmatic", word: "pragmatic", partOfSpeech: "adjective",
        breakdown: "praɡ-MA-tik", chinese: "务实的", pinyin: "wù shí de",
        emoji: "🎯", imageKeyword: "practical planning",
        definitionEn: "Dealing with things practically rather than theoretically.",
        definitionZh: "务实地处理事情，而非理论化。",
        detailsEn: "Common: pragmatic approach, pragmatic solution, pragmatic view.",
        detailsZh: "常见搭配：pragmatic approach、pragmatic solution、pragmatic view。",
        exampleEn: "We need a pragmatic solution.",
        exampleZh: "我们需要一个务实的解决方案。",
        examples: [
          { en: "She is pragmatic about deadlines.", zh: "她对截止日期很务实。" },
          { en: "A pragmatic plan is easier to execute.", zh: "务实的计划更容易执行。" }
        ],
        collocations: ["pragmatic approach", "pragmatic solution", "pragmatic view", "pragmatic person"],
        synonyms: ["practical", "realistic"], antonyms: ["idealistic", "impractical"],
        commonMistakes: [{ mistake: "Using 'pragmatic' for people only", correction: "It can describe plans, solutions, or attitudes." }],
        pronunciationTips: "Stress second syllable: praɡ-MA-tik.",
        memoryTrick: "Pragma = action. Practical action = pragmatic."
      },
      {
        id: "ps-4", topic: "Professional Skills", level: "C1", category: "Strategy",
        english: "Paradigm", word: "paradigm", partOfSpeech: "noun",
        breakdown: "PAR-uh-dyme", chinese: "范式", pinyin: "fàn shì",
        emoji: "🧩", imageKeyword: "paradigm model",
        definitionEn: "A typical example, model, or way of thinking.",
        definitionZh: "典型例子、模型或思维方式。",
        detailsEn: "Common: paradigm shift, new paradigm, paradigm example.",
        detailsZh: "常见搭配：paradigm shift、new paradigm、paradigm example。",
        exampleEn: "Remote work created a paradigm shift.",
        exampleZh: "远程工作造成了一次范式转换。",
        examples: [
          { en: "This theory offers a new paradigm.", zh: "这个理论提供了新范式。" },
          { en: "The industry needs a paradigm change.", zh: "这个行业需要范式改变。" }
        ],
        collocations: ["paradigm shift", "paradigm change", "paradigm example", "new paradigm"],
        synonyms: ["model", "framework", "pattern"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'paradigm' for simple examples", correction: "It implies a fundamental model or pattern." }],
        pronunciationTips: "Stress first syllable: PAR-uh-dyme.",
        memoryTrick: "Para = beside, digma = example. A model to place beside reality."
      },
      {
        id: "ps-5", topic: "Professional Skills", level: "C1", category: "Strategy",
        english: "Leverage", word: "leverage", partOfSpeech: "verb / noun",
        breakdown: "LEV-er-ij", chinese: "利用", pinyin: "lì yòng",
        emoji: "⚖️", imageKeyword: "leverage balance",
        definitionEn: "To use something to maximum advantage.",
        definitionZh: "将某物利用到最大优势。",
        detailsEn: "Common: leverage resources, leverage data, leverage network.",
        detailsZh: "常见搭配：leverage resources、leverage data、leverage network。",
        exampleEn: "We can leverage our data to improve sales.",
        exampleZh: "我们可以利用数据提升销售。",
        examples: [
          { en: "Leverage your strengths.", zh: "发挥你的优势。" },
          { en: "They leveraged social media for growth.", zh: "他们利用社交媒体促进增长。" }
        ],
        collocations: ["leverage resources", "leverage data", "leverage network", "leverage skills"],
        synonyms: ["utilize", "exploit", "harness"], antonyms: ["ignore", "waste"],
        commonMistakes: [{ mistake: "Using 'leverage' as only a noun", correction: "Common as a verb: 'We should leverage...'" }],
        pronunciationTips: "Stress first syllable: LEV-er-ij.",
        memoryTrick: "Lever = 杠杆. Use leverage (杠杆) to lift more."
      },
      {
        id: "ps-6", topic: "Professional Skills", level: "C1", category: "Leadership",
        english: "Mitigate", word: "mitigate", partOfSpeech: "verb",
        breakdown: "MIT-i-ɡeɪt", chinese: "减轻", pinyin: "jiǎn qīng",
        emoji: "🛡️", imageKeyword: "risk mitigation",
        definitionEn: "To make something less severe, serious, or painful.",
        definitionZh: "使某事不那么严重、激烈或痛苦。",
        detailsEn: "Common: mitigate risks, mitigate damage, mitigate impact.",
        detailsZh: "常见搭配：mitigate risks、mitigate damage、mitigate impact。",
        exampleEn: "We need to mitigate the risks.",
        exampleZh: "我们需要降低风险。",
        examples: [
          { en: "Tree planting mitigates climate change.", zh: "植树 mitigates 气候变化。" },
          { en: "Measures were taken to mitigate failure.", zh: "采取措施减轻失败影响。" }
        ],
        collocations: ["mitigate risks", "mitigate damage", "mitigate impact", "mitigate effects"],
        synonyms: ["reduce", "lessen", "alleviate"], antonyms: ["worsen", "exacerbate"],
        commonMistakes: [{ mistake: "Using 'reduce' when you mean 'mitigate'", correction: "'Mitigate' implies making something bad less severe." }],
        pronunciationTips: "Stress first syllable: MIT-i-ɡeɪt.",
        memoryTrick: "Miti =  minimization. Make it smaller = mitigate."
      },
      {
        id: "ps-7", topic: "Professional Skills", level: "C1", category: "Strategy",
        english: "Strategy", word: "strategy", partOfSpeech: "noun",
        breakdown: "STRAT-uh-jee", chinese: "策略", pinyin: "cè lüè",
        emoji: "♟️", imageKeyword: "business strategy",
        definitionEn: "A plan of action designed to achieve a goal.",
        definitionZh: "为实现目标而设计的行动计划。",
        detailsEn: "Common: business strategy, marketing strategy, long-term strategy.",
        detailsZh: "常见：business strategy、marketing strategy、long-term strategy。",
        exampleEn: "We need a better strategy.",
        exampleZh: "我们需要更好的策略。",
        examples: [
          { en: "The strategy worked well.", zh: "策略效果很好。" },
          { en: "She developed a marketing strategy.", zh: "她制定了营销策略。" }
        ],
        collocations: ["business strategy", "marketing strategy", "long-term strategy", "strategy plan"],
        synonyms: ["plan", "tactic", "approach"], antonyms: ["chaos"],
        commonMistakes: [{ mistake: "Using 'strategy' for simple plans", correction: "Strategy = 策略 (long-term); tactic = 战术 (short-term)." }],
        pronunciationTips: "Stress the first syllable: STRAT-uh-jee.",
        memoryTrick: "Strateg + y. Strategic plan = strategy."
      },
      {
        id: "ps-8", topic: "Professional Skills", level: "C1", category: "Leadership",
        english: "Negotiate", word: "negotiate", partOfSpeech: "verb",
        breakdown: "ni-GOH-shee-ayt", chinese: "谈判", pinyin: "tán pàn",
        emoji: "🤝", imageKeyword: "business negotiation",
        definitionEn: "To discuss something to reach agreement.",
        definitionZh: "讨论某事以达成协议。",
        detailsEn: "Common: negotiate a deal, negotiate salary, negotiate terms.",
        detailsZh: "常见：negotiate a deal、negotiate salary、negotiate terms。",
        exampleEn: "They negotiated a deal.",
        exampleZh: "他们谈判达成了一个协议。",
        examples: [
          { en: "We need to negotiate the price.", zh: "我们需要谈判价格。" },
          { en: "She negotiated a better contract.", zh: "她谈判得到了更好的合同。" }
        ],
        collocations: ["negotiate a deal", "negotiate salary", "negotiate terms", "negotiate peace"],
        synonyms: ["mediate", "discuss", "bargain"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'discuss' for formal negotiations", correction: "Negotiate = 谈判 (formal); discuss = 讨论 (general)." }],
        pronunciationTips: "Stress the second syllable: ni-GOH-shee-ayt.",
        memoryTrick: "Nego = 交流, tiate = 动作. Negotiate = communicate to agree."
      }
    ]
  },
  {
    id: "advanced-communication",
    title: "Advanced Communication",
    emoji: "🎓",
    description: "Sophisticated expression, discourse analysis, and academic discussion.",
    color: "from-violet-400 to-fuchsia-400",
    words: [
      {
        id: "ac-1", topic: "Advanced Communication", level: "C2", category: "Discourse",
        english: "Discourse", word: "discourse", partOfSpeech: "noun",
        breakdown: "DIS-kors", chinese: "话语", pinyin: "huà yǔ",
        emoji: "💬", imageKeyword: "academic speech",
        definitionEn: "Written or spoken communication or debate.",
        definitionZh: "书面或口头交流或辩论。",
        detailsEn: "Common: political discourse, academic discourse, discourse analysis.",
        detailsZh: "常见搭配：political discourse、academic discourse、discourse analysis。",
        exampleEn: "Political discourse shapes public opinion.",
        exampleZh: "政治话语塑造公众舆论。",
        examples: [
          { en: "Academic discourse requires evidence.", zh: "学术话语需要证据。" },
          { en: "The discourse around AI is evolving.", zh: "关于AI的话语正在演变。" }
        ],
        collocations: ["political discourse", "academic discourse", "discourse analysis", "discourse community"],
        synonyms: ["conversation", "discussion", "text"], antonyms: ["silence"],
        commonMistakes: [{ mistake: "Using 'discourse' for casual chat", correction: "Use for formal or analytical communication." }],
        pronunciationTips: "Stress first syllable: DIS-kors.",
        memoryTrick: "Dis = apart, course = path. A structured path of words."
      },
      {
        id: "ac-2", topic: "Advanced Communication", level: "C2", category: "Practice",
        english: "Praxis", word: "praxis", partOfSpeech: "noun",
        breakdown: "PRAK-sis", chinese: "实践", pinyin: "shí jiàn",
        emoji: "🔄", imageKeyword: "theory practice cycle",
        definitionEn: "The practical application of a theory or method.",
        definitionZh: "理论或方法的实际应用。",
        detailsEn: "Common: theory and praxis, praxis-oriented, critical praxis.",
        detailsZh: "常见搭配：theory and praxis、praxis-oriented、critical praxis。",
        exampleEn: "There is a gap between theory and praxis.",
        exampleZh: "理论和实践之间有差距。",
        examples: [
          { en: "Praxis transforms ideas into action.", zh: "实践将想法转化为行动。" },
          { en: "Critical praxis examines power structures.", zh: "批判实践审视权力结构。" }
        ],
        collocations: ["theory and praxis", "praxis-oriented", "critical praxis", "praxis research"],
        synonyms: ["practice", "application", "execution"], antonyms: ["theory"],
        commonMistakes: [{ mistake: "Using 'practice' when 'praxis' is intended", correction: "'Praxis' specifically links theory to action." }],
        pronunciationTips: "Stress first syllable: PRAK-sis.",
        memoryTrick: "Pract + is. Practice that is intentional and theory-linked."
      },
      {
        id: "ac-3", topic: "Advanced Communication", level: "C2", category: "Reasoning",
        english: "Dialectic", word: "dialectic", partOfSpeech: "noun / adjective",
        breakdown: "dy-uh-LEK-tik", chinese: "辩证法", pinyin: "biàn zhèng fǎ",
        emoji: "⚖️", imageKeyword: "dialectic debate",
        definitionEn: "Logical discussion or reasoning through opposing ideas.",
        definitionZh: "通过对立观点进行逻辑讨论或推理。",
        detailsEn: "Common: dialectic method, dialectic reasoning, dialectic materialism.",
        detailsZh: "常见搭配：dialectic method、dialectic reasoning、dialectic materialism。",
        exampleEn: "The dialectic reveals deeper truths.",
        exampleZh: "辩证法揭示更深层的真理。",
        examples: [
          { en: "Dialectic reasoning compares opposites.", zh: "辩证推理比较对立面。" },
          { en: "He used a dialectic approach.", zh: "他使用了辩证方法。" }
        ],
        collocations: ["dialectic method", "dialectic reasoning", "dialectic approach", "dialectic materialism"],
        synonyms: ["logic", "argumentation", "debate"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'dialectic' for any debate", correction: "It specifically involves thesis-antithesis-synthesis." }],
        pronunciationTips: "Stress second syllable: dy-uh-LEK-tik.",
        memoryTrick: "Dia = through, legein = speak. Speaking through opposites to find truth."
      },
      {
        id: "ac-4", topic: "Advanced Communication", level: "C2", category: "Analysis",
        english: "Exacerbate", word: "exacerbate", partOfSpeech: "verb",
        breakdown: "iɡˈzæsərbeɪt", chinese: "加剧", pinyin: "jiā jù",
        emoji: "🔥", imageKeyword: "worsening crisis",
        definitionEn: "To make a problem or situation worse.",
        definitionZh: "使问题或情况更糟。",
        detailsEn: "Common: exacerbate tensions, exacerbate the problem, exacerbate inequality.",
        detailsZh: "常见搭配：exacerbate tensions、exacerbate the problem、exacerbate inequality。",
        exampleEn: "Rising prices exacerbate poverty.",
        exampleZh: "物价上涨加剧了贫困。",
        examples: [
          { en: "The comment exacerbated the conflict.", zh: "评论加剧了冲突。" },
          { en: "Stress can exacerbate illness.", zh: "压力可能加重病情。" }
        ],
        collocations: ["exacerbate tensions", "exacerbate the problem", "exacerbate inequality", "exacerbate symptoms"],
        synonyms: ["worsen", "aggravate", "intensify"], antonyms: ["alleviate", "mitigate", "ameliorate"],
        commonMistakes: [{ mistake: "Using 'exaggerate' instead", correction: "'Exacerbate' means worsen; 'exaggerate' means overstate." }],
        pronunciationTips: "Stress third syllable: iɡˈzæsərbeɪt.",
        memoryTrick: "Ex = out, acerb = sour, ate = make. Make more sour = make worse."
      },
      {
        id: "ac-5", topic: "Advanced Communication", level: "C2", category: "Analysis",
        english: "Ameliorate", word: "ameliorate", partOfSpeech: "verb",
        breakdown: "əˈmiːliəreɪt", chinese: "改善", pinyin: "gǎi shàn",
        emoji: "🌤️", imageKeyword: "improving conditions",
        definitionEn: "To make something bad better; improve.",
        definitionZh: "使不好的东西变好；改善。",
        detailsEn: "Common: ameliorate conditions, ameliorate poverty, ameliorate effects.",
        detailsZh: "常见搭配：ameliorate conditions、ameliorate poverty、ameliorate effects。",
        exampleEn: "Policies should ameliorate inequality.",
        exampleZh: "政策应改善不平等。",
        examples: [
          { en: "Education can ameliorate social problems.", zh: "教育可以改善社会问题。" },
          { en: "Donations ameliorated the disaster damage.", zh: "捐款减轻了灾难损害。" }
        ],
        collocations: ["ameliorate conditions", "ameliorate poverty", "ameliorate effects", "ameliorate suffering"],
        synonyms: ["improve", "alleviate", "relieve"], antonyms: ["worsen", "deteriorate"],
        commonMistakes: [{ mistake: "Using 'improve' when 'ameliorate' is intended", correction: "'Ameliorate' implies making a bad situation less severe." }],
        pronunciationTips: "Stress third syllable: əˈmiːliəreɪt.",
        memoryTrick: "A = to, melio = better, ate = make. Make better = ameliorate."
      },
      {
        id: "ac-6", topic: "Advanced Communication", level: "C2", category: "Reasoning",
        english: "Epistemology", word: "epistemology", partOfSpeech: "noun",
        breakdown: "ɪˌpɪstəˈmɒlədʒi", chinese: "认识论", pinyin: "rèn shí lùn",
        emoji: "🧠", imageKeyword: "knowledge theory",
        definitionEn: "The study of knowledge and justified belief.",
        definitionZh: "关于知识和合理信念的研究。",
        detailsEn: "Common: epistemology of science, social epistemology.",
        detailsZh: "常见搭配：epistemology of science、social epistemology。",
        exampleEn: "Epistemology asks: how do we know?",
        exampleZh: "认识论问：我们如何知道？",
        examples: [
          { en: "She studies epistemology and logic.", zh: "她研究认识论和逻辑。" },
          { en: "Epistemology underpins scientific method.", zh: "认识论是科学方法论的基础。" }
        ],
        collocations: ["epistemology of", "social epistemology", "epistemology study", "epistemology theory"],
        synonyms: ["theory of knowledge", "gnosiology"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'epistemology' in casual conversation", correction: "Reserve for academic or philosophical contexts." }],
        pronunciationTips: "Stress sixth syllable: ɪˌpɪstəˈmɒlədʒi.",
        memoryTrick: "Episteme = knowledge, ology = study. Study of knowledge."
      },
      {
        id: "ac-7", topic: "Advanced Communication", level: "C2", category: "Rhetoric",
        english: "Rhetoric", word: "rhetoric", partOfSpeech: "noun",
        breakdown: "RET-uh-rik", chinese: "修辞", pinyin: "xiū cí",
        emoji: "🎭", imageKeyword: "rhetoric speech",
        definitionEn: "The art of effective or persuasive speaking or writing.",
        definitionZh: "有效或有说服力的讲话或写作艺术。",
        detailsEn: "Common: political rhetoric, rhetorical question, rhetoric device.",
        detailsZh: "常见：political rhetoric、rhetorical question、rhetoric device。",
        exampleEn: "His rhetoric inspired many.",
        exampleZh: "他的修辞激励了许多人。",
        examples: [
          { en: "The speech was full of rhetoric.", zh: "演讲充满了修辞。" },
          { en: "She studies rhetoric and debate.", zh: "她学习修辞和辩论。" }
        ],
        collocations: ["political rhetoric", "rhetorical question", "rhetoric device", "rhetoric style"],
        synonyms: ["persuasion", "eloquence", "oratory"], antonyms: [],
        commonMistakes: [{ mistake: "Using 'rhetoric' only negatively", correction: "It can be neutral or positive; it means the art of persuasion." }],
        pronunciationTips: "Stress the first syllable: RET-uh-rik.",
        memoryTrick: "Rhetoric = 修辞. Rhet (rhetoric) + oric (形容词后缀) = rhetorical."
      },
      {
        id: "ac-8", topic: "Advanced Communication", level: "C2", category: "Discourse",
        english: "Discourse", word: "discourse", partOfSpeech: "noun",
        breakdown: "DIS-kors", chinese: "论述", pinyin: "lùn shù",
        emoji: "📚", imageKeyword: "academic discourse",
        definitionEn: "Structured written or spoken communication.",
        definitionZh: "结构化的书面或口头交流。",
        detailsEn: "Common: academic discourse, political discourse, discourse analysis.",
        detailsZh: "常见：academic discourse、political discourse、discourse analysis。",
        exampleEn: "Academic discourse requires evidence.",
        exampleZh: "学术论述需要证据。",
        examples: [
          { en: "The discourse was thoughtful.", zh: "论述很有深度。" },
          { en: "She analyzed the discourse.", zh: "她分析了论述。" }
        ],
        collocations: ["academic discourse", "political discourse", "discourse analysis", "discourse community"],
        synonyms: ["communication", "text", "language"], antonyms: ["silence"],
        commonMistakes: [{ mistake: "Using 'discourse' for casual talk", correction: "Use for formal, structured communication." }],
        pronunciationTips: "Stress first syllable: DIS-kors.",
        memoryTrick: "Dis = apart, course = path. A structured path of words."
      }
    ]
  }
];



