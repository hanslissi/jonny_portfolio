import { graphql, PageProps } from "gatsby";
import React from "react";
import ProjectTag, { Tag } from "../components/common/Tag";

const SingleProject = ({ data }: PageProps<Queries.SingleProjectQuery>) => {
  // Check if data.sanityProject exists before rendering the component
  if (!data.sanityProject) {
    return <div>Project data is not available.</div>;
  }

  // Destructure data.sanityProject for easier access
  const { title, year, scope, tags, content } = data.sanityProject;

  return (
    <div className="container mx-auto mt-32">
      <div className="flex flex-col">
        <h1>{title}</h1>
        <p>
          {year} - {scope?.title}
        </p>
      </div>
      <div className="flex flex-row gap-2 flex-wrap">
        {tags?.map((tagRaw, index) => {
          const tag: Tag = {
            name: tagRaw?.title || "",
            hexColorString: tagRaw?.color || "#FFFFFF",
          };
          return tag && <ProjectTag key={index} tag={tag} showName={true} />;
        })}
      </div>
      <div>
        {content?.map((contentBlock, index) => {
          if (contentBlock && contentBlock?.children) {
            const contentItem = contentBlock.children[0];
            return <p key={index}>{contentItem?.text}</p>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default SingleProject;

export const projectQuery = graphql`
  query SingleProject($id: String!) {
    sanityProject(id: { eq: $id }) {
      title
      year
      content {
        children {
          text
          marks
        }
        style
        listItem
        level
      }
      scope {
        title
      }
      tags {
        title
        color
      }
    }
  }
`;
