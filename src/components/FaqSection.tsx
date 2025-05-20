import React from 'react';
import FaqItem from './FaqItem';

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem
            question="What is HiveIn and what does it offer?"
            answer="HiveIn is a digital space designed to help couples build stronger, more connected relationships through daily habits, shared mood tracking, and fun, engaging activities."
          />
          <FaqItem
            question="How does HiveIn help in building stronger relationships?"
            answer="HiveIn offers features like daily habit tracking to encourage positive routines, mood sharing to foster empathy, and collaborative activities to create shared experiences and memories."
          />
          <FaqItem
            question="Is HiveIn suitable for all types of couples?"
            answer="Yes, HiveIn is designed to be inclusive and beneficial for all couples, regardless of their relationship stage, background, or preferences. It's a tool for anyone seeking to enhance their connection."
          />
          <FaqItem
            question="How secure is the data shared on HiveIn?"
            answer="We prioritize your privacy and data security. HiveIn employs industry-standard encryption and security measures to protect your personal information and ensure a safe environment."
          />
          <FaqItem
            question="Can I use HiveIn for free?"
            answer="HiveIn offers both free and premium features. The free version provides access to essential tools, while the premium version unlocks additional features and content for a more enriched experience."
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
