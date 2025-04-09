
import React from "react";
import { Message } from "@/lib/types";
import RobotAvatar from "./RobotAvatar";
import { detectEmotion } from "@/lib/chatUtils";

interface ChatBubbleProps {
  message: Message;
  autoDetectEmotion?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ 
  message,
  autoDetectEmotion = true
}) => {
  const emotion = autoDetectEmotion && !message.isUser ? detectEmotion(message.content) : "neutral";
  
  return (
    <div className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-4`}>
      {!message.isUser && (
        <div className="mr-2 flex-shrink-0">
          <RobotAvatar emotion={emotion} size="sm" />
        </div>
      )}
      <div className={message.isUser ? "user-message" : "robot-message"}>
        <p className="whitespace-pre-line">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
