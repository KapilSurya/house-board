import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-house-wall/80 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-house-yellow">
            House<span className="text-white">Board</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-white/90">
          <a
            href="#features"
            className="hover:text-house-yellow transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#who-is-it-for"
            className="hover:text-house-yellow transition-colors duration-300"
          >
            Who Is It For
          </a>
          <a
            href="#testimonials"
            className="hover:text-house-yellow transition-colors duration-300"
          >
            Testimonials
          </a>
        </nav>

        {/* Call to Action */}
        <div>
          <Button className="bg-house-yellow text-house-wall hover:bg-yellow-400 text-base font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-300 btn-hover-effect">
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;