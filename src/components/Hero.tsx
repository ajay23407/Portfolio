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
    <section
  id="hero"
  className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-violet-950  relative overflow-hidden"
>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`flex flex-col md:flex-row items-center md:items-center justify-between gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Photo on Top (mobile) / Right (desktop) */}
          <div className="flex-shrink-0 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0 mt-16 md:mt-0">
  <div className="w-40 h-40 md:w-64 md:h-64 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin-slow"></div>
    <img
      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt="Ajay Yadav"
      className="w-full h-full rounded-full object-cover border-4 border-white/20 relative z-10 animate-float"
    />
  </div>
</div>

          {/* Text Content Below (mobile) / Left (desktop) */}
          <div className="flex-1 text-center md:text-left mt-6 md:mt-20 order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient">
                Ajay Yadav
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-purple-200 mb-8 font-light animate-slide-up delay-200">
              Full-Stack MERN Developer
            </h2>
            <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-2xl leading-relaxed animate-slide-up delay-300">
              Passionate about creating scalable web applications using MongoDB,
              Express.js, React, and Node.js. I build modern, responsive
              solutions that deliver exceptional user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center mb-16">
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

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 mb-16 animate-slide-up delay-600">
              <a
                href="https://github.com/ajay23407"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-yadav-999b691ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="Ay9771476@gmail.com"
                className="text-purple-300 hover:text-purple-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
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
