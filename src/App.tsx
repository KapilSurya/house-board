
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const starCount = 50;
    const heartCount = 15;
    const hexagonCount = 10;
    const container = document.body;
    
    // Remove existing elements
    const existingElements = document.querySelectorAll('.floating-element, .star, .moon');
    existingElements.forEach(el => el.remove());
    
    // Create moon
    const moon = document.createElement('div');
    moon.className = 'moon';
    moon.style.top = '180px';
    container.appendChild(moon);
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = `star star-${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animation = `flicker ${2 + Math.random() * 3}s infinite alternate`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
    
    // Create hearts
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-element heart';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(heart);
    }
    
    // Create hexagons
    for (let i = 0; i < hexagonCount; i++) {
      const hexagon = document.createElement('div');
      hexagon.className = 'floating-element hexagon';
      hexagon.style.left = `${Math.random() * 100}vw`;
      hexagon.style.top = `${Math.random() * 100}vh`;
      hexagon.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(hexagon);
    }
    
    return () => {
      const elements = document.querySelectorAll('.floating-element, .star, .moon');
      elements.forEach(el => el.remove());
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
