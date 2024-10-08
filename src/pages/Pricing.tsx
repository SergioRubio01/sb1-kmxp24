import { useState } from 'react';
import { useDarkMode } from './LandingPage';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring
import DarkModeSwitch from '../components/DarkModeSwitch';
import CoolButton_2 from '../components/CoolButton_2';
import { UserRound, AudioWaveform, UserPlus, Menu, X } from 'lucide-react';
import 'animate.css';
import PricingSelector from '../components/PricingSelector';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleNavDropdown = () => {
    setIsNavDropdownOpen((prevState) => !prevState);
  };

  return (
    <main
      className={`relative w-full min-h-screen flex flex-col justify-center items-center text-center ${isDarkMode ? 'bg-black text-white' : 'bg-red-100 text-black'}`}
      style={{
        backgroundImage: isDarkMode ? `url(fondo_3.svg)` : `url(fondo_5.svg)`,
      }}
    >
      {/* Content Layer */}
      <header className={`p-2 flex lg:space-x-40 space-x-5 pr-4 justify-center items-center ${isDarkMode ? 'bg-black' : 'bg-white'} bg-opacity-90 border-2 rounded-full mt-5 border-gray-800 fixed top-0 left-1/2 transform -translate-x-1/2 max-w-full z-50`}> {/* Changed to fixed position and centered */}
        <div className="sm:flex hidden items-center space-x-6">
          <AudioWaveform className='pl-2 pr-0' size={40} />
          <button onClick={() => window.location.href = '/'} className="text-2xl font-bold">BizAI</button> {/* Application name as a button to navigate to the home page */}
        </div>
        <div className="sm:hidden relative">
          <button onClick={toggleNavDropdown} className='flex menu-bounce rounded-lg p-1 hover:bg-gray-800'>
            <Menu size={26} />
          </button>
          {isNavDropdownOpen && (
            <div className={`fixed top-24 left-10 w-4/5 h-1/4 bg-opacity-100 flex flex-col justify-center items-center ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-black'} border-4 rounded-xl border-gray-800 menu-entrance animate__animated animate__lightSpeedInLeft`}>
              <a href="/resources" className={`hover:animate-pulse block mt-6 py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-1 rounded-xl text-center w-3/4`}>🔍Resources</a>
              <a href="/pricing" className={`hover:animate-pulse block py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-1 rounded-xl text-center w-3/4`}>🔝 Pricing</a>
              <a href="/docs" className={`hover:animate-pulse block py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-1 rounded-xl text-center w-3/4`}>📚Documentation</a>
              <a href="#github" className={`hover:animate-pulse block py-6 text-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-600'} border m-1 rounded-xl text-center w-3/4`}>⭐GitHub</a>
              <button onClick={toggleNavDropdown} className="my-2 px-6 py-4 bg-red-900 rounded-full text-white text-lg flex items-center hover:animate-pulse">
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
          <CoolButton_2 children={'Dashboard'} height={'2rem'} href={'/'}/>
          <div className="relative">
            <button onClick={toggleDropdown} className='border-2 rounded-full p-1'>
              <UserRound size={24} />
            </button>
            {isDropdownOpen && (
              <div className={`absolute right-0 transform -translate-x-1/2 mt-4 w-32 ${isDarkMode ? 'bg-slate-600 text-white' : 'bg-gray-300 text-black'} rounded-md shadow-lg animate__animated animate__backInDown`}>
                <a href="/login" className={`flex items-center justify-center px-4 py-2 text-sm ${isDarkMode ? 'hover:bg-slate-800':'hover:bg-gray-500'} rounded-md`}>
                  <UserPlus className="mr-2" size={16} /> Sign Up
                </a>
              </div>
            )}
          </div>
          <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>

      <animated.h1 className="w-4/5 md:w-1/2 md:text-5xl text-4xl font-semibold md:mt-48 mt-52 mb-2">
        <animated.span className="text-blue-400">
          Create
        </animated.span>{' '}
          &
        <animated.span className="text-red-800">{' '}
          Deploy
        </animated.span>{' '}
        your own AI model today
      </animated.h1>
      <div className='w-1/2 rounded-full m-6 flex justify-center items-center'>
            <PricingSelector height = '45px' width = '300px' firstFilterColor = '#991b1b' secondFilterColor = '#ffffff' option1Name = 'Individual' option2Name = 'Teams'/>
      </div>
      <div className='w-72 rounded-md m-0 flex justify-center items-center'>
            Be the early bird and get the best discount
      </div>

      <div className='flex flex-col grid-col-1 md:grid-cols-3 justify-center items-center space-y-4 mt-6'>
            <PricingCard backgroundColor = '#404040' title = 'Individual' description = 'For individual developers' price='' description2 = 'Get Started'/>
            <PricingCard backgroundColor = '#404040' title = 'Teams' description = 'For teams and organizations' price='' description2 = 'Get Started'/>
            <PricingCard backgroundColor = '#404040' title = 'Teams' description = 'For teams and organizations' price='' description2 = 'Get Started'/>
      </div>
    </main>
  );
};

export default Pricing;