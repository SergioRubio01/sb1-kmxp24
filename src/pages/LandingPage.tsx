import React from 'react';
import { motion } from 'framer-motion';
// import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0, y: 100 }} // Start from slightly below and fully transparent
      animate={{ opacity: 1, y: 0 }} // Transition to normal position with full opacity
      transition={{ duration: 1, ease: "easeOut" }} // Set duration and easing for smooth effect
    >
      {/* <Header /> */}
      <Hero />
      <Features />
      <Footer />
    </motion.div>
  );
}

export default LandingPage;