"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

interface GradualSpacingProps {
  text?: string;
  className?: string;
}

export const GradualSpacing: React.FC<GradualSpacingProps> = ({
  text = "",
  className = "",
}) => {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={clsx("flex flex-wrap justify-center mx-auto", className)}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.15, delay: i * 0.02 }}
            className={clsx(
              "text-center font-display font-medium",
              "text-base sm:text-lg md:text-xl lg:text-2xl",
              "tracking-normal",
              "leading-relaxed",
            )}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};