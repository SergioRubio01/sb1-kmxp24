import { useState } from 'react';
import { useDarkMode } from '../pages/LandingPage';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring for animations
import CoolButton_2 from './CoolButton_2';
import 'animate.css'; // Import CSS animations from animate.css
import Header from './Header';

const Hero = () => {
  // Get dark mode context and toggle function from the LandingPage context
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // State for controlling user dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State for controlling navigation dropdown visibility (for mobile view)
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  // Determine the background image and size based on screen size and dark mode
  const isSmallScreen = window.innerWidth < 768;
  const backgroundImage = isSmallScreen
    ? isDarkMode
      ? 'url(fondo_3.svg)'
      : 'url(fondo_5.svg)'
    : isDarkMode
      ? 'url(fondo_4.svg)'
      : 'url(fondo_4.svg)';
  const backgroundSize = isSmallScreen ? 'cover' : 'cover';

  return (
    <main
      // Main container with background styles depending on dark mode status
      className={`w-full min-h-screen h-fit pb-20 flex flex-col items-center justify-start ${isDarkMode ? 'bg-black text-white' : 'bg-cyan-50 text-black'}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header className="fixed top-0 w-full z-50" />

      {/* Main headline with animation */}
      <div className='mt-28 sm:mt-48 items-center text-center justify-center flex flex-col'>
        <animated.h1 className="w-4/5 md:w-2/3 md:text-6xl text-4xl font-bold">
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
        <CoolButton_2 href="./pricing" height="3.5rem" paddingX={'4rem'}>
          Get Started
        </CoolButton_2>
      </div>
    </main>
  );
};

// Use named export instead of default export for better scalability and flexibility
export { Hero };
