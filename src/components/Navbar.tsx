
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const handleOpenDialog = () => {
    // Find the "Join Us Now" button in the Hero section and click it
    const joinButton = document.querySelector('.newsletter-join-button') as HTMLButtonElement;
    if (joinButton) {
      joinButton.click();
    }
  };
  
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-gradient-to-b from-black/80 to-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/8c253fbd-5ccb-40a0-8f63-5e01ae108072.png" alt="HiveIn Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-white">
            Hive<span className="text-[#43B3AE]">In</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#who-is-it-for" className="text-gray-300 hover:text-[#43B3AE] transition-colors">
            Who Is It For
          </a>
          <a href="#features" className="text-gray-300 hover:text-[#43B3AE] transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-[#43B3AE] transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button className="bg-[#43B3AE] hover:bg-[#2d8f8b] text-black font-medium hover:text-white transition-colors duration-300" onClick={handleOpenDialog}>Shape HiveIn</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
