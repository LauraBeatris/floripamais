import React from "react";
import Image from "next/image";
import { HideAt, ShowAt } from "react-with-breakpoints";

import MaxWidthContainer from "components/MaxWidthContainer";
import ScrollLink from "components/ScrollLink";

import MobileNavbar from "./MobileNavbar";
import { headerId, headerNavbarLinks } from "./constants";

const Header: React.FC = () => (
  <header
    id={headerId}
    className="bg-black w-screen z-30 fixed flex items-center justify-between py-4 px-8 h-header-mobile md:h-header-desktop"
  >
    <MaxWidthContainer className="flex items-center w-full justify-between">
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
    </MaxWidthContainer>
  </header>
);

export default Header;
