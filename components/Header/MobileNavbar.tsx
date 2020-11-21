import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import useOnClickOutside from "use-onclickoutside";
import { AiOutlineClose } from "react-icons/ai";

import ScrollLink from "components/ScrollLink";

import { headerNavbarLinks } from "./constants";

const navbarInitialMotionStyle = {
  top: 0,
  right: 0,
  opacity: 0,
  left: "100%",
};

const navbarMotionStyles = {
  exit: navbarInitialMotionStyle,
  initial: navbarInitialMotionStyle,
  animate: {
    right: 0,
    opacity: 1,
    left: "unset",
  },
};

const NavbarMobile: React.FC = () => {
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false);

  const navElementRef = useRef(null);

  const openNavbarMobile = (): void => {
    setIsNavbarMobileOpen(true);
  };

  const closeNavbarMobile = (): void => {
    setIsNavbarMobileOpen(false);
  };

  useOnClickOutside(navElementRef, closeNavbarMobile);

  return (
    <>
      <button
        aria-label="Button to open navbar"
        className="flex items-center cursor-pointer bg-none border-none outline-none focus:outline-none"
        onClick={openNavbarMobile}
        type="button"
      >
        <Image
          src="/icons/navbarButton.png"
          alt="Navbar Button"
          width={30}
          height={50}
          loading="eager"
        />
      </button>

      <AnimatePresence>
        {
          isNavbarMobileOpen && (
            <motion.nav
              key="navbar"
              ref={navElementRef}
              className="flex flex-col w-64 p-5 h-screen fixed bg-gray-900"
              {...navbarMotionStyles}
            >
              <header className="w-full flex justify-end">
                <button
                  type="button"
                  onClick={closeNavbarMobile}
                  className="outline-none focus:outline-none"
                >
                  <AiOutlineClose className="text-white text-2xl" color="#fff" />
                </button>
              </header>

              <ul className="w-full flex flex-col">
                {
                  headerNavbarLinks.map(link => (
                    <ScrollLink
                      to={link.sectionId}
                      key={link.label}
                      onClick={closeNavbarMobile}
                      activeClass="text-yellow-100"
                      className="text-white cursor-pointer hover:text-yellow-100 mt-8 font-semibold text-xl uppercase"
                    >
                      {link.label}
                    </ScrollLink>
                  ))
                }
              </ul>
            </motion.nav>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default NavbarMobile;
