import { ImageGuessCategory } from "@/types/image-guessing";

export const imageGuessingCategories: ImageGuessCategory[] = [
  {
    id: "animals-actions",
    title: "Animals and Actions",
    description: "Guess the animal and what it is doing. Jump, swim, fly, and more!",
    emoji: "🐸",
    items: [
      {
        id: "aa-1",
        emoji: "🐸",
        answer: "jumping",
        hint: "This green animal likes to jump on lily pads.",
        category: "animals",
        level: "A1",
        alternatives: ["hop"]
      },
      {
        id: "aa-2",
        emoji: "🐟",
        answer: "swimming",
        hint: "This animal lives in water and moves with fins.",
        category: "animals",
        level: "A1",
        alternatives: ["float"]
      },
      {
        id: "aa-3",
        emoji: "🐎",
        answer: "galloping",
        hint: "This animal is very fast and runs on four legs.",
        category: "animals",
        level: "A2",
        alternatives: ["running", "jumping"]
      },
      {
        id: "aa-4",
        emoji: "🐦",
        answer: "flying",
        hint: "This animal has wings and can soar in the sky.",
        category: "animals",
        level: "A1",
        alternatives: ["soaring"]
      },
      {
        id: "aa-5",
        emoji: "🐘",
        answer: "walking",
        hint: "This animal is very large and walks slowly.",
        category: "animals",
        level: "A1",
        alternatives: ["strolling"]
      },
      {
        id: "aa-6",
        emoji: "🐕",
        answer: "barking",
        hint: "This pet makes a loud 'woof woof' sound.",
        category: "animals",
        level: "A1",
        alternatives: ["running"]
      },
      {
        id: "aa-7",
        emoji: "🐈",
        answer: "sleeping",
        hint: "This animal likes to nap in sunny spots.",
        category: "animals",
        level: "A1",
        alternatives: ["napping"]
      },
      {
        id: "aa-8",
        emoji: "🦋",
        answer: "flying",
        hint: "This insect has beautiful wings and dances in the air.",
        category: "animals",
        level: "A2",
        alternatives: ["fluttering"]
      }
    ]
  },
  {
    id: "daily-actions",
    title: "Daily Actions",
    description: "Guess common daily actions. Eat, drink, play, and learn!",
    emoji: "🏃",
    items: [
      {
        id: "da-1",
        emoji: "🍎",
        answer: "eating",
        hint: "You do this when you put food in your mouth.",
        category: "actions",
        level: "A1",
        alternatives: ["chewing"]
      },
      {
        id: "da-2",
        emoji: "📚",
        answer: "reading",
        hint: "You do this when you look at a book.",
        category: "actions",
        level: "A1",
        alternatives: ["studying"]
      },
      {
        id: "da-3",
        emoji: "🎤",
        answer: "singing",
        hint: "You do this when you make music with your voice.",
        category: "actions",
        level: "A1",
        alternatives: ["performing"]
      },
      {
        id: "da-4",
        emoji: "⚽",
        answer: "playing",
        hint: "You do this when you kick a ball with friends.",
        category: "actions",
        level: "A1",
        alternatives: ["kicking"]
      },
      {
        id: "da-5",
        emoji: "🖌️",
        answer: "drawing",
        hint: "You do this when you make a picture with crayons.",
        category: "actions",
        level: "A1",
        alternatives: ["painting"]
      },
      {
        id: "da-6",
        emoji: "🧹",
        answer: "cleaning",
        hint: "You do this when you tidy up a room.",
        category: "actions",
        level: "A2",
        alternatives: ["tidying"]
      },
      {
        id: "da-7",
        emoji: "🚿",
        answer: "bathing",
        hint: "You do this when you wash your body.",
        category: "actions",
        level: "A1",
        alternatives: ["showering"]
      },
      {
        id: "da-8",
        emoji: "🪥",
        answer: "brushing",
        hint: "You do this every morning and night to keep teeth clean.",
        category: "actions",
        level: "A1",
        alternatives: ["cleaning"]
      }
    ]
  },
  {
    id: "playful-scenes",
    title: "Playful Scenes",
    description: "Fun pictures to guess what people and animals are doing.",
    emoji: "🎉",
    items: [
      {
        id: "ps-1",
        emoji: "🍕",
        answer: "eating pizza",
        hint: "A cheesy, round food that kids love.",
        category: "daily-life",
        level: "A1",
        alternatives: ["having a snack"]
      },
      {
        id: "ps-2",
        emoji: "🎂",
        answer: "celebrating",
        hint: "There is a cake with candles on the table.",
        category: "daily-life",
        level: "A1",
        alternatives: ["partying"]
      },
      {
        id: "ps-3",
        emoji: "☂️",
        answer: "raining",
        hint: "You need this when water falls from the sky.",
        category: "daily-life",
        level: "A1",
        alternatives: ["showering"]
      },
      {
        id: "ps-4",
        emoji: "🎁",
        answer: "giving a gift",
        hint: "It is wrapped and has a ribbon.",
        category: "daily-life",
        level: "A1",
        alternatives: ["presenting"]
      },
      {
        id: "ps-5",
        emoji: "🎈",
        answer: "flying away",
        hint: "These colorful balls float up if you let go.",
        category: "daily-life",
        level: "A2",
        alternatives: ["floating"]
      },
      {
        id: "ps-6",
        emoji: "🍦",
        answer: "eating ice cream",
        hint: "A cold, sweet treat on a hot day.",
        category: "daily-life",
        level: "A1",
        alternatives: ["licking"]
      },
      {
        id: "ps-7",
        emoji: "🎪",
        answer: "performing",
        hint: "People are watching a show under a tent.",
        category: "daily-life",
        level: "A2",
        alternatives: ["acting"]
      },
      {
        id: "ps-8",
        emoji: "🚀",
        answer: "blasting off",
        hint: "It goes up fast and goes to space.",
        category: "daily-life",
        level: "A2",
        alternatives: ["launching"]
      }
    ]
  }
];
