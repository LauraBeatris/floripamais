import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HideAt, ShowAt } from "react-with-breakpoints";

import MaxWidthContainer from "components/MaxWidthContainer";
import ScrollLink from "components/ScrollLink";
import { introductionSectionId } from "components/Sections/Introduction/constants";

import MobileNavbar from "./MobileNavbar";
import { headerId, headerNavbarLinks } from "./constants";

const Header: React.FC = () => (
  <header
    id={headerId}
    className="bg-black w-screen z-30 fixed flex items-center justify-between py-4 px-8 h-header-mobile md:h-header-desktop"
  >
    <MaxWidthContainer className="flex items-center w-full justify-between">
      <ScrollLink to={introductionSectionId}>
        <Link href="/">
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
        </Link>
      </ScrollLink>

      <HideAt breakpoint="small">
        <nav>
          <ul className="flex items-center">
            {
              headerNavbarLinks.map(link => (
                <li key={link.label}>
                  <ScrollLink
                    to={link.sectionId}
                    activeClass="text-yellow-100"
                    className="text-white cursor-pointer hover:text-yellow-100 ml-8 font-semibold text-xl uppercase"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))
            }
          </ul>
        </nav>
      </HideAt>

      <ShowAt breakpoint="small">
        <MobileNavbar />
      </ShowAt>
    </MaxWidthContainer>
  </header>
);

export default Header;
