
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Home Link */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.webp" 
                alt="HiveIn Logo" 
                className="h-10 w-10"
                width="40"
                height="40"
              />
              <span className="text-xl font-bold text-white">HiveIn</span>
            </Link>
            
            <Link
              to="/"
              className={`hidden md:block text-sm font-medium transition-colors hover:text-white ${
                isHome ? 'text-white border-b-2 border-white pb-1' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/who-is-it-for" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Who It's For
            </Link>
            <Link 
              to="/blogs" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Journal
            </Link>
            <Link 
              to="/faq" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-white px-4 py-2 ${
                  isHome ? 'text-white bg-white/10 rounded-md' : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/who-is-it-for" 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Who It's For
              </Link>
              <Link 
                to="/blogs" 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Journal
              </Link>
              <Link 
                to="/faq" 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
