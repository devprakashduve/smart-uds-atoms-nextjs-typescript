import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UserProfileTemplate from '.';
import { UserProfileTemplateProps } from './UserProfileTemplateProps.interface';

export default {
  title: 'Components/Templates/UserProfileTemplate',
  component: UserProfileTemplate,
} as Meta;

const Template: StoryFn<UserProfileTemplateProps> = (args) => (
  <UserProfileTemplate {...args} />
);

export const DefaultUserProfileTemplate = Template.bind({});
DefaultUserProfileTemplate.args = {
  userName: 'John Doe',
  userEmail: 'john.doe@example.com',
  userAvatar: 'https://via.placeholder.com/150',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec nisl.',
  activities: (
    <ul>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Activity 1
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Activity 2
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-gray-400">
          Activity 3
        </a>
      </li>
    </ul>
  ),
  children: (
    <div>
      <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
      <p className="mt-4 text-gray-600">
        I'm a software developer with a passion for creating user-friendly
        applications. I love coding, learning new technologies, and
        collaborating with like-minded individuals.
      </p>
    </div>
  ),
};
