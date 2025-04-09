
import React from "react";
import { Emotion } from "@/lib/types";

interface RobotAvatarProps {
  emotion: Emotion;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const RobotAvatar: React.FC<RobotAvatarProps> = ({ 
  emotion, 
  size = "md",
  animated = true 
}) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-32 h-32"
  };

  const getEyeStyle = () => {
    switch (emotion) {
      case "happy":
        return "h-[25%] rounded-b-full bg-white";
      case "sad":
        return "h-[25%] rounded-t-full bg-white mt-[15%]";
      case "anxious":
        return "h-[35%] rounded-full bg-white animate-pulse";
      case "stressed":
        return "h-[25%] rounded-full bg-white";
      case "overwhelmed":
        return "h-[15%] rounded-full bg-white animate-pulse";
      case "burned-out":
        return "h-[10%] rounded-full bg-white";
      default:
        return "h-[25%] rounded-full bg-white";
    }
  };

  const getMouthStyle = () => {
    switch (emotion) {
      case "happy":
        return "h-[10%] w-[60%] rounded-b-full bg-white mt-[10%]";
      case "sad":
        return "h-[10%] w-[60%] rounded-t-full bg-white mt-[15%]";
      case "anxious":
        return "h-[5%] w-[40%] bg-white mt-[20%]";
      case "stressed":
        return "h-[5%] w-[70%] bg-white mt-[20%] rounded-sm";
      case "overwhelmed":
        return "h-[8%] w-[50%] bg-white mt-[20%] rounded-full";
      case "burned-out":
        return "h-[3%] w-[30%] bg-white mt-[20%]";
      default:
        return "h-[8%] w-[50%] rounded-sm bg-white mt-[15%]";
    }
  };

  const getExpressionClass = () => {
    let baseClass = "flex flex-col items-center justify-center";
    
    if (animated) {
      switch (emotion) {
        case "anxious":
        case "stressed":
          return `${baseClass} animate-pulse`;
        case "happy":
          return `${baseClass}`;
        default:
          return baseClass;
      }
    }
    
    return baseClass;
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-robot-primary text-white relative ${animated ? "animate-float" : ""} robot-shadow`}>
      <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center">
        <div className={getExpressionClass()}>
          <div className="w-full flex justify-center gap-4 px-[15%]">
            <div className="w-[30%] aspect-square flex items-center justify-center">
              <div className={getEyeStyle()}></div>
            </div>
            <div className="w-[30%] aspect-square flex items-center justify-center">
              <div className={getEyeStyle()}></div>
            </div>
          </div>
          <div className={getMouthStyle()}></div>
        </div>
        
        {/* Antenna - optional detail */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[80%] w-[8%] h-[25%]">
          <div className="w-full h-full flex flex-col items-center">
            <div className="w-[60%] aspect-square rounded-full bg-robot-blue animate-pulse-light"></div>
            <div className="w-[40%] h-[80%] bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotAvatar;
