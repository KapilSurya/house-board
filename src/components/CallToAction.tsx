
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LoveLetterDialog from './LoveLetterDialog';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loveLetterDialogOpen, setLoveLetterDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Show immediate loading toast for better UX perception
    const loadingToast = toast({
      title: "Subscribing...",
      description: "Adding you to our early access list.",
      duration: 5000, // Fallback duration in case operation takes longer
    });
    
    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email }
      });
      
      if (error) throw error;
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be the first to know about updates and exclusive offers.",
        duration: 3000,
      });
      
      // Open love letter dialog
      setLoveLetterDialogOpen(true);
      setEmail("");
    } catch (error) {
      console.error('Error submitting email:', error);
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="cta" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Make love fun and exciting
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Want to help build the future of relationships?
          Join our community and become a HiveIn insider
        </p>

        <div className="max-w-md mx-auto">
          <p className="text-base opacity-80 mb-6 text-center mx-0 px-px py-0 my-[4px] font-normal md:text-base">
            ✅ Free Premium Access for Life<br />
            ✅ Priority say in future feature requests<br />
            ✅ Send a custom love letter to your partner's email
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
            <form onSubmit={handleSubmit} className="w-full space-y-3">
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-houseboard-medium text-white font-medium hover:bg-[#43B3AE] transition-all duration-300"
                disabled={isSubmitting}
              >
                <Mail className="h-5 w-5" />
                {isSubmitting ? "Subscribing..." : "Subscribe to Updates"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <LoveLetterDialog
        open={loveLetterDialogOpen}
        onOpenChange={setLoveLetterDialogOpen}
        userEmail={email}
      />
    </section>;
};

export default CallToAction;
