import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // Import action addon

import MegaMenu from '.';
import { MenuItem, MenuAlignment } from './MegaMenu.interface'; // Import interfaces & MenuAlignment

// --- Sample Data for Stories ---
const defaultMenuData: MenuItem[] = [
  { id: 'home', label: 'Home', href: '/home' },
  {
    id: 'category-1', // Changed ID
    label: 'Category 1', // Changed Label
    href: '/category-1', // Changed href
    megaMenuColumns: [
      {
        // Level 1
        id: 'cat1-col1', // Changed ID
        level: 1,
        widthClass: 'w-60',
        links: [
          {
            label: 'Sub Category 1.1',
            href: '/cat1/sub1',
            styleType: 'chevron',
            revealsColumnId: 'cat1-col2-sub1',
          }, // Changed label, href, revealsId
          { label: 'Feature 1.2', href: '/cat1/feat2', styleType: 'default' }, // Changed label, href
          { label: 'Feature 1.3', href: '/cat1/feat3', styleType: 'default' }, // Changed label, href
          {
            label: 'About Category 1',
            href: '/cat1/about',
            styleType: 'default',
          }, // Changed label, href
          {
            label: 'Support for Cat 1',
            href: '/cat1/support',
            styleType: 'default',
          }, // Changed label, href
        ],
      },
      {
        // Level 2 - Triggered by '/cat1/sub1'
        id: 'cat1-col2-sub1', // Changed ID
        level: 2,
        parentColumnId: 'cat1-col1',
        triggerLinkHref: '/cat1/sub1', // Matches trigger link href
        title: 'About Sub Category 1.1', // Changed title
        widthClass: 'w-60',
        links: [
          {
            label: 'Product A',
            href: '/cat1/sub1/prod-a',
            styleType: 'chevron',
            revealsColumnId: 'cat1-col3-prod-a',
          }, // Changed label, href, revealsId
          {
            label: 'Product B',
            href: '/cat1/sub1/prod-b',
            styleType: 'chevron',
            revealsColumnId: 'cat1-col3-prod-b',
          }, // Changed label, href, revealsId
          {
            label: 'Service C',
            href: '/cat1/sub1/serv-c',
            styleType: 'chevron',
          }, // Changed label, href
        ],
      },
      {
        // Level 3 - Triggered by '/cat1/sub1/prod-a'
        id: 'cat1-col3-prod-a', // Changed ID
        level: 3,
        parentColumnId: 'cat1-col2-sub1',
        triggerLinkHref: '/cat1/sub1/prod-a', // Matches trigger link href
        title: 'About Product A', // Changed title
        widthClass: 'w-72',
        links: [
          {
            label: 'Specifications',
            href: '/cat1/sub1/prod-a/specs',
            styleType: 'default',
          }, // Changed label, href
          {
            label: 'Usage Guide',
            href: '/cat1/sub1/prod-a/guide',
            styleType: 'default',
          }, // Changed label, href
        ],
      },
      {
        // Level 3 - Triggered by '/cat1/sub1/prod-b'
        id: 'cat1-col3-prod-b', // Changed ID
        level: 3,
        parentColumnId: 'cat1-col2-sub1',
        triggerLinkHref: '/cat1/sub1/prod-b', // Matches trigger link href
        title: 'About Product B', // Changed title
        widthClass: 'w-72',
        links: [
          {
            label: 'Product B Info 1',
            href: '/cat1/sub1/prod-b/info1',
            styleType: 'default',
          }, // Changed label, href
          {
            label: 'Product B Info 2',
            href: '/cat1/sub1/prod-b/info2',
            styleType: 'default',
          }, // Changed label, href
        ],
      },
    ],
  },
  {
    // Top Level "Category 2" - Simpler Example
    id: 'category-2', // Changed ID
    label: 'Category 2', // Changed Label
    href: '/category-2', // Changed href
    megaMenuColumns: [
      {
        // Only Level 1
        id: 'cat2-col1', // Changed ID
        level: 1,
        widthClass: 'w-72',
        links: [
          { label: 'All Category 2 Items', href: '/category-2/all' }, // Changed label, href
          { label: 'Featured Item Y', href: '/category-2/item-y' }, // Changed label, href
        ],
      },
    ],
  },
  { id: 'support', label: 'Support Center', href: '/support' }, // Changed label
  { id: 'resources', label: 'Resource Hub', href: '/resources' }, // Changed label
];

