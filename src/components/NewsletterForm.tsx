
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  buttonText?: string;
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  buttonText = "Subscribe", 
  className = "" 
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

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
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
            />
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
    </div>
  );
};

export default NewsletterForm;
