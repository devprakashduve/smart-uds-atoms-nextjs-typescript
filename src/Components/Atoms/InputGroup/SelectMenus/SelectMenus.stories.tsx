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
    rounded: { control: 'boolean' },
    roundedFull: { control: 'boolean' },
  },
  args: {
    options: [
      { value: '', label: 'Select an option' },
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    label: 'Basic Select',
    defaultValue: '',
    size: 'md',
    disabled: false,
    required: false,
    error: false,
    rounded: true,
    roundedFull: false,
    onChange: (event: { target: { value: any } }) =>
      console.log('Select Value:', event.target.value),
  },
} as Meta;

const Template: StoryFn<SelectMenusProps> = (args) => <SelectMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  items,
  defaultSelected: items[3],
  placeholder: 'Select an option', // New property
};

export const WithOptions = Template.bind({});
WithOptions.args = {
  items,
  defaultSelected: items[0],
  placeholder: 'Select an option', // New property
};

export const Disabled = Template.bind({});
Disabled.args = {
  items,
  defaultSelected: items[1],
  placeholder: 'Select an option',
  disabled: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  items,
  defaultSelected: items[2],
  placeholder: 'Select an option',
  error: true,
};

export const Required = Template.bind({});
Required.args = {
  items,
  defaultSelected: items[4],
  placeholder: 'Select an option',
  required: true,
};

export const RoundedFull = Template.bind({});
RoundedFull.args = {
  items,
  defaultSelected: items[5],
  placeholder: 'Select an option',
  roundedFull: true,
};

export const VariantsComparison = () => (
  <div>
    <h3>Default</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[3]}
      placeholder="Select an option"
    />
    <h3>Disabled</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[1]}
      placeholder="Select an option"
      disabled
    />
    <h3>Error State</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[2]}
      placeholder="Select an option"
      error
    />
    <h3>Required</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[4]}
      placeholder="Select an option"
      required
    />
    <h3>Rounded Full</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[5]}
      placeholder="Select an option"
      roundedFull
    />
    <h3>Small Size</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[6]}
      placeholder="Select an option"
      size="sm"
    />
    <h3>Medium Size</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[7]}
      placeholder="Select an option"
      size="md"
    />
    <h3>Large Size</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[8]}
      placeholder="Select an option"
      size="lg"
    />
    <SelectMenus
      items={items}
      defaultSelected={items[8]}
      placeholder="Select an option"
      size="lg"
      label="Large rounded full"
      required
      roundedFull
    />
    <h3>Rounded</h3>
    <SelectMenus
      items={items}
      defaultSelected={items[9]}
      placeholder="Select an option"
      rounded
    />
  </div>
);
