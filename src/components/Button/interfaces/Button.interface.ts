export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  appearence: 'primary' | 'secondary';
  size: 'lg' | 'md' | 'sm';
}
