
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState("inhale");
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Breathing cycle settings
  const inhaleDuration = 4;
  const holdDuration = 4;
  const exhaleDuration = 6;
  const cycleTime = inhaleDuration + holdDuration + exhaleDuration;
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          const newSeconds = (prevSeconds + 1) % cycleTime;
          
          // Update the breathing phase
          if (newSeconds === 0) {
            setPhase("inhale");
            setCount(prevCount => prevCount + 1);
          } else if (newSeconds === inhaleDuration) {
            setPhase("hold");
          } else if (newSeconds === inhaleDuration + holdDuration) {
            setPhase("exhale");
          }
          
          return newSeconds;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const toggleBreathing = () => {
    setIsActive(!isActive);
  };

  const resetBreathing = () => {
    setIsActive(false);
    setPhase("inhale");
    setCount(0);
    setSeconds(0);
  };

  const getInstructions = () => {
    switch (phase) {
      case "inhale":
        return "Breathe In";
      case "hold":
        return "Hold";
      case "exhale":
        return "Breathe Out";
      default:
        return "Prepare";
    }
  };

  const getRemainingTime = () => {
    if (phase === "inhale") {
      return inhaleDuration - seconds;
    } else if (phase === "hold") {
      return holdDuration - (seconds - inhaleDuration);
    } else {
      return exhaleDuration - (seconds - inhaleDuration - holdDuration);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6">
      <div className="relative w-64 h-64 mb-8">
        <div className={`absolute inset-0 rounded-full bg-spiritual-purple/30 flex items-center justify-center 
          ${phase === "inhale" ? "animate-breathe" : phase === "exhale" ? "animate-pulse-gentle" : ""}`}>
          <div className="text-center">
            <p className="text-3xl font-serif mb-2">{getInstructions()}</p>
            <p className="text-5xl font-semibold">{getRemainingTime()}</p>
            {count > 0 && (
              <p className="mt-2 text-sm opacity-70">Cycle: {count}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button
          onClick={toggleBreathing}
          className="bg-spiritual-purple hover:bg-spiritual-deep-purple"
        >
          {isActive ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              {count > 0 ? "Resume" : "Start"}
            </>
          )}
        </Button>
        <Button
          onClick={resetBreathing}
          variant="outline"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default BreathingExercise;
