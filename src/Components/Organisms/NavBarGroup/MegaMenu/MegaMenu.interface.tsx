export interface MegaMenuItem {
  name: string;
  href: string;
}

export interface MegaMenuColumn {
  heading?: string;
  items: MegaMenuItem[];
}

export interface NavCategory {
  name: string;
  href?: string;
  megaMenuColumns?: MegaMenuColumn[];
}

export interface TopBarLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export interface TopBarLinks {
  contact: TopBarLink;
  language: TopBarLink;
  login: TopBarLink;
}

export interface LogoProps {
  src: string;
  alt: string;
  href: string;
}

export interface MegaMenuProps {
  logo: LogoProps;
  topBarLinks: TopBarLinks;
  navigation: NavCategory[];
  onSearchClick?: () => void;
}

export interface MegaMenuPanelProps {
  columns: MegaMenuColumn[];
  categoryName: string;
  categoryHref?: string;
}
