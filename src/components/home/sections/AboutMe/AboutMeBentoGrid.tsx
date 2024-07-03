import React from "react";
import TechLogoCardLink from "../../../common/TechLogoCard";
import imgLinkedin from "../../../../images/logos/linkedin.png";
import imgThreads from "../../../../images/logos/threads.png";
import imgGithub from "../../../../images/logos/github.png";
import LogoLinkCard from "../../../common/LogoLinkCard";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import P5Wrapper from "../../../common/P5Wrapper";
import CVGitGraphSketch from "./CVGitGraphSketch";
import InfiniteHorizontalCarousel from "../../../common/InfiniteHorizontalCarousel";
import { Variants, motion } from "framer-motion";
import { DURATION_FAST } from "../../../../constants/animationConstants";

const imgLinkedInPath = "../../../../images/logos/linkedin.png";
const imgThreadsPath = "../../../../images/logos/threads.png";
const imgGithubPath = "../../../../images/logos/github.png";

const tapScaleVariants: Variants = {
  idle: {
    scale: 1,
    transition: {
      duration: DURATION_FAST,
    },
  },
  hover: {
    scale: 1.05,
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

  const tools = data.allSanityProjectTool.edges.map((tool, index) => {
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
  });

  return (
    <div className="relative w-full max-w-[920px] grid grid-cols-7 grid-rows-3 gap-4 md:gap-8">
      <div className="col-span-7 md:col-span-5 glasscard-dark p-4 md:p-8 flex flex-col justify-between">
        <div className="flex flex-row gap-2">
          <StaticImage
            src="../../../../images/jonny/jonny_dark_smiling_profile.jpg"
            alt="Jonny Profile Image"
            className="h-16 aspect-square rounded-full"
          />
          <div className="flex flex-col justify-center">
            <h3>Johannes Riedmüller</h3>
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
      <div className="col-span-7 md:col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
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
          href="https://www.linkedin.com/in/johannes-riedm%C3%BCller-87a643317/"
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
          href="https://www.threads.net/@jonny_2.1"
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
          href="https://github.com/hanslissi"
          glass
        />
      </div>
      <div className="col-span-3 glasscard-dark pb-4 md:pb-8 hidden md:flex flex-col gap-4 justify-between overflow-hidden">
        <StaticImage
          src="../../../../images/gatsby_cover.png"
          alt="Gatsby Logo"
          className="h-full object-cover"
        ></StaticImage>
        <div className="px-4 md:px-8">
          <h3>Continuously Growing</h3>
          <p className="mt-2">
            I’m currently learning GatsbyJS in my freetime!
          </p>
        </div>
      </div>
      <div className="col-span-7 md:col-span-4 glasscard-dark py-4 md:py-8 flex flex-col justify-between">
        <div className="px-4 md:px-8">
          <h3>Allrounder</h3>
          <p className="mt-2">
            As I like discovering and learning new tools and technologies, here
            is a list of tech I’ve come familiar with
          </p>
        </div>
        <InfiniteHorizontalCarousel>{tools}</InfiniteHorizontalCarousel>
      </div>
      <div className="min-h-[250px] col-span-7 md:col-span-5 glasscard-dark pt-4 md:pt-8 flex flex-col gap-4 justify-between overflow-hidden">
        <div className="flex justify-between px-4 md:px-8 ">
          <div>
            <h3>Life (git)graph</h3>
            <p className="mt-2">My Curriculum Vitae in a git graph form</p>
          </div>
          <motion.a
            className="rounded-full whitespace-nowrap bg-gradient-to-br from-secondary to-primary animate-gradient-xy border-[0.5px] h-fit px-5 py-3"
            variants={tapScaleVariants}
            initial="idle"
            whileTap="tapped"
            whileHover="hover"
            download={"Johannes_Riedmueller_CV.pdf"}
            href="/files/Johannes_Riedmueller_CV.pdf"
          >
            Download CV
          </motion.a>
        </div>
        <P5Wrapper sketch={CVGitGraphSketch} />
      </div>
      <StaticImage
        src="../../../../images/jonny/jonny_dark_proud.jpg"
        alt="Jonny Profile Image"
        className="col-span-7 min-h-[200px] md:col-span-2 card-dark"
      />
    </div>
  );
};

export default AboutMeBentoGrid;
