import clsx from "clsx";
import Color from "color-thief-react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

interface TechLogoCardLinkProps {
  img: IGatsbyImageData | undefined;
  imgSrc: string;
  title: string;
  glass?: boolean;
  className?: string;
}

const TechLogoCardLink = ({
  img,
  imgSrc,
  title,
  glass = false,
  className,
}: TechLogoCardLinkProps) => {
  return (
    <Color src={imgSrc} format={"hex"} crossOrigin="anonymous">
      {({ data: color }) => {
        return (
          <div
            className={clsx(
              "flex flex-col items-center gap-4 p-6 rounded-xl text-whiteHighlight",
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
                )`
            }}
          >
            {img && (
              <GatsbyImage
                className="h-12 aspect-square rounded-xl"
                image={img}
                alt={`Logo of ${title}`}
              />
            )}
            {title}
          </div>
        );
      }}
    </Color>

  );
};

export default TechLogoCardLink;
