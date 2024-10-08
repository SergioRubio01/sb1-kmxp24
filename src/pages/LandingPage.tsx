import { useState, useEffect, useContext, createContext } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import Footer from '../components/Footer';
import Features from '../components/Features';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Retrieve saved dark mode preference or system preference on initial load
  useEffect(() => {
    const savedPreference = localStorage.getItem('darkMode');
    if (savedPreference !== null) {
      setIsDarkMode(JSON.parse(savedPreference));
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Listen for changes in system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply dark mode class to the document root based on state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hook to access dark mode context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

// Main landing page component
const LandingPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        backgroundImage: isDarkMode ? `url(fondo_3.svg)` : `url(fondo_5.svg)`,
      }}
    >
      {/* Consistent Header component across all pages */}
      <Hero />
      <Features isDarkMode={isDarkMode} />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
