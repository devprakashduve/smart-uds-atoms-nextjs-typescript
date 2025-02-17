import Divider from './index';

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export const HorizontalThin = {
  args: {
    thickness: 'thin',
  },
};

export const HorizontalMedium = {
  args: {
    thickness: 'medium',
  },
};

export const HorizontalThick = {
  args: {
    thickness: 'thick',
  },
};

export const HorizontalThickDark = {
  args: {
    thickness: 'thick',
    className: 'border-primary-dark',
  },
};
