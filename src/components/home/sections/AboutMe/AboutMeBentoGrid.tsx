import React from "react";
import TechLogoCardLink from "../../../common/TechLogoCard";
import imgLinkedin from "../../../../images/logos/linkedin.png";
import imgThreads from "../../../../images/logos/threads.png";
import imgGithub from "../../../../images/logos/github.png";
import imgGatsbyCover from "../../../../images/gatsby_cover.png";
import imgJonnyChair from "../../../../images/jonny/jonny_chair.png";
import LogoLinkCard from "../../../common/LogoLinkCard";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const imgLinkedInPath = "../../../../images/logos/linkedin.png";
const imgThreadsPath = "../../../../images/logos/threads.png";
const imgGithubPath = "../../../../images/logos/github.png";

const AboutMeBentoGrid = () => {
  const data: Queries.AllProjectToolsQuery = useStaticQuery(graphql`
    query AllProjectTools {
      allSanityProjectTool {
        edges {
          node {
            title
            toolLogo {
              asset {
                gatsbyImageData(
                  width: 80
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        } 
      }
    }
  `);

  return (
    <div className="relative w-full max-w-[920px] h-[1128px] grid grid-cols-7 grid-rows-3 gap-8">
      <div className="col-span-5 glasscard-dark p-8 flex flex-col justify-between">
        <div className="flex flex-row gap-2">
          <StaticImage
            src={imgGithubPath}
            alt="Jonny Profile Image"
            className="h-full rounded-full"
          />
          <div className="flex flex-col justify-center">
            <h4>Johannes Riedmüller</h4>
            <p>aka Jonny</p>
          </div>
        </div>
        <h2>I'm obsessed with well designed user interfaces</h2>
        <p>
          Whenever I see cool UIs I get very excited! Not only do I love
          figuring out what makes these interfaces good, unique and interesting,
          but I’m also into making UI-Designs myself. And since I like making
          stuff real, I program them with friends or by myself.
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
        <LogoLinkCard
          img={(props) => (
            <StaticImage
              className={props.className}
              alt={props.alt}
              src={imgLinkedInPath}
            />
          )}
          imgSrc={imgLinkedin}
          title="LinkedIn"
          href="https://www.linkedin.com"
          glass
        />
        <LogoLinkCard
          img={(props) => (
            <StaticImage
              className={props.className}
              alt={props.alt}
              src={imgThreadsPath}
            />
          )}
          imgSrc={imgThreads}
          title="Threads"
          href="https://www.threads.net"
          glass
        />
        <LogoLinkCard
          className="col-span-2"
          img={(props) => (
            <StaticImage
              className={props.className}
              alt={props.alt}
              src={imgGithubPath}
            />
          )}
          imgSrc={imgGithub}
          title="GitHub"
          href="https://github.com"
          glass
        />
      </div>
      <div className="col-span-3 glasscard-dark pb-8 flex flex-col gap-4 justify-between overflow-hidden">
        <img
          src={imgGatsbyCover}
          alt="Github Logo"
          className="h-full object-cover"
        ></img>
        <div className="px-8">
          <h3>Continuously Growing</h3>
          <p className="mt-2">
            I’m currently learning GatsbyJS in my freetime!
          </p>
        </div>
      </div>
      <div className="col-span-4 glasscard-dark py-8 flex flex-col justify-between">
        <div className="px-8">
          <h3>Allrounder</h3>
          <p className="mt-2">
            As I like discovering and learning new tools and technologies, here
            is a list of tech I’ve come familiar with
          </p>
        </div>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar">
          {data.allSanityProjectTool.edges.map((tool, index) => {
            const toolLogo = tool.node.toolLogo;
            if (!toolLogo) {
              return null;
            }
            return (
              <TechLogoCardLink
                key={index}
                img={getImage(toolLogo.asset)}
                imgSrc={toolLogo.asset?.gatsbyImageData.images.fallback?.src}
                title={tool.node.title ?? ""}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-5 glasscard-dark pt-8 flex flex-col gap-4 justify-between overflow-hidden">
        <div className="px-8">
          <h3>Life (git)graph</h3>
          <p className="mt-2">My Curriculum Vitae in a git graph form</p>
        </div>
      </div>
      <div
        className="col-span-2 glasscard-dark bg-cover"
        style={{ backgroundImage: `url(${imgJonnyChair})` }}
      />
    </div>
  );
};

export default AboutMeBentoGrid;
