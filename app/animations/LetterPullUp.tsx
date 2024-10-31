// app/components/animations/LetterPullUp.tsx

import clsx from "clsx";
import { motion } from "framer-motion";

interface LetterPullUpProps {
  text: string;
  className?: string;
}

export default function LetterPullUp({ text, className = "" }: LetterPullUpProps) {
  const letters = text.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
        duration: 0.5,    // Adjust duration for smoothness
      },
    }),
  };

  return (
    <div className={clsx("flex justify-center flex-wrap", className)}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={clsx(
            "font-normal", // Normal font weight
            "text-base md:text-lg lg:text-xl xl:text-2xl", // Normal text sizes
            "tracking-normal", // Normal letter spacing
            "leading-normal",  // Normal line height
            "block"
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </div>
  );
}