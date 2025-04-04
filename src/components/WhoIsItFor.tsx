
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
    <section id="who-is-it-for" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className={`transition-all duration-700 ease-in-out ${isScrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#052534] mb-4 animate-pulse-gentle">
            Who is HouseBoard For?
          </h2>
          <p className="text-lg md:text-xl text-center text-[#6C7A89] max-w-2xl mx-auto mb-16">
            Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
          </p>

          {/* Side-by-Side Card View with animations */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Before View */}
            <div className="bg-[#EFF3F6] text-[#094663] rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-[#E5EDF2]">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="animate-pulse mr-2">💔</span> Before HouseBoard
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc pl-5">
                <li className="transition-all duration-300 hover:translate-x-1">Even strong relationships can feel fragile.</li>
                <li className="transition-all duration-300 hover:translate-x-1">You care deeply — but life gets in the way.</li>
                <li className="transition-all duration-300 hover:translate-x-1">Misunderstandings turn into silence.</li>
                <li className="transition-all duration-300 hover:translate-x-1">Emotions stay bottled up.</li>
                <li className="transition-all duration-300 hover:translate-x-1">Busyness replaces closeness.</li>
                <li className="transition-all duration-300 hover:translate-x-1">You try — but it still feels like something's missing.</li>
              </ul>
              <div className="mt-6 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <img 
                  src="/lovable-uploads/2e73599f-ae4d-421b-ac36-760872003193.png" 
                  alt="Before HouseBoard - Communication challenges" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* After View */}
            <div className="bg-[#052534] text-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-[#0A3040]">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="animate-bounce inline-block mr-2">❤️</span> After HouseBoard
              </h3>
              <ul className="space-y-3 text-[#C7E1E9] list-disc pl-5">
                <li className="transition-all duration-300 hover:translate-x-1">Feel seen. Stay close. Grow together.</li>
                <li className="transition-all duration-300 hover:translate-x-1">HouseBoard helps couples stay emotionally connected, even when life gets chaotic.</li>
                <li className="transition-all duration-300 hover:translate-x-1">Share how you feel in seconds — even when words fail.</li>
                <li className="transition-all duration-300 hover:translate-x-1">Build healthy, loving habits without effort.</li>
                <li className="transition-all duration-300 hover:translate-x-1">Keep track of each other's moods, goals, and little wins.</li>
                <li className="transition-all duration-300 hover:translate-x-1">Turn check-ins into moments of closeness.</li>
              </ul>
              <div className="mt-6 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <img 
                  src="/lovable-uploads/05054301-9b25-4fdd-9181-5bf2a160f3f7.png" 
                  alt="After HouseBoard - Connected relationship" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
