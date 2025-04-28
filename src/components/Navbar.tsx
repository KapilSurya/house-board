
import React from 'react';
import { Button } from "@/components/ui/button";
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const handleOpenDialog = () => {
    const joinButton = document.querySelector('.newsletter-join-button') as HTMLButtonElement;
    if (joinButton) {
      joinButton.click();
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a1826]/90 backdrop-blur-sm border-b border-[#162536]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/2d9cc7b6-e84f-42a6-bca6-4c5dbc89ce2f.png" 
            alt="HiveIn Logo" 
            className="h-8 w-auto"
          />
          <h1 className="text-2xl font-bold">
            <span className="text-[#E0E6ED]">Hive</span>
            <span className="text-[#76D7C4]">In</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-[#E0E6ED] hover:text-[#76D7C4] transition-colors">
            Features
          </a>
          <a href="#who-is-it-for" className="text-[#E0E6ED] hover:text-[#76D7C4] transition-colors">
            Who Is It For
          </a>
          <a href="#testimonials" className="text-[#E0E6ED] hover:text-[#76D7C4] transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button 
            className="bg-[#76D7C4] hover:bg-[#FFD54F] text-[#0a1826] font-medium transition-colors duration-300"
            onClick={handleOpenDialog}
          >
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
