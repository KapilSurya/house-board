
import { useEffect } from 'react';

export const useStarsBackground = () => {
  useEffect(() => {
    const starCount = 50;
    const container = document.body;
    
    // Remove any existing stars to prevent duplicates on re-render
    const existingStars = document.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());
    
    // Remove existing moon
    const existingMoon = document.querySelector('.moon');
    if (existingMoon) existingMoon.remove();
    
    // Create moon
    const moon = document.createElement('div');
    moon.className = 'moon';
    // Position the moon lower to avoid navbar overlap
    moon.style.top = '180px'; // Moved down even more
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
    
    // Cleanup function
    return () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => star.remove());
      const moon = document.querySelector('.moon');
      if (moon) moon.remove();
    };
  }, []);
};
