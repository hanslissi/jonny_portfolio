import React from "react";

interface TagProps {
  name: string;
  showName?: boolean;
  hexColorString?: string;
}

const Tag = ({ name, showName = true, hexColorString }: TagProps) => {
  return (
    <div
      className="w-fit h-fit rounded-full p-3 flex flex-row items-center gap-2"
      style={{
        backgroundColor: `${hexColorString}10`,
        color: `${hexColorString}`,
      }}
    >
      <div
        className="h-[1em] aspect-square rounded-full"
        style={{ backgroundColor: hexColorString }}
      />
      {showName && <span className="pr-1">{name}</span>}
    </div>
  );
};

export default Tag;
