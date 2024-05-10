import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import AboutMeBentoGrid from "./AboutMeBentoGrid";

const AboutMe = () => {
  return (
    <SectionWrapper className="container flex flex-col gap-8">
      <h1 className="text-center">About Me</h1>
      <AboutMeBentoGrid />
    </SectionWrapper>
  );
};

export default AboutMe;
