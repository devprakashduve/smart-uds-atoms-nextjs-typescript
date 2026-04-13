import { Meta, StoryObj } from '@storybook/react';
import EcommerceHomePage from './index';

const meta: Meta<typeof EcommerceHomePage> = {
  title: 'Pages/Ecommerce/HomePage',
  component: EcommerceHomePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof EcommerceHomePage>;

export const Default: Story = {};
