export interface LinkProps {
  text: string;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export interface SocialMediaLinksProps {
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  iconName: string;
}

export interface FooterWithLinksProps {
  title: string;
  description: string;
  links: LinkProps[];
  SocialMediaLinks: SocialMediaLinksProps[];
}
