import { useState } from 'react';
import { useDarkMode } from '../pages/LandingPage';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring for animations
import DarkModeSwitch from './DarkModeSwitch';
import CoolButton_2 from './CoolButton_2';
import { UserRound, AudioWaveform, UserPlus, Menu, X } from 'lucide-react'; // Import icons from lucide-react
import 'animate.css'; // Import CSS animations from animate.css

const Header = () => {
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
    <header 
        // Header with conditional styling for dark mode and layout properties
        className={`p-2 flex lg:space-x-40 space-x-5 pr-4 justify-between items-center ${isDarkMode ? 'bg-black' : 'bg-white'} bg-opacity-90 border-2 rounded-full mt-5 border-gray-800 sticky top-4 z-50`}
      >
        {/* Logo and Title - visible only on larger screens */}
        <div className="sm:flex hidden items-center space-x-6">
          <AudioWaveform className='pl-2 pr-0' size={40} /> {/* AudioWaveform icon as a logo */}
          <button onClick={() => window.location.href = '/'} className="text-2xl font-bold">BizAI</button> {/* Application name as a button to navigate to the home page */}
        </div>
        {/* Mobile navigation button */}
        <div className="sm:hidden relative">
          <button onClick={toggleNavDropdown} className='flex menu-bounce rounded-lg p-1 hover:bg-gray-800'>
            <Menu size={26} /> {/* Menu icon for mobile dropdown navigation */}
          </button>
          {/* Mobile dropdown menu - appears when isNavDropdownOpen is true */}
          {isNavDropdownOpen && (
            <div 
              className={`fixed top-24 left-10 w-4/5 h-1/4 bg-opacity-100 flex flex-col justify-center items-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} border-4 rounded-xl border-gray-800 menu-entrance animate__animated animate__fadeInLeftBig`}
            >
              {/* Links in the mobile dropdown menu */}
              <a href="/resources" className={`block mt-4 py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-2 rounded-xl text-center w-3/4`}>🔍Resources</a>
              <a href="/pricing" className={`block py-4 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-2 rounded-xl text-center w-3/4`}>🔝 Pricing</a>
              <a href="/docs" className={`block py-4 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-2 rounded-xl text-center w-3/4`}>📚Documentation</a>
              <a href="#github" className={`block py-4 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-2 rounded-xl text-center w-3/4`}>⭐GitHub</a>
              {/* Close button for the mobile dropdown menu */}
              <button onClick={toggleNavDropdown} className="my-4 p-3 bg-red-900 rounded-xl text-white text-lg flex items-center">
                <X className="flex" size={24} />
              </button>
            </div>
          )}
        </div>
        {/* Desktop navigation links */}
        <nav className="hidden sm:flex space-x-0">
          <a href="/resources" className="text-gray-400 hover:text-white rounded-full p-2">Resources</a>
          <a href="/pricing" className="text-gray-400 hover:text-white rounded-full p-2">Pricing</a>
          <a href="/docs" className="text-gray-400 hover:text-white rounded-full p-2">Documentation</a>
          <a href="#github" className="text-gray-400 hover:text-white rounded-full p-2">GitHub⭐</a>
        </nav>
        {/* User action buttons: Dashboard, User Icon, Dark Mode Switch */}
        <div className="flex items-center space-x-4">
          <CoolButton_2 children={'Dashboard'} height={'2rem'} href={'/'}/> {/* Button linking to dashboard */}
          <div className="relative">
            {/* User Icon Button */}
            <button onClick={toggleDropdown} className='border-2 rounded-full p-1'>
              <UserRound size={24} /> {/* User icon */}
            </button>
            {/* User dropdown for Sign Up - appears when isDropdownOpen is true */}
            {isDropdownOpen && (
              <div className={`absolute right-0 transform -translate-x-1/2 mt-4 w-32 ${isDarkMode ? 'bg-slate-600 text-white' : 'bg-gray-300 text-black'} rounded-md shadow-lg animate__animated animate__backInDown`}>
                <a href="/login" className={`flex items-center justify-center px-4 py-2 text-sm ${isDarkMode ? 'hover:bg-slate-800':'hover:bg-gray-500'} rounded-md`}>
                  <UserPlus className="mr-2" size={16} /> Sign Up
                </a>
              </div>
            )}
          </div>
          {/* Dark Mode Switch */}
          <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>
  );
};

export default Header;