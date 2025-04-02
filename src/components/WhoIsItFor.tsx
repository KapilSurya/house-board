
import React from 'react';
import { HeartOff, Heart, X, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhoIsItFor: React.FC = () => {
  const problemPoints = [
    "Miscommunication creates distance.",
    "Unspoken emotions lead to frustration.",
    "Busy schedules make staying connected hard.",
    "Good intentions get lost in the chaos."
  ];

  const solutionPoints = [
    "Express yourself effortlessly.",
    "Feel understood without saying much.",
    "Stay connected despite busy schedules.",
    "Turn small moments into lasting memories."
  ];

  return (
    <section id="who-is-it-for" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-houseboard-dark mb-12">
          Who is HouseBoard For?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without HouseBoard Column */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-houseboard-dark mb-6">Without HouseBoard</h3>
            
            <div className="space-y-4 mb-6">
              {problemPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-red-500 flex-shrink-0 mt-1">💔</span>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="py-4 mb-6 border-t border-gray-300">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-48 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <HeartOff className="w-10 h-10 text-gray-400 mb-2" />
                      <p className="text-xs text-gray-500">Feeling disconnected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 italic">Even the strongest relationships face challenges. Small misunderstandings, when left unaddressed, can turn into emotional distance.</p>
          </div>

          {/* With HouseBoard Column */}
          <div className="bg-gradient-to-br from-houseboard-dark/10 to-houseboard-medium/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-houseboard-dark mb-6">With HouseBoard</h3>
            
            <div className="space-y-4 mb-6">
              {solutionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-houseboard-medium flex-shrink-0 mt-1">💙</span>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="py-4 mb-6 border-t border-gray-300">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-48 h-32 bg-gradient-to-br from-houseboard-dark/10 to-houseboard-medium/10 rounded-lg flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Heart className="w-10 h-10 text-houseboard-medium mb-2" />
                      <p className="text-xs text-houseboard-dark">Feeling connected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700">HouseBoard helps couples bridge the communication gap, strengthen their bond, and create meaningful habits—before small issues become big problems.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-houseboard-dark font-medium mb-6">Start today. Because love should be nurtured, not left to chance.</p>
          <Button 
            className="bg-houseboard-medium hover:bg-houseboard-dark text-white btn-hover-effect"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
