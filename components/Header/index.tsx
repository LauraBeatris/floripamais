import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { HideAt, ShowAt } from "react-with-breakpoints";

import { scrollDuration } from "constants/scroll";

import MobileNavbar from "./MobileNavbar";
import { headerNavbarLinks } from "./constants";

const Header: React.FC = () => (
  <header className="bg-black w-screen z-10 fixed flex items-center justify-between py-4 px-8 h-header-mobile md:h-header-desktop">
    <div className="flex items-center w-full justify-between max-w-screen-lg mx-auto">
      <div className="md:h-20 md:w-20 w-10 h-10 relative">
        <Image
          quality={100}
          title="Floripa+"
          src="/images/logo.png"
          alt="Floripa Mais Logo"
          loading="eager"
          layout="fill"
        />
      </div>

      <HideAt breakpoint="small">
        <ul className="flex items-center">
          {
            headerNavbarLinks.map(link => (
              <ScrollLink
                to={link.sectionId}
                key={link.label}
                spy
                smooth
                duration={scrollDuration}
                activeClass="text-yellow-100"
                className="text-white cursor-pointer hover:text-yellow-100 ml-8 font-semibold text-xl uppercase"
              >
                {link.label}
              </ScrollLink>
            ))
          }
        </ul>
      </HideAt>

      <ShowAt breakpoint="small">
        <MobileNavbar />
      </ShowAt>
    </div>
  </header>
);

export default Header;
