import { useContext } from 'react';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(ShoppingCartContext);

  const handleRemoveCartItem = () => removeItemFromCart(item);
  const handleAddCartItem = () => addItemToCart(item);
  const handleClearCartItem = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveCartItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddCartItem}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleClearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
