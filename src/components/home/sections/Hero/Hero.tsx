import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import imgHeroBg from "./hero-bg.png";

const Hero = () => {
  return (
    <SectionWrapper
      className="h-[100vh] bg-cover text-white"
      style={{ backgroundImage: `url(${imgHeroBg})` }}
    >
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="w-full text-center text-[10rem]">
          <span>A </span>
          <span className="font-bold">Designer </span>
          <span>who can</span>
          <span className="font-bold">{".code();_"}</span>
        </h1>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
