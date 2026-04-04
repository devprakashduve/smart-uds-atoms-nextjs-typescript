import { render, screen, fireEvent } from '@testing-library/react';
import CustomLink from '.';

describe('CustomLink', () => {
    it('renders with default props', () => {
        render(<CustomLink text="Home" />);
        const link = screen.getByRole('link', { name: 'Home' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
        expect(link).toHaveAttribute('target', '_self');
    });

    it('renders with children', () => {
        render(<CustomLink><span>Child</span></CustomLink>);
        expect(screen.getByText('Child')).toBeInTheDocument();
    });

    it('renders with custom href and target', () => {
        render(<CustomLink text="Google" href="https://google.com" target="_blank" rel="noopener" />);
        const link = screen.getByRole('link', { name: 'Google' });
        expect(link).toHaveAttribute('href', 'https://google.com');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener');
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<CustomLink text="Click me" onClick={handleClick} href="#" />);
        const link = screen.getByRole('link', { name: 'Click me' });
        fireEvent.click(link);
        expect(handleClick).toHaveBeenCalled();
    });

    it('does not crash when onClick is undefined', () => {
        render(<CustomLink text="No Click" href="#" />);
        const link = screen.getByRole('link', { name: 'No Click' });
        expect(() => fireEvent.click(link)).not.toThrow();
    });

    it('applies underline classes correctly', () => {
        render(<CustomLink text="Underline" underline={true} underlineHover={false} />);
        const link = screen.getByRole('link', { name: 'Underline' });
        expect(link).toHaveClass('underline');
        expect(link).not.toHaveClass('hover:underline');
    });

    it('applies underlineHover classes correctly', () => {
        render(<CustomLink text="Hover" underline={false} underlineHover={true} />);
        const link = screen.getByRole('link', { name: 'Hover' });
        expect(link).not.toHaveClass('underline');
        expect(link).toHaveClass('hover:underline');
    });
});
