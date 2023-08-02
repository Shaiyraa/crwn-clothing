import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(ShoppingCartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total className="total">Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
