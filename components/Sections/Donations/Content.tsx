import React from "react";

import Section from "components/Sections/Section";

import { DonationsSectionContentProps } from "./types";
import { donationsSectionContent } from "./constants";

const DonationsSectionContent: React.FC<DonationsSectionContentProps> = ({
  text = donationsSectionContent.text,
  title = donationsSectionContent.title,
  buttonText = donationsSectionContent.buttonText,
  buttonLink = donationsSectionContent.buttonLink,
  emojiSymbol = donationsSectionContent.emojiSymbol,
}) => (
  <Section
    text={text}
    title={title}
    buttonText={buttonText}
    buttonLink={buttonLink}
    emojiSymbol={emojiSymbol}
  />
);

export default DonationsSectionContent;
