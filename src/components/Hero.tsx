import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Build ML Models with Ease
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Ratio helps engineers create simple machine learning architectures using intuitive building blocks.
          </p>
          <motion.button
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero