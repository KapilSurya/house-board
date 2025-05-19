import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Heart, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
interface LoveLetterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userEmail: string;
}
const LoveLetterDialog: React.FC<LoveLetterDialogProps> = ({
  open,
  onOpenChange,
  userEmail
}) => {
  const [partnerEmail, setPartnerEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const validateEmail = (email: string): boolean => {
    if (!email) return true; // Allow empty
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error
    setEmailError("");

    // Don't proceed if no partner email or message
    if (!partnerEmail || !message) {
      if (!partnerEmail) {
        setEmailError("Please enter your partner's email address");
      }
      return;
    }

    // Validate partner email
    if (!validateEmail(partnerEmail)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);

    // Show immediate toast for better UX perception
    const loadingToast = toast({
      title: "Sending your love letter...",
      description: "Your message is on its way.",
      duration: 10000 // Long duration as a fallback
    });
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('send-love-letter', {
        body: {
          senderEmail: userEmail,
          partnerEmail,
          message
        }
      });
      if (error) throw error;

      // Dismiss loading toast - fixed method call
      if (loadingToast && loadingToast.id) {
        toast.dismiss(loadingToast.id);
      }
      toast({
        title: "Your surprise is on its way!",
        description: "We'll deliver it soon with love. ❤️",
        duration: 3000
      });

      // Reset form
      setPartnerEmail("");
      setMessage("");

      // Close dialog after a slight delay
      setTimeout(() => {
        onOpenChange(false);
      }, 1500);
    } catch (error) {
      console.error('Error sending love letter:', error);

      // Dismiss loading toast - fixed method call
      if (loadingToast && loadingToast.id) {
        toast.dismiss(loadingToast.id);
      }
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 3000
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleNotNow = () => {
    onOpenChange(false);
  };
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-houseboard-dark border-houseboard-medium">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white flex items-center gap-2">
            <Heart className="text-pink-400 h-5 w-5" />
            Want to make it extra special?
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Send a custom love letter to your partner's email
            <p className="text-gray-400 italic text-sm mt-1">Your message is private</p>
          </DialogDescription>
        </DialogHeader>

        <DialogClose className="absolute right-2 top-2 p-1 text-white opacity-70 hover:opacity-100">
          <div className="h-4 w-4 text-white" />
        </DialogClose>

        <div className="space-y-4 py-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-200">
                Partner's Email Address
              </label>
              <Input type="email" placeholder="partner@example.com" value={partnerEmail} onChange={e => setPartnerEmail(e.target.value)} className={`bg-white/20 border-white/30 text-white placeholder:text-gray-400 ${emailError ? 'border-red-500' : ''}`} />
              {emailError && <p className="text-red-400 text-xs">{emailError}</p>}
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-200">
                Your Love Letter Message
              </label>
              <Textarea placeholder="Write from the heart..." value={message} onChange={e => setMessage(e.target.value)} className="bg-white/20 border-white/30 text-white placeholder:text-gray-400 min-h-[120px]" maxLength={600} />
              <p className="text-xs text-gray-400 text-right">
                {message.length}/600 characters
              </p>
            </div>
            
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white" disabled={isSubmitting || !partnerEmail && !message}>
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send the Surprise"}
              </Button>
              
              <Button type="button" variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800" onClick={handleNotNow}>
                Not now
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>;
};
export default LoveLetterDialog;