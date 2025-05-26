
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';
import { Mail } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const Hero: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Update the document title and meta tags for SEO
  useEffect(() => {
    document.title = "HiveIn – A safe home for your love | Relationship App";
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg card-hover text-white relative">
      <Helmet>
        <title>HiveIn – A safe home for your love | Relationship App</title>
        <meta name="description" content="HiveIn is a relationship app that helps couples stay close, share moods, and grow together through shared habits." />
        <meta name="keywords" content="relationship app, couples app, relationship building, love, partnership, HiveIn" />
        <meta name="author" content="HiveIn" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hivein.app/" />
        <meta property="og:title" content="HiveIn – A safe home for your love" />
        <meta property="og:description" content="HiveIn is a relationship app that helps couples stay close, share moods, and grow together through shared habits." />
        <meta property="og:image" content="https://hivein.app/lovable-uploads/house.webp" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hivein.app/" />
        <meta property="twitter:title" content="HiveIn – A safe home for your love" />
        <meta property="twitter:description" content="HiveIn is a relationship app that helps couples stay close, share moods, and grow together through shared habits." />
        <meta property="twitter:image" content="https://hivein.app/lovable-uploads/house.webp" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://hivein.app/" />
      </Helmet>
      
      {/* String lights decoration */}
      <div className="string-lights"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Adjusted text content to be more centered and prominent */}
        <div className="space-y-6 relative z-10 text-center md:text-left md:w-1/2 mb-8 md:mb-0 mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
            A safe home for your love
          </h1>
          <p className="text-lg md:text-xl text-gray-50 mx-auto md:mx-0 max-w-md">
            HiveIn is a relationship app that helps couples stay close, share moods, and grow together through shared habits.
          </p>
          <div className="space-y-4 max-w-md mx-auto md:mx-0">
            <div className="p-4 rounded-lg border border-white/20 bg-[#d8f0ff]/[0.23]">
              <p className="text-sm text-gray-200 mb-3">Join early access and also send a letter to your partner!</p>
              
              <Button 
                onClick={() => setDialogOpen(true)}
                className="newsletter-join-button w-full bg-houseboard-medium hover:bg-[#43B3AE] hover:text-houseboard-dark transition-colors duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                Shape HiveIn
              </Button>
            </div>

            <NewsletterDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          </div>
        </div>

        {/* Image section */}
        <div className="relative overflow-hidden rounded-lg md:w-1/2">
          {/* Candle light effect in corner */}
          <div className="absolute bottom-3 right-3 candle-light" style={{
            width: '15px',
            height: '15px'
          }}></div>
          
          <div className="relative bg-transparent rounded-lg max-w-sm mx-auto">
            <img 
              src="/lovable-uploads/house.webp" 
              alt="Couple using HiveIn app to build daily rituals" 
              className="w-full h-auto rounded-md"
              width="400"
              height="400"
              style={{
                maxWidth: "120%"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
