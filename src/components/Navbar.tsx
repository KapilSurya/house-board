
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const handleOpenDialog = () => {
    // Find the "Join Us Now" button in the Hero section and click it
    const joinButton = document.querySelector('.newsletter-join-button') as HTMLButtonElement;
    if (joinButton) {
      joinButton.click();
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on the homepage, navigate to homepage first with a section hash
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Handle hash in URL for direct navigation to sections
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Delay to ensure component is mounted
    }
  }, [location]);

  return <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-gradient-to-b from-black/70 to-transparent">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img alt="HiveIn Logo" className="w-8 h-8" src="/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.png" />
            <h1 className="text-2xl font-bold text-white">
              Hive<span className="text-[#43B3AE]">In</span>
            </h1>
          </div>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <button 
          onClick={() => scrollToSection('features')} 
          className="text-white hover:text-[#43B3AE] transition-colors"
        >
          Features
        </button>
        <button 
          onClick={() => scrollToSection('who-is-it-for')} 
          className="text-white hover:text-[#43B3AE] transition-colors"
        >
          Who is it for
        </button>
        <button 
          onClick={() => scrollToSection('faq')} 
          className="text-white hover:text-[#43B3AE] transition-colors"
        >
          FAQ
        </button>
        <Link to="/blogs" className="text-white hover:text-[#43B3AE] transition-colors">
          Blog
        </Link>
      </nav>
      
      <div className="flex items-center gap-3">
        {/* Only show ThemeToggle on desktop */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <Button className="bg-houseboard-medium hover:bg-[#43B3AE] hover:text-houseboard-dark transition-colors duration-300" onClick={handleOpenDialog}>
          Join the community
        </Button>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    
    {/* Mobile menu */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-black/90 backdrop-blur-md">
        <nav className="flex flex-col space-y-4 p-4">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-white hover:text-[#43B3AE] transition-colors py-2 px-4 text-left"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('who-is-it-for')}
            className="text-white hover:text-[#43B3AE] transition-colors py-2 px-4 text-left"
          >
            Who is it for
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-white hover:text-[#43B3AE] transition-colors py-2 px-4 text-left"
          >
            FAQ
          </button>
          <Link 
            to="/blogs" 
            className="text-white hover:text-[#43B3AE] transition-colors py-2 px-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          
          {/* Theme toggle in mobile menu */}
          <button 
            className="flex items-center gap-2 text-white hover:text-[#43B3AE] transition-colors py-2 px-4" 
            onClick={() => {
              toggleTheme();
              // Don't close menu when toggling theme
            }}
          >
            {theme === 'dark' ? (
              <>
                <span className="i-lucide-sun h-5 w-5" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <span className="i-lucide-moon h-5 w-5" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </nav>
      </div>
    )}
  </header>;
};

export default Navbar;
