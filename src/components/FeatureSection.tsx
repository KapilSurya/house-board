import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Bell, LineChart } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      id: 'habits',
      icon: <Heart className="h-8 w-8 text-houseboard-medium" />,
      title: 'Build Healthy Habits',
      description: 'Strengthen your bond by building habits like spending quality time, showing gratitude, and setting shared goals, making your chats more meaningful and connected.',
      previewText: 'Interactive preview of shared habit tracking and progress.',
      ctaText: 'Explore Shared Habits'
    },
    {
      id: 'log',
      icon: <BookOpen className="h-8 w-8 text-houseboard-medium" />,
      title: 'Your Relationship Log',
      description: 'Automatically track moods, habits, and milestones to cherish your journey together and see how you\'ve grown as a couple.',
      previewText: 'Placeholder for relationship milestones, habits, and mood timeline.',
      ctaText: 'View Your Log'
    },
    {
      id: 'nudges',
      icon: <Bell className="h-8 w-8 text-houseboard-medium" />,
      title: 'Nudge for What Matters',
      description: 'Send gentle, thoughtful nudges to stay connected without nagging, making sure important things don\'t fall through the cracks.',
      previewText: 'Placeholder for sending gentle nudges with playful animations.',
      ctaText: 'Send a Nudge'
    },
    {
      id: 'mood',
      icon: <LineChart className="h-8 w-8 text-houseboard-medium" />,
      title: 'Mood & Status Tracking',
      description: 'Express your feelings instantly with mood tracking, making communication effortless and ensuring you both stay in tune with each other.',
      previewText: 'Placeholder for sharing and viewing moods visually.',
      ctaText: 'Track Your Mood'
    }
  ];

  return (
    <section id="features" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-houseboard-dark mb-4 animate-fade-in">
          Features Designed for Your Relationship
        </h2>
        <p className="text-center text-houseboard-muted mb-8 max-w-2xl mx-auto">
          Each feature in HouseBoard is thoughtfully designed to help you build a stronger, more connected relationship.
        </p>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01] border-0 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon}
                    <CardTitle className="text-xl text-houseboard-dark">{feature.title}</CardTitle>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                  </CardContent>
                </div>
                <CardFooter className="p-0 mt-4">
                  <Button
                    className="w-full bg-houseboard-medium hover:bg-houseboard-dark text-white transition-colors duration-300"
                  >
                    {feature.ctaText}
                  </Button>
                </CardFooter>
              </div>
              <div className="md:w-1/2 flex items-center justify-center p-6">
                <div className="bg-gray-100 rounded-lg p-6 text-sm text-gray-500 min-h-[120px] flex items-center justify-center text-center">
                  {feature.previewText}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;