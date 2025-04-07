
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MessageCircle, WhatsApp } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';

interface NewsletterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterDialog: React.FC<NewsletterDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();

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
        .insert({ email });
        
      if (error) throw error;
      
      toast({
        title: "Thanks for subscribing!",
        description: "You're now on the list to be the first to test HouseBoard.",
        variant: "default"
      });
      
      setEmail('');
      onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-houseboard-dark border-houseboard-medium">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Join HouseBoard</DialogTitle>
          <DialogDescription className="text-gray-300">
            Be the first to try HouseBoard and unlock exclusive perks —
            <span className="text-white font-medium"> early access</span>,
            <span className="text-white font-medium"> free premium membership</span>,
            and <span className="text-white font-medium">customized features</span> built just for you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            className={`${theme === 'light' ? 'text-white' : ''} bg-houseboard-medium hover:bg-[#43B3AE] hover:text-white transition-colors duration-300`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Join Us Now"}
          </Button>
        </form>

        <div className="flex items-center justify-center gap-3 text-sm text-gray-300 mt-5">
          <span>or</span>
          <a 
            href="https://chat.whatsapp.com/CHkLcYPYaCxKAgGabxNvSy" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${theme === 'light' ? 'text-[#2C3D59]' : 'text-[#43B3AE]'} hover:text-white transition-all duration-300 transform hover:scale-105 font-medium`}
          >
            <WhatsApp className="h-4 w-4" />
            Join our WhatsApp community
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;
