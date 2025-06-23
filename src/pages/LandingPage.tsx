import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './LandingPage.css';
import { ChevronDown } from "lucide-react";

const sections = [
  {
    id: "one",
    content: (
      <div className="relative h-screen flex items-center justify-center z-10">
        <div className="text-center">
          <img
            src="/2.png"
            alt="Company Logo"
            className="mx-auto w-24 h-24 mb-6 animate-pulse"
          />
          <h1 className="text-white text-5xl font-bold mb-4">
            Full-Stack Innovation. Tailored to You.
          </h1>
          <p className="text-white text-xl max-w-2xl mx-auto">
            Building modern apps with React, Python/Node.js, and seamless cloud deployment on AWS and more.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "two",
    content: (
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 px-12 py-24 text-white items-center z-10">
        <div className="md:pr-12">
          <h2 className="text-4xl font-bold mb-6">Custom Full-Stack Apps</h2>
          <p className="text-lg text-white/80 mb-4">
            From pixel-perfect frontends with <strong>React</strong> to secure, scalable backends using <strong>Node.js</strong> or <strong>Python</strong>. We build tailor-made platforms optimized for speed and reliability.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>End-to-end design & development</li>
            <li>Cloud-native deployments (AWS, Vercel, GCP)</li>
            <li>Responsive, accessible UIs</li>
          </ul>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img
            src="/tech-diagram.png"
            alt="App Architecture"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    ),
  },
  {
    id: "three",
    content: (
      <div className="h-screen flex justify-center items-center text-white text-5xl z-10">
        Section Three
      </div>
    ),
  },
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationMode, setAnimationMode] = useState("default");

  const toggleAnimation = () => {
    console.log("Button pressed: changing animation and advancing section");
  
    // Cycle through animation modes
    setAnimationMode((prev) => {
      if (prev === "default") return "slide";
      if (prev === "slide") return "fade";
      return "default";
    });
  
    // Move to the next section
    setIndex((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;
      setIsAnimating(true);

      setIndex((prev) => {
        if (e.deltaY > 0 && prev < sections.length - 1) return prev + 1;
        if (e.deltaY < 0 && prev > 0) return prev - 1;
        return prev;
      });

      setTimeout(() => setIsAnimating(false), 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAnimating]);

  const getVariants = () => {
    switch (animationMode) {
      case "slide":
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
        };
      case "fade":
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.05 },
        };
      default:
        return {
          initial: { opacity: 0, y: 60 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -60 },
        };
    }
  };

  return (
    <>
     
     <ChevronDown
        onClick={toggleAnimation}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-10 h-10 text-white cursor-pointer animate-bounce hover:scale-110 transition"
    />

    <div className="h-screen w-screen overflow-hidden relative landing-page">

      {/* Transparent Toggle Button */}
     

      <AnimatePresence mode="wait">
        <motion.div
          key={sections[index].id + animationMode}
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
          initial={getVariants().initial}
          animate={getVariants().animate}
          exit={getVariants().exit}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {sections[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
    </>
  );
}
