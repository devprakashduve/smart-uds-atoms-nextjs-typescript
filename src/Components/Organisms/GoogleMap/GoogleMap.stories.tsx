import { Meta, StoryFn } from '@storybook/react';
import GoogleMap from '.';
import { GoogleMapProps } from './GoogleMap.interface';

export default {
  title: 'Components/GoogleMap',
  component: GoogleMap,
  argTypes: {},
} as Meta;

const Template: StoryFn<GoogleMapProps> = (args) => <GoogleMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  mapSrc:
    'https://maps.google.com/maps?width=100%&height=600&hl=en&q=New%20York&ie=UTF8&t=&z=14&iwloc=B&output=embed',
  title: 'Contact Us',
  description: 'We would love to hear from you! Fill out the form below.',
  emailPlaceholder: 'Your email',
  messagePlaceholder: 'Your message',
  buttonText: 'Send Message',
  footerText: 'We will get back to you as soon as possible.',
};
