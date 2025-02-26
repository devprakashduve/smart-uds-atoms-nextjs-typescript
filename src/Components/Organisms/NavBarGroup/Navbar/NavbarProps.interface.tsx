export interface CustomLink {
  name: string;
  href: string;
  subCustomLinks?: CustomLink[];
}

export interface NavbarProps {
  logo: string;
  altText: string; // Added altText
  links: CustomLink[];
}

export interface DropdownMenuProps {
  isOpen: boolean;
  subCustomLinks: CustomLink[];
}

export interface MobileMenuProps {
  isOpen: boolean;
  links: CustomLink[];
}
