import Loader from '.';

export default {
  title: 'Components/Atoms/Loader',
  component: Loader,
  tags: ['autodocs'],
};

export const SmallLoader = {
  args: {
    size: 'small',
    color: 'blue',
    speed: 'normal',
  },
};

export const MediumLoader = {
  args: {
    size: 'medium',
    color: 'green',
    speed: 'slow',
  },
};

export const LargeLoader = {
  args: {
    size: 'large',
    color: 'red',
    speed: 'fast',
  },
};
