import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from '.';
import { TableProps } from './TableProps.interface';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Editor' },
];

const columns: { key: keyof User; header: string }[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
];

export default {
  title: 'Components/Molecules/Table',
  component: Table,
} as Meta;

const Template: StoryFn<TableProps<User>> = (args) => <Table {...args} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  data: sampleData,
  columns: columns,
  onRowClick: (row) => console.log('Row clicked:', row),
};
