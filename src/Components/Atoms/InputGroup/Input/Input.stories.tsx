import Input from '.';
import { InputSize, InputType } from './InputProps.interface';

export default {
  title: 'Components/Atoms/InputGroup/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: Object.values(InputType),
    },
    label: { control: 'text' },
    id: { control: 'text' },
    className: { control: 'text' },
    size: {
      control: 'select',
      options: Object.values(InputSize),
    },
    isRequired: { control: 'boolean' },
    rounded: { control: 'boolean' },
    roundedFull: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    customIconSVG: { control: 'object' },
  },
};

export const Default = {
  args: {
    id: 'default',
    name: 'default',
    placeholder: 'Enter text',
    value: '',
    disabled: false,
    type: InputType.TEXT,
    label: 'Default Input',
    isRequired: true,
    onChange: (value: string) => console.log(value),
  },
};

export const WithValue = {
  args: {
    id: 'with-value',
    name: 'with-value',
    placeholder: 'Enter text',
    value: 'Sample text',
    disabled: false,
    type: InputType.TEXT,
    label: 'Input with Value',
    onChange: (value: string) => console.log(value),
  },
};

export const Disabled = {
  args: {
    id: 'disabled',
    name: 'disabled',
    placeholder: 'Enter text',
    value: '',
    disabled: true,
    type: InputType.TEXT,
    label: 'Disabled Input',
  },
};

export const Password = {
  args: {
    id: 'password',
    name: 'password',
    placeholder: 'Enter password',
    value: '',
    disabled: false,
    type: InputType.PASSWORD,
    label: 'Password Input',
    onChange: (value: string) => console.log(value),
    showIcon: true,
  },
};

export const Number = {
  args: {
    id: 'number',
    name: 'number',
    placeholder: 'Enter number',
    value: '',
    disabled: false,
    type: InputType.NUMBER,
    label: 'Number Input',
    onChange: (value: string) => console.log(value),
  },
};

export const Email = {
  args: {
    id: 'email',
    name: 'email',
    placeholder: 'Enter email',
    value: '',
    disabled: false,
    type: InputType.EMAIL,
    label: 'Email Input',
    onChange: (value: string) => console.log(value),
  },
};

export const Tel = {
  args: {
    id: 'tel',
    name: 'tel',
    placeholder: 'Enter phone number',
    value: '',
    disabled: false,
    type: InputType.TEL,
    label: 'Telephone Input',
    onChange: (value: string) => console.log(value),
    showIcon: true,
  },
};

export const TelWithCustomIcon = {
  args: {
    id: 'tel',
    name: 'tel',
    placeholder: 'Enter phone number',
    value: '',
    disabled: false,
    type: InputType.TEL,
    label: 'Telephone Input',
    onChange: (value: string) => console.log(value),
    showIcon: true,
    customIconSVG: (
      <svg
        className="h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
      </svg>
    ),
  },
};

export const Rounded = {
  args: {
    id: 'rounded',
    name: 'rounded',
    placeholder: 'Enter text',
    value: '',
    disabled: false,
    type: InputType.TEXT,
    label: 'Rounded Input',
    rounded: true,
    onChange: (value: string) => console.log(value),
  },
};

export const RoundedFull = {
  args: {
    id: 'rounded-full',
    name: 'rounded-full',
    placeholder: 'Enter text',
    value: '',
    disabled: false,
    type: InputType.TEXT,
    label: 'Rounded Full Input',
    roundedFull: true,
    onChange: (value: string) => console.log(value),
    rounded: true,
  },
};

export const SmallSize = {
  args: {
    id: 'small-size',
    name: 'small-size',
    placeholder: 'Enter text',
    value: '',
    disabled: false,
    type: InputType.TEXT,
    label: 'Small Size Input',
    size: InputSize.SM,
    onChange: (value: string) => console.log(value),
  },
};

export const MediumSize = {
  args: {
    id: 'medium-size',
    name: 'medium-size',
    placeholder: 'Enter text',
    value: '',
    disabled: false,
    type: InputType.TEXT,
    label: 'Medium Size Input',
    size: InputSize.MD,
    onChange: (value: string) => console.log(value),
  },
};

export const LargeSize = {
  args: {
    id: 'large-size',
    name: 'large-size',
    placeholder: 'Enter text',
    value: '',
    disabled: false,
    type: InputType.TEXT,
    label: 'Large Size Input',
    size: InputSize.LG,
    onChange: (value: string) => console.log(value),
  },
};

// COMPARISON STORIES
export const SizeComparison = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Input
        label="Small Size"
        size={InputSize.SM}
        placeholder="Small input"
        type={InputType.TEXT}
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label="Medium Size"
        size={InputSize.MD}
        placeholder="Medium input"
        type={InputType.TEXT}
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        label="Large Size"
        size={InputSize.LG}
        placeholder="Large input"
        type={InputType.TEXT}
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  ),
};

export const TypeComparison = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Input
        label="Text Input"
        type={InputType.TEXT}
        placeholder="Search..."
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        size={InputSize.SM}
        showIcon={true}
        customIconName="search"
      />
      <Input
        label="Text Input"
        type={InputType.TEXT}
        placeholder="Enter text"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        size={InputSize.SM}
      />
      <Input
        label="Password"
        type={InputType.PASSWORD}
        showIcon
        placeholder="Enter password"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        size={InputSize.SM}
      />
      <Input
        label="Email"
        type={InputType.EMAIL}
        placeholder="email@example.com"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        size={InputSize.SM}
      />
      <Input
        label="Telephone"
        type={InputType.TEL}
        showIcon
        placeholder="+1 234 567 890"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        size={InputSize.SM}
      />
      <Input
        label="Number"
        type={InputType.NUMBER}
        placeholder="Enter number"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        size={InputSize.SM}
      />
    </div>
  ),
};

export const StateComparison = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Input
        label="Normal State"
        placeholder="Regular input"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
      <Input
        label="Disabled State"
        disabled
        placeholder="Disabled input"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
      <Input
        label="Required Field"
        isRequired
        placeholder="Required input"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
      <Input
        label="With Value"
        value="Pre-filled content"
        placeholder="Has value"
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
    </div>
  ),
};

export const StyleComparison = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Input
        label="Default Style"
        placeholder="Normal borders"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
      <Input
        label="Rounded"
        rounded
        placeholder="Rounded corners"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
      <Input
        label="Full Rounded"
        roundedFull
        placeholder="Pill-shaped"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
      <Input
        label="Error State"
        value="Invalid value"
        className="border-error"
        placeholder="With error"
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
    </div>
  ),
};

export const IconComparison = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <Input
        label="Password Toggle"
        type={InputType.PASSWORD}
        showIcon
        placeholder="With eye icon"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        size={InputSize.SM}
      />
      <Input
        label="Telephone Icon"
        type={InputType.TEL}
        showIcon
        placeholder="With phone icon"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        size={InputSize.SM}
      />
      <Input
        label="Custom Icon"
        showIcon
        customIconSVG={
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        }
        placeholder="Custom SVG icon"
        value={''}
        name={''}
        onChange={function (value: string): void {
          throw new Error('Function not implemented.');
        }}
        type={InputType.TEXT}
        size={InputSize.SM}
      />
    </div>
  ),
};
