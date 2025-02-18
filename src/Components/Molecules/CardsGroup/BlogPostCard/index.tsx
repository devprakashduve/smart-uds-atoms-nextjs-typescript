import { BlogPostCardProps } from './BlogPostCard.interface';
import UDSImage from '@/Components/Atoms/Image';

export default function BlogPostCard({
  imageSrc,
  title,
  description,
  authorImage,
  authorName,
}: BlogPostCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <UDSImage
        className="h-40 w-full object-cover"
        src={imageSrc}
        alt="Blog"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center">
          <UDSImage
            className="h-8 w-8 rounded-full"
            src={authorImage}
            alt="Author"
          />
          <p className="text-line ml-2 text-sm">By {authorName}</p>
        </div>
      </div>
    </div>
  );
}
