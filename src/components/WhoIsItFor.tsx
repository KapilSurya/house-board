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
    <section id="who-is-it-for" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className={`transition-all duration-700 ease-in-out ${isScrollVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#052534] mb-4">
            Who is HouseBoard For?
          </h2>

          <p className="text-lg md:text-xl text-center text-[#6C7A89] max-w-3xl mx-auto mb-14">
            Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
          </p>

          <div className="space-y-10">
            {storyCards.map((story, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-4 story-row transition-all duration-700 ease-in-out ${isScrollVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Before Card */}
                <div className="bg-[#EFF3F6] rounded-xl p-6 md:p-8 shadow-md border border-[#CED6DB]">
                  <h3 className="text-lg font-semibold text-[#094663] mb-2">{story.before.header}</h3>
                  <p className="text-[#3A4A58] mb-4">{story.before.text}</p>
                  <div className="h-32 bg-[#DCE4EA] rounded-lg flex items-center justify-center text-gray-500 text-sm">
                    🔁 Replace with illustration: [{story.before.illustration}]
                  </div>
                </div>

                {/* After Card */}
                <div className="bg-[#052534] text-white rounded-xl p-6 md:p-8 shadow-md border border-[#0E3444]">
                  <h3 className="text-lg font-semibold mb-2">{story.after.header}</h3>
                  <p className="mb-4">{story.after.text}</p>
                  <div className="h-32 bg-[#0E3444] rounded-lg flex items-center justify-center text-white/60 text-sm">
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
