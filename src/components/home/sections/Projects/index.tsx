import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import ProjectPreview from "../../../common/ProjectPreview";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectPrieview {
      allSanityProject {
        edges {
          node {
            title
            year
            scope {
              title
            }
            tags {
              title
              color
            }
            thumbnail {
              asset {
                publicUrl
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  return (
    <SectionWrapper className="container mx-auto flex flex-col gap-16 items-center">
      <h1 className="text-center">Projects</h1>
      <div className="grid grid-cols-3 gap-8 w-full max-w-[920px]">
        {data.allSanityProject.edges.map((project: any, index: number) => {
          return (
            <ProjectPreview
              key={index}
              title={project.node.title}
              year={project.node.year}
              scope={project.node.scope.title}
              thumbnailSrc={project.node.thumbnail.asset.publicUrl}
              slug={project.node.slug.current}
              tags={project.node.tags.map((tag: any) => {
                return {
                  name: tag.title,
                  hexColorString: tag.color,
                };
              })}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
