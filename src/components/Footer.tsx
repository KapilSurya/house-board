import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  return <footer className="gradient-bg text-white py-12 relative">
      {/* String lights decoration */}
      
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-white">
              HiveIn
            </h3>
            <p className="text-gray-300 mb-4">
              A safe digital home for stronger relationships.
            </p>
          </div>
          
          <div className="animate-fade-in">
            <h4 className="font-semibold mb-4 text-white">Site Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="transition-all duration-300 hover:translate-x-1">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                <Link to="/features" className="hover:text-white transition-colors">Features</Link>
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                <Link to="/who-is-it-for" className="hover:text-white transition-colors">Who is it for</Link>
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                <a href="https://blog.hivein.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in">
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                <Mail size={18} className="text-[#ffd54f]" />
                <a href="mailto:hiveinapp@gmail.com" className="hover:text-white transition-colors">hiveinapp@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                <Phone size={18} className="text-[#ffd54f]" />
                <a href="tel:+919100857172" className="hover:text-white transition-colors">+91 9100857172</a>
              </li>
              <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                <MapPin size={18} className="text-[#ffd54f]" />
                <span>Thub, Hyderabad, Telangana</span>
              </li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="https://www.instagram.com/hiveinapp/" className="text-gray-300 hover:text-[#ffd54f] transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} HiveIn. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;