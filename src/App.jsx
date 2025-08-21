import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './pages/HomePage/sections/Hero';
import MarketplacePreview from './pages/HomePage/sections/MarketplacePreview';
import Footer from './components/Footer';
import TokenizationHub from './pages/TokenizationHub/TokenizationHub';
import Marketplace from './pages/Marketplace/Marketplace';
import HomePage from './pages/HomePage/HomePage';

import CopymAI from './pages/CopymAI/CopymAI';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/aboutus/aboutus';
import ScrollToTop from "./components/ScrollToTop";
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Roadmap from './pages/Roadmap/Roadmap';
import Launchkit from './pages/Launchkit/Launchkit';
import AccessPage from './pages/AccessPage/AccessPage';
import SplashScreen from './components/SplashScreen';
import { animate } from 'animejs';


function App() {
  const location = useLocation();
   const [showSplash, setShowSplash] = useState(true);
  const appRef = useRef(null);
  
  // Check if we're on the copym-ai page
  const isCopymAIPage = location.pathname === "/copym-ai";

  // Handle splash screen timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      
      // Initial page load animation after splash screen
      if (appRef.current) {
        animate('.bg-background', {
          opacity: [0, 1],
          duration: 800,
          easing: 'easeInOutQuad'
        });
      }
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  // Additional animation for navbar
  useEffect(() => {
    if (!showSplash) {
      animate('nav', {
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }
  }, [showSplash]);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <SplashScreen />
        </motion.div>
      ) : (
        <Box
        ref={appRef} 
         className={`min-h-screen relative text-text-primary overflow-x-hidden ${isCopymAIPage ? '' : 'bg-blue-100'}`}>
          <ScrollToTop />
          <Header />
          <main className="relative z-20 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/tokenization" element={<TokenizationHub />} />
              <Route path="/launchkit" element={<Launchkit />} />

              <Route path="/copym-ai" element={<CopymAI />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/access" element={<AccessPage />} />
            </Routes>
          </main>
          <Footer />
        </Box>
      )}
    </AnimatePresence>
  );
}

export default App;