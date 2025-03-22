import Button from '@/Components/Atoms/Button';
import Rating from '../../Rating';
import UDSImage from '@/Components/Atoms/UDSImage';
import { ProductCardWithRatingProps } from './ProductCardWithRating.interface';

export default function ProductCardWithRating({
  imageUrl,
  productName,
  description,
  rating,
  reviewsCount,
  onAddToCart,
}: ProductCardWithRatingProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-card bg-gradient-to-r from-atom-card-background to-atom-card-to_background shadow-lg">
      <UDSImage className="w-full" src={imageUrl} alt={productName} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="mt-2 text-sm">{description}</p>
        <div className="mt-2 flex items-center">
          <Rating maxRating={5} onRatingChange={() => {}} rating={rating} />
          <p className="ml-2 text-sm">({reviewsCount} Reviews)</p>
        </div>
        <Button className="mt-2 w-full py-2 text-center" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
