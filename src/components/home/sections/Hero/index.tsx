import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import imgHeroBg from "./hero-bg.png";

const Hero = () => {
  return (
    <SectionWrapper
      className="h-[100vh] bg-cover"
      style={{ backgroundImage: `url(${imgHeroBg})` }}
    >
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="w-full text-center text-[9rem] leading-normal">
          <span>A </span>
          <span className="font-bold">Designer </span>
          <span>who can.</span>
          <span className="font-mono font-extrabold">{"code();_"}</span>
        </h1>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
