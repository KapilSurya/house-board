import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CallToAction: React.FC = () => {
  const [earlyAccessDialogOpen, setEarlyAccessDialogOpen] = useState(false);

  return (
    <section id="cta" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Make love fun and exciting
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Share feedback to help us build the right thing for couples.
        </p>

        <div className="max-w-md mx-auto">
          <p className="text-base opacity-80 mb-6 text-center mx-0 px-px py-0 my-[4px] font-normal md:text-base">
            ✅ Free Premium Access for Life<br />
            ✅ Priority say in future feature requests<br />
            ✅ Send a custom love letter to your partner's email
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <Button 
              onClick={() => (window.location.href = '#feedback')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-houseboard-medium text-white font-medium hover:bg-[#43B3AE] transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
              Give Feedback
            </Button>
          </div>
        </div>
      </div>

      {/* Feedback anchor target */}
      <div id="feedback" />
    </section>
  );
};

export default CallToAction;
