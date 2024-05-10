import React from "react";
import TechLogoCardLink from "../../../common/ TechLogoCardLink";
import imgThreads from "../../../../images/logos/threads.png";
import imgGithub from "../../../../images/logos/github.png";
import imgLinkedIn from "../../../../images/logos/linkedin.png";

const AboutMeBentoGrid = () => {
  return (
    <div className="w-full max-w-[1000px] h-[1128px] mx-auto grid grid-cols-6 grid-rows-3 gap-8">
      <div className="col-span-4 bg-darkSecondaryBg rounded-3xl border-[0.5px] p-8 flex flex-col justify-between">
        <div className="flex flex-row gap-2">
          <img
            src={imgGithub}
            alt="Jonny Profile Image"
            className="h-full rounded-full"
          />
          <div className="flex flex-col justify-center">
            <h4>Johannes Riedmüller</h4>
            <p>aka Jonny</p>
          </div>
        </div>
        <h2>I'm obsessed with good looking user interfaces</h2>
        <p>
          Whenever I see cool UIs I get very excited! Not only do I love
          figuring out what makes these interfaces good, unique and interesting,
          but I’m also into making UI-Designs myself. And since I like making
          stuff real, I program them with friends or by myself.
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
        <TechLogoCardLink
          img={imgLinkedIn}
          alt="LinkedIn Logo"
          name="LinkedIn"
          href="https://www.linkedin.com"
        />
        <TechLogoCardLink
          img={imgThreads}
          alt="Threads Logo"
          name="Threads"
          href="https://www.threads.net"
        />
        <TechLogoCardLink
          className="col-span-2"
          img={imgGithub}
          alt="GitHub Logo"
          name="GitHub"
          href="https://github.com"
        />
      </div>
      <div className="col-span-2 bg-darkSecondaryBg rounded-3xl border-[0.5px] p-12"></div>
      <div className="col-span-4 bg-darkSecondaryBg rounded-3xl border-[0.5px] p-12"></div>
      <div className="col-span-4 bg-darkSecondaryBg rounded-3xl border-[0.5px] p-12"></div>
      <div className="col-span-2 bg-darkSecondaryBg rounded-3xl border-[0.5px] p-12"></div>
    </div>
  );
};

export default AboutMeBentoGrid;
