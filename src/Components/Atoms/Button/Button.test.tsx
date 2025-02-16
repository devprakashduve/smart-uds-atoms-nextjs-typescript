import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button Component', () => {
  it('renders as a <button> element when no href is provided', () => {
    render(
      <Button variant="default" onClick={() => {}}>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button', { name: /Click Me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders as an <a> element when href is provided', () => {
    render(
      <Button variant="default" href="https://example.com" onClick={() => {}}>
        Link Button
      </Button>
    );
    const link = screen.getByRole('link', { name: /Link Button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    render(
      <Button variant="default" onClick={onClickMock}>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button', { name: /Click Me/i });
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const onClickMock = jest.fn();
    render(
      <Button variant="default" onClick={onClickMock} disabled>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button', { name: /Click Me/i });
    fireEvent.click(button);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('applies a custom aria-label if provided', () => {
    render(
      <Button variant="default" onClick={() => {}} ariaLabel="Custom Aria">
        Custom Aria Button
      </Button>
    );
    // The aria-label is applied to the button element, so we search by role with that label.
    const button = screen.getByRole('button', { name: /Custom Aria/i });
    expect(button).toBeInTheDocument();
  });
});
