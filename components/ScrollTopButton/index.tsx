import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import ScrollLink from "components/ScrollLink";
import { introductionSectionId } from "components/Sections/Introduction/constants";

import { ScrollTopButtonProps } from "./types";

const buttonInitialMotionStyle = {
  opacity: 0,
};

const buttonMotionStyles = {
  exit: buttonInitialMotionStyle,
  initial: buttonInitialMotionStyle,
  animate: {
    opacity: 1,
  },
};

const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ isVisible }) => (
  <ScrollLink to={introductionSectionId} className="fixed bottom-2 right-2 z-10">
    <AnimatePresence>
      {
        isVisible && (
          <motion.button
            type="button"
            className="flex justify-center items-center bg-orange-100 w-10 h-10 rounded-full"
            {...buttonMotionStyles}
          >
            <FaChevronUp className="text-white" />
          </motion.button>
        )
      }
    </AnimatePresence>
  </ScrollLink>
);

export default ScrollTopButton;
