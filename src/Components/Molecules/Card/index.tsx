import React from 'react';
import { CardProps } from './CardProps.interface';
import './Card.css';

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  footerContent,
  onClick,
}) => {
  return (
    <div
      className="card cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg"
      onClick={onClick}
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      {footerContent && (
        <div className="card-footer border-t bg-gray-100 p-4">
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default Card;
