import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
