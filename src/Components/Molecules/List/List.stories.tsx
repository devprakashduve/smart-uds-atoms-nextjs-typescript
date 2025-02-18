import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import List from '.';

export default {
  title: 'Components/Molecules/List',
  component: List,
} as Meta;

const Template: StoryFn<any> = (args) => <List {...args} />;

export const DefaultList = Template.bind({});
DefaultList.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  renderItem: (item: string) => <span>{item}</span>,
};

export const CustomStyledList = Template.bind({});
CustomStyledList.args = {
  items: ['Custom 1', 'Custom 2', 'Custom 3'],
  renderItem: (item: string, index: number) => (
    <div
      className={`custom-item bg-blue-${index + 1}00 rounded-md p-2 text-white`}
    >
      {item}
    </div>
  ),
};
