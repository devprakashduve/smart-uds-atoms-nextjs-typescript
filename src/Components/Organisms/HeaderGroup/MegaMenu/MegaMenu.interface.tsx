export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

export interface CompanyLink {
  label: string;
  href: string;
}

export interface MegaMenuProps {
  logo?: string;
  menuItems?: MenuItem[];
  dropdownLinks?: CompanyLink[];
  contact?: string;
  previewDashboard?: string;
  getStarted?: string;
  udsLogoAlt?: string;
  udsText?: string;
  backgroundImage?: string;
}
