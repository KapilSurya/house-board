
import React from 'react';
import NewsletterForm from './NewsletterForm';

const CallToAction: React.FC = () => {
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
        <NewsletterForm buttonText="Join Us Now" className="mt-8" />
      </div>
    </section>
  );
};

export default CallToAction;
