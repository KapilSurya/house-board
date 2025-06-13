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
      const {
        data,
        error
      } = await supabase.functions.invoke('subscribe-newsletter', {
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
        duration: 3000 // Auto-close after 3 seconds
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
        duration: 3000 // Auto-close after 3 seconds
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
  return <div className={`space-y-4 ${className}`}>
      
      
      <NewsletterDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      
      <LoveLetterDialog open={loveLetterDialogOpen} onOpenChange={setLoveLetterDialogOpen} userEmail={email} />
    </div>;
};
export default NewsletterForm;