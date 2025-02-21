export interface ProductCardProps {
  imageUrl?: string;
  productName: string;
  price?: string;
  onAddToCart: () => void;
  addToCartButtonText?: string;
  ratingText?: string;
  addToCartText?: string;
}
