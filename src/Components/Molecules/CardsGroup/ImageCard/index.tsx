import { ImageCardProps } from './ImageCardProps.interface';

export default function ImageCard({
  title,
  description,
  imageUrl,
}: ImageCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <img className="w-full" src={imageUrl} alt="Card" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
