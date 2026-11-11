import React, { useState } from 'react';
import { useTheme } from '../ThemeContext'; //  import context for theme dark/light mode toggle

const Footer = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className={`pt-16 pb-8 px-6 font-sans relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? "bg-[#030014] text-white border-t border-slate-900" 
        : "bg-slate-50 text-slate-900 border-t border-slate-200"
    }`}>
      <div className="max-w-6xl mx-auto">        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 text-left pb-12">
          
          {/* Column 1: Brand Info & Social Hooks */}
          <div className="md:col-span-2 space-y-4 flex flex-col justify-start">
            <div className={`flex items-center gap-2 font-bold text-base tracking-tight ${
              isDarkMode ? "text-slate-100" : "text-slate-900"
            }`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${isDarkMode ? "bg-blue-500" : "bg-blue-600"}`}></span>
              <img src={isDarkMode ? "/images/logoNO.png" : "/images/logoNO-light.png"} 
                  alt="Logo" className="w-16 h-16 inline-block mr-2" />
            </div>
            
            <div className={`text-xs leading-relaxed font-medium ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}>
              <p>Full-Stack Developer building beautiful,</p>
              <p>responsive web experiences with modern front</p>  
              <p>end technologies.</p>
            </div>

            {/* Circular Social Media Link Container Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { url: "https://www.linkedin.com/in/hadeel-elmutasim/", icon: "fa-linkedin-in" },
                { url: "https://www.facebook.com/hadola.elmutasim", icon: "fa-facebook-f" },
                { url: "https://www.instagram.com/hadeel_2m.303/", icon: "fa-instagram" },
                { url: "https://github.com/hadeel303elmutasim", icon: "fa-github" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isDarkMode 
                      ? "bg-slate-900 border-slate-800/80 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40" 
                      : "bg-white border-slate-200 text-slate-500 hover:text-blue-600 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <i className={`fa-brands ${social.icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Structural Navigation Site links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</h5>
            <ul className={`space-y-2 text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}>
              <li><a href="#home" className={isDarkMode ? "hover:text-white" : "hover:text-slate-900"}>Home</a></li>
              <li><a href="#skills" className={isDarkMode ? "hover:text-white" : "hover:text-slate-900"}>Skills</a></li>
              <li><a href="#projects" className={isDarkMode ? "hover:text-white" : "hover:text-slate-900"}>Projects</a></li>
              <li><a href="#contact" className={isDarkMode ? "hover:text-white" : "hover:text-slate-900"}>Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Work / Focus Capabilities Meta Lists */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">What I Do</h5>
            <ul className={`space-y-2 text-xs font-medium ${
              isDarkMode ? "text-gray-400" : "text-slate-600"
            }`}>
              <li className={isDarkMode ? "hover:text-slate-300" : "hover:text-slate-900"}>Front-End Development</li>
              <li className={isDarkMode ? "hover:text-slate-300" : "hover:text-slate-900"}>Responsive Web Design</li>
              <li className={isDarkMode ? "hover:text-slate-300" : "hover:text-slate-900"}>React & Tailwind Projects</li>
              <li className={isDarkMode ? "hover:text-slate-300" : "hover:text-slate-900"}>UI / UX Implementation</li>
              <li className={isDarkMode ? "hover:text-slate-300" : "hover:text-slate-900"}>Component Architecture</li>
            </ul>
          </div>

        </div>

        {/* Bottom Segment: Copyright Disclaimer */}
        <div className={`text-center pt-4 border-t ${isDarkMode ? "border-slate-900/40" : "border-slate-200"}`}>
          <p className={`text-[10px] tracking-wide ${isDarkMode ? "text-gray-600" : "text-slate-400"}`}>
            © 2026 Hadeel Elmutasim - All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;