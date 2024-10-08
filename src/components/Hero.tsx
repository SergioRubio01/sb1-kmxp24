import { useState } from 'react';
import { useDarkMode } from '../pages/LandingPage';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring for animations
import DarkModeSwitch from './DarkModeSwitch';
import CoolButton_2 from './CoolButton_2';
import { UserRound, AudioWaveform, UserPlus, Menu, X } from 'lucide-react'; // Import icons from lucide-react
import 'animate.css'; // Import CSS animations from animate.css
import Header from './Header';

const Hero = () => {
  // Get dark mode context and toggle function from the LandingPage context
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // State for controlling user dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State for controlling navigation dropdown visibility (for mobile view)
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  // Toggle user dropdown open/close state
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Toggle navigation dropdown open/close state (for mobile view)
  const toggleNavDropdown = () => {
    setIsNavDropdownOpen((prevState) => !prevState);
  };

  return (
    <main
      // Main container with background styles depending on dark mode status
      className={`relative w-full min-h-screen flex flex-col justify-center items-center text-center ${isDarkMode ? 'bg-black text-white' : 'bg-red-100 text-black'} pb-44`}
      style={{
        backgroundImage: isDarkMode ? `url(fondo_3.svg)` : `url(fondo_5.svg)`,
      }}
    >
      {/* Content Layer */}
      <Header />

      {/* Main headline with animation */}
      <animated.h1 className="w-4/5 md:text-6xl text-4xl font-bold md:mt-48 mt-32">
        <animated.span className="text-red-600">
          BizAI:
        </animated.span>{' '}
        The best ML no-code software experience
      </animated.h1>
      {/* Subtitle text providing context */}
      <p className={`sm:mt-20 mt-10 font-semibold mb-4 ml-10 mr-10 text-md sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>
        <span>🤔 Tired of hearing about AI but never been able to create your</span><span className='font-bold'> own</span> model?
      </p>
      {/* Additional subtitle with motivational message */}
      <p className={`sm:mb-28 mb-14 mt-4 ml-10 mr-10 text-md font-semibold sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>💪 We make all the heavy-lifting so you can focus on the creative part of AI</p>
      {/* Call-to-action button to get started */}
      <CoolButton_2 href="./pricing" height="3.5rem">
        Get Started
      </CoolButton_2>
    </main>
  );
};

// Use named export instead of default export for better scalability and flexibility
export { Hero };