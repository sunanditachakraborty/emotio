
import React from "react";
import { badges } from "@/data/badges";
import BadgeDisplay from "./BadgeDisplay";

interface BadgeCollectionProps {
  userXP: number;
}

const BadgeCollection: React.FC<BadgeCollectionProps> = ({ userXP }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-center">Badge Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {badges.map(badge => (
          <BadgeDisplay
            key={badge.id}
            badge={badge}
            isLocked={userXP < badge.xpRequired}
          />
        ))}
      </div>
    </div>
  );
};

export default BadgeCollection;
