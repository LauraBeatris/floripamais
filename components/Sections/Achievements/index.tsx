import React from "react";

import MaxWidthContainer from "components/MaxWidthContainer";

import { achievementsSectionFixtures } from "./constants";
import { AchievementsSectionProps, AchievementItemProps } from "./types";

const AchievementItem: React.FC<AchievementItemProps> = ({
  value,
  label,
}) => (
  <div className="flex flex-col items-center md:px-0">
    <h2 className="text-white text-6xl font-bold">
      {value}
    </h2>

    <h3 className="text-white text-base uppercase font-medium w-24">
      {label}
    </h3>
  </div>
);

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  title = achievementsSectionFixtures.title,
  achievements = achievementsSectionFixtures.achievements,
}) => (
  <section className="flex text-center flex-col px-5 md:px-0 py-10 bg-black w-full">
    <MaxWidthContainer maxWidth="max-w-lg">
      <h1 className="text-white text-lg uppercase font-medium">
        {title}
      </h1>

      <div className="mt-5 w-full grid grid-cols-2 gap-x-5">
        {
          achievements.map(achievement => (
            <AchievementItem
              key={achievement.label}
              label={achievement.label}
              value={achievement.value}
            />
          ))
        }
      </div>
    </MaxWidthContainer>
  </section>
);

export default AchievementsSection;
