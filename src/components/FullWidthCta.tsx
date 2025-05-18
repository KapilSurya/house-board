
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import NewsletterDialog from './NewsletterDialog';

const FullWidthCta: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-16 bg-[#094663]/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#43B3AE]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#43B3AE]/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Want to feel more connected with your partner?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join HiveIn's early access and start building rituals that make love feel lighter, daily.
        </p>
        
        <Button 
          onClick={() => setDialogOpen(true)}
          size="lg"
          className="bg-[#43B3AE] hover:bg-[#52D8D2] text-houseboard-dark font-bold text-lg px-8 py-6 h-auto"
        >
          Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <NewsletterDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </div>
    </section>
  );
};

export default FullWidthCta;
