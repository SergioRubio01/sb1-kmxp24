import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import CoolButton_2 from '../components/CoolButton_2';
import styled from 'styled-components';
import { useDarkMode } from '../pages/LandingPage';
import { VALID_ROLES } from '../constants/Roles';

const LoginPage = () => {
  const  {isDarkMode}  = useDarkMode();
  const [role, setRole] = useState('');

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    if (VALID_ROLES.includes(selectedRole)) {
      setRole(selectedRole);
    }
  };

  return (
    <StyledPageWrapper isDarkMode={isDarkMode}>
      <motion.div
        className="max-w-md w-full space-y-10 bg-white p-10 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-black">Create a new account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
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
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="organization" className="sr-only">Organization</label>
              <input
                id="organization"
                name="organization"
                type="text"
                autoComplete="organization"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Organization"
              />
            </div>
            <div>
              <label htmlFor="role" className="sr-only">Role</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              >
                <option value="">Select your role</option>
                {VALID_ROLES.map((validRole) => (
                  <option key={validRole} value={validRole}>{validRole.replace('_', ' ')}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <CoolButton_2 height='3rem' href='#' paddingX={'6rem'}>Sign Up</CoolButton_2>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaGoogle className="w-5 h-5" />
                <span className="ml-2">Google</span>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <FaGithub className="w-5 h-5" />
                <span className="ml-2">GitHub</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </StyledPageWrapper>
  );
};

// Styled-component to handle the page wrapper styles
const StyledPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  background-color: ${(props) => (props.isDarkMode ? 'black' : 'red')};
  background-image: ${(props) => (props.isDarkMode ? 'url(fondo_3.svg)' : 'url(fondo_5.svg)')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default LoginPage;