// You can now use this `defaultMenuData` in your Storybook stories or tests.

const meta: Meta<typeof MegaMenu> = {
  title: 'Components/Organisms/NavBarGroup/MegaMenu',
  component: MegaMenu,
  parameters: {
    // Optional Storybook parameters
    layout: 'fullscreen', // Often useful for full-width navs
  },
  tags: ['autodocs'], // Enable automatic documentation generation
  argTypes: {
    menuData: { control: 'object' },
    logoSrc: { control: 'text' },
    logoAlt: { control: 'text' },
    logoHref: { control: 'text' },
    menuAlignment: {
      control: 'select',
      options: ['left', 'center', 'right'] as MenuAlignment[],
    },
    showSearch: { control: 'boolean' },
    isLoggedIn: { control: 'boolean' },
    onSearchClick: { action: 'searchClicked' },
    onLoginClick: { action: 'loginClicked' },
    onLogoutClick: { action: 'logoutClicked' },
    onSignupClick: { action: 'signupClicked' },
    // Featured product props are part of menuData items, not top-level args
  },
};

export default meta;
type Story = StoryObj<typeof MegaMenu>;

// --- Sample Data with Featured Product ---
const menuDataWithFeaturedProduct: MenuItem[] = defaultMenuData.map((item) => {
  if (item.id === 'category-1') {
    // Add featured product to 'Category 1'
    return {
      ...item,
      featuredProductImageSrc: '/bannerImages/banner1.jpg', // Example image path
      featuredProductImageAlt: 'Featured Gadget',
      featuredProductTitle: 'Explore Our Latest Gadget',
      featuredProductHref: '/products/featured-gadget',
    };
  }
  return item;
});

// Default story using the sample data with featured product
export const Default: Story = {
  args: {
    menuData: menuDataWithFeaturedProduct, // Use updated data
    // Add other args like logo, search etc. if desired for the default view
    logoSrc: '/images/logo.png',
    showSearch: true,
  },
};

// Story with simpler data (only one level)
export const SimpleMenu: Story = {
  args: {
    menuData: [
      { id: 'home', label: 'Home', href: '/home' },
      {
        id: 'about',
        label: 'About Us',
        href: '/about',
        megaMenuColumns: [
          {
            id: 'about-col1',
            level: 1,
            widthClass: 'w-64',
            links: [
              { label: 'Our Mission', href: '/about/mission' },
              { label: 'History', href: '/about/history' },
            ],
          },
        ],
      },
      { id: 'contact', label: 'Contact', href: '/contact' },
    ],
  },
};

// Story without any mega menus
export const NoMegaMenus: Story = {
  args: {
    menuData: [
      { id: 'item1', label: 'Item 1', href: '/item1' },
      { id: 'item2', label: 'Item 2', href: '/item2' },
      { id: 'item3', label: 'Item 3', href: '/item3' },
    ],
  },
};

// Story with Logo and Search (Now inherits featured product from Default)
export const WithLogoAndSearch: Story = {
  args: {
    ...Default.args, // Reuse default args (which now includes featured product data)
    logoSrc: '/images/logo.png',
    logoAlt: 'My Company Logo',
    logoHref: '/',
    showSearch: true,
    onSearchClick: action('searchClicked'),
    onLoginClick: action('loginClicked'),
    onSignupClick: action('signupClicked'),
  },
};

// Story with Center Alignment
export const CenterAligned: Story = {
  args: {
    ...WithLogoAndSearch.args, // Reuse logo and search setup
    menuAlignment: 'center',
  },
};

// Story with Right Alignment
export const RightAligned: Story = {
  args: {
    ...WithLogoAndSearch.args, // Reuse logo and search setup
    menuAlignment: 'right',
  },
};

// Story simulating Logged In state
export const LoggedIn: Story = {
  args: {
    ...WithLogoAndSearch.args, // Reuse logo and search setup
    isLoggedIn: true,
    onLogoutClick: action('logoutClicked'),
  },
};
