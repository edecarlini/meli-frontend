import { ButtonProps } from './interfaces/Button.interface';
import { btnAppearance, btnSize } from './utils/classes';

const Button = ({ children, onClick, appearence, size }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${btnAppearance[appearence]} ${btnSize[size]}`}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
