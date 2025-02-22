import { Meta, StoryFn } from '@storybook/react';
import NavBarLogoCustomLinks from '.';

export default {
  title: 'Components/Organisms/NavBarGroup/NavBarLogoCustomLinks',
  component: NavBarLogoCustomLinks,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof NavBarLogoCustomLinks> = (args) => (
  <NavBarLogoCustomLinks {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: '/images/logo.png',
  links: [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'About',
      href: '#',
      subCustomLinks: [
        {
          name: 'Our Team',
          href: '#',
          subCustomLinks: [
            { name: 'Member 1', href: '#' },
            { name: 'Member 2', href: '#' },
          ],
        },
        {
          name: 'Our Story',
          href: '#',
        },
      ],
    },
    {
      name: 'Services',
      href: '#',
      subCustomLinks: [
        {
          name: 'Consulting',
          href: '#',
        },
        {
          name: 'Development',
          href: '#',
        },
      ],
    },
    {
      name: 'Contact',
      href: '#',
    },
  ],
  searchPlaceHolder: 'search...',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  ...Default.args,
  backgroundColor: 'bg-gray-900 text-white',
};
