import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from '.';
import { InputProps } from './InputProps.interface';

export default {
  title: 'Components/Atoms/InputGroup/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number', 'tel'],
      },
      description: 'HTML input type as a string',
    },
    size: {
      control: { type: 'select', options: Object.values('') },
      description: 'Input size',
    },
    disabled: { control: 'boolean', description: 'Disables the input' },
    isBorder: { control: 'boolean', description: 'enable border' },
    isRequired: {
      control: 'boolean',
      description: 'Marks the input as required',
    },
    validationOnFocus: {
      control: 'boolean',
      description: 'Marks the input as required',
    },
    showIcon: {
      control: 'boolean',
      description:
        'Shows an icon inside the input (for toggling password visibility)',
    },
    autoComplete: {
      control: 'text',
      description: 'Autocomplete attribute for the input',
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => {
  const [value] = useState(args.value);
  return (
    <Input
      {...args}
      value={value}
      name="storybook-input"
      id="storybook-input"
    />
  );
};

export const BasicTextInput = Template.bind({});
BasicTextInput.args = {
  type: 'text',
  label: 'Basic Input',
  placeholder: 'Enter text...',
  disabled: false,
  isRequired: false,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Enter password...',
  disabled: false,
  isRequired: true,
  showIcon: true,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  label: 'Email',
  placeholder: 'Enter email...',
  disabled: false,
  isRequired: true,
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  label: 'Number',
  placeholder: 'Enter a number...',
  disabled: false,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  type: 'text',
  label: 'Disabled Input',
  placeholder: 'Cannot edit this...',
  disabled: true,
};

export const RoundedInput = Template.bind({});
RoundedInput.args = {
  type: 'text',
  label: 'Rounded Input',
  placeholder: 'Rounded corners',
};

export const PillInput = Template.bind({});
PillInput.args = {
  type: 'text',
  label: 'Pill Input',
  placeholder: 'Fully rounded',
};

export const ComparisonOfInputs = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold">Comparison of Input Variants</h3>
      <div className="space-y-4">
        <div>
          <p>Basic Text Input</p>
          <Input
            type="text"
            label="Basic Input"
            placeholder="Enter text..."
            name="basic-input"
            id="basic-input"
            value={''}
            onChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div>
          <p>Password Input with Icon</p>
          <Input
            type="password"
            label="Password"
            placeholder="Enter password..."
            name="password-input"
            id="password-input"
            showIcon={true}
            isRequired={true}
            value={''}
            onChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div>
          <p>Email Input</p>
          <Input
            type="email"
            label="Email"
            placeholder="Enter email..."
            name="email-input"
            id="email-input"
            isRequired={true}
            value={''}
            onChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div>
          <p>Number Input</p>
          <Input
            type="number"
            label="Number"
            placeholder="Enter a number..."
            name="number-input"
            id="number-input"
            value={''}
            onChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div>
          <p>Disabled Input</p>
          <Input
            type="text"
            label="Disabled Input"
            placeholder="Cannot edit this..."
            name="disabled-input"
            id="disabled-input"
            disabled={true}
            value={''}
            onChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div>
          <p>Rounded Input</p>
          <Input
            type="text"
            label="Rounded Input"
            placeholder="Rounded corners"
            name="rounded-input"
            id="rounded-input"
            value={''}
            onChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div>
          <p>Pill Input</p>
          <Input
            type="text"
            label="Pill Input"
            placeholder="Fully rounded"
            name="pill-input"
            id="pill-input"
            value={''}
            onChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </div>
  );
};
ComparisonOfInputs.storyName = 'Comparison of Inputs';
