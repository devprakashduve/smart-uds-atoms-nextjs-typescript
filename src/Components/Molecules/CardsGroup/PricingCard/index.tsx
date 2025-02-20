import Button from '@/Components/Atoms/Button';
import { PricingCardProps } from './PricingCard.types';

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  buttonText,
}) => {
  return (
    <div className="from-atom-card-background to-atom-card-to_background text-atom-card-dark rounded-card max-w-sm bg-gradient-to-r p-6 text-center shadow-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-line mt-2">{description}</p>
      <p className="text-line-dark mt-4 text-3xl font-bold">{price}</p>
      <ul className="text-line mt-4 text-sm">
        {features.map((feature, featureIndex) => (
          <li key={featureIndex}>✔ {feature}</li>
        ))}
      </ul>
      <Button className="mt-6 w-full rounded-lg">{buttonText}</Button>
    </div>
  );
};

export default PricingCard;
