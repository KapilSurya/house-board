
import React, { useState, useEffect, useRef } from 'react';

const WhoIsItFor: React.FC = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="who-is-it-for" className="py-20 relative" ref={sectionRef}>
      {/* Add a shelf decoration */}
      <div className="shelf absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto px-4 max-w-5xl pt-6">
        <div className={`transition-all duration-700 ease-in-out ${isScrollVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who is HouseBoard For?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4">
              Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
            </p>
          </div>

          {/* Side-by-Side Card View with better alignment */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Before View */}
            <div className="gradient-bg card-hover rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl h-full">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
                <span className="mr-2">💔</span> Before HouseBoard
              </h3>
              <ul className="space-y-3 text-gray-300 list-disc pl-5">
                <li>Misunderstandings turn into silence.</li>
                <li>Emotions stay bottled up.</li>
                <li>Busyness replaces closeness.</li>
                <li>You try — but it still feels like something's missing.</li>
              </ul>
              <div className="mt-6 rounded-xl overflow-hidden house-window">
                <img 
                  src="/lovable-uploads/before.png" 
                  alt="Before HouseBoard - Communication challenges" 
                  className="w-full h-auto"
                />
                {/* Add candle light decoration */}
                <div className="absolute bottom-3 right-3 candle-light" style={{ width: '15px', height: '15px' }}></div>
              </div>
            </div>

            {/* After View */}
            <div className="gradient-bg card-hover rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl h-full">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
                <span className="mr-2">❤️</span> After HouseBoard
              </h3>
              <ul className="space-y-3 text-gray-300 list-disc pl-5">
                <li>Share how you feel in seconds — even when words fail.</li>
                <li>Build healthy, loving habits without effort.</li>
                <li>Keep track of each other's moods, goals, and little wins.</li>
                <li>Turn check-ins into moments of closeness.</li>
              </ul>
              <div className="mt-6 rounded-xl overflow-hidden house-window">
                <img 
                  src="/lovable-uploads/05054301-9b25-4fdd-9181-5bf2a160f3f7.png" 
                  alt="After HouseBoard - Connected relationship" 
                  className="w-full h-auto"
                />
                {/* Add candle light decoration */}
                <div className="absolute bottom-3 left-3 candle-light" style={{ width: '15px', height: '15px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
