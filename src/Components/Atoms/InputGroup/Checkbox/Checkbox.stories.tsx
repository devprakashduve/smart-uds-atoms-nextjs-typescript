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
    toggleChecked: (value: boolean) => console.log(value),
    label: 'Checked State',
    rounded: true,
  },
};

export const Unchecked = {
  args: {
    checked: false,
    toggleChecked: (value: boolean) => console.log(value),
    label: 'Unchecked State',
  },
};

export const SmallSize = {
  args: {
    checked: true,
    size: 'sm',
    label: 'Small Checkbox',
  },
};

export const Disabled = {
  args: {
    checked: false,
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const WithCustomTitle = {
  args: {
    checked: true,
    title: 'Custom Tooltip Text',
    label: 'Hover to see tooltip',
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
          toggleChecked={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="size-md"
          size="md"
          label="Medium (md)"
          checked
          toggleChecked={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="size-lg"
          size="lg"
          label="Large (lg)"
          checked
          rounded={true}
          toggleChecked={(value: boolean) => console.log(value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-lg font-bold">State Variations</h3>
        <Checkbox
          name="state-checked"
          label="Checked"
          checked
          toggleChecked={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="state-unchecked"
          label="Unchecked"
          checked={false}
          toggleChecked={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="state-disabled"
          label="Disabled Checked"
          checked
          disabled
          toggleChecked={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="state-disabled-unchecked"
          label="Disabled Unchecked"
          checked={false}
          disabled
          toggleChecked={(value: boolean) => console.log(value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Checkbox
          name="tooltip-default"
          label="Default Tooltip"
          checked
          title="This is the default tooltip"
          toggleChecked={(value: boolean) => console.log(value)}
        />
        <Checkbox
          name="tooltip-custom"
          label="Custom Tooltip"
          checked
          title="Custom help message"
          toggleChecked={(value: boolean) => console.log(value)}
        />
      </div>
      <Checkbox
        name="mixed-1"
        label="Large Unchecked"
        size="lg"
        checked={false}
        toggleChecked={(value: boolean) => console.log(value)}
      />
      <Checkbox
        name="mixed-2"
        label="Medium Disabled"
        size="md"
        checked
        disabled
        toggleChecked={(value: boolean) => console.log(value)}
      />
      <Checkbox
        name="mixed-3"
        label="Small with Tooltip"
        size="sm"
        checked
        title="Small checkbox tooltip"
        toggleChecked={(value: boolean) => console.log(value)}
      />
    </div>
  ),
};
