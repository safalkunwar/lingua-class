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
      },
      {
        id: "aa-9",
        emoji: "🐇",
        answer: "hopping",
        hint: "This animal has long ears and moves in bounces.",
        category: "animals",
        level: "A1",
        alternatives: ["jumping"]
      },
      {
        id: "aa-10",
        emoji: "🐢",
        answer: "crawling",
        hint: "This animal is very slow and carries a shell on its back.",
        category: "animals",
        level: "A1",
        alternatives: ["walking slowly"]
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
      },
      {
        id: "da-9",
        emoji: "🎮",
        answer: "playing games",
        hint: "You do this for fun with a controller or phone.",
        category: "actions",
        level: "A1",
        alternatives: ["gaming"]
      },
      {
        id: "da-10",
        emoji: "🍳",
        answer: "cooking",
        hint: "You do this in the kitchen when you make food.",
        category: "actions",
        level: "A1",
        alternatives: ["preparing food"]
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
      },
      {
        id: "ps-9",
        emoji: "🎨",
        answer: "painting",
        hint: "You do this with brushes and colors on paper.",
        category: "daily-life",
        level: "A1",
        alternatives: ["drawing"]
      },
      {
        id: "ps-10",
        emoji: "🏊",
        answer: "swimming",
        hint: "You do this in water using your arms and legs.",
        category: "daily-life",
        level: "A1",
        alternatives: ["floating"]
      }
    ]
  },
  {
    id: "food-cooking",
    title: "Food and Cooking",
    description: "Guess the food and cooking actions. Eat, bake, chop, and more!",
    emoji: "👨‍🍳",
    items: [
      {
        id: "fc-1",
        emoji: "🍞",
        answer: "baking bread",
        hint: "You put this in the oven and it gets warm and golden.",
        category: "food",
        level: "A1",
        alternatives: ["toasting"]
      },
      {
        id: "fc-2",
        emoji: "🥗",
        answer: "making a salad",
        hint: "You mix fresh vegetables in a bowl.",
        category: "food",
        level: "A1",
        alternatives: ["preparing salad"]
      },
      {
        id: "fc-3",
        emoji: "🍳",
        answer: "frying eggs",
        hint: "You cook these in a pan with oil.",
        category: "food",
        level: "A2",
        alternatives: ["cooking breakfast"]
      },
      {
        id: "fc-4",
        emoji: "🍕",
        answer: "eating pizza",
        hint: "This round food has cheese and sauce on top.",
        category: "food",
        level: "A1",
        alternatives: ["having pizza"]
      },
      {
        id: "fc-5",
        emoji: "🥤",
        answer: "drinking juice",
        hint: "You sip this from a straw.",
        category: "food",
        level: "A1",
        alternatives: ["sipping"]
      },
      {
        id: "fc-6",
        emoji: "🍪",
        answer: "eating cookies",
        hint: "These are sweet and crunchy baked treats.",
        category: "food",
        level: "A1",
        alternatives: ["snacking"]
      },
      {
        id: "fc-7",
        emoji: "🍎",
        answer: "washing fruit",
        hint: "You hold this under water before eating.",
        category: "food",
        level: "A1",
        alternatives: ["rinsing"]
      },
      {
        id: "fc-8",
        emoji: "🧁",
        answer: "baking cupcakes",
        hint: "These small cakes have frosting on top.",
        category: "food",
        level: "A2",
        alternatives: ["decorating"]
      },
      {
        id: "fc-9",
        emoji: "☕",
        answer: "drinking coffee",
        hint: "You sip this hot drink in the morning.",
        category: "food",
        level: "A1",
        alternatives: ["tasting"]
      },
      {
        id: "fc-10",
        emoji: "🍳",
        answer: "cooking dinner",
        hint: "You prepare this meal in the evening.",
        category: "food",
        level: "A1",
        alternatives: ["making dinner"]
      }
    ]
  },
  {
    id: "weather-seasons",
    title: "Weather and Seasons",
    description: "Guess the weather and seasons. Sunny, rainy, snow, and more!",
    emoji: "🌤️",
    items: [
      {
        id: "ws-1",
        emoji: "☀️",
        answer: "sunny",
        hint: "The sky is clear and bright.",
        category: "weather",
        level: "A1",
        alternatives: ["bright"]
      },
      {
        id: "ws-2",
        emoji: "🌧️",
        answer: "raining",
        hint: "Water falls from the sky and you need an umbrella.",
        category: "weather",
        level: "A1",
        alternatives: ["showering"]
      },
      {
        id: "ws-3",
        emoji: "❄️",
        answer: "snowing",
        hint: "White flakes fall from the sky and cover the ground.",
        category: "weather",
        level: "A1",
        alternatives: ["blizzard"]
      },
      {
        id: "ws-4",
        emoji: "🌈",
        answer: "rainbow",
        hint: "This appears in the sky after the rain.",
        category: "weather",
        level: "A1",
        alternatives: ["colorful sky"]
      },
      {
        id: "ws-5",
        emoji: "🌬️",
        answer: "windy",
        hint: "The air moves fast and trees sway.",
        category: "weather",
        level: "A1",
        alternatives: ["breezy"]
      },
      {
        id: "ws-6",
        emoji: "☁️",
        answer: "cloudy",
        hint: "The sky is covered with soft white puffs.",
        category: "weather",
        level: "A1",
        alternatives: ["overcast"]
      },
      {
        id: "ws-7",
        emoji: "🌪️",
        answer: "stormy",
        hint: "There is strong wind, rain, and thunder.",
        category: "weather",
        level: "A2",
        alternatives: ["tornado"]
      },
      {
        id: "ws-8",
        emoji: "🔥",
        answer: "hot",
        hint: "The sun is strong and you feel warm.",
        category: "weather",
        level: "A1",
        alternatives: ["burning"]
      },
      {
        id: "ws-9",
        emoji: "🧥",
        answer: "cold",
        hint: "You wear a thick coat and gloves.",
        category: "weather",
        level: "A1",
        alternatives: ["freezing"]
      },
      {
        id: "ws-10",
        emoji: "🍂",
        answer: "autumn",
        hint: "Leaves fall from trees and the air is crisp.",
        category: "weather",
        level: "A1",
        alternatives: ["fall"]
      }
    ]
  }
];
