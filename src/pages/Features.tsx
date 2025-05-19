
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoIsItFor from '@/components/WhoIsItFor';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import CallToAction from '@/components/CallToAction';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>HiveIn Features | Daily Habits & Mood Tracking for Couples</title>
        <meta name="description" content="Discover HiveIn's features including daily habits, mood tracking, and relationship nudges to strengthen your partnership." />
        <meta name="keywords" content="relationship features, couples app, habit tracking, mood sharing, relationship app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hivein.app/features" />
        <meta property="og:title" content="HiveIn Features | Daily Habits & Mood Tracking for Couples" />
        <meta property="og:description" content="Discover HiveIn's features including daily habits, mood tracking, and relationship nudges to strengthen your partnership." />
        <meta property="og:image" content="https://hivein.app/lovable-uploads/house.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hivein.app/features" />
        <meta property="twitter:title" content="HiveIn Features | Daily Habits & Mood Tracking for Couples" />
        <meta property="twitter:description" content="Discover HiveIn's features including daily habits, mood tracking, and relationship nudges to strengthen your partnership." />
        <meta property="twitter:image" content="https://hivein.app/lovable-uploads/house.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hivein.app/features" />
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

export default Features;
