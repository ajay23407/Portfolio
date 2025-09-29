import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          setTimeout(() => {
            setAnimatedBars(new Array(18).fill(true));
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 85 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Backend',
      color: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      borderColor: 'border-indigo-500/30',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'JWT Auth', level: 88 },
        { name: 'Socket.io', level: 75 }
      ]
    },
    {
      title: 'Database & Tools',
      color: 'bg-gradient-to-r from-pink-500 to-purple-500',
      borderColor: 'border-pink-500/30',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'Testing', level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and the technologies 
            I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 border ${category.borderColor} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 ${category.color} rounded-full mr-3 animate-pulse`}></div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group" style={{ animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-purple-200">{skill.name}</span>
                      <span className="text-sm text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 ${category.color} rounded-full transition-all duration-1500 ease-out group-hover:opacity-80 relative overflow-hidden`}
                        style={{ 
                          width: animatedBars[categoryIndex * 6 + skillIndex] ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and best practices to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;