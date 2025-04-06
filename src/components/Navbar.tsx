
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            House<span className="text-[#ffd54f]">Board</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-[#ffd54f] transition-colors">
            Features
          </a>
          <a href="#who-is-it-for" className="text-gray-300 hover:text-[#ffd54f] transition-colors">
            Who Is It For
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-[#ffd54f] transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div>
          <Button className="bg-houseboard-medium hover:bg-[#ffd54f] hover:text-houseboard-dark transition-colors duration-300">
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
