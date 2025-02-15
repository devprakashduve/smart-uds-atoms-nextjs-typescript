import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tabs from '.';
import { TabsProps } from './TabsProps.interface';

export default {
  title: 'Components/Molecules/Tabs',
  component: Tabs,
} as Meta;

const Template: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  tabs: [
    { id: 'tab1', label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { id: 'tab3', label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ],
  defaultActiveTab: 'tab1',
};
