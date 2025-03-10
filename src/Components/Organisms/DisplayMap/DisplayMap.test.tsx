import { render, screen } from '@testing-library/react';
import DisplayMap from '.';

describe('DisplayMap Component', () => {
  const defaultProps = {
    mapSrc: 'https://maps.google.com/embed',
    title: 'Contact Us',
    description: 'We would love to hear from you!',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
    buttonText: 'Send Message',
    footerText: 'We will get back to you as soon as possible.',
  };

  it('renders the title and description', () => {
    render(<DisplayMap {...defaultProps} />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(
      screen.getByText('We would love to hear from you!')
    ).toBeInTheDocument();
  });

  it('renders the footer text', () => {
    render(<DisplayMap {...defaultProps} />);
    expect(
      screen.getByText('We will get back to you as soon as possible.')
    ).toBeInTheDocument();
  });

  it('renders the Google Map iframe', () => {
    render(<DisplayMap {...defaultProps} />);
    expect(screen.getByTitle('map')).toBeInTheDocument();
  });
});
