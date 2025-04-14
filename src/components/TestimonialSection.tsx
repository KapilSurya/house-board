
import React from 'react';

const testimonials = [
  {
    name: "Sarah & Mike",
    quote: "HiveIn has transformed how we communicate. We're more in tune with each other's feelings than ever before.",
    image: "/placeholder.svg"
  },
  {
    name: "Jessica & Daniel",
    quote: "The habit tracking feature helped us prioritize quality time together despite our busy schedules.",
    image: "/placeholder.svg"
  },
  {
    name: "Taylor & Jordan",
    quote: "Sending nudges has become our inside joke - it's a playful way to ask for help without nagging.",
    image: "/placeholder.svg"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      {/* Add a shelf decoration */}
      <div className="shelf absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto px-4 pt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What Couples Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-hover p-6 rounded-xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Add candle light decoration */}
              <div className={`absolute ${index % 2 === 0 ? 'bottom-2 right-2' : 'bottom-2 left-2'} candle-light`} style={{ width: '15px', height: '15px' }}></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-houseboard-medium">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-[#ffd54f]">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-[#ffd54f]">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
