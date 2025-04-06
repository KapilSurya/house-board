
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';

const Hero: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white relative">
      {/* String lights decoration */}
      <div className="string-lights"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
            A safe home for a stronger relationship.
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Communicate effortlessly, build lasting habits, reflect on your journey. Built with your privacy in mind.
          </p>
          <div className="space-y-4">
            <p className="text-sm md:text-base text-gray-300 max-w-md">
              Be the first to test HouseBoard and gain super cool benefits from free premiums to customized incentives.
            </p>
            
            <Button 
              onClick={() => setDialogOpen(true)}
              className="newsletter-join-button bg-houseboard-medium hover:bg-[#ffd54f] hover:text-houseboard-dark transition-colors duration-300"
            >
              Join Us Now
            </Button>
            
            <NewsletterDialog 
              open={dialogOpen}
              onOpenChange={setDialogOpen}
            />
          </div>
        </div>

        <div className="relative house-window rounded-lg overflow-hidden">
          {/* Candle light effect in corner */}
          <div className="absolute bottom-3 right-3 candle-light" style={{ width: '15px', height: '15px' }}></div>
          
          <div className="relative bg-transparent rounded-lg max-w-sm mx-auto">
            <img
              src="/lovable-uploads/0327d977-13e0-4510-999c-ce78dce08e19.png"
              alt="HouseBoard Home Screen"
              className="w-full h-auto rounded-md"
              style={{ maxWidth: "120%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
