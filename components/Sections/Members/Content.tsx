import React from "react";

import MembersSlider from "components/Slider/MembersSlider";
import Section from "components/Sections/Section";

import { MembersSectionContentProps } from "./types";
import { membersSectionContent } from "./constants";

const MembersSectionContent: React.FC<MembersSectionContentProps> = ({
  text = membersSectionContent.text,
  title = membersSectionContent.title,
  members = membersSectionContent.members,
}) => (
  <Section title={title} text={text}>
    <div className="w-full mt-12">
      <MembersSlider members={members} />
    </div>
  </Section>
);

export default MembersSectionContent;
