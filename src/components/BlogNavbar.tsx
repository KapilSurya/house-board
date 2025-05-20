
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const BlogNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleOpenDialog = () => {
    // Find the "Join Us Now" button in the Hero section and click it
    const joinButton = document.querySelector('.newsletter-join-button') as HTMLButtonElement;
    if (joinButton) {
      joinButton.click();
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img alt="HiveIn Logo" className="w-8 h-8" src="/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.png" />
              <h1 className="text-2xl font-bold text-gray-800">
                Hive<span className="text-[#43B3AE]">In</span>
              </h1>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/blogs" className="text-gray-600 hover:text-[#d6336c] transition-colors">Blog</Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button 
            className="bg-[#d6336c] hover:bg-[#c62b60] text-white" 
            onClick={handleOpenDialog}
          >
            Join the community
          </Button>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <Link 
              to="/blogs" 
              className="text-gray-600 hover:text-[#d6336c] transition-colors py-2 px-4" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default BlogNavbar;
