import React from "react";

import TeamMembersSlider from "components/Slider/TeamMembersSlider";
import Section from "components/Sections/Section";
import { BackgroundVariant } from "styles/variants";

import { TeamMembersSectionProps } from "./types";
import { teamMembersSectionFixtures, teamMembersSectionId } from "./constants";

const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({
  text = teamMembersSectionFixtures.text,
  title = teamMembersSectionFixtures.title,
  teamMembers = teamMembersSectionFixtures.teamMembers,
}) => (
  <Section
    id={teamMembersSectionId}
    text={text}
    title={title}
    variant={BackgroundVariant.Secondary}
  >
    <div className="w-full mt-12">
      <TeamMembersSlider teamMembers={teamMembers} />
    </div>
  </Section>
);

export default TeamMembersSection;
