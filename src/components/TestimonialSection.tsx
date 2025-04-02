
import React from 'react';

const testimonials = [
  {
    name: "Sarah & Mike",
    quote: "HouseBoard has transformed how we communicate. We're more in tune with each other's feelings than ever before.",
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-houseboard-dark mb-12">
          What Couples Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-houseboard-dark">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-houseboard-medium">
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
