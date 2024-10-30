import React, { useEffect, useRef } from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import ProjectPreview from "../../../common/ProjectPreview";
import FilterDropdown from "../../../common/FilterDropdown";
import imgFilterIcon from "../../../../images/icons/filter.svg";
import folderAnimationData from "./folderAnimation.json";
import lottie from "lottie-web";
import { useStaticQuery, graphql } from "gatsby";
import { Tag } from "../../../common/ProjectTag";
import { AnimatePresence, motion } from "framer-motion";
import { DURATION_FAST } from "../../../../constants/animationConstants";
import { getImage } from "gatsby-plugin-image";

const Projects = () => {
  const data: Queries.ProjectPrieviewQuery = useStaticQuery(graphql`
    query ProjectPrieview {
      allSanityProjectTag {
        edges {
          node {
            id
            title
            color
          }
        }
      }
      allSanityProjectScope {
        edges {
          node {
            id
            title
          }
        }
      }
      allSanityProject(sort: { year: DESC }) {
        edges {
          node {
            title
            year
            scope {
              id
              title
            }
            tags {
              id
              title
              color
            }
            thumbnail {
              asset {
                gatsbyImageData(
                  width: 300
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const lottieFolderRef = useRef<HTMLDivElement>(null);
  const [selectedTagIds, setSelectedTagIds] = React.useState<Array<string>>([]);
  const [selectedScopeIds, setSelectedScopeIds] = React.useState<Array<string>>(
    []
  );

  useEffect(() => {
    if (lottieFolderRef.current) {
      lottie.loadAnimation({
        name: "folderAnimation",
        container: lottieFolderRef.current,
        renderer: "svg",
        autoplay: false,
        loop: false,
        animationData: folderAnimationData,
      });
      
      lottie.setSpeed(2);
    }

    return () => {
      lottie.destroy();
    }
  }, [lottieFolderRef]);

  const showProject = (project: any) => {
    if (selectedTagIds.length > 0) {
      const projectTagIds = project.node.tags?.map((tag: any) => tag.id) || [];

      if (!selectedTagIds.some((tagId) => projectTagIds.includes(tagId))) {
        return false;
      }
    }

    if (selectedScopeIds.length > 0) {
      if (!selectedScopeIds.includes(project.node.scope.id ?? "")) {
        return false;
      }
    }

    return true;
  };

  const handleClickReset = () => {
    setSelectedTagIds([]);
    setSelectedScopeIds([]);
  };

  const handleMouseEnterFolderAnimation = () => {
    lottie.setDirection(1);
    lottie.play("folderAnimation");
  };

  const handleMouseLeaveFolderAnimation = () => {
    lottie.setDirection(-1);
    lottie.play("folderAnimation");
  }

  return (
    <SectionWrapper
      id="projects"
      className="container mx-auto max-w-[920px] flex flex-col items-center gap-4 md:gap-16 my-24 px-4"
    >
      <div className="flex flex-row items-end gap-6">
        <motion.div
          className="w-[100px]"
          ref={lottieFolderRef}
          whileHover={{ scale: 1.02 }}
          onMouseEnter={handleMouseEnterFolderAnimation}
          onMouseLeave={handleMouseLeaveFolderAnimation}
        />
        <h1 className="mb-2">Projects</h1>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row flex-wrap gap-4 w-full items-center">
          <div className="flex flex-row gap-2 items-center">
            <img src={imgFilterIcon} alt="Filter icon" className="h-4" />
            {"Filter"}
          </div>
          <FilterDropdown
            filterType="Tags"
            filterOptions={data.allSanityProjectTag.edges.map((tagRaw) => {
              const tag: Tag = {
                id: tagRaw.node.id,
                name: tagRaw.node.title ?? "",
                hexColorString: tagRaw.node.color || "#FFFFFF",
              };
              return tag;
            })}
            initialSelectedIds={selectedTagIds}
            onChange={(selectedTagIdsUpdated) =>
              setSelectedTagIds(selectedTagIdsUpdated)
            }
          />
          <FilterDropdown
            filterType="Scopes"
            filterOptions={data.allSanityProjectScope.edges.map((scopeRaw) => {
              const scopeTag: Tag = {
                id: scopeRaw.node.id,
                name: scopeRaw.node.title ?? "",
                hexColorString: "#51A0D5",
              };
              return scopeTag;
            })}
            initialSelectedIds={selectedScopeIds}
            onChange={(selectedScopeIdsUpdated) =>
              setSelectedScopeIds(selectedScopeIdsUpdated)
            }
            noDot
          />
          {(selectedTagIds.length > 0 || selectedScopeIds.length > 0) && (
            <button className="underline" onClick={handleClickReset}>
              Reset
            </button>
          )}
        </div>

        <hr className="h-px w-full bg-whiteHighlight border-0"></hr>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full">
        <AnimatePresence>
          {data.allSanityProject.edges.map((project: any, index: number) => {
            const projectVisible = showProject(project);
            const thumbnailImg = getImage(project.node.thumbnail.asset);

            return (
              projectVisible && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: DURATION_FAST,
                  }}
                  layout
                >
                  <ProjectPreview
                    title={project.node.title}
                    year={project.node.year}
                    scope={project.node.scope.title}
                    thumbnailImg={thumbnailImg}
                    slug={project.node.slug.current}
                    tags={project.node.tags.map((tag: any) => {
                      return {
                        name: tag.title,
                        hexColorString: tag.color,
                      };
                    })}
                  />
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
