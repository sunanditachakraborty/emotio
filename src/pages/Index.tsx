import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Message, Emotion } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";
import RobotAvatar from "@/components/RobotAvatar";
import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";
import ActivityOptions from "@/components/ActivityOptions";
import BreakOptions from "@/components/BreakOptions";
import XPProgress from "@/components/XPProgress";
import BadgeCollection from "@/components/BadgeCollection";
import NewBadgeModal from "@/components/NewBadgeModal";
import { 
  createMessage, 
  detectEmotion,
  getMoodDescription,
  generateResponse, 
  generateBreakResponse, 
  generateFullBreakKit, 
  generateSingleBreakItem 
} from "@/lib/chatUtils";
import { getCurrentBadge, getNextBadge } from "@/data/badges";

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [xp, setXp] = useState<number>(0);
  const [showBreakOptions, setShowBreakOptions] = useState<boolean>(false);
  const [currentEmotion, setCurrentEmotion] = useState<Emotion>("neutral");
  const [newBadge, setNewBadge] = useState<ReturnType<typeof getCurrentBadge> | null>(null);
  const [showNewBadgeModal, setShowNewBadgeModal] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const initialMessage = createMessage(
      "Hi there! I'm RoboMood, your emotional support buddy. 🤖💙\n\nHow are you feeling today? You can share anything that's on your mind, and I'll be here to listen and help boost your mood.\n\n👉 Want to try a fun distraction or talk more about your feelings?",
      false
    );
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const currentBadge = getCurrentBadge(xp);
    const previousBadge = xp > 0 ? getCurrentBadge(xp - 1) : null;
    
    if (previousBadge && currentBadge.id !== previousBadge.id) {
      setNewBadge(currentBadge);
      setShowNewBadgeModal(true);
    }
  }, [xp]);

  const handleSendMessage = async (content: string) => {
    const userMessage = createMessage(content, true);
    setMessages(prev => [...prev, userMessage]);
    
    const emotion = detectEmotion(content);
    setCurrentEmotion(emotion);
    
    if (content.length > 20) {
      addXP(10);
      toast({
        title: "Opened Up! +10 XP",
        description: "Thank you for sharing your feelings with me.",
      });
    }
    
    setIsTyping(true);
    
    try {
      const response = await generateResponse(content, emotion);
      const botMessage = createMessage(response, false);
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMessage = createMessage(
        "I'm having some trouble connecting right now. Could we try again in a moment?", 
        false
      );
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActivitySelect = (activity: string) => {
    if (activity === "break") {
      const botMessage = createMessage(generateBreakResponse(), false);
      setMessages(prev => [...prev, botMessage]);
      setShowBreakOptions(true);
    } else {
      addXP(3);
      let botMessage;
      
      switch (activity) {
        case "joke":
          botMessage = createMessage(generateSingleBreakItem("joke"), false);
          break;
        case "music":
          botMessage = createMessage(generateSingleBreakItem("music"), false);
          break;
        case "breathing":
          botMessage = createMessage(generateSingleBreakItem("breathing"), false);
          break;
        default:
          botMessage = createMessage("I'm not sure what you're looking for. Let me know if you want a joke, music suggestion, or breathing exercise!", false);
      }
      
      setMessages(prev => [...prev, botMessage]);
      
      toast({
        title: `Activity Completed! +3 XP`,
        description: "Great job taking care of your mental health!",
      });
    }
  };

  const handleBreakSelect = (type: 'full' | 'joke' | 'game' | 'music' | 'quote' | 'breathing') => {
    setShowBreakOptions(false);
    
    let xpGained = type === 'full' ? 5 : 3;
    addXP(xpGained);
    
    let botMessage;
    if (type === 'full') {
      botMessage = createMessage(generateFullBreakKit(), false);
    } else {
      botMessage = createMessage(generateSingleBreakItem(type), false);
    }
    
    setMessages(prev => [...prev, botMessage]);
    
    toast({
      title: `Break Taken! +${xpGained} XP`,
      description: "Taking breaks is essential for mental wellness!",
    });
  };

  const addXP = (amount: number) => {
    setXp(prev => prev + amount);
  };

  const currentBadge = getCurrentBadge(xp);
  const nextBadge = getNextBadge(xp);

  return (
    <div className="min-h-screen bg-robot-gray flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RobotAvatar emotion="happy" size="sm" />
            <h1 className="text-xl font-bold text-robot-primary">RoboMood Boost</h1>
          </div>
          <div className="text-sm font-medium bg-robot-primary/10 px-3 py-1 rounded-full text-robot-primary">
            {xp} XP • {currentBadge.name} {currentBadge.emoji}
          </div>
        </div>
      </header>
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-6">
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="chat" className="flex-1">Chat</TabsTrigger>
            <TabsTrigger value="progress" className="flex-1">Progress</TabsTrigger>
            <TabsTrigger value="badges" className="flex-1">Badges</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex flex-col items-center justify-center mb-4">
                <RobotAvatar emotion={currentEmotion} size="lg" />
                <h2 className="mt-4 text-xl font-semibold text-robot-dark">Let's boost your mood today!</h2>
                <p className="text-robot-neutral text-center mt-2">Share how you're feeling or try one of our mood-boosting activities</p>
              </div>
              
              <ActivityOptions onActivitySelect={handleActivitySelect} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 h-[400px] overflow-y-auto">
              {messages.map((msg) => (
                <ChatBubble key={msg.id} message={msg} />
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="mr-2 flex-shrink-0">
                    <RobotAvatar emotion="neutral" size="sm" />
                  </div>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {showBreakOptions ? (
              <div className="bg-white rounded-lg shadow-sm p-4">
                <BreakOptions onBreakSelect={handleBreakSelect} />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-4">
                <ChatInput onSendMessage={handleSendMessage} disabled={isTyping || showBreakOptions} />
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="progress">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 text-center">Your Wellness Journey</h2>
              <div className="space-y-6">
                <XPProgress 
                  xp={xp} 
                  currentBadge={currentBadge} 
                  nextBadge={nextBadge} 
                />
                
                <div className="p-4 bg-robot-primary/10 rounded-lg">
                  <h3 className="font-semibold mb-2">How to Earn XP:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Taking a break</span>
                      <span className="font-medium">+5 XP</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Playing games or listening to music</span>
                      <span className="font-medium">+3 XP</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Opening up about your feelings</span>
                      <span className="font-medium">+10 XP</span>
                    </li>
                  </ul>
                </div>
                
                {currentBadge && (
                  <div className="p-4 bg-robot-light/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Current Badge:</h3>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{currentBadge.emoji}</div>
                      <div>
                        <p className="font-medium">{currentBadge.name}</p>
                        <p className="text-sm text-gray-600">{currentBadge.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="badges">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <BadgeCollection userXP={xp} />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-white py-4 border-t">
        <div className="container max-w-4xl mx-auto px-4">
          <p className="text-center text-sm text-gray-500">
            RoboMood Boost - Your emotional support companion. Take care of your mental health one step at a time.
          </p>
        </div>
      </footer>
      
      <NewBadgeModal
        badge={newBadge}
        isOpen={showNewBadgeModal}
        onClose={() => setShowNewBadgeModal(false)}
      />
    </div>
  );
};

export default Index;
