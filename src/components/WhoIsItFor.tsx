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
    <section
      id="who-is-it-for"
      className="py-24 gradient-bg text-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className={`transition-all duration-700 ease-in-out ${isScrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex flex-col md:flex-row md:justify-end mb-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold text-house-yellow mb-4">
                Who is HouseBoard For?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mb-4">
                Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Before View */}
            <div className="card-hover p-8 rounded-3xl candle-light h-full">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">💔</span> Before HouseBoard
              </h3>
              <ul className="space-y-3 text-white/70 list-disc pl-5">
                <li>Misunderstandings turn into silence.</li>
                <li>Emotions stay bottled up.</li>
                <li>Busyness replaces closeness.</li>
                <li>You try — but it still feels like something's missing.</li>
              </ul>
              <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/lovable-uploads/2e73599f-ae4d-421b-ac36-760872003193.png"
                  alt="Before HouseBoard - Communication challenges"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* After View */}
            <div className="card-hover p-8 rounded-3xl candle-light h-full">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">❤️</span> After HouseBoard
              </h3>
              <ul className="space-y-3 text-white/80 list-disc pl-5">
                <li>Share how you feel in seconds — even when words fail.</li>
                <li>Build healthy, loving habits without effort.</li>
                <li>Keep track of each other's moods, goals, and little wins.</li>
                <li>Turn check-ins into moments of closeness.</li>
              </ul>
              <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/lovable-uploads/05054301-9b25-4fdd-9181-5bf2a160f3f7.png"
                  alt="After HouseBoard - Connected relationship"
                  className="w-full h-auto rounded-lg"
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
