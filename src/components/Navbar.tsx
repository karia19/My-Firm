import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); // close menu on selection
    }
  };

  return (
    <header className="dot-background fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* 🌟 Brand */}
        <nav className="text-2xl font-bold tracking-tight text-primary">
          OivaUIX
        </nav>

        {/* 📱 Burger Icon */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 flex items-center justify-center overflow-visible"
          >
            <span
              className={`absolute w-6 h-0.5 bg-primary transition-transform duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-[6px]" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-primary transition-opacity duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-primary transition-transform duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-[-6px]" : "translate-y-[6px]"
              }`}
            />
          </button>
        </div>

        {/* 🖥️ Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {["home", "about", "services", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, section)}
              className="text-sm font-medium hover:text-primary transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <Button size="sm" className="ml-4">
            Let’s Talk
          </Button>
        </nav>
      </div>

      {/* 🔵 Yellow Circle Reveal Layer */}
      <AnimatePresence>
        {open && (
        <motion.div
          style={{ height: "100vh"}}
          className="fixed inset-0 z-30 pointer-events-none"
          initial={{ opacity: 0, clipPath: "circle(0% at 95% 40px)" }}
          animate={{ opacity: 1, clipPath: "circle(130% at 95% 340px)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 95% 40px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute w-full h-full bg-yellow-400" />
        </motion.div>
        )}
      </AnimatePresence>

      {/* 📱 Mobile Nav Links */}
      {open && (
        <motion.div
            className="fixed inset-0 z-40  flex flex-col items-center px-6 pt-24 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {["home", "about", "services", "contact"].map((section, i) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="text-lg font-medium hover:text-primary"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Button size="sm" className="mt-4">
                Let’s Talk
              </Button>
            </motion.div>
        </motion.div>
      )}
    </header>
  );
}
