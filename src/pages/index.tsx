import type { HeadFC } from "gatsby";
import * as React from "react";
import RootLayout from "../components/layout/RootLayout";

const IndexPage = () => {
  return (
    <RootLayout>
      <main></main>
    </RootLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>einfacheinfach</title>;
