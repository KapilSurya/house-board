
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoIsItFor from '@/components/WhoIsItFor';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';
import FeedbackDialog from '@/components/FeedbackDialog';
import { Helmet } from 'react-helmet-async';

const Index: React.FC = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>HiveIn – Build Love Through Daily Habits | Relationship App</title>
        <meta name="description" content="HiveIn helps couples strengthen their bond through daily habits, mood sharing, and relationship-building activities." />
        <meta name="keywords" content="relationship app, couple app, love habits, relationship building, partnership app" />
        
        {/* Structured data for rich search results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "HiveIn",
              "applicationCategory": "Lifestyle",
              "operatingSystem": "Android, iOS",
              "description": "HiveIn is a relationship app that helps couples stay close, share moods, and grow together through shared habits.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar onFeedbackClick={() => setFeedbackOpen(true)} />
      <main className="flex-grow">
        <Hero />
        <WhoIsItFor />
        <FeatureSection />
        <TestimonialSection />
        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
      
      <FeedbackDialog open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </div>
  );
};

export default Index;
