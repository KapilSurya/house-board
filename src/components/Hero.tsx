
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
            A safe space where love feels easy.
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Communicate effortlessly, build lasting habits, reflect on your journey. Built with your privacy in mind.
          </p>
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-white/10 border border-white/20 max-w-md">
              <p className="text-base text-white font-medium mb-2">
                ✨ Want to help build the future of relationships?
              </p>
              <p className="text-sm text-gray-200 mb-4">
                Join our WhatsApp community and become a HouseBoard insider.
              </p>
              <ul className="text-sm text-gray-200 mb-4 space-y-1">
                <li className="flex items-start">
                  <span className="mr-2 text-white">✅</span> Get early access + free premium
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✅</span> Request features that fit your love story
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✅</span> Be part of fun activities that influence how HouseBoard grows
                </li>
              </ul>
              <p className="text-sm text-gray-200 italic">
                All designed around you and your partner.
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-200 mb-2">
                Join our private WhatsApp community for early access, perks & real influence.
              </p>
              
              <Button 
                onClick={() => setDialogOpen(true)}
                className="newsletter-join-button bg-houseboard-medium hover:bg-[#43B3AE] hover:text-houseboard-dark transition-colors duration-300"
              >
                Join Us Now
              </Button>
              
              <p className="text-sm mt-2 text-gray-300 max-w-md">
                Get free premium, shape the product with your ideas, and build a relationship that thrives — all in one cozy corner.
              </p>
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
