import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      gradient: "from-purple-500 to-pink-500",
      glow: "shadow-[0_0_30px_rgba(192,132,252,0.7)]",
      skills: ["React", "JavaScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
    },
    {
      title: "Backend",
      gradient: "from-indigo-500 to-purple-500",
      glow: "shadow-[0_0_30px_rgba(129,140,248,0.7)]",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    },
    {
      title: "Database & Tools",
      gradient: "from-pink-500 to-purple-500",
      glow: "shadow-[0_0_30px_rgba(236,72,153,0.7)]",
      skills: ["MongoDB", "Git/GitHub"],
    },
  ];

  return (
    <section id="skills" className="relative py-28 bg-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/20 -z-10" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse -z-10" />

      {/* Header */}
      <div
        className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
          Skills & Expertise
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />
        <p className="text-lg text-purple-200 max-w-2xl mx-auto">
          My technical stack with a modern, futuristic presentation ✨
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 lg:px-12">
        {skillCategories.map((category, cIdx) => (
          <div
            key={cIdx}
            className={`relative p-8 rounded-2xl bg-gray-900/40 border border-white/10 backdrop-blur-lg 
              hover:scale-[1.03] transition-transform duration-500 ${category.glow}
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${cIdx * 200}ms` }}
          >
            {/* Category Title */}
            <h3
              className={`text-2xl font-bold mb-8 text-white text-center bg-clip-text text-transparent bg-gradient-to-r ${category.gradient}`}
            >
              {category.title}
            </h3>

            {/* Floating Skills */}
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className={`relative px-5 py-3 rounded-xl text-white font-semibold 
                    bg-gradient-to-r ${category.gradient} cursor-pointer
                    hover:scale-110 transition-transform duration-300
                    before:absolute before:inset-0 before:rounded-xl before:blur-md before:bg-gradient-to-r ${category.gradient} before:opacity-40`}
                  style={{ transitionDelay: `${(cIdx * 6 + sIdx) * 100}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div
          className={`inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl px-10 py-8 text-white transform transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-2xl font-bold mb-2">Always Learning 🚀</h3>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Exploring new frameworks, tools, and best practices to stay ahead in modern web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
