
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A digital home for a stronger relationship.
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Communicate effortlessly, build lasting habits, reflect on your journey. Built with your privacy in mind.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-houseboard-dark hover:bg-gray-100 btn-hover-effect text-lg px-8 py-6"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white/10 btn-hover-effect text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-xl animate-float">
          <div className="relative bg-white rounded-lg p-2 aspect-[9/16] max-w-xs mx-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md">
              <div className="text-center">
                <p className="text-houseboard-medium font-medium">App Demo Video</p>
                <p className="text-sm text-gray-500">Showing key functionalities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
