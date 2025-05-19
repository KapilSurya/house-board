
import React, { useState } from 'react';
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from '@/contexts/ThemeContext';
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LoveLetterDialog from './LoveLetterDialog';

interface NewsletterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterDialog: React.FC<NewsletterDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loveLetterDialogOpen, setLoveLetterDialogOpen] = useState(false);

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

      // Close current dialog and open love letter dialog
      onOpenChange(false);
      setLoveLetterDialogOpen(true);
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
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-houseboard-dark border-houseboard-medium">
          <DialogHeader>
            <DialogTitle className={`text-2xl ${theme === 'light' ? 'text-white' : 'text-white'}`}>
              You're One Step Closer to HiveIn 💌
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              HiveIn launches in June 2025. Join the early access list and you'll receive:
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <ul className="text-sm text-gray-200 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-white">✅</span> Free Premium Access for Life
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✅</span> Priority say in future feature requests
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">✅</span> Send a custom love letter to your partner's email
                </li>
              </ul>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-200">
                  Enter your email to reserve your spot:
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
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
                className="w-full bg-houseboard-medium hover:bg-[#43B3AE] text-white" 
                disabled={isSubmitting}
              >
                <Mail className="h-5 w-5 mr-2" />
                {isSubmitting ? "Subscribing..." : "Get Early Access"}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <LoveLetterDialog 
        open={loveLetterDialogOpen}
        onOpenChange={setLoveLetterDialogOpen}
        userEmail={email}
      />
    </>
  );
};

export default NewsletterDialog;
