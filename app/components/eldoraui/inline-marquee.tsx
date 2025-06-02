import React, { useEffect } from "react";

interface InlineMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function InlineMarquee({
  children,
  speed = 15,
  className = "",
}: InlineMarqueeProps) {
  const containerStyle: React.CSSProperties = {
    overflow: "hidden",
    position: "relative",
    width: "100%",
  };

  const marqueeWrapperStyle: React.CSSProperties = {
    display: "flex",
    animation: `seamlessMarquee ${speed}s linear infinite`,
    width: "max-content",
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    gap: "2rem",
    paddingRight: "2rem",
  };

  // Inject the keyframes directly
  useEffect(() => {
    const styleId = "seamless-marquee-keyframes";
    // Check if style already exists to avoid duplicates
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes seamlessMarquee {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(calc(-100% / 2)); 
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={className} style={containerStyle}>
      <div style={marqueeWrapperStyle}>
        <div style={contentStyle}>{children}</div>
        <div style={contentStyle}>{children}</div>
      </div>
    </div>
  );
}
