import { Link } from "gatsby";
import React from "react";
import hamburgerIcon from "../../images/icons/hamburger.svg";
import backArrowIcon from "../../images/icons/back_arrow.svg";
import clsx from "clsx";

interface NavProps {
  backbuttonInfo?: { title: string; href: string };
}

const Nav = ({ backbuttonInfo }: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClickMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full flex justify-center pt-6 top-0 z-50">
      <nav className="relative container mx-auto">
        {backbuttonInfo && (
          <Link
            to={backbuttonInfo.href}
            className="absolute top 0 left-0 backdrop-blur-md border-[0.5px] rounded-full flex flex-row justify-center items-center px-5 py-3 gap-2"
          >
            <img src={backArrowIcon} alt="Back Arrow" className="h-full" />
            {backbuttonInfo.title}
          </Link>
        )}
        <div
          className={clsx(
            "absolute top-0 right-0 md:left-1/2 md:-translate-x-1/2 bg-brightSecondaryBg backdrop-blur-md border-[0.5px] rounded-full w-fit",
            {
              "md:left-auto md:translate-x-0 xl:left-1/2 xl:-translate-x-1/2":
                backbuttonInfo,
            }
          )}
        >
          <div className="relative flex flex-col justify-center">
            <button
              className="p-4 md:p-0 rounded-full"
              onClick={handleClickMenuToggle}
            >
              <img
                src={hamburgerIcon}
                alt="Back Arrow"
                className="block md:hidden h-full"
              />
            </button>
            <div
              className={clsx(
                "absolute md:relative top-full right-0 mt-2 md:mt-0",
                {
                  "hidden md:block": !isMenuOpen,
                }
              )}
            >
              <ul className="flex flex-col md:flex-row justify-center md:items-center p-1 gap-2 bg-brightSecondaryBg md:bg-none backdrop-blur-md md:backdrop-blur-none border-[0.5px] md:border-none rounded-3xl">
                <li>
                  <Link
                    to="/#home"
                    className="block px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#about-me"
                    className="block px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#projects"
                    className="block px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contact"
                    className="block px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/playground"
                    className="block px-4 py-2 text-white rounded-full text-nowrap bg-primary hover:bg-secondary"
                  >
                    Playground
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
