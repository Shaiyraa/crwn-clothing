const { createContext, useState } = require('react');

export const ShoppingCartContext = createContext({
  open: false,
  toggleCart: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleCart = () => setOpen(!open);

  return (
    <ShoppingCartContext.Provider value={{ open, toggleCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
