import { type HeadFC } from "gatsby";
import * as React from "react";
import imgHeroBg from "../components/home/sections/Hero/hero-bg.png";
import Nav from "../components/layout/Nav";
import SectionWrapper from "../components/wrappers/SectionWrapper";

const IndexPage = () => {
  return (
    <main>
      <Nav />
      <SectionWrapper
        className="h-[100vh] min-h-[680px] bg-cover"
        id="home"
        style={{ backgroundImage: `url(${imgHeroBg})` }}
      >
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="relative w-full text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] leading-normal drop-shadow-2xl">
            <span className="relative">Coming </span>
            <span className="font-bold bg-gradient-to-br from-secondary via-primary to-secondary animate-gradient-xy bg-clip-text text-transparent">
              Soon
            </span>
            <span className="relative">!</span>
          </h1>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jonny Portfolio | Playground</title>;
