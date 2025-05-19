
import React from 'react';
import Navbar from '@/components/Navbar';
import WhoIsItForSection from '@/components/WhoIsItFor';
import Footer from '@/components/Footer';

const WhoIsItForPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <WhoIsItForSection />
      </main>
      <Footer />
    </div>
  );
};

export default WhoIsItForPage;
