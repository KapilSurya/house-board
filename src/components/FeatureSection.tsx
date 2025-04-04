import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const FeatureSection: React.FC = () => {
  const features = [
    {
      id: 'mood',
      emoji: '🧠',
      title: 'Mood & Status Tracking',
      description: 'Express your feelings instantly with mood tracking, making communication effortless and ensuring you both stay in tune with each other.',
      ctaText: 'Try Mood Tracking →'
    },
    {
      id: 'nudges',
      emoji: '❤️',
      title: 'Nudge for What Matters',
      description: 'Send gentle, thoughtful nudges to stay connected without nagging, making sure important things don’t fall through the cracks.',
      ctaText: 'Send a Nudge →'
    },
    {
      id: 'chat-habits',
      emoji: '⏳',
      title: 'Smart Chat, Healthy Habits',
      description: 'Turn everyday chats into moments that matter. Build habits like quality time & gratitude — right inside your conversations.',
      ctaText: 'Build a Habit →'
    },
    {
      id: 'log',
      emoji: '📒',
      title: 'Your Relationship Log',
      description: 'Automatically track moods, habits, and milestones to cherish your journey together and see how you’ve grown as a couple.',
      ctaText: 'Explore Your Log →'
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
          <TabsList className="flex justify-center gap-2 overflow-x-auto md:gap-4 bg-white rounded-full p-2 shadow-sm mb-8">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full transition-all text-sm font-medium data-[state=active]:bg-houseboard-peach data-[state=active]:text-white hover:bg-houseboard-peach/20"
              >
                <span>{feature.emoji}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="animate-fade-in-up">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 text-center flex flex-col items-center transition-all duration-500">
                <div className="mb-6 w-full max-w-xs h-40 flex items-center justify-center border border-dashed border-gray-300 text-gray-400">
                  Insert illustration here
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-houseboard-dark mb-2">{feature.title}</h3>
                <p className="text-houseboard-muted mb-4 max-w-md">{feature.description}</p>
                <button className="text-houseboard-peach font-medium hover:underline">{feature.ctaText}</button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureSection;
