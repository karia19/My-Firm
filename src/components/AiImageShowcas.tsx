import { motion } from "framer-motion";
import "../styles/aiGrid.css";

const images: string[] = [
  "images/AiImages/2.jpg",
  "images/AiImages/1.jpg",
  "images/AiImages/3.jpg",
  "images/AiImages/4.jpg",
  "images/AiImages/5.jpg",
  "images/AiImages/8.jpg",
  "images/AiImages/6.jpg",
  "images/AiImages/7.jpg",
  "images/AiImages/9.jpg",
  "images/AiImages/10.jpg",
  "images/AiImages/11.jpg"
];

const imageVariants = {
  hidden: (i) => ({
    x: i % 2 === 0 ? -100 : 100, // even = left, odd = right
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

export default function AIStyleSection() {
  return (
    <section className="relative z-0 w-full bg-background/80 backdrop-blur-md py-32 px-6 font-display overflow-hidden">
      {/* 🧠 Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16 px-4"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
          Branded Visuals, Powered by AI and Human Creativity
        </h2>
        
        <p className="text-left text-muted-foreground text-base sm:text-lg leading-relaxed">
            Not enough design materials? No problem. We use AI to craft logos, hero images, and illustrations tailored just for you — even if you’re starting from scratch.  
            Prefer a professional designer’s touch? Our creative team is here to bring your ideas to life with pixel-perfect precision.  
            Stunning visuals, fast delivery, and a bold look that feels uniquely yours.
        </p>
      </motion.div>

      {/* 🖼️ Masonry Grid */}
      <div className="ai-masonry-grid">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className={`ai-grid-item item-${(i % 5) + 1}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          >
            <img src={src} alt={`AI Design ${i + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
