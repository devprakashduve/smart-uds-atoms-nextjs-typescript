import Icon from '@/Components/Atoms/Icon';
import { FeatureCardProps } from './FeatureCard.interface';

export default function FeatureCard({
  iconName,
  title,
  description,
  titleClassName,
  descriptionClassName,
  containerClassName,
  iconClassName,
}: FeatureCardProps) {
  return (
    <div
      className={`flex max-w-sm space-x-4 overflow-hidden rounded-card bg-gradient-to-r from-atom-card-background to-atom-card-to_background p-4 text-atom-card-dark shadow-lg ${containerClassName}`}
    >
      {iconName && (
        <Icon
          name={iconName}
          className={`text-line h-12 w-12 ${iconClassName}`}
          variant={'outline'}
        />
      )}
      <div>
        <h3 className={`text-lg font-semibold ${titleClassName}`}>{title}</h3>
        <p className={`text-sm text-gray-600 ${descriptionClassName}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
