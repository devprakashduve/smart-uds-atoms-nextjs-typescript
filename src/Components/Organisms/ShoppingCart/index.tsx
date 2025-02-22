import React from 'react';

import {
  ShoppingCartProps,
  ShoppingCartItemProps,
} from './ShoppingCartProps.interface';

import './ShoppingCart.css';

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      onUpdateQuantity(id, quantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    onRemoveItem(id);
  };

  const calculateTotal = (): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <h2 className="mb-4 text-xl font-bold">Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item: ShoppingCartItemProps) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.name}</h3>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-item-quantity">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-item"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <p className="total-price">Total: ${calculateTotal().toFixed(2)}</p>
        <button className="checkout-btn" onClick={onCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
