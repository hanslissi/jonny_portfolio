import clsx from "clsx";
import Color from "color-thief-react";
import React, { ReactNode } from "react";

interface TechLogoCardLinkProps {
  img: ({}: { className: string; alt: string }) => ReactNode;
  imgSrc: string;
  title: string;
  href: string;
  glass?: boolean;
  className?: string;
}

const LogoLinkCard = ({
  img,
  imgSrc,
  title,
  href,
  glass = false,
  className,
}: TechLogoCardLinkProps) => {
  return (
    <Color src={imgSrc} format={"hex"}>
      {({ data: color }) => {
        return (
          <a
            href={href}
            className={clsx(
              "flex flex-col justify-center items-center gap-4 p-6 rounded-xl text-whiteHighlight focus-ring-primary",
              className,
              {
                "glasscard-darkSecondary": glass,
                "card-darkSecondary": !glass,
              }
            )}
            style={{
              backgroundImage: `radial-gradient(
                                farthest-corner at 5px 5px,
                                ${color}22 0%,
                                #232323CC 100%
                              )`,
            }}
          >
            {img?.({
              className: "h-12 aspect-square rounded-xl",
              alt: `Logo of ${title}`,
            })}
            {title}
          </a>
        );
      }}
    </Color>
  );
};

export default LogoLinkCard;
