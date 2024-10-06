import React from 'react';

const Header = () => {
  return (
    <header className="p-5 flex justify-between items-center bg-black bg-opacity-50">
      <h1 className="text-3xl font-bold text-green-400">BizAI</h1>
      <nav className="space-x-4">
        <a href="#resources" className="text-gray-300 hover:text-white">Resources</a>
        <a href="#pricing" className="text-gray-300 hover:text-white">Pricing / Download</a>
        <a href="#docs" className="text-gray-300 hover:text-white">Documentation</a>
        <a href="#github" className="text-gray-300 hover:text-white">GitHub</a>
      </nav>
      <button className="bg-gray-800 text-white p-2 rounded-full">Dashboard</button>
    </header>
  );
};

export default Header;
