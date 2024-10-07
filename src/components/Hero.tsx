import React, { useState } from 'react';
import CoolButton_2 from './CoolButton_2';
import DarkModeSwitch from './DarkModeSwitch';
import { UserRound, AudioWaveform, UserPlus, Menu, X } from 'lucide-react';
import BgImage_3 from './BgImage_3';

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNavDropdown = () => {
    setIsNavDropdownOpen(!isNavDropdownOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <main
      className={`relative w-full h-full flex flex-col justify-center items-center text-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} pb-40 ${isNavDropdownOpen ? 'bg-opacity-90' : 'bg-opacity-60'}`}
      style={{
        backgroundSize: isDarkMode ? 'cover' : '100% 200%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Content Layer */}
      <header className={`p-2 flex lg:space-x-40 space-x-5 pr-4 justify-between items-center ${isDarkMode ? 'bg-black' : 'bg-white'} bg-opacity-90 border-2 rounded-full mt-5 border-gray-800 sticky top-4 z-50`}>
        <div className="sm:flex hidden items-center space-x-6">
          <AudioWaveform className='pl-2 pr-0' size={40} />
          <h1 className="text-2xl font-bold">BizAI</h1>
        </div>
        <div className="sm:hidden relative">
          <button onClick={toggleNavDropdown} className='flex'>
            <Menu size={26} />
          </button>
          {isNavDropdownOpen && (
            <div className={`fixed top-24 left-10 w-4/5 h-1/5 bg-opacity-100 flex flex-col justify-center items-center ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-black'} border-4 rounded-xl border-gray-800`}>
              <a href="/resources" className={`hover:animate-pulse block mt-6 py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-1 rounded-xl text-center w-3/4`}>🔍Resources</a>
              <a href="/pricing" className={`hover:animate-pulse block py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-1 rounded-xl text-center w-3/4`}>🔝 Pricing</a>
              <a href="/docs" className={`hover:animate-pulse block py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-1 rounded-xl text-center w-3/4`}>📚Documentation</a>
              <a href="#github" className={`hover:animate-pulse block py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-1 rounded-xl text-center w-3/4`}>⭐GitHub</a>
              <button onClick={toggleNavDropdown} className="mt-6 px-6 py-4 bg-red-900 rounded-full text-white text-lg flex items-center hover:animate-pulse">
                <X className="flex" size={24} />
              </button>
            </div>
          )}
        </div>
        <nav className="hidden sm:flex space-x-0">
          <a href="/resources" className="text-gray-400 hover:text-white rounded-full p-2">Resources</a>
          <a href="/pricing" className="text-gray-400 hover:text-white rounded-full p-2">Pricing</a>
          <a href="/docs" className="text-gray-400 hover:text-white rounded-full p-2">Documentation</a>
          <a href="#github" className="text-gray-400 hover:text-white rounded-full p-2">GitHub⭐</a>
        </nav>
        <div className="flex items-center space-x-4">
          <CoolButton_2 children={'Dashboard'} />
          <div className="relative">
            <button onClick={toggleDropdown} className='border-2 rounded-full p-1'>
              <UserRound size={24} />
            </button>
            {isDropdownOpen && (
              <div className={`absolute left-1/2 transform -translate-x-1/2 mt-4 w-32 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-200 text-black'} rounded-md shadow-lg`}>
                <a href="/login" className="flex items-center justify-center px-4 py-2 text-sm hover:bg-gray-700 rounded-md">
                  <UserPlus className="mr-2" size={16} /> Sign Up
                </a>
              </div>
            )}
          </div>
          <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>

      <h1 className="max-w-1/2 w-3/5 md:text-6xl text-3xl font-bold md:mt-48 mt-16">
        <span className="text-red-800">BizAI:</span> The best ML no-code software experience
      </h1>
      <p className={`sm:mt-20 mt-10 font-semibold mb-4 ml-4 mr-4 text-md sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>
        <span>🤔 Tired of hearing about AI but never been able to create your</span><span className='font-bold'> own</span> model?
      </p>
      <p className={`sm:mb-28 mb-14 mt-4 ml-4 mr-4 text-md font-semibold sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>💪 We make all the heavy-lifting so you can focus on the creative part of AI</p>
      <CoolButton_2 children={'Get Started'} />

      {/* Background Image Layer at the Bottom */}
      <BgImage_3 />
    </main>
  );
};

export default Hero;
