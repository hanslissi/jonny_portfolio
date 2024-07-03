import React from "react";
import ProjectTag, { Tag } from "../ProjectTag";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface ProjectPreviewProps {
  title: string;
  year: number;
  scope: string;
  thumbnailImg: IGatsbyImageData | undefined;
  slug: string;
  tags: Tag[];
}

const ProjectPreview = ({
  title,
  year,
  scope,
  thumbnailImg,
  slug,
  tags,
}: ProjectPreviewProps) => {
  return (
    <a
      href={`/projects/${slug}`}
      className="min-h-[250px] sm:min-h-[300px] h-full card-dark p-2 md:p-4 flex flex-col gap-2 cursor-pointer"
    >
      {thumbnailImg && (
        <GatsbyImage
          className="w-full h-full object-cover rounded-md md:rounded-xl"
          image={thumbnailImg}
          alt={`${title} project thumbnail`}
        />
      )}
      <div className="flex flex-col">
        <h3>{title}</h3>
        <p>
          {year} - {scope}
        </p>
      </div>
      <div className="flex flex-row gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <ProjectTag key={index} tag={tag} showName={false} />
        ))}
      </div>
    </a>
  );
};

export default ProjectPreview;
