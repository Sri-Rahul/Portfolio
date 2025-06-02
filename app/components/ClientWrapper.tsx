"use client"; // This marks the component as a Client Component

import React, { useState, useEffect } from "react";
import useBlobity from "../components/blobity/useBlobity"; // Adjust the path as necessary

const ClientWrapper: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Use useEffectOnce to scroll to top when component mounts
  useEffect(() => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Error scrolling to top:", error);
    }
  }, []);

  // Handle responsive design and mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Set initial value immediately
    handleResize();

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only on mount

  // Configure Blobity with comprehensive options
  const blobityOptions = {
    color: "#ffffff",
    dotColor: "#ffffff",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    font: "'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 900,
    opacity: 1.0,
    fontColor: "#000000",
    zIndex: 9999999,
  };

  // Initialize Blobity with the configured options
  useBlobity(blobityOptions);

  // Optional: Log mobile state for debugging
  useEffect(() => {
    console.log("Is Mobile:", isMobile);
  }, [isMobile]);

  return null; // No visual rendering
};

export default ClientWrapper;
