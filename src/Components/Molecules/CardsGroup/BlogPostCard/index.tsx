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
    <div className="from-atom-card-background to-atom-card-to_background text-atom-card-dark max-w-sm rounded-lg bg-gradient-to-r shadow-lg">
      <UDSImage
        className="h-40 w-full object-cover"
        src={imageSrc}
        alt="Blog"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center">
          {authorImage && (
            <UDSImage
              className="h-8 w-8 rounded-full"
              src={authorImage}
              alt="Author"
            />
          )}
          <p className="text-line ml-2 text-sm">By {authorName || 'Unknown'}</p>
        </div>
      </div>
    </div>
  );
}
