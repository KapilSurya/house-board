
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import WhoIsItForPage from "./pages/WhoIsItFor";
import FAQ from "./pages/FAQ";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useStarsBackground } from "./hooks/useStarsBackground";
import { HelmetProvider } from "react-helmet-async";

const StarsBackgroundEffect = () => {
  useStarsBackground();
  return null;
};

// Component to handle scroll to section based on URL hash
const ScrollToSection = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Get the target element by ID (removing the # from the hash)
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else if (location.pathname === '/' || 
               location.pathname === '/features' ||
               location.pathname === '/who-is-it-for' ||
               location.pathname === '/faq') {
      // On page load without hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
};

const App = () => {
  // Create QueryClient inside the component
  const queryClient = new QueryClient();
  
  return (
    <ThemeProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner richColors closeButton />
            <StarsBackgroundEffect />
            <BrowserRouter>
              <ScrollToSection />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/features" element={<Features />} />
                <Route path="/who-is-it-for" element={<WhoIsItForPage />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blogs" element={<BlogIndex />} />
                <Route path="/blogs/:slug" element={<BlogPost />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
