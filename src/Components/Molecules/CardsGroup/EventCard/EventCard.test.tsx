import React from 'react';
import { render } from '@testing-library/react';
import EventCard from './index';

describe('EventCard', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <EventCard
        title="Tech Conference 2025"
        description="Join us for a day of networking and insightful talks on the future of technology."
        date="March 20, 2025"
        imageUrl="/images/avatar.jpg"
      />
    );

    expect(getByAltText('Tech Conference 2025')).toBeInTheDocument();
    expect(getByText('Tech Conference 2025')).toBeInTheDocument();
    expect(
      getByText(
        'Join us for a day of networking and insightful talks on the future of technology.'
      )
    ).toBeInTheDocument();
    expect(getByText('📅 March 20, 2025')).toBeInTheDocument();
  });
});
