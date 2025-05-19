
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

const WhoIsItForPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Who Is HiveIn For? | Building Better Relationships Together</title>
        <meta name="description" content="HiveIn is designed for couples at all stages who want to nurture their relationship through shared habits and meaningful connection." />
        <meta name="keywords" content="relationship app, couples app, dating app, long distance relationships, marriage app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hivein.app/who-is-it-for" />
        <meta property="og:title" content="Who Is HiveIn For? | Building Better Relationships Together" />
        <meta property="og:description" content="HiveIn is designed for couples at all stages who want to nurture their relationship through shared habits and meaningful connection." />
        <meta property="og:image" content="https://hivein.app/lovable-uploads/house.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hivein.app/who-is-it-for" />
        <meta property="twitter:title" content="Who Is HiveIn For? | Building Better Relationships Together" />
        <meta property="twitter:description" content="HiveIn is designed for couples at all stages who want to nurture their relationship through shared habits and meaningful connection." />
        <meta property="twitter:image" content="https://hivein.app/lovable-uploads/house.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hivein.app/who-is-it-for" />
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

export default WhoIsItForPage;
