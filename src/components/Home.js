import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext'; // import context for theme dark/light mode toggle

const Home = () => {
  const { isDarkMode } = useTheme();

  // Custom typing animation logic hook sequence
  const words = ["Software Engineer", "Front-End Developer", "Flutter Developer", "UI/UX Designer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const activeFullWord = words[currentWordIndex];
    
    const handleTypeLoop = () => {
      if (!isDeleting) {        // Typing text character sequences if not in deleting fase
        // Appending text character sequences 
        setCurrentText(activeFullWord.substring(0, currentText.length + 1));  // Add next character from active word to current text
        // If the current text matches the full word means we've finished typing, set a pause before deleting
        if (currentText === activeFullWord) {
          setTypingSpeed(2000); // Wait timeframe peak look state
          setIsDeleting(true); // Start deleting after pause
        } else {                // Continue typing with normal speed
          setTypingSpeed(100);
        }
      } else {                // Deleting text character sequences if currently in deleting fase
        // Erasing text character sequences
        setCurrentText(activeFullWord.substring(0, currentText.length - 1));  // Remove last character from current text
        if (currentText === "") {     // If the current text is empty, we've finished deleting, move to the next word
          setIsDeleting(false);       // Start typing the next word
          setCurrentWordIndex((prev) => (prev + 1) % words.length);  // Move to the next word in the array, wrapping around to the start
          setTypingSpeed(500);    // Pause before starting to type the next word
        } else {          // Continue deleting with normal speed
          setTypingSpeed(50);  // Faster deleting speed for a snappier effect
        }
      }
    };

    const timer = setTimeout(handleTypeLoop, typingSpeed);    // Set a timeout to call the typing loop function after the current typing speed delay
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);    // Re-run the effect whenever currentText, isDeleting, or currentWordIndex changes

  return (
    <header id="home" className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
      
      {/* Left Intro Text Column */}
      <div className="text-left space-y-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
          isDarkMode 
            ? "bg-slate-900 border-slate-800 text-blue-400" 
            : "bg-blue-50 border-blue-100 text-blue-600"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isDarkMode ? "bg-cyan-400" : "bg-blue-600"}`}></span>
          Available for opportunities
        </div>
        
        <h1 className={`text-5xl sm:text-6xl font-extrabold tracking-tight leading-none ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          Hi! I'm <span className={isDarkMode ? "text-white" : "text-slate-950"}>Hadeel Elmutasim</span>
        </h1>
               
        {/* Animated Text Engine Container Layout */}
          <h2 className={`text-3xl sm:text-4xl font-bold h-12 text-transparent bg-clip-text flex items-center bg-gradient-to-r ${
            isDarkMode ? "from-blue-400 to-cyan-400" : "from-blue-600 to-cyan-600"
          }`}>
            {currentText}
            
            <span className={`ml-2 w-auto h-8 flex items-center transition-all duration-300 transform ${
                isDeleting && currentText !== words[currentWordIndex] 
                  ? (isDarkMode ? "text-cyan-400 scale-110" : "text-cyan-600 scale-110") 
                  : (isDarkMode ? "text-blue-400 scale-100" : "text-blue-600 scale-100")
              }`} >
              <i className={`fa-solid text-xl transition-all duration-300 ${
                  isDeleting && currentText !== words[currentWordIndex] 
                    ? "fa-eraser animate-wobble origin-bottom-left" 
                    : "fa-pen animate-[pulse_0.8s_infinite] origin-center"
                }`} ></i>
            </span>
          </h2>
        
        <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${isDarkMode ? "text-gray-400" : "text-slate-600"}`}>
          Turning complex ideas into <span className={`font-medium ${isDarkMode ? "text-white" : "text-slate-900"}`}>delightful user experiences</span>  through pixel-perfect layouts, modern frameworks, and structured architectures. 
        </p>
        
        <div className="pt-4 flex flex-wrap gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
            View My Projects
          </a>
          <a href="#contact" className={`px-6 py-3 rounded-xl font-medium transition-all border ${
            isDarkMode 
              ? "bg-transparent text-white border-slate-800 hover:bg-slate-900" 
              : "bg-transparent text-slate-700 border-slate-300 hover:bg-slate-100"
          }`}>
            Get In Touch
          </a>
        </div>
      </div>


      {/* Right Modern Code Mockup Editor Panel */}
      <div className="relative flex justify-center lg:justify-end">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[80px] pointer-events-none ${
          isDarkMode ? "bg-cyan-500/10" : "bg-blue-500/5"
        }`} />
        
        {/* Harmonized container borders and inner shadows */}
        <div className={`w-full max-w-[400px] rounded-2xl p-6 shadow-2xl relative font-mono text-xs sm:text-sm transition-all duration-500 ease-out group ${
          isDarkMode 
            ? "bg-[#070420]/80 border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(6,182,212,0.25),inset_0_0_15px_rgba(6,182,212,0.1)]" 
            : "bg-white border-slate-200/80 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
        }`}>
          
          {/* Header Bar Options */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <span className={`text-xs font-sans ${isDarkMode ? "text-gray-500" : "text-slate-400"}`}>hadeel.jsx</span>
            
            {/* Top Floating Badge Component */}
            <span className={`px-2 py-0.5 rounded text-[10px] font-sans shadow-md animate-[float_3s_ease-in-out_infinite] border ${
              isDarkMode 
                ? "bg-slate-900 border-slate-800 text-gray-400" 
                : "bg-slate-100 border-slate-200 text-slate-600"
            }`}>
              ⚛ React Dev
            </span>
          </div>

          {/* Editor Syntax Print Block */}
          <div className={isDarkMode ? "text-slate-300" : "text-slate-700"}>
            <p><span className={isDarkMode ? "text-pink-500" : "text-pink-600"}>const</span> <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>developer</span> = {'{'}</p>
            <p className="pl-4">name: <span className={isDarkMode ? "text-green-400" : "text-emerald-600"}>"Hadeel Elmutasim"</span>,</p>
            <p className="pl-4">role: <span className={isDarkMode ? "text-green-400" : "text-emerald-600"}>"Front-Stack Dev"</span>,</p>
            <p className="pl-4">stack: [</p>
            <p className="pl-8"><span className={isDarkMode ? "text-green-400" : "text-emerald-600"}>"HTML"</span>, <span className={isDarkMode ? "text-green-400" : "text-emerald-600"}>"CSS"</span>,</p>
            <p className="pl-8"><span className={isDarkMode ? "text-green-400" : "text-emerald-600"}>"JavaScript"</span>, <span className={isDarkMode ? "text-green-400" : "text-emerald-600"}>"React"</span>,</p>
            <p className="pl-8"><span className={isDarkMode ? "text-green-400" : "text-emerald-600"}>"Tailwind"</span></p>
            <p className="pl-4">]</p>
            <p>{'}'}</p>
            <p className={`pt-4 ${isDarkMode ? "text-gray-500" : "text-slate-400"}`}>&gt; ready_to_build() <span className={isDarkMode ? "text-green-400" : "text-emerald-600"}>✓</span></p>
          </div>
          
          {/* Bottom Floating Badge Component */}
          <span className={`absolute bottom-[-12px] left-6 px-2 py-0.5 rounded text-[10px] font-sans shadow-lg animate-[float_3.5s_ease-in-out_infinite_0.5s] border ${
            isDarkMode 
              ? "bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-blue-500/5" 
              : "bg-blue-50 border-blue-200 text-blue-600 shadow-slate-200"
          }`}>
            UI / UX
          </span>
        </div>

        {/* Embedded CSS Injection for the custom smooth floating curve */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
        `}</style>
      </div>
    </header>
  );
}

export default Home;