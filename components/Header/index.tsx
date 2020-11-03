import React from "react";
import Image from "next/image";
import { HideAt, ShowAt } from "react-with-breakpoints";

import MobileNavbar from "./MobileNavbar";
import { headerNavbarLinks } from "./constants";

const Header: React.FC = () => (
  <header className="bg-black w-screen flex items-center justify-between py-4 px-8 relative">
    <div className="flex items-center w-full justify-between max-w-screen-lg mx-auto">
      <Image
        className="md:h-20 h-10"
        loading="eager"
        quality={100}
        title="Floripa+"
        src="/images/logo.png"
        alt="Floripa Mais Logo"
        unsized
      />

      <HideAt breakpoint="small">
        <ul className="flex items-center">
          {headerNavbarLinks.map(link => (
            <li
              key={link.label}
              className="text-white ml-8 font-semibold text-xl uppercase"
            >
              {link.label}
            </li>
          ))}
        </ul>
      </HideAt>

      <ShowAt breakpoint="small">
        <MobileNavbar />
      </ShowAt>
    </div>
  </header>
);

export default Header;
