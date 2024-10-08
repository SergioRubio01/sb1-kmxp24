import { FaSearch } from 'react-icons/fa';
import { useDarkMode } from '../pages/LandingPage';
import DarkModeSwitch from './DarkModeSwitch';
import { useState } from 'react';
import { UserRound, Menu, X } from 'lucide-react'; // Icons for header menu

const DocumentationHeader = () => {
  const { isDarkMode } = useDarkMode();
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  // Toggle the mobile navigation dropdown
  const toggleNavDropdown = () => {
    setIsNavDropdownOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`p-2 flex lg:space-x-40 space-x-5 pr-4 justify-between items-center ${
        isDarkMode ? 'bg-black' : 'bg-white'
      } bg-opacity-90 border-2 rounded-full border-gray-800 fixed top-4 w-full z-50`}
    >
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <button
          onClick={() => (window.location.href = '/')}
          className="text-2xl font-bold text-white"
        >
          BizAI Docs
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className={`w-full p-2 pr-10 border-2 ${
              isDarkMode ? 'border-gray-600 bg-black text-white' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:border-indigo-500`}
          />
          <FaSearch
            className="absolute right-3 top-3 text-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* Dark Mode Switch */}
      <div className="flex items-center">
        <DarkModeSwitch isDarkMode={isDarkMode} />
      </div>
    </header>
  );
};

export default DocumentationHeader;
