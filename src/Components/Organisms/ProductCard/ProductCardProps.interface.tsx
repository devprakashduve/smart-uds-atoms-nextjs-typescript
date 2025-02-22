export interface ProductCardProps {
  imageSrc: string; // URL or path for the product image
  title: string; // Product title
  price: string; // Product price
  description?: string; // Optional product description
  onAddToCart: () => void; // Function to handle the "Add to Cart" action
}
