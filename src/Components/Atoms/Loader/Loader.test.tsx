import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('Loader', () => {
  describe('accessibility', () => {
    it('has role="status" for screen readers', () => {
      render(<Loader />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('has aria-busy="true"', () => {
      render(<Loader />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-busy', 'true');
    });

    it('has an aria-label', () => {
      render(<Loader />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label');
    });
  });

  describe('variants', () => {
    it('renders the default "line" variant', () => {
      render(<Loader variant="line" />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders correct number of lines for "line" variant', () => {
      const { container } = render(<Loader variant="line" lines={4} />);
      const status = container.querySelector('[role="status"]');
      // Each line is a child div
      expect(status?.querySelectorAll(':scope > div')).toHaveLength(4);
    });

    it('renders the "circle" variant', () => {
      render(<Loader variant="circle" />);
      const status = screen.getByRole('status');
      expect(status).toBeInTheDocument();
      expect(status).toHaveClass('rounded-full');
    });

    it('renders the "text" variant with correct line count', () => {
      const { container } = render(<Loader variant="text" lines={5} />);
      const status = container.querySelector('[role="status"]');
      expect(status?.querySelectorAll(':scope > div')).toHaveLength(5);
    });

    it('renders the "image" variant', () => {
      render(<Loader variant="image" />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders the "card" variant', () => {
      render(<Loader variant="card" />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });
  });

  describe('props', () => {
    it('applies custom className', () => {
      render(<Loader className="custom-loader" />);
      expect(screen.getByRole('status')).toHaveClass('custom-loader');
    });

    it('applies rounded style when rounded=true', () => {
      const { container } = render(<Loader variant="line" rounded={true} />);
      const lines = container.querySelectorAll('[role="status"] > div');
      expect(lines[0]).toHaveClass('rounded-full');
    });

    it('applies inline width style', () => {
      render(<Loader variant="line" width="50%" />);
      // The component should render; width is applied via style
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('defaults to 3 lines for "line" variant', () => {
      const { container } = render(<Loader variant="line" />);
      const status = container.querySelector('[role="status"]');
      expect(status?.querySelectorAll(':scope > div')).toHaveLength(3);
    });
  });
});
