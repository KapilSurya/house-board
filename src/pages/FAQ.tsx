
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoIsItFor from '@/components/WhoIsItFor';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import FaqSection from '@/components/FaqSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Frequently Asked Questions | HiveIn Relationship App</title>
        <meta name="description" content="Find answers to common questions about HiveIn, the relationship app that helps couples build healthy habits and strengthen their connection." />
        <meta name="keywords" content="relationship FAQ, couples app questions, relationship habits, HiveIn help" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hivein.app/faq" />
        <meta property="og:title" content="Frequently Asked Questions | HiveIn Relationship App" />
        <meta property="og:description" content="Find answers to common questions about HiveIn, the relationship app that helps couples build healthy habits and strengthen their connection." />
        <meta property="og:image" content="https://hivein.app/lovable-uploads/house.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hivein.app/faq" />
        <meta property="twitter:title" content="Frequently Asked Questions | HiveIn Relationship App" />
        <meta property="twitter:description" content="Find answers to common questions about HiveIn, the relationship app that helps couples build healthy habits and strengthen their connection." />
        <meta property="twitter:image" content="https://hivein.app/lovable-uploads/house.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hivein.app/faq" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhoIsItFor />
        <FeatureSection />
        <TestimonialSection />
        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
