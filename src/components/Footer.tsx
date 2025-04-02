
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-houseboard-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              HouseBoard
            </h3>
            <p className="text-gray-300">
              A digital home for stronger relationships.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} HouseBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
