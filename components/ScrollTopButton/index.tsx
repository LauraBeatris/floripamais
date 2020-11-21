import React from "react";
import { FaChevronUp } from "react-icons/fa";

import ScrollLink from "components/ScrollLink";
import { introductionSectionId } from "components/Sections/Introduction/constants";

const ScrollTopButton: React.FC = () => (
  <ScrollLink to={introductionSectionId} className="fixed bottom-2 right-2">
    <button type="button" className="flex justify-center items-center bg-orange-100 w-10 h-10 rounded-full">
      <FaChevronUp className="text-white" />
    </button>
  </ScrollLink>
);

export default ScrollTopButton;
