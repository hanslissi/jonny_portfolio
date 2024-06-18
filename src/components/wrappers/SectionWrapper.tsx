import clsx from "clsx";
import React, { forwardRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  className?: string;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, id, style, className }: SectionWrapperProps, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        style={style}
        className={clsx("relative mx-auto scroll-my-12", className)}
      >
        {children}
      </section>
    );
  }
);

export default SectionWrapper;
