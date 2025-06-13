
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onFeedbackClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onFeedbackClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFeedbackClick = () => {
    if (onFeedbackClick) {
      onFeedbackClick();
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.webp" 
              alt="HiveIn Logo" 
              className="h-10 w-10 mr-2"
              width="40"
              height="40"
            />
            <span className="text-2xl font-bold text-[#1e3d4c]">
              Hive<span className="text-[#43B3AE]">In</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-[#1e3d4c] transition-colors">
              Features
            </Link>
            <Link to="/who-is-it-for" className="text-gray-700 hover:text-[#1e3d4c] transition-colors">
              Who is it for?
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-[#1e3d4c] transition-colors">
              Blog
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-[#1e3d4c] transition-colors">
              FAQ
            </Link>
            <Button 
              onClick={handleFeedbackClick}
              variant="outline" 
              className="border-[#43B3AE] text-[#43B3AE] hover:bg-[#43B3AE] hover:text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Feedback
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link 
                  to="/features" 
                  className="text-lg font-medium text-gray-700 hover:text-[#1e3d4c] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  to="/who-is-it-for" 
                  className="text-lg font-medium text-gray-700 hover:text-[#1e3d4c] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Who is it for?
                </Link>
                <Link 
                  to="/blogs" 
                  className="text-lg font-medium text-gray-700 hover:text-[#1e3d4c] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/faq" 
                  className="text-lg font-medium text-gray-700 hover:text-[#1e3d4c] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                <Button 
                  onClick={handleFeedbackClick}
                  variant="outline" 
                  className="border-[#43B3AE] text-[#43B3AE] hover:bg-[#43B3AE] hover:text-white w-full justify-start mt-4"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Feedback
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
