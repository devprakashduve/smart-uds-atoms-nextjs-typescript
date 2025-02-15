import Img from '@/Components/Atoms/Img';
import PropTypes from 'prop-types';
import { BlogPostCardProps } from './BlogPostCard.interface';

export default function BlogPostCard({
  imageSrc,
  title,
  description,
  authorImage,
  authorName,
}: BlogPostCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <Img className="h-40 w-full object-cover" src={imageSrc} alt="Blog" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center">
          <Img
            className="h-8 w-8 rounded-full"
            src={authorImage}
            alt="Author"
          />
          <p className="ml-2 text-sm text-line">By {authorName}</p>
        </div>
      </div>
    </div>
  );
}
