import React, { useState } from 'react';
import { useTheme } from '../ThemeContext'; // import context for theme dark/light mode toggle
import '../App.css'; // Import the CSS file for animations

const Projects = () => {
  const { isDarkMode } = useTheme();
  const categories = ["All Projects", "Web Apps", "Mobile Apps", "Portfolio"];
  const [activeFilter, setActiveFilter] = useState("All Projects");

  // Dataset featuring live deployment and GitHub source link properties
  const projectsData = [
    { 
      id: 1, 
      title: "NOVA Cinema", 
      desc: "A responsive and fast, visually engaging landing page with optimized media , dynamic pricing and offers.", 
      tags: ["HTML", "CSS", "UX Design"],
      category: "Web Apps",
      image: "/images/project_1.png",
      liveLink: "https://hadeel303elmutasim.github.io/project1_front/",
      githubLink: "https://github.com/hadeel303elmutasim/project1_front.git"
    },
    { 
      id: 2, 
      title: "Whisper Heart Bookstore", 
      desc: "A modern online bookstore landing page with a curated selection of titles, user reviews, and a seamless shopping experience.", 
      tags: ["HTML5", "CSS","UX Design"],
      category: "Web Apps",
      image: "/images/project_2.png",
      liveLink: "https://hadeel303elmutasim.github.io/whisper-heart-store/",
      githubLink: "https://github.com/hadeel303elmutasim/whisper-heart-store.git"
    },
    { 
      id: 3, 
      title: "Noodles Restaurant", 
      desc: "A minimalist, performance-optimized landing page that enhances visual appeal restaurant website with reservation system.", 
      tags: ["HTML", "Tailwind CSS","UX Design"],
      category: "Web Apps",
      image: "/images/project_3.png",
      liveLink: "https://hadeel303elmutasim.github.io/noodles_tailwind/",
      githubLink: "https://github.com/hadeel303elmutasim/noodles_tailwind.git"
    },
    { 
      id: 4, 
      title: "Manga Online Store", 
      desc: "A manga e-commerce platform with a wide range of titles and a secure checkout process.", 
      tags: ["HTML", "Tailwind CSS", "JavaScript","UX Design"],
      category: "Web Apps",
      image: "/images/project_4.png",
      liveLink: "https://hadeel303elmutasim.github.io/manga-store-template/pages/register.html",
      githubLink: "https://github.com/hadeel303elmutasim/manga-store-template.git"
    },
    { 
      id: 5, 
      title: "Future University Student Mobile App", 
      desc: "Created a cross-platform mobile app allowing students to view results, schedules, and notifications instantly.", 
      tags: ["Flutter","Dart","UX Design"],
      category: "Mobile Apps",
      image: "/images/project_5.png",
      liveLink: "#",
      githubLink: "#"
    },
    { 
      id: 6, 
      title: " Nexis Tech E-commerce Website", 
      desc: "A modern e-commerce platform for selling tech products with a focus on user experience and performance.", 
      tags: ["HTML", "Tailwind CSS", "React","UX Design", "Node.js" , "MongoDB"],
      category: "Web Apps",
      image: "/images/project_7.png",
      liveLink: "https://nexistech.vercel.app/",
      githubLink: "https://github.com/mohamed-ayman123/ecommerce-project.git"
    },
    { 
      id: 7, 
      title: "My Portfolio Website", 
      desc: "A modern, responsive portfolio website showcasing my projects and skills.", 
      tags: ["HTML", "Tailwind CSS", "React","UX Design"],
      category: "Portfolio",
      image: "/images/project_6.png",
      liveLink: "https://my-portfolio-psi-blue-8ljqrjotlb.vercel.app/",
      githubLink: "https://github.com/hadeel303elmutasim/MyPortfolio.git"
    }
  ];

  const filteredProjects = activeFilter === "All Projects" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-24 px-6 scroll-mt-20 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode ? "bg-[#030014] text-white" : "bg-white text-slate-900"
    }`}>
      <div className="max-w-6xl mx-auto text-center ">
        
        {/* Section Headings */}
        <span className={`text-[10px] tracking-[0.25em] uppercase font-bold font-sans block mb-3 ${
          isDarkMode ? "text-cyan-400" : "text-blue-600"
        }`}>My Work</span>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
          isDarkMode ? "text-white" : "text-slate-900"
        }`}>
          Featured Projects
        </h2>
        <p className={`text-sm max-w-xl mx-auto mb-10 leading-relaxed font-sans ${
          isDarkMode ? "text-gray-400" : "text-slate-500"
        }`}>
          Real-world applications built with modern technologies and best practices.
        </p>

        {/* Sub-Navbar Filter Control Segment */}
        <div className="flex justify-center items-center gap-3 mb-16 font-sans">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-transparent text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : (isDarkMode 
                      ? "bg-transparent border-slate-800 text-gray-400 hover:text-white hover:border-slate-600"
                      : "bg-transparent border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400")
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Grid Panel Layout */}
        <div 
          key={activeFilter} 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left animate-[fadeIn_0.5s_ease-out_forwards]"
        >
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group/card flex flex-col rounded-2xl overflow-hidden transition-all duration-500 opacity-0 animate-[projectCardEntrance_0.5s_ease-out_forwards] ${
                isDarkMode 
                  ? "bg-[#070420]/50 border-slate-900 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.2),inset_0_0_15px_rgba(6,182,212,0.05)]" 
                  : "bg-slate-50 border-slate-200 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(37,99,235,0.12)]"
              }`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Card Media Preview Container */}
              <div className={`relative overflow-hidden aspect-video group ${
                isDarkMode ? "bg-slate-950/40" : "bg-slate-200"
              }`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                />
                
                {/* Dark Mask Shroud Overlay Layer */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
                
                {/* Absolute Centered Action Interaction Link Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300 ease-out z-10">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold font-sans rounded-full shadow-xl transition-colors duration-200 whitespace-nowrap ${
                      isDarkMode 
                        ? "bg-white text-gray-950 hover:bg-cyan-400" 
                        : "bg-slate-900 text-white hover:bg-blue-600"
                    }`}
                  >
                    View Project <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>
              </div>

              {/* Card Meta Content Details Typography Block */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4">
                  <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                    isDarkMode 
                      ? "text-slate-100 group-hover/card:text-cyan-400" 
                      : "text-slate-800 group-hover/card:text-blue-600"
                  }`}>
                    {project.title}
                  </h4>
                  {/* Dedicated Outbound Source Code Button Anchor Link */}
                  <a 
                    href={project.githubLink}
                    target="_blank" 
                    rel="noreferrer"
                    className={`transition-colors duration-200 pt-1 ${
                      isDarkMode ? "text-gray-400 hover:text-white" : "text-slate-400 hover:text-slate-900"
                    }`}
                    title="View GitHub Repository"
                  >
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                </div>
                
                <p className={`text-xs sm:text-sm mt-2.5 leading-relaxed flex-grow font-sans ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {project.desc}
                </p>

                {/* Subtag Layout Footer Array Loop */}
                <div className="flex flex-wrap gap-2 mt-5 font-mono text-[10px]">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`px-2 py-0.5 rounded border ${
                        isDarkMode 
                          ? "bg-blue-500/5 border-blue-500/20 text-blue-400" 
                          : "bg-blue-50 border-blue-100 text-blue-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
