import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const WhoIsItFor: React.FC = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

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

  const beforeCardClass = theme === 'dark'
    ? 'bg-[#1f2a33] text-gray-300'
    : 'bg-[#e3e3e3] text-[#2C3D59] border border-gray-300';

  const afterCardClass = theme === 'dark'
    ? 'bg-[#1d3540] text-white'
    : 'bg-[#fdfaf5] text-[#2C3D59] border border-gray-200';

  return (
    <section id="who-is-it-for" className="py-20 relative" ref={sectionRef}>
      <div className={`shelf absolute top-0 left-0 right-0 ${theme === 'light' ? 'opacity-70' : ''}`}></div>

      <div className="container mx-auto px-4 max-w-5xl pt-6">
        <div className={`transition-all duration-700 ease-in-out ${isScrollVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#2C3D59]'}`}>
              Who is HouseBoard For?
            </h2>
            <p className={`max-w-2xl mx-auto mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Before View */}
            <div className={`card-hover rounded-3xl p-8 shadow-md transition-all duration-300 h-full flex flex-col md:col-span-1 md:scale-100 z-10 ${beforeCardClass}`}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">💔</span> Before HouseBoard
              </h3>
              <ul className="space-y-3 list-disc pl-5 mb-6">
                <li>Misunderstandings turn into silence.</li>
                <li>Emotions stay bottled up.</li>
                <li>Busyness replaces closeness.</li>
                <li>You try — but it still feels like something's missing.</li>
              </ul>
              <div className="mt-auto rounded-xl overflow-hidden flex-1">
                <div className="h-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/before.png"
                    alt="Before HouseBoard - Communication challenges"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
                <div className="absolute bottom-3 right-3 candle-light" style={{ width: '15px', height: '15px' }}></div>
              </div>
            </div>

            {/* After View */}
            <div className={`card-hover rounded-3xl p-8 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 h-full flex flex-col md:col-span-1 ${afterCardClass}`}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">❤️</span> After HouseBoard
              </h3>
              <ul className="space-y-3 list-disc pl-5 mb-6">
                <li>Share how you feel in seconds — even when words fail.</li>
                <li>Build healthy, loving habits without effort.</li>
                <li>Keep track of each other's moods, goals, and little wins.</li>
                <li>Turn check-ins into moments of closeness.</li>
              </ul>
              <div className="mt-auto rounded-xl overflow-hidden flex-1">
                <div className="h-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/after.png"
                    alt="After HouseBoard - Connected relationship"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
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
