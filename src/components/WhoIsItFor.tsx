import React from 'react';

const WhoIsItFor: React.FC = () => {
  return (
    <section id="who-is-it-for" className="py-20 bg-gradient-to-t from-black/50 to-transparent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Who is Hive<span className="text-[#43B3AE]">In</span> for?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* For Couples */}
          <div className="bg-houseboard-medium/10 p-6 rounded-lg shadow-md text-white animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">For Couples</h3>
            <p className="text-gray-300">
              Strengthen your relationship through shared habits, mood sharing, and more.
            </p>
          </div>

          {/* For Long Distance Relationships */}
          <div className="bg-houseboard-medium/10 p-6 rounded-lg shadow-md text-white animate-fade-in delay-100">
            <h3 className="text-xl font-semibold mb-4">
              For Long Distance Relationships
            </h3>
            <p className="text-gray-300">
              Stay connected and close despite the distance with virtual activities and shared experiences.
            </p>
          </div>

          {/* For Busy Partners */}
          <div className="bg-houseboard-medium/10 p-6 rounded-lg shadow-md text-white animate-fade-in delay-200">
            <h3 className="text-xl font-semibold mb-4">For Busy Partners</h3>
            <p className="text-gray-300">
              Make the most of your time together with easy-to-integrate habits and quick check-ins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
