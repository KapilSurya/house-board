import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Bell, LineChart } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      id: 'habits',
      icon: <Heart className="h-6 w-6 text-houseboard-medium" />,
      title: 'Build Healthy Habits',
      description: 'Strengthen your bond by building habits like spending quality time, showing gratitude, and setting shared goals, making your chats more meaningful and connected. Imagine a shared calendar where you can track your progress and celebrate milestones together. See how easily you can log your daily wins!',
      previewText: 'Preview of shared habit tracking.',
      ctaText: 'Explore Habits',
      mockupImage: '/images/habit-mockup-small.png', // Use smaller mockup images
    },
    {
      id: 'log',
      icon: <BookOpen className="h-6 w-6 text-houseboard-medium" />,
      title: 'Your Relationship Log',
      description: 'Automatically track moods, habits, and milestones to cherish your journey together and see how you\'ve grown as a couple. Think of a timeline filled with your special moments and how your feelings have evolved. Scroll through your history and relive those precious memories.',
      previewText: 'Relationship milestones timeline.',
      ctaText: 'View Log',
      mockupImage: '/images/log-mockup-small.png', // Use smaller mockup images
    },
    {
      id: 'nudges',
      icon: <Bell className="h-6 w-6 text-houseboard-medium" />,
      title: 'Nudge for What Matters',
      description: 'Send gentle, thoughtful nudges to stay connected without nagging, making sure important things don\'t fall through the cracks. Picture a friendly reminder popping up for that date night you planned. A simple tap keeps you both on the same page.',
      previewText: 'Sending gentle, playful nudges.',
      ctaText: 'Send Nudge',
      mockupImage: '/images/nudge-mockup-small.png', // Use smaller mockup images
    },
    {
      id: 'mood',
      icon: <LineChart className="h-6 w-6 text-houseboard-medium" />,
      title: 'Mood & Status Tracking',
      description: 'Express your feelings instantly with mood tracking, making communication effortless and ensuring you both stay in tune with each other. Envision a simple way to share how you\'re feeling with your partner. See your mood trends over time.',
      previewText: 'Sharing and viewing moods visually.',
      ctaText: 'Track Mood',
      mockupImage: '/images/mood-mockup-small.png', // Use smaller mockup images
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-houseboard-dark mb-8 animate-fade-in">
          Features Designed for Your Relationship
        </h2>
        <p className="text-center text-houseboard-muted mb-12 max-w-3xl mx-auto">
          Explore how HouseBoard's features can bring you closer.
        </p>

        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-md scale-100 hover:scale-[1.01] border-0 bg-white flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 flex justify-center p-6">
                <div className="relative w-48 h-auto shadow-sm rounded-md overflow-hidden">
                  {feature.mockupImage ? (
                    <img src={feature.mockupImage} alt={`${feature.title} App Mockup`} className="w-full h-auto object-cover" style={{ aspectRatio: '9/16' }} />
                  ) : (
                    <div className="bg-gray-100 aspect-[9/16] flex items-center justify-center text-gray-400 text-xs text-center p-2">
                      Mockup Preview
                    </div>
                  )}
                  {/* Optional: Add a subtle phone frame */}
                  <div className="absolute inset-0 border rounded-md pointer-events-none opacity-50"></div>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {feature.icon}
                    <CardTitle className="text-xl text-houseboard-dark">{feature.title}</CardTitle>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-gray-600 text-sm mb-6">{feature.description}</p>
                  </CardContent>
                </div>
                <CardFooter className="p-0 mt-4">
                  <Button
                    className="w-full bg-houseboard-medium hover:bg-houseboard-dark text-white text-sm transition-colors duration-300"
                  >
                    {feature.ctaText}
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;