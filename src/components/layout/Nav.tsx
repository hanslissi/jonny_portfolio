import React from "react";

const Nav = () => {
  return (
    <header className="fixed w-full flex justify-center pt-6 top-0 z-50">
      <nav className="bg-brightSecondaryBg backdrop-blur-md border-[0.5px] rounded-full text-white flex flex-row justify-center items-center px-1 py-1 gap-2">
        <a
          href="#home"
          className="px-4 py-1 rounded-full hover:bg-whiteHighlight"
        >
          Home
        </a>
        <a
          href="#about-me"
          className="px-4 py-1 rounded-full hover:bg-whiteHighlight"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="px-4 py-1 rounded-full hover:bg-whiteHighlight"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-1 rounded-full hover:bg-whiteHighlight"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Nav;
