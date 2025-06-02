import React, { useEffect, useState } from "react";

interface AnimatedBodyProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedBody({
  text,
  children,
  className = "",
  delay = 0,
}: AnimatedBodyProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000); // Convert delay to milliseconds

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${className} transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {text ? <p>{text}</p> : children}
    </div>
  );
}
