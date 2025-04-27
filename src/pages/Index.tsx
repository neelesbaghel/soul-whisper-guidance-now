
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeditationCard from "@/components/MeditationCard";
import BreathingExercise from "@/components/BreathingExercise";
import DailyQuote from "@/components/DailyQuote";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lotus, Leaf, Wind, BookOpen } from "lucide-react";
import { meditations } from "@/data/meditations";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'meditations' | 'breathwork'>('meditations');
  
  // For demonstration purposes - would be connected to actual meditation audio in production
  const handleMeditationClick = () => {
    console.log("Meditation selected");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <Lotus className="w-16 h-16 text-spiritual-purple mx-auto" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">Find Your Inner Peace</h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Begin your journey of mindfulness and spiritual growth with guided meditations, 
              breathwork exercises, and daily wisdom.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button className="bg-spiritual-purple hover:bg-spiritual-deep-purple text-white">
                Start Meditating
              </Button>
              <Button variant="outline">
                Explore Practices
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Your Path to Spiritual Growth</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center p-6">
                <div className="bg-spiritual-lavender p-4 rounded-full mb-4">
                  <Lotus className="w-8 h-8 text-spiritual-purple" />
                </div>
                <h3 className="font-medium text-xl mb-2">Guided Meditations</h3>
                <p className="text-foreground/70 text-sm">
                  Discover peace and mindfulness through our collection of guided meditations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center p-6">
                <div className="bg-spiritual-lavender p-4 rounded-full mb-4">
                  <Wind className="w-8 h-8 text-spiritual-purple" />
                </div>
                <h3 className="font-medium text-xl mb-2">Breathing Exercises</h3>
                <p className="text-foreground/70 text-sm">
                  Calm your mind and energize your body with guided breathwork techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center p-6">
                <div className="bg-spiritual-lavender p-4 rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-spiritual-purple" />
                </div>
                <h3 className="font-medium text-xl mb-2">Spiritual Wisdom</h3>
                <p className="text-foreground/70 text-sm">
                  Find inspiration and guidance through timeless spiritual teachings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center p-6">
                <div className="bg-spiritual-lavender p-4 rounded-full mb-4">
                  <Leaf className="w-8 h-8 text-spiritual-purple" />
                </div>
                <h3 className="font-medium text-xl mb-2">Daily Practice</h3>
                <p className="text-foreground/70 text-sm">
                  Build a consistent practice with daily recommendations and reminders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="py-16 px-6 bg-spiritual-lavender/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">Begin Your Practice</h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
            Choose a meditation session or try a guided breathing exercise to restore balance and peace.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button 
                onClick={() => setActiveTab('meditations')} 
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === 'meditations' 
                    ? 'bg-spiritual-purple text-white' 
                    : 'bg-white text-spiritual-dark border border-spiritual-purple/30'
                }`}
              >
                Meditations
              </button>
              <button 
                onClick={() => setActiveTab('breathwork')} 
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === 'breathwork' 
                    ? 'bg-spiritual-purple text-white' 
                    : 'bg-white text-spiritual-dark border border-spiritual-purple/30'
                }`}
              >
                Breathing Exercise
              </button>
            </div>
          </div>
          
          {activeTab === 'meditations' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {meditations.slice(0, 6).map((meditation) => (
                <MeditationCard
                  key={meditation.id}
                  title={meditation.title}
                  description={meditation.description}
                  duration={meditation.duration}
                  level={meditation.level}
                  imageSrc={meditation.imageSrc}
                  onClick={handleMeditationClick}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-serif text-center mb-6">4-4-6 Breathing Exercise</h3>
              <BreathingExercise />
            </div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Daily Wisdom</h2>
          <DailyQuote />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
