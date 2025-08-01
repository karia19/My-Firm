import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const mockups = ['/images/Screens/app3.png', '/images/Screens/app4.png', 'images/Screens/summit.png'];

export default function AppGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Phones movement
  const x1 = useTransform(scrollYProgress, [0.2, 0.6], [70, -80]);
  const y1 = useTransform(scrollYProgress, [0.2, 0.6], [-20, -40]);

  const x2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 60]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [0, -80]);

  const x3 = useTransform(scrollYProgress, [0.2, 0.6], [-70, 80]);
  const y3 = useTransform(scrollYProgress, [0.2, 0.6], [0, 60]);

  const textOpacity = useTransform(scrollYProgress, [0.3, 0.9], [0.8, 1]);
  const textScale = useTransform(scrollYProgress, [0.3, 0.6], [0.95, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.8], [0, -190]);
  // MacBook and phone preview movement
  const laptopY = useTransform(scrollYProgress, [0.4, 0.8], [100, -150]);
  const laptopX = useTransform(scrollYProgress, [0.4, 0.8], [100, -50]);

  const phoneY = useTransform(scrollYProgress, [0.4, 0.8], [30, -90]);
  const phoneScale = useTransform(scrollYProgress, [0.4, 0.8], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-b from-black to-slate-800 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Header Text */}
      <motion.div
        style={{ opacity: textOpacity, scale: textScale, y: textY }}
        className="absolute text-center z-10 max-w-xl"
      >
        <h2 className="text-white text-4xl font-bold mb-3">What We Design</h2>
        <p className="text-slate-300 text-lg">
          Smooth, expressive UI that responds to your scroll and your story.
        </p>
      </motion.div>

      {/* Floating Phones */}
      <div className="relative z-0 flex items-center justify-center gap-8 mt-32">
        <motion.div style={{ x: x1, y: y1 }} className="w-[160px] h-[320px] rounded-2xl border-[6px] border-slate-700 overflow-hidden shadow-xl">
          <img src={mockups[0]} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div style={{ x: x2, y: y2 }} className="w-[160px] h-[320px] rounded-2xl border-[6px] border-slate-700 overflow-hidden shadow-xl">
          <img src={mockups[1]} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div style={{ x: x3, y: y3 }} className="w-[160px] h-[320px] rounded-2xl border-[6px] border-slate-700 overflow-hidden shadow-xl">
          <img src={mockups[2]} className="w-full h-full object-fill" />
        </motion.div>
      </div>

      {/* Scroll-powered Device Preview */}
      <div className="relative flex justify-center items-center gap-8 w-full h-[700px] mt-24">
        {/* MacBook */}
        <motion.div
          style={{ y: laptopY, x: laptopX }}
          className="absolute left-20 w-[800px] h-[500px] z-10 bg-gray-900 border-[12px] border-gray-700 rounded-xl shadow-2xl overflow-hidden"
        >
          <img
            src="images/Screens/sole.png"
            className="w-full h-full"
            title="MacBook Preview"
          />
        </motion.div>

        {/* Phone */}
        <motion.div
            style={{ y: phoneY, scale: phoneScale }}
            className="absolute right-20 top-20 w-[280px] h-[580px] z-20 bg-black rounded-[36px] shadow-xl overflow-hidden border-[8px] border-slate-700 group"
            >
            {/* Optional overlay image that fades on hover */}
        

            {/* Replace iframe with actual video */}
            <video
                src="/videos/shop.mov"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-fill"
            />
        </motion.div>
      </div>
    </section>
  );
}
