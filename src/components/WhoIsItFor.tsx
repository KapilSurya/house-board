
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const WhoIsItFor: React.FC = () => {
  const [isRightVisible, setIsRightVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
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
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      
      // Start transition when section is 30% in view
      const scrollPosition = sectionTop < windowHeight * 0.7;
      setIsRightVisible(scrollPosition);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="who-is-it-for" className="py-16 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-houseboard-dark mb-8">
          Who is HouseBoard For?
        </h2>

        <div className="relative h-[500px] md:h-[400px]">
          {/* "Without HouseBoard" Column */}
          <div 
            className={`absolute w-full md:w-1/2 left-0 bg-gray-100 rounded-2xl p-6 md:p-8 transition-all duration-700 ease-in-out h-full ${
              isRightVisible ? 'opacity-20 -translate-x-full' : 'opacity-100 translate-x-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Without HouseBoard</h3>
            
            <div className="space-y-4 mb-6">
              {problemPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-red-500 flex-shrink-0 mt-1">💔</span>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="py-2 mb-6 border-t border-gray-300">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-600 text-center">Feeling disconnected</p>
              </div>
            </div>
            
            <p className="text-gray-700 italic text-sm">Even the strongest relationships face challenges. Small misunderstandings, when left unaddressed, can turn into emotional distance.</p>
          </div>

          {/* "With HouseBoard" Column */}
          <div 
            className={`absolute w-full md:w-1/2 right-0 bg-gradient-to-br from-houseboard-dark/10 to-houseboard-medium/20 rounded-2xl p-6 md:p-8 transition-all duration-700 ease-in-out h-full ${
              isRightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <h3 className="text-2xl font-bold text-houseboard-dark mb-6">With HouseBoard</h3>
            
            <div className="space-y-4 mb-6">
              {solutionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-houseboard-medium flex-shrink-0 mt-1">💙</span>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="py-2 mb-6 border-t border-gray-300">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-houseboard-medium text-center font-medium">Feeling connected</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">HouseBoard helps couples bridge the communication gap, strengthen their bond, and create meaningful habits—before small issues become big problems.</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
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
