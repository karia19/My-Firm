// components/WaveDivider.tsx
export default function WaveDivider() {
    return (
      <div style={{ top: "-220px"}} className="relative w-full h-[380px] overflow-hidden z-20">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full rotate-180"
        >
          <path
            fill="#140435" // Match your WavyTopReveal background
            d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,117.3C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,0L0,0Z"
          />
        </svg>
      </div>
    );
  }
  