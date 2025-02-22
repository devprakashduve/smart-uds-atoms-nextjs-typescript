import React from 'react';
import { ProductCardProps } from './ProductCardProps.interface';
import './ProductCard.css';

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <div className="product-card overflow-hidden rounded-lg bg-white shadow-md">
      <img src={imageSrc} alt={title} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
        <p className="mt-2 text-lg font-bold text-gray-900">{price}</p>
        <button
          onClick={onAddToCart}
          className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
