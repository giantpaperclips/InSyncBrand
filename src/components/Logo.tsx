export function Logo({ className = "w-32 h-auto" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 320 110" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tree / Circuit forming the 'I' */}
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Right main trunk */}
        <path d="M 70 100 L 70 40" />
        {/* Left main trunk */}
        <path d="M 55 100 L 55 60" />
        
        {/* Branches from right trunk */}
        <path d="M 70 75 L 100 45 L 100 25" />
        <path d="M 100 45 L 120 65" />
        <path d="M 70 55 L 45 30 L 45 15" />
        <path d="M 45 30 L 25 10" />
        
        {/* Branches from left trunk */}
        <path d="M 55 80 L 30 55 L 15 55" />
        <path d="M 30 55 L 30 35" />
        <path d="M 55 65 L 80 40" />
      </g>

      {/* Nodes (Circles) */}
      <g fill="var(--bg-color, white)" stroke="currentColor" strokeWidth="3">
        {/* Hollow circles */}
        <circle cx="100" cy="25" r="8" />
        <circle cx="120" cy="65" r="6" />
        <circle cx="45" cy="15" r="6" />
        <circle cx="25" cy="10" r="5" />
        <circle cx="15" cy="55" r="7" />
        <circle cx="30" cy="35" r="5" />
        <circle cx="80" cy="40" r="5" />
        
        {/* Solid circles */}
        <circle cx="100" cy="45" r="5" fill="currentColor" />
        <circle cx="45" cy="30" r="4" fill="currentColor" />
        <circle cx="30" cy="55" r="4" fill="currentColor" />
        <circle cx="70" cy="40" r="5" fill="currentColor" />
        <circle cx="55" cy="60" r="4" fill="currentColor" />
        
        {/* Bullseye circle (inner solid circles) */}
        <circle cx="100" cy="25" r="3" fill="currentColor" stroke="none" />
        <circle cx="15" cy="55" r="3" fill="currentColor" stroke="none" />
      </g>

      {/* Text "nSync" */}
      <text 
        x="130" 
        y="100" 
        fontFamily="sans-serif" 
        fontSize="72" 
        fontWeight="300" 
        fill="currentColor"
        letterSpacing="-2"
      >
        nSync
      </text>
    </svg>
  );
}
