import React from "react";
import clsx from "clsx";

import MaxWidthContainer from "components/MaxWidthContainer";

import { FooterProps, FooterContentItemProps } from "./types";
import { footerFixtures, footerId } from "./constants";

const FooterContentItem: React.FC<FooterContentItemProps> = ({
  title,
  children,
}) => (
  <div className="flex flex-col items-start last:mt-5 md:last:mt-0 max-w-full">
    <h3 className="mb-5 text-orange-100 text-3xl font-semibold">
      {title}
    </h3>

    {children}
  </div>
);

const subtitleClassName = "break-words text-white max-w-full";

const borderSubtitleClassName = "hover:border-b-2 border-white";

const Footer: React.FC<FooterProps> = ({
  socialMediasTitle = footerFixtures.socialMediasTitle,
  contactEmailTitle = footerFixtures.contactEmailTitle,
  socialMedias = footerFixtures.socialMedias,
  contactEmail = footerFixtures.contactEmail,
}) => {
  const mailTo = `mailto:${contactEmail}`;

  const socialMediaLinkClasses = clsx(subtitleClassName, "footer-social-media-link");

  const contactLinkClasses = clsx(subtitleClassName, borderSubtitleClassName);

  return (
    <footer
      id={footerId}
      className="mt-auto w-screen bg-black py-10 px-5 md:py-16 md:px-32"
    >
      <MaxWidthContainer className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        <FooterContentItem title={socialMediasTitle}>
          <ul className="w-full flex">
            {
              socialMedias.map(socialMedia => (
                <a
                  rel="noreferrer"
                  key={socialMedia.id}
                  href={socialMedia.href}
                  target="_blank"
                  className={socialMediaLinkClasses}
                >
                  <span className={borderSubtitleClassName}>
                    {socialMedia.label}
                  </span>
                </a>
              ))
            }
          </ul>
        </FooterContentItem>

        <FooterContentItem title={contactEmailTitle}>
          <a href={mailTo} className={contactLinkClasses}>
            {contactEmail}
          </a>
        </FooterContentItem>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
