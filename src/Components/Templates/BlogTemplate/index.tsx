import React from 'react';
import { BlogTemplateProps } from './BlogTemplateProps.interface';
import './BlogTemplate.css';

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  title,
  date,
  description,
  children,
}) => {
  return (
    <div className="blog-template bg-gray-50 px-6 py-12">
      <div className="container mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <header className="blog-header mb-8 text-center">
          <h1 className="blog-title text-3xl font-semibold text-gray-800">
            {title}
          </h1>
          <p className="blog-date text-sm text-gray-500">{date}</p>
          <p className="blog-description mt-4 text-lg text-gray-600">
            {description}
          </p>
        </header>
        <div className="blog-content mt-8">{children}</div>
      </div>
    </div>
  );
};

export default BlogTemplate;
