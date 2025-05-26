
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BlogNavbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
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
              <span className="text-xl font-bold text-[#1e3d4c]">HiveIn</span>
            </Link>
            
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#1e3d4c] ${
                isHome ? 'text-[#1e3d4c] border-b-2 border-[#1e3d4c] pb-1' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/blogs" 
              className="text-sm font-medium text-gray-600 hover:text-[#1e3d4c] transition-colors"
            >
              Journal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;
