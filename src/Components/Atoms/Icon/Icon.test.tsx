import { render } from '@testing-library/react';
import Icon from '.';

describe('Icon Component', () => {
  it('renders Facebook icon', () => {
    // Facebook icon has no title/role but is an svg. We can check by container or internal path data?
    // Or we can check if it renders an SVG.
    const { container } = render(<Icon name="facebook" />);
    // Check if svg exists
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // Maybe check unique path substring?
    expect(container.innerHTML).toContain('M18 2h-3a5');
  });

  it('renders Twitter icon', () => {
    const { container } = render(<Icon name="twitter" />);
    expect(container.innerHTML).toContain('M23 3a10.9');
  });

  it('renders Instagram icon', () => {
    const { container } = render(<Icon name="instagram" />);
    expect(container.innerHTML).toContain('M16 11.37');
  });

  it('renders LinkedIn icon', () => {
    const { container } = render(<Icon name="linkedin" />);
    expect(container.innerHTML).toContain('M16 8a6');
  });

  it('renders YouTube icon', () => {
    const { container } = render(<Icon name="youtube" />);
    expect(container.innerHTML).toContain('M23,11.9972');
  });

  it('renders outline variant icon (default)', () => {
    // 'search' is in both outline and solid map.
    // Outline search icon (Heroicons) path data vs Solid path data?
    // Outline usually has stroke (fill="none"), Solid has fill (stroke="none" or minimal).
    const { container } = render(<Icon name="search" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders solid variant icon', () => {
    const { container } = render(<Icon name="search" variant="solid" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Icon name="search" className="custom-class" />
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('renders various other icons to cover map references', () => {
    // We don't need to test every single icon if we trust the map lookup,
    // but validating that map lookup works for a few samples is good.
    render(<Icon name="bell" />);
    render(<Icon name="close" />);
    render(<Icon name="chevronDown" variant="solid" />);
    // Should not throw.
  });

  it('returns null for invalid icon name', () => {
    const { container } = render(<Icon name="invalid-icon-name" />);
    expect(container).toBeEmptyDOMElement();
  });
});
