import React, { useEffect } from 'react';
import imgArrowDownIcon from '../../../images/icons/arrow_down.svg';
import ProjectTag, { Tag } from '../Tag';
import clsx from 'clsx';

interface FilterDropdownProps {
    filterType: string;
    filterOptions: Array<Tag>;
    onChange: (selectedIds: Array<string>) => void;
    noDot?: boolean;
    initialSelectedIds?: Array<string>;
}

const FilterDropdown = ({ filterType, filterOptions, onChange, noDot = false, initialSelectedIds = [] }: FilterDropdownProps) => {
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [selectedOptions, setSelectedOptions] = React.useState<Array<string>>(initialSelectedIds);

    useEffect(() => {
        setSelectedOptions(initialSelectedIds);
    }, [initialSelectedIds]);
    
    return (
        <div className="relative z-10">
            <button
                className={clsx(
                    "h-12 flex flex-row gap-2 items-center bg-brightSecondaryBg border-[0.5px] rounded-full px-4 py-2 cursor-pointer",
                    {
                        "pr-2": selectedOptions.length > 0
                    }
                )}
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <img
                    src={imgArrowDownIcon}
                    alt="Arrow down icon"
                    className="h-4"
                />
                {selectedOptions.length > 0 ? (
                    selectedOptions.map((id) => {
                        const tag = filterOptions.find((option) => option.id === id);
                        return tag ? <ProjectTag
                            key={tag.id}
                            tag={tag}
                            showName={noDot}
                            showColorDot={!noDot}
                        /> : null;
                    })
                ) : `All ${filterType}`}

            </button>
            {showDropdown && (
                <div className="absolute w-64 flex flex-row flex-wrap gap-2 left-0 top-[100%] glasscard-dark mt-2 p-4">
                    {filterOptions.map((option) => {
                        const optionSelected = selectedOptions.includes(option.id);

                        return (<ProjectTag
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
                        />);
                    })}
                </div>
            )}
        </div>

    );
}

export default FilterDropdown;