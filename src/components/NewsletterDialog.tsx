
import React from 'react';
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTheme } from '@/contexts/ThemeContext';

interface NewsletterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterDialog: React.FC<NewsletterDialogProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const { theme } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-houseboard-dark border-houseboard-medium">
        <DialogHeader>
          <DialogTitle className={`text-2xl ${theme === 'light' ? 'text-white' : 'text-white'}`}>
            Join HouseBoard Community
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            ✨ Want to help build the future of relationships?
            Join our WhatsApp community and become a HouseBoard insider.
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
                <span className="mr-2 text-white">✅</span> Be part of fun activities that influence how HouseBoard grows
              </li>
            </ul>
            <p className="text-sm text-gray-200 mt-2 italic">
              All designed around you and your partner.
            </p>
          </div>
          
          <div className="flex items-center justify-center pt-4">
            <a 
              href="https://chat.whatsapp.com/CHkLcYPYaCxKAgGabxNvSy" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-3 rounded-md bg-[#25D366] text-white font-medium hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 w-full justify-center`}
            >
              <MessageCircle className="h-5 w-5" />
              Join our WhatsApp community
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;
