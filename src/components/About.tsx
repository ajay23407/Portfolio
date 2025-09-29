import { Code, Database, Server, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, Next.js'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Express.js, RESTful APIs, GraphQL'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      description: 'MongoDB, PostgreSQL, Redis, Mongoose'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Full-Stack Integration',
      description: 'MERN Stack, Authentication, Deployment'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Passionate Full-Stack Developer
            </h3>
            <div className="space-y-6 text-purple-200 leading-relaxed">
              <p className="text-lg">
                With over 4 years of experience in web development, I specialize in building 
                robust and scalable applications using the MERN stack. My journey started with 
                a curiosity for how things work on the web, which evolved into a passion for 
                creating seamless digital experiences.
              </p>
              <p className="text-lg">
                I believe in writing clean, maintainable code and staying updated with the 
                latest technologies. My approach combines technical expertise with creative 
                problem-solving to deliver solutions that not only meet requirements but 
                exceed expectations.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me contributing to open-source projects, 
                mentoring junior developers, or exploring new technologies that could enhance 
                my development toolkit.
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-purple-400 mb-4 transform transition-transform duration-300 hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-purple-200 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;