
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BadgeInfo } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface NewBadgeModalProps {
  badge: BadgeInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

const NewBadgeModal: React.FC<NewBadgeModalProps> = ({ badge, isOpen, onClose }) => {
  if (!badge) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="bg-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg">New Badge Unlocked! 🎉</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center py-6 gap-4">
          <div className="text-5xl mb-2">{badge.emoji}</div>
          <h2 className="text-xl font-bold text-center">{badge.name}</h2>
          <p className="text-center text-gray-700">{badge.description}</p>
          
          {badge.imageUrl && (
            <div className="my-4 max-w-[200px]">
              <img 
                src={badge.imageUrl} 
                alt={badge.name} 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}
          
          <Button onClick={onClose} className="bg-robot-primary hover:bg-robot-primary/90">
            Cool! Thanks!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewBadgeModal;
