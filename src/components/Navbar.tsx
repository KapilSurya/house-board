
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FeedbackDialog from './FeedbackDialog';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [feedbackDialogOpen, setFeedbackDialogOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check for openDialog query param on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('openDialog') === 'true') {
      // Clean URL only
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const handleOpenFeedback = () => {
    setFeedbackDialogOpen(true);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Determine if link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-gradient-to-b from-black/70 to-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <div className="flex items-center gap-2">
                <img alt="HiveIn Logo" className="w-8 h-8" src="/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.webp" />
                <h1 className="text-2xl font-bold text-white">
                  Hive<span className="text-[#43B3AE]">In</span>
                </h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`${isActive('/') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors`}>
              Home
            </Link>
            <Link to="/features" className={`${isActive('/features') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors`}>
              Features
            </Link>
            <Link to="/who-is-it-for" className={`${isActive('/who-is-it-for') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors`}>
              Who is it for
            </Link>
            <Link to="/faq" className={`${isActive('/faq') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors`}>
              FAQ
            </Link>
            <Link to="/blogs" className={`${isActive('/blogs') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors`}>
              Blogs
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button className="bg-houseboard-medium hover:bg-[#43B3AE] hover:text-houseboard-dark transition-colors duration-300" onClick={handleOpenFeedback}>
              Feedback
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
              <Link to="/" className={`${isActive('/') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors py-2 px-4`}>
                Home
              </Link>
              <Link to="/features" className={`${isActive('/features') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors py-2 px-4`}>
                Features
              </Link>
              <Link to="/who-is-it-for" className={`${isActive('/who-is-it-for') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors py-2 px-4`}>
                Who is it for
              </Link>
              <Link to="/faq" className={`${isActive('/faq') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors py-2 px-4`}>
                FAQ
              </Link>
              <Link to="/blogs" className={`${isActive('/blogs') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors py-2 px-4`}>
                Blogs
              </Link>
            </nav>
          </div>
        )}
      </header>
      
      {/* Feedback dialog */}
      <FeedbackDialog open={feedbackDialogOpen} onOpenChange={setFeedbackDialogOpen} />
    </>
  );
};

export default Navbar;
