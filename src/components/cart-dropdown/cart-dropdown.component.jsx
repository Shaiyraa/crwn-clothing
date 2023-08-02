import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => navigate('/checkout');

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
