import Select from '.';

import { Meta } from '@storybook/react';
import { SelectProps } from './SelectProps.interface';

interface SelectStoryArgs extends SelectProps {
  options: { value: string; label: string }[];
}

const meta: Meta<SelectStoryArgs> = {
  title: 'Components/Atoms/InputGroup/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
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
    placeholder: 'Select an option',

    onChange: (event: React.ChangeEvent<HTMLSelectElement>) =>
      console.log('Select Value:', event.target.value),
  },
};

export default meta;

export const Defaults = () => (
  <div className="space-y-6 p-4">
    <h3 className="mb-4 text-lg font-semibold">Select Variants Comparison</h3>

    <div className="grid grid-cols-2 gap-4">
      <Select
        {...BasicSelect.args}
        label="Default"
        size={BasicSelect.args.size as 'sm' | 'md' | 'lg'}
      />
      <Select
        {...BasicSelect.args}
        label="Square"
        size={BasicSelect.args.size as 'sm' | 'md' | 'lg'}
      />
      <Select
        {...BasicSelect.args}
        label="Pill"
        size={BasicSelect.args.size as 'sm' | 'md' | 'lg'}
      />
      <Select
        {...BasicSelect.args}
        label="Error State"
        error
        required
        size={BasicSelect.args.size as 'sm' | 'md' | 'lg'}
      />
      <Select
        {...BasicSelect.args}
        label="Disabled"
        disabled
        size={BasicSelect.args.size as 'sm' | 'md' | 'lg'}
      />
      <Select {...BasicSelect.args} label="Small" size="sm" />
      <Select {...BasicSelect.args} label="Large" size="lg" />
      <Select
        {...BasicSelect.args}
        label="Required"
        required
        size={BasicSelect.args.size as 'sm' | 'md' | 'lg'}
      />
    </div>
  </div>
);
export const BasicSelect = {
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
    placeholder: 'Select an option',

    onChange: (event: React.ChangeEvent<HTMLSelectElement>) =>
      console.log('Select Value:', event.target.value),
  },
};

export const DisabledSelect = {
  args: {
    disabled: true,
    label: 'Disabled Select',
  },
};

export const ErrorSelect = {
  args: {
    error: true,
    required: true,
    label: 'Error Select',
  },
};

export const LargeSelect = {
  args: {
    size: 'lg',
    label: 'Large Select',
  },
};

export const SmallSelect = {
  args: {
    size: 'sm',
    label: 'Small Select',
  },
};

export const SquareSelect = {
  args: {
    label: 'Square Select',
  },
};

export const PillSelect = {
  args: {
    label: 'Pill Select',
  },
};
