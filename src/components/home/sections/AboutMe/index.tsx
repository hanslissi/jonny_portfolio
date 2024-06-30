import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import AboutMeBentoGrid from "./AboutMeBentoGrid";
import imgBackgroundGradient from "./background_gradient.png";
import AboutMeTitle from "./AboutMeTitle";


const AboutMe = () => {
  return (
    <SectionWrapper
      className="bg-[length:100%_100%]"
      id="about-me"
      style={{ backgroundImage: `url(${imgBackgroundGradient})` }}
    >
      <div className="container mx-auto flex flex-col items-center gap-16 py-16 bg-[length:100%_100%]">
        <AboutMeTitle />
        <div className="relative inline-block">
          <span className="absolute text-9xl font-bold font-mono -top-16 -left-10">
            {"<"}
          </span>
          <span className="absolute text-9xl font-bold font-mono -bottom-12 -right-24">
            {"/>"}
          </span>
          <AboutMeBentoGrid />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
