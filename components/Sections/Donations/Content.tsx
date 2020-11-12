import React from "react";

import Section from "components/Sections/Section";

import { DonationsSectionContentProps } from "./types";
import { donationsSectionContent, donationsSectionId } from "./constants";

const DonationsSectionContent: React.FC<DonationsSectionContentProps> = ({
  text = donationsSectionContent.text,
  title = donationsSectionContent.title,
  buttonText = donationsSectionContent.buttonText,
  touchableHref = donationsSectionContent.touchableHref,
  emojiSymbol = donationsSectionContent.emojiSymbol,
}) => (
  <Section
    id={donationsSectionId}
    text={text}
    title={title}
    buttonText={buttonText}
    touchableHref={touchableHref}
    emojiSymbol={emojiSymbol}
  />
);

export default DonationsSectionContent;
