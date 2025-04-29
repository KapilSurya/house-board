
import React from 'react';

const testimonials = [{
  name: "Aarav & Meera",
  quote: "We often misunderstood each other's moods, sometimes silence felt easier than trying to explain.",
  image: "/placeholder.svg"
}, {
  name: "Rohan & Ananya",
  quote: "We kept saying we'd spend more quality time together, but busy days turned into weeks without real connection.",
  image: "/placeholder.svg"
}, {
  name: "Varun & Shreya",
  quote: "We realised that love isn't just about big moments, it's about the small habits and routines that keep us connected every day.",
  image: "/placeholder.svg"
}];

const TestimonialSection: React.FC = () => {
  return <section id="testimonials" className="py-20 relative bg-[#162536]">
      {/* Add a shelf decoration */}
      <div className="shelf absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto px-4 pt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Those who build <span className="text-[#ffd54f]">HiveIn</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="card-hover p-6 rounded-xl transition-shadow duration-300 relative overflow-hidden bg-[#1d3540]/80">
              {/* Add candle light decoration */}
              <div className={`absolute ${index % 2 === 0 ? 'bottom-2 right-2' : 'bottom-2 left-2'} candle-light`} style={{
            width: '15px',
            height: '15px'
          }}></div>
              
              <div className="flex items-center mb-4">
                <h3 className="font-semibold text-[#ffd54f]">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-white italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-[#ffd54f]"></div>
            </div>)}
        </div>
      </div>
    </section>;
};

export default TestimonialSection;
