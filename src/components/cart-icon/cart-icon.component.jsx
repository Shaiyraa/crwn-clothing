import { useContext } from 'react';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { toggleCart, cartCount } = useContext(ShoppingCartContext);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
