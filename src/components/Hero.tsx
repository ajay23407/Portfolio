import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ---------- TYPEWRITER ANIMATION ----------
  const text = "Full-Stack MERN Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index === text.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
        }
      } else {
        setDisplayText(text.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 80 : 120); // typing speed

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-black relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile */}
          <motion.div
            className="flex-shrink-0 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0 mt-16 md:mt-0"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="w-40 h-40 md:w-64 md:h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin-slow"></div>
              <motion.div
                className="w-full h-full flex items-center justify-center rounded-full 
                  bg-gradient-to-r from-purple-600 to-pink-600 
                  text-white text-4xl font-bold border-4 border-white/20 
                  relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                AY
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left mt-6 md:mt-20 order-2 md:order-1">
            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
             
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Ajay Yadav
              </span>
            </motion.h1>

            {/* TYPEWRITER ROLE */}
            <h2 className="text-2xl md:text-3xl text-purple-200 mb-8 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-purple-300 mb-12 max-w-2xl leading-relaxed"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              Passionate about creating scalable web applications using MongoDB,
              Express.js, React, and Node.js. I build modern, responsive
              solutions that deliver exceptional user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center mb-16"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-medium hover:shadow-lg hover:shadow-purple-400/25"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center md:justify-start space-x-6 mb-16"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
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
                href="mailto:Ay9771476@gmail.com"
                className="text-purple-300 hover:text-purple-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Mail size={32} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-300 hover:text-purple-100 transition-colors duration-300"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
