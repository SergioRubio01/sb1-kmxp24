import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import BgImage_3 from '../components/BgImage_3';

function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-white relative"
      initial={{ opacity: 0, y: 100 }} // Start from slightly below and fully transparent
      animate={{ opacity: 1, y: 0 }} // Transition to normal position with full opacity
      transition={{ duration: 1, ease: "easeOut" }} // Set duration and easing for smooth effect
      >
      {/* Background Image Layer */}
      <BgImage_3 isDarkMode={isDarkMode} />

      {/* Content Layers */}
      <Hero />
      <Features isDarkMode={isDarkMode} />
      <Footer />
    </motion.div>
  );
}

export default LandingPage;
