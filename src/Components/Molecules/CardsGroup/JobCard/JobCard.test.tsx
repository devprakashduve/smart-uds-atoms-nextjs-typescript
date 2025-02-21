import { render, screen } from '@testing-library/react';
import JobCard from './index';

describe('JobCard', () => {
  it('renders correctly with given props', () => {
    const jobTitle = 'Frontend Developer';
    const companyName = 'TechCorp';
    const jobDescription =
      'Looking for a React.js expert with 3+ years of experience.';
    const jobLocation = 'Remote';
    const jobSalary = '₹12LPA';
    const btnText = 'Apply Now';

    render(
      <JobCard
        title={jobTitle}
        company={companyName}
        description={jobDescription}
        location={jobLocation}
        salary={jobSalary}
        btnText={btnText}
      />
    );

    expect(screen.getByText(jobTitle)).toBeInTheDocument();
    expect(screen.getByText(`Company: ${companyName}`)).toBeInTheDocument();
    expect(screen.getByText(jobDescription)).toBeInTheDocument();
    expect(screen.getByText(`📍 ${jobLocation}`)).toBeInTheDocument();
    expect(screen.getByText(`💰 ${jobSalary}`)).toBeInTheDocument();
    expect(screen.getByText('Apply Now')).toBeInTheDocument();
  });
});
