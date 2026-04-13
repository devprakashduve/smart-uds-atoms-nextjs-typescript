import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SocialMediaTemplate from './index';

const meta: Meta<typeof SocialMediaTemplate> = {
  title: 'Components/Templates/SocialMediaTemplate',
  component: SocialMediaTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SocialMediaTemplate>;

export const Default: Story = {
  args: {
    megaMenu: (
      <div className="border-b bg-white p-4 font-bold">SocialSpace</div>
    ),
    leftSidebar: (
      <div className="space-y-4 p-4">
        <div className="font-bold text-blue-600">Home</div>
        <div>Explore</div>
        <div>Notifications</div>
        <div>Messages</div>
      </div>
    ),
    feed: (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="font-bold">User {i}</div>
            </div>
            <p>
              This is a social media post #{i}! How exciting to use atomic
              design!
            </p>
            <div className="mt-4 flex space-x-4 text-sm text-gray-500">
              <span>Like</span>
              <span>Comment</span>
              <span>Share</span>
            </div>
          </div>
        ))}
      </div>
    ),
    rightSidebar: (
      <div className="space-y-6 p-4">
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <h4 className="mb-2 font-bold">Trending</h4>
          <ul className="space-y-2 text-sm">
            <li>#ReactJS</li>
            <li>#AtomicDesign</li>
            <li>#NextJS</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <h4 className="mb-2 font-bold">Who to follow</h4>
          <div className="space-y-2">
            <div className="text-xs text-blue-600">Follow User X</div>
            <div className="text-xs text-blue-600">Follow User Y</div>
          </div>
        </div>
      </div>
    ),
    mobileNav: (
      <div className="flex justify-around border-t bg-white p-3">
        <span>🏠</span>
        <span>🔍</span>
        <span>🔔</span>
        <span>✉️</span>
      </div>
    ),
  },
};

export const FeedOnly: Story = {
  args: {
    megaMenu: (
      <div className="border-b bg-white p-4 font-bold">SocialSpace</div>
    ),
    feed: (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="font-bold">User {i}</div>
            </div>
            <p>
              This is a social media post #{i}! How exciting to use atomic
              design!
            </p>
            <div className="mt-4 flex space-x-4 text-sm text-gray-500">
              <span>Like</span>
              <span>Comment</span>
              <span>Share</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
};
