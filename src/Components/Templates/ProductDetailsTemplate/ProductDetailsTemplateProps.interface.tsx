export interface ProductDetailsTemplateProps {
  title: string;
  description: string;
  price: string;
  image: string;
  relatedProducts?: React.ReactNode; // Optional related products section in sidebar
  children: React.ReactNode; // Main content for the product details
}
