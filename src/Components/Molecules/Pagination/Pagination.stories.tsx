import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Pagination from '.';
import { PaginationProps } from './PaginationProps.interface';

export default {
  title: 'Components/Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
        args.onPageChange(page);
      }}
    />
  );
};

export const DefaultPagination = Template.bind({});
DefaultPagination.args = {
  currentPage: 1,
  totalPages: 100,
  onPageChange: (page) => console.log('Page changed to:', page),
};
