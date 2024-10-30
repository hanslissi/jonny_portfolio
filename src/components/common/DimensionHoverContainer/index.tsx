import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface DimensionHoverContainerProps {
  children: React.ReactNode;
  className?: string;
}

const DimensionHoverContainer = ({ children, className = "" }: DimensionHoverContainerProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchorRect = (e.target as HTMLAnchorElement).getBoundingClientRect();

    const width = anchorRect.width;
    const height = anchorRect.height;

    const mouseX = e.clientX - anchorRect.left;
    const mouseY = e.clientY - anchorRect.top;

    const xPct = (mouseX / width) - 0.5; // Normalize to [-0.5, 0.5]
    const yPct = (mouseY / height) - 0.5; // Normalize to [-0.5, 0.5]

    x.set(xPct);
    y.set(yPct);

    console.log(xPct, yPct);
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{ rotateX: rotateX, rotateY: rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  )
}

export default DimensionHoverContainer;