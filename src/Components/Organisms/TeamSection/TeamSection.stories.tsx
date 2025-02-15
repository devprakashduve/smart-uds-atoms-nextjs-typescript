import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TeamSection from '.';

export default {
  title: 'Components/Organisms/TeamSection',
  component: TeamSection,
} as Meta<typeof TeamSection>;

const Template: StoryFn = (args) => <TeamSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
