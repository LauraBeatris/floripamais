import React from "react";

import MembersSlider from "components/Slider/MembersSlider";
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
      <MembersSlider members={members} />
    </div>
  </Section>
);

export default TeamSectionContent;
