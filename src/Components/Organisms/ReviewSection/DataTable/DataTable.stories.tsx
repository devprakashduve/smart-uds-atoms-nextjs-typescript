import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DataTable from '.';
import { DataTableProps } from './DataTableProps.interface';

export default {
  title: 'Components/Molecules/DataTable',
  component: DataTable,
} as Meta;

const Template: StoryFn<DataTableProps> = (args) => <DataTable {...args} />;

export const DefaultDataTable = Template.bind({});
DefaultDataTable.args = {
  columns: [
    { id: 'name', label: 'Name', sortable: true },
    { id: 'age', label: 'Age', sortable: true },
    { id: 'location', label: 'Location', sortable: false },
  ],
  data: [
    { name: 'John Doe', age: 28, location: 'New York' },
    { name: 'Jane Smith', age: 34, location: 'San Francisco' },
    { name: 'Alice Johnson', age: 25, location: 'Los Angeles' },
    { name: 'Bob Brown', age: 40, location: 'Chicago' },
  ],
  onSort: (columnId, direction) =>
    alert(`Sorting by ${columnId} in ${direction} order`),
  onPageChange: (page) => alert(`Page changed to ${page}`),
  currentPage: 1,
  totalPages: 2,
};
