import UDSImage from '@/Components/Atoms/Image';
import { ImageCardProps } from './ImageCardProps.interface';

export default function ImageCard({
  title,
  description,
  imageUrl,
  altText,
  containerClassName,
  imageClassName,
  titleClassName,
  descriptionClassName,
}: ImageCardProps) {
  return (
    <div
      className={`from-atom-card-background to-atom-card-to_background rounded-card max-w-sm bg-gradient-to-r shadow-lg ${containerClassName}`}
    >
      <UDSImage
        className={`w-full ${imageClassName}`}
        src={imageUrl}
        alt={altText}
      />
      <div className="p-4">
        <h3 className={`text-lg font-semibold ${titleClassName}`}>{title}</h3>
        <p className={`text-sm ${descriptionClassName}`}>{description}</p>
      </div>
    </div>
  );
}
