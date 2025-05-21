
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import WhoIsItForPage from "./pages/WhoIsItForPage";
import FaqPage from "./pages/FaqPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import LoveLetter from "./pages/LoveLetter";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useStarsBackground } from "./hooks/useStarsBackground";
import { HelmetProvider } from "react-helmet-async";

const StarsBackgroundEffect = () => {
  useStarsBackground();
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
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/features" element={<Features />} />
                <Route path="/who-is-it-for" element={<WhoIsItForPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/blogs" element={<BlogIndex />} />
                <Route path="/blogs/:slug" element={<BlogPost />} />
                <Route path="/love/:id" element={<LoveLetter />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/about" element={<About />} />
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
