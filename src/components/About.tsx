"use client";
import { useEffect, useState } from "react";
import { Code2, Paintbrush, Brain, Gamepad2 } from "lucide-react";
import Lottie from "lottie-react";
import creativeAnim from "../animations/creative.json"; // you can replace this with any Lottie file

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const traits = [
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: "Frontend Developer",
      desc: "Building smooth, responsive, and modern UIs using React & Tailwind CSS.",
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-pink-400" />,
      title: "Sketch Artist",
      desc: "I love sketching anime and realistic portraits — where imagination meets detail.",
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI & Data Science Student",
      desc: "Exploring the intersection of data, intelligence, and creativity.",
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-green-400" />,
      title: "Gamer by Passion",
      desc: " games inspire my sense of design and strategy.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-24"
    >
      {/* Background animation */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <Lottie animationData={creativeAnim} loop autoplay />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Left side: animation / image */}
        <div
          className={`w-full lg:w-1/2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <Lottie animationData={creativeAnim} loop autoplay />
        </div>

        {/* Right side: text */}
        <div
          className={`w-full lg:w-1/2 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Creativity Meets Code
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            I’m <span className="text-pink-400 font-semibold">Ajay Yadav</span> — a
            developer who believes creativity and technology go hand in hand. Whether
            it’s building elegant web apps with React or sketching my favorite anime
            characters, I love transforming ideas into reality.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {traits.map((item, i) => (
              <div
                key={i}
                className="bg-gray-800/40 p-6 rounded-2xl border border-purple-500/10 backdrop-blur-sm 
                hover:shadow-lg hover:shadow-purple-500/30 transition-transform transform hover:-translate-y-2"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-purple-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
