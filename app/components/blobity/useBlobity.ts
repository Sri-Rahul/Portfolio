import { useEffect, useRef } from "react";
import Blobity, { Options } from "./Blobity";

const useBlobity = (options: Partial<Options> = {}) => {
  const instance = useRef<Blobity | null>(null);

  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window !== "undefined") {
      // Cleanup any existing instance
      if (instance.current) {
        try {
          // Destroy existing instance if it exists
          // Assuming Blobity has a destroy method
          instance.current.destroy?.();
        } catch (error) {
          console.error("Blobity destruction error:", error);
        }
      }

      try {
        // Create new Blobity instance
        instance.current = new Blobity({
          ...options,
          // Default options can be added here if needed
        });
      } catch (error) {
        console.error("Blobity initialization error:", error);
        instance.current = null;
      }

      // Cleanup function
      return () => {
        if (instance.current) {
          try {
            instance.current.destroy?.();
          } catch (error) {
            console.error("Blobity cleanup error:", error);
          }
          instance.current = null;
        }
      };
    }
  }, [options]); // Deep comparison of options

  return instance;
};

export default useBlobity;
