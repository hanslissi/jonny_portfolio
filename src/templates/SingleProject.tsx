import { graphql, PageProps } from "gatsby";
import React from "react";
import ProjectTag, { Tag } from "../components/common/ProjectTag";
import { PortableTextBlock } from "@portabletext/react";
import MyPortableText from "../components/common/MyPortableText";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TechLogoCardLink from "../components/common/TechLogoCard";
import Nav from "../components/layout/Nav";

interface SanityProject {
  title: string;
  year: string;
  scope: { id: string; title: string };
  tags: { id: string; title: string; color: string }[];
  thumbnail: any;
  abstractContent: PortableTextBlock[];
  content: PortableTextBlock[];
  projectTools: { toolLogo: any; title: string }[];
}

interface SingleProjectQuery {
  sanityProject: SanityProject;
}

const SingleProject = ({ data }: PageProps<SingleProjectQuery>) => {
  // Check if data.sanityProject exists before rendering the component
  if (!data.sanityProject) {
    return <div>Project data is not available.</div>;
  }

  // Destructure data.sanityProject for easier access
  const { title, year, scope, tags, abstractContent, content, projectTools } =
    data.sanityProject;

  const thumbnail = getImage(data.sanityProject.thumbnail.asset);

  return (
    <main>
      <Nav backbuttonInfo={{ title: "Back to Projects", href: "/#projects" }} />
      <div className="container mx-auto mt-32 px-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1>{title}</h1>
            <p>
              {year} - {scope?.title}
            </p>
            <div className="flex flex-row gap-2 flex-wrap">
              {tags.map((tagRaw, index) => {
                const tag: Tag = {
                  id: tagRaw.id,
                  name: tagRaw.title || "",
                  hexColorString: tagRaw.color || "#FFFFFF",
                };
                return (
                  tag && <ProjectTag key={index} tag={tag} showName={true} />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {thumbnail && (
              <GatsbyImage
                className="w-full rounded-xl"
                image={thumbnail}
                alt={`${title} project thumbnail`}
              />
            )}
            <div className="w-full lg:w-[60%]">
              <MyPortableText value={abstractContent} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h2>Tools & Tech Stack</h2>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {projectTools.map((tool, index) => {
                return (
                  <TechLogoCardLink
                    key={index}
                    img={getImage(tool.toolLogo.asset)}
                    imgSrc={
                      tool.toolLogo.asset.gatsbyImageData.images.fallback.src
                    }
                    title={tool.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="mx-auto w-full max-w-[800px]">
            <MyPortableText value={content} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProject;

export const projectQuery = graphql`
  query SingleProject($id: String!) {
    sanityProject(id: { eq: $id }) {
      title
      year
      content: _rawContent(resolveReferences: { maxDepth: 5 })
      abstractContent: _rawAbstractContent(resolveReferences: { maxDepth: 5 })
      scope {
        id
        title
      }
      tags {
        id
        title
        color
      }
      thumbnail {
        asset {
          gatsbyImageData(
            width: 1200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      projectTools {
        toolLogo {
          asset {
            gatsbyImageData(
              width: 80
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        title
      }
    }
  }
`;
