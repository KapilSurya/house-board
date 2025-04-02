
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Strengthening Your Relationship Today!
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Privacy-focused, secure, and designed specifically for modern couples who want to nurture their bond.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-houseboard-dark hover:bg-gray-100 btn-hover-effect text-lg px-8 py-6 animate-pulse-gentle"
        >
          Download Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
