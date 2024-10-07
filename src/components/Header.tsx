import React from 'react';

const Header = () => {
  return (
    <header className="p-5 flex justify-between items-center bg-black bg-opacity-90">
      <div className="flex items-center space-x-2">
        <img src="/path/to/logo.png" alt="PearAI Logo" className="h-8 w-8" />
        <h1 className="text-2xl font-bold text-green-400">PearAI</h1>
      </div>
      <nav className="space-x-6">
        <a href="#resources" className="text-gray-300 hover:text-white">Resources</a>
        <a href="#pricing" className="text-gray-300 hover:text-white">Pricing / Download</a>
        <a href="#docs" className="text-gray-300 hover:text-white">Documentation</a>
        <a href="#github" className="text-gray-300 hover:text-white">GitHub</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full">Dashboard</button>
        <img src="/path/to/user-avatar.png" alt="User Avatar" className="h-10 w-10 rounded-full" />
        <button className="bg-gray-800 text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m8.485-7.485l-1.414 1.414m-12.728 0l-1.414-1.414m16.97-4.242l-1.414-1.414M6.343 6.343L4.929 4.929M21 12h-2M5 12H3m16.485 4.485l-1.414 1.414m-12.728 0l-1.414-1.414" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;