import React, { useState } from 'react';
import Feature from './Feature';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const FeatureSection: React.FC = () => {
  const features = [
    {
      id: 'chat-habits',
      title: 'Smart Chat, Healthy Habits',
      description:
        'Turn everyday chats into moments that matter. Build habits like quality time & gratitude — right inside your conversations.',
      ctaText: 'Build Healthy Habits Now →',
      iconName: 'MessageSquare',
    },
    {
      id: 'log',
      title: 'Your Relationship Log',
      description:
        'Automatically track moods, habits, and milestones to cherish your journey together and see how you\'ve grown as a couple.',
      ctaText: 'See Your Timeline →',
      iconName: 'BookHeart',
    },
    {
      id: 'nudges',
      title: 'Nudge for What Matters',
      description:
        'Send gentle, thoughtful nudges to stay connected without nagging, making sure important things don’t fall through the cracks.',
      ctaText: 'Send a Nudge Now →',
      iconName: 'Bell',
    },
    {
      id: 'mood',
      title: 'Mood & Status Tracking',
      description:
        'Express your feelings instantly with mood tracking, making communication effortless and ensuring you both stay in tune with each other.',
      ctaText: 'Track Moods Together →',
      iconName: 'Smile',
    },
  ];

  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section id="features" className="py-16 bg-houseboard-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-houseboard-dark mb-6 animate-fade-in">
          Features Designed for Your Relationship
        </h2>
        <p className="text-center text-houseboard-muted mb-10">
          Tap to explore how HouseBoard strengthens your bond.
        </p>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="flex justify-center gap-4 bg-white rounded-full p-2 shadow-sm mb-8">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="px-4 py-2 rounded-full transition-all text-sm font-medium data-[state=active]:bg-houseboard-peach data-[state=active]:text-white hover:bg-houseboard-peach/20"
              >
                <span className="mr-2">{feature.iconName === 'MessageSquare' ? '💬' :
                  feature.iconName === 'Smile' ? '🧠' :
                  feature.iconName === 'Bell' ? '❤️' : '📒'}</span>
                {feature.title.split(',')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="animate-fade-in-up">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 transition-all duration-500">
                <Feature
                  title={feature.title}
                  description={feature.description}
                  ctaText={feature.ctaText}
                  iconName={feature.iconName}
                  compact={false}
                  imageRight={true}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureSection;
