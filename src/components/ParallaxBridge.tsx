// ParallaxBridge.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxBridge() {
  const bridgeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bridgeRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-0%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 0]);


  return (
    <motion.div ref={bridgeRef} style={{ marginTop: "0px"}} className="relative h-[20vh] w-full overflow-hidden">
      {/* 🌄 Gradient Background */}
      <motion.div
        style={{
          y: backgroundY,
          background: "linear-gradient(to bottom, #fbbf24, #1e3a8a)",
        }}
        className="absolute inset-0 z-0"
      />

      {/* 🌫️ Fog/Mist Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[url('/fog.png')] bg-cover bg-center z-10 pointer-events-none"
      />

      {/* Spacer for scroll */}
      <div className="relative z-20 h-full"></div>
    </motion.div>
  );
}
