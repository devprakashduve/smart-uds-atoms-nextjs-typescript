import BlogPostCard from './index';
import { BlogPostCardProps } from './BlogPostCard.interface';
import { StoryFn } from '@storybook/react';
export default {
  title: 'Components/Molecules/CardsGroup/BlogPostCard',
  component: BlogPostCard,
  tags: ['autodocs'],
};
const Template: StoryFn<BlogPostCardProps> = (args) => (
  <BlogPostCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageSrc: '/images/avatar.jpg',
  title: 'Understanding Micro Frontends',
  description:
    'Learn how to break down monolithic applications using micro frontend architecture.',
  authorImage: '/images/avatar.jpg',
  authorName: 'Dubey Dev',
};

export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  imageSrc: '/images/avatar.jpg',
  title: 'Understanding Micro Frontends',
  description:
    'Learn how to break down monolithic applications using micro frontend architecture. This is a longer description to test how the component handles more text content.',
  authorImage: '/images/avatar.jpg',
  authorName: 'Dubey Dev',
};

export const WithoutAuthorImage = Template.bind({});
WithoutAuthorImage.args = {
  imageSrc: '/images/avatar.jpg',
  title: 'Understanding Micro Frontends',
  description:
    'Learn how to break down monolithic applications using micro frontend architecture.',
  authorImage: '/images/avatar.jpg',
  authorName: 'Dubey Dev',
};
