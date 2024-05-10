import React from "react";
import ProjectTag, { Tag } from "../Tag";

interface ProjectPreviewProps {
  key: React.Key | null | undefined;
  title: string;
  year: number;
  scope: string;
  thumbnailSrc: any;
  slug: string;
  tags: Tag[];
}

const ProjectPreview = ({
  key,
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
      key={key}
      className="h-[300px] glasscard-dark p-4 flex flex-col gap-2 cursor-pointer"
    >
      <img
        src={thumbnailSrc}
        alt={`${title} project thumbnail`}
        className="h-full object-cover rounded-xl"
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
