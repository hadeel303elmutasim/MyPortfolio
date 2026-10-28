import React, { useState } from 'react';
import { useTheme } from '../ThemeContext'; // import context for theme dark/light mode toggle

const Contact = () => {
  const { isDarkMode } = useTheme();

  // State hooks to handle input fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    // STRICT RE-VALIDATION LOGIC: Verifies that absolutely EVERY field contains text before submitting
    if (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.message.trim() !== ""
    ) {
      setSubmitted(true);
    }
  };

  // Shared class styles for input fields to ensure consistency across light and dark modes
  const inputThemeStyles = isDarkMode
    ? "bg-[#0c0833] border-slate-800/80 text-white placeholder-gray-500 focus:border-cyan-400 focus:bg-[#120d47]"
    : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:bg-white shadow-sm";

  return (
    <section id="contact" className={`py-24 px-6 scroll-mt-20 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode ? "bg-[#030014] text-white" : "bg-[#f8fafc] text-slate-900"
    }`}>
      {/* Background ambient lighting blur matching UI workspace vibe */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 rounded-full blur-[140px] pointer-events-none z-0 transition-all ${
        isDarkMode ? "bg-indigo-500/5" : "bg-blue-500/5"
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Summary Section */}
        <div className="text-center mb-16">
          <span className={`text-[10px] tracking-[0.25em] uppercase font-bold font-sans block mb-3 ${
            isDarkMode ? "text-cyan-400" : "text-blue-600"
          }`}>Say Hello</span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>Get In Touch</h2>
          <p className={`text-sm max-w-xl mx-auto leading-relaxed font-sans ${
            isDarkMode ? "text-gray-400" : "text-slate-500"
          }`}>
            Open to freelance projects, internships, and full-time opportunities.<br /> Let's build something great together.
          </p>
        </div>

        {/* Dual Column Core Container Grid Layout */}
        <div className="grid gap-8 md:grid-cols-5 items-stretch text-left max-w-5xl mx-auto">
          
          {/* Left Column Profile Bio/Details Card (Spans 2 Grid Slots) */}
          <div className={`md:col-span-2 border rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 ${
            isDarkMode
              ? "bg-[#070420]/40 border-slate-900 hover:border-cyan-500/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.03)]"
              : "bg-white border-slate-200 hover:border-blue-500/20 hover:shadow-[0_0_25px_rgba(37,99,235,0.08)]"
          }`}>
            <div>
              {/* Profile Greeting Avatar */}
              <div className="text-3xl mb-4" role="img" aria-label="Developer avatar">
                <img src="/images/myself_icon.png" alt="Developer avatar" className="w-10 h-12 object-cover" />
              </div>
              
              <h3 className={`text-xl font-bold font-sans ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>Hadeel Elmutasim</h3>
              <p className={`text-xs sm:text-sm mt-4 leading-relaxed font-sans ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                Front-end Developer based in UAE. I focus on web development and mobile application design, where I blend functionality with aesthetics to deliver meaningful and user-friendly experiences.
              </p>
            </div>

            {/* Profile Contact Metadata Meta List Layout */}
            <div className={`space-y-4 mt-8 pt-6 border-t font-sans text-xs ${isDarkMode ? "border-slate-900/60" : "border-slate-150"}`}>
              <div className="flex items-start gap-3">
                <i className={`fa-solid fa-location-dot text-sm mt-0.5 w-4 text-center ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}></i>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-bold">Location</span>
                  <span className={`font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>UAE</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className={`fa-solid fa-envelope text-sm mt-0.5 w-4 text-center ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}></i>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-bold">Email</span>
                  <a href="mailto:hadeelelmutasim303@gmail.com" className={`font-medium transition-colors ${isDarkMode ? "text-slate-300 hover:text-cyan-400" : "text-slate-700 hover:text-blue-600"}`}>
                    hadeelelmutasim303@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className={`fa-solid fa-code text-sm mt-0.5 w-4 text-center ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}></i>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-wider font-bold">Focus</span>
                  <span className={`font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>Front-End Development / Software Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Message Form Panel (Spans 3 Grid Slots) */}
          <div className={`md:col-span-3 border rounded-2xl p-8 transition-all duration-500 ${
            isDarkMode
              ? "bg-[#070420]/40 border-slate-900 hover:border-cyan-500/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.15),inset_0_0_15px_rgba(6,182,212,0.03)]"
              : "bg-white border-slate-200 hover:border-blue-500/20 hover:shadow-[0_0_25px_rgba(37,99,235,0.08)]"
          }`}>
            <h3 className={`text-lg font-bold font-sans mb-6 ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>Send a Message</h3>
            
            {submitted ? (
              <div className={`border p-6 rounded-xl text-sm font-medium font-sans flex flex-col items-center gap-3 text-center my-12 animate-[fadeIn_0.4s_ease-out] ${
                isDarkMode ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" : "bg-blue-50 border-blue-100 text-blue-600"
              }`}>
                <i className="fa-solid fa-circle-check text-2xl"></i>
                <div>
                  <h4 className={`font-bold mb-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>Thank you! Your request has been sent successfully.</h4>
                  <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-slate-500"}`}>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-sans text-sm">
                
                {/* Horizontal Splitting Layout Row for Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" required name="firstName"
                    className={`w-full border rounded-xl px-4 py-3 font-medium outline-none transition duration-300 ${inputThemeStyles}`} 
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input 
                    type="text" required name="lastName"
                    className={`w-full border rounded-xl px-4 py-3 font-medium outline-none transition duration-300 ${inputThemeStyles}`} 
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Horizontal Splitting Layout Row for Connection Anchors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="email" required name="email"
                    className={`w-full border rounded-xl px-4 py-3 font-medium outline-none transition duration-300 ${inputThemeStyles}`} 
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input 
                    type="number" required name="phone"
                    className={`w-full border rounded-xl px-4 py-3 font-medium outline-none transition duration-300 ${inputThemeStyles}`} 
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Multiline Message Text Block */}
                <div>
                  <textarea 
                    rows="4" required name="message"
                    className={`w-full border rounded-xl px-4 py-3 font-medium outline-none transition duration-300 resize-none ${inputThemeStyles}`} 
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Submission Action Button Link Trigger */}
                <button type="submit" 
                  className={`w-full text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 transform active:scale-[0.98] mt-2 cursor-pointer
                    ${isDarkMode ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-600/20" 
                                 : "bg-slate-900 hover:bg-slate-800 shadow-md" }`}>Send Message</button>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;