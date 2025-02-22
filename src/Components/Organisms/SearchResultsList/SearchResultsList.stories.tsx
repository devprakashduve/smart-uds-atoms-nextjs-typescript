import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchResultList from '.';
import { SearchResultListProps } from './SearchResultsListProps.interface';

export default {
  title: 'Components/Organisms/SearchResultList',
  component: SearchResultList,
} as Meta;

const Template: StoryFn<SearchResultListProps> = (args) => (
  <SearchResultList {...args} />
);

export const DefaultSearchResultList = Template.bind({});
DefaultSearchResultList.args = {
  results: [
    {
      id: '1',
      title: 'Product 1',
      description: 'Description for Product 1',
      imageUrl: '/path/to/image1.jpg',
    },
    {
      id: '2',
      title: 'Product 2',
      description: 'Description for Product 2',
      imageUrl: '/path/to/image2.jpg',
    },
    { id: '3', title: 'Product 3', description: 'Description for Product 3' },
  ],
  isLoading: false,
  totalResults: 3,
  currentPage: 1,
  totalPages: 2,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
  onResultClick: (id) => console.log(`Result with ID ${id} clicked`),
};
