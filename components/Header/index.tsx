import React from "react";
import Image from "next/image";

import Navbar from "./Navbar";

const Header: React.FC = () => (
  <header className="bg-black w-full flex items-center justify-between py-4 px-8 relative">
    <div className="flex items-center w-full justify-between max-w-screen-lg mx-auto">
      <Image
        className="h-100"
        loading="eager"
        quality={100}
        width={100}
        height={100}
        src="/images/logo.png"
        alt="Floripa Mais Logo"
      />

      <Navbar />
    </div>
  </header>
);

export default Header;
