import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LoginTemplate from '.';

export default {
  title: 'Components/Templates/LoginTemplate',
  component: LoginTemplate,
} as Meta<typeof LoginTemplate>;

const Template: StoryFn<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  email: '',
  password: '',
  onSubmit: (data) => {
    console.log('Form submitted:', data);
  },
};
