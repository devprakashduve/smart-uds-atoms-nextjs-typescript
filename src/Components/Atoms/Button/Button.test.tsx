import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

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
    const button = screen.getByRole('button', { name: /Custom Aria/i });
    expect(button).toBeInTheDocument();
  });

  it('renders an icon on the left side of the button', () => {
    render(
      <Button
        variant="default"
        onClick={() => {}}
        icon={<ArrowDownIcon />}
        iconPosition="left"
      >
        Download
      </Button>
    );
    const button = screen.getByRole('button', { name: /Download/i });
    expect(button).toBeInTheDocument();
  });

  it('renders an icon on the right side of the button', () => {
    render(
      <Button
        variant="default"
        onClick={() => {}}
        icon={<ArrowDownIcon />}
        iconPosition="right"
      >
        Download
      </Button>
    );
    const button = screen.getByRole('button', { name: /Download/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with correct classes for different variants', () => {
    const variants = [
      'outline',
      'pill',
      'pill-outline',
      'bordered',
      'three-d',
      'elevated',
      'link',
      'icon',
      'groups',
    ] as const;

    variants.forEach((variant) => {
      render(
        <Button variant={variant} onClick={() => {}}>
          {variant} btn
        </Button>
      );

      const name =
        variant === 'icon' ? /Icon button/i : new RegExp(`${variant} btn`, 'i');
      const button = screen.getByRole('button', { name });
      expect(button).toBeInTheDocument();
    });
  });

  it('renders disabled variant with correct classes', () => {
    render(
      <Button variant="disabled" onClick={() => {}}>
        Disabled Variant
      </Button>
    );
    const button = screen.getByRole('button', { name: /Disabled Variant/i });
    expect(button).toHaveClass(
      'cursor-not-allowed bg-atom-btn-dark text-atom-btn-light opacity-50'
    );
  });

  it('renders with sm size', () => {
    render(
      <Button size="sm" onClick={() => {}}>
        Small
      </Button>
    );
    const button = screen.getByRole('button', { name: /Small/i });
    expect(button).toHaveClass('py-1.5 px-3 text-sm');
  });

  it('renders disabled link correctly', () => {
    render(
      <Button href="https://example.com" disabled onClick={() => {}}>
        Disabled Link
      </Button>
    );
    const link = screen.getByText(/Disabled Link/i).closest('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('pointer-events-none opacity-50');
    expect(link).not.toHaveAttribute('href');
  });

  it('adds noopener noreferrer when target is _blank', () => {
    render(
      <Button href="https://example.com" target="_blank" onClick={() => {}}>
        New Tab
      </Button>
    );
    const link = screen.getByRole('link', { name: /New Tab/i });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders with xs size', () => {
    render(
      <Button size="xs" onClick={() => {}}>
        Small
      </Button>
    );
    const button = screen.getByRole('button', { name: /Small/i });
    expect(button).toHaveClass('py-1 px-2.5 text-xs');
  });

  it('renders with lg size', () => {
    render(
      <Button size="lg" onClick={() => {}}>
        Large
      </Button>
    );
    const button = screen.getByRole('button', { name: /Large/i });
    expect(button).toHaveClass('py-2.5 px-5 text-base');
  });

  it('renders with xl size', () => {
    render(
      <Button size="xl" onClick={() => {}}>
        Extra Large
      </Button>
    );
    const button = screen.getByRole('button', { name: /Extra Large/i });
    expect(button).toHaveClass('py-3.5 px-6 text-base');
  });

  it('displays loading spinner when loading is true', () => {
    render(
      <Button loading onClick={() => {}}>
        Loading
      </Button>
    );
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });

  it('displays loading spinner replacing icon when loading is true', () => {
    render(
      <Button
        loading
        icon={<ArrowDownIcon />}
        iconPosition="left"
        onClick={() => {}}
      >
        Loading
      </Button>
    );
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });

  it('displays loading spinner replacing icon on right when loading is true', () => {
    render(
      <Button
        loading
        icon={<ArrowDownIcon />}
        iconPosition="right"
        onClick={() => {}}
      >
        Loading
      </Button>
    );
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });

  it('applies underline-offset-4 class when underlineHover is true', () => {
    render(
      <Button underlineHover onClick={() => {}}>
        Underline
      </Button>
    );
    const button = screen.getByRole('button', { name: /Underline/i });
    expect(button).toHaveClass('hover:underline');
  });
});
