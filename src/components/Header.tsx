import React from 'react'
import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Brain className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-800">Ratio</span>
        </motion.div>
        <motion.ul
          className="flex space-x-6 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a></li>
          <li>
            <Link to="/login">
              <motion.button
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log In
              </motion.button>
            </Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  )
}

export default Header