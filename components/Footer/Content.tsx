import React from "react";
import clsx from "clsx";

import { FooterContentProps, FooterContentItemProps } from "./types";

const FooterContentItem: React.FC<FooterContentItemProps> = ({
  title,
  children,
}) => (
  <div className="flex flex-col items-start last:mt-5 md:last:mt-0">
    <h3 className="mb-5 text-orange-100 text-3xl font-semibold">{title}</h3>

    {children}
  </div>
);

const subtitleClassName = "text-white";

const FooterContent: React.FC<FooterContentProps> = ({
  footerSocialMediasTitle,
  footerContactTitle,
  socialMedias,
  email,
}) => {
  const mailTo = `mailto:${email}`;

  const socialMediaLinkClasses = clsx([subtitleClassName, "footer-social-media-link"]);

  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-center w-screen bg-black py-10 px-5 md:py-16 md:px-32">
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
