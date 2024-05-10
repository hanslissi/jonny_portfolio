import React from "react";

interface TagProps {
  tag: Tag;
  showName?: boolean;
}

export type Tag = {
  name: string;
  hexColorString: string;
};

const ProjectTag = ({ tag, showName = true }: TagProps) => {
  return (
    <div
      className="w-fit h-fit rounded-full p-3 flex flex-row items-center gap-2"
      style={{
        backgroundColor: `${tag.hexColorString}10`,
        color: `${tag.hexColorString}`,
      }}
    >
      <div
        className="h-[1em] aspect-square rounded-full"
        style={{ backgroundColor: tag.hexColorString }}
      />
      {showName && <span className="pr-1">{tag.name}</span>}
    </div>
  );
};

export default ProjectTag;
