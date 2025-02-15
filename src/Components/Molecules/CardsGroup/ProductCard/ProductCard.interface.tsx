export interface ProductCardProps {
  imageUrl: string;
  productName: string;
  price: string;
  onAddToCart: () => void;
  addToCartText: string;
  ratingText: string;
}
