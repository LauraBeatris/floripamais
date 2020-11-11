import React from "react";

import TeamSlider from "components/Slider/TeamSlider";
import Section from "components/Sections/Section";

import { TeamSectionContentProps } from "./types";
import { teamSectionContent, teamSectionId } from "./constants";

const TeamSectionContent: React.FC<TeamSectionContentProps> = ({
  text = teamSectionContent.text,
  title = teamSectionContent.title,
  members = teamSectionContent.members,
}) => (
  <Section
    id={teamSectionId}
    title={title}
    text={text}
  >
    <div className="w-full mt-12">
      <TeamSlider members={members} />
    </div>
  </Section>
);

export default TeamSectionContent;
