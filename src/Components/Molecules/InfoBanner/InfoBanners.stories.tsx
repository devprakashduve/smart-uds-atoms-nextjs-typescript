import { Meta, StoryObj } from '@storybook/react';
import InfoBanner from '.';

export default {
  title: 'Components/Molecules/InfoBanner',
  component: InfoBanner,
  argTypes: {
    className: { control: 'text' },
    onDismiss: { action: 'dismissed' },
  },
} as Meta<typeof InfoBanner>;

const Template: StoryObj<typeof InfoBanner> = {
  render: (args) => <InfoBanner {...args} />,
};

export const Default = {
  ...Template,
  args: {
    title: 'GeneriCon 2023',
    subtitle: 'Join us in Denver from June 7 – 9 to see what’s coming next.',
    imageUrl: '/images/avatar.jpg',
    linkUrl: '#',
    altText: 'Conference icon',
  },
};

export const WithSubtitle = {
  ...Template,
  args: {
    ...Default.args,
    title: 'Special Offer',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const WithCustomStyle = {
  ...Template,
  args: {
    ...Default.args,
    className: 'bg-accent',
    title: 'Custom Styled Banner',
  },
};
