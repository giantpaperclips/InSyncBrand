export function Logo({ className = "w-32 h-auto" }: { className?: string }) {
  return (
    <img 
      src="/images/logo-main.png" 
      alt="InSync" 
      className={`object-contain transition-all ${className}`} 
    />
  );
}
