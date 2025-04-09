
import React from "react";
import { Button } from "@/components/ui/button";

interface BreakOptionsProps {
  onBreakSelect: (type: 'full' | 'joke' | 'game' | 'music' | 'quote' | 'breathing') => void;
}

const BreakOptions: React.FC<BreakOptionsProps> = ({ onBreakSelect }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-center font-medium">Choose your break activity:</h3>
      <div className="grid grid-cols-2 gap-2">
        <Button 
          variant="outline" 
          onClick={() => onBreakSelect("full")}
          className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
        >
          Full Break Kit
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onBreakSelect("joke")}
          className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
        >
          Joke
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onBreakSelect("game")}
          className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
        >
          Game
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onBreakSelect("music")}
          className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
        >
          Music
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onBreakSelect("quote")}
          className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
        >
          Quote
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onBreakSelect("breathing")}
          className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
        >
          Breathing
        </Button>
      </div>
    </div>
  );
};

export default BreakOptions;
