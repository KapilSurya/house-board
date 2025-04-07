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
          Start your journey to a more connected, meaningful relationship.
          HouseBoard gives you the tools to strengthen your bond every day.
        </p>

        <div className="max-w-md mx-auto">
          <p className="text-base md:text-lg opacity-80 mb-6">
            Be the first to explore HouseBoard and unlock exclusive benefits — free premium access, early feature trials, and personalized tools just for you.
          </p>

          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-houseboard-medium hover:bg-[#43B3AE] hover:text-houseboard-dark transition-colors duration-300 px-8 py-6 text-lg"
          >
            Join Us Now
          </Button>

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
              className="flex items-center gap-2 text-[#ffffff]"
            >
              <MessageCircle className="h-4 w-4" />
              Join our WhatsApp community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
