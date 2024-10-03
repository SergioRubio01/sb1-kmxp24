import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Code, Zap } from 'lucide-react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Footer from './Footer'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default LandingPage