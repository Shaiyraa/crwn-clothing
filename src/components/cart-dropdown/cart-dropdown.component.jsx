import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => navigate('/checkout');

  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {/* <span className="empty-message">Your cart is empty</span> */}
      <Button onClick={handleGoToCheckout}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
