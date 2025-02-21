import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SearchBar from './index';
import { SearchBarProps } from './SearchBarProps.interface';

export default {
  title: 'Components/Molecules/SearchBar',
  component: SearchBar,
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => {
  const [searchValue, setSearchValue] = useState(args.value);

  const handleChange = (value: string) => {
    setSearchValue(value);
    console.log('Search value changed:', value);
  };

  const handleSearch = (value: string) => {
    console.log('Search initiated with value:', value);
  };

  return (
    <SearchBar
      {...args}
      value={searchValue}
      onChange={handleChange}
      onSearch={handleSearch}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Search...',
  className: '',
  noResultText: 'No Data...',
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: 'Initial value',
  placeholder: 'Search...',
  className: '',
};
