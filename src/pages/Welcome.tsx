import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, ExternalLink } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';
const Welcome: React.FC = () => {
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-houseboard-dark to-houseboard-medium">
      {/* Header */}
      <header className="w-full z-50 backdrop-blur-sm bg-gradient-to-b from-black/70 to-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img alt="HiveIn Logo" className="w-8 h-8" src="/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.webp" width="32" height="32" />
            <h1 className="text-2xl font-bold text-white">
              Hive<span className="text-[#43B3AE]">In</span>
            </h1>
          </div>
          
          {/* Privacy Badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20">
            <Shield className="w-4 h-4 text-[#43B3AE]" />
            <span className="text-white text-sm font-medium">Privacy Protected</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#43B3AE] rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Welcome Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">You took the first step! 🎉</h1>
          
          <p className="mb-6 text-zinc-50 px-0 my-0 text-lg">Start building healthy habits through complete 
🔒End-to-End Encryption🔒</p>

          {/* Brief About HiveIn */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20">
            <h2 className="font-semibold text-white mb-3 text-lg">
              You're in Early Access
            </h2>
            <p className="text-white/90 mb-3">
              HiveIn is currently in early development. You may experience crashes or bugs as we perfect the experience.
            </p>
            <p className="text-white/80 text-sm">
              Your feedback helps us create something amazing for couples everywhere.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8">
            
            <NewsletterForm buttonText="Join Our Community" className="max-w-md mx-auto" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/">
              <Button className="bg-[#43B3AE] hover:bg-[#43B3AE]/90 text-white px-6 py-2">
                Learn More About HiveIn
              </Button>
            </Link>
            <Link to="/blogs">
              <Button variant="outline" className="border-white/30 px-6 py-2 text-zinc-50 bg-houseboard-medium">
                Read Our Blog
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>;
};
export default Welcome;