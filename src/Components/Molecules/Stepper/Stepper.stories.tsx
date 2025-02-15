import Stepper from './index';

export default {
  title: 'Components/Molecules/Stepper',
  component: Stepper,
  argTypes: {
    steps: {
      control: { type: 'number', min: 2 },
      description: 'Total number of steps in the stepper.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
    },
    value: {
      control: { type: 'number', min: 1 },
      description: 'The current step in the stepper.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    onChange: {
      control: false,
      description: 'Callback triggered when the step changes.',
      table: {
        type: { summary: '(newStep: number) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showCounter: { control: { type: 'boolean' } },
  },
};

export const DefaultStepper = {
  args: {
    steps: 4,
    value: 2,
    showCounter: true,
  },
};

export const TwoSteps = {
  args: {
    steps: 2,
    value: 1,
    showCounter: true,
  },
};

export const FiveSteps = {
  args: {
    steps: 5,
    value: 1,
    showCounter: true,
  },
};

export const WithoutCounter = {
  args: {
    steps: 5,
    value: 3,
    showCounter: false,
  },
};
