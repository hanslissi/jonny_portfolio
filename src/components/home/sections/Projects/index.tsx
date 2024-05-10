import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import ProjectPreview from "../../../common/ProjectPreview";
import imgGatsbyCover from "../../../../images/gatsby_cover.png";

const Projects = () => {
  return (
    <SectionWrapper className="container mx-auto flex flex-col gap-16 items-center">
      <h1 className="text-center">Projects</h1>
      <div className="grid grid-cols-3 gap-8 w-full max-w-[1000px]">
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
        <ProjectPreview
          title="EinfachEinfach"
          scope="Educational Project"
          year={2024}
          thumbnailSrc={imgGatsbyCover}
          tags={[
            { name: "React", hexColorString: "#51A0D5" },
            { name: "TypeScript", hexColorString: "#FCFF80" },
          ]}
        />
      </div>
    </SectionWrapper>
  );
};

export default Projects;
