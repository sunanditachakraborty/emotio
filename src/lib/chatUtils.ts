
import { Emotion, Message } from "./types";
import { sendMessageToLyzr } from "./lyzrService";

// Helper to create a message object
export const createMessage = (content: string, isUser: boolean): Message => ({
  id: Math.random().toString(36).substring(2, 9),
  content,
  isUser,
  timestamp: new Date(),
});

// Simple emotion detection based on keywords in the message
export const detectEmotion = (message: string): Emotion => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety") || lowerMessage.includes("worried")) {
    return "anxious";
  } else if (lowerMessage.includes("stress") || lowerMessage.includes("stressed")) {
    return "stressed";
  } else if (lowerMessage.includes("sad") || lowerMessage.includes("unhappy") || lowerMessage.includes("depressed")) {
    return "sad";
  } else if (lowerMessage.includes("overwhelm") || lowerMessage.includes("too much")) {
    return "overwhelmed";
  } else if (lowerMessage.includes("tired") || lowerMessage.includes("exhausted") || lowerMessage.includes("burnout")) {
    return "burned-out";
  } else if (lowerMessage.includes("happy") || lowerMessage.includes("great") || lowerMessage.includes("good")) {
    return "happy";
  }
  
  return "neutral";
};

// Get a mood description based on the detected emotion
export const getMoodDescription = (emotion: Emotion): string => {
  switch (emotion) {
    case "anxious":
      return "You seem to be feeling anxious. That's completely understandable - life can throw a lot at us.";
    case "stressed":
      return "I'm noticing some stress in your message. Many students feel this way, especially during busy periods.";
    case "sad":
      return "It sounds like you're feeling down right now. I'm here to listen and help.";
    case "overwhelmed":
      return "You're feeling overwhelmed - when everything feels like too much at once.";
    case "burned-out":
      return "I'm detecting some burnout vibes. It's so important to take care of yourself when you're feeling exhausted.";
    case "happy":
      return "I'm glad to hear you're in a good mood! It's always nice to celebrate positive feelings.";
    default:
      return "Thanks for sharing how you're feeling with me.";
  }
};

// Generate a response based on user input and detected emotion
export const generateResponse = async (message: string, emotion: Emotion): Promise<string> => {
  try {
    // First, try to get a response from Lyzr
    const lyzrResponse = await sendMessageToLyzr(message);
    
    if (lyzrResponse.message && lyzrResponse.message.trim() !== "") {
      // If we got a valid response from Lyzr, use it
      return lyzrResponse.message + "\n\n👉 Want to try a fun distraction or talk more about your feelings?";
    } else {
      // Fallback to our local response generation if Lyzr fails
      return generateLocalResponse(message, emotion);
    }
  } catch (error) {
    console.error("Error generating response with Lyzr:", error);
    // Fallback to local response in case of error
    return generateLocalResponse(message, emotion);
  }
};

// Our local response generation as a fallback
const generateLocalResponse = (message: string, emotion: Emotion): string => {
  const moodDescription = getMoodDescription(emotion);
  
  let response = `${moodDescription}\n\n`;
  
  switch (emotion) {
    case "anxious":
      response += "Anxiety can make it hard to focus. Remember that you're not alone in feeling this way. Many students experience anxiety, especially around deadlines and exams.\n\nTaking a few deep breaths can help calm your nervous system.";
      break;
    case "stressed":
      response += "Stress is your body's response to pressure. Breaking down your tasks into smaller steps might help make things feel more manageable.\n\nRemember that it's okay to ask for help when you need it.";
      break;
    case "sad":
      response += "It's okay to feel sad sometimes. Your emotions are valid, and acknowledging them is an important part of processing how you feel.\n\nRemember that you won't feel this way forever, even if it seems that way right now.";
      break;
    case "overwhelmed":
      response += "When everything feels like too much, it can help to focus on just one small thing at a time.\n\nMaybe there's one tiny task you can complete, or even just taking a moment to breathe.";
      break;
    case "burned-out":
      response += "Burnout is a sign that you've been pushing yourself too hard. Your body and mind need rest.\n\nCan you find a way to take a break, even a short one? Sometimes stepping away is the most productive thing you can do.";
      break;
    case "happy":
      response += "It's wonderful that you're feeling good! Positive emotions are worth celebrating.\n\nIs there a way you can extend this good feeling, perhaps by doing something you enjoy?";
      break;
    default:
      response += "Thank you for sharing with me. I'm here to listen and support you however I can.\n\nRemember that taking care of your mental wellbeing is just as important as your academic success.";
  }
  
  response += "\n\n👉 Want to try a fun distraction or talk more about your feelings?";
  
  return response;
};

// Generate a response when the user asks for a break
export const generateBreakResponse = (): string => {
  return "Taking a break is a great idea! What would you like to do?\n\nI can offer you a full break kit with a variety of activities, or you can choose just one thing that appeals to you right now.";
};

// Generate a full break kit with multiple activities
export const generateFullBreakKit = (): string => {
  const joke = generateSingleBreakItem("joke");
  const game = generateSingleBreakItem("game");
  const music = generateSingleBreakItem("music");
  const quote = generateSingleBreakItem("quote");
  const breathing = generateSingleBreakItem("breathing");
  
  return `Here's your complete break kit!\n\n🎭 JOKE TIME:\n${joke}\n\n🎮 QUICK GAME:\n${game}\n\n🎵 MUSIC SUGGESTION:\n${music}\n\n💫 INSPIRATIONAL QUOTE:\n${quote}\n\n🧘 BREATHING EXERCISE:\n${breathing}\n\nHow are you feeling now? Would you like to talk more about what's on your mind?`;
};

// Generate a single break item based on the type
export const generateSingleBreakItem = (type: "joke" | "game" | "music" | "quote" | "breathing"): string => {
  switch (type) {
    case "joke":
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What did the ocean say to the beach? Nothing, it just waved!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised!",
        "What do you call a fake noodle? An impasta!",
        "How does a penguin build its house? Igloos it together!",
        "Why don't eggs tell jokes? They'd crack each other up!",
        "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
      
    case "game":
      return "Let's play a quick mental game! Try to list 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This grounding exercise helps bring you back to the present moment.";
      
    case "music":
      const musicSuggestions = [
        "Try listening to lo-fi beats for studying - it's great background music that isn't distracting.",
        "Classical music, especially compositions by Mozart, has been shown to help with concentration.",
        "Nature sounds like rainfall or ocean waves can be very calming when you're stressed.",
        "Check out the 'Focus' playlists on streaming services - they're designed to help you concentrate.",
        "Sometimes a quick dance break to your favorite upbeat song can reset your mood!",
      ];
      return musicSuggestions[Math.floor(Math.random() * musicSuggestions.length)];
      
    case "quote":
      const quotes = [
        "\"You don't have to see the whole staircase, just take the first step.\" - Martin Luther King Jr.",
        "\"It always seems impossible until it's done.\" - Nelson Mandela",
        "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt",
        "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
        "\"Your present circumstances don't determine where you can go; they merely determine where you start.\" - Nido Qubein",
        "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill",
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
      
    case "breathing":
      return "Try this simple breathing exercise: Breathe in slowly through your nose for 4 counts, hold for 2 counts, then exhale slowly through your mouth for 6 counts. Repeat this pattern 5 times. This technique, called '4-2-6 breathing,' can help activate your parasympathetic nervous system and reduce stress.";
  }
};
