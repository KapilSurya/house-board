
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
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-houseboard-dark border-houseboard-medium">
        <DialogHeader>
          <DialogTitle className={`text-2xl ${theme === 'light' ? 'text-white' : 'text-white'}`}>
            Join HiveIn Community
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            ✨ Be the first to know when we launch exciting new features
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-white/10 p-4 rounded-lg">
            <ul className="text-sm text-gray-200 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-white">✅</span> Get early access + free premium
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-white">✅</span> Request features that fit your love story
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-white">✅</span> Stay updated on new features & improvements
              </li>
            </ul>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
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
              className="w-full bg-houseboard-medium hover:bg-[#43B3AE] text-white" 
              disabled={isSubmitting}
            >
              <Mail className="h-5 w-5 mr-2" />
              {isSubmitting ? "Subscribing..." : "Subscribe to Updates"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;
