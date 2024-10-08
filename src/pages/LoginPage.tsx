import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import CoolButton_2 from '../components/CoolButton_2';
import { useDarkMode } from '../pages/LandingPage';
import Header from '../components/Header';

const LoginPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Get dark mode context and toggle function
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [keepSignedIn, setKeepSignedIn] = useState(false); // State to handle 'keep me signed in'

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
    <motion.div
      className={`min-h-screen w-full flex flex-col items-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0, y: 100 }} // Same initial animation state as the landing page
      animate={{ opacity: 1, y: 0 }} // Same final animation state as the landing page
      transition={{ duration: 0.5, ease: 'easeOut' }} // Same transition configuration as the landing page
    >
      {/* Header component for navigation with consistent placement */}
      <Header className="fixed top-0 w-full z-50" />
      
      {/* Main form container with animation */}
      <motion.div
        className={`border-2 border-gray-600 max-w-md w-80 sm:w-1/2 space-y-10 ${isDarkMode ? 'bg-white' : 'bg-gray-300'} p-10 rounded-3xl shadow-2xl m-40`}
        initial={{ opacity: 0, y: 50 }} // Initial animation state: invisible and shifted down
        animate={{ opacity: 1, y: 0 }} // Final animation state: visible and at original position
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div>
          {/* Page title */}
          <h2 className={`mt-2 text-center text-3xl font-extrabold ${isDarkMode ? 'text-black' : 'text-black'}`}>Welcome back!</h2>
        </div>

        {/* Social login options */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {/* Google login button with animations on hover and tap */}
          <motion.div
            whileHover={{ scale: 1.05 }} // Slight zoom-in effect when hovered
            whileTap={{ scale: 0.95 }} // Slight shrink effect when tapped
          >
            <a
              href="#"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FaGoogle className="w-5 h-5" /> {/* Google icon */}
              <span className="ml-2">Google</span> {/* Button label */}
            </a>
          </motion.div>

          {/* GitHub login button with animations on hover and tap */}
          <motion.div
            whileHover={{ scale: 1.05 }} // Slight zoom-in effect when hovered
            whileTap={{ scale: 0.95 }} // Slight shrink effect when tapped
          >
            <a
              href="#"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FaGithub className="w-5 h-5" /> {/* GitHub icon */}
              <span className="ml-2">GitHub</span> {/* Button label */}
            </a>
          </motion.div>
        </div>

        {/* Sign in with email section */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDarkMode ? 'border-gray-300' : 'border-white'}`}></div> {/* Divider line */}
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${isDarkMode ? 'bg-white text-gray-500' : 'bg-gray-300'} `}>Or, sign in with your email</span> {/* Text over the divider line */}
            </div>
          </div>
        </div>

        {/* Sign in form */}
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" /> {/* Hidden input for form submission */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              {/* Email input field */}
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              {/* Password input field */}
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {/* Toggle switches for password visibility and 'keep me signed in' */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="show-password"
                name="show-password"
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="show-password" className="ml-2 block text-sm text-gray-900">
                Show password
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="keep-signed-in"
                name="keep-signed-in"
                type="checkbox"
                checked={keepSignedIn}
                onChange={() => setKeepSignedIn(!keepSignedIn)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="keep-signed-in" className="ml-2 block text-sm text-gray-900">
                Keep me signed in
              </label>
            </div>
          </div>

          <div>
            {/* Sign In button using CoolButton_2 component */}
            <CoolButton_2 height='3rem' href='#' paddingX={'4rem'}>Sign In</CoolButton_2>
          </div>
        </form>

        {/* Sign up link for users without an account */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account yet? <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up!</a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
