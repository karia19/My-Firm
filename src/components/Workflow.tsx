import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

const steps = [
  { title: "Discovery & Consultation" },
  { title: "Wireframe & Mockups" },
  { title: "Development & Testing" },
  { title: "Launch & Support" },
]

export default function WorkFlow() {
  const scrollRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <section style={{ marginTop: "-30vh"}} ref={scrollRef} className="w-full font-sans bg-white py-32 px-8">
      {/* 📌 Section Heading */}
      <div className="max-w-3xl mx-auto mb-28 text-center">
        <h1 className="text-5xl font-extrabold text-slate-800  tracking-tight mb-4">
          Our Project Journey
        </h1>
        <p className="text-lg text-gray-600">
          Every project we build follows a clear, intentional process — designed to uncover insights,
          shape experiences, and launch with impact.
        </p>
      </div>

      {/* 🌈 Timeline */}
      <div className="flex w-full items-start gap-1 pt-[0vh] md:flex-row ">
        {/* 🌀 Sticky Animated Timeline Label */}
        <motion.h2
          style={{ x: translateX }}
          className="hidden md:block text-6xl font-bold uppercase text-purple-700 sticky top-2/3 -rotate-90 origin-left"
        >
          Timeline
        </motion.h2>

        {/* 🔠 Scroll Highlighted Titles */}
        <div className="w-full max-w-md md:max-w-5xl mx-auto">
        <ul style={{paddingBottom: "100px"}} className="flex flex-col gap-1">
          {steps.map((step, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, {
              margin: "-40% 0px -40% 0px",
              once: false,
            })

            return (
              <motion.li
                key={i}
                ref={ref}
                className={`text-6xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold uppercase transition duration-800 ${
                  inView
                    ? "opacity-100 scale-[1.05] text-purple-600"
                    : "opacity-30 scale-100"
                }`}
              >
                {step.title}
              </motion.li>
            )
          })}
        </ul>
        </div>
      </div>
    </section>
  )
}
