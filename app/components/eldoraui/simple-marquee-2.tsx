import { cn } from "../../lib/utils";

interface SimpleMarqueeProps {
  className?: string;
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
}

export function SimpleMarquee({
  className,
  children,
  speed = 20,
  pauseOnHover = false,
}: SimpleMarqueeProps) {
  return (
    <div 
      className={cn("marquee-container", className)}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div 
        className={cn(
          "marquee-content flex-shrink-0",
          pauseOnHover && "hover:animation-pause"
        )}
      >
        {children}
      </div>
      <div 
        className={cn(
          "marquee-content flex-shrink-0",
          pauseOnHover && "hover:animation-pause"
        )}
      >
        {children}
      </div>
    </div>
  );
}
