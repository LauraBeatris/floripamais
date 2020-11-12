export interface SocialMedia {
  href: string;
  label: string;
}

export interface FooterContentProps {
  footerSocialMediasTitle?: string;
  footerContactTitle?: string;
  socialMedias?: SocialMedia[];
  contactEmail?: string;
}

export interface FooterContentItemProps {
  title: string;
}
