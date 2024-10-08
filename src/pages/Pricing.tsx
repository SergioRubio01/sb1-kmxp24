import { useState } from 'react';
import { useDarkMode } from './LandingPage';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring for adding animation effects
import DarkModeSwitch from '../components/DarkModeSwitch'; // Dark mode switch component
import CoolButton_2 from '../components/CoolButton_2'; // Custom button component
import { UserRound, AudioWaveform, UserPlus, Menu, X } from 'lucide-react'; // Import icons from lucide-react
import 'animate.css'; // Import CSS animations from animate.css
import PricingSelector from '../components/PricingSelector'; // Component to toggle between pricing plans
import PricingCard from '../components/PricingCard'; // Component to display individual pricing plans
import Header from '../components/Header'; // Header component for navigation
import { motion } from 'framer-motion';

const Pricing = () => {
  // Use dark mode context to get the current mode and a function to toggle it
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // State to control the visibility of the user dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State to control the visibility of the navigation dropdown for mobile view
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  // Function to toggle the user dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Function to toggle the navigation dropdown menu for mobile view
  const toggleNavDropdown = () => {
    setIsNavDropdownOpen((prevState) => !prevState);
  };

  return (
    <motion.div
      // Main container with conditional styles based on dark mode
      className={`relative w-full flex flex-col items-center text-center ${isDarkMode ? 'bg-black text-white' : 'bg-red-100 text-black'}`}
      style={{
        // Set background image depending on dark mode
        backgroundImage: isDarkMode ? `url(fondo_3.svg)` : `url(fondo_5.svg)`,
      }}
    >
      {/* Header Component with consistent placement */}
      <Header className="fixed top-0 w-full z-50" />

      {/* Animated headline with create and deploy message */}
      <animated.h1 className="w-4/5 md:w-1/3 md:text-5xl text-4xl font-semibold md:mt-24 mt-16 mb-2">
        <animated.span className="text-blue-400">
          Create
        </animated.span>{' '}
          &
        <animated.span className="text-red-800">{' '}
          Deploy
        </animated.span>{' '}
        your own AI model today
      </animated.h1>

      {/* Pricing selector to toggle between Individual and Teams plans */}
      <div className='w-1/2 rounded-full m-6 flex justify-center items-center'>
        <PricingSelector 
          height='45px' 
          width='300px' 
          firstFilterColor='#991b1b' 
          secondFilterColor='#ffffff' 
          option1Name='Individual' 
          option2Name='Teams'
        />
      </div>

      {/* Promotional text encouraging early sign-up */}
      <div className='w-72 rounded-md m-0 flex justify-center items-center'>
        Be the early bird and get the best discount
      </div>

      {/* Pricing cards displaying different subscription options */}
      <div className='flex flex-col grid-col-1 md:grid-cols-3 justify-center items-center space-y-4 mt-6'>
        <PricingCard 
          backgroundColor='#404040' 
          title='Individual' 
          description='For individual developers' 
          price='' 
          description2='Get Started'
        />
        <PricingCard 
          backgroundColor='#404040' 
          title='Pro' 
          description='For teams and organizations' 
          price='' 
          description2='Get Started'
        />
        <PricingCard 
          backgroundColor='#404040' 
          title='Teams' 
          description='For teams and organizations' 
          price='' 
          description2='Get Started'
        />
      </div>
    </motion.div>
  );
};

export default Pricing;
