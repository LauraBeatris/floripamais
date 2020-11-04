import React from "react";
import clsx from "clsx";

import { FooterContentProps, FooterContentItemProps } from "./types";
import { footerContent } from "./constants";

const FooterContentItem: React.FC<FooterContentItemProps> = ({
  title,
  children,
}) => (
  <div className="flex flex-col items-start last:mt-5 md:last:mt-0 max-w-full">
    <h3 className="mb-5 text-orange-100 text-3xl font-semibold">{title}</h3>

    {children}
  </div>
);

const subtitleClassName = "break-words text-white max-w-full";

const FooterContent: React.FC<FooterContentProps> = ({
  footerSocialMediasTitle = footerContent.socialMediasTitle,
  footerContactTitle = footerContent.contactTitle,
  socialMedias = footerContent.socialMedias,
  email = footerContent.email,
}) => {
  const mailTo = `mailto:${email}`;

  const socialMediaLinkClasses = clsx([subtitleClassName, "footer-social-media-link"]);

  return (
    <footer className="flex flex-col m-t-auto md:flex-row justify-between items-start md:items-center w-screen bg-black py-10 px-5 md:py-16 md:px-32">
      <FooterContentItem title={footerSocialMediasTitle}>
        <ul className="w-full flex">
          {
            socialMedias.map(socialMedia => (
              <a
                key={socialMedia.href}
                href={socialMedia.href}
                className={socialMediaLinkClasses}
              >
                <span className="hover:border-b-2">
                  {socialMedia.label}
                </span>
              </a>
            ))
          }
        </ul>
      </FooterContentItem>

      <FooterContentItem title={footerContactTitle}>
        <a href={mailTo} className={subtitleClassName}>{email}</a>
      </FooterContentItem>
    </footer>
  );
};

export default FooterContent;
