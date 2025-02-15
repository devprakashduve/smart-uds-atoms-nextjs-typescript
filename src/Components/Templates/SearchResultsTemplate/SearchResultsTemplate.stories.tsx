import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchResultsTemplate from '.';
import { SearchResultsTemplateProps } from './SearchResultsTemplateProps.interface';

export default {
  title: 'Components/Templates/SearchResultsTemplate',
  component: SearchResultsTemplate,
} as Meta;

const Template: StoryFn<SearchResultsTemplateProps> = (args) => (
  <SearchResultsTemplate {...args} />
);

export const DefaultSearchResultsTemplate = Template.bind({});
DefaultSearchResultsTemplate.args = {
  query: 'JavaScript',
  results: [
    {
      title: 'JavaScript Basics',
      description: 'A beginner guide to JavaScript.',
    },
    {
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript features.',
    },
  ],
  isLoading: false,
  totalResults: 50,
  currentPage: 1,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};
