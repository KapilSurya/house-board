
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  buttonText?: string;
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  buttonText = "Join Us", 
  className = "" 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);
        
      if (error) throw error;
      
      toast({
        title: "Thanks for subscribing!",
        description: "You're now on the list to be the first to test HouseBoard.",
        variant: "default"
      });
      
      setEmail('');
    } catch (error: any) {
      console.error('Error submitting email:', error);
      
      const errorMessage = error.code === '23505' 
        ? "This email is already subscribed!" 
        : "There was a problem. Please try again.";
      
      toast({
        title: "Subscription failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
        Be the first to test HouseBoard and gain super cool benefits from free premiums to customized incentives.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
          required
        />
        <Button 
          type="submit" 
          className="bg-houseboard-medium hover:bg-[#ffd54f] hover:text-houseboard-dark transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : buttonText}
        </Button>
      </form>
      
      <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
        <span>or</span>
        <a 
          href="https://chat.whatsapp.com/CHkLcYPYaCxKAgGabxNvSy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#ffd54f] hover:text-white transition-colors"
        >
          Join our WhatsApp community
        </a>
      </div>
    </div>
  );
};

export default NewsletterForm;
