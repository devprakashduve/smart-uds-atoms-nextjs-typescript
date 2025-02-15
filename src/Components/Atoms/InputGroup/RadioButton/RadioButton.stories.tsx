import RadioButton from '.';

export default {
  title: 'Components/Atoms/InputGroup/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    initialChecked: { control: 'boolean' },
    onChange: { action: 'changed' },
    label: { control: 'text' },
    name: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    title: { control: 'text' },
  },
};

export const SizeSM = {
  args: {
    initialChecked: false,
    label: 'Small Radio',
    name: 'radio-group',
    size: 'sm' as 'sm',
  },
};

export const SizeMD = {
  args: {
    initialChecked: false,
    label: 'Medium Radio',
    name: 'radio-group',
    size: 'md' as 'md',
  },
};

export const SizeLG = {
  args: {
    initialChecked: false,
    label: 'Large Radio',
    name: 'radio-group',
    size: 'lg' as 'lg',
  },
};

export const SizeComparison = {
  render: () => (
    <div className="flex items-center gap-4">
      <RadioButton {...SizeSM.args} name="fruit-group000" />
      <RadioButton {...SizeMD.args} name="fruit-group001" />
      <RadioButton {...SizeLG.args} name="fruit-group002" />
    </div>
  ),
};

export const StateComparison = {
  render: () => (
    <div className="flex flex-col gap-3">
      <RadioButton {...SizeMD.args} name="fruit-group00" label="Unchecked" />
      <RadioButton
        {...SizeMD.args}
        label="Checked"
        name="fruit-group01"
        initialChecked={true}
      />
      <RadioButton
        {...SizeMD.args}
        label="Disabled"
        disabled={true}
        name="fruit-group02"
      />
      <RadioButton
        {...SizeMD.args}
        label="Disabled Checked"
        initialChecked={true}
        disabled={true}
        name="fruit-group03"
      />
    </div>
  ),
};

export const RadioGroupExample = {
  render: () => (
    <div className="flex flex-col gap-2">
      <RadioButton name="fruit-group0" label="Apple" size="md" />
      <RadioButton
        name="fruit-group1"
        label="Orange"
        size="md"
        initialChecked={true}
      />
      <RadioButton
        name="fruit-group2"
        label="Banana"
        size="md"
        disabled={true}
      />
    </div>
  ),
};
