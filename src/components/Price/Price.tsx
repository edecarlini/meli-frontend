import useFormattedPrice from '@/hooks/FormattedPrice/useFormattedPrice';
import { PriceProps } from './interfaces/Price.interface';

const Price = ({ amount, currency }: PriceProps) => {
  const formattedPrice = useFormattedPrice({ amount, currency });

  return <span>{formattedPrice}</span>;
};

export default Price;
