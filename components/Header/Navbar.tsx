import React, { useRef, useState } from "react";
import Image from "next/image";
import useOnClickOutside from "use-onclickoutside";

const Navbar: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navElementRef = useRef(null);

  const toggleNavbar = (): void => {
    setIsNavbarOpen(prev => !prev);
  };

  useOnClickOutside(navElementRef, toggleNavbar);

  return (
    <>
      <button
        className="cursor-pointer bg-none border-none outline-none focus:outline-none"
        type="button"
        onClick={toggleNavbar}
      >
        <Image
          src="/icons/navbarButton.png"
          alt="Navbar Button"
          width={30}
          height={50}
        />
      </button>

      {
        isNavbarOpen && (
          <nav ref={navElementRef} className="w-64 h-screen fixed bg-gray-900 top-0 right-0" />
        )
      }
    </>
  );
};

export default Navbar;
