import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../pages/Features';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
