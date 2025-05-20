
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { 
  MessageSquare, 
  CalendarDays, 
  BookHeart, 
  Bell, 
  Heart, 
  LucideIcon 
} from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  ctaText: string;
  imageRight?: boolean;
  iconName?: string;
  compact?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  ctaText,
  imageRight = false,
  iconName = 'MessageSquare',
  compact = false
}) => {
  const icons: Record<string, LucideIcon> = {
    MessageSquare,
    CalendarDays,
    BookHeart,
    Bell,
    Heart
  };
  
  const FeatureIcon = icons[iconName as keyof typeof icons] || MessageSquare;

  return (
    <div className={cn(
      "grid md:grid-cols-2 gap-8 items-center",
      compact ? "py-4" : "py-16",
      imageRight ? "md:grid-flow-dense" : ""
    )}>
      <div className={cn(
        "space-y-3",
        imageRight ? "md:col-start-1" : ""
      )}>
        <h3 className={cn(
          "font-bold text-houseboard-dark flex items-center gap-2",
          compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
        )}>
          <FeatureIcon className="w-6 h-6 text-houseboard-medium" />
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
        <Button className="mt-2 bg-houseboard-medium hover:bg-houseboard-dark text-white btn-hover-effect transform transition-all duration-300 hover:scale-105">
          {ctaText}
        </Button>
      </div>

      <div className={cn(
        "flex justify-center",
        imageRight ? "md:col-start-2" : ""
      )}>
        <div className={cn(
          "rounded-3xl bg-gray-100 border-8 border-gray-300 shadow-xl overflow-hidden relative",
          compact ? "w-48 h-[400px]" : "w-64 h-[500px]"
        )}>
          <div className="absolute top-0 left-0 right-0 h-6 bg-gray-300 rounded-t-xl"></div>
          <div className="mt-6 h-[calc(100%-6px)] bg-gradient-to-br from-houseboard-dark/10 to-houseboard-medium/20 p-4 flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4 animate-pulse-gentle">
              <FeatureIcon className="w-8 h-8 text-houseboard-medium" />
            </div>
            <p className="text-houseboard-dark font-medium text-center mb-2">{title}</p>
            <p className="text-sm text-gray-600 text-center">Tap to explore</p>
            
            <div className="mt-auto w-full">
              <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-houseboard-medium/20 flex items-center justify-center mr-2">
                    <FeatureIcon className="w-4 h-4 text-houseboard-medium" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium">{title}</p>
                    <p className="text-xs text-gray-500">Interactive preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
