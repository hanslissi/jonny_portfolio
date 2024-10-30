import { motion, useAnimation } from "framer-motion";
import React from "react";

interface InfiniteHorizontalCarouselProps {
  children: (React.JSX.Element | null)[];
  duration?: number;
}

const InfiniteHorizontalCarousel = ({
  children,
  duration = 14,
}: InfiniteHorizontalCarouselProps) => {
  return (
    <div className="flex w-full overflow-x-clip">
      <motion.div
        className="flex gap-4"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "calc(-50% - 0.5rem)"] }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteHorizontalCarousel;
