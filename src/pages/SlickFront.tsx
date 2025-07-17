import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from '../assets/Logo1.svg?react';



export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Logo moves up slowly
  const logoTranslateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Background image moves up faster
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div ref={containerRef} style={{ height: "200vh", background: "#dcdcdc" }}>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Logo on the left */}
        <motion.div
          style={{
            position: "absolute",
            top: "30px",
            left: "10px",
            width: "800px",
            zIndex: 2,
            y: logoTranslateY,
            opacity: 1,
            
          }}
        >
      <Logo style={{ fill: '#1A1A2E',  stroke: "black", strokeWidth:"10px",   filter: 'drop-shadow(4px 4px 6px rgba(0,0,0,0.5))'}} />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "60vh", // lower than the logo's top + height
          left: "40px",
          zIndex: 2,
          y: logoTranslateY,
        }}
      >
        <motion.h1
          style={{
            fontSize: "2.4rem",
            fontWeight: 700,
            fontFamily: "'Segoe UI', sans-serif",
            color: "#ff2a2a",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            margin: 0,
          }}
        >
          AI-powered design, from sketch to screen.
        </motion.h1>
      </motion.div>


        {/* PNG image on the right */}
        <motion.img
          src="/moon2.png"
          alt="Abstract Background"
          style={{
            position: "absolute",
            marginTop: "30%",
            width: "100vw",
            height: "100%",
            objectFit: "initial",
            zIndex: 1,
            y: imageTranslateY,
            scale: imageScale,
            opacity: imageOpacity,


          }}
        />
      </motion.div>
    </motion.div>
  );
}
