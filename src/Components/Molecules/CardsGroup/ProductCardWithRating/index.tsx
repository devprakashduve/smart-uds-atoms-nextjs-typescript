import React from 'react';
import Button from '@/Components/Atoms/Button';
import Rating from '../../Rating';
import Img from '@/Components/Atoms/Img';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  description: string;
  rating: number;
  reviewsCount: number;
  onAddToCart: () => void;
}

export default function ProductCardWithRating({
  imageUrl,
  productName,
  description,
  rating,
  reviewsCount,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <Img className="w-full" src={imageUrl} alt={productName} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-2 flex items-center">
          <Rating maxRating={5} onRatingChange={() => {}} rating={rating} />
          <p className="ml-2 text-sm text-gray-500">({reviewsCount} Reviews)</p>
        </div>
        <Button className="mt-2 w-full py-2 text-center" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
