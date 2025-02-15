import Switch from '.';

export default {
  title: 'Components/Atoms/InputGroup/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    onChange: { action: 'changed' },
  },
};

export const DefaultSwitch = {
  args: {
    checked: false,
    onChange: (checked: boolean) => console.log(checked),
    disabled: false,
    textForOn: 'On',
    textForOff: 'Off',
  },
};

export const CheckedSwitch = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(checked),
    disabled: false,
  },
};

export const WithoutIcon = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(checked),
    disabled: false,
    disableIcons: true,
    textForOn: 'On',
    textForOff: 'Off',
  },
};

export const NoBackground = {
  args: {
    checked: true,
    onChange: (checked: boolean) => console.log(checked),
    disabled: false,
    disableIcons: false,
    textForOn: 'On',
    textForOff: 'Off',
    noBackground: true,
  },
};

export const DisabledSwitch = {
  args: {
    checked: false,
    onChange: (checked: boolean) => console.log(checked),
    disabled: true,
  },
};

export const SmallSizeSwitch = {
  args: {
    checked: false,
    size: 'sm',
    onChange: (checked: boolean) => console.log(checked),
    textForOn: 'Small On',
    textForOff: 'Small Off',
  },
};
export const MediumSizeSwitch = {
  args: {
    checked: false,
    size: 'md',
    onChange: (checked: boolean) => console.log(checked),
    textForOn: 'Small On',
    textForOff: 'Small Off',
  },
};

export const LargeSizeSwitch = {
  args: {
    checked: true,
    size: 'lg',
    onChange: (checked: boolean) => console.log(checked),
    textForOn: 'Large On',
    textForOff: 'Large Off',
  },
};

export const SizeComparison = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" checked={true} textForOn="Small" onChange={() => {}} />
      <Switch size="md" checked={true} textForOn="Medium" onChange={() => {}} />
      <Switch size="lg" checked={true} textForOn="Large" onChange={() => {}} />
    </div>
  ),
};
