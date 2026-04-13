import { render, screen, fireEvent } from '@testing-library/react';
import Rating from '.';

describe('Rating Component', () => {
  it('renders correct number of stars', () => {
    render(<Rating rating={3} maxRating={5} />);
    const stars = screen.getAllByRole('button');
    expect(stars).toHaveLength(5);
  });

  it('renders with default maxRating of 5', () => {
    render(<Rating rating={3} />);
    const stars = screen.getAllByRole('button');
    expect(stars).toHaveLength(5);
  });

  it('highlights stars correctly based on rating', () => {
    render(<Rating rating={3} />);
    const stars = screen.getAllByRole('button');

    // Stars 0, 1, 2 should be highlighted (text-atom-rating-light -> yellow/filled)
    // Stars 3, 4 should be dark (text-atom-rating-dark -> empty)

    // Note: Component uses classNames.
    // 0 < 3 -> true. 'text-atom-rating-light'
    // 3 < 3 -> false. 'text-atom-rating-dark' (implied by default class usually, but component logic:
    // `text-atom-rating-dark ${index < rating ? 'text-atom-rating-light' : ''}`.
    // Wait, if base is 'text-atom-rating-dark', adding 'text-atom-rating-light' might override?
    // Let's check for class presence.

    expect(stars[0]).toHaveClass('text-atom-rating-light');
    expect(stars[1]).toHaveClass('text-atom-rating-light');
    expect(stars[2]).toHaveClass('text-atom-rating-light');

    expect(stars[3]).not.toHaveClass('text-atom-rating-light');
    expect(stars[3]).toHaveClass('text-atom-rating-dark');
  });

  it('handles interaction when interactive', () => {
    const handleChange = jest.fn();
    render(
      <Rating rating={0} isInteractive={true} onRatingChange={handleChange} />
    );
    const stars = screen.getAllByRole('button');

    // Click 3rd star (index 2) -> Rating 3
    fireEvent.click(stars[2]);
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('does not handle interaction when not interactive', () => {
    const handleChange = jest.fn();
    render(
      <Rating rating={0} isInteractive={false} onRatingChange={handleChange} />
    );
    const stars = screen.getAllByRole('button');

    fireEvent.click(stars[2]);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Rating rating={0} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
