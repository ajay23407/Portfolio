import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import backgroundAnim from "./animations/background.json";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1);
    }

    // Detect mobile safely after component mounts
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    // Hide animation after 4 seconds
    const timer = setTimeout(() => {
      console.log("Animation finished, showing portfolio");
      setShowAnimation(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (showAnimation) {
    if (isMobile) {
      // 👇 Mobile view preloader
      return (
        <div className="relative flex items-center justify-center w-screen h-screen bg-black">
          <Lottie
            lottieRef={lottieRef}
            animationData={backgroundAnim}
            loop={false}
            autoplay
            className="
              absolute
              w-[140vh] h-[140vw]
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              rotate-90
              scale-[1.15]
            "
          />
        </div>
      );
    } else {
      // 👇 Desktop view preloader
      return (
        <div className="flex items-center justify-center min-h-screen w-full bg-black">
          <Lottie
            lottieRef={lottieRef}
            animationData={backgroundAnim}
            loop={false}
            autoplay
            className="w-full h-full"
          />
        </div>
      );
    }
  }

  // Portfolio renders here
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
