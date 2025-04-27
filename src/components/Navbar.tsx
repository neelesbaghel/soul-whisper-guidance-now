
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Lotus, Moon, Sun } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  
  return (
    <nav className="py-4 px-6 fixed w-full backdrop-blur-subtle z-50 transition-all duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Lotus className="w-8 h-8 text-spiritual-purple" />
          <span className="text-xl font-serif font-semibold">SoulWhisper</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-spiritual-purple transition-colors">Home</Link>
          <Link to="/" className="text-foreground/80 hover:text-spiritual-purple transition-colors">Meditations</Link>
          <Link to="/" className="text-foreground/80 hover:text-spiritual-purple transition-colors">Breathwork</Link>
          <Link to="/" className="text-foreground/80 hover:text-spiritual-purple transition-colors">Wisdom</Link>
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="ml-2">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="mr-2">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-subtle border-b border-border animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link to="/" className="text-foreground/80 hover:text-spiritual-purple transition-colors py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/" className="text-foreground/80 hover:text-spiritual-purple transition-colors py-2" onClick={() => setIsOpen(false)}>Meditations</Link>
            <Link to="/" className="text-foreground/80 hover:text-spiritual-purple transition-colors py-2" onClick={() => setIsOpen(false)}>Breathwork</Link>
            <Link to="/" className="text-foreground/80 hover:text-spiritual-purple transition-colors py-2" onClick={() => setIsOpen(false)}>Wisdom</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
