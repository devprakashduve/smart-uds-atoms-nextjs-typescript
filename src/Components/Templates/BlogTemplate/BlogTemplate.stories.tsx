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
    megaMenu: <div className="p-4 border-b bg-white text-center font-bold">Tech Blog</div>,
    featuredPost: (
      <div className="bg-gray-900 text-white p-12 rounded-xl mb-8">
        <h2 className="text-3xl font-bold">Featured: Mastering React 19</h2>
        <p className="mt-4 text-gray-400">Everything you need to know about the latest React version...</p>
      </div>
    ),
    posts: (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-b pb-6">
            <h3 className="text-xl font-bold">Article Title {i}</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        ))}
      </div>
    ),
    sidebar: (
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold mb-2">Categories</h4>
          <ul className="text-blue-600 space-y-1">
            <li>Development</li>
            <li>Design</li>
            <li>Tooling</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold mb-2">Popular Tags</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">#nextjs</span>
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">#typescript</span>
          </div>
        </div>
      </div>
    ),
    footer: <div className="p-10 border-t bg-gray-50 text-center text-gray-400">© 2026 Tech Blog</div>,
  },
};

export const WithoutSidebar: Story = {
  args: {
    ...Default.args,
    sidebar: undefined,
  },
};
