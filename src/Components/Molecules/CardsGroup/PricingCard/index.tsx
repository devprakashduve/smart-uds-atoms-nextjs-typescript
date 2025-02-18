import Button from '@/Components/Atoms/Button';
import React from 'react';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  buttonText,
}) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center text-line-dark shadow-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-line">{description}</p>
      <p className="mt-4 text-3xl font-bold text-line-dark">{price}</p>
      <ul className="mt-4 text-sm text-line">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
      <Button className="mt-6 w-full rounded-lg">{buttonText}</Button>
    </div>
  );
};

export default PricingCard;
