import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WhoIsItFor: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const storyCards = [
    {
      title: "Emotional Disconnection",
      before: {
        header: "\uD83D\uDC94 Before HouseBoard",
        text: "Even strong relationships can feel fragile. You care \u2014 but life gets in the way.",
        illustration: "Cluttered chat, tired faces"
      },
      after: {
        header: "\u2764\uFE0F With HouseBoard",
        text: "Feel seen. Stay close. Grow together \u2014 even in busy seasons.",
        illustration: "Shared habit or goal update"
      }
    },
    {
      title: "Unspoken Emotions",
      before: {
        header: "\uD83D\uDC94 Before HouseBoard",
        text: "Misunderstandings turn into silence. Feelings stay bottled up.",
        illustration: "Someone waiting for a reply"
      },
      after: {
        header: "\u2764\uFE0F With HouseBoard",
        text: "Share how you feel in seconds \u2014 even when words fail.",
        illustration: "Mood emoji + tag being sent"
      }
    },
    {
      title: "Busy Life, Drifting Apart",
      before: {
        header: "\uD83D\uDC94 Before HouseBoard",
        text: "Busyness replaces closeness. Good intentions get lost.",
        illustration: "Missed check-in or late call"
      },
      after: {
        header: "\u2764\uFE0F With HouseBoard",
        text: "Build small, loving habits that bring you back together.",
        illustration: "Daily habit or to-do list shared"
      }
    },
    {
      title: "Missed Moments",
      before: {
        header: "\uD83D\uDC94 Before HouseBoard",
        text: "You try to connect \u2014 but it still feels like something's missing.",
        illustration: "One person sending a message, no response"
      },
      after: {
        header: "\u2764\uFE0F With HouseBoard",
        text: "Turn everyday check-ins into moments of closeness.",
        illustration: "Nudge or quick emoji chat"
      }
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? storyCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === storyCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="who-is-it-for" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#052534] mb-4">
          Who is HouseBoard For?
        </h2>
        <p className="text-lg md:text-xl text-[#6C7A89] mb-10">
          Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
        </p>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl bg-[#EFF3F6]">
          <div className="transition-transform duration-700 ease-in-out flex w-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {storyCards.map((story, index) => (
              <div key={index} className="min-w-full flex flex-col md:flex-row">
                {/* Before */}
                <div className="md:w-1/2 w-full bg-[#EFF3F6] text-[#094663] p-6 md:p-10">
                  <h3 className="text-xl font-semibold mb-3">{story.before.header}</h3>
                  <p className="mb-5 text-gray-700">{story.before.text}</p>
                  <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center text-sm text-gray-400">
                    🔁 Replace with illustration: [{story.before.illustration}]
                  </div>
                </div>
                {/* After */}
                <div className="md:w-1/2 w-full bg-[#052534] text-white p-6 md:p-10">
                  <h3 className="text-xl font-semibold mb-3">{story.after.header}</h3>
                  <p className="mb-5 text-[#C7E1E9]">{story.after.text}</p>
                  <div className="h-40 bg-[#0E3444] rounded-xl flex items-center justify-center text-sm text-gray-300">
                    🔁 Replace with illustration: [{story.after.illustration}]
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button onClick={handlePrev} className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition">
              <ChevronLeft className="w-6 h-6 text-[#052534]" />
            </button>
            <button onClick={handleNext} className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition">
              <ChevronRight className="w-6 h-6 text-[#052534]" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {storyCards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#052534]' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
