import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCardWithRating from './index';

const mockProps = {
  imageUrl: 'test-image-url',
  productName: 'Test Product',
  description: 'Test Description',
  rating: 4,
  reviewsCount: 100,
  onAddToCart: jest.fn(),
};

test('renders ProductCardWithRating with props', () => {
  render(<ProductCardWithRating {...mockProps} />);

  expect(screen.getByAltText(mockProps.productName)).toBeInTheDocument();
  expect(screen.getByText(mockProps.productName)).toBeInTheDocument();
  expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  expect(
    screen.getByText(`(${mockProps.reviewsCount} Reviews)`)
  ).toBeInTheDocument();
});

test('calls onAddToCart when button is clicked', () => {
  render(<ProductCardWithRating {...mockProps} />);

  fireEvent.click(screen.getByText('Add to Cart'));
  expect(mockProps.onAddToCart).toHaveBeenCalled();
});
