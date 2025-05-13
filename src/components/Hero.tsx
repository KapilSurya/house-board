
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NewsletterDialog from './NewsletterDialog';
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Hero: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send this to your backend
    // Simulating API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be the first to know about updates and exclusive offers.",
      });
      setEmail("");
    }, 1000);
  };

  return <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg card-hover text-white relative">
      {/* String lights decoration */}
      <div className="string-lights"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient">A safe home for your love</h1>
          <p className="text-lg md:text-xl text-gray-50">
            Communicate effortlessly, build lasting habits, reflect on your journey. Built with your privacy in mind.
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/20 max-w-md bg-[#d8f0ff]/[0.23]">
              <p className="text-sm text-gray-200 mb-3">Want to help build the future of relationships? Subscribe for early access and updates.</p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                />
                <Button 
                  type="submit" 
                  className="newsletter-join-button w-full bg-houseboard-medium hover:bg-[#43B3AE] hover:text-houseboard-dark transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {isSubmitting ? "Subscribing..." : "Shape HiveIn"}
                </Button>
              </form>
            </div>

            <NewsletterDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          {/* Candle light effect in corner */}
          <div className="absolute bottom-3 right-3 candle-light" style={{
          width: '15px',
          height: '15px'
        }}></div>
          
          <div className="relative bg-transparent rounded-lg max-w-sm mx-auto">
            <img src="/lovable-uploads/house.png" alt="HiveIn Home Screen" className="w-full h-auto rounded-md" style={{
            maxWidth: "120%"
          }} />
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
