
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
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-gradient-to-b from-black/70 to-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/bf904c21-ef0c-4190-97d4-9f3811f4a99a.png"
            alt="HiveIn Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-2xl font-bold text-[#E0E6ED]">
            Hive<span className="text-[#43B3AE]">In</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#who-is-it-for" className="text-[#E0E6ED] hover:text-[#43B3AE] transition-colors">
            Who Is It For
          </a>
          <a href="#features" className="text-[#E0E6ED] hover:text-[#43B3AE] transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-[#E0E6ED] hover:text-[#43B3AE] transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button 
            className="bg-[#43B3AE] text-[#0a1826] hover:bg-[#FFD54F] hover:text-[#0a1826] transition-colors duration-300"
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
