import { useContext } from 'react';

import Button, { BUTTON_TYPES } from '../button/button.component';

import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(ShoppingCartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
