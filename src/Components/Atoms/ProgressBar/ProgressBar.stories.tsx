import ProgressBar from './index';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    value: 50,
    max: 100,
    height: 0.5,
  },
};
export const BasicProgressBar = {
  args: {
    value: 50,
    max: 100,
    color: 'primary-dark',
    height: 3,
    striped: false,
  },
};

export const StripedProgressBar = {
  args: {
    value: 70,
    max: 100,
    color: 'primary-dark',
    height: 6,
    striped: true,
  },
};

export const FullProgressBar = {
  args: {
    value: 80,
    max: 100,
    color: 'primary-dark',
    height: 8,
    striped: false,
  },
};
