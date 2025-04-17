import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PageTemplate from '.';
import { PageTemplateProps } from './PageTemplate.interface';

// Mock Header/Footer for simplicity in stories
const MockHeader = <div style={{ padding: '1rem', background: '#eee' }}>Mock Header</div>;
const MockFooter = <div style={{ padding: '1rem', background: '#ddd' }}>Mock Footer</div>;

const meta: Meta<typeof PageTemplate> = {
  title: 'Components/Templates/PageTemplate',
  component: PageTemplate,
  tags: ['autodocs'],
  argTypes: {
    pageTitle: { control: 'text' },
    pageSubTitle: { control: 'text' },
    sectionTextAlign: { control: 'radio', options: ['left', 'center', 'right'] },
    sectionBorder: { control: 'boolean' },
    children: { control: 'text' }, // Control might not render complex children well
  },
};

export default meta;
type Story = StoryObj<typeof PageTemplate>;

const defaultArgs: PageTemplateProps = {
  header: MockHeader,
  footer: MockFooter,
  pageTitle: 'Page Title Here',
  pageSubTitle: 'This is a subtitle explaining the page content.',
  children: (
    <div style={{ padding: '1rem 0' }}>
      <p>Main content area for the page template.</p>
      <p>It can contain various components and information.</p>
    </div>
  ),
  sectionBorder: false,
  sectionTextAlign: 'left',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const CenteredContent: Story = {
  args: {
    ...defaultArgs,
    pageTitle: 'Centered Title',
    pageSubTitle: 'This content is center-aligned within the section.',
    sectionTextAlign: 'center',
  },
};

export const WithBorder: Story = {
  args: {
    ...defaultArgs,
    pageTitle: 'Section with Border',
    sectionBorder: true,
  },
};

export const Minimal: Story = {
  args: {
    header: undefined,
    footer: undefined,
    pageTitle: undefined,
    pageSubTitle: undefined,
    children: <p>Minimal content only.</p>,
  },
}; 