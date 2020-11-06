import React from "react";

import Section from "components/Sections/Section";
import { SectionVariant } from "components/Sections/Section/types";

import { ActionsSectionContentProps } from "./types";
import { actionsSectionContent } from "./constants";

const ActionsSectionContent: React.FC<ActionsSectionContentProps> = ({
  text = actionsSectionContent.text,
  title = actionsSectionContent.title,
}) => (
  <Section
    text={text}
    title={title}
    variant={SectionVariant.Primary}
  />
);

export default ActionsSectionContent;
