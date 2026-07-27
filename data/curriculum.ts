import { Level } from "@/types/curriculum";

export const curriculum: Level[] = [
    {
        id: "level-1",
        title: "Level 1: Greetings & Basics",
        description: "Essential greetings to start a conversation.",
        items: [
            {
                english: "Hello", breakdown: "heh-loh", chinese: "你好", pinyin: "nǐ hǎo", emoji: "👋", imageKeyword: "greeting",
                detailsEn: "The most common and standard greeting used at any time of day.",
                detailsZh: "最常见和标准的问候语，可在任何时间使用。",
                exampleEn: "Hello! It is nice to meet you today.",
                exampleZh: "你好！今天很高兴见到你。"
            },
            {
                english: "Thank you", breakdown: "thangk yoo", chinese: "谢谢", pinyin: "xiè xiè", emoji: "🙏", imageKeyword: "thankyou",
                detailsEn: "Used to show gratitude or appreciation for something done for you.",
                detailsZh: "用于表达感激或感谢之情。",
                exampleEn: "Thank you so much for helping me with my work.",
                exampleZh: "非常感谢你帮我完成工作。"
            },
            {
                english: "Goodbye", breakdown: "good-by", chinese: "再见", pinyin: "zài jiàn", emoji: "🚶", imageKeyword: "farewell",
                detailsEn: "Used when parting ways. Literally translates to 'again see'.",
                detailsZh: "分别时使用的用语。字面意思是“再次相见”。",
                exampleEn: "I have to go home now. Goodbye, see you tomorrow!",
                exampleZh: "我现在得回家了。再见，明天见！"
            },
            {
                english: "Yes", breakdown: "yes", chinese: "是", pinyin: "shì", emoji: "✅", imageKeyword: "checkmark",
                detailsEn: "Used to give an affirmative response. In Chinese, '是' also means 'to be'.",
                detailsZh: "用于给予肯定的回答。",
                exampleEn: "Yes, I would love to go to the park with you.",
                exampleZh: "是的，我很乐意和你一起去公园。"
            },
            {
                english: "No", breakdown: "noh", chinese: "不", pinyin: "bù", emoji: "❌", imageKeyword: "deny",
                detailsEn: "Used to give a negative response. Often placed before a verb in Chinese.",
                detailsZh: "用于给予否定的回答。",
                exampleEn: "No, I do not want any more coffee today.",
                exampleZh: "不，我今天不想再喝咖啡了。"
            },
            {
                english: "Please", breakdown: "pleez", chinese: "请", pinyin: "qǐng", emoji: "🥺", imageKeyword: "polite",
                detailsEn: "Used to be polite when asking for something. Adds courtesy to a request.",
                detailsZh: "请求某物或某事时用于表达礼貌的词语。",
                exampleEn: "Could you please pass me the salt?",
                exampleZh: "请把盐递给我好吗？"
            },
            {
                english: "Excuse me", breakdown: "ek-skyooz mee", chinese: "打扰一下", pinyin: "dǎ rǎo yī xià", emoji: "🙋", imageKeyword: "attention",
                detailsEn: "Used to get someone's attention politely or apologize for an interruption.",
                detailsZh: "用于礼貌地引起某人注意或为打扰道歉。",
                exampleEn: "Excuse me, do you know what time it is?",
                exampleZh: "打扰一下，你知道现在几点吗？"
            },
            {
                english: "Sorry", breakdown: "sor-ee", chinese: "对不起", pinyin: "duì bù qǐ", emoji: "🙇", imageKeyword: "apology",
                detailsEn: "Used to express apology or regret for something you have done wrong.",
                detailsZh: "用于表达歉意或遗憾。",
                exampleEn: "I am very sorry for being late to the meeting.",
                exampleZh: "开会迟到我非常对不起。"
            },
            {
                english: "You're welcome", breakdown: "yoor wel-kum", chinese: "不客气", pinyin: "bú kè qì", emoji: "😊", imageKeyword: "smile",
                detailsEn: "The polite response when someone thanks you. Literally means 'don't be polite'.",
                detailsZh: "对“谢谢”的礼貌回复。字面意思是“不要客气”。",
                exampleEn: "A: Thank you! B: You're welcome, anytime!",
                exampleZh: "甲：谢谢！乙：不客气，随时都可以！"
            },
            {
                english: "Good morning", breakdown: "good mor-ning", chinese: "早上好", pinyin: "zǎo shàng hǎo", emoji: "🌅", imageKeyword: "sunrise",
                detailsEn: "A greeting used in the early part of the day, before noon.",
                detailsZh: "在一天中较早时候（中午前）使用的问候语。",
                exampleEn: "Good morning everyone! I hope you had a good rest.",
                exampleZh: "大家早上好！希望你们都休息好了。"
            },
            {
                english: "Good afternoon", breakdown: "good af-ter-noon", chinese: "下午好", pinyin: "xià wǔ hǎo", emoji: "☀️", imageKeyword: "afternoon",
                detailsEn: "A greeting used in the afternoon, from noon until evening.",
                detailsZh: "下午时使用的问候语（中午到傍晚之间）。",
                exampleEn: "Good afternoon! Did you have a nice lunch?",
                exampleZh: "下午好！你午饭吃得好吗？"
            },
            {
                english: "Good evening", breakdown: "good eve-ning", chinese: "晚上好", pinyin: "wǎn shàng hǎo", emoji: "🌆", imageKeyword: "evening",
                detailsEn: "A greeting used after sunset when the day is ending.",
                detailsZh: "日落后使用的问候语。",
                exampleEn: "Good evening! The sunset looks beautiful today.",
                exampleZh: "晚上好！今天的日落真美。"
            },
            {
                english: "Good night", breakdown: "good nyt", chinese: "晚安", pinyin: "wǎn ān", emoji: "🌙", imageKeyword: "night",
                detailsEn: "Said when someone is going to sleep or at the end of the day.",
                detailsZh: "当有人要去睡觉或一天结束时说的话。",
                exampleEn: "Good night! Sweet dreams and sleep well.",
                exampleZh: "晚安！做个好梦，好好睡觉。"
            },
            {
                english: "How are you?", breakdown: "how ahr yoo", chinese: "你好吗", pinyin: "nǐ hǎo ma", emoji: "❓", imageKeyword: "conversation",
                detailsEn: "A common polite question asking about someone's well-being.",
                detailsZh: "询问他人近况的常见礼貌用语。",
                exampleEn: "Hi John, how are you doing today?",
                exampleZh: "嗨约翰，你今天好吗？"
            },
            {
                english: "I am fine", breakdown: "eye am fyn", chinese: "我很好", pinyin: "wǒ hěn hǎo", emoji: "😄", imageKeyword: "happy",
                detailsEn: "The standard polite response to 'How are you?'.",
                detailsZh: "对“你好吗？”的标准礼貌回复。",
                exampleEn: "I am fine, thank you for asking!",
                exampleZh: "我很好，谢谢你的关心！"
            },
            {
                english: "Nice to meet you", breakdown: "nys too meet yoo", chinese: "很高兴认识你", pinyin: "hěn gāo xìng rèn shí nǐ", emoji: "🤝", imageKeyword: "handshake",
                detailsEn: "A polite phrase used after being introduced to someone new.",
                detailsZh: "在初次认识某人后使用的礼貌用语。",
                exampleEn: "It is very nice to meet you, welcome to our school.",
                exampleZh: "很高兴认识你，欢迎来到我们学校。"
            },
            {
                english: "See you later", breakdown: "see yoo lay-ter", chinese: "回头见", pinyin: "huí tóu jiàn", emoji: "👀", imageKeyword: "wave",
                detailsEn: "An informal way to say goodbye, implying you will meet again soon.",
                detailsZh: "一种非正式的告别方式，意味着你们很快会再见面。",
                exampleEn: "I have to go now, but see you later at the game!",
                exampleZh: "我现在要走了，但比赛时回头见！"
            },
            {
                english: "Take care", breakdown: "tayk kair", chinese: "保重", pinyin: "bǎo zhòng", emoji: "💙", imageKeyword: "care",
                detailsEn: "Said when parting from someone to wish them well.",
                detailsZh: "分别时说的话，祝对方一切安好。",
                exampleEn: "It was great seeing you. Take care on your trip!",
                exampleZh: "很高兴见到你。旅途中保重！"
            },
            {
                english: "Welcome", breakdown: "wel-kum", chinese: "欢迎", pinyin: "huān yíng", emoji: "🏠", imageKeyword: "welcome",
                detailsEn: "Used to greet a guest or someone arriving at a place.",
                detailsZh: "用于迎接客人或到达某地的人。",
                exampleEn: "Welcome to our home, please come in!",
                exampleZh: "欢迎来到我们家，请进！"
            },
            {
                english: "Congratulations", breakdown: "kun-gra-chuh-lay-shuns", chinese: "恭喜", pinyin: "gōng xǐ", emoji: "🎉", imageKeyword: "celebration",
                detailsEn: "Used to praise someone for an achievement or happy event.",
                detailsZh: "用于称赞某人的成就或喜事。",
                exampleEn: "Congratulations on passing your English exam!",
                exampleZh: "恭喜你通过了英语考试！"
            },
            {
                english: "Happy birthday", breakdown: "hap-ee burth-day", chinese: "生日快乐", pinyin: "shēng rì kuài lè", emoji: "🎂", imageKeyword: "birthday",
                detailsEn: "A greeting said to someone on the anniversary of their birth.",
                detailsZh: "在某人生日时说的话。",
                exampleEn: "Happy birthday to you! I hope all your wishes come true.",
                exampleZh: "祝你生日快乐！希望你所有的愿望都成真。"
            },
            {
                english: "Cheers", breakdown: "cheerz", chinese: "干杯", pinyin: "gān bēi", emoji: "🥂", imageKeyword: "toast",
                detailsEn: "Said when raising glasses in a toast. Also used as 'thank you' informally.",
                detailsZh: "举杯庆祝时说的话。在英国口语中也用于表达感谢。",
                exampleEn: "Cheers everyone! Here is to a great new year!",
                exampleZh: "大家干杯！为美好的新年而庆祝！"
            }
        ]
    },
    {
        id: "level-2",
        title: "Level 2: Numbers & Time",
        description: "Counting and telling time.",
        items: [
            {
                english: "One", breakdown: "wun", chinese: "一", pinyin: "yī", emoji: "1️⃣", imageKeyword: "number one",
                detailsEn: "The number 1. The first and most basic number.",
                detailsZh: "数字 1。第一个也是最基本的数字。",
                exampleEn: "I only need one ticket for the movie tonight.",
                exampleZh: "我今晚只需要一张电影票。"
            },
            {
                english: "Two", breakdown: "too", chinese: "二", pinyin: "èr", emoji: "2️⃣", imageKeyword: "pair",
                detailsEn: "The number 2. In Chinese, '两(liǎng)' is used when counting objects.",
                detailsZh: "数字 2。汉语中数量词前用“两”。",
                exampleEn: "Can I get two cups of tea, please?",
                exampleZh: "能给我来两杯茶吗？"
            },
            {
                english: "Three", breakdown: "three", chinese: "三", pinyin: "sān", emoji: "3️⃣", imageKeyword: "three objects",
                detailsEn: "The number 3.",
                detailsZh: "数字 3。",
                exampleEn: "We will meet at the restaurant at three o'clock.",
                exampleZh: "我们三点钟在餐厅见面。"
            },
            {
                english: "Four", breakdown: "for", chinese: "四", pinyin: "sì", emoji: "4️⃣", imageKeyword: "four seasons",
                detailsEn: "The number 4. In Chinese culture, this number is considered unlucky.",
                detailsZh: "数字 4。在中国文化中，这个数字被认为不吉利。",
                exampleEn: "There are four seasons in a year: spring, summer, fall, and winter.",
                exampleZh: "一年有四个季节：春、夏、秋、冬。"
            },
            {
                english: "Five", breakdown: "fyv", chinese: "五", pinyin: "wǔ", emoji: "5️⃣", imageKeyword: "hand five",
                detailsEn: "The number 5. We have five fingers on each hand.",
                detailsZh: "数字 5。我们每只手有五根手指。",
                exampleEn: "The meeting will start in five minutes.",
                exampleZh: "会议将在五分钟后开始。"
            },
            {
                english: "Six", breakdown: "siks", chinese: "六", pinyin: "liù", emoji: "6️⃣", imageKeyword: "hexagon",
                detailsEn: "The number 6. A hexagon has six sides.",
                detailsZh: "数字 6。六边形有六条边。",
                exampleEn: "I wake up at six o'clock every morning.",
                exampleZh: "我每天早上六点起床。"
            },
            {
                english: "Seven", breakdown: "seh-vuhn", chinese: "七", pinyin: "qī", emoji: "7️⃣", imageKeyword: "rainbow",
                detailsEn: "The number 7. A rainbow has seven colors.",
                detailsZh: "数字 7。彩虹有七种颜色。",
                exampleEn: "There are seven days in a week.",
                exampleZh: "一周有七天。"
            },
            {
                english: "Eight", breakdown: "ayt", chinese: "八", pinyin: "bā", emoji: "8️⃣", imageKeyword: "octopus",
                detailsEn: "The number 8. In Chinese culture, 8 is considered very lucky.",
                detailsZh: "数字 8。在中国文化中，8被认为非常吉利。",
                exampleEn: "An octopus has eight arms.",
                exampleZh: "章鱼有八条手臂。"
            },
            {
                english: "Nine", breakdown: "nyn", chinese: "九", pinyin: "jiǔ", emoji: "9️⃣", imageKeyword: "nine",
                detailsEn: "The number 9. Nine is the largest single digit number.",
                detailsZh: "数字 9。九是最大的个位数。",
                exampleEn: "The school bell rings at nine in the morning.",
                exampleZh: "学校的钟声在早上九点响起。"
            },
            {
                english: "Ten", breakdown: "ten", chinese: "十", pinyin: "shí", emoji: "🔟", imageKeyword: "ten fingers",
                detailsEn: "The number 10. We have ten fingers in total.",
                detailsZh: "数字 10。我们总共有十根手指。",
                exampleEn: "I scored ten out of ten on my test!",
                exampleZh: "我的考试得了满分十分！"
            },
            {
                english: "Today", breakdown: "tuh-day", chinese: "今天", pinyin: "jīn tiān", emoji: "📅", imageKeyword: "calendar",
                detailsEn: "The current day we are living in right now.",
                detailsZh: "我们现在所处的这一天。",
                exampleEn: "Today is a very beautiful and sunny day.",
                exampleZh: "今天是一个非常美丽阳光明媚的日子。"
            },
            {
                english: "Tomorrow", breakdown: "tuh-mor-oh", chinese: "明天", pinyin: "míng tiān", emoji: "🔜", imageKeyword: "sunrise",
                detailsEn: "The day after today.",
                detailsZh: "今天之后的一天。",
                exampleEn: "I will finish this project by tomorrow morning.",
                exampleZh: "我会在明天早上之前完成这个项目。"
            },
            {
                english: "Yesterday", breakdown: "yes-ter-day", chinese: "昨天", pinyin: "zuó tiān", emoji: "🔙", imageKeyword: "past",
                detailsEn: "The day before today.",
                detailsZh: "今天之前的一天。",
                exampleEn: "I went to the grocery store yesterday evening.",
                exampleZh: "我昨天傍晚去了趟杂货店。"
            },
            {
                english: "Morning", breakdown: "mor-ning", chinese: "早上", pinyin: "zǎo shàng", emoji: "🌄", imageKeyword: "morning",
                detailsEn: "The early part of the day, from midnight to noon.",
                detailsZh: "一天中较早的时间，从午夜到中午。",
                exampleEn: "I like to drink coffee in the morning.",
                exampleZh: "我喜欢在早上喝咖啡。"
            },
            {
                english: "Night", breakdown: "nyt", chinese: "晚上", pinyin: "wǎn shàng", emoji: "🌙", imageKeyword: "night sky",
                detailsEn: "The period of darkness between sunset and sunrise.",
                detailsZh: "日落到日出之间的黑暗时期。",
                exampleEn: "The stars are beautiful at night.",
                exampleZh: "夜晚的星星很美丽。"
            },
            {
                english: "Week", breakdown: "week", chinese: "星期", pinyin: "xīng qī", emoji: "🗓️", imageKeyword: "week",
                detailsEn: "A period of seven days, usually starting on Monday or Sunday.",
                detailsZh: "七天的时间，通常从星期一或星期日开始。",
                exampleEn: "I exercise three times a week.",
                exampleZh: "我每周锻炼三次。"
            },
            {
                english: "Month", breakdown: "munth", chinese: "月", pinyin: "yuè", emoji: "📆", imageKeyword: "month",
                detailsEn: "One of the twelve periods that a year is divided into.",
                detailsZh: "一年被分为十二个月。",
                exampleEn: "My birthday is in the third month of the year.",
                exampleZh: "我的生日在一年中的第三个月。"
            },
            {
                english: "Year", breakdown: "yeer", chinese: "年", pinyin: "nián", emoji: "🗓", imageKeyword: "new year",
                detailsEn: "A period of 365 days, or 366 in a leap year.",
                detailsZh: "365天的时间段，闰年为366天。",
                exampleEn: "I have been studying English for one year.",
                exampleZh: "我学英语已经一年了。"
            },
            {
                english: "Now", breakdown: "now", chinese: "现在", pinyin: "xiàn zài", emoji: "⏳", imageKeyword: "clock",
                detailsEn: "The present moment, happening at this exact time.",
                detailsZh: "当前的时刻，就在此时此刻发生的。",
                exampleEn: "We need to leave the house right now.",
                exampleZh: "我们现在必须离开家。"
            },
            {
                english: "Hour", breakdown: "ow-er", chinese: "小时", pinyin: "xiǎo shí", emoji: "🕐", imageKeyword: "hourglass",
                detailsEn: "A unit of time equal to 60 minutes.",
                detailsZh: "等于60分钟的时间单位。",
                exampleEn: "The flight from Beijing to Shanghai takes two hours.",
                exampleZh: "从北京到上海的航班需要两个小时。"
            },
            {
                english: "Minute", breakdown: "min-it", chinese: "分钟", pinyin: "fēn zhōng", emoji: "⏱️", imageKeyword: "timer",
                detailsEn: "A unit of time equal to 60 seconds.",
                detailsZh: "等于60秒的时间单位。",
                exampleEn: "I will be ready in just five minutes.",
                exampleZh: "我五分钟后就准备好了。"
            },
            {
                english: "Second", breakdown: "sek-und", chinese: "秒", pinyin: "miǎo", emoji: "⚡", imageKeyword: "fast",
                detailsEn: "The smallest common unit of time, 1/60 of a minute.",
                detailsZh: "最小的常见时间单位，一分钟的六十分之一。",
                exampleEn: "The runner finished the race in under ten seconds.",
                exampleZh: "选手在十秒内完成了比赛。"
            }
        ]
    },
    {
        id: "level-3",
        title: "Level 3: Food & Dining",
        description: "Vocabulary for eating out and describing food.",
        items: [
            {
                english: "Water", breakdown: "wah-ter", chinese: "水", pinyin: "shuǐ", emoji: "💧", imageKeyword: "water glass",
                detailsEn: "The most essential clear liquid for drinking. The human body is 60% water.",
                detailsZh: "最基本的饮用透明液体。人体60%是水。",
                exampleEn: "Can I please get a glass of cold water?",
                exampleZh: "能给我来一杯冷水吗？"
            },
            {
                english: "Rice", breakdown: "rys", chinese: "米饭", pinyin: "mǐ fàn", emoji: "🍚", imageKeyword: "rice bowl",
                detailsEn: "A staple food grain cooked by boiling. The most important food in Asia.",
                detailsZh: "通过蒸煮的主食谷物。是亚洲最重要的食物。",
                exampleEn: "I would like a bowl of steamed white rice.",
                exampleZh: "我想要一碗蒸白米饭。"
            },
            {
                english: "Noodles", breakdown: "noo-duls", chinese: "面条", pinyin: "miàn tiáo", emoji: "🍜", imageKeyword: "noodles",
                detailsEn: "A type of food made from flour and water, cut into long strips.",
                detailsZh: "一种由面粉和水制成、切成长条的食物。",
                exampleEn: "I love eating spicy noodles with egg on top.",
                exampleZh: "我喜欢吃上面放鸡蛋的辣面条。"
            },
            {
                english: "Bread", breakdown: "bred", chinese: "面包", pinyin: "miàn bāo", emoji: "🍞", imageKeyword: "bread loaf",
                detailsEn: "A baked food made from flour and water. A staple food in Western countries.",
                detailsZh: "由面粉和水制成的烘焙食品。西方国家的主食。",
                exampleEn: "I eat toast and butter with bread every morning.",
                exampleZh: "我每天早上吃烤面包和黄油。"
            },
            {
                english: "Meat", breakdown: "meet", chinese: "肉", pinyin: "ròu", emoji: "🥩", imageKeyword: "meat",
                detailsEn: "The flesh of an animal used as food. Common types include beef, pork, and chicken.",
                detailsZh: "用作食物的动物的肉。常见的有牛肉、猪肉和鸡肉。",
                exampleEn: "He doesn't eat meat because he is a vegetarian.",
                exampleZh: "他不吃肉因为他是个素食主义者。"
            },
            {
                english: "Fish", breakdown: "fish", chinese: "鱼", pinyin: "yú", emoji: "🐟", imageKeyword: "fish dish",
                detailsEn: "An aquatic animal commonly eaten as food. Rich in protein and healthy omega-3 fats.",
                detailsZh: "通常作为食物食用的水生动物。富含蛋白质和健康的欧米茄-3脂肪。",
                exampleEn: "I prefer eating fish instead of red meat.",
                exampleZh: "我更喜欢吃鱼而不是红肉。"
            },
            {
                english: "Egg", breakdown: "eg", chinese: "鸡蛋", pinyin: "jī dàn", emoji: "🥚", imageKeyword: "eggs",
                detailsEn: "A round or oval object laid by hens, eaten as food. Very nutritious.",
                detailsZh: "母鸡产下的圆形或椭圆形物体，作为食物食用。非常有营养。",
                exampleEn: "I eat two boiled eggs for breakfast every day.",
                exampleZh: "我每天早餐吃两个煮鸡蛋。"
            },
            {
                english: "Vegetable", breakdown: "vej-tuh-buhl", chinese: "蔬菜", pinyin: "shū cài", emoji: "🥬", imageKeyword: "vegetables",
                detailsEn: "A plant or part of a plant used as food. Essential for a healthy diet.",
                detailsZh: "用作食物的植物或植物的一部分。对健康饮食至关重要。",
                exampleEn: "You need to eat more green vegetables to be healthy.",
                exampleZh: "你需要多吃绿色蔬菜才能保持健康。"
            },
            {
                english: "Fruit", breakdown: "froot", chinese: "水果", pinyin: "shuǐ guǒ", emoji: "🍎", imageKeyword: "fruits",
                detailsEn: "The sweet or sour fleshy product of a tree or plant. High in vitamins.",
                detailsZh: "树木或植物的甜或酸的果肉产品。富含维生素。",
                exampleEn: "I eat a piece of fruit after every meal.",
                exampleZh: "我每餐后都会吃一个水果。"
            },
            {
                english: "Milk", breakdown: "milk", chinese: "牛奶", pinyin: "niú nǎi", emoji: "🥛", imageKeyword: "milk",
                detailsEn: "A white liquid produced by cows. Rich in calcium for strong bones.",
                detailsZh: "奶牛产的白色液体。富含钙，有助于骨骼强健。",
                exampleEn: "Children should drink milk every day to grow strong.",
                exampleZh: "孩子们应该每天喝牛奶以茁壮成长。"
            },
            {
                english: "Tea", breakdown: "tee", chinese: "茶", pinyin: "chá", emoji: "🍵", imageKeyword: "tea cup",
                detailsEn: "A hot drink made by steeping dried leaves in boiling water. Very popular in China.",
                detailsZh: "用沸水浸泡干燥叶子制成的热饮。在中国非常受欢迎。",
                exampleEn: "Would you like a cup of green tea after dinner?",
                exampleZh: "晚饭后想来一杯绿茶吗？"
            },
            {
                english: "Coffee", breakdown: "kof-ee", chinese: "咖啡", pinyin: "kā fēi", emoji: "☕", imageKeyword: "coffee cup",
                detailsEn: "A hot drink made from roasted coffee beans. Popular worldwide for its energy boost.",
                detailsZh: "由烘焙咖啡豆制成的热饮。因其提神效果而在全球广受欢迎。",
                exampleEn: "I cannot start my morning without a cup of coffee.",
                exampleZh: "我没有一杯咖啡就无法开始早晨的生活。"
            },
            {
                english: "Soup", breakdown: "soop", chinese: "汤", pinyin: "tāng", emoji: "🍲", imageKeyword: "soup bowl",
                detailsEn: "A liquid food made by boiling ingredients in water. Warming and nutritious.",
                detailsZh: "通过在水中煮沸食材制成的液体食物。温暖且有营养。",
                exampleEn: "This hot soup is perfect for a cold winter day.",
                exampleZh: "这碗热汤非常适合寒冷的冬天。"
            },
            {
                english: "Cake", breakdown: "kayk", chinese: "蛋糕", pinyin: "dàn gāo", emoji: "🍰", imageKeyword: "cake slice",
                detailsEn: "A sweet baked dessert, usually eaten on special occasions like birthdays.",
                detailsZh: "一种甜的烘焙甜点，通常在生日等特殊场合食用。",
                exampleEn: "We ordered a chocolate cake for her birthday party.",
                exampleZh: "我们为她的生日派对订了一个巧克力蛋糕。"
            },
            {
                english: "Spicy", breakdown: "spy-see", chinese: "辣", pinyin: "là", emoji: "🌶️", imageKeyword: "chili pepper",
                detailsEn: "Used to describe food with a strong, hot burning flavor from chili peppers.",
                detailsZh: "用来形容含有辣椒的强烈辛辣口味的食物。",
                exampleEn: "This soup is too spicy for me to eat.",
                exampleZh: "这汤对我来说太辣了吃不下。"
            },
            {
                english: "Sweet", breakdown: "sweet", chinese: "甜", pinyin: "tián", emoji: "🍬", imageKeyword: "candy",
                detailsEn: "A pleasant sugary taste. The opposite of sour, bitter, or salty.",
                detailsZh: "令人愉快的含糖味道。与酸、苦或咸相对。",
                exampleEn: "This mango is very sweet and juicy.",
                exampleZh: "这个芒果非常甜而多汁。"
            },
            {
                english: "Sour", breakdown: "sowr", chinese: "酸", pinyin: "suān", emoji: "🍋", imageKeyword: "lemon",
                detailsEn: "A sharp acidic taste like lemons or vinegar.",
                detailsZh: "像柠檬或醋一样的尖锐酸味。",
                exampleEn: "I love to put sour lemon juice on my fish.",
                exampleZh: "我喜欢在鱼上放酸柠檬汁。"
            },
            {
                english: "Menu", breakdown: "men-yoo", chinese: "菜单", pinyin: "cài dān", emoji: "📖", imageKeyword: "restaurant menu",
                detailsEn: "A list of food and drink items available in a restaurant.",
                detailsZh: "餐厅里提供的食物和饮料清单。",
                exampleEn: "Could we please see the dessert menu?",
                exampleZh: "能让我们看看甜点菜单吗？"
            },
            {
                english: "Restaurant", breakdown: "res-ter-ont", chinese: "餐厅", pinyin: "cān tīng", emoji: "🍽️", imageKeyword: "restaurant",
                detailsEn: "A place where people pay to sit and eat meals prepared and served on the premises.",
                detailsZh: "人们付钱坐着享用在现场准备和供应的餐食的地方。",
                exampleEn: "Let us go to the new Chinese restaurant downtown.",
                exampleZh: "我们去市中心那家新的中餐馆吧。"
            },
            {
                english: "Breakfast", breakdown: "brek-fust", chinese: "早餐", pinyin: "zǎo cān", emoji: "🥞", imageKeyword: "breakfast",
                detailsEn: "The first meal of the day, eaten in the morning. Very important for energy.",
                detailsZh: "一天中的第一顿饭，在早上吃。对精力非常重要。",
                exampleEn: "I never skip breakfast because it gives me energy for the day.",
                exampleZh: "我从不跳过早餐，因为它给我一天的精力。"
            },
            {
                english: "Lunch", breakdown: "lunch", chinese: "午餐", pinyin: "wǔ cān", emoji: "🥙", imageKeyword: "lunch",
                detailsEn: "The meal eaten in the middle of the day, usually around noon.",
                detailsZh: "在一天中间吃的饭，通常在中午左右。",
                exampleEn: "I usually eat lunch with my colleagues at work.",
                exampleZh: "我通常在工作时和同事一起吃午餐。"
            },
            {
                english: "Dinner", breakdown: "din-er", chinese: "晚餐", pinyin: "wǎn cān", emoji: "🍱", imageKeyword: "dinner",
                detailsEn: "The main meal of the day, eaten in the evening.",
                detailsZh: "一天中的主餐，在傍晚吃。",
                exampleEn: "Our family always eats dinner together at seven o'clock.",
                exampleZh: "我们家总是在七点一起吃晚餐。"
            }
        ]
    },
    {
        id: "level-4",
        title: "Level 4: Useful Phrases",
        description: "Putting words together into real sentences.",
        items: [
            {
                english: "I don't understand", breakdown: "eye dohnt un-der-stand", chinese: "我不明白", pinyin: "wǒ bù míng bái", emoji: "😕", imageKeyword: "confused",
                detailsEn: "A crucial phrase when learning a language, used when you are confused.",
                detailsZh: "学习语言时非常关键的句子，当你不清楚对方意思时使用。",
                exampleEn: "I'm sorry, you are speaking too fast and I don't understand.",
                exampleZh: "对不起，你说得太快了，我不明白。"
            },
            {
                english: "Where is...?", breakdown: "hwair iz", chinese: "...在哪里？", pinyin: "...zài nǎ lǐ?", emoji: "📍", imageKeyword: "map direction",
                detailsEn: "Used to ask the location of a person or place.",
                detailsZh: "用于询问某人或某地的位置。",
                exampleEn: "Excuse me, where is the nearest subway station?",
                exampleZh: "打扰一下，最近的地铁站在哪里？"
            },
            {
                english: "What is your name?", breakdown: "hwut iz yoor naym", chinese: "你叫什么名字？", pinyin: "nǐ jiào shén me míng zì", emoji: "📛", imageKeyword: "nametag",
                detailsEn: "The standard question to ask for someone's identity.",
                detailsZh: "询问他人身份的标准问题。",
                exampleEn: "Hello, it is nice to meet you. What is your name?",
                exampleZh: "你好，很高兴认识你。你叫什么名字？"
            },
            {
                english: "My name is...", breakdown: "my naym iz", chinese: "我的名字是...", pinyin: "wǒ de míng zì shì...", emoji: "🗣️", imageKeyword: "introduction",
                detailsEn: "Used to introduce yourself to others. Always followed by your name.",
                detailsZh: "用于向他人介绍自己的名字。",
                exampleEn: "My name is David and I am from Canada.",
                exampleZh: "我的名字是大卫，我来自加拿大。"
            },
            {
                english: "Can you speak slowly?", breakdown: "kan yoo speek sloh-lee", chinese: "你能说慢一点吗？", pinyin: "nǐ néng shuō màn yī diǎn ma", emoji: "🐢", imageKeyword: "slow",
                detailsEn: "Used when the speaker is talking too fast for you to follow.",
                detailsZh: "当对方语速太快你跟不上时使用。",
                exampleEn: "My English is not very good, can you please speak slowly?",
                exampleZh: "我的英语不太好，你能说慢一点吗？"
            },
            {
                english: "How much is this?", breakdown: "how much iz this", chinese: "这个多少钱？", pinyin: "zhè ge duō shǎo qián", emoji: "💰", imageKeyword: "shopping price",
                detailsEn: "The essential phrase for shopping and asking for prices.",
                detailsZh: "购物和询问价格时的基本用语。",
                exampleEn: "I want to buy this shirt. How much is this?",
                exampleZh: "我想买这件衬衫。这个多少钱？"
            },
            {
                english: "Where is the bathroom?", breakdown: "hwair iz the bath-room", chinese: "洗手间在哪里？", pinyin: "xǐ shǒu jiān zài nǎ lǐ", emoji: "🚻", imageKeyword: "restroom sign",
                detailsEn: "A very important question when traveling or in public places.",
                detailsZh: "旅行或在公共场所时非常重要的问题。",
                exampleEn: "Excuse me, could you point me to where the bathroom is?",
                exampleZh: "打扰一下，您能指给我洗手间在哪里吗？"
            },
            {
                english: "I am hungry", breakdown: "eye am hung-gree", chinese: "我饿了", pinyin: "wǒ è le", emoji: "🤤", imageKeyword: "hungry stomach",
                detailsEn: "Used to express that you want to eat food.",
                detailsZh: "用来表达你想吃东西了。",
                exampleEn: "I am so hungry! Can we go eat something now?",
                exampleZh: "我好饿！我们能去吃点东西吗？"
            },
            {
                english: "I am tired", breakdown: "eye am tyrd", chinese: "我累了", pinyin: "wǒ lèi le", emoji: "😴", imageKeyword: "tired",
                detailsEn: "Used to express that you are exhausted and need rest.",
                detailsZh: "用来表达你很疲惫需要休息。",
                exampleEn: "I am very tired after working all day.",
                exampleZh: "工作了一整天后我很累。"
            },
            {
                english: "I love you", breakdown: "eye luv yoo", chinese: "我爱你", pinyin: "wǒ ài nǐ", emoji: "❤️", imageKeyword: "love heart",
                detailsEn: "The most powerful phrase of affection in any language.",
                detailsZh: "在任何语言中最有力的爱意表达。",
                exampleEn: "I love you more than anything in the world.",
                exampleZh: "我爱你胜过世界上的一切。"
            },
            {
                english: "I need help", breakdown: "eye need help", chinese: "我需要帮助", pinyin: "wǒ xū yào bāng zhù", emoji: "🆘", imageKeyword: "help",
                detailsEn: "Used when you are in trouble or need assistance from others.",
                detailsZh: "当你遇到麻烦或需要他人帮助时使用。",
                exampleEn: "I need help with my homework, can you assist me?",
                exampleZh: "我需要帮助做作业，你能帮我吗？"
            },
            {
                english: "Can you help me?", breakdown: "kan yoo help mee", chinese: "你能帮我吗？", pinyin: "nǐ néng bāng wǒ ma", emoji: "🙏", imageKeyword: "asking help",
                detailsEn: "Politely asking someone to assist you with something.",
                detailsZh: "礼貌地请求某人帮助你做某事。",
                exampleEn: "Can you help me carry these heavy bags?",
                exampleZh: "你能帮我提这些重包吗？"
            },
            {
                english: "I don't know", breakdown: "eye dohnt noh", chinese: "我不知道", pinyin: "wǒ bù zhī dào", emoji: "🤷", imageKeyword: "shrug",
                detailsEn: "Used when you do not have the information or answer.",
                detailsZh: "当你没有信息或答案时使用。",
                exampleEn: "I am sorry, I don't know where the station is.",
                exampleZh: "对不起，我不知道车站在哪里。"
            },
            {
                english: "What time is it?", breakdown: "hwut tym iz it", chinese: "现在几点了？", pinyin: "xiàn zài jǐ diǎn le", emoji: "⌚", imageKeyword: "wristwatch",
                detailsEn: "Used to ask for the current time.",
                detailsZh: "用于询问当前时间。",
                exampleEn: "Excuse me, what time is it? I am late for my class.",
                exampleZh: "打扰一下，现在几点了？我上课要迟到了。"
            },
            {
                english: "How do you say...?", breakdown: "how doo yoo say", chinese: "...怎么说？", pinyin: "...zěn me shuō?", emoji: "💬", imageKeyword: "speech bubble",
                detailsEn: "Used to ask how to say a word or phrase in another language.",
                detailsZh: "用于询问如何用另一种语言说某个词或短语。",
                exampleEn: "How do you say 'thank you' in Chinese?",
                exampleZh: "谢谢用中文怎么说？"
            },
            {
                english: "What does it mean?", breakdown: "hwut duz it meen", chinese: "这是什么意思？", pinyin: "zhè shì shén me yì si", emoji: "🤔", imageKeyword: "thinking",
                detailsEn: "Used to ask for the meaning or definition of something.",
                detailsZh: "用于询问某事的含义或定义。",
                exampleEn: "I saw this new word. What does it mean?",
                exampleZh: "我看到了这个新单词，这是什么意思？"
            },
            {
                english: "Can I try?", breakdown: "kan eye try", chinese: "我可以试试吗？", pinyin: "wǒ kě yǐ shì shì ma", emoji: "🖐️", imageKeyword: "trying",
                detailsEn: "Used when you want permission to attempt something.",
                detailsZh: "当你想获得尝试某事的许可时使用。",
                exampleEn: "This looks delicious. Can I try a little?",
                exampleZh: "这个看起来很好吃。我可以试试吗？"
            },
            {
                english: "That is correct", breakdown: "that iz kuh-rekt", chinese: "那是正确的", pinyin: "nà shì zhèng quē de", emoji: "✔️", imageKeyword: "correct answer",
                detailsEn: "Used to confirm that something is right or accurate.",
                detailsZh: "用于确认某事是正确的或准确的。",
                exampleEn: "Yes, that is correct! You are learning very fast.",
                exampleZh: "是的，那是正确的！你学得很快。"
            },
            {
                english: "I agree", breakdown: "eye uh-gree", chinese: "我同意", pinyin: "wǒ tóng yì", emoji: "👍", imageKeyword: "thumbs up",
                detailsEn: "Used to express that you share the same opinion as someone.",
                detailsZh: "用于表达你与某人持有相同观点。",
                exampleEn: "I agree with your idea, let us do it that way.",
                exampleZh: "我同意你的想法，让我们那样做吧。"
            },
            {
                english: "Let us go", breakdown: "let us goh", chinese: "走吧", pinyin: "zǒu ba", emoji: "🚶", imageKeyword: "walking",
                detailsEn: "An informal suggestion to start moving or leaving a place.",
                detailsZh: "开始行动或离开某地的非正式建议。",
                exampleEn: "The movie starts in ten minutes. Let us go now!",
                exampleZh: "电影十分钟后开始。我们走吧！"
            },
            {
                english: "I am happy", breakdown: "eye am hap-ee", chinese: "我很开心", pinyin: "wǒ hěn kāi xīn", emoji: "😄", imageKeyword: "happy person",
                detailsEn: "Used to express a feeling of joy and contentment.",
                detailsZh: "用来表达喜悦和满足感。",
                exampleEn: "I am so happy that you came to visit me today.",
                exampleZh: "我很开心你今天来看我了。"
            },
            {
                english: "Be careful", breakdown: "bee kair-ful", chinese: "小心", pinyin: "xiǎo xīn", emoji: "⚠️", imageKeyword: "warning sign",
                detailsEn: "A warning to pay attention and avoid danger.",
                detailsZh: "提醒注意并避免危险的警告。",
                exampleEn: "Be careful when you cross the busy road.",
                exampleZh: "过繁忙的马路时要小心。"
            }
        ]
    },
    {
        id: "level-5",
        title: "Level 5: Daily Life",
        description: "Commonly used words in everyday life.",
        items: [
            {
                english: "Work", breakdown: "wurk", chinese: "工作", pinyin: "gōng zuò", emoji: "💼", imageKeyword: "office work",
                detailsEn: "Activity involving mental or physical effort done to achieve a result.",
                detailsZh: "为了达到某种结果而进行的需要脑力或体力努力的活动。",
                exampleEn: "I have a lot of work to finish before the weekend.",
                exampleZh: "在周末之前我有很多工作要完成。"
            },
            {
                english: "Sleep", breakdown: "sleep", chinese: "睡觉", pinyin: "shuì jiào", emoji: "🛌", imageKeyword: "sleeping bed",
                detailsEn: "A condition of rest for the body and mind that recurs every night.",
                detailsZh: "每晚都会发生的身心休息状态。",
                exampleEn: "I am very tired and I need to get some sleep.",
                exampleZh: "我非常累，我需要睡一会儿。"
            },
            {
                english: "Phone", breakdown: "fohn", chinese: "手机", pinyin: "shǒu jī", emoji: "📱", imageKeyword: "smartphone",
                detailsEn: "A portable electronic device used for communication, browsing, and more.",
                detailsZh: "用于通信、浏览等的便携式电子设备。",
                exampleEn: "I lost my phone and I cannot call my friends.",
                exampleZh: "我弄丢了手机，无法给朋友打电话。"
            },
            {
                english: "Money", breakdown: "mun-ee", chinese: "钱", pinyin: "qián", emoji: "💵", imageKeyword: "money cash",
                detailsEn: "A medium of exchange in the form of coins and banknotes.",
                detailsZh: "以硬币和纸币形式存在的交换媒介。",
                exampleEn: "Do you have enough money to buy the tickets?",
                exampleZh: "你有足够的钱买票吗？"
            },
            {
                english: "Home", breakdown: "hohm", chinese: "家", pinyin: "jiā", emoji: "🏠", imageKeyword: "house home",
                detailsEn: "The place where one lives permanently, especially with family.",
                detailsZh: "一个人永久居住的地方，特别是和家人在一起。",
                exampleEn: "After a long day of traveling, it feels great to be home.",
                exampleZh: "经过漫长的一天旅行后，回到家感觉真好。"
            },
            {
                english: "Friend", breakdown: "frend", chinese: "朋友", pinyin: "péng yǒu", emoji: "👫", imageKeyword: "friends together",
                detailsEn: "A person whom one knows and with whom one has mutual affection.",
                detailsZh: "认识并与之有深厚感情联系的人。",
                exampleEn: "She is my best friend from high school.",
                exampleZh: "她是我高中时最好的朋友。"
            },
            {
                english: "School", breakdown: "skool", chinese: "学校", pinyin: "xué xiào", emoji: "🏫", imageKeyword: "school building",
                detailsEn: "An institution for educating children and young people.",
                detailsZh: "教育儿童和年轻人的机构。",
                exampleEn: "The children take the bus to school every morning.",
                exampleZh: "孩子们每天早上坐公交车去学校。"
            },
            {
                english: "Car", breakdown: "kar", chinese: "汽车", pinyin: "qì chē", emoji: "🚗", imageKeyword: "car road",
                detailsEn: "A four-wheeled road vehicle powered by an engine.",
                detailsZh: "由发动机驱动的四轮公路车辆。",
                exampleEn: "I parked my car in the garage across the street.",
                exampleZh: "我把汽车停在街对面的车库里了。"
            },
            {
                english: "Book", breakdown: "book", chinese: "书", pinyin: "shū", emoji: "📚", imageKeyword: "open book",
                detailsEn: "A written or printed work consisting of pages in a cover.",
                detailsZh: "由封面内页面组成的书面或印刷作品。",
                exampleEn: "I read a book for thirty minutes every night before bed.",
                exampleZh: "我每晚睡前读三十分钟的书。"
            },
            {
                english: "Doctor", breakdown: "dok-ter", chinese: "医生", pinyin: "yī shēng", emoji: "👨‍⚕️", imageKeyword: "doctor hospital",
                detailsEn: "A person qualified to practice medicine and treat sick people.",
                detailsZh: "有资格行医和治疗病人的人。",
                exampleEn: "You should see a doctor about that cough.",
                exampleZh: "你应该去看医生处理那个咳嗽。"
            },
            {
                english: "Hospital", breakdown: "hos-pit-ul", chinese: "医院", pinyin: "yī yuàn", emoji: "🏥", imageKeyword: "hospital building",
                detailsEn: "An institution where sick or injured people receive medical treatment.",
                detailsZh: "病人或受伤者接受医疗治疗的机构。",
                exampleEn: "My mother works as a nurse in the local hospital.",
                exampleZh: "我妈妈在当地医院担任护士。"
            },
            {
                english: "Market", breakdown: "mar-kit", chinese: "市场", pinyin: "shì chǎng", emoji: "🏪", imageKeyword: "market stall",
                detailsEn: "A place where people buy and sell goods and food.",
                detailsZh: "人们买卖商品和食物的地方。",
                exampleEn: "I go to the fresh market every Sunday morning.",
                exampleZh: "我每个星期天早上都去新鲜市场。"
            },
            {
                english: "Bank", breakdown: "bangk", chinese: "银行", pinyin: "yín háng", emoji: "🏦", imageKeyword: "bank building",
                detailsEn: "A financial institution that holds money and provides loans.",
                detailsZh: "持有资金并提供贷款的金融机构。",
                exampleEn: "I need to go to the bank to withdraw some money.",
                exampleZh: "我需要去银行取一些钱。"
            },
            {
                english: "Park", breakdown: "park", chinese: "公园", pinyin: "gōng yuán", emoji: "🌳", imageKeyword: "city park",
                detailsEn: "A large public green space in a city used for recreation.",
                detailsZh: "城市中用于休闲的大型公共绿地。",
                exampleEn: "I take my dog for a walk in the park every evening.",
                exampleZh: "我每天傍晚带狗去公园散步。"
            },
            {
                english: "Bus", breakdown: "bus", chinese: "公共汽车", pinyin: "gōng gòng qì chē", emoji: "🚌", imageKeyword: "city bus",
                detailsEn: "A large road vehicle that carries many passengers along a fixed route.",
                detailsZh: "沿固定路线运载许多乘客的大型公路车辆。",
                exampleEn: "I take the bus to school because it is cheap.",
                exampleZh: "我坐公共汽车去上学，因为便宜。"
            },
            {
                english: "Train", breakdown: "trayn", chinese: "火车", pinyin: "huǒ chē", emoji: "🚆", imageKeyword: "train station",
                detailsEn: "A connected series of railway carriages moved by an engine.",
                detailsZh: "由发动机驱动的一系列相连铁路车厢。",
                exampleEn: "The high-speed train from Beijing to Shanghai is very fast.",
                exampleZh: "从北京到上海的高速火车非常快。"
            },
            {
                english: "Weather", breakdown: "weth-er", chinese: "天气", pinyin: "tiān qì", emoji: "🌤️", imageKeyword: "weather sky",
                detailsEn: "The atmospheric conditions (rain, sun, wind) at a particular place and time.",
                detailsZh: "特定地点和时间的大气条件（雨、太阳、风）。",
                exampleEn: "The weather today is perfect for going to the beach.",
                exampleZh: "今天的天气非常适合去海滩。"
            },
            {
                english: "Rain", breakdown: "rayn", chinese: "雨", pinyin: "yǔ", emoji: "🌧️", imageKeyword: "rain drops",
                detailsEn: "Water falling from clouds in drops. Makes plants grow.",
                detailsZh: "从云端以水滴形式落下的水。有助于植物生长。",
                exampleEn: "Don't forget to bring an umbrella because it will rain today.",
                exampleZh: "别忘了带伞，因为今天会下雨。"
            },
            {
                english: "Sun", breakdown: "sun", chinese: "太阳", pinyin: "tài yáng", emoji: "☀️", imageKeyword: "bright sun",
                detailsEn: "The star at the center of the solar system that gives us light and heat.",
                detailsZh: "太阳系中心的恒星，给我们带来光和热。",
                exampleEn: "The sun rises in the east and sets in the west.",
                exampleZh: "太阳从东方升起，从西方落下。"
            },
            {
                english: "Family", breakdown: "fam-uh-lee", chinese: "家人", pinyin: "jiā rén", emoji: "👨‍👩‍👧‍👦", imageKeyword: "family portrait",
                detailsEn: "A group of people related by blood, marriage, or adoption.",
                detailsZh: "由血缘、婚姻或收养关系联系在一起的一群人。",
                exampleEn: "My family has dinner together every Sunday evening.",
                exampleZh: "我的家人每个星期天傍晚一起吃晚饭。"
            },
            {
                english: "Computer", breakdown: "kum-pyoo-ter", chinese: "电脑", pinyin: "diàn nǎo", emoji: "💻", imageKeyword: "laptop computer",
                detailsEn: "An electronic device for storing and processing data.",
                detailsZh: "用于存储和处理数据的电子设备。",
                exampleEn: "I use my computer to study English every day.",
                exampleZh: "我每天用电脑学习英语。"
            },
            {
                english: "Music", breakdown: "myoo-zik", chinese: "音乐", pinyin: "yīn yuè", emoji: "🎵", imageKeyword: "music notes",
                detailsEn: "Vocal or instrumental sounds combined to produce beauty of form and expression.",
                detailsZh: "将声乐或器乐音调组合在一起产生美感和表达的艺术。",
                exampleEn: "I listen to music every morning while I get ready.",
                exampleZh: "我每天早上准备时都听音乐。"
            }
        ]
    },
    {
        id: "level-6",
        title: "Level 6: Shopping & Money",
        description: "Vocabulary for shopping, prices, and daily transactions.",
        cefrLevel: "A2",
        emoji: "🛍️",
        color: "from-pink-400 to-rose-400",
        category: "Daily Life",
        items: [
            {
                english: "Shop", breakdown: "shop", chinese: "购物", pinyin: "gòu wù", emoji: "🛍️", imageKeyword: "shopping bag",
                detailsEn: "A place where you can buy goods. Also used as a verb meaning to buy things.",
                detailsZh: "你可以买到商品的地方。也用作动词表示购买东西。",
                exampleEn: "I like to shop at the weekend for fresh vegetables.",
                exampleZh: "我喜欢周末去购物买新鲜蔬菜。"
            },
            {
                english: "Store", breakdown: "stor", chinese: "商店", pinyin: "shāng diàn", emoji: "🏪", imageKeyword: "retail store",
                detailsEn: "A shop where goods are sold, usually smaller than a supermarket.",
                detailsZh: "出售商品的商店，通常比超市小。",
                exampleEn: "The store on the corner sells fresh bread every morning.",
                exampleZh: "拐角处的商店每天早上卖新鲜面包。"
            },
            {
                english: "Price", breakdown: "prys", chinese: "价格", pinyin: "jià gé", emoji: "💰", imageKeyword: "price tag",
                detailsEn: "The amount of money expected or required for something.",
                detailsZh: "某物所需或预期的金额。",
                exampleEn: "What is the price of this beautiful jacket?",
                exampleZh: "这件漂亮的夹克多少钱？"
            },
            {
                english: "Buy", breakdown: "by", chinese: "买", pinyin: "mǎi", emoji: "💳", imageKeyword: "buying online",
                detailsEn: "To obtain something by paying money for it.",
                detailsZh: "通过付钱获得某物。",
                exampleEn: "I want to buy a new phone because my old one is broken.",
                exampleZh: "我想买一部新手机，因为我的旧手机坏了。"
            },
            {
                english: "Sell", breakdown: "sel", chinese: "卖", pinyin: "mài", emoji: "💵", imageKeyword: "selling goods",
                detailsEn: "To give or hand over something in exchange for money.",
                detailsZh: "为了钱而交出或转让某物。",
                exampleEn: "My neighbor sells fresh eggs from her chickens every Saturday.",
                exampleZh: "我邻居每个星期六卖她鸡生的新鲜鸡蛋。"
            },
            {
                english: "Expensive", breakdown: "ik-spen-siv", chinese: "贵", pinyin: "guì", emoji: "💎", imageKeyword: "expensive luxury",
                detailsEn: "Costing a lot of money. The opposite of cheap.",
                detailsZh: "花费很多钱。与“便宜”相对。",
                exampleEn: "This restaurant is too expensive for a student budget.",
                exampleZh: "这家餐厅对学生预算来说太贵了。"
            },
            {
                english: "Cheap", breakdown: "cheep", chinese: "便宜", pinyin: "pián yi", emoji: "🏷️", imageKeyword: "cheap discount",
                detailsEn: "Low in price or costing very little money.",
                detailsZh: "价格低或花费很少钱。",
                exampleEn: "I found a cheap flight to Tokyo for the holidays.",
                exampleZh: "我找到了去东京的廉价航班度假。"
            },
            {
                english: "Discount", breakdown: "dis-kownt", chinese: "折扣", pinyin: "zhé kòu", emoji: "🏷️", imageKeyword: "discount sale",
                detailsEn: "A reduction in the usual price of something.",
                detailsZh: "某物通常价格的降低。",
                exampleEn: "The store gave me a twenty percent discount on shoes.",
                exampleZh: "商店给了我百分之二十的鞋子折扣。"
            },
            {
                english: "Wallet", breakdown: "wol-et", chinese: "钱包", pinyin: "qián bāo", emoji: "👛", imageKeyword: "wallet cash",
                detailsEn: "A small flat case used for holding money and cards.",
                detailsZh: "用来装钱和卡片的小扁平盒子。",
                exampleEn: "I left my wallet at home so I cannot pay for lunch.",
                exampleZh: "我把钱包忘在家里了，所以无法付午餐钱。"
            },
            {
                english: "Cash", breakdown: "kash", chinese: "现金", pinyin: "xiàn jīn", emoji: "💵", imageKeyword: "cash money",
                detailsEn: "Money in the form of coins or banknotes, not cards or checks.",
                detailsZh: "以硬币或纸币形式存在的钱，不是卡或支票。",
                exampleEn: "The taxi driver only accepts cash, no credit cards.",
                exampleZh: "出租车司机只收现金，不接受信用卡。"
            },
            {
                english: "Receipt", breakdown: "ri-seet", chinese: "收据", pinyin: "shōu jù", emoji: "🧾", imageKeyword: "shopping receipt",
                detailsEn: "A piece of paper proving that you paid for something.",
                detailsZh: "证明你为某物付了钱的纸。",
                exampleEn: "Keep your receipt if you want to return the item later.",
                exampleZh: "如果你想以后退货，请保留收据。"
            },
            {
                english: "Bargain", breakdown: "bar-guhn", chinese: "讨价还价", pinyin: "tǎo jià huán jià", emoji: "🤝", imageKeyword: "bargaining market",
                detailsEn: "To negotiate a lower price, especially in markets.",
                detailsZh: "协商更低的价格，尤其是在市场里。",
                exampleEn: "We bargained with the seller and got the shoes for half price.",
                exampleZh: "我们和卖主讨价还价，以半价买到了鞋。"
            },
            {
                english: "Customer", breakdown: "kus-tuh-mer", chinese: "顾客", pinyin: "gù kè", emoji: "🧑", imageKeyword: "customer service",
                detailsEn: "A person who buys goods or services from a business.",
                detailsZh: "从企业购买商品或服务的人。",
                exampleEn: "The customer complained that the coffee was too cold.",
                exampleZh: "顾客投诉咖啡太冷了。"
            },
            {
                english: "Return", breakdown: "ri-turn", chinese: "退货", pinyin: "tuì huò", emoji: "↩️", imageKeyword: "return policy",
                detailsEn: "To take back something you bought to the store for a refund.",
                detailsZh: "把你买的东西带回商店退款。",
                exampleEn: "I need to return this shirt because it does not fit.",
                exampleZh: "我需要退货这件衬衫因为它不合身。"
            },
            {
                english: "Receipt", breakdown: "ri-seet", chinese: "发票", pinyin: "fā piào", emoji: "🧾", imageKeyword: "invoice bill",
                detailsEn: "An itemized bill showing what you purchased and the total cost.",
                detailsZh: "列明所购商品和总费用的明细账单。",
                exampleEn: "Can I get a receipt for all these items please?",
                exampleZh: "能给我这些商品的发票吗？"
            },
            {
                english: "Card", breakdown: "kahrd", chinese: "卡", pinyin: "kǎ", emoji: "💳", imageKeyword: "credit card",
                detailsEn: "A small rectangular piece of plastic used for payment or identification.",
                detailsZh: "用于支付或身份验证的小长方形塑料片。",
                exampleEn: "Do you accept credit card or only cash here?",
                exampleZh: "你们这里接受信用卡还是只收现金？"
            },
            {
                english: "Budget", breakdown: "bud-jet", chinese: "预算", pinyin: "yù suàn", emoji: "📊", imageKeyword: "budget planning",
                detailsEn: "The amount of money you plan to spend on something.",
                detailsZh: "你计划在某事上花费的金额。",
                exampleEn: "I set a monthly budget for groceries and entertainment.",
                exampleZh: "我为杂货和娱乐设定了每月预算。"
            }
        ]
    },
    {
        id: "level-7",
        title: "Level 7: Travel & Directions",
        description: "Essential words for traveling and finding your way.",
        cefrLevel: "A2",
        emoji: "✈️",
        color: "from-sky-400 to-blue-400",
        category: "Daily Life",
        items: [
            {
                english: "Airport", breakdown: "air-port", chinese: "机场", pinyin: "jī chǎng", emoji: "✈️", imageKeyword: "airport terminal",
                detailsEn: "A place where planes land and take off, with terminals for passengers.",
                detailsZh: "飞机降落和起飞的地方，有供乘客使用的航站楼。",
                exampleEn: "We need to arrive at the airport two hours before the flight.",
                exampleZh: "我们需要在航班起飞前两小时到达机场。"
            },
            {
                english: "Passport", breakdown: "pas-port", chinese: "护照", pinyin: "hù zhào", emoji: "🛂", imageKeyword: "passport document",
                detailsEn: "An official document identifying you as a citizen of a country, used for international travel.",
                detailsZh: "证明你是某国公民的官方文件，用于国际旅行。",
                exampleEn: "Don't forget your passport when traveling abroad.",
                exampleZh: "出国旅行时别忘了带护照。"
            },
            {
                english: "Luggage", breakdown: "lug-ij", chinese: "行李", pinyin: "xíng lǐ", emoji: "🧳", imageKeyword: "travel luggage",
                detailsEn: "Suitcases and bags that contain your belongings when traveling.",
                detailsZh: "旅行时装有你物品的行李箱和包。",
                exampleEn: "The luggage on this flight is limited to twenty kilograms.",
                exampleZh: "这次航班的行李限重20公斤。"
            },
            {
                english: "Ticket", breakdown: "tik-it", chinese: "票", pinyin: "piào", emoji: "🎫", imageKeyword: "train ticket",
                detailsEn: "A piece of paper that allows you to travel on a plane, train, bus, or enter an event.",
                detailsZh: "允许你乘坐飞机、火车、巴士或进入活动场所的纸片。",
                exampleEn: "I lost my ticket and had to buy a new one.",
                exampleZh: "我把票弄丢了，不得不买了一张新的。"
            },
            {
                english: "Hotel", breakdown: "ho-tel", chinese: "酒店", pinyin: "jiǔ diàn", emoji: "🏨", imageKeyword: "hotel building",
                detailsEn: "A building where people can pay to stay when traveling.",
                detailsZh: "人们旅行时可以付费住宿的建筑。",
                exampleEn: "The hotel near the beach offers free breakfast.",
                exampleZh: "海滩附近的酒店提供免费早餐。"
            },
            {
                english: "Reserve", breakdown: "ri-zerv", chinese: "预订", pinyin: "yù dìng", emoji: "📅", imageKeyword: "hotel reservation",
                detailsEn: "To arrange for something to be kept for your use in the future.",
                detailsZh: "为将来使用安排保留某物。",
                exampleEn: "I reserved a table for two at the restaurant for seven PM.",
                exampleZh: "我在餐厅预订了一张两人桌，晚上七点。"
            },
            {
                english: "Map", breakdown: "map", chinese: "地图", pinyin: "dì tú", emoji: "🗺️", imageKeyword: "world map",
                detailsEn: "A drawing of the earth's surface or a city that shows directions and locations.",
                detailsZh: "显示方向和位置的地球表面或城市的图画。",
                exampleEn: "I always carry a map when I explore a new city.",
                exampleZh: "我在探索新城市时总是随身带地图。"
            },
            {
                english: "Destination", breakdown: "des-ti-nay-shun", chinese: "目的地", pinyin: "mù dì dì", emoji: "📍", imageKeyword: "travel destination",
                detailsEn: "The place where someone is going or something is being sent.",
                detailsZh: "某人要去或某物被送到的地方。",
                exampleEn: "Our destination is Kyoto, an ancient city in Japan.",
                exampleZh: "我们的目的地是日本古城京都。"
            },
            {
                english: "Journey", breakdown: "jur-nee", chinese: "旅程", pinyin: "lǚ chéng", emoji: "🚗", imageKeyword: "long journey",
                detailsEn: "An act of traveling from one place to another, usually over a long distance.",
                detailsZh: "从一个地方到另一个地方旅行的行为，通常是长距离的。",
                exampleEn: "The journey from Beijing to Shanghai takes about two hours by train.",
                exampleZh: "从北京到上海的旅程坐火车大约需要两小时。"
            },
            {
                english: "Explore", breakdown: "ek-splor", chinese: "探索", pinyin: "tàn suǒ", emoji: "🧭", imageKeyword: "exploring nature",
                detailsEn: "To travel through a place to learn about it or find something.",
                detailsZh: "穿越某地以了解它或找到某物。",
                exampleEn: "We have three days to explore the ancient city.",
                exampleZh: "我们有三天时间探索这座古城。"
            },
            {
                english: "Souvenir", breakdown: "soo-ven-eer", chinese: "纪念品", pinyin: "jì niàn pǐn", emoji: "🎁", imageKeyword: "travel souvenir",
                detailsEn: "Something you buy or keep as a reminder of a place you visited.",
                detailsZh: "你购买或保留的作为访问过某地的纪念的东西。",
                exampleEn: "I bought a beautiful souvenir for my mother from Japan.",
                exampleZh: "我从日本给妈妈买了一个漂亮的纪念品。"
            },
            {
                english: "Customs", breakdown: "kus-tumz", chinese: "海关", pinyin: "hǎi guān", emoji: "🛃", imageKeyword: "customs airport",
                detailsEn: "The place at an airport or border where officials check your bags.",
                detailsZh: "机场或边境上官员检查你行李的地方。",
                exampleEn: "We waited in the customs line for thirty minutes.",
                exampleZh: "我们在海关排队等了30分钟。"
            },
            {
                english: "Camping", breakdown: "kam-ping", chinese: "露营", pinyin: "lù yíng", emoji: "⛺", imageKeyword: "camping tent",
                detailsEn: "The activity of staying in a tent outdoors, usually in nature.",
                detailsZh: "通常在户外大自然中住在帐篷里的活动。",
                exampleEn: "Camping by the lake is our favorite summer activity.",
                exampleZh: "在湖边露营是我们最喜欢的夏季活动。"
            },
            {
                english: "Resort", breakdown: "ri-zort", chinese: "度假村", pinyin: "dù jiù cūn", emoji: "🏖️", imageKeyword: "beach resort",
                detailsEn: "A place where people go on holiday, often with hotels and entertainment.",
                detailsZh: "人们去度假的地方，通常有酒店和娱乐设施。",
                exampleEn: "We stayed at a luxury resort on the tropical island.",
                exampleZh: "我们住在那座热带岛屿上的豪华度假村。"
            },
            {
                english: "Guide", breakdown: "gyd", chinese: "导游", pinyin: "dǎo yóu", emoji: "🧑‍💼", imageKeyword: "tour guide",
                detailsEn: "A person whose job is to show tourists around a place.",
                detailsZh: "带游客参观某地的人。",
                exampleEn: "Our guide knew all the history of the ancient temple.",
                exampleZh: "我们的导游知道这座古庙的所有历史。"
            },
            {
                english: "Agenda", breakdown: "uh-jen-duh", chinese: "行程", pinyin: "xíng chéng", emoji: "📋", imageKeyword: "travel agenda",
                detailsEn: "A list of things to do or places to visit during a journey.",
                detailsZh: "旅行中要做的事情或要参观的地方的清单。",
                exampleEn: "I made an agenda for our three-day trip to Seoul.",
                exampleZh: "我为我们的三天首尔之旅做了行程安排。"
            }
        ]
    },
    {
        id: "level-8",
        title: "Level 8: Health & Fitness",
        description: "Words about health, body, and staying fit.",
        cefrLevel: "B1",
        emoji: "🏥",
        color: "from-red-400 to-pink-400",
        category: "Daily Life",
        items: [
            {
                english: "Symptom", breakdown: "simp-tuhm", chinese: "症状", pinyin: "zhèng zhuàng", emoji: "🤒", imageKeyword: "health symptom",
                detailsEn: "A physical or mental change that indicates an illness or condition.",
                detailsZh: "表明疾病或状况的身体或精神变化。",
                exampleEn: "The most common symptom of a cold is a runny nose.",
                exampleZh: "感冒最常见的症状是流鼻涕。"
            },
            {
                english: "Fever", breakdown: "fee-ver", chinese: "发烧", pinyin: "fā shāo", emoji: "🌡️", imageKeyword: "fever thermometer",
                detailsEn: "A body temperature that is higher than normal, usually a sign of infection.",
                detailsZh: "高于正常的体温，通常是感染的迹象。",
                exampleEn: "The child has a fever so we need to see a doctor.",
                exampleZh: "孩子发烧了，所以我们需要看医生。"
            },
            {
                english: "Cough", breakdown: "kof", chinese: "咳嗽", pinyin: "ké sou", emoji: "🤧", imageKeyword: "coughing",
                detailsEn: "A sudden release of air from the lungs, often a sign of illness.",
                detailsZh: "从肺部突然释放空气，通常是生病的迹象。",
                exampleEn: "His cough has lasted for three days and will not go away.",
                exampleZh: "他的咳嗽已经三天了，还不好。"
            },
            {
                english: "Headache", breakdown: "hed-ayk", chinese: "头痛", pinyin: "tóu tòng", emoji: "🤕", imageKeyword: "headache pain",
                detailsEn: "A continuous pain in the head.",
                detailsZh: "头部持续的疼痛。",
                exampleEn: "I have a terrible headache from looking at the screen too long.",
                exampleZh: "我因为看屏幕太久而头痛得厉害。"
            },
            {
                english: "Allergy", breakdown: "al-er-jee", chinese: "过敏", pinyin: "guò mǐn", emoji: "🤧", imageKeyword: "allergy sneezing",
                detailsEn: "A damaging immune response to a substance like pollen or food.",
                detailsZh: "对花粉或食物等物质的损害性免疫反应。",
                exampleEn: "My allergy to pollen is worse in the spring.",
                exampleZh: "我对花粉的过敏在春天更严重。"
            },
            {
                english: "Exercise", breakdown: "ek-ser-syz", chinese: "锻炼", pinyin: "duàn liàn", emoji: "🏃", imageKeyword: "gym exercise",
                detailsEn: "Activity that requires physical effort and is done to stay healthy.",
                detailsZh: "需要体力付出、为了保持健康而进行的活动。",
                exampleEn: "I exercise for thirty minutes every morning before work.",
                exampleZh: "我每天早上工作前锻炼30分钟。"
            },
            {
                english: "Diet", breakdown: "dy-it", chinese: "饮食", pinyin: "yǐn shí", emoji: "🥗", imageKeyword: "healthy diet",
                detailsEn: "The kinds of food that a person habitually eats.",
                detailsZh: "一个人习惯吃的食物的种类。",
                exampleEn: "A balanced diet with vegetables and protein is very important.",
                exampleZh: "均衡饮食，蔬菜和蛋白质非常重要。"
            },
            {
                english: "Stress", breakdown: "stres", chinese: "压力", pinyin: "yā lì", emoji: "😫", imageKeyword: "stress work",
                detailsEn: "Pressure or worry caused by problems in work or life.",
                detailsZh: "由工作或生活中的问题引起的压力或担忧。",
                exampleEn: "Too much stress can cause problems with sleep and health.",
                exampleZh: "太多压力会导致睡眠和健康问题。"
            },
            {
                english: "Recover", breakdown: "ri-kuv-er", chinese: "康复", pinyin: "kāng fù", emoji: "🌿", imageKeyword: "recovery health",
                detailsEn: "To return to a normal state of health after illness or injury.",
                detailsZh: "在生病或受伤后恢复正常健康状态。",
                exampleEn: "She is recovering well after her surgery last week.",
                exampleZh: "她在上周的手术后恢复得很好。"
            },
            {
                english: "Appointment", breakdown: "uh-point-ment", chinese: "预约", pinyin: "yù yuē", emoji: "📅", imageKeyword: "doctor appointment",
                detailsEn: "An arrangement to meet someone or visit a place at a specific time.",
                detailsZh: "在特定时间见某人或访问某地的安排。",
                exampleEn: "I have an appointment with the dentist on Friday morning.",
                exampleZh: "我周五早上有个牙医预约。"
            },
            {
                english: "Bandage", breakdown: "ban-dij", chinese: "绷带", pinyin: "bēng dài", emoji: "🩹", imageKeyword: "bandage wound",
                detailsEn: "A strip of material used to cover and protect a wound or injury.",
                detailsZh: "用来覆盖和保护伤口或损伤的材料条。",
                exampleEn: "The nurse put a bandage on my cut finger.",
                exampleZh: "护士在我割破的手指上放了绷带。"
            },
            {
                english: "Ambulance", breakdown: "am-byuh-luhns", chinese: "救护车", pinyin: "jiù hù chē", emoji: "🚑", imageKeyword: "ambulance emergency",
                detailsEn: "A vehicle equipped to take sick or injured people to hospital.",
                detailsZh: "配备用来送病人或受伤者去医院的车辆。",
                exampleEn: "The ambulance arrived within five minutes of the call.",
                exampleZh: "救护车在呼叫后五分钟内到达了。"
            },
            {
                english: "Relax", breakdown: "ri-laks", chinese: "放松", pinyin: "fàng sōng", emoji: "🧘", imageKeyword: "relaxation spa",
                detailsEn: "To rest and enjoy yourself after working hard.",
                detailsZh: "努力工后休息和享受自己。",
                exampleEn: "You need to relax more and take breaks during the day.",
                exampleZh: "你需要多放松，在白天休息一下。"
            },
            {
                english: "Prevent", breakdown: "pri-vent", chinese: "预防", pinyin: "yù fáng", emoji: "🛡️", imageKeyword: "prevention health",
                detailsEn: "To stop something bad from happening.",
                detailsZh: "阻止坏事发生。",
                exampleEn: "Regular exercise helps prevent many diseases.",
                exampleZh: "定期锻炼有助于预防许多疾病。"
            }
        ]
    },
    {
        id: "level-9",
        title: "Level 9: Technology & Communication",
        description: "Modern words for devices, internet, and communication.",
        cefrLevel: "B1",
        emoji: "💻",
        color: "from-violet-400 to-indigo-400",
        category: "Daily Life",
        items: [
            {
                english: "Internet", breakdown: "in-ter-net", chinese: "互联网", pinyin: "hù lián wǎng", emoji: "🌐", imageKeyword: "internet network",
                detailsEn: "A global system of connected computer networks that allows information sharing.",
                detailsZh: "允许信息共享的全球连接计算机网络系统。",
                exampleEn: "The internet has changed how we learn and communicate.",
                exampleZh: "互联网改变了我们学习和交流的方式。"
            },
            {
                english: "Password", breakdown: "pas-werd", chinese: "密码", pinyin: "mì mǎ", emoji: "🔒", imageKeyword: "password secure",
                detailsEn: "A secret word or combination used to access a computer or account.",
                detailsZh: "用于访问计算机或账户的秘密单词或组合。",
                exampleEn: "Never share your password with anyone for security.",
                exampleZh: "为了安全，永远不要把你的密码告诉任何人。"
            },
            {
                english: "Download", breakdown: "down-lowd", chinese: "下载", pinyin: "xià zài", emoji: "⬇️", imageKeyword: "download file",
                detailsEn: "To copy data from the internet to your computer or phone.",
                detailsZh: "将数据从互联网复制到你的电脑或手机。",
                exampleEn: "I need to download this app to practice English every day.",
                exampleZh: "我需要下载这个应用来每天练习英语。"
            },
            {
                english: "Upload", breakdown: "up-lowd", chinese: "上传", pinyin: "shàng chuán", emoji: "⬆️", imageKeyword: "upload photo",
                detailsEn: "To copy data from your computer to the internet.",
                detailsZh: "将数据从你的电脑复制到互联网。",
                exampleEn: "Please upload your homework to the website before Friday.",
                exampleZh: "请在周五之前把你的作业上传到网站。"
            },
            {
                english: "Website", breakdown: "web-site", chinese: "网站", pinyin: "wǎng zhàn", emoji: "🖥️", imageKeyword: "website browser",
                detailsEn: "A set of related web pages located under a single domain name.",
                detailsZh: "位于单个域名下的一组相关网页。",
                exampleEn: "This website has free English lessons for beginners.",
                exampleZh: "这个网站有免费的英语初学者课程。"
            },
            {
                english: "Application", breakdown: "ap-li-kay-shun", chinese: "应用程序", pinyin: "yìng yòng chéng xù", emoji: "📱", imageKeyword: "mobile app",
                detailsEn: "A software program designed to run on a mobile device or computer.",
                detailsZh: "设计用来在移动设备或电脑上运行的软件程序。",
                exampleEn: "My favorite application for learning languages is Duolingo.",
                exampleZh: "我最喜欢的学习语言的应用是多邻国。"
            },
            {
                english: "Keyboard", breakdown: "key-bord", chinese: "键盘", pinyin: "jiàn pán", emoji: "⌨️", imageKeyword: "computer keyboard",
                detailsEn: "A set of keys used to operate a computer or type text.",
                detailsZh: "用来操作计算机或输入文字的一组按键。",
                exampleEn: "My keyboard is dirty so I need to clean it.",
                exampleZh: "我的键盘脏了，我需要清理它。"
            },
            {
                english: "Screen", breakdown: "skreen", chinese: "屏幕", pinyin: "píng mù", emoji: "📱", imageKeyword: "phone screen",
                detailsEn: "The flat surface on a computer or phone that displays information.",
                detailsZh: "计算机或手机上显示信息的平面表面。",
                exampleEn: "My phone screen cracked when I dropped it yesterday.",
                exampleZh: "我昨天把手机掉在地上屏幕摔裂了。"
            },
            {
                english: "Battery", breakdown: "bat-er-ee", chinese: "电池", pinyin: "diàn chí", emoji: "🔋", imageKeyword: "battery charge",
                detailsEn: "A device that stores energy to power electronic devices.",
                detailsZh: "储存能量为电子设备供电的设备。",
                exampleEn: "My laptop battery lasts about eight hours on a full charge.",
                exampleZh: "我的笔记本电脑电池充满电大约能用8小时。"
            },
            {
                english: "Message", breakdown: "mes-ij", chinese: "消息", pinyin: "xiāo xi", emoji: "💬", imageKeyword: "text message",
                detailsEn: "A piece of information sent from one person to another.",
                detailsZh: "从一个人发送到另一个人的一段信息。",
                exampleEn: "I sent him a message but he did not reply yet.",
                exampleZh: "我给他发了一条消息，但他还没有回复。"
            },
            {
                english: "Video call", breakdown: "vid-ee-oh kawl", chinese: "视频通话", pinyin: "shì pín tōng huà", emoji: "📹", imageKeyword: "video call",
                detailsEn: "A telephone call that includes both voice and video.",
                detailsZh: "包括声音和视频的电话通话。",
                exampleEn: "We had a video call with our family back home last night.",
                exampleZh: "我们昨晚和国内的家人进行了一次视频通话。"
            },
            {
                english: "Update", breakdown: "up-dayt", chinese: "更新", pinyin: "gēng xīn", emoji: "🔄", imageKeyword: "software update",
                detailsEn: "To make something more modern or current, often referring to software.",
                detailsZh: "使某物更现代或当前，通常指软件。",
                exampleEn: "You need to update your phone software to fix the bug.",
                exampleZh: "你需要更新手机软件来修复这个漏洞。"
            },
            {
                english: "Connect", breakdown: "kuh-nek", chinese: "连接", pinyin: "lián jiē", emoji: "🔗", imageKeyword: "wifi connect",
                detailsEn: "To join or link one thing to another, especially electronically.",
                detailsZh: "将一物连接到另一物，尤其是电子方面。",
                exampleEn: "My laptop cannot connect to the wifi in this cafe.",
                exampleZh: "我的笔记本电脑无法连接这家咖啡馆的wifi。"
            },
            {
                english: "Device", breakdown: "di-vys", chinese: "设备", pinyin: "shè bèi", emoji: "📟", imageKeyword: "tech devices",
                detailsEn: "An object, machine, or piece of equipment made for a particular purpose.",
                detailsZh: "为特定目的制造的物体、机器或设备。",
                exampleEn: "This device can measure your heart rate while you run.",
                exampleZh: "这个设备可以在你跑步时测量心率。"
            },
            {
                english: "Notification", breakdown: "no-ti-fi-kay-shun", chinese: "通知", pinyin: "tōng zhī", emoji: "🔔", imageKeyword: "phone notification",
                detailsEn: "An alert or message from an app that tells you something has happened.",
                detailsZh: "来自应用的提醒或消息，告诉你发生了某事。",
                exampleEn: "I turned off notifications because they were too distracting.",
                exampleZh: "我关闭了通知因为它们太让人分心了。"
            }
        ]
    },
    {
        id: "level-10",
        title: "Level 10: Home & Family",
        description: "Words about home, housework, and family daily life.",
        cefrLevel: "A2",
        emoji: "🏡",
        color: "from-emerald-400 to-teal-400",
        category: "Daily Life",
        items: [
            {
                english: "Kitchen", breakdown: "kitch-en", chinese: "厨房", pinyin: "chú fáng", emoji: "🍳", imageKeyword: "kitchen room",
                detailsEn: "A room where food is cooked and prepared.",
                detailsZh: "烹饪和准备食物的房间。",
                exampleEn: "My mother cooks dinner in the kitchen every evening.",
                exampleZh: "我妈妈每天晚上在厨房做晚餐。"
            },
            {
                english: "Bedroom", breakdown: "bed-room", chinese: "卧室", pinyin: "wò shì", emoji: "🛏️", imageKeyword: "bedroom interior",
                detailsEn: "A room where people sleep.",
                detailsZh: "人们睡觉的房间。",
                exampleEn: "I keep my bedroom clean and tidy every weekend.",
                exampleZh: "我每个周末都保持卧室干净整洁。"
            },
            {
                english: "Bathroom", breakdown: "bath-room", chinese: "浴室", pinyin: "yù shì", emoji: "🚿", imageKeyword: "bathroom sink",
                detailsEn: "A room with a bath or shower, sink, and toilet.",
                detailsZh: "有浴缸或淋浴、水槽和马桶的房间。",
                exampleEn: "The bathroom is down the hall on the left side.",
                exampleZh: "浴室在走廊的左边。"
            },
            {
                english: "Living room", breakdown: "liv-ing room", chinese: "客厅", pinyin: "kè tīng", emoji: "🛋️", imageKeyword: "living room sofa",
                detailsEn: "The main room in a house where people sit and relax.",
                detailsZh: "房子里人们坐着放松的主要房间。",
                exampleEn: "We watch TV in the living room every night after dinner.",
                exampleZh: "我们每天晚上晚饭后在客厅看电视。"
            },
            {
                english: "Fridge", breakdown: "frij", chinese: "冰箱", pinyin: "bīng xiāng", emoji: "🧊", imageKeyword: "refrigerator kitchen",
                detailsEn: "A large cooling appliance used to keep food fresh.",
                detailsZh: "用来保持食物新鲜的冷却电器。",
                exampleEn: "Please put the milk in the fridge so it does not spoil.",
                exampleZh: "请把牛奶放进冰箱，这样它就不会变质。"
            },
            {
                english: "Oven", breakdown: "uv-en", chinese: "烤箱", pinyin: "kǎo xiāng", emoji: "🍕", imageKeyword: "oven baking",
                detailsEn: "A heated chamber used for cooking food like bread and pizza.",
                detailsZh: "用来烹饪面包和比萨等食物的加热室。",
                exampleEn: "I baked a cake in the oven for my sister's birthday.",
                exampleZh: "我在烤箱里为我妹妹的生日烤了一个蛋糕。"
            },
            {
                english: "Washing machine", breakdown: "wosh-ing ma-sheen", chinese: "洗衣机", pinyin: "xǐ yī jī", emoji: "🧺", imageKeyword: "washing machine",
                detailsEn: "A machine that washes clothes and other fabrics automatically.",
                detailsZh: "自动洗涤衣物和其他织物的机器。",
                exampleEn: "The washing machine is broken so I have to wash clothes by hand.",
                exampleZh: "洗衣机坏了，所以我得手洗衣服。"
            },
            {
                english: "Vacuum", breakdown: "vak-yoo-uhm", chinese: "吸尘器", pinyin: "xī chén qì", emoji: "🧹", imageKeyword: "vacuum cleaner",
                detailsEn: "A machine that cleans floors by sucking up dirt and dust.",
                detailsZh: "通过吸除污垢和灰尘来清洁地板的机器。",
                exampleEn: "I need to vacuum the carpet before guests arrive.",
                exampleZh: "客人来之前我需要用吸尘器清洁地毯。"
            },
            {
                english: "Clean", breakdown: "kleen", chinese: "打扫", pinyin: "dǎ sǎo", emoji: "🧽", imageKeyword: "cleaning house",
                detailsEn: "To remove dirt or mess from a surface or room.",
                detailsZh: "从表面或房间去除污垢或杂乱。",
                exampleEn: "We clean the house every Saturday morning as a family.",
                exampleZh: "我们每个星期六早上全家一起打扫房子。"
            },
            {
                english: "Cook", breakdown: "kuk", chinese: "做饭", pinyin: "zuò fàn", emoji: "👨‍🍳", imageKeyword: "cooking food",
                detailsEn: "To prepare food by heating it.",
                detailsZh: "通过加热准备食物。",
                exampleEn: "My father cooks delicious Chinese food on Sundays.",
                exampleZh: "我爸爸星期天做美味的中国菜。"
            },
            {
                english: "Laundry", breakdown: "lon-dree", chinese: "洗衣服", pinyin: "xǐ yī fu", emoji: "👕", imageKeyword: "laundry basket",
                detailsEn: "Clothes and fabrics that need washing, or the act of washing them.",
                detailsZh: "需要洗涤的衣物和织物，或洗涤的行为。",
                exampleEn: "I put all my dirty laundry in the basket this morning.",
                exampleZh: "我今天早上把所有的脏衣服放进了洗衣篮。"
            },
            {
                english: "Repair", breakdown: "ri-pair", chinese: "修理", pinyin: "xiū lǐ", emoji: "🔧", imageKeyword: "home repair",
                detailsEn: "To fix something that is broken or damaged.",
                detailsZh: "修理坏掉或损坏的东西。",
                exampleEn: "I had to repair the leaking faucet in the bathroom.",
                exampleZh: "我不得不修理浴室漏的水龙头。"
            },
            {
                english: "Furniture", breakdown: "fur-ni-cher", chinese: "家具", pinyin: "jiā jù", emoji: "🪑", imageKeyword: "home furniture",
                detailsEn: "Large movable objects like tables, chairs, and beds in a home.",
                detailsZh: "家里的大件可移动物品，如桌子、椅子和床。",
                exampleEn: "We bought new furniture for the living room last month.",
                exampleZh: "我们上个月为客厅买了新家具。"
            },
            {
                english: "Decoration", breakdown: "dek-uh-ray-shun", chinese: "装饰", pinyin: "zhuāng shì", emoji: "🎨", imageKeyword: "room decoration",
                detailsEn: "Something used to make a room or space look more attractive.",
                detailsZh: "用来使房间或空间更好看的东西。",
                exampleEn: "She put colorful decorations on the wall for the party.",
                exampleZh: "她为了派对在墙上贴了彩色装饰。"
            },
            {
                english: "Flat", breakdown: "flat", chinese: "公寓", pinyin: "gōng yù", emoji: "🏢", imageKeyword: "city flat apartment",
                detailsEn: "A set of rooms on one floor of a building, used as a home.",
                detailsZh: "建筑物一层的一套房间，用作家。",
                exampleEn: "I live in a small flat near the city center.",
                exampleZh: "我住在市中心附近的一间小公寓里。"
            },
            {
                english: "Balcony", breakdown: "bal-kuh-nee", chinese: "阳台", pinyin: "yáng tái", emoji: "🌿", imageKeyword: "balcony plants",
                detailsEn: "A platform on the outside of a building with a wall and usually a door.",
                detailsZh: "建筑物外部的平台，有墙并且通常有门。",
                exampleEn: "I like to drink coffee on the balcony every morning.",
                exampleZh: "我喜欢每天早上在阳台上喝咖啡。"
            }
        ]
    },
    {
        id: "level-11",
        title: "Level 11: Environment & Nature",
        description: "Important words about planet Earth and protecting nature.",
        cefrLevel: "B1",
        emoji: "🌍",
        color: "from-green-400 to-emerald-400",
        category: "Daily Life",
        items: [
            {
                english: "Climate", breakdown: "kly-mit", chinese: "气候", pinyin: "qì hòu", emoji: "🌡️", imageKeyword: "climate change",
                detailsEn: "The weather conditions typical of a region over a long period.",
                detailsZh: "一个地区长期典型的天气状况。",
                exampleEn: "The climate in tropical countries is hot and wet all year.",
                exampleZh: "热带国家的气候全年炎热潮湿。"
            },
            {
                english: "Pollution", breakdown: "puh-loo-shun", chinese: "污染", pinyin: "wū rǎn", emoji: "🏭", imageKeyword: "air pollution",
                detailsEn: "The presence of harmful substances in the air, water, or land.",
                detailsZh: "空气、水或土地中存在有害物质。",
                exampleEn: "Reducing pollution is important for our health and future.",
                exampleZh: "减少污染对我们的健康和未来很重要。"
            },
            {
                english: "Recycle", breakdown: "ree-sy-kul", chinese: "回收", pinyin: "huí shōu", emoji: "♻️", imageKeyword: "recycling bin",
                detailsEn: "To process used materials so they can be used again.",
                detailsZh: "处理使用过的材料以便再次使用。",
                exampleEn: "We should recycle plastic, glass, and paper to save the planet.",
                exampleZh: "我们应该回收塑料、玻璃和纸张来保护地球。"
            },
            {
                english: "Solar", breakdown: "so-ler", chinese: "太阳能的", pinyin: "tài yáng néng de", emoji: "☀️", imageKeyword: "solar panels",
                detailsEn: "Relating to energy obtained from the sun's rays.",
                detailsZh: "与从太阳光获得的能量有关。",
                exampleEn: "More houses now use solar power to reduce energy bills.",
                exampleZh: "现在更多的房子使用太阳能来降低能源费用。"
            },
            {
                english: "Energy", breakdown: "en-er-jee", chinese: "能源", pinyin: "néng yuán", emoji: "⚡", imageKeyword: "green energy",
                detailsEn: "The power derived from natural sources like wind, sun, or oil.",
                detailsZh: "来自风、太阳或石油等自然资源的电力。",
                exampleEn: "We need to find cleaner energy sources for the future.",
                exampleZh: "我们需要为未来找到更清洁的能源。"
            },
            {
                english: "Forest", breakdown: "for-ist", chinese: "森林", pinyin: "sēn lín", emoji: "🌲", imageKeyword: "green forest",
                detailsEn: "A large area covered mainly with trees and plants.",
                detailsZh: "大片主要被树木和植物覆盖的区域。",
                exampleEn: "The Amazon forest is home to millions of different animals.",
                exampleZh: "亚马逊森林是数百万不同动物的家园。"
            },
            {
                english: "Ocean", breakdown: "oh-shan", chinese: "海洋", pinyin: "hǎi yáng", emoji: "🌊", imageKeyword: "deep ocean",
                detailsEn: "A very large area of sea that covers most of the Earth.",
                detailsZh: "覆盖地球大部分的巨大海域。",
                exampleEn: "The ocean produces most of the oxygen we breathe.",
                exampleZh: "海洋产生我们呼吸的大部分氧气。"
            },
            {
                english: "Soil", breakdown: "soyl", chinese: "土壤", pinyin: "tǔ rǎng", emoji: "🟫", imageKeyword: "fertile soil",
                detailsEn: "The top layer of earth where plants grow.",
                detailsZh: "植物生长的顶层土壤。",
                exampleEn: "Good soil is necessary to grow healthy vegetables.",
                exampleZh: "健康的蔬菜需要好的土壤来生长。"
            },
            {
                english: "Extinct", breakdown: "ik-stingkt", chinese: "灭绝的", pinyin: "miè jué de", emoji: "🦕", imageKeyword: "extinct dinosaur",
                detailsEn: "No longer existing or alive, referring to species that have died out.",
                detailsZh: "不再存在或存活，指已经灭绝的物种。",
                exampleEn: "Dinosaurs became extinct millions of years ago.",
                exampleZh: "恐龙在数百万年前灭绝了。"
            },
            {
                english: "Endangered", breakdown: "en-dayn-juhrd", chinese: "濒危的", pinyin: "bīn wēi de", emoji: "🐼", imageKeyword: "endangered species",
                detailsEn: "At risk of becoming extinct because of low numbers.",
                detailsZh: "因数量少而面临灭绝风险。",
                exampleEn: "The panda is an endangered species found only in China.",
                exampleZh: "熊猫是只在中国发现的濒危物种。"
            },
            {
                english: "Drought", breakdown: "drowt", chinese: "干旱", pinyin: "gān hàn", emoji: "🌵", imageKeyword: "drought land",
                detailsEn: "A long period of time with no rain and very dry land.",
                detailsZh: "长时间无雨和土地非常干燥的时期。",
                exampleEn: "The drought caused many crops to fail this summer.",
                exampleZh: "干旱导致今年夏天许多作物歉收。"
            },
            {
                english: "Wildlife", breakdown: "wyld-lyf", chinese: "野生动物", pinyin: "yě shēng dòng wù", emoji: "🦁", imageKeyword: "wildlife animals",
                detailsEn: "Animals and plants that live in their natural environment, not controlled by humans.",
                detailsZh: "生活在自然环境中的动植物，不受人类控制。",
                exampleEn: "We saw amazing wildlife on our safari trip in Africa.",
                exampleZh: "我们在非洲的野生动物园之旅中看到了奇妙的野生动物。"
            },
            {
                english: "Protect", breakdown: "pruh-tekt", chinese: "保护", pinyin: "bǎo hù", emoji: "🛡️", imageKeyword: "protect nature",
                detailsEn: "To keep something safe from harm or damage.",
                detailsZh: "使某物免受伤害或损害。",
                exampleEn: "We must protect the environment for our children's future.",
                exampleZh: "我们必须为孩子的未来保护环境。"
            },
            {
                english: "Emission", breakdown: "ih-mish-un", chinese: "排放", pinyin: "pái fàng", emoji: "🏭", imageKeyword: "factory emissions",
                detailsEn: "The production and discharge of gas, heat, or other substances.",
                detailsZh: "气体、热量或其他物质的产生和排放。",
                exampleEn: "Carbon emissions from cars are a major cause of warming.",
                exampleZh: "汽车的碳排放是全球变暖的主要原因。"
            },
            {
                english: "Organic", breakdown: "or-gan-ik", chinese: "有机的", pinyin: "yǒu jī de", emoji: "🥕", imageKeyword: "organic food",
                detailsEn: "Produced without using artificial chemicals, especially for food.",
                detailsZh: "不使用人工化学物质生产的，尤其是食物。",
                exampleEn: "Organic vegetables taste better and are healthier for you.",
                exampleZh: "有机蔬菜味道更好，对你更健康。"
            },
            {
                english: "Reusable", breakdown: "ree-yoo-zuh-bul", chinese: "可重复使用的", pinyin: "kě chóng fù shǐ yòng de", emoji: "🛍️", imageKeyword: "reusable bag",
                detailsEn: "Able to be used again, instead of being thrown away after one use.",
                detailsZh: "能够再次使用的，而不是用一次后扔掉。",
                exampleEn: "Bring a reusable water bottle to help reduce plastic waste.",
                exampleZh: "带一个可重复使用的水瓶来帮助减少塑料垃圾。"
            }
        ]
    }
] as Level[];
