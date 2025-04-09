
import React from "react";
import { Button } from "@/components/ui/button";

interface ActivityOptionsProps {
  onActivitySelect: (activity: string) => void;
}

const ActivityOptions: React.FC<ActivityOptionsProps> = ({ onActivitySelect }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-4">
      <Button 
        variant="outline" 
        onClick={() => onActivitySelect("break")}
        className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
      >
        Take a Break
      </Button>
      <Button 
        variant="outline" 
        onClick={() => onActivitySelect("joke")}
        className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
      >
        Tell a Joke
      </Button>
      <Button 
        variant="outline" 
        onClick={() => onActivitySelect("music")}
        className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
      >
        Music Suggestion
      </Button>
      <Button 
        variant="outline" 
        onClick={() => onActivitySelect("breathing")}
        className="bg-robot-primary/10 hover:bg-robot-primary/20 border-robot-primary/20"
      >
        Breathing Exercise
      </Button>
    </div>
  );
};

export default ActivityOptions;
