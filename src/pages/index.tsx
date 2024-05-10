import type { HeadFC } from "gatsby";
import * as React from "react";
import RootLayout from "../components/layout/RootLayout";
import Hero from "../components/home/sections/Hero";
import AboutMe from "../components/home/sections/AboutMe";
import Projects from "../components/home/sections/Projects";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jonny Portfolio</title>;
