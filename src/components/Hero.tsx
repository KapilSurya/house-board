
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
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

        <div className="rounded-lg overflow-hidden shadow-xl">
          <div className="relative bg-white rounded-lg p-2 max-w-xs mx-auto">
            <img
              src="/lovable-uploads/0327d977-13e0-4510-999c-ce78dce08e19.png"
              alt="HouseBoard Home Screen"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
