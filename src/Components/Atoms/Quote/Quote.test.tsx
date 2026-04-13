import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from './index';

describe('Quote', () => {
  it('renders the quote content', () => {
    render(
      <Quote content="The best way to predict the future is to invent it." />
    );
    expect(
      screen.getByText('The best way to predict the future is to invent it.')
    ).toBeInTheDocument();
  });

  it('renders as a blockquote element', () => {
    render(<Quote content="Test quote" />);
    expect(screen.getByRole('blockquote')).toBeInTheDocument();
  });

  it('renders author when provided', () => {
    render(<Quote content="Test quote" author="Alan Kay" />);
    expect(screen.getByText('Alan Kay')).toBeInTheDocument();
  });

  it('renders source when provided', () => {
    render(
      <Quote content="Test quote" author="Alan Kay" source="PARC Research" />
    );
    expect(screen.getByText(/PARC Research/)).toBeInTheDocument();
  });

  it('does not render author footer when neither author nor source is provided', () => {
    const { container } = render(<Quote content="Test quote" />);
    expect(container.querySelector('footer')).not.toBeInTheDocument();
  });

  it('renders author footer when only source is provided', () => {
    const { container } = render(
      <Quote content="Test quote" source="Some Book" />
    );
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('shows decorative quote icon by default', () => {
    const { container } = render(<Quote content="Test quote" />);
    // The decorative span with aria-hidden
    const icon = container.querySelector('[aria-hidden="true"]');
    expect(icon).toBeInTheDocument();
  });

  it('hides quote icon when showIcon is false', () => {
    const { container } = render(
      <Quote content="Test quote" showIcon={false} />
    );
    const icon = container.querySelector('[aria-hidden="true"]');
    expect(icon).not.toBeInTheDocument();
  });

  it('applies custom className to the blockquote', () => {
    const { container } = render(
      <Quote content="Test quote" className="custom-class" />
    );
    expect(container.querySelector('blockquote')).toHaveClass('custom-class');
  });

  it('renders content and author together', () => {
    render(
      <Quote
        content="Innovation distinguishes between a leader and a follower."
        author="Steve Jobs"
        source="Various interviews"
      />
    );
    expect(
      screen.getByText(
        'Innovation distinguishes between a leader and a follower.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Steve Jobs')).toBeInTheDocument();
    expect(screen.getByText(/Various interviews/)).toBeInTheDocument();
  });
});
