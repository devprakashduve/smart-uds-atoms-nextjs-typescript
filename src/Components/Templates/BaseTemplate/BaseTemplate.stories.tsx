import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from '.';
import { BaseTemplateProps } from './BaseTemplate.interface';

const meta: Meta<typeof BaseTemplate> = {
  title: 'Components/Templates/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' }, // Basic controls for demo
    footer: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

const defaultArgs: BaseTemplateProps = {
  header: <div style={{ padding: '1rem', background: '#eee' }}>Mock Header</div>,
  footer: <div style={{ padding: '1rem', background: '#ddd' }}>Mock Footer</div>,
  children: (
    <div style={{ padding: '2rem' }}>
      <h2>Main Content Area</h2>
      <p>This is where the page content would go.</p>
    </div>
  ),
  className: '',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithoutHeaderFooter: Story = {
  args: {
    header: undefined,
    footer: undefined,
    children: defaultArgs.children,
  },
}; 