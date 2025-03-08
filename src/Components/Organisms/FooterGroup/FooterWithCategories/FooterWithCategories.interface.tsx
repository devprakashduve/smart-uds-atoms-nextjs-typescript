export interface FooterWithCategoriesProps {
  categories: {
    title: string;
    links: { name: string; href: string }[];
  }[];
  subscribePlaceholder: string;
  subscribeButtonText: string;
  subscribeMessage: string;
  socialLinks: { name: string; href: string }[];
}
