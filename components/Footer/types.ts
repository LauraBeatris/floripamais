export interface SocialMedia {
  href: string;
  label: string;
}

export interface FooterContentProps {
  footerSocialMediasTitle?: string;
  footerContactEmailTitle?: string;
  socialMedias?: SocialMedia[];
  contactEmail?: string;
}

export interface FooterContentItemProps {
  title: string;
}
