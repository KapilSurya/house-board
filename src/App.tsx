
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
  // Add stars and shooting stars to the background
  useEffect(() => {
    const starCount = 100; // More stars for a brighter sky
    const shootingStarCount = 5; // Number of shooting stars
    const container = document.body;
    
    // Remove any existing stars to prevent duplicates on re-render
    const existingStars = document.querySelectorAll('.star, .shooting-star');
    existingStars.forEach(star => star.remove());
    
    // Remove existing moon
    const existingMoon = document.querySelector('.moon');
    if (existingMoon) existingMoon.remove();
    
    // Create moon
    const moon = document.createElement('div');
    moon.className = 'moon';
    // Position the moon lower to avoid navbar overlap
    moon.style.top = '180px';
    container.appendChild(moon);
    
    // Create stars with varying colors for a more vibrant sky
    const starColors = ['#ffffff', '#ffd54f', '#43B3AE', '#fffde7'];
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = `star star-${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
      
      // Random position
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      
      // Random color
      const colorIndex = Math.floor(Math.random() * starColors.length);
      star.style.backgroundColor = starColors[colorIndex];
      
      // Random twinkle animation
      star.style.animation = `flicker ${2 + Math.random() * 5}s infinite alternate`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < shootingStarCount; i++) {
      createShootingStar(container);
    }
    
    // Setup interval to create new shooting stars
    const shootingStarInterval = setInterval(() => {
      createShootingStar(container);
    }, 10000); // New shooting star every 10 seconds
    
    // Cleanup function
    return () => {
      const elements = document.querySelectorAll('.star, .shooting-star, .moon');
      elements.forEach(el => el.remove());
      clearInterval(shootingStarInterval);
    };
  }, []);
  
  // Function to create a shooting star
  const createShootingStar = (container: HTMLElement) => {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Random starting position (top half of screen, right side)
    const startX = Math.random() * (window.innerWidth / 2) + (window.innerWidth / 2);
    const startY = Math.random() * (window.innerHeight / 2);
    
    shootingStar.style.left = `${startX}px`;
    shootingStar.style.top = `${startY}px`;
    shootingStar.style.animationDuration = `${5 + Math.random() * 5}s`; // Random duration
    shootingStar.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    
    // Random rotation (diagonal angle)
    const rotation = 35 + Math.random() * 20;
    shootingStar.style.transform = `rotate(${rotation}deg)`;
    
    container.appendChild(shootingStar);
    
    // Remove shooting star after animation completes to clean up DOM
    setTimeout(() => {
      if (shootingStar.parentNode === container) {
        container.removeChild(shootingStar);
      }
    }, 10000);
  };

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
