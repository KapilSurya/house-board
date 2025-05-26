
import React from 'react';
import Feature from './Feature';

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Daily Habits",
      description: "Build meaningful rituals together with gentle reminders and shared goals.",
      imageSrc: "/lovable-uploads/habits.webp",
      imageAlt: "Couple completing gratitude habit on HiveIn",
      width: 600,
      height: 400
    },
    {
      title: "Mood Tracking",
      description: "Share how you're feeling and understand each other's emotional patterns.",
      imageSrc: "/lovable-uploads/mood.webp",
      imageAlt: "HiveIn mood tracking feature screenshot",
      width: 600,
      height: 400
    },
    {
      title: "Gentle Nudges",
      description: "Thoughtful prompts to help you stay connected throughout your day.",
      imageSrc: "/lovable-uploads/nudge.webp",
      imageAlt: "HiveIn chat screen with emotional check-in",
      width: 600,
      height: 400
    },
    {
      title: "Log your love",
      description: "Small simple sentences that capture and celebrate your relationship moments.",
      imageSrc: "/lovable-uploads/log.webp",
      imageAlt: "HiveIn chat screen with emotional check-in",
      width: 600,
      height: 400
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3d4c] mb-6">
            Everything you need to stay close
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            HiveIn provides simple tools to help couples nurture their relationship through daily connection and shared growth.
          </p>
        </div>

        <div className="grid gap-16 md:gap-24">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
