
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from 'lucide-react';

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-houseboard-dark to-houseboard-medium">
      {/* Header */}
      <header className="w-full z-50 backdrop-blur-sm bg-gradient-to-b from-black/70 to-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <img alt="HiveIn Logo" className="w-8 h-8" src="/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.webp" width="32" height="32" />
            <h1 className="text-2xl font-bold text-white">
              Hive<span className="text-[#43B3AE]">In</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#43B3AE] rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Welcome Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to HiveIn! 🎉
          </h1>
          
          <p className="text-xl text-white/90 mb-4">
            Your email has been successfully verified!
          </p>
          
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Thank you for joining our community. We're excited to help you and your partner build stronger connections through daily habits and emotional intimacy.
          </p>

          {/* App Launch Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              What's Next?
            </h2>
            <p className="text-white/90 mb-4">
              HiveIn is currently in development. We'll notify you as soon as the app is ready for download!
            </p>
            <p className="text-white/80 text-sm">
              In the meantime, explore our content below to learn more about building meaningful relationships.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button className="bg-[#43B3AE] hover:bg-[#43B3AE]/90 text-white px-8 py-3 text-lg font-medium">
                Explore HiveIn
              </Button>
            </Link>
            <Link to="/blogs">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium">
                Read Our Blog
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Stay Connected
            </h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/hiveinapp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#43B3AE] transition-colors flex items-center gap-2"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                <span>Follow us on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="flex justify-center">
              <a 
                href="mailto:team@hivein.app"
                className="text-white/80 hover:text-[#43B3AE] transition-colors flex items-center gap-2"
              >
                <span>📧 team@hivein.app</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-white/60">
        <p>&copy; {new Date().getFullYear()} HiveIn. Building love through daily habits.</p>
      </footer>
    </div>
  );
};

export default Welcome;
