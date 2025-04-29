
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Add stars and shooting stars to the background
  useEffect(() => {
    const starCount = 100;
    const shootingStarCount = 5;
    const container = document.body;
    
    // Remove any existing stars to prevent duplicates on re-render
    const existingStars = document.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());
    
    const existingShootingStars = document.querySelectorAll('.shooting-star');
    existingShootingStars.forEach(star => star.remove());
    
    // Remove existing moon
    const existingMoon = document.querySelector('.moon');
    if (existingMoon) existingMoon.remove();
    
    // Create moon
    const moon = document.createElement('div');
    moon.className = 'moon';
    // Position the moon lower to avoid navbar overlap
    moon.style.top = '180px';
    container.appendChild(moon);
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = `star star-${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
      
      // Random position
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      
      // Random twinkle animation
      star.style.animation = `flicker ${2 + Math.random() * 3}s infinite alternate`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < shootingStarCount; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
      // Random position
      shootingStar.style.left = `${Math.random() * 80}vw`;
      shootingStar.style.top = `${Math.random() * 30}vh`;
      
      // Random animation delay
      shootingStar.style.animationDelay = `${Math.random() * 15}s`;
      
      container.appendChild(shootingStar);
    }
    
    // Cleanup function
    return () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => star.remove());
      const shootingStars = document.querySelectorAll('.shooting-star');
      shootingStars.forEach(star => star.remove());
      const moon = document.querySelector('.moon');
      if (moon) moon.remove();
    };
  }, []);

  // Add favicon
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = '/lovable-uploads/8c253fbd-5ccb-40a0-8f63-5e01ae108072.png';
      document.head.appendChild(newLink);
    } else {
      link.href = '/lovable-uploads/8c253fbd-5ccb-40a0-8f63-5e01ae108072.png';
    }

    // Set page title
    document.title = "HiveIn - A safe home for stronger love";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
