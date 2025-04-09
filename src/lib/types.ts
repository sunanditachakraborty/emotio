
export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface BadgeInfo {
  id: string;
  name: string;
  emoji: string;
  description: string;
  xpRequired: number;
  imageUrl: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  xpValue: number;
  type: 'joke' | 'music' | 'game' | 'breathing' | 'opening-up';
}

export type Emotion = 'neutral' | 'happy' | 'sad' | 'anxious' | 'stressed' | 'overwhelmed' | 'burned-out';
