export function Logo({ className = "w-32 h-auto" }: { className?: string }) {
  return (
    <img 
      src="/images/logo-main.png" 
      alt="InSync" 
      className={`object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white/95 dark:p-1 rounded-xl transition-all ${className}`} 
    />
  );
}
