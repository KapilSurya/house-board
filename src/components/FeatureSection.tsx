
import React from 'react';
import Feature from './Feature';

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Features that make love blossom
        </h2>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-12 text-gray-300">
          Explore the tools and features designed to bring you and your partner closer together.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            title="Daily Habits"
            description="Build lasting love through shared daily habits and rituals."
            icon="/lovable-uploads/0999794b-8559-455f-b991-559f66190c61.png"
            ctaText="Learn more"
          />
          <Feature
            title="Mood Sharing"
            description="Understand each other better by sharing your daily moods and feelings."
            icon="/lovable-uploads/4891944a-2881-4e39-9977-1f8a49a72a5b.png"
            ctaText="Learn more"
          />
          <Feature
            title="Love Letters"
            description="Send sweet love letters to your partner's email."
            icon="/lovable-uploads/69551951-f59f-4991-8914-181999186929.png"
            ctaText="Learn more"
          />
          <Feature
            title="Date Night Ideas"
            description="Get inspired with creative date night ideas tailored for couples."
            icon="/lovable-uploads/86781993-999b-4a97-b19d-9b321ca960db.png"
            ctaText="Learn more"
          />
          <Feature
            title="Anniversary Reminders"
            description="Never forget important dates with timely anniversary reminders."
            icon="/lovable-uploads/97619999-f999-4999-b999-999999999999.png"
            ctaText="Learn more"
          />
          <Feature
            title="Customized Themes"
            description="Personalize your app experience with a variety of cozy themes."
            icon="/lovable-uploads/a8799999-b999-4999-b999-999999999999.png"
            ctaText="Learn more"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
