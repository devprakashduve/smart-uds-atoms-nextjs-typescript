import React from 'react';
import { BlogPostPreviewProps } from './BlogPostPreviewProps.interface';
import './BlogPostPreview.css';

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  title,
  excerpt,
  slug,
  date,
}) => {
  return (
    <div className="blog-post-preview mb-6 border-b border-gray-200 pb-6">
      <h2 className="text-xl font-semibold text-gray-800">
        <a href={`/blog/${slug}`} className="hover:text-blue-600">
          {title}
        </a>
      </h2>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="mt-2 text-base text-gray-700">{excerpt}</p>
      <a
        href={`/blog/${slug}`}
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        Read more &rarr;
      </a>
    </div>
  );
};

export default BlogPostPreview;
