import { ImageGuessCategory } from "@/types/image-guessing";
import { imageGuessingSvgs } from "./image-guessing-svgs";

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
,
        image: imageGuessingSvgs["aa-1"],
      },
      {
        id: "aa-2",
        emoji: "🐟",
        answer: "swimming",
        hint: "This animal lives in water and moves with fins.",
        category: "animals",
        level: "A1",
        alternatives: ["float"]
,
        image: imageGuessingSvgs["aa-2"],
      },
      {
        id: "aa-3",
        emoji: "🐎",
        answer: "galloping",
        hint: "This animal is very fast and runs on four legs.",
        category: "animals",
        level: "A2",
        alternatives: ["running", "jumping"]
,
        image: imageGuessingSvgs["aa-3"],
      },
      {
        id: "aa-4",
        emoji: "🐦",
        answer: "flying",
        hint: "This animal has wings and can soar in the sky.",
        category: "animals",
        level: "A1",
        alternatives: ["soaring"]
,
        image: imageGuessingSvgs["aa-4"],
      },
      {
        id: "aa-5",
        emoji: "🐘",
        answer: "walking",
        hint: "This animal is very large and walks slowly.",
        category: "animals",
        level: "A1",
        alternatives: ["strolling"]
,
        image: imageGuessingSvgs["aa-5"],
      },
      {
        id: "aa-6",
        emoji: "🐕",
        answer: "barking",
        hint: "This pet makes a loud 'woof woof' sound.",
        category: "animals",
        level: "A1",
        alternatives: ["running"]
,
        image: imageGuessingSvgs["aa-6"],
      },
      {
        id: "aa-7",
        emoji: "🐈",
        answer: "sleeping",
        hint: "This animal likes to nap in sunny spots.",
        category: "animals",
        level: "A1",
        alternatives: ["napping"]
,
        image: imageGuessingSvgs["aa-7"],
      },
      {
        id: "aa-8",
        emoji: "🦋",
        answer: "flying",
        hint: "This insect has beautiful wings and dances in the air.",
        category: "animals",
        level: "A2",
        alternatives: ["fluttering"]
,
        image: imageGuessingSvgs["aa-8"],
      },
      {
        id: "aa-9",
        emoji: "🐇",
        answer: "hopping",
        hint: "This animal has long ears and moves in bounces.",
        category: "animals",
        level: "A1",
        alternatives: ["jumping"]
,
        image: imageGuessingSvgs["aa-9"],
      },
      {
        id: "aa-10",
        emoji: "🐢",
        answer: "crawling",
        hint: "This animal is very slow and carries a shell on its back.",
        category: "animals",
        level: "A1",
        alternatives: ["walking slowly"]
,
        image: imageGuessingSvgs["aa-10"],
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
,
        image: imageGuessingSvgs["da-1"],
      },
      {
        id: "da-2",
        emoji: "📚",
        answer: "reading",
        hint: "You do this when you look at a book.",
        category: "actions",
        level: "A1",
        alternatives: ["studying"]
,
        image: imageGuessingSvgs["da-2"],
      },
      {
        id: "da-3",
        emoji: "🎤",
        answer: "singing",
        hint: "You do this when you make music with your voice.",
        category: "actions",
        level: "A1",
        alternatives: ["performing"]
,
        image: imageGuessingSvgs["da-3"],
      },
      {
        id: "da-4",
        emoji: "⚽",
        answer: "playing",
        hint: "You do this when you kick a ball with friends.",
        category: "actions",
        level: "A1",
        alternatives: ["kicking"]
,
        image: imageGuessingSvgs["da-4"],
      },
      {
        id: "da-5",
        emoji: "🖌️",
        answer: "drawing",
        hint: "You do this when you make a picture with crayons.",
        category: "actions",
        level: "A1",
        alternatives: ["painting"]
,
        image: imageGuessingSvgs["da-5"],
      },
      {
        id: "da-6",
        emoji: "🧹",
        answer: "cleaning",
        hint: "You do this when you tidy up a room.",
        category: "actions",
        level: "A2",
        alternatives: ["tidying"]
,
        image: imageGuessingSvgs["da-6"],
      },
      {
        id: "da-7",
        emoji: "🚿",
        answer: "bathing",
        hint: "You do this when you wash your body.",
        category: "actions",
        level: "A1",
        alternatives: ["showering"],
        image: imageGuessingSvgs["da-7"],
      },
      {
        id: "da-8",
        emoji: "🪥",
        answer: "brushing",
        hint: "You do this every morning and night to keep teeth clean.",
        category: "actions",
        level: "A1",
        alternatives: ["cleaning"]
,
        image: imageGuessingSvgs["da-8"],
      },
      {
        id: "da-9",
        emoji: "🎮",
        answer: "playing games",
        hint: "You do this for fun with a controller or phone.",
        category: "actions",
        level: "A1",
        alternatives: ["gaming"],
        image: imageGuessingSvgs["da-9"],
      },
      {
        id: "da-10",
        emoji: "🍳",
        answer: "cooking",
        hint: "You do this in the kitchen when you make food.",
        category: "actions",
        level: "A1",
        alternatives: ["preparing food"]
,
        image: imageGuessingSvgs["da-10"],
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
,
        image: imageGuessingSvgs["ps-1"],
      },
      {
        id: "ps-2",
        emoji: "🎂",
        answer: "celebrating",
        hint: "There is a cake with candles on the table.",
        category: "daily-life",
        level: "A1",
        alternatives: ["partying"]
,
        image: imageGuessingSvgs["ps-2"],
      },
      {
        id: "ps-3",
        emoji: "☂️",
        answer: "raining",
        hint: "You need this when water falls from the sky.",
        category: "daily-life",
        level: "A1",
        alternatives: ["showering"]
,
        image: imageGuessingSvgs["ps-3"],
      },
      {
        id: "ps-4",
        emoji: "🎁",
        answer: "giving a gift",
        hint: "It is wrapped and has a ribbon.",
        category: "daily-life",
        level: "A1",
        alternatives: ["presenting"]
,
        image: imageGuessingSvgs["ps-4"],
      },
      {
        id: "ps-5",
        emoji: "🎈",
        answer: "flying away",
        hint: "These colorful balls float up if you let go.",
        category: "daily-life",
        level: "A2",
        alternatives: ["floating"]
,
        image: imageGuessingSvgs["ps-5"],
      },
      {
        id: "ps-6",
        emoji: "🍦",
        answer: "eating ice cream",
        hint: "A cold, sweet treat on a hot day.",
        category: "daily-life",
        level: "A1",
        alternatives: ["licking"]
,
        image: imageGuessingSvgs["ps-6"],
      },
      {
        id: "ps-7",
        emoji: "🎪",
        answer: "performing",
        hint: "People are watching a show under a tent.",
        category: "daily-life",
        level: "A2",
        alternatives: ["acting"]
,
        image: imageGuessingSvgs["ps-7"],
      },
      {
        id: "ps-8",
        emoji: "🚀",
        answer: "blasting off",
        hint: "It goes up fast and goes to space.",
        category: "daily-life",
        level: "A2",
        alternatives: ["launching"]
,
        image: imageGuessingSvgs["ps-8"],
      },
      {
        id: "ps-9",
        emoji: "🎨",
        answer: "painting",
        hint: "You do this with brushes and colors on paper.",
        category: "daily-life",
        level: "A1",
        alternatives: ["drawing"]
,
        image: imageGuessingSvgs["ps-9"],
      },
      {
        id: "ps-10",
        emoji: "🏊",
        answer: "swimming",
        hint: "You do this in water using your arms and legs.",
        category: "daily-life",
        level: "A1",
        alternatives: ["floating"]
,
        image: imageGuessingSvgs["ps-10"],
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
,
        image: imageGuessingSvgs["fc-1"],
      },
      {
        id: "fc-2",
        emoji: "🥗",
        answer: "making a salad",
        hint: "You mix fresh vegetables in a bowl.",
        category: "food",
        level: "A1",
        alternatives: ["preparing salad"]
,
        image: imageGuessingSvgs["fc-2"],
      },
      {
        id: "fc-3",
        emoji: "🍳",
        answer: "frying eggs",
        hint: "You cook these in a pan with oil.",
        category: "food",
        level: "A2",
        alternatives: ["cooking breakfast"]
,
        image: imageGuessingSvgs["fc-3"],
      },
      {
        id: "fc-4",
        emoji: "🍕",
        answer: "eating pizza",
        hint: "This round food has cheese and sauce on top.",
        category: "food",
        level: "A1",
        alternatives: ["having pizza"]
,
        image: imageGuessingSvgs["fc-4"],
      },
      {
        id: "fc-5",
        emoji: "🥤",
        answer: "drinking juice",
        hint: "You sip this from a straw.",
        category: "food",
        level: "A1",
        alternatives: ["sipping"]
,
        image: imageGuessingSvgs["fc-5"],
      },
      {
        id: "fc-6",
        emoji: "🍪",
        answer: "eating cookies",
        hint: "These are sweet and crunchy baked treats.",
        category: "food",
        level: "A1",
        alternatives: ["snacking"]
,
        image: imageGuessingSvgs["fc-6"],
      },
      {
        id: "fc-7",
        emoji: "🍎",
        answer: "washing fruit",
        hint: "You hold this under water before eating.",
        category: "food",
        level: "A1",
        alternatives: ["rinsing"]
,
        image: imageGuessingSvgs["fc-7"],
      },
      {
        id: "fc-8",
        emoji: "🧁",
        answer: "baking cupcakes",
        hint: "These small cakes have frosting on top.",
        category: "food",
        level: "A2",
        alternatives: ["decorating"]
,
        image: imageGuessingSvgs["fc-8"],
      },
      {
        id: "fc-9",
        emoji: "☕",
        answer: "drinking coffee",
        hint: "You sip this hot drink in the morning.",
        category: "food",
        level: "A1",
        alternatives: ["tasting"]
,
        image: imageGuessingSvgs["fc-9"],
      },
      {
        id: "fc-10",
        emoji: "🍳",
        answer: "cooking dinner",
        hint: "You prepare this meal in the evening.",
        category: "food",
        level: "A1",
        alternatives: ["making dinner"]
,
        image: imageGuessingSvgs["fc-10"],
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
,
        image: imageGuessingSvgs["ws-1"],
      },
      {
        id: "ws-2",
        emoji: "🌧️",
        answer: "raining",
        hint: "Water falls from the sky and you need an umbrella.",
        category: "weather",
        level: "A1",
        alternatives: ["showering"]
,
        image: imageGuessingSvgs["ws-2"],
      },
      {
        id: "ws-3",
        emoji: "❄️",
        answer: "snowing",
        hint: "White flakes fall from the sky and cover the ground.",
        category: "weather",
        level: "A1",
        alternatives: ["blizzard"]
,
        image: imageGuessingSvgs["ws-3"],
      },
      {
        id: "ws-4",
        emoji: "🌈",
        answer: "rainbow",
        hint: "This appears in the sky after the rain.",
        category: "weather",
        level: "A1",
        alternatives: ["colorful sky"]
,
        image: imageGuessingSvgs["ws-4"],
      },
      {
        id: "ws-5",
        emoji: "🌬️",
        answer: "windy",
        hint: "The air moves fast and trees sway.",
        category: "weather",
        level: "A1",
        alternatives: ["breezy"]
,
        image: imageGuessingSvgs["ws-5"],
      },
      {
        id: "ws-6",
        emoji: "☁️",
        answer: "cloudy",
        hint: "The sky is covered with soft white puffs.",
        category: "weather",
        level: "A1",
        alternatives: ["overcast"]
,
        image: imageGuessingSvgs["ws-6"],
      },
      {
        id: "ws-7",
        emoji: "🌪️",
        answer: "stormy",
        hint: "There is strong wind, rain, and thunder.",
        category: "weather",
        level: "A2",
        alternatives: ["tornado"]
,
        image: imageGuessingSvgs["ws-7"],
      },
      {
        id: "ws-8",
        emoji: "🔥",
        answer: "hot",
        hint: "The sun is strong and you feel warm.",
        category: "weather",
        level: "A1",
        alternatives: ["burning"]
,
        image: imageGuessingSvgs["ws-8"],
      },
      {
        id: "ws-9",
        emoji: "🧥",
        answer: "cold",
        hint: "You wear a thick coat and gloves.",
        category: "weather",
        level: "A1",
        alternatives: ["freezing"]
,
        image: imageGuessingSvgs["ws-9"],
      },
      {
        id: "ws-10",
        emoji: "🍂",
        answer: "autumn",
        hint: "Leaves fall from trees and the air is crisp.",
        category: "weather",
        level: "A1",
        alternatives: ["fall"]
,
        image: imageGuessingSvgs["ws-10"],
      }
    ]
  }
];
