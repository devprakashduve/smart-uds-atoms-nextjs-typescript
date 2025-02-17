import ProgressBar from '.';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    value: 20,
    max: 100,
    height: 2,
    striped: false,
  },
};
export const BasicProgressBar = {
  args: {
    value: 50,
    max: 100,
    height: 3,
    striped: false,
  },
};

export const StripedprogressBar = {
  args: {
    value: 70,
    max: 100,
    height: 6,
    striped: true,
  },
};

export const FullprogressBar = {
  args: {
    value: 80,
    max: 100,
    height: 8,
    striped: false,
  },
};
