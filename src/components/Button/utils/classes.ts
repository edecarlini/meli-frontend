import styles from '../Button.module.css';

export type Appearance = 'primary' | 'secondary';

export type Size = 'lg' | 'md' | 'sm';

export const btnAppearance: { [key in Appearance]: string } = {
  primary: styles['button-primary'],
  secondary: styles['button-secondary'],
};

export const btnSize: { [key in Size]: string } = {
  lg: styles['button-size-lg'],
  md: styles['button-size-md'],
  sm: styles['button-size-sm'],
};
