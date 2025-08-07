import { useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import { motion } from "framer-motion";
//import CookieConsent from "react-cookie-consent";
import CookieConsent from "./components/CookieConsent";
import WavyTopReveal from './components/WavyTopReveal';
import SunriseScene from './pages/SunStyle';
import WaveDivider from "./components/WaveDivider";
import Navbar from "./components/Navbar";
import TechModelSection from "./components/TechModelSection";
import WorkFlow from "./components/Workflow";
import Footer from "./components/Footer";
import AppGallery from "./components/works";

const GA_MEASUREMENT_ID = "G-XXXXXXX"; // Replace with your real ID

function App() {
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem("oivaCookieConsent");
    if (consent === "true") {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  return (
    <>
      <Navbar />
      <section id="home">
        <SunriseScene />
        <section id="design">
          <WaveDivider />
          <WavyTopReveal ref={scrollRef} scrollRef={scrollRef} />
        </section>
      </section>

      <motion.section id="workflow" initial={{ x: -100 }} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: false }}>
        <WorkFlow />
      </motion.section>

      <motion.section id="tech" initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
        <TechModelSection />
      </motion.section>

      <motion.section id="gallery" initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}>
        <AppGallery />
      </motion.section>
      <CookieConsent />
      <Footer />

    </>
  );
}

export default App;
