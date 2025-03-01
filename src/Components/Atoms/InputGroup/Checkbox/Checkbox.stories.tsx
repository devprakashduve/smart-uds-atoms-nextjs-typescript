import Checkbox from '.';

export default {
  title: 'Components/Atoms/InputGroup/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    name: 'example-checkbox',
  },
};

export const Checked = {
  args: {
    checked: true,
    onChange: (value: boolean) => console.log(value),
    label: 'Checked State',
  },
};

export const Unchecked = {
  args: {
    checked: false,
    onChange: (value: boolean) => console.log(value),
    label: 'Unchecked State',
  },
};

export const SmallSize = {
  args: {
    checked: true,
    size: 'sm',
    label: 'Small Checkbox',
    onChange: (value: boolean) => console.log(value),
  },
};

export const Disabled = {
  args: {
    checked: false,
    label: 'Disabled Checkbox',
    disabled: true,
    onChange: (value: boolean) => console.log(value),
  },
};

export const WithCustomTitle = {
  args: {
    checked: true,
    title: 'Custom Tooltip Text',
    label: 'Hover to see tooltip',
    onChange: (value: boolean) => console.log(value),
  },
};

export const Comparison = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-lg font-bold">Size Variations</h3>
        <Checkbox
          name="size-sm"
          size="sm"
          label="Small (sm)"
          checked
          onChange={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="size-md"
          size="md"
          label="Medium (md)"
          checked
          onChange={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="size-lg"
          size="lg"
          label="Large (lg)"
          checked
          onChange={(value: boolean) => console.log(value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-lg font-bold">State Variations</h3>
        <Checkbox
          name="state-checked"
          label="Checked"
          checked
          onChange={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="state-unchecked"
          label="Unchecked"
          checked={false}
          onChange={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="state-disabled"
          label="Disabled Checked"
          checked
          disabled
          onChange={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="state-disabled-unchecked"
          label="Disabled Unchecked"
          checked={false}
          disabled
          onChange={(value: boolean) => console.log(value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Checkbox
          name="tooltip-default"
          label="Default Tooltip"
          checked
          title="This is the default tooltip"
          onChange={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="tooltip-custom"
          label="Custom Tooltip"
          checked
          title="Custom help message"
          onChange={(value: boolean) => console.log(value)}
        />
      </div>
      <Checkbox
        name="mixed-1"
        label="Large Unchecked"
        size="lg"
        checked={false}
        onChange={(value: boolean) => console.log(value)}
      />
      <Checkbox
        name="mixed-2"
        label="Medium Disabled"
        size="md"
        checked
        disabled
        onChange={(value: boolean) => console.log(value)}
      />
      <Checkbox
        name="mixed-3"
        label="Small with Tooltip"
        size="sm"
        checked
        title="Small checkbox tooltip"
        onChange={(value: boolean) => console.log(value)}
      />
    </div>
  ),
};
