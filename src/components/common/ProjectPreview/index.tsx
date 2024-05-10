import React from "react";
import ProjectTag, { Tag } from "../Tag";

interface ProjectPreviewProps {
  title: string;
  year: number;
  scope: string;
  thumbnailSrc: any;
  tags: Tag[];
}

const ProjectPreview = ({
  title,
  year,
  scope,
  thumbnailSrc,
  tags,
}: ProjectPreviewProps) => {
  return (
    <div className="h-[350px] glasscard-dark p-4 flex flex-col gap-2 cursor-pointer">
      <img
        src={thumbnailSrc}
        alt={`${title} project thumbnail`}
        className="h-full object-cover rounded-xl"
      ></img>
      <h3>{title}</h3>
      <p>
        {year} - {scope}
      </p>
      <div className="flex flex-row gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <ProjectTag key={index} tag={tag} showName={false} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
