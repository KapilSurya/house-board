
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const BlogNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleOpenDialog = () => {
    // Navigate to home page and set a query parameter to open the dialog
    navigate('/?openDialog=true');
  };

  // Determine if link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1e3d4c] shadow-sm">
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
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/blogs" 
            className={`${isActive('/blogs') ? 'text-[#43B3AE]' : 'text-white'} hover:text-[#43B3AE] transition-colors`}
          >
            Blogs
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button 
            className="bg-white hover:bg-gray-100 text-[#1e3d4c]" 
            onClick={handleOpenDialog}
          >
            Join the community
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BlogNavbar;
