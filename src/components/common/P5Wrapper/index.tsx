import React, { useRef, useEffect, useState } from "react";

// Define MySketch type
export type MySketch = (width: number, height: number) => (p: any) => void;

interface P5WrapperProps {
  sketch: MySketch;
}

// Modify the component to accept a sketch prop
const P5Wrapper = ({ sketch }: P5WrapperProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [p5Instance, setP5Instance] = useState<any>(null);

  useEffect(() => {
    // Dynamically import p5.js only on the client side
    const loadP5 = async () => {
      const p5 = await import("p5");
      const container = canvasRef.current;
      if (!container) return;

      const p5Instance = new p5.default(
        sketch(container.offsetWidth, container.offsetHeight),
        container
      );
      setP5Instance(p5Instance);

      // Resize observer to update canvas size
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          p5Instance.resizeCanvas(width, height);
        }
      });

      resizeObserver.observe(container);

      // Cleanup
      return () => {
        p5Instance.remove();
        resizeObserver.unobserve(container);
      };
    };

    loadP5();
  }, [sketch]); // Add sketch to dependency array to recreate the sketch when it changes

  return <div ref={canvasRef} className="w-full h-full" />;
};

export default P5Wrapper;
