
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';
import { MessageCircle } from "lucide-react";

interface NewsletterFormProps {
  buttonText?: string;
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  buttonText = "Join Us", 
  className = "" 
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="bg-white/10 p-4 rounded-lg max-w-xl mx-auto">
        <p className="text-base text-white font-medium mb-2">
          ✨ Want to help build the future of relationships?
        </p>
        <p className="text-sm text-gray-200 mb-4">
          Join our WhatsApp community and become a HiveIn insider.
        </p>
        <ul className="text-sm text-gray-200 mb-4 space-y-1">
          <li className="flex items-start">
            <span className="mr-2 text-white">✅</span> Get early access + free premium
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-white">✅</span> Request features that fit your love story
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-white">✅</span> Be part of fun activities that influence how HiveIn grows
          </li>
        </ul>
        <p className="text-sm text-gray-200 italic mb-4">
          All designed around you and your partner.
        </p>
        
        <a 
          href="https://chat.whatsapp.com/CHkLcYPYaCxKAgGabxNvSy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#25D366] text-white font-medium hover:bg-[#128C7E] transition-all duration-300 w-full"
        >
          <MessageCircle className="h-5 w-5" />
          Join our WhatsApp community
        </a>
      </div>
      
      <NewsletterDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
};

export default NewsletterForm;
