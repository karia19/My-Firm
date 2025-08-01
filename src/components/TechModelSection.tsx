import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function TechModelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yParagraph = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const sectionY = useTransform(scrollYProgress, [0, 1], ["-200px", "0px"]);
  

  return (
    <motion.section
      ref={ref}
      style={{ marginTop:"-200px"}}


      className="relative w-full bg-black text-white pt-32 pb-24 px-6 sm:px-12 overflow-hidden min-h-screen flex items-center"
    >
      {/* 🌊 Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-12">
        <svg
          className="w-full h-16 sm:h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,144C672,139,768,117,864,106.7C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Main Heading */}
        <motion.div
          style={{ y: yHeading }}
          className="space-y-6 relative px-1 w-full"
          data-section="tech"
        >
          {/* ✨ SVG Stroke Border */}
          <div className="relative w-full px-1 py-6 sm:px-6 sm:py-9">
          <motion.svg
            viewBox="0 0 10 80"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full z-[-1] pointer-events-none"
          >
            <motion.rect
              x="2"
              y="2"
              width="100"
              height="96"
              rx="12"
              ry="12"
              fill="none"
              stroke="#A78BFA"
              strokeWidth="1.5"
              strokeDasharray="400"
              strokeDashoffset={isInView ? 0 : 400}
              initial={{ strokeDashoffset: 400 }}
              animate={{ strokeDashoffset: isInView ? 0 : 400 }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
            />
          </motion.svg>

          <h2 className="text-6xl sm:text-6xl font-extrabold uppercase sm:p-10 leading-tight tracking-tight">
            <span className="block">From Design to Production</span>
            <span className="block text-blue-400">We Keep Your Fees Low</span>
          </h2>
          </div>
        </motion.div>


        {/* Right: Supporting Text */}
        <motion.div
          style={{ y: yParagraph }}
          className="space-y-6 mt-0 sm:mt-[5rem]"
        >
          <p className="text-gray-300 text-lg">
            Our goal is to <strong>minimize your monthly costs</strong> while
            maximizing performance. We use the latest tools — React, Svelte,
            Node.js, Python — to build fast frontends and flexible backends
            that run anywhere.
          </p>

          <ul className="flex flex-wrap gap-4 text-sm text-white/80">
            <li className="bg-white/10 px-4 py-2 rounded-full">React</li>
            <li className="bg-white/10 px-4 py-2 rounded-full">Node.js</li>
            <li className="bg-white/10 px-4 py-2 rounded-full">AWS</li>
            <li className="bg-white/10 px-4 py-2 rounded-full">Custom Servers</li>
            <li className="bg-white/10 px-4 py-2 rounded-full">Minimal Hosting</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
