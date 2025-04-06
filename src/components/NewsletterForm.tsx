
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NewsletterDialog from './NewsletterDialog';

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
      <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
        Be the first to test HouseBoard and gain super cool benefits from free premiums to customized incentives.
      </p>
      
      <Button 
        onClick={handleOpenDialog}
        className="bg-houseboard-medium hover:bg-[#ffd54f] hover:text-houseboard-dark transition-colors duration-300"
      >
        {buttonText}
      </Button>
      
      <NewsletterDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
};

export default NewsletterForm;
