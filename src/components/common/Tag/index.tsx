import clsx from "clsx";
import React from "react";

interface TagProps {
  tag: Tag;
  onClick?: () => void;
  greyScale?: boolean;
  showName?: boolean;
  showColorDot?: boolean;
}

export type Tag = {
  id: string;
  name: string;
  hexColorString: string;
};

const ProjectTag = ({ tag, onClick, greyScale = false, showName = true, showColorDot = true }: TagProps) => {
  const hexColorString = greyScale ? "#AAAAAA" : tag.hexColorString;

  return (
    <div
      className={clsx(
        "w-fit h-fit rounded-full p-2 flex flex-row items-center gap-2 text-sm",
        {
          "cursor-pointer": onClick,
        }
      )}
      style={{
        backgroundColor: `${hexColorString}10`,
        color: `${hexColorString}`,
      }}
      onClick={onClick}
    >
      {showColorDot && (
        <div
          className="h-[1em] aspect-square rounded-full"
          style={{ backgroundColor: tag.hexColorString }}
        />
      )}
      {showName && <span className="pr-1 text-nowrap">{tag.name}</span>}
    </div>
  );
};

export default ProjectTag;
