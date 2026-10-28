import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; // import context for theme dark/light mode toggle

const Header = () => {
  const location = useLocation();
  const { isDarkMode, setIsDarkMode } = useTheme();
   // State hook to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  const getLinkStyle = (hash) => {
    const isActive = location.hash === hash || (location.hash === '' && hash === '#home');
    if (isDarkMode) {
      return isActive 
        ? "text-white font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500 transition-all" 
        : "text-gray-400 hover:text-white font-medium transition-all";
    } else {
      return isActive 
        ? "text-blue-600 font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 transition-all" 
        : "text-gray-600 hover:text-slate-900 font-medium transition-all";
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
    <nav className={`px-8 py-4 flex justify-between items-center transition-colors duration-300 relative ${
        isDarkMode 
          ? "bg-[#030014]/80 border-b border-slate-900/80 backdrop-blur-md" 
          : "bg-white/80 border-b border-slate-200/80 backdrop-blur-md"
      }`}>
      {/* Brand Logo Group */}
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full animate-pulse ${isDarkMode ? "bg-cyan-400" : "bg-blue-600"}`}></span>
        <Link to="#home" className={`text-lg font-bold tracking-wide ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          Portfolio
        </Link>
      </div>
     
      {/* Center Nav Anchors */}
      <div id="nav-links" className="hidden md:flex space-x-8 text-sm">
        <a href="#home" className={getLinkStyle('#home')}>Home</a>
        <a href="#skills" className={getLinkStyle('#skills')}>Skills</a>
        <a href="#projects" className={getLinkStyle('#projects')}>Projects</a>
        <a href="#contact" className={getLinkStyle('#contact')}>Contact</a>
      </div>

      {/* Right Socials, Theme Switcher & Call-to-Action */}
      <div className="flex items-center gap-6">
        {/* Theme Switcher Toggle */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
            isDarkMode 
              ? "bg-slate-900 text-cyan-400 border-slate-700 hover:bg-slate-800" 
              : "bg-gray-100 text-blue-600 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {isDarkMode ? (
            <>
              <i className="fa-solid fa-moon"></i>
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-sun"></i>
              <span>Light Mode</span>
            </>
          )}
        </button>

        <div className={`hidden sm:flex gap-4 text-base ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}>
          <a href="https://www.linkedin.com/in/hadeel-elmutasim/" target="_blank" rel="noreferrer" className={isDarkMode ? "hover:text-white" : "hover:text-slate-900"}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/hadola.elmutasim" target="_blank" rel="noreferrer" className={isDarkMode ? "hover:text-white" : "hover:text-slate-900"}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/hadeel_2m.303/" target="_blank" rel="noreferrer" className={isDarkMode ? "hover:text-white" : "hover:text-slate-900"}>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/hadeel303elmutasim" target="_blank" rel="noreferrer" className={isDarkMode ? "hover:text-white" : "hover:text-slate-900"}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-xs font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">
          Let's Connect
        </a>

        {/* Hamburger Icon Button (Visible on Small Screens only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-lg p-1.5 rounded-lg border transition-all ${
              isDarkMode 
                ? "text-white border-slate-800 hover:bg-slate-950" 
                : "text-slate-900 border-gray-200 hover:bg-gray-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
      </div>
    </nav>

    {/* Dropdown Mobile Menu Expansion Stack Panel */}
      <div className={`md:hidden w-full px-8 py-6 flex flex-col space-y-4 text-sm font-semibold border-b transition-all duration-300 ease-in-out ${
        isOpen 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 -translate-y-4 pointer-events-none absolute"
      } ${
        isDarkMode 
          ? "bg-[#030014]/95 border-slate-900 text-white" 
          : "bg-white/95 border-slate-200 text-slate-900"
      }`}>
        <a href="#home" onClick={() => setIsOpen(false)} className={getLinkStyle('#home')}>Home</a>
        <a href="#skills" onClick={() => setIsOpen(false)} className={getLinkStyle('#skills')}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className={getLinkStyle('#projects')}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className={getLinkStyle('#getconnected')}>Contact</a>
        
        {/* Mobile Extra Social Block Anchor */}
        <div className={`flex gap-4 pt-4 border-t ${isDarkMode ? "border-slate-800/60 text-gray-400" : "border-slate-100 text-slate-500"}`}>
          <a href="https://www.linkedin.com/in/hadeel-elmutasim/" target="_blank" rel="noreferrer" className="hover:text-blue-500"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.facebook.com/hadola.elmutasim" target="_blank" rel="noreferrer" className="hover:text-blue-500"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/hadeel_2m.303/" target="_blank" rel="noreferrer" className="hover:text-pink-500"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/hadeel303elmutasim" target="_blank" rel="noreferrer" className="hover:text-slate-400"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </header>

  );
}
export default Header;