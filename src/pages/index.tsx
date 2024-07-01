import { graphql, type HeadFC } from "gatsby";
import * as React from "react";
import Nav from "../components/layout/Nav";
import Hero from "../components/home/sections/Hero";
import AboutMe from "../components/home/sections/AboutMe";
import Projects from "../components/home/sections/Projects";
import Contact from "../components/home/sections/Contact";

const IndexPage = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jonny Portfolio</title>;
