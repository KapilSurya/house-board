
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-houseboard-medium/10 backdrop-blur-sm rounded-lg overflow-hidden">
      <button
        onClick={toggleOpen}
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
      >
        <h3 className="font-medium text-lg text-white">{question}</h3>
        <span className="text-white flex-shrink-0 ml-4">
          {isOpen ? (
            <MinusIcon className="h-5 w-5" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
