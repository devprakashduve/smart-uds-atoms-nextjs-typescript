import React from 'react';
import { render } from '@testing-library/react';
import StatsCard from './index';

test('renders StatsCard with props', () => {
  const { getByText } = render(
    <StatsCard
      cardTitle="Total Sales"
      cardValue="₹ 1,20,500"
      cardLastUpdated="1 hour ago"
    />
  );

  expect(getByText('Total Sales')).toBeInTheDocument();
  expect(getByText('₹ 1,20,500')).toBeInTheDocument();
  expect(getByText('Last updated: 1 hour ago')).toBeInTheDocument();
});
