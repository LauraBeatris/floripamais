import React from "react";
import Image from "next/image";

import MaxWidthContainer from "components/MaxWidthContainer";
import Button from "components/Button";
import { ButtonVariant } from "components/Button/types";
import ScrollLink from "components/ScrollLink";

import { IntroductionSectionContentProps } from "./types";
import { introductionSectionId, introductionSectionContent } from "./constants";
import { missionSectionId } from "../Mission/constants";

const IntroductionSectionContent: React.FC<IntroductionSectionContentProps> = ({
  backgroundSrc = introductionSectionContent.backgroundSrc,
  buttonText = introductionSectionContent.buttonText,
  title = introductionSectionContent.title,
}) => (
  <section
    id={introductionSectionId}
    className="flex items-center py-10 px-5 md:p-20 relative h-section-introduction-mobile md:h-section-introduction-desktop bg-white"
  >
    <Image
      src={backgroundSrc}
      className="absolute z-10 object-cover object-center h-full w-full"
      layout="fill"
      quality={100}
      loading="eager"
    />

    <MaxWidthContainer className="z-20">
      <h1 className="text-gray-200 w-full md:w-30 font-bold text-4xl">
        {title}
      </h1>

      <ScrollLink to={missionSectionId}>
        <Button
          variant={ButtonVariant.Secondary}
          buttonContainerClassName="mt-10 w-full md:w-22"
        >
          {buttonText}
        </Button>
      </ScrollLink>
    </MaxWidthContainer>
  </section>
);

export default IntroductionSectionContent;
