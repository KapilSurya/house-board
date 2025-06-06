
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, BookOpen, Bell, LineChart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';

const FeatureSection: React.FC = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-[#43B3AE]' : 'text-[#2C3D59]';

  const features = [
    {
      id: 'habits',
      icon: <Heart className={`h-6 w-6 ${textColor}`} />,
      title: 'Build healthy habits',
      description: 'Deepen your bond with daily quality time, gratitude, and shared goals—making every <Link to="/features/habits" className="underline hover:text-[#43B3AE]">habit tracking</Link> count.',
      mockupImage: '/lovable-uploads/habits.webp',
      imageAlt: 'Couple completing gratitude habit on HiveIn'
    },
    {
      id: 'log',
      icon: <BookOpen className={`h-6 w-6 ${textColor}`} />,
      title: 'Your relationship log',
      description: 'Capture moods, habits, and milestones in your <Link to="/features/log" className="underline hover:text-[#43B3AE]">relationship log</Link>—see your journey as a couple unfold beautifully.',
      mockupImage: '/lovable-uploads/log.webp',
      imageAlt: 'HiveIn chat screen with emotional check-in'
    },
    {
      id: 'nudges',
      icon: <Bell className={`h-6 w-6 ${textColor}`} />,
      title: 'Nudge for what matters',
      description: 'Send thoughtful reminders with our <Link to="/features/chat" className="underline hover:text-[#43B3AE]">chat and nudges</Link> to check in, share, or reconnect—without feeling like a nag.',
      mockupImage: '/lovable-uploads/nudge.webp',
      imageAlt: 'HiveIn chat screen with emotional check-in'
    },
    {
      id: 'mood',
      icon: <LineChart className={`h-6 w-6 ${textColor}`} />,
      title: 'Mood & status tracking',
      description: 'Share how you feel in seconds with our <Link to="/features/gratitude" className="underline hover:text-[#43B3AE]">gratitude habit</Link> and mood tracking—stay emotionally in sync without saying a word',
      mockupImage: '/lovable-uploads/mood.webp',
      imageAlt: 'HiveIn mood tracking feature screenshot'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="shelf absolute top-0 left-0 right-0"></div>

      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Features Designed for Your Relationship
          </h2>
          <p className="text-gray-300 mx-auto max-w-2xl text-lg">
            Explore how HiveIn's features can bring you closer.
          </p>
        </div>

        <div className="flex flex-col gap-14 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-md card-hover flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'} p-6 rounded-3xl`}
            >
              <div className="md:w-1/2 flex justify-center px-6 py-8">
                <div className="relative w-full max-w-2xl rounded-md overflow-hidden">
                  {feature.mockupImage && (
                    <img
                      src={feature.mockupImage}
                      alt={feature.imageAlt}
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '500px', width: '100%' }}
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
              <div className="md:w-1/2 flex flex-col justify-center p-6">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    {feature.icon}
                    <CardTitle className={`text-2xl md:text-3xl ${textColor}`}>{feature.title}</CardTitle>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-gray-300 text-base md:text-lg mb-6" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
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
