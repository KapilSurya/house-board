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

  const bulletPointStyle = "flex items-start gap-3";
  const bulletIcon = (color: string) => (
    <div className={`w-2.5 h-2.5 mt-2 rounded-full`} style={{ backgroundColor: color }}></div>
  );

  return (
    <section id="who-is-it-for" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className={`transition-all duration-700 ease-in-out ${isScrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#052534] mb-4">
            Who is HouseBoard For?
          </h2>
          <p className="text-lg md:text-xl text-center text-[#6C7A89] max-w-2xl mx-auto mb-16">
            Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
          </p>

          {/* Single Side-by-Side Card View */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Before View */}
            <div className="bg-[#EFF3F6] text-[#094663] rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">💔 Before HouseBoard</h3>
              <div className="space-y-4 text-gray-700">
                <div className={bulletPointStyle}>{bulletIcon('#E15C64')}<span>Misunderstandings turn into silence.</span></div>
                <div className={bulletPointStyle}>{bulletIcon('#E15C64')}<span>Emotions stay bottled up.</span></div>
                <div className={bulletPointStyle}>{bulletIcon('#E15C64')}<span>Busyness replaces closeness.</span></div>
                <div className={bulletPointStyle}>{bulletIcon('#E15C64')}<span>You try — but it still feels like something’s missing.</span></div>
              </div>
              <div className="h-48 mt-6 bg-gray-200 rounded-xl flex items-center justify-center text-sm text-gray-400">
                🔁 Replace with illustration: [Before HouseBoard Illustration]
              </div>
            </div>

            {/* After View */}
            <div className="bg-[#052534] text-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">❤️ After HouseBoard</h3>
              <div className="space-y-4 text-[#C7E1E9]">
                <div className={bulletPointStyle}>{bulletIcon('#FBD7D2')}<span>Share how you feel in seconds — even when words fail.</span></div>
                <div className={bulletPointStyle}>{bulletIcon('#FBD7D2')}<span>Build healthy, loving habits without effort.</span></div>
                <div className={bulletPointStyle}>{bulletIcon('#FBD7D2')}<span>Keep track of each other’s moods, goals, and little wins.</span></div>
                <div className={bulletPointStyle}>{bulletIcon('#FBD7D2')}<span>Turn check-ins into moments of closeness.</span></div>
              </div>
              <div className="h-48 mt-6 bg-[#0E3444] rounded-xl flex items-center justify-center text-sm text-gray-300">
                🔁 Replace with illustration: [After HouseBoard Illustration]
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
