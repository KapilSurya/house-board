
import React, { useState, useEffect, useRef } from 'react';
import { Slider } from "@/components/ui/slider";

const WhoIsItFor: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const problemPoints = [
    "Miscommunication creates distance.",
   
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
      
      // Start fade-in when section is 30% in view
      const scrollPosition = sectionTop < windowHeight * 0.7;
      setIsScrollVisible(scrollPosition);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  // Calculate opacity and position based on slider value
  const beforeOpacity = 1 - (sliderValue / 100);
  const afterOpacity = sliderValue / 100;
  
  return (
    <section 
      id="who-is-it-for" 
      className="py-16 bg-white overflow-hidden" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-opacity duration-700 ease-in-out ${isScrollVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6C7A89] mb-4">
            Who is HouseBoard For?
          </h2>
          
          <p className="text-lg md:text-xl text-center text-[#6C7A89] max-w-3xl mx-auto mb-10">
            Even the strongest relationships face challenges. Misunderstandings grow, emotions go unspoken, and staying connected feels harder than it should.
          </p>

          {/* Desktop Slider Control */}
          <div className="hidden md:block max-w-md mx-auto mb-8">
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              value={[sliderValue]}
              onValueChange={handleSliderChange}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Before HouseBoard</span>
              <span>After HouseBoard</span>
            </div>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="md:hidden flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setSliderValue(0)} 
              className={`px-4 py-2 rounded-md transition ${sliderValue === 0 ? 'bg-gray-300 font-medium' : 'bg-gray-100'}`}
            >
              Before
            </button>
            <button 
              onClick={() => setSliderValue(100)} 
              className={`px-4 py-2 rounded-md transition ${sliderValue === 100 ? 'bg-houseboard-medium text-white font-medium' : 'bg-gray-100'}`}
            >
              After
            </button>
          </div>

          <div className="relative h-[600px] md:h-[450px]">
            {/* "Without HouseBoard" Column */}
            <div 
              className="absolute w-full md:w-1/2 left-0 rounded-2xl p-6 md:p-8 transition-all duration-500 ease-in-out h-full"
              style={{ 
                opacity: beforeOpacity,
                transform: `translateX(${sliderValue > 50 ? -100 : 0}%)`,
                backgroundColor: '#F5F5F5',
                zIndex: sliderValue > 50 ? 0 : 1
              }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-4">How it feels:</h3>
              
              <div className="space-y-5 mb-8">
                {problemPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 flex-shrink-0 mt-1">💔</span>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              
              {/* Illustration */}
              <div className="bg-white rounded-lg p-4 shadow-md mb-6">
                <div className="bg-[#E3E3E3] rounded-lg p-6 h-40 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex gap-8 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#B0B0B0]"></div>
                      <div className="w-12 h-12 rounded-full bg-[#B0B0B0]"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-white p-2 rounded-md shadow text-sm">
                        "Are you okay?"
                      </div>
                      <div className="bg-white p-2 rounded-md shadow text-sm">
                        "Yeah, I'm fine... 😞"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 italic text-sm">Even the strongest relationships face challenges. Small misunderstandings, when left unaddressed, can turn into emotional distance.</p>
            </div>

            {/* "With HouseBoard" Column */}
            <div 
              className="absolute w-full md:w-1/2 right-0 rounded-2xl p-6 md:p-8 transition-all duration-500 ease-in-out h-full"
              style={{ 
                opacity: afterOpacity,
                transform: `translateX(${sliderValue < 50 ? 100 : 0}%)`,
                background: 'linear-gradient(135deg, #FFD3B6 0%, #FFAAA5 100%)',
                zIndex: sliderValue > 50 ? 1 : 0
              }}
            >
              <h3 className="text-2xl font-bold text-houseboard-dark mb-4">How it can be:</h3>
              
              <div className="space-y-5 mb-8">
                {solutionPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-houseboard-medium flex-shrink-0 mt-1">💙</span>
                    <p className="text-houseboard-dark">{point}</p>
                  </div>
                ))}
              </div>
              
              {/* Illustration */}
              <div className="bg-white rounded-lg p-4 shadow-md mb-6">
                <div className="bg-[#85D5EB] rounded-lg p-6 h-40 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#FFD3B6]"></div>
                      <div className="w-12 h-12 rounded-full bg-[#FFAAA5]"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-white p-2 rounded-md shadow text-sm">
                        "I feel off today."
                      </div>
                      <div className="bg-white p-2 rounded-md shadow text-sm">
                        "I'm here for you ❤️"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-houseboard-dark text-sm">HouseBoard helps couples bridge the communication gap, strengthen their bond, and create meaningful habits—before small issues become big problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
