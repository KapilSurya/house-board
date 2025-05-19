
import React from 'react';
import Navbar from '@/components/Navbar';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
