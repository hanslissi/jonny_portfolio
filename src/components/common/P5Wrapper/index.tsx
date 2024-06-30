import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

export type MySketch = (width: number, height: number) => (p: p5) => void;

interface P5WrapperProps {
  sketch: MySketch;
}

// Modify the component to accept a sketch prop
const P5Wrapper = ({ sketch }: P5WrapperProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    p5InstanceRef.current = new p5(sketch(container.offsetWidth, container.offsetHeight), container);

    // Resize observer to update canvas size
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        p5InstanceRef.current?.resizeCanvas(width, height);
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      p5InstanceRef.current?.remove();
      resizeObserver.unobserve(container);
    };
  }, [sketch]); // Add sketch to dependency array to recreate the sketch when it changes

  return (
    <div ref={canvasRef} className="w-full h-full" />
  );
};

export default P5Wrapper;