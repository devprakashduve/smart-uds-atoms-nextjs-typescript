import React from 'react';
import { render } from '@testing-library/react';
import TeamMemberCard from './index';

describe('TeamMemberCard', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <TeamMemberCard
        name="John Smith"
        role="Frontend Developer"
        imageUrl="/images/avatar.jpg"
        linkedInUrl="https://linkedin.com"
        linkedInText="LinkedIn"
        gitHubUrl="https://github.com"
        gitHubText="GitHub"
      />
    );

    expect(getByAltText('John Smith')).toBeInTheDocument();
    expect(getByText('John Smith')).toBeInTheDocument();
    expect(getByText('Frontend Developer')).toBeInTheDocument();
    expect(getByText('LinkedIn')).toBeInTheDocument();
    expect(getByText('GitHub')).toBeInTheDocument();
  });
});
