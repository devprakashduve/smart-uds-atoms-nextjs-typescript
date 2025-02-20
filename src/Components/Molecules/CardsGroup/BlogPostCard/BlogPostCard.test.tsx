import { render, screen } from '@testing-library/react';
import BlogPostCard from './index';

test('renders BlogPostCard with all props', () => {
  render(
    <BlogPostCard
      imageSrc="/images/blog.jpg"
      title="Understanding Micro Frontends"
      description="Learn how to break down monolithic applications using micro frontend architecture."
      authorImage="/images/author.jpg"
      authorName="John Doe"
    />
  );

  expect(screen.getByAltText('Blog')).toHaveAttribute(
    'src',
    '/images/blog.jpg'
  );
  expect(screen.getByText('Understanding Micro Frontends')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Learn how to break down monolithic applications using micro frontend architecture.'
    )
  ).toBeInTheDocument();
  expect(screen.getByAltText('Author')).toHaveAttribute(
    'src',
    '/images/author.jpg'
  );
  expect(screen.getByText('By John Doe')).toBeInTheDocument();
});

test('renders BlogPostCard without optional props', () => {
  render(
    <BlogPostCard
      imageSrc="/images/blog.jpg"
      title="Understanding Micro Frontends"
      description="Learn how to break down monolithic applications using micro frontend architecture."
    />
  );

  expect(screen.getByAltText('Blog')).toHaveAttribute(
    'src',
    '/images/blog.jpg'
  );
  expect(screen.getByText('Understanding Micro Frontends')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Learn how to break down monolithic applications using micro frontend architecture.'
    )
  ).toBeInTheDocument();
  expect(screen.queryByAltText('Author')).toBeNull();
  expect(screen.getByText('By Unknown')).toBeInTheDocument();
});
