import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { toggleCart, cartCount } = useContext(ShoppingCartContext);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
