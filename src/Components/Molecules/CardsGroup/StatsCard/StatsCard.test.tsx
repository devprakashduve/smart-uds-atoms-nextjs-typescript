import React from 'react';
import { render } from '@testing-library/react';
import StatsCard from './index';

test('renders StatsCard with props', () => {
  const { getByText } = render(
    <StatsCard
      title="Total Sales"
      value="₹ 1,20,500"
      lastUpdated="1 hour ago"
    />
  );

  expect(getByText('Total Sales')).toBeInTheDocument();
  expect(getByText('₹ 1,20,500')).toBeInTheDocument();
  expect(getByText('Last updated: 1 hour ago')).toBeInTheDocument();
});
