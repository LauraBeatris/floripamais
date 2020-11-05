import React from "react";

import { missionSectionContent, missionSectionId } from "./constants";
import { MissionSectionContentProps } from "./types";
import Section from "../Section";
import { SectionVariant } from "../Section/types";

const MissionSectionContent: React.FC<MissionSectionContentProps> = ({
  content = missionSectionContent,
}) => (
  <section
    id={missionSectionId}
    className="flex flex-col bg-white-shade"
  >
    {
      content.map(({ title, emoji, text }) => (
        <Section
          key={title}
          text={text}
          title={title}
          variant={SectionVariant.Primary}
          emojiSymbol={emoji}
          className="pt-0 first:pt-16"
        />
      ))
    }
  </section>
);

export default MissionSectionContent;
