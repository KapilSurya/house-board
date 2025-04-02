
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface FeatureProps {
  title: string;
  description: string;
  ctaText: string;
  imageRight?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  ctaText,
  imageRight = false
}) => {
  return (
    <div className={cn(
      "grid md:grid-cols-2 gap-8 items-center py-16",
      imageRight ? "md:grid-flow-dense" : ""
    )}>
      <div className={cn(
        "space-y-4",
        imageRight ? "md:col-start-1" : ""
      )}>
        <h3 className="text-2xl md:text-3xl font-bold text-houseboard-dark">{title}</h3>
        <p className="text-gray-700 text-lg">{description}</p>
        <Button className="mt-4 bg-houseboard-medium hover:bg-houseboard-dark text-white btn-hover-effect">
          {ctaText}
        </Button>
      </div>

      <div className={cn(
        "bg-gradient-to-br from-houseboard-dark/10 to-houseboard-medium/10 p-4 rounded-2xl shadow-lg animate-float",
        imageRight ? "md:col-start-2" : ""
      )}>
        <div className="bg-white rounded-xl aspect-video flex items-center justify-center">
          <div className="text-center">
            <p className="text-houseboard-medium font-medium">{title} Demo</p>
            <p className="text-sm text-gray-500">Interactive visualization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
