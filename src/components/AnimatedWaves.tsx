import { motion } from "framer-motion";

export default function AnimatedWave() {
  return (
    <svg
      viewBox="0 0 900 450"
      className="absolute bottom-0 left-0 w-[200%] h-auto z-0"
      preserveAspectRatio="none"
    >
      <rect width="100" height="200" fill="#002233" />
      <motion.g
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 8,
          repeat: 1,
          ease: "linear"
        }}
      >
        <path
          d="M0 481L21.5 475.2C43 469.3 86 457.7 128.8 447.2C171.7 436.7 214.3 427.3 257.2 420.2C300 413 343 408 385.8 402.3C428.7 396.7 471.3 390.3 514.2 408.2C557 426 600 468 642.8 486.2C685.7 504.3 728.3 498.7 771.2 479.5C814 460.3 857 427.7 878.5 411.3L900 395L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="#0066FF"
        />
      </motion.g>
    </svg>
  );
}
