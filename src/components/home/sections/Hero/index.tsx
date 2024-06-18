import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import imgHeroBg from "./hero-bg.png";
import AnimatedLoopyLine from "./AnimatedLoopyLine";
import CodeWindow from "../../../common/CodeWindow";

const Hero = () => {
  const codeString = `
  <h1 className="w-full text-center text-[9rem] leading-normal drop-shadow-2xl">
    <span>A </span>
    <span className="font-bold bg-gradient-to-br from-secondary via-primary to-secondary bg-clip-text text-transparent">
      Designer{" "}
    </span>
    <span>who can.</span>
    <span className="font-mono font-extrabold">{"code();_"}</span>
  </h1>
  `
  return (
    <SectionWrapper
      className="h-[100vh] bg-cover"
      id="home"
      style={{ backgroundImage: `url(${imgHeroBg})` }}
    >
      <CodeWindow
        className="absolute bottom-0 right-0 w-[500px]"
        codeString={codeString}
      />
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="relative w-full text-center text-[9rem] leading-normal drop-shadow-2xl">
          <AnimatedLoopyLine
            className="absolute -top-[3em] -left-24 w-[12em] drop-shadow-xl"
            duration={5}
            delay={1}
            loop
          />
          <span className="relative">A </span>
          <span className="font-bold bg-gradient-to-br from-secondary via-primary to-secondary bg-clip-text text-transparent">
            Designer{" "}
          </span>
          <span className="relative">who can.</span>
          <span className="relative font-mono font-extrabold">{"code();_"}</span>
        </h1>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
