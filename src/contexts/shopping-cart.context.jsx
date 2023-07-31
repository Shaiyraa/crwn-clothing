const { createContext, useState, useEffect } = require('react');

export const ShoppingCartContext = createContext({
  open: false,
  toggleCart: () => {},
  cartItems: [],
  cartCount: 0,
});

export const ShoppingCartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const toggleCart = () => setOpen(!open);

  const addItemToCart = (product) => {
    if (cartItems.find((cartItem) => cartItem.id === product.id)) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ open, toggleCart, cartItems, addItemToCart, cartCount }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
