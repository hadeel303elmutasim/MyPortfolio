import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeContext'; // for the theme dark/light mode toggle context

import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function MainPortfolioPage() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col justify-between scroll-smooth relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? "bg-[#030014] text-white" 
        : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* Background ambient glow element - changes opacity based on theme */}
      <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-all ${
        isDarkMode ? "bg-blue-900/20" : "bg-blue-400/10"
      }`} />
      
      <Header />

      <main className="flex-grow z-10">
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;