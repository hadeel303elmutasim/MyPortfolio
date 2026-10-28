import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext'; // import context for theme dark/light mode toggle

const Skills = () => {
  const { isDarkMode } = useTheme();

  // Categorized data sets mirroring both layout slides
  const slides = [
    [
      { name: "HTML5", percentage: 95, color: "#FF4500" },
      { name: "CSS3", percentage: 90, color: "#1E90FF" },
      { name: "JavaScript", percentage: 85, color: "#FFD700" },
      { name: "React.js", percentage: 85, color: "#00FFFF" }
    ],
    [
      { name: "Tailwind CSS", percentage: 88, color: "#06B6D4" },
      { name: "Bootstrap", percentage: 50, color: "#7952B3" },
      { name: "DART", percentage: 60, color: "#FF4500" },
      { name: "PYTHON ", percentage: 30, color: "#1E90FF" }
    ]
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedPercentages, setAnimatedPercentages] = useState([]);

  // Handles filling percentages smoothly when a slide changes
  useEffect(() => {
    setAnimatedPercentages(slides[currentSlide].map(() => 0));

    const timer = setTimeout(() => {
      setAnimatedPercentages(slides[currentSlide].map(skill => skill.percentage));
    }, 100);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Clean step increments that do not loop beyond array parameters
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  // Evaluation states to manage conditional disabled attributes
  const isLeftDisabled = currentSlide === 0;
  const isRightDisabled = currentSlide === slides.length - 1;

  return (
    <section id="skills" className={`w-full py-24 px-6 relative overflow-hidden scroll-mt-24 transition-colors duration-300 ${
      isDarkMode ? "bg-[#030014] text-white" : "bg-slate-50 text-slate-900"
    }`}>
      {/* Background Ambient Blur Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all ${
        isDarkMode ? "bg-purple-900/10" : "bg-purple-500/5"
      }`} />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-4">
        
        <p className={`text-[10px] tracking-[0.3em] font-mono uppercase font-semibold ${
          isDarkMode ? "text-blue-400" : "text-blue-600"
        }`}>
          Technical Expertise
        </p>
        <h3 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
          isDarkMode ? "text-white" : "text-slate-900"
        }`}>
          Front-End Skills
        </h3>
        <div className={`w-16 h-[2px] mx-auto transition-all ${
          isDarkMode 
            ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
            : "bg-gradient-to-r from-blue-600 to-cyan-500"
        }`} />
        <p className={`max-w-xl mx-auto text-sm font-normal leading-relaxed pt-2 ${
          isDarkMode ? "text-gray-400" : "text-slate-500"
        }`}>
          The front-end technologies I use to build modern, responsive web experiences.
        </p>

        {/* Carousel Framework Layout Container */}
        <div className="relative flex items-center justify-center pt-16 max-w-5xl mx-auto px-4 sm:px-12">
          
          {/* Left Arrow Button Controls */}
          <button 
            onClick={prevSlide}
            disabled={isLeftDisabled}
            className={`absolute left-0 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all text-sm
              ${isLeftDisabled 
                ? (isDarkMode 
                    ? 'opacity-25 border-slate-900 bg-slate-950/40 pointer-events-none text-gray-600' 
                    : 'opacity-25 border-gray-200 bg-gray-100 pointer-events-none text-gray-400') 
                : (isDarkMode 
                    ? 'border-slate-800 bg-[#070420]/80 text-gray-400 hover:text-white hover:border-slate-700 cursor-pointer' 
                    : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 cursor-pointer shadow-sm')
              }`}
            aria-label="Previous Slide"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          {/* Central Active Viewport Grid Frame */}
          <div className="w-full min-h-[180px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center max-w-4xl mx-auto">
              {slides[currentSlide].map((skill, idx) => {
                const currentPercent = animatedPercentages[idx] || 0;
                const strokeDashoffset = circumference - (currentPercent / 100) * circumference;

                return (
                  <div key={skill.name} className="flex flex-col items-center justify-center space-y-4 group transition-all duration-300">
                    
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle path adaptive coloring */}
                        <circle cx="50" cy="50" r={radius} className={`stroke-4 fill-none ${
                          isDarkMode ? "stroke-slate-900" : "stroke-slate-200"
                        }`} />
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          fill="none"
                          stroke={skill.color}
                          strokeWidth="6"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          className="transition-all duration-[1000ms] ease-out drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-xl font-bold tracking-tight font-sans ${
                          isDarkMode ? "text-white" : "text-slate-800"
                        }`}>
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>

                    <h4 className={`text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                      isDarkMode 
                        ? "text-gray-400 group-hover:text-white" 
                        : "text-slate-500 group-hover:text-slate-900"
                    }`}>
                      {skill.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button Controls */}
          <button 
            onClick={nextSlide}
            disabled={isRightDisabled}  
            className={`absolute right-0 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all text-sm  
              ${isRightDisabled 
                ? (isDarkMode 
                    ? 'opacity-25 border-slate-900 bg-slate-950/40 pointer-events-none text-gray-600' 
                    : 'opacity-25 border-gray-200 bg-gray-100 pointer-events-none text-gray-400') 
                : (isDarkMode 
                    ? 'border-slate-800 bg-[#070420]/80 text-gray-400 hover:text-white hover:border-slate-700 cursor-pointer' 
                    : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 cursor-pointer shadow-sm')
              }`}
            aria-label="Next Slide"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Lower Active Indicator Dots Layout */}
        <div className="flex justify-center items-center gap-2 pt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-5 bg-blue-500' 
                  : (isDarkMode ? 'w-2 bg-slate-800' : 'w-2 bg-slate-300')
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;