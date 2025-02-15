import React from 'react';
import { ProductDetailsTemplateProps } from './ProductDetailsTemplateProps.interface';
import './ProductDetailsTemplate.css';

const ProductDetailsTemplate: React.FC<ProductDetailsTemplateProps> = ({
  title,
  description,
  price,
  image,
  relatedProducts,
  children,
}) => {
  return (
    <div className="product-details-template flex h-auto flex-col bg-gray-50 md:flex-row">
      {/* Sidebar (Optional) */}
      {relatedProducts && (
        <div className="sidebar w-full bg-gray-800 p-4 text-white md:w-64">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-400">{description}</p>
          <h3 className="mt-4 text-lg text-white">Related Products</h3>
          <div className="related-products mt-4">{relatedProducts}</div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="main-content flex-1 p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
          <p className="mt-2 text-lg text-gray-600">{description}</p>
          <p className="mt-4 text-2xl font-bold text-gray-900">{price}</p>
        </header>
        <div className="product-image">
          <img src={image} alt={title} className="h-auto w-full rounded-lg" />
        </div>
        <div className="content mt-6">{children}</div>
      </div>
    </div>
  );
};

export default ProductDetailsTemplate;
