import Button from '@/Components/Atoms/Button';
import React from 'react';
import { ProductCardProps } from './ProductCard.interface';
import UDSImage from '@/Components/Atoms/UDSImage';

export default function ProductCard({
  imageUrl = '',
  productName,
  price,
  onAddToCart,
  addToCartText,
  ratingText,
}: ProductCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-card bg-gradient-to-r from-atom-card-background to-atom-card-to_background shadow-lg">
      <UDSImage className="w-full" src={imageUrl} alt={productName} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <div className="flex justify-between">
          <span className="text-primary-dark">{price}</span>
          {ratingText && <span>{ratingText}</span>}
        </div>
        <Button className="mt-2 w-full py-2 text-center" onClick={onAddToCart}>
          {addToCartText}
        </Button>
      </div>
    </div>
  );
}
