import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import Button from "components/Button";
import { ButtonVariant } from "components/Button/types";
import { scrollDuration } from "constants/scroll";

import { IntroductionSectionContentProps } from "./types";
import { introductionSectionId, introductionSectionContent } from "./constants";

const Content: React.FC<IntroductionSectionContentProps> = ({
  backgroundSrc = introductionSectionContent.backgroundSrc,
  buttonText = introductionSectionContent.buttonText,
  title = introductionSectionContent.title,
}) => (
  <section
    id={introductionSectionId}
    className="flex items-center py-10 px-5 md:p-20 relative h-section-introduction bg-white"
  >
    <Image
      src={backgroundSrc}
      className="absolute z-10 object-cover object-center h-full w-full"
      layout="fill"
      quality={100}
      loading="eager"
    />

    <div className="max-w-screen-lg w-full mx-auto z-20">
      <h1 className="text-gray-200 w-full md:w-30 font-bold text-4xl">
        {title}
      </h1>

      {/* TODO -> Refer id of the mission section */}
      <ScrollLink duration={scrollDuration} smooth to="mission-section">
        <Button
          variant={ButtonVariant.Secondary}
          buttonContainerClassName="mt-10 w-full md:w-22"
        >
          {buttonText}
        </Button>
      </ScrollLink>
    </div>
  </section>
);

export default Content;
