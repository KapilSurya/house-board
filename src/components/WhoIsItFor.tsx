import React, { useState, useEffect, useRef } from 'react';

const WhoIsItFor: React.FC = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const storyCards = [
    {
      title: "Emotional Disconnection",
      before: {
        header: "💔 Before HouseBoard",
        text: "Even strong relationships can feel fragile. You care — but life gets in the way.",
        illustration: "Cluttered chat, tired faces"
      },
      after: {
        header: "❤️ With HouseBoard",
        text: "Feel seen. Stay close. Grow together — even in busy seasons.",
        illustration: "Shared habit or goal update"
      }
    },
    {
      title: "Unspoken Emotions",
      before: {
        header: "💔 Before HouseBoard",
        text: "Misunderstandings turn into silence. Feelings stay bottled up.",
        illustration: "Someone waiting for a reply"
      },
      after: {
        header: "❤️ With HouseBoard",
        text: "Share how you feel in seconds — even when words fail.",
        illustration: "Mood emoji + tag being sent"
      }
    },
    {
      title: "Busy Life, Drifting Apart",
      before: {
        header: "💔 Before HouseBoard",
        text: "Busyness replaces closeness. Good intentions get lost.",
        illustration: "Missed check-in or late call"
      },
      after: {
        header: "❤️ With HouseBoard",
        text: "Build small, loving habits that bring you back together.",
        illustration: "Daily habit or to-do list shared"
      }
    },
    {
      title: "Missed Moments",
      before: {
        header: "💔 Before HouseBoard",
        text: "You try to connect — but it still feels like something's missing.",
        illustration: "One person sending a message, no response"
      },
      after: {
        header: "❤️ With HouseBoard",
        text: "Turn everyday check-ins into moments of closeness.",
        illustration: "Nudge or quick emoji chat"
      }
    }
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
    <section id="who-is-it-for" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className={`transition-all duration-700 ease-in-out ${isScrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#052534] mb-4">
            Who is HouseBoard For?
          </h2>
          <p className="text-lg md:text-xl text-center text-[#6C7A89] max-w-2xl mx-auto mb-16">
            Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
          </p>

          <div className="space-y-16">
            {storyCards.map((story, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-[1.01] ${isScrollVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Before Panel */}
                <div className="md:w-1/2 w-full bg-[#EFF3F6] text-[#094663] p-6 md:p-10 rounded-t-3xl md:rounded-t-none md:rounded-l-3xl">
                  <h3 className="text-xl font-semibold mb-3">{story.before.header}</h3>
                  <p className="mb-5 text-gray-700">{story.before.text}</p>
                  <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center text-sm text-gray-400">
                    🔁 Replace with illustration: [{story.before.illustration}]
                  </div>
                </div>

                {/* After Panel */}
                <div className="md:w-1/2 w-full bg-[#052534] text-white p-6 md:p-10 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl">
                  <h3 className="text-xl font-semibold mb-3">{story.after.header}</h3>
                  <p className="mb-5 text-[#C7E1E9]">{story.after.text}</p>
                  <div className="h-40 bg-[#0E3444] rounded-xl flex items-center justify-center text-sm text-gray-300">
                    🔁 Replace with illustration: [{story.after.illustration}]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
