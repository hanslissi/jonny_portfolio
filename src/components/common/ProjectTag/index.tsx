import clsx from "clsx";
import { Variants, motion } from "framer-motion";
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

const toolTipVariants: Variants = {
  idle: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const ProjectTag = ({
  tag,
  onClick,
  greyScale = false,
  showName = true,
  showColorDot = true,
}: TagProps) => {
  const hexColorString = greyScale ? "#AAAAAA" : tag.hexColorString;

  const projectTagVariants: Variants = {
    idle: {
      backgroundColor: `${hexColorString}15`,
      color: `${hexColorString}`,
    },
    hover: {
      scale: 1.05,
      backgroundColor: `${tag.hexColorString}20`,
    },
  };

  return (
    <motion.div
      className={clsx(
        "relative w-fit h-fit rounded-full p-2 flex flex-row items-center gap-2 text-sm",
        {
          "cursor-pointer": onClick,
        }
      )}
      onClick={onClick}
      variants={projectTagVariants}
      initial="idle"
      animate={{ color: `${hexColorString}` }}
      whileHover="hover"
    >
      {!showName && (
        <motion.div
          className="absolute bg-primaryBg rounded-full shadow-xl bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none"
          variants={toolTipVariants}
        >
          <div
            className="rounded-full text-nowrap p-2"
            style={{ backgroundColor: `${hexColorString}15` }}
          >
            {tag.name}
          </div>
        </motion.div>
      )}
      {showColorDot && (
        <div
          className="h-[1em] aspect-square rounded-full"
          style={{ backgroundColor: tag.hexColorString }}
        />
      )}
      {showName && <span className="pr-1 text-nowrap">{tag.name}</span>}
    </motion.div>
  );
};

export default ProjectTag;
