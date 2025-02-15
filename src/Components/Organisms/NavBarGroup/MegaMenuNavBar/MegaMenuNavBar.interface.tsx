export interface NavigationItem {
  name: string;
  href: string;
}

export interface FeaturedItem {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Section {
  id: string;
  name?: string;
  items: NavigationItem[];
}

export interface Category {
  id: string;
  name: string;
  featured?: FeaturedItem[];
  sections: Section[];
}

export interface MegaMenuNavBarProps {
  categories?: Category[];
  pages?: NavigationItem[];
}

export interface MegaMenuMobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  navigation: MegaMenuNavBarProps;
  closeMenuText: string;
  shopNowText: string;
  signInText: string;
  createAccountText: string;
  changeCurrencyText: string;
  currency: string;
}

export interface MegaMenuDesktopMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  navigation: MegaMenuNavBarProps;
  shopNowText?: string;
}

export interface MegaMenuNavBarComponentProps {
  navigation: MegaMenuNavBarProps;
  freeDeliveryText: string;
  signInText?: string;
  createAccountText?: string;
  changeCurrencyText?: string;
  currency?: string;
  searchBox?: boolean;
  logoSrc: string;
  logoAlt: string;
}
