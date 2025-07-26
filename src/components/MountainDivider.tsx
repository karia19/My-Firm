// MountainDivider.tsx
export default function MountainDivider() {
    return (
      <div className="relative w-full h-[800px] overflow-hidden z-20">
        <img
          src="/moon4.png" // 👉 Replace with your actual file path
          alt="Mountain Divider"
          className="w-full h-full object-cover rotate-180" // 👈 Flips the PNG vertically
        />
      </div>
    );
  }
  