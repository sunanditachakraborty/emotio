
import { Emotion, Message } from "./types";
import { getRandomBreathing, getRandomGame, getRandomJoke, getRandomMusic, getRandomQuote } from "@/data/activities";

export const detectEmotion = (message: string): Emotion => {
  const message_lower = message.toLowerCase();
  
  if (message_lower.includes("anxious") || message_lower.includes("anxiety") || message_lower.includes("nervous") || message_lower.includes("worry") || message_lower.includes("worried")) {
    return "anxious";
  } else if (message_lower.includes("stressed") || message_lower.includes("stress") || message_lower.includes("pressure") || message_lower.includes("overwhelmed")) {
    return "stressed";
  } else if (message_lower.includes("sad") || message_lower.includes("down") || message_lower.includes("unhappy") || message_lower.includes("depressed") || message_lower.includes("upset")) {
    return "sad";
  } else if (message_lower.includes("burned out") || message_lower.includes("burnout") || message_lower.includes("exhausted") || message_lower.includes("tired")) {
    return "burned-out";
  } else if (message_lower.includes("overwhelm") || message_lower.includes("too much") || message_lower.includes("can't handle")) {
    return "overwhelmed";
  } else if (message_lower.includes("happy") || message_lower.includes("good") || message_lower.includes("great") || message_lower.includes("awesome") || message_lower.includes("excited")) {
    return "happy";
  } else {
    return "neutral";
  }
};

export const generateResponse = (message: string, emotion: Emotion): string => {
  const empathyResponses = {
    "anxious": [
      "I can hear that anxiety in your voice. It's like your mind is racing with 'what-ifs', isn't it?",
      "That anxious feeling can be so uncomfortable - like your thoughts are on a treadmill that won't stop.",
      "Anxiety is like an unwelcome alarm bell that won't stop ringing. I hear it in what you're sharing."
    ],
    "stressed": [
      "You sound really stretched thin right now, like you're being pulled in too many directions.",
      "That stress you're feeling is your body and mind telling you something important - you need some relief.",
      "It sounds like you're carrying a heavy backpack of responsibilities right now."
    ],
    "sad": [
      "I can feel the sadness in your words. It's like a gray cloud that's following you around.",
      "That feeling of sadness can be so heavy sometimes, like you're walking through deep water.",
      "It sounds like your heart is feeling pretty heavy right now."
    ],
    "burned-out": [
      "That burnout is real - it's like your internal battery has completely drained.",
      "I hear you - burnout can make even small tasks feel like climbing a mountain.",
      "It sounds like your energy tank is running on empty right now."
    ],
    "overwhelmed": [
      "It sounds like you're drowning in tasks and expectations right now.",
      "Being overwhelmed is like trying to drink from a fire hose - there's just too much coming at you.",
      "I can hear how everything is piling up for you - it's a lot to handle at once."
    ],
    "happy": [
      "That positive energy is radiating through your words! It's wonderful to hear!",
      "I love hearing that happiness in what you're sharing! Those good moments are so valuable.",
      "That joy you're feeling is absolutely worth celebrating!"
    ],
    "neutral": [
      "Thanks for sharing what's on your mind. How are you feeling about it?",
      "I appreciate you taking the time to chat. Is there anything specific you're feeling about this?",
      "I'm here to listen. Would you like to talk more about how this is affecting you emotionally?"
    ]
  };

  const suggestions = {
    "anxious": [
      `Let's try a quick breathing exercise: ${getRandomBreathing()}`,
      `When anxiety strikes, grounding can help. Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.`,
      `Sometimes a bit of distraction helps with anxiety. ${getRandomGame()}`
    ],
    "stressed": [
      `Music can be a great stress reliever. ${getRandomMusic()}`,
      `A quick laugh can reduce stress hormones. Here's a joke: ${getRandomJoke()}`,
      `Try progressive muscle relaxation: Tense each muscle group for 5 seconds, then release for 10 seconds, starting with your feet and moving up to your head.`
    ],
    "sad": [
      `When you're feeling down, sometimes an inspiring quote can offer a new perspective: ${getRandomQuote()}`,
      `Gentle movement can help shift sadness. Could you try stretching your arms up high, then out to the sides?`,
      `Music has a special way of connecting with our emotions. ${getRandomMusic()}`
    ],
    "burned-out": [
      `Burnout requires real rest. Could you take 5 minutes to just close your eyes and do absolutely nothing?`,
      `When you're burned out, nature can be restorative. Could you look out a window or step outside for a moment?`,
      `Burnout often means you need to refill your cup. ${getRandomQuote()}`
    ],
    "overwhelmed": [
      `When everything feels like too much, let's bring it back to just one thing. What's one small task you could focus on right now?`,
      `Try the "brain dump" technique - grab paper and write down everything swirling in your mind without organization or judgment.`,
      `When overwhelmed, our breathing often gets shallow. ${getRandomBreathing()}`
    ],
    "happy": [
      `That's wonderful! Savoring positive emotions helps them last longer. Can you take a mental photograph of this moment to revisit later?`,
      `Happiness is worth celebrating! Maybe add a little joy-boosting music? ${getRandomMusic()}`,
      `Positive emotions are great fuel! Maybe channel that energy into something creative or fun? ${getRandomGame()}`
    ],
    "neutral": [
      `If you'd like a mood boost, sometimes a good laugh helps. ${getRandomJoke()}`,
      `If you're looking for something to shift your energy, music can be powerful. ${getRandomMusic()}`,
      `Sometimes taking a moment to reflect helps. ${getRandomQuote()}`
    ]
  };

  const empathyResponse = empathyResponses[emotion][Math.floor(Math.random() * empathyResponses[emotion].length)];
  const suggestion = suggestions[emotion][Math.floor(Math.random() * suggestions[emotion].length)];

  return `${empathyResponse}\n\n${suggestion}\n\n👉 Want to try a fun distraction or talk more about it?`;
};

export const generateBreakResponse = (): string => {
  return "Would you like a full break kit or pick one thing?";
};

export const generateFullBreakKit = (): string => {
  const joke = getRandomJoke();
  const game = getRandomGame();
  const music = getRandomMusic();
  const quote = getRandomQuote();
  
  return `Here's your full break kit:\n\n🎭 Joke: ${joke}\n\n🎮 Game: ${game}\n\n🎵 Music: ${music}\n\n✨ Quote: ${quote}\n\n(+5 XP added for taking a break!)`;
};

export const generateSingleBreakItem = (type: 'joke' | 'game' | 'music' | 'quote' | 'breathing'): string => {
  let content = "";
  
  switch (type) {
    case 'joke':
      content = `🎭 Here's a joke to lighten the mood: ${getRandomJoke()}`;
      break;
    case 'game':
      content = `🎮 Game suggestion: ${getRandomGame()}`;
      break;
    case 'music':
      content = `🎵 Music recommendation: ${getRandomMusic()}`;
      break;
    case 'quote':
      content = `✨ Here's an inspiring quote: ${getRandomQuote()}`;
      break;
    case 'breathing':
      content = `🧘 Breathing exercise: ${getRandomBreathing()}`;
      break;
  }
  
  return `${content}\n\n(+3 XP added for taking a mental health activity!)`;
};

export const createMessage = (content: string, isUser: boolean): Message => {
  return {
    id: Date.now().toString(),
    content,
    isUser,
    timestamp: new Date()
  };
};
