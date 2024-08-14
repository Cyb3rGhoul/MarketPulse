import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => (
 <button onClick={toggleTheme} className="theme-toggle">
   {theme === 'dark' ? '☀️' : '🌙'}
 </button>
);

export default ThemeToggle;