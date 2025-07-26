import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function SunriseScene() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 🔆 Animate sun rising
  const sunY = useTransform(scrollYProgress, [0, 1], [300, -100]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.9], [0.9, 0]);

  // 🌗 Animate logo shadow from soft to strong
  const logoShadow = useTransform(scrollYProgress, [0, 1], [
    "0px 2px 4px rgba(0,0,0,0.2)",
    "0px 12px 24px rgba(0,0,0,0.6)",
  ]);
  const bgShadow = useTransform(scrollYProgress, [0, 1], [
    "0px 2px 4px rgba(0,0,0,0.2)",
    "0px 12px 24px rgba(0,0,0,0.6)",
  ]);
  const logoLeft = useTransform(scrollYProgress, [0, 0.3], ["50vh", "30vw"]);
  const logoTop = useTransform(scrollYProgress, [0, 0.3], ["30vh", "12vh"]);
  const logoScale = useTransform(scrollYProgress, [0, 0.4], [1.5, 1.0]);
  

  // 🗨️ Marketing text fade in
  const taglineOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const taglineY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  return (
    
    <motion.div ref={containerRef} style={{ height: "170vh", background: "white" }}>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* 🏔️ Mountains PNG with shadow box */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)",
            zIndex: 12,
            opacity: overlayOpacity,
          }}
        >
          <motion.img
            src="/vuoret.png"
            alt="Landscape Background"
            style={{  
              width: "100%",
              marginTop: "8rem",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>

        {/* 🌞 Rising Sun PNG behind background */}
        <motion.img
          src="/aurinko.png"
          alt="Sun"
          style={{
            top: "10vh",
            position: "absolute",
            transform: "translateX(-50%)",
            left: "0%",
            y: sunY,
            opacity: sunOpacity,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: -1,
          }}
        />

        {/* 🖋️ OivaUIX Logo top-left with animated shadow */}
        <motion.div
          style={{
            position: "absolute",
            //top: "2vh",
            //left: "2vw",
            left: logoLeft,
            top: logoTop,
            //scale: logoScale,

            zIndex: 15,
            color: "#1A1A2E",
            textShadow: logoShadow,
            fontFamily: "'Segoe UI', sans-serif",
            lineHeight: 1,
            transform: "translateX(-50%)", // keeps it centered initially
          }}
        >
          <motion.h1
            style={{
              fontSize: "13rem",
              fontWeight: 500,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Oiva
          </motion.h1>
          <motion.h2
            style={{
              fontSize: "10rem",
              marginLeft: "4rem",
              fontWeight: 500,
              marginTop: "-3.8rem",
              letterSpacing: "0.1em",
              opacity: 0.9,
            }}
          >
            UIX
          </motion.h2>
        </motion.div>

        {/* 💬 Marketing tagline fade-in */}
        <motion.div
          style={{
            position: "absolute",
            top: "50vh",
            right: 20,
            zIndex: 14,
            opacity: taglineOpacity,
            y: taglineY,
            color: "#333",
            fontSize: "1.6rem",
            fontWeight: 400,
            maxWidth: "450px",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          <p>
            Beautiful websites. Intuitive design. <br />
            From concept to launch—with AI by our side.
          </p>
        </motion.div>
      </motion.div>

    </motion.div>

  );
}
