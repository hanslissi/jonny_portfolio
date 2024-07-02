import React, { useEffect, useRef } from "react";
import imgArrowDownIcon from "../../../images/icons/arrow_down.svg";
import ProjectTag, { Tag } from "../ProjectTag";
import clsx from "clsx";
import { AnimatePresence, Variants, motion } from "framer-motion";
import {
  DURATION_FAST,
  DURATION_SUPERFAST,
} from "../../../constants/animationConstants";

interface FilterDropdownProps {
  filterType: string;
  filterOptions: Array<Tag>;
  onChange: (selectedIds: Array<string>) => void;
  noDot?: boolean;
  initialSelectedIds?: Array<string>;
}

const dropdownIconVariants: Variants = {
  idle: {
    rotate: 0,
    transition: {
      duration: DURATION_FAST,
    },
  },
  open: {
    rotate: 180,
    transition: {
      duration: DURATION_FAST,
    },
  },
};

const buttonVariants: Variants = {
  idle: {
    scale: 1,
    transition: {
      duration: DURATION_FAST,
    },
  },
  tapped: {
    scale: 0.95,
    transition: {
      duration: DURATION_FAST,
    },
  },
};

const FilterDropdown = ({
  filterType,
  filterOptions,
  onChange,
  noDot = false,
  initialSelectedIds = [],
}: FilterDropdownProps) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedOptions, setSelectedOptions] =
    React.useState<Array<string>>(initialSelectedIds);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedOptions(initialSelectedIds);
  }, [initialSelectedIds]);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10" ref={dropdownRef}>
      <motion.button
        className={clsx(
          "h-12 flex flex-row gap-2 items-center bg-brightSecondaryBg border-[0.5px] rounded-full px-4 py-2 cursor-pointer",
          {
            "pr-2": selectedOptions.length > 0,
          }
        )}
        onClick={() => setShowDropdown(!showDropdown)}
        variants={buttonVariants}
        whileTap="tapped"
        initial="idle"
      >
        <motion.img
          src={imgArrowDownIcon}
          alt="Arrow down icon"
          className="h-4"
          variants={dropdownIconVariants}
          animate={showDropdown ? "open" : "idle"}
        />
        <AnimatePresence>
          {selectedOptions.length > 0 ? (
            selectedOptions.map((id) => {
              const tag = filterOptions.find((option) => option.id === id);
              return tag ? (
                <motion.div
                  key={tag.id}
                  initial={{ opacity: 0, scale: 0, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: "auto" }}
                  exit={{ opacity: 0, scale: 0, width: 0 }}
                  transition={{
                    duration: DURATION_FAST,
                  }}
                >
                  <ProjectTag
                    tag={tag}
                    showName={noDot}
                    showColorDot={!noDot}
                  />
                </motion.div>
              ) : null;
            })
          ) : (
            <motion.div
              className="whitespace-nowrap"
              initial={{ opacity: 0, width: "auto" }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, scale: 0, width: 0 }}
              transition={{
                duration: DURATION_FAST,
                delay: DURATION_FAST,
              }}
            >
              {`All ${filterType}`}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            className="absolute w-64 flex flex-row flex-wrap gap-2 left-0 top-[100%] glasscard-dark mt-2 p-2 md:p-4"
            initial={{ scale: 0.8, y: -30, x: -20 }}
            animate={{ scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -30, x: -20 }}
            transition={{
              duration: DURATION_SUPERFAST,
            }}
          >
            {filterOptions.map((option) => {
              const optionSelected = selectedOptions.includes(option.id);

              return (
                <ProjectTag
                  key={option.id}
                  tag={option}
                  greyScale={!optionSelected}
                  showColorDot={!noDot}
                  onClick={() => {
                    // Toggle the selection of the option
                    const selectedOptionsUpdated = optionSelected
                      ? selectedOptions.filter((id) => id !== option.id)
                      : [...selectedOptions, option.id];

                    onChange(selectedOptionsUpdated);
                    setSelectedOptions(selectedOptionsUpdated);
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
