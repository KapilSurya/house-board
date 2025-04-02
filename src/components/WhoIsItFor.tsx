
import React from 'react';
import { Heart, MessageCircle, Calendar, Clock } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Strengthen your bond",
    description: "Build a deeper connection with better communication tools."
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Express emotions easily",
    description: "Be understood with intuitive mood tracking and status updates."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Build positive habits",
    description: "Create consistent, positive relationship routines together."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Stay connected effortlessly",
    description: "Maintain your connection even on the busiest days."
  }
];

const WhoIsItFor: React.FC = () => {
  return (
    <section id="who-is-it-for" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-houseboard-dark mb-12">
          Who is HouseBoard For?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg hover:shadow-md transition-all duration-300 group"
              >
                <div className="icon-container mb-4 group-hover:bg-houseboard-medium group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-houseboard-dark">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-end animate-float">
            <div className="relative bg-gradient-to-br from-houseboard-dark to-houseboard-medium p-4 rounded-2xl shadow-xl max-w-md">
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-houseboard-medium/20 flex items-center justify-center text-houseboard-medium flex-shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-houseboard-dark">Sarah</p>
                    <p className="text-sm text-gray-500">Feeling happy today 😊</p>
                  </div>
                </div>
                
                <div className="ml-14 p-3 bg-gray-100 rounded-lg rounded-tl-none mb-4">
                  <p className="text-sm">That's great! Want to try that new recipe together tonight?</p>
                </div>
                
                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">Weekly Date Night</p>
                      <p className="text-sm font-medium text-houseboard-medium">4/5 completed</p>
                    </div>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-houseboard-medium h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
