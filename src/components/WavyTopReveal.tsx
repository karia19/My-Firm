import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AiImageShowcase from "./AiImageShowcas"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Optional utility for conditional classes
//import { loadSvgPaths } from "@/utils/loadSvgPaths";
//import type { SvgPath } from "@/utils/loadSvgPaths";
import type { RefObject } from "react";
import { useSpring } from "framer-motion";


interface Props {
    scrollRef: RefObject<HTMLElement>;
}


export default function WavyTopReveal({ scrollRef }: Props) {
    //const [paths, setPaths] = useState<SvgPath[]>([]);
    const internalRef = useRef(null); // ✨ New internal ref for scroll tracking
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    console.log(scrollRef)

    const { scrollYProgress } = useScroll({
      target: internalRef,
      offset: ["start 108%", "end start"],
    });
        
    const waveHeight = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);
    const waveOpacity = useTransform(scrollYProgress, [0, 0], [0, 1]);
  
    const smoothWaveHeight = useSpring(waveHeight, {
      stiffness: 100,
      damping: 20,
    });

    useEffect(() => {
      //loadSvgPaths("/oivauix2.svg").then(setPaths);
    }, []);
  
    const handleContactClick = () => {
      console.log("User clicked the contact button")
      window.location.href =
        "mailto:oivauix@gmail.com?subject=Let’s%20Talk&body=Hi%20there,%20I’d%20love%20to%20learn%20more%20about%20your%20design%20services."
    }

    return (
      <motion.div 
        ref={internalRef} 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        //transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full min-h-screen overflow-hidden text-white top-[-280px]">
      
     
        
        <motion.div
          style={{ height: smoothWaveHeight, opacity: waveOpacity }}
          className="absolute top-0 left-0 w-full overflow-hidden z-10"
        >
          <svg viewBox="0 0 1440 420" preserveAspectRatio="none" className="w-full h-full">
            <path
              fill="#140435"
              d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,117.3C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,0L0,0Z"
            />
          </svg>
        </motion.div>

      {/* 💬 Foreground Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-3 text-center font-display">
        <h1 className="text-6xl sm:text-5xl max-w-4xl font-extrabold mb-7 leading-tight text-white">
            We Design, Develop,
            and Manage Your Digital Presence
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-gray-300 mb-10">
            With precision and creativity — from start to finish.
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative h-20 px-3 sm:px-16 font-display text-[2rem] sm:text-[2.5rem] leading-none rounded-[22px]  transition-all duration-300 shadow-xl cursor-pointer circle-reveal-wrapper"
                style={{ backgroundColor: "#FBB884"}}
                onClick={handleContactClick}
               >
                {/* Expanding Circle Overlay */}
                <div
                    className={cn(
                    "circle-reveal-overlay",
                    hovered && "hovered"
                    )}
                />

                {/* Text Layer */}
                <div
                    className={cn(
                    "flex gap-2 uppercase items-center justify-center h-full w-full circle-reveal-text",
                    hovered ? "text-black" : "text-white"
                    )}
                >
                    <span className="italic font-extralight tracking-tight">start</span>
                    <span className="font-medium tracking-wide">creating</span>
                    <span className="italic font-semibold tracking-wider">now</span>
                </div>
            </button>
            
            </DialogTrigger>
            <DialogContent className="max-w-md bg-background border border-white/10 shadow-xl rounded-xl p-6 text-left text-white">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Let’s Build Something</h3>
            <p className="mb-4 text-sm text-gray-300">
                Reach out and we’ll get back to you within 24 hours.
            </p>
            <ul className="space-y-2 text-sm">
                <li><strong>Email:</strong> hello@yourcompany.com</li>
                <li><strong>Phone:</strong> +358 40 123 4567</li>
                <li><strong>Location:</strong> Helsinki, Finland</li>
            </ul>
            </DialogContent>
        </Dialog>

        </div>
      <div style={{ marginTop: "-7%"}}>
            <AiImageShowcase />
      </div>

    </motion.div>

  );
}
