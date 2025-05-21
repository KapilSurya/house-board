
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LoveLetterDialog from './LoveLetterDialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [formExpanded, setFormExpanded] = useState(false);

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
        body: { 
          email,
          age: age ? parseInt(age) : null,
          gender,
          city
        }
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
      setAge("");
      setGender("");
      setCity("");
      setFormExpanded(false);
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

  const handleEmailFocus = () => {
    if (!formExpanded) {
      setFormExpanded(true);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="bg-white/10 p-4 rounded-lg max-w-xl mx-auto">
        <p className="text-base text-white font-medium mb-2">
          ✨ Make love fun and exciting
        </p>
        <p className="text-sm text-gray-200 mb-4">
          Join our community and become a HiveIn insider.
        </p>
        <ul className="text-sm text-gray-200 mb-4 space-y-1">
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
              onFocus={handleEmailFocus}
              required
              className={`bg-white/20 border-white/30 text-white placeholder:text-gray-400 ${
                emailError ? 'border-red-500' : ''
              }`}
            />
            {emailError && (
              <p className="text-red-400 text-xs">{emailError}</p>
            )}
          </div>

          {formExpanded && (
            <div className="space-y-3 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col space-y-1">
                  <Label className="text-sm text-gray-300">Age (Optional)</Label>
                  <Input
                    type="number"
                    placeholder="Your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <Label className="text-sm text-gray-300">Gender (Optional)</Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <Label className="text-sm text-gray-300">City (Optional)</Label>
                <Input
                  type="text"
                  placeholder="Your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
          )}

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
