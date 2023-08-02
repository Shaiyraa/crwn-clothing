import { useContext } from 'react';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(ShoppingCartContext);

  const handleRemoveCartItem = () => removeItemFromCart(item);
  const handleAddCartItem = () => addItemToCart(item);
  const handleClearCartItem = () => clearItemFromCart(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={handleRemoveCartItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddCartItem}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> ${price}</BaseSpan>
      <RemoveButton onClick={handleClearCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
