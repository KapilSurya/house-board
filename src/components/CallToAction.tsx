
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';
import { MessageCircle } from "lucide-react";

const CallToAction: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="cta" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Build Your Dream Relationship
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
        Want to help build the future of relationships?
        Join our WhatsApp community and become a HouseBoard insider
        </p>

        <div className="max-w-md mx-auto">
          <p className="text-base md:text-lg opacity-80 mb-6">
          ✅ Get early access + free premium
✅ Request features that fit your love story
✅ Be part of fun activities that influence how HouseBoard grows
          </p>

          <NewsletterDialog 
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          />

          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span>or</span>
            <a 
              href="https://chat.whatsapp.com/CHkLcYPYaCxKAgGabxNvSy" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-3 rounded-md bg-[#25D366] text-white font-medium hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 w-full justify-center`}
            >
              <MessageCircle className="h-5 w-5" />
              Join our WhatsApp community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
