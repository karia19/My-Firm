import { useRef } from "react";
import { motion } from "framer-motion";
import WavyTopReveal from './components/WavyTopReveal';
import SunriseScene from './pages/SunStyle';
import WaveDivider from "./components/WaveDivider";
import Navbar from "./components/Navbar";
import TechModelSection from "./components/TechModelSection";
import WorkFlow from "./components/Workflow";
import Footer from "./components/Footer";
import AppGallery from "./components/works";


function App() {
  const scrollRef = useRef<HTMLElement>(null);

  return (
    <>
      <Navbar />
      <section id="home">
        <SunriseScene />
      <section id="design">
        <WaveDivider />
        <WavyTopReveal ref={scrollRef} scrollRef={scrollRef} />
          {/* 🔽 Scroll Targets */}
      </section>
      </section>
  
      <motion.section
        id="workflow"
        initial={{ x:-100}}
        whileInView={{ opacity: 1, y: 0, x:0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <WorkFlow />
      </motion.section>

      <motion.section
          id="tech"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TechModelSection />
      </motion.section>

      <motion.section 
        id="gallery"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <AppGallery />
      </motion.section>
      
      <Footer />
      
    </>
  );
}

export default App;
