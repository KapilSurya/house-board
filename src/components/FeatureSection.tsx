
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, BookOpen, Bell, LineChart } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      id: 'habits',
      icon: <Heart className="h-6 w-6 text-houseboard-medium" />,
      title: 'Build Healthy Habits',
      description: 'Strengthen your bond by building habits like spending quality time, showing gratitude, and setting shared goals, making your chats more meaningful and connected',
      mockupImage: '/lovable-uploads/3ec2ab90-10da-4a5e-96a9-65c31da182a3.png',
      imageAlt: 'Choose habits interface showing gratitude and quality time options'
    },
    {
      id: 'log',
      icon: <BookOpen className="h-6 w-6 text-houseboard-medium" />,
      title: 'Your Relationship Log',
      description: 'Automatically track moods, habits, and milestones to cherish your journey together and see how you\'ve grown as a couple',
      mockupImage: '/lovable-uploads/b70d91b3-554d-4e43-aeca-47fc04b6775a.png',
      imageAlt: 'Relationship log showing a quality time entry with a meaningful conversation'
    },
    {
      id: 'nudges',
      icon: <Bell className="h-6 w-6 text-houseboard-medium" />,
      title: 'Nudge for What Matters',
      description: 'Send gentle, thoughtful nudges to stay connected without nagging, making sure important things don\'t fall through the cracks',
      mockupImage: '/lovable-uploads/0327d977-13e0-4510-999c-ce78dce08e19.png',
      imageAlt: 'Interface for sending gentle nudges to your partner'
    },
    {
      id: 'mood',
      icon: <LineChart className="h-6 w-6 text-houseboard-medium" />,
      title: 'Mood & Status Tracking',
      description: 'Express your feelings instantly with mood tracking, making communication effortless and ensuring you both stay in tune with each other',
      mockupImage: '/lovable-uploads/59cb6f3e-ed49-4cfd-974b-5b33c9f752dd.png',
      imageAlt: 'Mood tracking interface showing happy, sad, and loved emotions'
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-end mb-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-houseboard-dark mb-4">
              Features Designed for Your Relationship
            </h2>
            <p className="text-houseboard-muted max-w-3xl">
              Explore how HouseBoard's features can bring you closer.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-md border-0 bg-white flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 flex justify-center p-6">
                <div className="relative w-full max-w-xs shadow-sm rounded-md overflow-hidden">
                  {feature.mockupImage && (
                    <img 
                      src={feature.mockupImage} 
                      alt={feature.imageAlt || `${feature.title} illustration`} 
                      className="w-full h-auto object-contain" 
                      style={{ maxHeight: '500px' }}
                    />
                  )}
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
