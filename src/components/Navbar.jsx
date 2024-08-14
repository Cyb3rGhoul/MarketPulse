// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">MarketPulse</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">Home</a>
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">Team</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">About</a>
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">Instagram</a>
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded bg-gray-200 dark:bg-gray-800 focus:outline-none"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
