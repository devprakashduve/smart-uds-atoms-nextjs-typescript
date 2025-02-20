export interface ProductCardWithRatingProps {
  imageUrl: string;
  productName: string;
  description: string;
  rating: number;
  reviewsCount: number;
  onAddToCart: () => void;
}
