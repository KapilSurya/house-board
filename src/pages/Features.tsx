
import React from 'react';
import Navbar from '@/components/Navbar';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
