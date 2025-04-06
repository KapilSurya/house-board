
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, BookOpen, Bell, LineChart } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      id: 'habits',
      icon: <Heart className="h-6 w-6 text-[#ffd54f]" />,
      title: 'Build Healthy Habits',
      description: 'Strengthen your bond by building habits like spending quality time, showing gratitude, and setting shared goals, making your chats more meaningful and connected',
      mockupImage: '/lovable-uploads/habits.png',
      imageAlt: 'Choose habits interface showing gratitude and quality time options'
    },
    {
      id: 'log',
      icon: <BookOpen className="h-6 w-6 text-[#ffd54f]" />,
      title: 'Your Relationship Log',
      description: 'Automatically track moods, habits, and milestones to cherish your journey together and see how you\'ve grown as a couple',
      mockupImage: '/lovable-uploads/log.png',
      imageAlt: 'Relationship log showing a quality time entry with a meaningful conversation'
    },
    {
      id: 'nudges',
      icon: <Bell className="h-6 w-6 text-[#ffd54f]" />,
      title: 'Nudge for What Matters',
      description: 'Send gentle, thoughtful nudges to stay connected without nagging, making sure important things don\'t fall through the cracks',
      mockupImage: '/lovable-uploads/nudge.png',
      imageAlt: 'Interface for sending gentle nudges to your partner'
    },
    {
      id: 'mood',
      icon: <LineChart className="h-6 w-6 text-[#ffd54f]" />,
      title: 'Mood & Status Tracking',
      description: 'Express your feelings instantly with mood tracking, making communication effortless and ensuring you both stay in tune with each other',
      mockupImage: '/lovable-uploads/mood.png',
      imageAlt: 'Mood tracking interface showing happy, sad, and loved emotions'
    }
  ];

  return (
    <section id="features" className="py-16 relative">
      {/* Shelf decoration at the top */}
      <div className="shelf absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto px-4 pt-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Features Designed for Your Relationship
          </h2>
          <p className="text-gray-300 mx-auto max-w-2xl">
            Explore how HouseBoard's features can bring you closer.
          </p>
        </div>

        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-md card-hover flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 flex justify-center p-6">
                <div className="relative w-full max-w-xs rounded-md overflow-hidden house-window">
                  {feature.mockupImage && (
                    <img 
                      src={feature.mockupImage} 
                      alt={feature.imageAlt || `${feature.title} illustration`} 
                      className="w-full h-auto object-contain" 
                      style={{ maxHeight: '500px' }}
                    />
                  )}
                  
                  {/* Add candle light decoration for each feature */}
                  {index % 2 === 0 ? (
                    <div className="absolute bottom-2 right-2 candle-light" style={{ width: '15px', height: '15px' }}></div>
                  ) : (
                    <div className="absolute bottom-2 left-2 candle-light" style={{ width: '15px', height: '15px' }}></div>
                  )}
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {feature.icon}
                    <CardTitle className="text-xl text-[#ffd54f]">{feature.title}</CardTitle>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-gray-300 text-sm mb-6">{feature.description}</p>
                  </CardContent>
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
