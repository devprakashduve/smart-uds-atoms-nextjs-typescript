import React from 'react';
import { render, screen } from '@testing-library/react';
import EcommerceTemplate from './index';

describe('EcommerceTemplate', () => {
  const mockProps = {
    logo: <div data-testid="logo">Logo</div>,
    searchBar: <div data-testid="search">Search</div>,
    cart: <div data-testid="cart">Cart</div>,
    userMenu: <div data-testid="user">User</div>,
    navigation: <div data-testid="nav">Nav</div>,
    hero: <div data-testid="hero">Hero</div>,
    filters: <div data-testid="filters">Filters</div>,
    products: <div data-testid="products">Products</div>,
    footer: <div data-testid="footer">Footer</div>,
  };

  it('renders all slots correctly', () => {
    render(<EcommerceTemplate {...mockProps} />);
    
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getAllByTestId('search')[0]).toBeInTheDocument();
    expect(screen.getByTestId('cart')).toBeInTheDocument();
    expect(screen.getByTestId('user')).toBeInTheDocument();
    expect(screen.getByTestId('nav')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('filters')).toBeInTheDocument();
    expect(screen.getByTestId('products')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders without optional slots', () => {
    // Only required (if any, but interface says all are optional except logo in some cases? 
    // Actually our interface has most as optional ReactNode)
    render(<EcommerceTemplate logo={<div>Logo</div>} products={<div>Products</div>} />);
    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
