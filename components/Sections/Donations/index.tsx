import React from "react";

import Section from "components/Sections/Section";

import { DonationsSectionProps } from "./types";
import { donationsSectionFixtures, donationsSectionId } from "./constants";

const DonationsSection: React.FC<DonationsSectionProps> = ({
  text = donationsSectionFixtures.text,
  title = donationsSectionFixtures.title,
  sheetLink = donationsSectionFixtures.sheetLink,
  buttonText = donationsSectionFixtures.buttonText,
  emojiSymbol = donationsSectionFixtures.emojiSymbol,
}) => (
  <Section
    id={donationsSectionId}
    text={text}
    title={title}
    buttonText={buttonText}
    emojiSymbol={emojiSymbol}
    touchableHref={sheetLink}
  />
);

export default DonationsSection;
