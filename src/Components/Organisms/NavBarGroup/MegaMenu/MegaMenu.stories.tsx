import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MegaMenu from './index';
import { MegaMenuProps } from './MegaMenu.interface';
import Icon from '@/Components/Atoms/Icon'; // Import Icon for login link

export default {
  title: 'Components/Organisms/NavBarGroup/MegaMenu',
  component: MegaMenu,
  parameters: {
    layout: 'fullscreen', // Use fullscreen layout for better navbar view
  },
} as Meta<typeof MegaMenu>;

const Template: StoryFn<MegaMenuProps> = (args) => <MegaMenu {...args} />;

const sampleData = {
  logo: {
    src: '/images/sandoz_logo_blue.svg', // Placeholder logo path
    alt: 'Sandoz Logo',
    href: '#',
  },
  topBarLinks: {
    contact: { name: 'Contact Us', href: '#' },
    language: { name: 'EN', href: '#' },
    login: {
      name: 'Login',
      href: '#',
      icon: <Icon name="userCircle" variant="outline" className="size-5" />,
    },
  },
  navigation: [
    {
      name: 'PRODUCTS',
      href: '/products',
      megaMenuColumns: [
        {
          heading: 'By Therapeutic Area',
          items: [
            { name: 'Allergy, Cold & Flu', href: '#' },
            { name: 'Analgesics', href: '#' },
            { name: 'Cardiovascular', href: '#' },
            { name: 'Central Nervous System', href: '#' },
            { name: 'Dermatology', href: '#' },
            { name: 'Gastrointestinal', href: '#' },
          ],
        },
        {
          heading: 'By Form',
          items: [
            { name: 'Oral Solids', href: '#' },
            { name: 'Injectables', href: '#' },
            { name: 'Topicals', href: '#' },
          ],
        },
        {
          heading: 'Featured',
          items: [
            { name: 'New Arrivals', href: '#' },
            { name: 'Patient Assistance', href: '#' },
          ],
        },
      ],
    },
    {
      name: 'DISEASE AREAS',
      href: '/disease-areas',
      megaMenuColumns: [
        {
          items: [
            { name: 'Immunology', href: '#' },
            { name: 'Oncology', href: '#' },
            { name: 'Respiratory', href: '#' },
            { name: 'Pain Management', href: '#' },
          ],
        },
      ],
    },
    {
      name: 'BIOSIMILARS',
      href: '/biosimilars',
      // No mega menu for this example
    },
    {
      name: 'SUPPORT',
      href: '/support',
      megaMenuColumns: [
        {
          items: [
            { name: 'Patient Resources', href: '#' },
            { name: 'Healthcare Professionals', href: '#' },
            { name: 'Contact Support', href: '#' },
          ],
        },
      ],
    },
    {
      name: 'ABOUT',
      href: '/about',
    },
  ],
  onSearchClick: () => alert('Search clicked!'), // Example action
};

export const Default = Template.bind({});
Default.args = {
  ...sampleData,
};

// Story for a menu without a top bar link href (e.g. if login opens a modal)
export const NoLoginHref = Template.bind({});
NoLoginHref.args = {
  ...sampleData,
  topBarLinks: {
    ...sampleData.topBarLinks,
    login: {
      ...sampleData.topBarLinks.login,
      href: '#!', // Indicate non-navigational click
      // Potentially add an onClick handler here if needed
    },
  },
}; 