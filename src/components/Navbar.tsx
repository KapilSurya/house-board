
import React from 'react';
import { Button } from "@/components/ui/button";
import ThemeToggle from './ThemeToggle';
const Navbar: React.FC = () => {
  const handleOpenDialog = () => {
    // Find the "Join Us Now" button in the Hero section and click it
    const joinButton = document.querySelector('.newsletter-join-button') as HTMLButtonElement;
    if (joinButton) {
      joinButton.click();
    }
  };
  return <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-gradient-to-b from-black/70 to-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img alt="HiveIn Logo" className="w-8 h-8" src="/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.png" />
          <h1 className="text-2xl font-bold text-white">
            Hive<span className="text-[#43B3AE]">In</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="bg-houseboard-medium hover:bg-[#43B3AE] hover:text-houseboard-dark transition-colors duration-300" onClick={handleOpenDialog}>Join the community </Button>
        </div>
      </div>
    </header>;
};
export default Navbar;
