
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-houseboard-dark">
            House<span className="text-houseboard-medium">Board</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-houseboard-dark hover:text-houseboard-medium transition-colors">
            Features
          </a>
          <a href="#who-is-it-for" className="text-houseboard-dark hover:text-houseboard-medium transition-colors">
            Who Is It For
          </a>
          <a href="#testimonials" className="text-houseboard-dark hover:text-houseboard-medium transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div>
          <Button className="bg-houseboard-medium hover:bg-houseboard-dark text-white btn-hover-effect">
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
