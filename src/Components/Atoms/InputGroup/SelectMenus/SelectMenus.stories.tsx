import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectMenus from '.';
import { SelectMenusProps } from './SelectMenus.interface';

const items = [
  {
    id: '1',
    name: 'Aarav Patel',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '2',
    name: 'Vivaan Singh',
  },
  {
    id: '3',
    name: 'Aditya Sharma',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '4',
    name: 'Vihaan Gupta',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '5',
    name: 'Arjun Reddy',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '6',
    name: 'Krishna Iyer',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '7',
    name: 'Rohan Mehta',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '8',
    name: 'Kabir Khan',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '9',
    name: 'Aryan Joshi',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '10',
    name: 'Ishaan Verma',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '11',
    name: 'Reyansh Sharma',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '12',
    name: 'Ayaan Patel',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '13',
    name: 'Dhruv Kapoor',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '14',
    name: 'Aarush Reddy',
    avatar: '/images/avatar.jpg',
  },
  {
    id: '15',
    name: 'Ansh Mehta',
    avatar: '/images/avatar.jpg',
  },
];

export default {
  title: 'Components/Atoms/InputGroup/SelectMenus',
  component: SelectMenus,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    items,
    placeholder: 'Select an option',
    size: 'md',
    disabled: false,
    required: false,
    error: false,
    onChange: (item: any) => console.log('Selected Item:', item),
  },
} as Meta;

const Template: StoryFn<SelectMenusProps> = (args) => <SelectMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultSelected: items[3],
};

export const WithOptions = Template.bind({});
WithOptions.args = {
  defaultSelected: items[0],
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultSelected: items[1],
  disabled: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  defaultSelected: items[2],
  error: true,
};

export const Required = Template.bind({});
Required.args = {
  defaultSelected: items[4],
  required: true,
};

export const RoundedFull = Template.bind({});
RoundedFull.args = {
  defaultSelected: items[5],
};

export const VariantsComparison = () => (
  <div>
    {['Default', 'Disabled', 'Error State', 'Required', 'Rounded Full'].map(
      (variant, index) => (
        <div key={index}>
          <h3>{variant}</h3>
          <SelectMenus
            items={items}
            defaultSelected={items[index]}
            placeholder="Select an option"
            {...(variant === 'Disabled' && { disabled: true })}
            {...(variant === 'Error State' && { error: true })}
            {...(variant === 'Required' && { required: true })}
          />
        </div>
      )
    )}
  </div>
);
