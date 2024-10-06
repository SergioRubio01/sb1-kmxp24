import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, LogOut, CreditCard, User, Sun, Moon } from 'lucide-react'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleTheme = () => setDarkMode(!darkMode)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button onClick={toggleSidebar} className="text-2xl">
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <div className="relative">
            <button className="flex items-center space-x-2">
              <User className="w-6 h-6" />
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">
                  <LogOut className="w-4 h-4 inline-block mr-2" /> Logout
                </a>
                <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">
                  <CreditCard className="w-4 h-4 inline-block mr-2" /> My Subscription
                </a>
                <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">
                  <User className="w-4 h-4 inline-block mr-2" /> Edit Account
                </a>
                <button onClick={toggleTheme} className={`block w-full text-left px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">
                  {darkMode ? <Sun className="w-4 h-4 inline-block mr-2" /> : <Moon className="w-4 h-4 inline-block mr-2" />} Toggle Theme
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="mt-16 p-4">
          <a href="#" className={`block py-2 px-4 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>Main</a>
          <a href="#" className={`block py-2 px-4 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>Projects</a>
          <a href="#" className={`block py-2 px-4 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>Teams</a>
          <a href="#" className={`block py-2 px-4 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>Give Feedback</a>
        </nav>
      </div>

      {/* Main content */}
      <main className={`p-4 ${sidebarOpen ? 'ml-64' : ''}`}>
        <h1 className="text-4xl font-bold mb-8">Happy AI modeling, John Doe!!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Chat with AI</h2>
            <div className="bg-white p-4 rounded-lg h-64 overflow-y-auto mb-4">
              {/* Chat messages would go here */}
            </div>
            <input
              type="text"
              placeholder="Ask a question to the LLM model here..."
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white p-4 rounded-lg"
            >
              Add new model
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white p-4 rounded-lg"
            >
              Edit existing model
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white p-4 rounded-lg"
            >
              Add database
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-white p-4 rounded-lg"
            >
              Edit existing database
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard