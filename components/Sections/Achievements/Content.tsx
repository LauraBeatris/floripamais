import React from "react";

import MaxWidthContainer from "components/MaxWidthContainer";

import { achievementsSectionContent } from "./constants";
import { AchievementsSectionContentProps, AchievementItemProps } from "./types";

const AchievementItem: React.FC<AchievementItemProps> = ({
  achievedNumber,
  label,
}) => (
  <div className="flex flex-col items-center md:px-0">
    <h2 className="text-white text-6xl font-bold">
      {achievedNumber}
    </h2>

    <h3 className="text-white text-base uppercase font-medium w-24">
      {label}
    </h3>
  </div>
);

const AchievementsSectionContent: React.FC<AchievementsSectionContentProps> = ({
  title = achievementsSectionContent.title,
  freeEventsLabel = achievementsSectionContent.freeEventsLabel,
  freeEventsNumber = achievementsSectionContent.freeEventsNumber,
  organizationsHelpedLabel = achievementsSectionContent.organizationsHelpedLabel,
  organizationsHelpedNumber = achievementsSectionContent.organizationsHelpedNumber,
}) => (
  <section className="flex text-center flex-col px-5 md:px-0 py-10 bg-black w-full">
    <MaxWidthContainer maxWidth="max-w-lg">
      <h1 className="text-white text-lg uppercase font-medium">
        {title}
      </h1>

      <div className="mt-5 w-full grid grid-cols-2 gap-x-5">
        <AchievementItem
          label={freeEventsLabel}
          achievedNumber={freeEventsNumber}
        />

        <AchievementItem
          label={organizationsHelpedLabel}
          achievedNumber={organizationsHelpedNumber}
        />
      </div>
    </MaxWidthContainer>
  </section>
);

export default AchievementsSectionContent;
