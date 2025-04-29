import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
const ThemeToggle: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return;
};
export default ThemeToggle;