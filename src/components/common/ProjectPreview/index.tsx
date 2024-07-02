import React from "react";
import ProjectTag, { Tag } from "../ProjectTag";

interface ProjectPreviewProps {
  title: string;
  year: number;
  scope: string;
  thumbnailSrc: any;
  slug: string;
  tags: Tag[];
}

const ProjectPreview = ({
  title,
  year,
  scope,
  thumbnailSrc,
  slug,
  tags,
}: ProjectPreviewProps) => {
  return (
    <a
      href={`/projects/${slug}`}
      className="h-[250px] sm:h-[300px] card-dark p-2 md:p-4 flex flex-col gap-2 cursor-pointer"
    >
      <img
        src={thumbnailSrc}
        alt={`${title} project thumbnail`}
        className="h-full object-cover rounded-md md:rounded-xl"
      ></img>
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
