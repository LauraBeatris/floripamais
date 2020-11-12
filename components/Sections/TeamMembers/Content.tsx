import React from "react";

import TeamMembersSlider from "components/Slider/TeamMembersSlider";
import Section from "components/Sections/Section";

import { TeamMembersSectionContentProps } from "./types";
import { teamMembersSectionContent, teamMembersSectionId } from "./constants";

const TeamMembersSectionContent: React.FC<TeamMembersSectionContentProps> = ({
  text = teamMembersSectionContent.text,
  title = teamMembersSectionContent.title,
  members = teamMembersSectionContent.teamMembers,
}) => (
  <Section
    id={teamMembersSectionId}
    title={title}
    text={text}
  >
    <div className="w-full mt-12">
      <TeamMembersSlider members={members} />
    </div>
  </Section>
);

export default TeamMembersSectionContent;
