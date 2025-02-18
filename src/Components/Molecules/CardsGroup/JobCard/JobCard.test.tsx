import { render, screen } from '@testing-library/react';
import JobCard from './index';

describe('JobCard', () => {
  it('renders correctly with given props', () => {
    render(
      <JobCard
        title="Frontend Developer"
        company="TechCorp"
        description="Looking for a React.js expert with 3+ years of experience."
        location="Remote"
        salary="₹12LPA"
      />
    );

    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Company: TechCorp')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Looking for a React.js expert with 3+ years of experience.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('📍 Remote')).toBeInTheDocument();
    expect(screen.getByText('💰 ₹12LPA')).toBeInTheDocument();
    expect(screen.getByText('Apply Now')).toBeInTheDocument();
  });
});
