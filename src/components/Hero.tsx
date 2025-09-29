import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Photo */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin-slow"></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Alex Johnson"
                className="w-full h-full rounded-full object-cover border-4 border-white/20 relative z-10 animate-float"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient">Alex Johnson</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-200 mb-8 font-light animate-slide-up delay-200">
            Full-Stack MERN Developer
          </h2>
          <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300">
            Passionate about creating scalable web applications using MongoDB, Express.js, React, and Node.js. 
            I build modern, responsive solutions that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-medium animate-slide-up delay-400 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-medium animate-slide-up delay-500 hover:shadow-lg hover:shadow-purple-400/25"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16 animate-slide-up delay-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-purple-300 hover:text-purple-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-300 hover:text-purple-100 transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;