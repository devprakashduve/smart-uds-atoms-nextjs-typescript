export interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  description?: string;
  rating: string;
}

export interface ProductListProps {
  products: Product[];
  title: string;
  addToCartText: string;
}
