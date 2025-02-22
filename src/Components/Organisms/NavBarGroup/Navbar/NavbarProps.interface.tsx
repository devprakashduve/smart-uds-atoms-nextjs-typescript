export interface NavBarProps {
  logo: string;
  links: {
    name: string;
    href: string;
    subCustomLinks?: {
      name: string;
      href: string;
    }[];
  }[];
  backgroundColor?: string;
}
