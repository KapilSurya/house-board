import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';

const Hero: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg card-hover text-white relative">
      {/* String lights decoration */}
      <div className="string-lights"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            A safe home for stronger love 
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Communicate effortlessly, build lasting habits, reflect on your journey. Built with your privacy in mind.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/10 border border-white/20 max-w-md">
              <p className="text-sm text-gray-200">
                ✨ Want to help build the future of relationships?
                   Join our WhatsApp community and become a HiveIn insider.
              </p>
              
              <div className="mt-4">
                <Button 
                  onClick={() => setDialogOpen(true)}
                  className="newsletter-join-button bg-houseboard-medium hover:bg-[#43B3AE] hover:text-houseboard-dark transition-colors duration-300"
                >
                  Join Us Now
                </Button>
              </div>
            </div>

            <NewsletterDialog 
              open={dialogOpen}
              onOpenChange={setDialogOpen}
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          {/* Candle light effect in corner */}
          <div className="absolute bottom-3 right-3 candle-light" style={{ width: '15px', height: '15px' }}></div>
          
          <div className="relative bg-transparent rounded-lg max-w-sm mx-auto">
            <img
              src="/lovable-uploads/house.png"
              alt="HiveIn Home Screen"
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
