import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import AboutMeBentoGrid from "./AboutMeBentoGrid";

const AboutMe = () => {
  return (
    <SectionWrapper className="container flex flex-col items-center gap-8 py-16">
      <h1 className="text-center">About Me</h1>
      <div className="relative inline-block">
        <span className="absolute text-9xl font-bold -top-16 -left-10">
          {"<"}
        </span>
        <span className="absolute text-9xl font-bold -bottom-16 -right-10">
          {"/>"}
        </span>
        <AboutMeBentoGrid />
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
