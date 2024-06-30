import { Link } from "gatsby";
import React from "react";
import imgBackArrow from "../../images/icons/back_arrow.svg";

interface NavProps {
  backbuttonInfo?: {title: string, href: string};
}

const Nav = ({ backbuttonInfo }: NavProps) => {
  return (
    <header className="fixed w-full flex justify-center pt-6 top-0 z-50">
      <nav className="relative container mx-auto">
        {backbuttonInfo && (
          <Link to={backbuttonInfo.href}
            className="absolute top 0 left-0 backdrop-blur-md border-[0.5px] rounded-full flex flex-row justify-center px-4 py-2 gap-2"
          >
            <img
              src={imgBackArrow}
            />
            {backbuttonInfo.title}
          </Link>
        )}
        <ul className="absolute top-0 left-1/2 -translate-x-1/2 bg-brightSecondaryBg backdrop-blur-md border-[0.5px] rounded-full flex flex-row justify-center items-center p-1 gap-2">
          <Link
            to="/#home"
            className="px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
          >
            Home
          </Link>
          <Link
            to="/#about-me"
            className="px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
          >
            About Me
          </Link>
          <Link
            to="/#projects"
            className="px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            className="px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
          >
            Contact
          </Link>
          <Link
            to="/playground"
            className="px-4 py-2 text-white rounded-full text-nowrap bg-primary hover:bg-secondary"
          >
            Playground
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
