"use client";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack MERN Developer Intern",
    company:
      "International Institute Of SDGS & Public Policy Research",
    period: "May 2025 – Aug 2025",
    description: [
      "Developed responsive web applications using React and Tailwind CSS.",
      "Implemented reusable UI components to improve development speed.",
      "Worked with REST APIs for dynamic data rendering.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 flex items-center gap-3">
          <Briefcase className="w-9 h-9 text-purple-400" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Experience
          </span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-purple-600/30 hover:shadow-purple-500/60 transition"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent animate-gradient">
                {exp.role}
              </h3>

              <p className="text-purple-300 font-medium mt-1">
                {exp.company} | {exp.period}
              </p>

              <ul className="list-disc list-inside mt-5 space-y-2 text-gray-300 leading-relaxed">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="transition-all duration-300 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_10px_rgba(156,163,175,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(156,163,175,1)]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
