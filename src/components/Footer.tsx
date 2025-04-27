
import { Lotus, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-spiritual-dark/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Lotus className="w-6 h-6 text-spiritual-purple" />
              <span className="text-lg font-serif font-semibold">SoulWhisper</span>
            </div>
            <p className="text-sm text-foreground/70 mb-6">
              Guiding you on your journey of spiritual growth and mindfulness practice.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-spiritual-purple transition-colors">Home</Link></li>
              <li><Link to="/" className="hover:text-spiritual-purple transition-colors">Meditations</Link></li>
              <li><Link to="/" className="hover:text-spiritual-purple transition-colors">Breathwork</Link></li>
              <li><Link to="/" className="hover:text-spiritual-purple transition-colors">Daily Wisdom</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-spiritual-purple transition-colors">Getting Started</Link></li>
              <li><Link to="/" className="hover:text-spiritual-purple transition-colors">Meditation Guides</Link></li>
              <li><Link to="/" className="hover:text-spiritual-purple transition-colors">Practice Tips</Link></li>
              <li><Link to="/" className="hover:text-spiritual-purple transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-spiritual-purple transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-spiritual-purple transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-spiritual-purple transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>© {currentYear} SoulWhisper. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> for mindful living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
