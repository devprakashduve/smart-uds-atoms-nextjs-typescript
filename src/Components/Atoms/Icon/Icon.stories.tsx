import Icon from './index';

const iconOptions = [
  'search',
  'openEye',
  'closeEye',
  'phone',
  'envelop',
  'user',
  'facebook',
  'home',
  'bell',
  'cog',
  'close',
  'check',
  'plus',
  'minus',
  'warning',
  'arrowPath',
  'chartPie',
  'cursorArrowRays',
  'fingerPrint',
  'squaresPlus',
  'bellAlert',
  'lightBulb',
  'chevronDown',
  'playCircle',
  'chatBubbleLeftRight',
  'bars3',
  'arrowRight',
  'chevronLeft',
  'chevronRight',
];

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: iconOptions,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'solid'],
      },
    },
    className: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    name: 'search',
    variant: 'outline',
  },
};

export const AllIcons = () => (
  <div className="flex flex-wrap gap-4">
    {iconOptions.map((icon) => (
      <div key={icon} className="flex flex-col items-center gap-2">
        <Icon
          name={icon}
          variant="outline"
          className="text-primary-dark transition-all hover:text-primary"
        />
        <Icon
          name={icon}
          variant="solid"
          className="text-primary-dark transition-all hover:text-primary"
        />
        <span>{icon}</span>
      </div>
    ))}
  </div>
);
