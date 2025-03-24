import { Meta, StoryFn } from '@storybook/react';
import HeroBannerImageContent from '.';
import { HeroBannerImageContentProps } from './HeroBannerImageContent.interface';

export default {
  title: 'Components/Organisms/HeroBannerGroup/HeroBannerImageContent',
  component: HeroBannerImageContent,
  argTypes: {
    imagePosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
} as Meta;

const Template: StoryFn<HeroBannerImageContentProps> = (args) => (
  <HeroBannerImageContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'consectetur adipiscing elit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
  primaryButtonText: 'Get Started',
  secondaryButtonText: 'Learn More',
  primaryButtonLink: '#',
  secondaryButtonLink: '#',
  imageSrc: '/bannerImages/banner1.jpg',
  imageAlt: 'Hero image',
  imagePosition: 'right',
};

export const ImageLeft = Template.bind({});
ImageLeft.args = {
  ...Default.args,
  imagePosition: 'left',
};
