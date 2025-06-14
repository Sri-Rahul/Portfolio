import React, { useEffect } from "react";
import { useAnimation, motion, Variants, Transition } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedProps = {
  className?: string;
  delay?: number;
  stepSize?: number;
  iconSize?: number;
  children: React.ReactNode;
};

const animatedVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "1em",
  },
  visible: {
    opacity: 1,
    y: "0em",
  },
};

const Animated: React.FC<AnimatedProps> = ({
  className,
  delay,
  stepSize = 0.1,
  iconSize = 50,
  children,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const transition: Transition = {
    delay: delay || 0,
    duration: 1,
    ease: [0.2, 0.65, 0.3, 0.9],
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animatedVariants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
