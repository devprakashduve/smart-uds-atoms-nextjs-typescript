import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './index';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Atoms/InputGroup/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="max-w-2xl p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    maxLength: { control: 'number' },
    rows: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

const Template: Story = {
  render: (args) => <TextArea {...args} />,
  args: {
    value: '',
    placeholder: 'Enter your text here...',
    onChange: (e) => console.log(e.target.value),
  },
};

export const Default = {
  ...Template,
};

export const Disabled = {
  ...Template,
  args: {
    ...Template.args,
    disabled: true,
    value: 'Disabled text area',
  },
};

export const WithCharacterLimit = {
  ...Template,
  args: {
    ...Template.args,
    maxLength: 150,
    showCharCount: true,
    placeholder: 'Type up to 150 characters...',
    id: 'limited-textarea',
  },
};

export const ReadOnly = {
  ...Template,
  args: {
    ...Template.args,
    readOnly: true,
    value: 'This text is read-only',
  },
};

export const CustomRows = {
  ...Template,
  args: {
    ...Template.args,
    rows: 6,
    placeholder: '6-row text area',
  },
};

export const WarningState = {
  ...Template,
  args: {
    ...Template.args,
    value: 'A'.repeat(190),
    maxLength: 200,
    showCharCount: true,
    placeholder: '10 characters remaining warning',
  },
};

export const ErrorState = {
  ...Template,
  args: {
    ...Template.args,
    value: 'A'.repeat(201),
    maxLength: 200,
    showCharCount: true,
    placeholder: 'Exceeded character limit',
  },
};

export const CompareStates: StoryObj<typeof TextArea> = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Variations</h3>
        <TextArea placeholder="Default state" />
        <TextArea
          placeholder="Disabled state"
          disabled
          value="Disabled content"
        />
        <TextArea
          placeholder="Read-only state"
          readOnly
          value="Read-only content"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Character Limits</h3>
        <TextArea
          placeholder="Normal character count"
          maxLength={100}
          showCharCount
          value="Initial value"
        />
        <TextArea
          placeholder="Warning state (10 remaining)"
          maxLength={100}
          showCharCount
          value={'A'.repeat(90)}
        />
        <TextArea
          placeholder="Error state (over limit)"
          maxLength={100}
          showCharCount
          value={'A'.repeat(101)}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizing</h3>
        <TextArea placeholder="Small (3 rows)" rows={3} />
        <TextArea placeholder="Large (8 rows)" rows={8} />
        <TextArea placeholder="Fixed width" className="w-64" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Special States</h3>
        <TextArea
          placeholder="Auto-focused"
          autoFocus
          className="ring-2 ring-primary-dark"
        />
        <TextArea
          placeholder="Custom styled"
          className="rounded-lg border-2 border-green-500"
        />
        <TextArea
          placeholder="With aria labels"
          aria-label="Description input field"
          id="description-field"
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        story:
          'Comparison of different textarea states and variations side-by-side',
      },
    },
  },
};
