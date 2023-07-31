import { useContext } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {/* <span className="empty-message">Your cart is empty</span> */}
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
