
import React from 'react';

const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3d4c] mb-6">
            Before and after HiveIn
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See how HiveIn transforms relationships by creating space for deeper connection and understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before */}
          <div className="text-center space-y-6">
            <div className="house-window bg-gradient-to-br from-[#6b7280] to-[#4b5563] p-6 rounded-2xl">
              <img 
                src="/lovable-uploads/before.webp"
                alt="Before HiveIn - Communication challenges"
                className="w-full h-auto object-contain rounded-lg"
                style={{ maxHeight: "300px" }}
                width={500}
                height={300}
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1e3d4c] mb-3">Before HiveIn</h3>
              <p className="text-gray-600">
                Busy lives, missed connections, and the gradual drift that happens when we stop making time for what matters most.
              </p>
            </div>
          </div>

          {/* After */}
          <div className="text-center space-y-6">
            <div className="house-window bg-gradient-to-br from-[#2e4e5f] to-[#1e3d4c] p-6 rounded-2xl">
              <img 
                src="/lovable-uploads/after.webp"
                alt="With HiveIn - Connected relationship"
                className="w-full h-auto object-contain rounded-lg"
                style={{ maxHeight: "300px" }}
                width={500}
                height={300}
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1e3d4c] mb-3">With HiveIn</h3>
              <p className="text-gray-600">
                Daily rituals, shared understanding, and the quiet confidence that comes from knowing you're growing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
