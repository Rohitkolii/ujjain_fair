export default function WaveDivider({ className = "text-white" }) {
  return (
    <div className={`w-full ${className}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
        <path
          d="M0,0 C150,50 350,50 600,30 C850,10 1050,10 1200,30 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
