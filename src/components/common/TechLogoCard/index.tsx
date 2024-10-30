import clsx from "clsx";
import Color from "color-thief-react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import DimensionHoverContainer from "../DimensionHoverContainer";

interface TechLogoCardLinkProps {
  img: IGatsbyImageData | undefined;
  imgSrc: string | undefined;
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
    <Color src={imgSrc ?? ""} format={"hex"} crossOrigin="anonymous">
      {({ data: color }) => {
        return (
          <DimensionHoverContainer>
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
                  #121212CC 100%
                )`,
                transformStyle: "preserve-3d"
              }}
            >
              {img && (
                <GatsbyImage
                  className="h-12 aspect-square rounded-xl"
                  style={{ transform: "translateZ(30px)" }}
                  image={img}
                  alt={`Logo of ${title}`}
                />
              )}
              {title}
            </div>
          </DimensionHoverContainer>
        );
      }}
    </Color>
  );
};

export default TechLogoCardLink;
