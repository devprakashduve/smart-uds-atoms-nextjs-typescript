export interface ShoppingCartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export interface ShoppingCartProps {
  items: ShoppingCartItemProps[];
  onUpdateQuantity: (id: string, quantity: number) => void; // Handler to update quantity
  onRemoveItem: (id: string) => void; // Handler to remove item from cart
  onCheckout: () => void; // Handler for the checkout process
}
