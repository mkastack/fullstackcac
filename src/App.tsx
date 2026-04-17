import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import React, { Suspense } from "react";

// Lazy Load Public Pages
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Give = React.lazy(() => import("./pages/Give"));
const Sermons = React.lazy(() => import("./pages/Sermons"));
const SermonsVideo = React.lazy(() => import("./pages/SermonsVideo"));
const SermonsAudio = React.lazy(() => import("./pages/SermonsAudio"));
const Events = React.lazy(() => import("./pages/Events"));
const Ministries = React.lazy(() => import("./pages/Ministries"));
const Prayer = React.lazy(() => import("./pages/Prayer"));
const Contact = React.lazy(() => import("./pages/Contact"));

// Lazy Load Admin
const AdminLayout = React.lazy(() => import("./admin/AdminLayout"));

const queryClient = new QueryClient();

// High-end Global Loading State
const PageLoader = () => (
  <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        {/* Church Logo in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/church-logo.png" 
            alt="Church Logo" 
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain animate-pulse"
          />
        </div>
        
        {/* Outer premium spinning ring */}
        <div className="absolute inset-0 border-[3px] border-church-gold/10 border-t-church-red rounded-full animate-spin" />
        
        {/* Secondary decorative ring */}
        <div className="absolute -inset-2 border border-church-gold/5 rounded-full" />
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(202,30,22,0.15)] animate-glow" />
      </div>
      
      <div className="flex flex-col items-center gap-3">
        <p className="text-church-red font-black text-[10px] sm:text-[11px] uppercase tracking-[0.4em] animate-pulse">
          Loading Sanctuary
        </p>
        {/* Animated progress line */}
        <div className="h-[2px] w-20 relative overflow-hidden bg-church-gold/10 rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-church-gold to-transparent animate-[scroll_2s_linear_infinite]" />
        </div>
      </div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="church-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/sermons" element={<Sermons />} />
              <Route path="/sermons/video" element={<SermonsVideo />} />
              <Route path="/sermons/audio" element={<SermonsAudio />} />
              <Route path="/events" element={<Events />} />
              <Route path="/ministries" element={<Ministries />} />
              <Route path="/prayer" element={<Prayer />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/give" element={<Give />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/*" element={<AdminLayout />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
