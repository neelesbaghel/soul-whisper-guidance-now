
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface MeditationCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  imageSrc: string;
  onClick: () => void;
}

const MeditationCard = ({
  title,
  description,
  duration,
  level,
  imageSrc,
  onClick
}: MeditationCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm text-foreground/70">{duration} · {level}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/80">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onClick} 
          className="w-full space-x-2 bg-spiritual-purple hover:bg-spiritual-deep-purple"
        >
          <Play className="w-4 h-4" />
          <span>Begin Meditation</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MeditationCard;
