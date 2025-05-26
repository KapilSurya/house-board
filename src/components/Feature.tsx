
import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
  width: number;
  height: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, imageSrc, imageAlt, index, width, height }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1e3d4c]">
          {title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <div className="house-window bg-gradient-to-br from-[#2e4e5f] to-[#1e3d4c] p-6 rounded-2xl max-w-sm w-full">
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-contain rounded-lg"
            style={{ maxHeight: "500px" }}
            width={width}
            height={height}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
