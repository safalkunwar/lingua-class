import { Dialogue } from "@/types/curriculum";

export const dialogues: Dialogue[] = [
  {
    id: "restaurant",
    title: "At the Restaurant",
    description: "Ordering food and drinks at a restaurant.",
    emoji: "🍽️",
    lines: [
      {
        speaker: "Waiter",
        english: "Good evening! A table for two?",
        chinese: "晚上好！两位吗？",
        pinyin: "wǎn shàng hǎo! liǎng wèi ma?",
      },
      {
        speaker: "Guest",
        english: "Yes, please. Can we see the menu?",
        chinese: "是的，请给我们菜单好吗？",
        pinyin: "shì de, qǐng gěi wǒ men cài dān hǎo ma?",
      },
      {
        speaker: "Waiter",
        english: "Of course. Here you are. Would you like to order drinks first?",
        chinese: "当然可以。给您。你们想先点饮料吗？",
        pinyin: "dāng rán kě yǐ. gěi nín. nǐ men xiǎng xiān diǎn yǐn liào ma?",
      },
      {
        speaker: "Guest",
        english: "I would like a cup of tea, please.",
        chinese: "我要一杯茶，谢谢。",
        pinyin: "wǒ yào yì bēi chá, xiè xiè.",
      },
      {
        speaker: "Waiter",
        english: "And for you?",
        chinese: "您呢？",
        pinyin: "nín ne?",
      },
      {
        speaker: "Guest 2",
        english: "Water is fine, thank you.",
        chinese: "水就可以了，谢谢。",
        pinyin: "shuǐ jiù kě yǐ le, xiè xiè.",
      },
      {
        speaker: "Waiter",
        english: "I will be back to take your food order in a moment.",
        chinese: "我一会儿回来帮你们点餐。",
        pinyin: "wǒ yì huì ér huí lái bāng nǐ men diǎn cān.",
      },
    ],
  },
  {
    id: "shopping",
    title: "Shopping for Clothes",
    description: "Buying clothes at a shopping mall.",
    emoji: "🛍️",
    lines: [
      {
        speaker: "Shop Assistant",
        english: "Hello! Can I help you find anything?",
        chinese: "你好！有什么我可以帮你的吗？",
        pinyin: "nǐ hǎo! yǒu shén me wǒ kě yǐ bāng nǐ de ma?",
      },
      {
        speaker: "Customer",
        english: "Yes, I am looking for a shirt. How much is this one?",
        chinese: "是的，我想找一件衬衫。这件多少钱？",
        pinyin: "shì de, wǒ xiǎng zhǎo yí jiàn chèn shān. zhè jiàn duō shǎo qián?",
      },
      {
        speaker: "Shop Assistant",
        english: "That one is one hundred and fifty yuan.",
        chinese: "那件是一百五十元。",
        pinyin: "nà jiàn shì yì bǎi wǔ shí yuán.",
      },
      {
        speaker: "Customer",
        english: "Can I try it on?",
        chinese: "我可以试试吗？",
        pinyin: "wǒ kě yǐ shì shì ma?",
      },
      {
        speaker: "Shop Assistant",
        english: "Of course! The fitting room is right over there.",
        chinese: "当然可以！试衣间就在那边。",
        pinyin: "dāng rán kě yǐ! shì yī jiān jiù zài nà biān.",
      },
      {
        speaker: "Customer",
        english: "It fits perfectly. I will take it.",
        chinese: "非常合身。我要了。",
        pinyin: "fēi cháng hé shēn. wǒ yào le.",
      },
    ],
  },
  {
    id: "airport",
    title: "At the Airport",
    description: "Checking in and going through security.",
    emoji: "✈️",
    lines: [
      {
        speaker: "Agent",
        english: "Good morning! May I see your passport, please?",
        chinese: "早上好！请给我看看您的护照好吗？",
        pinyin: "zǎo shàng hǎo! qǐng gěi wǒ kàn kàn nín de hù zhào hǎo ma?",
      },
      {
        speaker: "Traveler",
        english: "Here you go.",
        chinese: "给您。",
        pinyin: "gěi nín.",
      },
      {
        speaker: "Agent",
        english: "Where are you flying to today?",
        chinese: "您今天飞往哪里？",
        pinyin: "nín jīn tiān fēi wǎng nǎ lǐ?",
      },
      {
        speaker: "Traveler",
        english: "I am flying to Shanghai.",
        chinese: "我飞往上海。",
        pinyin: "wǒ fēi wǎng shàng hǎi.",
      },
      {
        speaker: "Agent",
        english: "Do you have any luggage to check in?",
        chinese: "您有行李要托运吗？",
        pinyin: "nín yǒu xíng lǐ yào tuō yùn ma?",
      },
      {
        speaker: "Traveler",
        english: "Yes, just this one suitcase.",
        chinese: "有，就这一个行李箱。",
        pinyin: "yǒu, jiù zhè yí gè xíng lǐ xiāng.",
      },
      {
        speaker: "Agent",
        english: "Here is your boarding pass. Have a great flight!",
        chinese: "这是您的登机牌。祝您旅途愉快！",
        pinyin: "zhè shì nín de dēng jī pái. zhù nín lǚ tú yú kuài!",
      },
    ],
  },
  {
    id: "doctor",
    title: "At the Doctor",
    description: "Visiting the doctor when feeling unwell.",
    emoji: "👨‍⚕️",
    lines: [
      {
        speaker: "Doctor",
        english: "What seems to be the problem?",
        chinese: "请问您哪里不舒服？",
        pinyin: "qǐng wèn nín nǎ lǐ bù shū fu?",
      },
      {
        speaker: "Patient",
        english: "I have had a headache and a sore throat for two days.",
        chinese: "我头痛和喉咙痛已经两天了。",
        pinyin: "wǒ tóu tòng hé hóu lóng tòng yǐ jīng liǎng tiān le.",
      },
      {
        speaker: "Doctor",
        english: "Do you have a fever?",
        chinese: "您发烧了吗？",
        pinyin: "nín fā shāo le ma?",
      },
      {
        speaker: "Patient",
        english: "I think so. I feel very tired too.",
        chinese: "我想是的。我也觉得非常累。",
        pinyin: "wǒ xiǎng shì de. wǒ yě jué de fēi cháng lèi.",
      },
      {
        speaker: "Doctor",
        english: "Let me check. Please open your mouth and say ahh.",
        chinese: "让我检查一下。请张开嘴说啊。",
        pinyin: "ràng wǒ jiǎn chá yí xià. qǐng zhāng kāi zuǐ shuō a.",
      },
      {
        speaker: "Doctor",
        english: "You have a cold. I will prescribe some medicine for you.",
        chinese: "您感冒了。我给您开一些药。",
        pinyin: "nín gǎn mào le. wǒ gěi nín kāi yì xiē yào.",
      },
      {
        speaker: "Patient",
        english: "Thank you, doctor. How often should I take the medicine?",
        chinese: "谢谢医生。我应该多久吃一次药？",
        pinyin: "xiè xiè yī shēng. wǒ yīng gāi duō jiǔ chī yí cì yào?",
      },
      {
        speaker: "Doctor",
        english: "Three times a day after meals. Get plenty of rest!",
        chinese: "一天三次，饭后服用。多休息！",
        pinyin: "yì tiān sān cì, fàn hòu fú yòng. duō xiū xi!",
      },
    ],
  },
];
