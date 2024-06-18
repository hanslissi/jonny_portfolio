import { PageProps, graphql, type HeadFC } from "gatsby";
import * as React from "react";
import Hero from "../components/home/sections/Hero";
import AboutMe from "../components/home/sections/AboutMe";
import Projects from "../components/home/sections/Projects";


const IndexPage = ({data}: PageProps<Queries.IndexPageQuery>) => {
  return (
    <main>
      <Hero />
      <AboutMe 
        projectTools={data.allSanityProjectTool.edges.map(({node}) => node)}
      />
      <Projects />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jonny Portfolio</title>;

export const projectQuery = graphql`
  query IndexPage {
    allSanityProjectTool {
      edges {
        node {
          title
          toolLogo {
            asset {
              gatsbyImageData(
                width: 80
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      } 
    }
  }
`;