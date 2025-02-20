export interface Category {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface CategoryPreviewsProps {
  title: string;
  categories: Category[];
}
