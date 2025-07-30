import { useRef } from "react";
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
      <SunriseScene />
      <WaveDivider />
      <WavyTopReveal scrollRef={scrollRef} />
      <WorkFlow />
      <TechModelSection />
      <AppGallery />
      <Footer />
      
    </>
  );
}

export default App;
