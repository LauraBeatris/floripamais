export interface SocialMedia {
  href: string;
  label: string;
}

export interface FooterContentProps {
  footerSocialMediasTitle?: string;
  footerContactTitle?: string;
  socialMedias?: SocialMedia[];
  email?: string;
}

export interface FooterContentItemProps {
  title: string;
}
