import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RealTimeInsights from './components/RealTimeInsights';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
 const [theme, setTheme] = useState('dark');

 const toggleTheme = () => {
   setTheme(theme === 'dark' ? 'light' : 'dark');
 };

 return (
   <div className={`App ${theme}`}>
     <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
     <Header />
     <Hero />
     <Features />
     <RealTimeInsights />
     <Partners />
     <Footer />
   </div>
 );
}

export default App;
