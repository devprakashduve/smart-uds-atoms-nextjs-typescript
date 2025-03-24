import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundPage from '.';

describe('NotFoundPage', () => {
  test('renders title text', () => {
    render(<NotFoundPage title="Custom 404" />);
    const errorText = screen.getByTestId('title-text');
    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveTextContent('Custom 404');
  });

  test('renders page not found message', () => {
    render(<NotFoundPage message="Custom Message" />);
    const message = screen.getByTestId('message-text');
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent('Custom Message');
  });

  test('renders sorry message', () => {
    render(<NotFoundPage sorryMessage="Custom sorry message" />);
    const sorryMessage = screen.getByTestId('sorry-message-text');
    expect(sorryMessage).toBeInTheDocument();
    expect(sorryMessage).toHaveTextContent('Custom sorry message');
  });

  test('renders Go back home link', () => {
    render(<NotFoundPage homeLinkText="Custom Home" />);
    const homeCustomLink = screen.getByText('Custom Home');
    expect(homeCustomLink).toBeInTheDocument();
  });

  test('renders Contact support link', () => {
    render(<NotFoundPage contactLinkText="Custom Contact" />);
    const supportCustomLink = screen.getByText('Custom Contact');
    expect(supportCustomLink).toBeInTheDocument();
  });

  test('renders Go back home link with correct href', () => {
    render(<NotFoundPage homeLinkHref="/custom-home" homeLinkText="Home" />);
    const { container } = render(
      <NotFoundPage homeLinkHref="/custom-home" homeLinkText="Home" />
    );
    const homeCustomLink = container.querySelector('.home-link');
    expect(homeCustomLink).toBeInTheDocument();
    expect(homeCustomLink).toHaveAttribute('href', '/custom-home');
  });

  test('renders Contact support link with correct href', () => {
    render(
      <NotFoundPage
        contactLinkHref="/custom-contact"
        contactLinkText="Contact"
      />
    );
    const { container } = render(
      <NotFoundPage
        contactLinkHref="/custom-contact"
        contactLinkText="Contact"
      />
    );
    const supportCustomLink = container.querySelector('.contact-link');
    expect(supportCustomLink).toBeInTheDocument();
    expect(supportCustomLink).toHaveAttribute('href', '/custom-contact');
  });

  test('does not render Go back home link when homeLinkText is not provided', () => {
    render(<NotFoundPage homeLinkText="" />);
    const homeCustomLink = screen.queryByTestId('home-link');
    expect(homeCustomLink).not.toBeInTheDocument();
  });

  test('does not render Contact support link when contactLinkText is not provided', () => {
    render(<NotFoundPage contactLinkText="" />);
    const supportCustomLink = screen.queryByTestId('contact-link');
    expect(supportCustomLink).not.toBeInTheDocument();
  });
});
