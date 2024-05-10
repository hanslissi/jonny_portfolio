import type { HeadFC } from "gatsby";
import * as React from "react";
import RootLayout from "../components/layout/RootLayout";
import Hero from "../components/home/sections/Hero";
import AboutMe from "../components/home/sections/AboutMe";

const IndexPage = () => {
  return (
    <RootLayout>
      <main>
        <Hero />
        <AboutMe />
      </main>
    </RootLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jonny Portfolio</title>;
