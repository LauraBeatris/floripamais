import React from "react";

import Section from "components/Sections/Section";
import { BackgroundVariant } from "styles/variants";

import { orgInfoSectionFixtures, orgInfoId } from "./constants";
import { OrgInfoSectionProps } from "./types";

const OrgInfoSection: React.FC<OrgInfoSectionProps> = ({ orgInfos = orgInfoSectionFixtures }) => (
  <section
    id={orgInfoId}
    className="flex flex-col bg-white-shade"
  >
    {
      orgInfos.map(({ title, emojiSymbol, text }) => (
        <Section
          key={title}
          text={text}
          title={title}
          variant={BackgroundVariant.Primary}
          emojiSymbol={emojiSymbol}
          className="pt-0 first:pt-16"
        />
      ))
    }
  </section>
);

export default OrgInfoSection;
