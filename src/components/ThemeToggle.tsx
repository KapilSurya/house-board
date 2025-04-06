
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      variant="outline"
      pressed={theme === 'light'}
      onPressedChange={() => toggleTheme()}
      className="bg-transparent border-white/20 hover:bg-white/10 hover:text-white"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? 
        <Moon className="h-5 w-5 text-[#ffd54f]" /> : 
        <Sun className="h-5 w-5 text-[#487BD4]" />
      }
    </Toggle>
  );
};

export default ThemeToggle;
