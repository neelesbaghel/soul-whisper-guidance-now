
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { quotes } from "@/data/quotes";

const DailyQuote = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);
  
  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };
  
  return (
    <Card className="w-full max-w-xl mx-auto bg-gradient-to-r from-spiritual-lavender to-spiritual-blue">
      <CardContent className="pt-6 px-6 pb-6">
        <div className="text-center space-y-4">
          <p className="text-xl italic font-serif">"{quote.text}"</p>
          <p className="text-sm font-medium">— {quote.author}</p>
          <Button 
            onClick={handleNewQuote}
            variant="outline" 
            className="mt-4 bg-white/50 hover:bg-white/80 border-none"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            New Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyQuote;
