import { useState } from 'react';
import { useDarkMode } from './LandingPage';
import { useSpring, animated } from 'react-spring'; // Import animated from react-spring
import DarkModeSwitch from '../components/DarkModeSwitch';
import CoolButton_2 from '../components/CoolButton_2';
import { UserRound, AudioWaveform, UserPlus, Menu, X } from 'lucide-react';
import 'animate.css';
import PricingSelector from '../components/PricingSelector';
import PricingCard from '../components/PricingCard';
import Header from '../components/Header';

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
      <Header />

      <animated.h1 className="w-4/5 md:w-1/2 md:text-5xl text-4xl font-semibold md:mt-48 mt-24 mb-2">
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