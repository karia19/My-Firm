import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const mockups = ['/screens/app1.jpg', '/screens/app2.jpg', '/screens/app3.jpg'];

export default function AppGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Devices shift away slightly in different directions
  const x1 = useTransform(scrollYProgress, [0.2, 0.6], [0, -80]);
  const y1 = useTransform(scrollYProgress, [0.2, 0.6], [0, -40]);

  const x2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [0, -80]);

  const x3 = useTransform(scrollYProgress, [0.2, 0.6], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0.2, 0.6], [0, 60]);

  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.3, 0.6], [0.95, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-b from-black to-slate-900 flex items-center justify-center overflow-hidden"
    >
      {/* Text Centered */}
      <motion.div
        style={{ opacity: textOpacity, scale: textScale }}
        className="absolute text-center z-10 max-w-xl"
      >
        <h2 className="text-white text-4xl font-bold mb-3">What We Design</h2>
        <p className="text-slate-300 text-lg">
          Smooth, expressive UI that responds to your scroll and your story.
        </p>
      </motion.div>

      {/* Floating Phones */}
      <div className="relative z-0 flex items-center justify-center gap-8">
        <motion.div style={{ x: x1, y: y1 }} className="w-[160px] h-[320px] rounded-2xl border-[6px] border-slate-700 overflow-hidden shadow-xl">
          <img src={mockups[0]} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div style={{ x: x2, y: y2 }} className="w-[160px] h-[320px] rounded-2xl border-[6px] border-slate-700 overflow-hidden shadow-xl">
          <img src={mockups[1]} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div style={{ x: x3, y: y3 }} className="w-[160px] h-[320px] rounded-2xl border-[6px] border-slate-700 overflow-hidden shadow-xl">
          <img src={mockups[2]} className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
