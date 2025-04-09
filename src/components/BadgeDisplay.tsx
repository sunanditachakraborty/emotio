
import React from "react";
import { BadgeInfo } from "@/lib/types";

interface BadgeDisplayProps {
  badge: BadgeInfo;
  isLocked?: boolean;
}

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ badge, isLocked = false }) => {
  return (
    <div className="badge-card relative">
      {isLocked && (
        <div className="absolute inset-0 bg-gray-200/80 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
      )}
      <div className="text-4xl">{badge.emoji}</div>
      <h3 className="font-semibold text-center">{badge.name}</h3>
      <p className="text-xs text-gray-500 text-center">{badge.xpRequired} XP</p>
    </div>
  );
};

export default BadgeDisplay;
