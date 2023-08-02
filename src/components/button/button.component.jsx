import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPES = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES.base) => {
  const buttonMap = {
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleSignInButton,
    [BUTTON_TYPES.inverted]: InvertedButton,
  };

  return buttonMap[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
