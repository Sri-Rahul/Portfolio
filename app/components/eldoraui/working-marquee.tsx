import React from 'react';

interface WorkingMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function WorkingMarquee({ children, speed = 15, className = "" }: WorkingMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="flex scroll-left whitespace-nowrap"
        style={{
          animationDuration: `${speed}s`
        }}
      >
        {children}
      </div>
    </div>
  );
}
