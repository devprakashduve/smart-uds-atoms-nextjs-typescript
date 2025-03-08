import { Meta, StoryFn } from '@storybook/react';
import List from '.';
import { ListProps } from './List.interface';

export default {
  title: 'Components/Molecules/ListGroup/List',
  component: List,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'CATEGORIES',
  links: [
    { name: 'First Link', href: '#' },
    { name: 'Second Link', href: '#' },
    { name: 'Third Link', href: '#' },
    { name: 'Four Link', href: '#' },
  ],
};
