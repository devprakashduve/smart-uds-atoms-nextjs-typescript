import { render, screen } from '@testing-library/react';
import ContactInformation from './index';

describe('ContactInformation Component', () => {
  it('renders the ContactInformation component', () => {
    render(
      <ContactInformation
        email={{ emailLabel: 'Email', emailAddress: 'test@example.com' }}
      />
    );

    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });
});
