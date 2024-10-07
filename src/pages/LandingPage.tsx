import { useState, useEffect, useContext, createContext } from 'react';
import { motion } from 'framer-motion';
import {Hero} from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

const LandingPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} relative`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Hero />
      <Features isDarkMode={isDarkMode} />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;