import React from 'react';
import { CardProps } from './SmartCard.interface';
import UDSImage from '@/Components/Atoms/UDSImage';

const SmartCard: React.FC<CardProps> = ({
  title,
  bodyContent,
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
        <UDSImage
          src={imageUrl}
          alt={title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {bodyContent && bodyContent}
      </div>
      {footerContent && (
        <div className="card-footer border-t p-4">{footerContent}</div>
      )}
    </div>
  );
};

export default SmartCard;
