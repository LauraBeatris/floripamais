import React from "react";
import clsx from "clsx";

import MaxWidthContainer from "components/MaxWidthContainer";

import { FooterContentProps, FooterContentItemProps } from "./types";
import { footerContent, footerId } from "./constants";

const FooterContentItem: React.FC<FooterContentItemProps> = ({
  title,
  children,
}) => (
  <div className="flex flex-col items-start last:mt-5 md:last:mt-0 max-w-full">
    <h3 className="mb-5 text-orange-100 text-3xl font-semibold">{title}</h3>

    {children}
  </div>
);

const subtitleClassName = "break-words text-black max-w-full";

const borderSubtitleClassName = "hover:border-b-2 border-black";

const FooterContent: React.FC<FooterContentProps> = ({
  footerSocialMediasTitle = footerContent.socialMediasTitle,
  footerContactEmailTitle = footerContent.contactEmailTitle,
  socialMedias = footerContent.socialMedias,
  contactEmail = footerContent.contactEmail,
}) => {
  const mailTo = `mailto:${contactEmail}`;

  const socialMediaLinkClasses = clsx(subtitleClassName, "footer-social-media-link");

  const contactLinkClasses = clsx(subtitleClassName, borderSubtitleClassName);

  return (
    <footer
      id={footerId}
      className="mt-auto w-screen bg-white-light py-10 px-5 md:py-16 md:px-32"
    >
      <MaxWidthContainer className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        <FooterContentItem title={footerSocialMediasTitle}>
          <ul className="w-full flex">
            {
              socialMedias.map(socialMedia => (
                <a
                  rel="noreferrer"
                  key={socialMedia.href}
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

        <FooterContentItem title={footerContactEmailTitle}>
          <a href={mailTo} className={contactLinkClasses}>
            {contactEmail}
          </a>
        </FooterContentItem>
      </MaxWidthContainer>
    </footer>
  );
};

export default FooterContent;
