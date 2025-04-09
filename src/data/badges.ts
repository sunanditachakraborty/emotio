
import { BadgeInfo } from "@/lib/types";

export const badges: BadgeInfo[] = [
  {
    id: "self-care-starter",
    name: "Self-Care Starter",
    emoji: "🪴",
    description: "You've taken your first step toward emotional well-being!",
    xpRequired: 0,
    imageUrl: "https://drive.google.com/uc?export=view&id=1GjwDlu4Pka-D4WG9-UHWaEKP_0zyGvpj"
  },
  {
    id: "emotional-explorer",
    name: "Emotional Explorer",
    emoji: "🧭",
    description: "You're exploring the landscape of your emotions!",
    xpRequired: 20,
    imageUrl: "https://imgur.com/a/OuMobsA"
  },
  {
    id: "mood-lifter",
    name: "Mood Lifter",
    emoji: "🔋",
    description: "You've learned how to boost your mood effectively!",
    xpRequired: 40,
    imageUrl: "https://drive.google.com/uc?export=view&id=1qp6xUEJ0yuEtClLhgWDZaeo5DWoygweN"
  },
  {
    id: "zen-apprentice",
    name: "Zen Apprentice",
    emoji: "🧘‍♂️",
    description: "You're developing a sense of inner calm and balance!",
    xpRequired: 60,
    imageUrl: "https://drive.google.com/uc?export=view&id=1B9ENk9b0vPcvRZqKeqq86XuLwjvE_FaL"
  },
  {
    id: "balance-seeker",
    name: "Balance Seeker",
    emoji: "⚖️",
    description: "You're finding harmony between stress and relaxation!",
    xpRequired: 80,
    imageUrl: "https://drive.google.com/uc?export=view&id=1Hf18v6VDItdUR0Wu8cCvc17iDxD_nfll"
  },
  {
    id: "mental-health-mage",
    name: "Mental Health Mage",
    emoji: "🪄",
    description: "You've mastered powerful techniques for emotional well-being!",
    xpRequired: 100,
    imageUrl: "https://drive.google.com/uc?export=view&id=1rqfmYSZLuH4CpLxEnMt0EzWUjS1sfT0S"
  },
  {
    id: "wellness-warrior",
    name: "Wellness Warrior",
    emoji: "🛡️",
    description: "You're defending your right to mental wellness!",
    xpRequired: 125,
    imageUrl: "https://drive.google.com/uc?export=view&id=1jemdmcsK9kv4k4nGbYnr-c2GmjDjTjlN"
  },
  {
    id: "resilience-rockstar",
    name: "Resilience Rockstar",
    emoji: "🎸",
    description: "You're rocking life with your emotional resilience!",
    xpRequired: 150,
    imageUrl: "https://drive.google.com/uc?export=view&id=1LuokW7cqxKhgABT50gWCgJKAl0icSJxC"
  },
  {
    id: "peace-prodigy",
    name: "Peace Prodigy",
    emoji: "🕊️",
    description: "You're a natural at finding inner peace!",
    xpRequired: 175,
    imageUrl: "https://drive.google.com/uc?export=view&id=1gEYqGAHstbg74TqZJVrbKeQuWZlZefB1"
  },
  {
    id: "self-care-supreme",
    name: "Self-Care Supreme",
    emoji: "👑",
    description: "You've reached the pinnacle of self-care mastery!",
    xpRequired: 200,
    imageUrl: "https://drive.google.com/uc?export=view&id=1d4HTphjIibM-q_ZuCFKc-4WvIaB1LWCB"
  }
];

export const getCurrentBadge = (xp: number): BadgeInfo => {
  const validBadges = badges.filter(badge => badge.xpRequired <= xp);
  return validBadges[validBadges.length - 1];
};

export const getNextBadge = (xp: number): BadgeInfo | null => {
  const nextBadges = badges.filter(badge => badge.xpRequired > xp);
  if (nextBadges.length === 0) return null;
  return nextBadges[0];
};
