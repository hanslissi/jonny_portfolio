import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import hamburgerIcon from "../../images/icons/hamburger.svg";
import backArrowIcon from "../../images/icons/back_arrow.svg";
import { AnimatePresence, Variants, motion } from "framer-motion";
import clsx from "clsx";
import {
  DURATION_FAST,
  DURATION_SUPERFAST,
} from "../../constants/animationConstants";

interface NavProps {
  backbuttonInfo?: { title: string; href: string };
}

const tapScaleVariants: Variants = {
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

const Nav = ({ backbuttonInfo }: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full flex justify-center pt-6 top-0 z-50">
      <nav className="relative container mx-auto">
        {backbuttonInfo && (
          <motion.div
            className="absolute top 0 left-0 rounded-full ml-4"
            variants={tapScaleVariants}
            whileTap="tapped"
            initial="idle"
          >
            <Link
              to={backbuttonInfo.href}
              className="glasscard-darkSecondary rounded-full flex flex-row justify-center items-center gap-2 px-5 py-3"
            >
              <img src={backArrowIcon} alt="Back Arrow" className="h-full" />
              {backbuttonInfo.title}
            </Link>
          </motion.div>
        )}
        <div
          className={clsx(
            "w-fit absolute top-0 right-0 md:left-1/2 md:-translate-x-1/2 mr-4",
            {
              "md:left-auto md:translate-x-0 xl:left-1/2 xl:-translate-x-1/2":
                backbuttonInfo,
            }
          )}
          ref={dropdownRef}
        >
          <div className="relative flex flex-col justify-center">
            <motion.button
              className="md:hidden p-4 md:p-0 glasscard-darkSecondary rounded-full"
              onClick={handleClickMenuToggle}
              variants={tapScaleVariants}
              whileTap="tapped"
              initial="idle"
            >
              <img src={hamburgerIcon} alt="Back Arrow" className="h-full" />
            </motion.button>
            <AnimatePresence>
              {(isMenuOpen || !isMobile) && (
                <motion.ul
                  className="absolute md:relative flex flex-col md:flex-row justify-center md:items-center p-1 gap-2 top-full right-0 glasscard-darkSecondary rounded-3xl md:rounded-full mt-2 md:mt-0"
                  initial={{ scale: 0.8, y: -50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{
                    duration: DURATION_FAST,
                  }}
                >
                  <motion.li
                    variants={tapScaleVariants}
                    whileTap="tapped"
                    initial="idle"
                  >
                    <Link
                      to="/#home"
                      className="block px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
                    >
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={tapScaleVariants}
                    whileTap="tapped"
                    initial="idle"
                  >
                    <Link
                      to="/#about-me"
                      className="block px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
                    >
                      About Me
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={tapScaleVariants}
                    whileTap="tapped"
                    initial="idle"
                  >
                    <Link
                      to="/#projects"
                      className="block px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
                    >
                      Projects
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={tapScaleVariants}
                    whileTap="tapped"
                    initial="idle"
                  >
                    <Link
                      to="/#contact"
                      className="block px-4 py-2 rounded-full text-nowrap hover:bg-whiteHighlight"
                    >
                      Contact
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={tapScaleVariants}
                    whileTap="tapped"
                    initial="idle"
                  >
                    <Link
                      to="/playground"
                      className="block px-4 py-2 text-white rounded-full text-nowrap bg-primary transition-colors duration-500 hover:bg-secondary"
                    >
                      Playground
                    </Link>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
