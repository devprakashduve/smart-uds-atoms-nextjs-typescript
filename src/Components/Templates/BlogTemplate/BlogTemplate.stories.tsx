import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BlogTemplate from './index';

const meta: Meta<typeof BlogTemplate> = {
  title: 'Components/Templates/BlogTemplate',
  component: BlogTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogTemplate>;

export const Default: Story = {
  args: {
    megaMenu: (
      <div className="border-b bg-white p-4 text-center font-bold">
        Tech Blog
      </div>
    ),
    featuredPost: (
      <div className="mb-8 rounded-xl bg-gray-900 p-12 text-white">
        <h2 className="text-3xl font-bold">Featured: Mastering React 19</h2>
        <p className="mt-4 text-gray-400">
          Everything you need to know about the latest React version...
        </p>
      </div>
    ),
    posts: (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-b pb-6">
            <h3 className="text-xl font-bold">Article Title {i}</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
        ))}
      </div>
    ),
    sidebar: (
      <div className="space-y-6">
        <div className="rounded-lg bg-gray-50 p-4">
          <h4 className="mb-2 font-bold">Categories</h4>
          <ul className="space-y-1 text-blue-600">
            <li>Development</li>
            <li>Design</li>
            <li>Tooling</li>
          </ul>
        </div>
        <div className="rounded-lg bg-gray-50 p-4">
          <h4 className="mb-2 font-bold">Popular Tags</h4>
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-gray-200 px-2 py-1 text-xs">
              #nextjs
            </span>
            <span className="rounded bg-gray-200 px-2 py-1 text-xs">
              #typescript
            </span>
          </div>
        </div>
      </div>
    ),
    footer: (
      <div className="border-t bg-gray-50 p-10 text-center text-gray-400">
        © 2026 Tech Blog
      </div>
    ),
  },
};

export const WithoutSidebar: Story = {
  args: {
    ...Default.args,
    sidebar: undefined,
  },
};
