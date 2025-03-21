import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import MegaMenu from '.';

export default {
  title: 'Components/Organisms/HeaderGroup/MegaMenu',
  component: MegaMenu,
} as Meta<typeof MegaMenu>;

const Template: StoryFn<typeof MegaMenu> = () => <MegaMenu />;

export const Default = Template.bind({});
Default.args = {};
