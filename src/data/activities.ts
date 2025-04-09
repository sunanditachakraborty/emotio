
import { Activity } from "@/lib/types";

// Jokes for the chatbot to use
export const jokes: string[] = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "What do you call a fake noodle? An impasta!",
  "How does a penguin build its house? Igloos it together!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the math book look sad? Because it had too many problems.",
  "What's orange and sounds like a parrot? A carrot!",
  "I would tell you a chemistry joke, but I know I wouldn't get a reaction."
];

// Inspirational quotes for the chatbot to use
export const quotes: string[] = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "It always seems impossible until it's done. — Nelson Mandela",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. — Franklin D. Roosevelt",
  "The way to get started is to quit talking and begin doing. — Walt Disney",
  "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
  "The secret of getting ahead is getting started. — Mark Twain"
];

// Music suggestions for the chatbot to use
export const musicSuggestions: string[] = [
  "Try listening to 'Weightless' by Marconi Union - scientifically designed to reduce anxiety!",
  "How about some calming piano music like Ludovico Einaudi's 'Experience'?",
  "Lo-fi beats are great for studying and relaxing - check out a lo-fi study playlist.",
  "Nature sounds like rainfall or ocean waves might help you decompress.",
  "Classical music by Mozart has been shown to improve focus and mood.",
  "Upbeat pop songs can boost your energy - maybe try something by Lizzo or Bruno Mars!",
  "Instrumental film scores create an inspiring backdrop for your work.",
  "Acoustic covers of your favorite songs might be a nice change of pace.",
  "Jazz classics can create a sophisticated, relaxing atmosphere.",
  "Binaural beats are designed to affect your brainwaves and can promote relaxation."
];

// Game suggestions for the chatbot to use
export const gameSuggestions: string[] = [
  "Try playing a quick round of 'Wordle' - it's a fun word puzzle game!",
  "How about a short meditation game like 'Breath of Light' on your phone?",
  "Take a mental break with the puzzle game 'Monument Valley'.",
  "Play 'I Spy' with objects around you - it's a simple mindfulness exercise.",
  "Try the color meditation game 'Blendoku' for a creative break.",
  "Mini crosswords or sudoku puzzles can be a satisfying mental reset.",
  "Play the 'Name 5' game - name 5 things in a category within 10 seconds.",
  "Try a quick round of 'Dots and Boxes' on paper or online.",
  "How about a relaxing game like 'Flower' or 'Journey' for immersive escapism?",
  "The card game 'Solitaire' is classic for a reason - it's absorbing and calming."
];

// Breathing exercise instructions for the chatbot to use
export const breathingExercises: string[] = [
  "Try the 4-7-8 technique: Inhale for 4 seconds, hold for 7, exhale for 8. Repeat 4 times.",
  "Box breathing: Inhale for 4, hold for 4, exhale for 4, hold for 4. Visualize tracing a square.",
  "Diaphragmatic breathing: Place one hand on your chest and one on your stomach. Breathe deeply so only your stomach hand rises.",
  "Try alternate nostril breathing: Close your right nostril, inhale through your left, then close left, exhale through right.",
  "Progressive relaxation: Breathe deeply while tensing and releasing each muscle group from toes to head.",
  "Equal breathing: Make your inhales and exhales the same length - try counting to 4 for each.",
  "Take 5 deep belly breaths, focusing only on the sensation of breathing. Notice how you feel afterward.",
  "Try the 5-5-5 technique: Breathe in for 5 seconds, hold for 5 seconds, release for 5 seconds.",
  "Visualize a wave as you breathe - rising with inhale, falling with exhale, watching from the shore of your mind.",
  "Coherent breathing: Breathe in and out slowly, aiming for about 5 breaths per minute."
];

export const activities: Activity[] = [
  {
    id: "take-break",
    name: "Take a Break",
    description: "Step away from work/study for 5-10 minutes",
    xpValue: 5,
    type: "breathing"
  },
  {
    id: "play-game",
    name: "Play a Game",
    description: "Enjoy a quick mental distraction",
    xpValue: 3,
    type: "game"
  },
  {
    id: "listen-music",
    name: "Listen to Music",
    description: "Enjoy some mood-boosting tunes",
    xpValue: 3,
    type: "music"
  },
  {
    id: "opening-up",
    name: "Opening Up",
    description: "Share your feelings and experiences",
    xpValue: 10,
    type: "opening-up"
  }
];

export const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomJoke = (): string => getRandomItem(jokes);
export const getRandomQuote = (): string => getRandomItem(quotes);
export const getRandomMusic = (): string => getRandomItem(musicSuggestions);
export const getRandomGame = (): string => getRandomItem(gameSuggestions);
export const getRandomBreathing = (): string => getRandomItem(breathingExercises);
