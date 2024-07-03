import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import React, { useEffect, useMemo } from "react";

interface AnimatedLoopyLineProps {
  className?: string;
  duration?: number;
  delay?: number;
  loop?: boolean;
  instantFirstPlay?: boolean;
}

const AnimatedLoopyLine = ({
  className,
  duration = 2,
  delay = 10,
  loop = true,
  instantFirstPlay = true,
}: AnimatedLoopyLineProps) => {
  const [animationState, setAnimationState] = React.useState<"off" | "on">(
    instantFirstPlay ? "on" : "off"
  );

  useEffect(() => {
    if (loop) {
      const interval = setInterval(() => {
        setAnimationState("on");
      }, delay * 1000 + duration * 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      const timeout = setTimeout(() => {
        setAnimationState("on");
      }, delay * 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [delay, duration, loop]);

  const handleAnimationComplete = () => {
    setAnimationState("off");
  };

  const variants: Variants = useMemo(
    () => ({
      off: {
        pathLength: 0,
        pathOffset: 0,
        transition: {
          duration: 0,
        },
      },
      on: {
        pathLength: [0, 0.5, 0],
        pathOffset: 0.99,
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      },
    }),
    [duration]
  );

  return (
    <motion.svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1286.94 553.77"
      preserveAspectRatio="none"
      className={clsx(className)}
    >
      <motion.path
        variants={variants}
        initial="off"
        animate={animationState}
        onAnimationComplete={handleAnimationComplete}
        stroke="#51a0d5"
        strokeWidth="8"
        strokeLinecap="round"
        d="M4,549.77c80.04-38.43,161.8-78.53,226.13-141.14,5.69-5.53,11.2-11.25,16.48-17.17,22.64-25.39,41.2-54.95,50.59-87.65,4.13-14.36,6.46-29.39,5.17-44.28-1.29-14.89-6.38-29.66-15.89-41.2-15.64-18.99-41.93-26.33-65.56-20.79-35.35,8.29-56.66,49.01-59.43,82.51-3.91,47.2,20.21,98.9,58.28,126.85,65.16,47.86,154.99,28.91,220.8-7.29,88.22-48.53,166.15-120.02,268.43-137.91,66.59-11.65,134.65-5.62,201.83-8.58,47.01-2.07,91.54-14.69,134.84-33.2,100.41-42.93,185.48-119.64,237.27-215.92"
      />
    </motion.svg>
  );
};

export default React.memo(AnimatedLoopyLine);
