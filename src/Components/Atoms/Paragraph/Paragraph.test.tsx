import { render, screen } from '@testing-library/react';
import Paragraph from './index';

describe('Paragraph Component', () => {
  it('renders the Paragraph component with default props', () => {
    render(<Paragraph>Default Paragraph</Paragraph>);
    const paragraphElement = screen.getByText('Default Paragraph');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-paragraph';
    render(<Paragraph className={customClass}>Custom Paragraph</Paragraph>);
    const paragraphElement = screen.getByText('Custom Paragraph');
    expect(paragraphElement).toHaveClass(customClass);
  });

  it('renders with the correct text content', () => {
    const text = 'Test Paragraph';
    render(<Paragraph>{text}</Paragraph>);
    const paragraphElement = screen.getByText(text);
    expect(paragraphElement).toBeInTheDocument();
  });
});
