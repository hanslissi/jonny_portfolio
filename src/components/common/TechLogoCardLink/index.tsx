import clsx from "clsx";
import React from "react";

interface TechLogoCardLinkProps {
  img: any;
  alt: string;
  name: string;
  href?: string;
  className?: string;
}

const TechLogoCardLink = ({
  img,
  alt,
  name,
  href,
  className,
}: TechLogoCardLinkProps) => {
  return (
    <a
      className={clsx(
        "flex flex-col justify-center items-center gap-4 p-8 glasscard-bright rounded-xl text-whiteHighlight",
        className
      )}
      href={href}
    >
      <img src={img} alt={alt} className="rounded-xl" />
      {name}
    </a>
  );
};

export default TechLogoCardLink;
