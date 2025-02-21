import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from '.';
import { TableProps } from './TableProps.interface';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const sampleData: User[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 2 === 0 ? 'Admin' : 'User',
}));

const columns: { key: keyof User; header: string; className?: string }[] = [
  { key: 'id', header: 'ID', className: 'text-center' },
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
];

export default {
  title: 'Components/Molecules/Table',
  component: Table,
} as Meta;

const Template: StoryFn<TableProps<User>> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Table
      {...args}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={handlePageChange}
    />
  );
};

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  data: sampleData,
  columns: columns,
  onRowClick: (row) => console.log('Row clicked:', row),
};
