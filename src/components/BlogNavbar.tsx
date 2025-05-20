
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
    <header className="fixed top-0 w-full z-50 bg-[#0a1826] shadow-sm">
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
        
        <div className="flex items-center gap-3">
          <Button 
            className="bg-white hover:bg-gray-100 text-[#0a1826]" 
            onClick={handleOpenDialog}
          >
            Join the community
          </Button>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu - simplified since we removed the links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1826] shadow-md">
          <nav className="flex flex-col space-y-4 p-4"></nav>
        </div>
      )}
    </header>
  );
};

export default BlogNavbar;
