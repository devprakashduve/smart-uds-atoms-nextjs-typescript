export interface NavCustomLink {
  name: string;
  href: string;
  subCustomLinks?: NavCustomLink[];
}

export interface NavBarLogoLinksProps {
  logo: string;
  links: NavCustomLink[];
  backgroundColor?: string;
  searchPlaceHolder?: string;
}
