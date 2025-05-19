
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LoveLetterDialog from './LoveLetterDialog';

interface NewsletterFormProps {
  buttonText?: string;
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  buttonText = "Subscribe", 
  className = "" 
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loveLetterDialogOpen, setLoveLetterDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous error
    setEmailError("");
    
    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email }
      });
      
      if (error) throw error;
      
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be the first to know about updates and exclusive offers.",
        duration: 3000, // Auto-close after 3 seconds
      });
      
      // Open the love letter dialog
      setLoveLetterDialogOpen(true);
      setEmail("");
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 3000, // Auto-close after 3 seconds
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="bg-white/10 p-4 rounded-lg max-w-xl mx-auto">
        <p className="text-base text-white font-medium mb-2">
          ✨ Want to help build the future of relationships?
        </p>
        <p className="text-sm text-gray-200 mb-4">
          Join our community and become a HiveIn insider.
        </p>
        <ul className="text-sm text-gray-200 mb-4 space-y-1">
          <li className="flex items-start">
            <span className="mr-2 text-white">✅</span> Get early access + free premium
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-white">✅</span> Request features that fit your love story
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-white">✅</span> Be part of the journey that influences how HiveIn grows
          </li>
        </ul>
        <p className="text-sm text-gray-200 italic mb-4">
          All designed around you and your partner.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col space-y-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`bg-white/20 border-white/30 text-white placeholder:text-gray-400 ${
                emailError ? 'border-red-500' : ''
              }`}
            />
            {emailError && (
              <p className="text-red-400 text-xs">{emailError}</p>
            )}
          </div>
          <Button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-houseboard-medium text-white font-medium hover:bg-[#43B3AE] transition-all duration-300"
            disabled={isSubmitting}
          >
            <Mail className="h-5 w-5" />
            {isSubmitting ? "Subscribing..." : buttonText}
          </Button>
        </form>
      </div>
      
      <NewsletterDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
      
      <LoveLetterDialog
        open={loveLetterDialogOpen}
        onOpenChange={setLoveLetterDialogOpen}
        userEmail={email}
      />
    </div>
  );
};

export default NewsletterForm;
