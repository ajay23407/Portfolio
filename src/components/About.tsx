import { Code, Database, Server, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Frontend Development',
      description: 'React, Tailwind CSS',
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'Backend Development',
      description: 'Node.js, Express.js, RESTful APIs',
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Database Management',
      description: 'MongoDB, Mongoose',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Full-Stack Integration',
      description: 'MERN Stack, Authentication, Deployment',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen bg-gray-900"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent -z-10"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Passionate Full-Stack Developer
            </h3>
            <div className="space-y-6 text-purple-200 text-lg leading-relaxed">
              <p>
                With over 1 years of experience in web development, I specialize in building
                robust and scalable applications using the MERN stack. My journey started with
                a curiosity for how things work on the web, which evolved into a passion for
                creating seamless digital experiences.
              </p>
              <p>
                When I'm not coding, I contribute to open-source projects, mentor junior
                developers, and explore new technologies to enhance my development toolkit.
              </p>
            </div>
          </div>

          {/* Right Side: Highlights */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20
                           hover:shadow-lg hover:shadow-purple-500/30 transition-transform duration-300
                           transform hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-purple-400 mb-4 transform transition-transform duration-300 hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-purple-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
