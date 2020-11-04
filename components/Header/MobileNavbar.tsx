import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import useOnClickOutside from "use-onclickoutside";
import { AiOutlineClose } from "react-icons/ai";

import { headerNavbarLinks } from "./constants";

const NavbarMobile: React.FC = () => {
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false);

  const navElementRef = useRef(null);

  const toggleNavbarMobile = (): void => {
    setIsNavbarMobileOpen(prev => !prev);
  };

  useOnClickOutside(navElementRef, toggleNavbarMobile);

  return (
    <>
      <button
        className="cursor-pointer bg-none border-none outline-none focus:outline-none"
        type="button"
        onClick={toggleNavbarMobile}
      >
        <Image
          src="/icons/navbarButton.png"
          alt="Navbar Button"
          width={30}
          height={50}
          loading="eager"
        />
      </button>

      {
        isNavbarMobileOpen && (
          <nav ref={navElementRef} className="flex flex-col w-64 p-5 h-screen fixed bg-gray-900 top-0 right-0">
            <header className="w-full flex justify-end">
              <button
                type="button"
                onClick={toggleNavbarMobile}
                className="outline-none focus:outline-none"
              >
                <AiOutlineClose className="text-white text-2xl" color="#fff" />
              </button>
            </header>

            <ul className="w-full flex flex-col">
              {
                headerNavbarLinks.map(link => (
                  <Link
                    to={link.sectionId}
                    spy
                    key={link.label}
                    smooth
                    duration={500}
                    activeClass="text-yellow-100"
                    className="text-white cursor-pointer hover:text-yellow-100 mt-8 font-semibold text-xl uppercase"
                  >
                    {link.label}
                  </Link>
                ))
              }
            </ul>
          </nav>
        )
      }
    </>
  );
};

export default NavbarMobile;
