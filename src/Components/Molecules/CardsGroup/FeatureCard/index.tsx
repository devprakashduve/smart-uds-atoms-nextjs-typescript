import Icon from '@/Components/Atoms/Icon';
import { FeatureCardProps } from './FeatureCard.interface';

export default function FeatureCard({
  iconName,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex max-w-sm space-x-4 overflow-hidden rounded-lg bg-white p-4 shadow-lg">
      {iconName && <Icon name={iconName} className="h-12 w-12 text-line" />}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
