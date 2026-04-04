export interface ProductCardWithRatingProps {
  imageUrl: string;
  productName: string;
  price?: number;
  description: string;
  rating: number;
  reviewsCount: number;
  onAddToCart: () => void;
}
