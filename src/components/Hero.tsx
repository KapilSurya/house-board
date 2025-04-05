
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white relative">
      {/* String lights decoration */}
      <div className="string-lights"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A safe home for a stronger relationship.
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Communicate effortlessly, build lasting habits, reflect on your journey. Built with your privacy in mind.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-houseboard-dark hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-300 hover:shadow-xl"
            >
              Join Us Now
            </Button>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden relative house-window p-3">
          {/* Candle light effect in corner */}
          <div className="absolute bottom-3 right-3 candle-light" style={{ width: '15px', height: '15px' }}></div>
          
          <div className="relative bg-transparent rounded-lg max-w-sm mx-auto">
            <img
              src="/lovable-uploads/0327d977-13e0-4510-999c-ce78dce08e19.png"
              alt="HouseBoard Home Screen"
              className="w-full h-auto rounded-md"
              style={{ maxWidth: "110%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
