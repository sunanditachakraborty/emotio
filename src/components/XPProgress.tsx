
import React from "react";
import { Progress } from "@/components/ui/progress";
import { BadgeInfo } from "@/lib/types";

interface XPProgressProps {
  xp: number;
  currentBadge: BadgeInfo;
  nextBadge: BadgeInfo | null;
}

const XPProgress: React.FC<XPProgressProps> = ({ xp, currentBadge, nextBadge }) => {
  const progressPercentage = nextBadge 
    ? ((xp - currentBadge.xpRequired) / (nextBadge.xpRequired - currentBadge.xpRequired)) * 100 
    : 100;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-700">XP Progress</h3>
        <span className="text-sm font-bold text-robot-primary">{xp} XP</span>
      </div>
      <Progress value={progressPercentage} className="h-2 mb-2" />
      <div className="flex justify-between text-xs text-gray-500">
        <div>
          <span className="font-semibold">{currentBadge.emoji} {currentBadge.name}</span>
        </div>
        {nextBadge && (
          <div>
            <span>Next: {nextBadge.emoji} {nextBadge.name} ({nextBadge.xpRequired} XP)</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default XPProgress;
