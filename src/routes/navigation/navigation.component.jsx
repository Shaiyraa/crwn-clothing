import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { ShoppingCartContext } from '../../contexts/shopping-cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  LogoContainerLink,
  NavLinks,
  NavLink,
  NavSpan,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { open } = useContext(ShoppingCartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainerLink to="/">
          <Logo className="logo" />
        </LogoContainerLink>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavSpan onClick={signOutUser}>SIGN OUT</NavSpan>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>

        {open && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
