
import React from 'react';
import Feature from './Feature';

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-houseboard-dark mb-16">
          Features Designed for Your Relationship
        </h2>

        <Feature
          title="Smart Chat for Real Connection"
          description="Easily share moods, update statuses, and send nudges for clear, meaningful communication no matter where you are."
          ctaText="See Smart Chat in Action"
        />

        <div className="border-t border-gray-200 my-8"></div>

        <Feature
          title="Mood & Status Tracking"
          description="Express your feelings instantly with mood tracking, making communication effortless and ensuring you both stay in tune with each other."
          ctaText="Learn More About Mood Tracking"
          imageRight
        />

        <div className="border-t border-gray-200 my-8"></div>

        <Feature
          title="Build Positive Habits Together"
          description="Create and track habits like quality time and shared goals to strengthen your bond and bring more joy to your relationship."
          ctaText="Explore Shared Habits"
        />

        <div className="border-t border-gray-200 my-8"></div>

        <Feature
          title="Nudge for What Matters"
          description="Send gentle, thoughtful nudges to stay connected without nagging, making sure important things don't fall through the cracks."
          ctaText="Discover the Power of Nudges"
          imageRight
        />

        <div className="border-t border-gray-200 my-8"></div>

        <Feature
          title="Your Relationship Log"
          description="Automatically track moods, habits, and milestones to cherish your journey together and see how you've grown as a couple."
          ctaText="See Your Relationship Timeline"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
