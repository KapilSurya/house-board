import React, { useState, useEffect, useRef } from 'react';

const WhoIsItFor: React.FC = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
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
      const windowHeight = window.innerHeight;
      const scrollPosition = sectionTop < windowHeight * 0.7;
      setIsScrollVisible(scrollPosition);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="who-is-it-for" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`transition-opacity duration-700 ease-in-out ${isScrollVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6C7A89] mb-4">
            Who is HouseBoard For?
          </h2>
          
          <p className="text-lg md:text-xl text-center text-[#6C7A89] max-w-3xl mx-auto mb-10">
            Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before HouseBoard */}
            <div className="bg-gray-200 rounded-2xl p-6 md:p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">How it feels:</h3>
              <div className="space-y-5 mb-6">
                {problemPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 flex-shrink-0 mt-1">💔</span>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After HouseBoard */}
            <div className="bg-gradient-to-r from-[#FFD3B6] to-[#FFAAA5] rounded-2xl p-6 md:p-8 shadow-md">
              <h3 className="text-2xl font-bold text-houseboard-dark mb-4">How it can be:</h3>
              <div className="space-y-5 mb-6">
                {solutionPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-houseboard-medium flex-shrink-0 mt-1">💙</span>
                    <p className="text-houseboard-dark">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
