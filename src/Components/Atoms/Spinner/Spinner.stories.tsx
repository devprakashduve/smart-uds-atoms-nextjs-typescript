import Spinner from './index';

export default {
  title: 'Components/Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      description: 'Width of the spinner.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 50 },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'Height of the spinner.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 50 },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Custom class names to apply to the spinner.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

export const Large = {
  args: {
    width: 100,
    height: 100,
    className: '',
  },
};

export const Small = {
  args: {
    width: 30,
    height: 30,
    className: '',
  },
};
